const _API_KEY_PROMISE = fetch('privateData.json')
.then(data => data.json())
.then(data => {
    return data._API_KEY;
})
const _baseUrl = 'https://api.themoviedb.org/3';
const _baseImgUrl = 'https://image.tmdb.org';
const _query1 = `${_baseUrl}/discover/movie?api_key=${_API_KEY}&primary_release_date.gte=${dateGte}&primary_release_date.lte=${dateLte}&sort_by=primary_release_date.asc`;
const _query2 = `${_baseUrl}/discover/movie?api_key=${_API_KEY}&page=${page}`; 
// _API_KEY.then(result => console.log(result));

// async function getPopulars(_API_KEY, page){
//     return await fetch(`${_baseUrl}/discover/movie?api_key=${_API_KEY}&sort_by=popularity.desc&page=${page}`)
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data);
//         return data.results;
//     });
// }
function logConfigurationData(){
    fetch(`${_baseUrl}/configuration?api_key=${_API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
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
        const {id, title, poster_path, release_date} = movie;
        const div = document.createElement('div');
        const img = document.createElement('img');
        const imgText = document.createElement('div');
        imgText.innerHTML = `${title}<br>${release_date}`;
        div.classList.add('imgDiv');
        img.src = `${_baseImgUrl}/t/p/${width}${poster_path}`;
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
    const currentDateString = currentDate.toISOString().slice(0,10);
    const earlierDateString = earlierDate.toISOString().slice(0,10);
    const page = 1;
    const data = await getMovies(_API_KEY, page, currentDateString, currentDateString);
    console.log(data);
    displayMovies(data);
    console.log(currentDate);
    console.log(earlierDate);
    // console.log(Date.now().toISOString());
}

main();