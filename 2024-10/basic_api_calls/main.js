const _alterImage = document.getElementById('alternatingImg');
// const _gif = document.querySelector('.tenor-gif-embed');
const _gif = document.querySelector('#gifWrapper');

function handleApiClick(event=null, random=null){
    _gif.classList.remove('hidden');
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
        _alterImage.classList.toggle('hidden');
        fetch('https://cataas.com/cat')
        .then(response => {
            return response.blob();
        })
        .then(blob => {
            const imgUrl = URL.createObjectURL(blob);
            _alterImage.src = imgUrl;
            //URL.revokeObjectURL(imgUrl);
            _alterImage.classList.toggle('hidden');
            _gif.classList.add('hidden');
        })
        .catch(error => console.log(error));
    }
    else if(api === 'api2'){
        _alterImage.classList.toggle('hidden');
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
                _alterImage.classList.toggle('hidden');
                _gif.classList.add('hidden');
            })
            .catch(error => {
                console.log(error);
            })
    }
    else if(api === 'api3'){
        //https://api.waifu.pics/sfw/waifu
        _alterImage.classList.toggle('hidden');
        fetch('https://api.waifu.pics/sfw/bonk')
            .then(result => {
                const data = result.json();
                return data;
            })
            .then(data => {
                const url = data.url;
                _alterImage.src = url;
                _alterImage.classList.toggle('hidden');
                _gif.classList.add('hidden');
            })
    }
    else if(api === 'api4'){
        _alterImage.classList.toggle('hidden');
        fetch('https://foodish-api.com/api/')
            .then(result => {
                const data = result.json();
                return data;
            })
            .then(data => {
                const url = data.image;
                _alterImage.src = url;
                _alterImage.classList.toggle('hidden');
                _gif.classList.add('hidden');
            })
    }
    else if(api === 'api5'){
        _alterImage.classList.toggle('hidden');
        fetch('https://api.waifu.pics/sfw/waifu')
            .then(result => {
                const data = result.json();
                return data;
            })
            .then(data => {
                const url = data.url;
                _alterImage.src = url;
                _alterImage.classList.toggle('hidden');
                _gif.classList.add('hidden');
            })

    }
    else if(api === 'api6'){
        const rand = Math.ceil(Math.random() * 5);
        handleApiClick(null, `api${rand}`);
    }
}
// handleApiClick();