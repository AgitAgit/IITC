const mainDiv = document.getElementById("mainDiv");

function btn(name, link){
    this.name = name;
    this.link = link;
}

let buttons = [new btn("Github","https://github.com/AgitAgit/IITC/tree/8f58c3d839b17497b3de4bf9dd868171e90b88b0/Homework/week3/social-links-profile-main"),
                new btn("Linkedin","https://youtu.be/dQw4w9WgXcQ?si=3Vxhg2d3jed9dr27")];

function init(){
    for(const button of buttons){
        let btn = document.createElement('button');
        btn.textContent = button.name;
        btn.addEventListener('click', () =>{
            window.open(button.link, '_blank');
        });
        mainDiv.appendChild(btn);
    }
}

init();