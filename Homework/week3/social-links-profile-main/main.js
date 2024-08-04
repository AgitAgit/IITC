const mainDiv = document.getElementById("mainDiv");

function btn(name, link){
    this.name = name;
    this.link = link;
}

let buttons = [new btn("Github","www.example.com"),new btn("linkedin","www.example.com")];

function init(){
    for(const button of buttons){
        let btn = document.createElement('button');
        btn.textContent = button.name;
        mainDiv.appendChild(btn);
    }
}

init();