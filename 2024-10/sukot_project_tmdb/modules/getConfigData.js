export default function logConfigurationData(_baseUrl, _API_KEY){
    fetch(`${_baseUrl}/configuration?api_key=${_API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}
