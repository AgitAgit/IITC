// add a filter for n.o. votes so the order by score will have meaning?

let _API_KEY;
let _KEY_READY = false;
const _API_KEY_PROMISE = fetch('privateData.json')
.then(data => data.json())
.then(data => {
    _API_KEY = data._API_KEY;
    _KEY_READY = true;
    return data._API_KEY;
})
const _baseUrl = 'https://api.themoviedb.org/3';
const _baseImgUrl = 'https://image.tmdb.org';

const _sortSelect = document.querySelector('#sortSelect');
const _orderSelect = document.querySelector('#orderSelect');

const _paginationDivs = document.querySelectorAll('.paginationDiv');

function logConfigurationData(){
    fetch(`${_baseUrl}/configuration?api_key=${_API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}

async function handlePaginationClick(event){
    console.log('handlePaginationClick triggered...');
    const buttonText = event.target.textContent;
    navToPage(parseInt(buttonText));
}
async function navToPage(page){
    if(page < 1 || 500 < page) return;
    const query = buildQuery(page);//FOR REFACTOR:this trio of call often appear together. should be made into a function.
    const movies = await getMovies(query);
    displayMovies(movies);
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
function refreshPaginationDiv(currentPage, itemCount, pageCount){
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

function buildQuery(page){
    //sort by: (popularity/vote_average/title/original_title/primary_release_date/vote_count/revenue).desc/asc
    let result = `${_baseUrl}/discover/movie?api_key=${_API_KEY}`;
    
    let sortBy;
    let orderBy;
    if(_orderSelect.value === 'Descending') orderBy = '.desc';
    else orderBy = '.asc';

    const text = _sortSelect.value;
    if(text==='popularity') sortBy = 'popularity';
    else if(text === 'title') sortBy = 'title';
    else if(text === 'score') sortBy = 'vote_average';
    else if(text === 'vote count') sortBy = 'vote_count';
    else if(text === 'release date') sortBy = 'primary_release_date';
    
    sortBy += orderBy;
    
    //if(fromDate) result += `&primary_release_date.gte=${fromDate?.toISOString().slice(0,10)}`;
    //if(toDate) result += `&primary_release_date.lte=${toDate?.toISOString().slice(0,10)}`;
    if(sortBy) result += `&sort_by=${sortBy}`;
    if(page) result += `&page=${page}`;
    return result;
}

async function getMovies(query){
    return await fetch(query)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const {page, total_results, total_pages} = data;
        refreshPaginationDiv(page, total_results, total_pages);
        return data.results;
    });
}

function displayMovies(movies){
    const display = document.querySelector('.moviesDisplay');
    display.innerHTML = '';
    const width = 'w185';
    movies.forEach(movie => {
        const {id, title, poster_path, release_date, vote_average, vote_count} = movie;
        const div = document.createElement('div');
        const img = document.createElement('img');
        const imgText = document.createElement('div');
        
        div.classList.add('imgDiv');
        img.src = `${_baseImgUrl}/t/p/${width}${poster_path}`;
        imgText.innerHTML = `${title}<br>score: ${vote_average/2}/5 (${vote_count} votes)<br>${release_date}`;
        
        div.appendChild(img);
        div.appendChild(imgText);
        display.appendChild(div);
    })
}
async function handleSearchConfigChange(){
    // const sort = document.querySelector('#sortChange');
    //sort by: (popularity/vote_average/title/original_title/primary_release_date/vote_count/revenue).desc/asc
    if(_KEY_READY){
        const query = buildQuery();
        const movies = await getMovies(query);
        displayMovies(movies);
    }
}

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