// add a filter for n.o. votes so the order by score will have meaning?
// this would require complex querying or data keeping in a separate location.

// I should break this down into modules...
// I should create some logo for my projects and github.

//should separate into search mode and filter mode.
//annoying that they are separate but that is the api provided.
//I could either copy the data to my own db and query it however I like,
//or create the illusion of such search by complex queries
//to the api.
//Both of these options are outside the scope of this exercise.

//need to add a default image DONE.

// add the github symbol with a link to the footer and the about page? 
//That can wait to the finishing touches.

let _API_KEY;
let _KEY_READY = false;
let _SEARCH_METHOD = 'filter';
let _current_search_query = '';

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

const _moviesDisplayWrapper = document.querySelector('.moviesDisplayWrapper');

const _searchInput = document.querySelector('#searchInput');
const _searchBtn = document.querySelector('#searchBtn');

const _sortSelect = document.querySelector('#sortSelect');
const _orderSelect = document.querySelector('#orderSelect');
const _fromDate = document.querySelector('#fromDate');
const _toDate = document.querySelector('#toDate');

const _paginationDivs = document.querySelectorAll('.paginationDiv');

const _singleMovieDisplay = document.querySelector('.singleMovieDisplay');
const _favoritesPage = document.querySelector('.favoritesPage');
const _aboutPage = document.querySelector('.aboutPage');

const _displays = [_moviesDisplayWrapper, _singleMovieDisplay, _favoritesPage, _aboutPage];

//miscellaneous methods
function logConfigurationData(){
    fetch(`${_baseUrl}/configuration?api_key=${_API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}

function handleHomeClick(){
    switchDisplayTo(_moviesDisplayWrapper);
    _SEARCH_METHOD = 'filter';
    handleSearchConfigChange();
}

function handleFavoritesClick(){
    switchDisplayTo(_favoritesPage);
    displayMovies(_favorites, _favoritesPage);
    // console.log(_favorites);
}

function handleAboutClick(){
    switchDisplayTo(_aboutPage);
}

function handleLikeClick(event, movie){
    event.stopPropagation();

    if(_favorites.indexOf(movie) !== -1){
        // console.log('favorites includes movie');
        removeFromFavorites(movie);
    }
    else{
        // console.log('favorites doesnt include movie');
        addToFavorites(movie);
    }
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
        const query = buildQuery(page);//FOR REFACTOR:this trio of call often appear together. should be made into a function.
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
    console.log(movies);
    let display;
    if(displayElement) display = displayElement;
    else display = document.querySelector('.moviesDisplay');
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

        imgText.innerHTML = `${title}<br>score: ${vote_average/2}/5 (${vote_count} votes)<br>${release_date}`;
        likeButton.textContent = '🤍';
        likeButton.addEventListener('click', (event) => handleLikeClick(event, movie));

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
    _displays.forEach(display => display.classList.add('hidden'));
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

    if(text==='popularity') sortBy = 'popularity';
    else if(text === 'title') sortBy = 'title';
    else if(text === 'score') sortBy = 'vote_average';
    else if(text === 'vote count') sortBy = 'vote_count';
    else if(text === 'release date') sortBy = 'primary_release_date';
    
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

function restoreFilterDefault(){

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

    const movies = await searchMovies(query);
    displayMovies(movies);
}



//single movie methods
function handleMovieClick(movie){
    const { backdrop_path, genre_ids, id, original_language, title, overview, poster_path, release_date, vote_average, vote_count} = movie
    // _moviesDisplayWrapper.classList.toggle('hidden');
    // _singleMovieDisplay.classList.toggle('hidden');
    switchDisplayTo(_singleMovieDisplay);
    
    // const backButton = document.createElement('button');
    const posterImg = document.createElement('img');
    const backDropImg = document.createElement('img');

    const width = 'w185';

    // backButton.textContent = 'go back';
    // backButton.addEventListener('click', handleGoBackClick);
    posterImg.src = `${_baseImgUrl}/t/p/${width}${poster_path}`;
    backDropImg.src = `${_baseImgUrl}/t/p/${width}${backdrop_path}`;
    _singleMovieDisplay.innerHTML = 
    `<button onclick="handleGoBackClick()">go back</button>
    <br>
    ${title}
    <br>
    overview: ${overview}
    <br>`;//remove old content;
    _singleMovieDisplay.appendChild(posterImg);
    _singleMovieDisplay.appendChild(backDropImg);
}
function handleGoBackClick(){
    // _moviesDisplayWrapper.classList.toggle('hidden');
    // _singleMovieDisplay.classList.toggle('hidden');
    switchDisplayTo(_moviesDisplayWrapper);
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
    // console.log('removed from favorites:',movie);
    localStorage.setItem('sukkotFavorites', JSON.stringify(_favorites));
}



//main
async function main(){
    const currentDate = new Date();
    await _API_KEY_PROMISE;
    const earlierDate = new Date(currentDate);
    earlierDate.setDate(currentDate.getDate() - 7);
    const query1 = buildQuery(_API_KEY, 'primary_release_date.asc');
    const query2 = buildQuery(_API_KEY,null,null,null,null);
    // const data = await getMovies(query1);
    // console.log(data);
    // displayMovies(data);
    handleSearchConfigChange();
}

main();