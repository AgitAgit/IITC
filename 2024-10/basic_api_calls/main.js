const alterImage = document.getElementById('alternatingImg');

function handleApiClick(event){
    if(event){
        console.log(event.target.name);
    }
    
    fetch('https://cataas.com/cat')
    .then(response => {
        return response.blob();
    })
    .then(blob => {
        const imgUrl = URL.createObjectURL(blob);
        alterImage.src = imgUrl;
        //URL.revokeObjectURL(imgUrl);
    })
    .catch(error => console.log(error));
}
handleApiClick();