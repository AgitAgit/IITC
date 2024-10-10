const _alterImage = document.getElementById('alternatingImg');

function handleApiClick(event=null, random=null){
    let api;
    if(random){
        api = random;
    }
    else if(event){
        console.log(event.target.name);
        api = event.target.name;
    }
    else if(!event){
        _alterImage.src = "https://cataas.com/cat";
    }
    if(api === 'api1'){
        fetch('https://cataas.com/cat')
        .then(response => {
            return response.blob();
        })
        .then(blob => {
            const imgUrl = URL.createObjectURL(blob);
            _alterImage.src = imgUrl;
            //URL.revokeObjectURL(imgUrl);
        })
        .catch(error => console.log(error));
    }
    else if(api === 'api2'){
        const objId = Math.ceil(Math.random() * 5000) + 6000;
        console.log("objId:",objId);
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objId}`)
            .then(response => {
                const data = response.json();
                return data;
            })
            .then(data => {
                console.log("image data:",data);
                let url = data.primaryImage;
                console.log(url)
                if(!url){
                    // url = 'https://images.metmuseum.org/CRDImages/ad/original/140813.jpg';
                    url = "https://images.metmuseum.org/CRDImages/ad/original/24516.jpg";
                }
                _alterImage.src = url;
            })
            .catch(error => {
                console.log(error);
            })
        console.log('api2');
    }
    else if(api === 'api3'){
        console.log('api3');
    }
    else if(api === 'api4'){
        console.log('api4');
    }
    else if(api === 'api5'){
        console.log('api5');
    }
    else if(api === 'api6'){
        const rand = Math.ceil(Math.random() * 5);
        handleApiClick(null, `api${rand}`);
    }
}
handleApiClick();