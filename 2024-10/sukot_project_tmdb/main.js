// add a filter for n.o. votes so the order by score will have meaning?
// this would require complex querying or data keeping in a separate location.

// I should break this down into modules...
// I should create some logo for my projects and github.

//need to add a default image DONE.

// add the github symbol with a link to the footer and the about page? 
//That can wait to the finishing touches. DONE.

//back button should return to the correct y scroll position. DONE.

//design the single movie display... DONE.

//the back button from the favorites page single movie should return to the favorites page. DONE.

//the movies in the last row are displayed with a different amount if the number of items is not divisible
//by the number of columns. Possible solutions:
//add a page_size parameter to the api queries
//display with grid instead of flex? lets try that for the favorites and see what happens. DONE.

//the favorites page doesn't disappear when clicking home. Need to add a wrapper. FIXED.

//Need to fix style of like button. DONE.

//There is no pagination system for the favorites page.
//There is no handling of pagination state for less than 7 pages?

//Need to check refresh view for the search state... fixed. DONE.

//Need to make the single page view responsive for different screen sizes. DONE.

//Need to deal with the whole module problem. remove the event listeners from the html and add
//them to the js.   DONE.

//options for finishing touches:
//-Add Error messages like "failed to get data" and "no favorites have been added"  DONE.
//-Add light/dark mode.
//-Add like button to the single movie card view.
//-For larger screen sizes get a larger image for the single movie card.
//-Add comments/order to the css file

//If I would want to refactor this I could:
//-take out much of the logic in the search and filter handling, and putting it in
//more fitting places so the code is more modular.

//If I would want to develop this furter I could:
//-change the favorites storage method from whole objects to id's, and get the favorites by id from the db.
//(currently, things like the favorites votes number and score are true to the time of the like.
//"old" favorites will be out of date on those fronts...).
//-change the favorites storage location from local storage to a db.
//-add a login and user data tracking system.
// interact with the tmdb and get user data (sort of creating a wrapper for tmdb?)
//-Add a way for users to vote on movies?
//-combine the search and filter parameters so users can search with parameters.

import logConfigurationData from "./modules/getConfigData.js";

let _API_KEY;
let _KEY_READY = false;

const _API_KEY_PROMISE = fetch('privateData.json')
.then(data => data.json())
.then(data => {
    _API_KEY = data._API_KEY;
    _KEY_READY = true;
    return data._API_KEY;
})
let _favorites = JSON.parse(localStorage.getItem('sukkotFavorites')) || [];

const _baseUrl = 'https://api.themoviedb.org/3';
const _baseImgUrl = 'https://image.tmdb.org';
const _defaultImgUrl = './assets/pexels-neosiam-603580.jpg';

const _homeBtn = document.querySelector('#homeBtn');
const _favoritesBtn = document.querySelector('#favoritesBtn');
const _aboutBtn = document.querySelector('#aboutBtn');

_homeBtn.addEventListener('click', handleHomeClick);
_favoritesBtn.addEventListener('click', handleFavoritesClick);
_aboutBtn.addEventListener('click', handleAboutClick);

const _moviesDisplayWrapper = document.querySelector('.moviesDisplayWrapper');

const _searchInput = document.querySelector('#searchInput');
const _searchBtn = document.querySelector('#searchBtn');
_searchBtn.addEventListener('click', handleSearchClick);


const _sortSelect = document.querySelector('#sortSelect');
const _orderSelect = document.querySelector('#orderSelect');
const _fromDate = document.querySelector('#fromDate');
const _toDate = document.querySelector('#toDate');
const _filterSearchBtn = document.querySelector('#filterSearchBtn');
_sortSelect.addEventListener('change', handleSearchConfigChange);
_orderSelect.addEventListener('change', handleSearchConfigChange);
_fromDate.addEventListener('change', handleSearchConfigChange);
_toDate.addEventListener('change', handleSearchConfigChange);
_filterSearchBtn.addEventListener('click', handleSearchConfigChange);


const _paginationDivs = document.querySelectorAll('.paginationDiv');

const _singleMovieDisplayWrapper = document.querySelector('.singleMovieDisplayWrapper');
const _singleMovieDisplay = document.querySelector('.singleMovieDisplay');
const _favoritesPageWrapper = document.querySelector('.favoritesPageWrapper');
const _favoritesPage = document.querySelector('.favoritesPage');
const _aboutPage = document.querySelector('.aboutPage');

const _displays = [_moviesDisplayWrapper, _singleMovieDisplayWrapper, _favoritesPageWrapper, _aboutPage];

let _former_display = _moviesDisplayWrapper;
let _SEARCH_METHOD = 'filter';
let _current_search_query = '';
let _last_Y_scroll = 0;

//miscellaneous methods
function handleHomeClick(){
    switchDisplayTo(_moviesDisplayWrapper);
    _SEARCH_METHOD = 'filter';
    handleSearchConfigChange();
}

function handleFavoritesClick(){
    switchDisplayTo(_favoritesPageWrapper);
    displayMovies(_favorites, _favoritesPage);
    // console.log(_favorites);
}

function handleAboutClick(){
    switchDisplayTo(_aboutPage);
}

async function handleLikeClick(event, movie){
    event.stopPropagation();
    console.log("search method", _SEARCH_METHOD);

    if(isLiked(movie)){
        console.log('favorites includes movie', movie.title, "will be removed");
        removeFromFavorites(movie);
    }
    else{
        console.log('favorites does not include movie', movie.title);
        addToFavorites(movie);
    }
    console.log(_favorites);

    refreshView();
}

function isLiked(movie){
    let result = false;
    _favorites.forEach(favorite => {
        if(favorite.id === movie.id){
            result = true;
        }    
    })
    return result;
}

async function refreshView(){
    _last_Y_scroll = window.scrollY;
    if(!_moviesDisplayWrapper.classList.contains('hidden')){
        if(_SEARCH_METHOD === 'filter'){
            await handleSearchConfigChange();
        }
        else{
            _searchInput.value = _current_search_query;
            await handleSearchClick();
            //might have a problem due to empty search string.
            //might have been solved for the pagination system earlier
        }
    }
    else if(!_favoritesPageWrapper.classList.contains('hidden')){
        await handleFavoritesClick();
    }
    window.scrollTo(0, _last_Y_scroll);
}

//pagination methods
async function handlePaginationClick(event){
    // console.log('handlePaginationClick triggered...');
    const buttonText = event.target.textContent;
    navToPage(parseInt(buttonText));
}

async function navToPage(page){
    if(page < 1 || 500 < page) return;
    let movies;
    if(_SEARCH_METHOD === 'filter'){
        const query = buildQuery(page);
        movies = await getMovies(query);
    }
    else if(_SEARCH_METHOD === 'search'){
        movies = await searchMovies(_current_search_query,page);
    }
    displayMovies(movies);
}

function refreshPaginationDiv(currentPage, itemCount, pageCount){
    window.scrollTo(0,0);

    if(pageCount > 500) pageCount = 500;
    _paginationDivs.forEach(paginator => {
        paginator.innerHTML = '';
        const leftButton = document.createElement('button');
        const rightButton = document.createElement('button');
        const firstButton = document.createElement('button');
        const lastButton = document.createElement('button');
        
        const buttons = [
            document.createElement('button'),
            document.createElement('button'),
            document.createElement('button'),
            document.createElement('button'),
            document.createElement('button')
        ];
        
        leftButton.textContent = '<';
        firstButton.textContent = '1';
        lastButton.textContent = `${pageCount}`;
        rightButton.textContent = '>';
        
        if(currentPage <= 3){
            for(let i = 2; i < buttons.length + 2; i++){
                buttons[i-2].textContent = `${i}`;
            }
        }
        else if(currentPage >= pageCount - 3){
            let counter = 0;
            for(let i = pageCount - 5; i < pageCount; i++){
                buttons[counter].textContent = `${i}`;
                counter++;
            }
        }    
        else{
            let counter = 0;
            for(let i = currentPage - 2; i < currentPage + 3; i++){
                buttons[counter].textContent = i;
                counter++;
            }
        }
        
        leftButton.addEventListener('click', () => navToPage(currentPage - 1));
        rightButton.addEventListener('click', () => navToPage(currentPage + 1));
        firstButton.addEventListener('click', (event) => handlePaginationClick(event));
        lastButton.addEventListener('click', (event) => handlePaginationClick(event));
        buttons.forEach(button => button.addEventListener('click', (event) => handlePaginationClick(event)));
        
        paginator.appendChild(leftButton);
        paginator.appendChild(firstButton);
        if(currentPage > 3){
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            paginator.appendChild(ellipsis);
        }
        for(let i = 0; i < 5; i++){
            paginator.appendChild(buttons[i]);
        }
        if(currentPage < pageCount - 3){
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            paginator.appendChild(ellipsis);
        }
        if(pageCount > 1) paginator.appendChild(lastButton);
        paginator.appendChild(rightButton);
    });
    buttonMarker(currentPage);//remove this after testing;
}



//display methods
function displayMovies(movies, displayElement = null){
    // console.log(movies);
    let display;
    if(displayElement) {
        display = displayElement;
    }
    else display = document.querySelector('.moviesDisplay');
    if(movies.length === 0){
        console.log(displayElement);
        display.innerHTML = 'There is no data to display...';
        return;
    }
    display.innerHTML = '';
    const width = 'w185';
    movies.forEach(movie => {
        const {id, title, poster_path, release_date, vote_average, vote_count} = movie;
        const div = document.createElement('div');
        const img = document.createElement('img');
        const imgText = document.createElement('div');
        const likeButton = document.createElement('button');
        
        div.classList.add('imgDiv');
        div.addEventListener('click', () => handleMovieClick(movie));

        if(poster_path === null) img.src = _defaultImgUrl;
        else img.src = `${_baseImgUrl}/t/p/${width}${poster_path}`;

        imgText.innerHTML = `${title}<br>score: ${(vote_average/2).toFixed(1)}/5 (${vote_count}&nbsp;votes)<br>${release_date}`;
        imgText.classList.add('imgText');
        if(isLiked(movie)){
            likeButton.textContent = '🧡';
        }
        else likeButton.textContent = '🤍';
        likeButton.addEventListener('click', (event) => handleLikeClick(event, movie));
        likeButton.classList.add('likeButton');

        div.appendChild(img);
        div.appendChild(imgText);
        div.appendChild(likeButton);
        display.appendChild(div);
    })
}

function buttonMarker(currentPage){
    _paginationDivs.forEach(div => {
        const buttons = div.querySelectorAll('button');
        buttons.forEach(button => {
            button.classList.remove('markedButton');
            if(currentPage === parseInt(button.textContent)) button.classList.add('markedButton');
        })
    })
}

function switchDisplayTo(element){
    _displays.forEach(display => {
        if(!display.classList.contains('hidden')) {
            _former_display = display;
            // console.log(display);
            // console.log(_former_display);
        }
        display.classList.add('hidden')
    });
    element.classList.remove('hidden');
}



//filter methods
function buildQuery(page){
    //sort by: (popularity/vote_average/title/original_title/primary_release_date/vote_count/revenue).desc/asc
    let result = `${_baseUrl}/discover/movie?api_key=${_API_KEY}`;
    
    let sortBy;
    let orderBy;

    const text = _sortSelect.value;
    const fromDate = _fromDate.value;
    const toDate = _toDate.value;
    
    if(_orderSelect.value === 'Descending') orderBy = '.desc';
    else orderBy = '.asc';

    if(text==='Popularity') sortBy = 'popularity';
    else if(text === 'Title') sortBy = 'title';
    else if(text === 'Score') sortBy = 'vote_average';
    else if(text === 'Vote count') sortBy = 'vote_count';
    else if(text === 'Release date') sortBy = 'primary_release_date';
    
    sortBy += orderBy;
    
    if(fromDate) result += `&primary_release_date.gte=${fromDate}`;
    if(toDate) result += `&primary_release_date.lte=${toDate}`;
    if(sortBy) result += `&sort_by=${sortBy}`;
    if(page) result += `&page=${page}`;
    return result;
}

async function getMovies(query){
    return await fetch(query)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        const {page, total_results, total_pages} = data;
        refreshPaginationDiv(page, total_results, total_pages);
        return data.results;
    });
}

async function handleSearchConfigChange(){
    // const sort = document.querySelector('#sortChange');
    //sort by: (popularity/vote_average/title/original_title/primary_release_date/vote_count/revenue).desc/asc
    _SEARCH_METHOD = 'filter';
    if(_KEY_READY){
        const query = buildQuery();
        const movies = await getMovies(query);
        displayMovies(movies);
    }
    
}

function restoreFilterDefault(){//not done...
}
    


//search methods
async function searchMovies(query, page = 1){
    if(_KEY_READY){
        return await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${_API_KEY}&query=${query}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            const {page, total_results, total_pages} = data;
            refreshPaginationDiv(page, total_results, total_pages);
            return data.results;
        })
    }
}

async function searchById(id){//not done...
    if(_KEY_READY){
        return await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            // const {page, total_results, total_pages} = data;
            // refreshPaginationDiv(page, total_results, total_pages);
            // return data.results;
        })
    }
}

async function handleSearchClick(){
    _SEARCH_METHOD = 'search';
    const query = _searchInput.value;
    _current_search_query = query;
    _searchInput.value = '';
    if(query !== ''){
        const movies = await searchMovies(query);
        displayMovies(movies);
    }
}



//single movie methods
function handleMovieClick(movie){
    const { backdrop_path, genre_ids, id, original_language, title, overview, poster_path, release_date, vote_average, vote_count} = movie

    _last_Y_scroll = window.scrollY;    

    switchDisplayTo(_singleMovieDisplayWrapper);
    _singleMovieDisplayWrapper.innerHTML = '';
    _singleMovieDisplayWrapper.appendChild(_singleMovieDisplay);
    _singleMovieDisplay.innerHTML = '';

    const textDiv = document.createElement('div');
    const backButton = document.createElement('button');
    const posterImg = document.createElement('img');
    const backDropImg = document.createElement('img');

    const width = 'w185';
    const backdropWidth = 'w342';

    backButton.textContent = 'go back';
    backButton.addEventListener('click', handleGoBackClick);
    posterImg.src = `${_baseImgUrl}/t/p/${width}${poster_path}`;
    backDropImg.src = `${_baseImgUrl}/t/p/${backdropWidth}${backdrop_path}`;
    textDiv.classList.add('singleMovieTextDiv');
    textDiv.innerHTML = 
    `
    <div class="miniHeader">${title}</div>
    ${overview}
    <br>
    <br>
    Release date: ${release_date}
    <br>
    Score: ${(vote_average/2).toFixed(1)}/5
    <br>
    Votes: ${vote_count}
    `;
    // _singleMovieDisplay.appendChild(posterImg);
    _singleMovieDisplay.appendChild(backButton);
    _singleMovieDisplay.appendChild(backDropImg);
    _singleMovieDisplay.appendChild(textDiv);
}
function displaySingleMovie(movie){

}
function handleGoBackClick(){
    switchDisplayTo(_former_display);
    window.scrollTo(0, _last_Y_scroll);
}



//storage methods
function addToFavorites(movie){
    for(let i = 0; i < _favorites.length; i++){
        if(_favorites[i].id === movie.id) return;
    }
    _favorites.push(movie);
    // console.log('added to favorites:',movie);
    localStorage.setItem('sukkotFavorites', JSON.stringify(_favorites));
}

function removeFromFavorites(movie){
    _favorites = _favorites.filter(favorite => favorite.id !== movie.id);
    localStorage.setItem('sukkotFavorites', JSON.stringify(_favorites));
}


//main
async function main(){
    const currentDate = new Date();
    await _API_KEY_PROMISE;
    
    //logConfigurationData(_baseUrl, _API_KEY);
    handleSearchConfigChange();
}

main();