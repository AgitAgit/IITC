const _API_KEY_PROMISE = fetch('privateData.json')
.then(data => data.json())
.then(data => {
    return data._API_KEY;
})
const _baseUrl = 'https://api.themoviedb.org/3';

// _API_KEY.then(result => console.log(result));

//
async function main(){
    const _API_KEY = await _API_KEY_PROMISE;
    fetch(`${_baseUrl}/movie/popular?api_key=${_API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

    // fetch(`${_baseUrl}/configuration?api_key=${_API_KEY}`)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    // })
}

main();