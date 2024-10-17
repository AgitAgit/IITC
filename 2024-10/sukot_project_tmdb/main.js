const _API_KEY_PROMISE = fetch('privateData.json')
.then(data => data.json())
.then(data => {
    return data._API_KEY;
})
const _baseUrl = 'https://api.themoviedb.org/3';
const _baseImgUrl = 'https://image.tmdb.org';

function logConfigurationData(){
    fetch(`${_baseUrl}/configuration?api_key=${_API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}

function buildQuery(_API_KEY, sortBy, page, fromDate, toDate){
    //sort by: (popularity/vote_average/title/original_title/primary_release_date/vote_count/revenue).desc/asc
    let result = `${_baseUrl}/discover/movie?api_key=${_API_KEY}`;
    if(fromDate) result += `&primary_release_date.gte=${fromDate?.toISOString().slice(0,10)}`;
    if(toDate) result += `&primary_release_date.lte=${toDate?.toISOString().slice(0,10)}`;
    if(sortBy) result += `&sort_by=${sortBy}`;
    if(page) result += `&page=${page}`;
    return result;
}

async function getMovies(query){
    return await fetch(query)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data.results;
    });
}

function displayMovies(movies){
    const display = document.querySelector('.moviesDisplay');
    const width = 'w185';
    movies.forEach(movie => {
        const {id, title, poster_path, release_date, vote_average} = movie;
        const div = document.createElement('div');
        const img = document.createElement('img');
        const imgText = document.createElement('div');
        
        div.classList.add('imgDiv');
        img.src = `${_baseImgUrl}/t/p/${width}${poster_path}`;
        imgText.innerHTML = `${title}<br>score: ${vote_average/2}/5<br>${release_date}`;
        
        div.appendChild(img);
        div.appendChild(imgText);
        display.appendChild(div);
    })
}

async function main(){
    const currentDate = new Date();
    const _API_KEY = await _API_KEY_PROMISE;
    const earlierDate = new Date(currentDate);
    earlierDate.setDate(currentDate.getDate() - 7);
    const query1 = buildQuery(_API_KEY, 'primary_release_date.asc');
    const query2 = buildQuery(_API_KEY,null,null,null,null);
    const data = await getMovies(query1);
    console.log(data);
    displayMovies(data);
}

main();