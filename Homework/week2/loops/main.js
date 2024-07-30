//practice
/*
for (let i = 0; i < 10; i++){
    console.log(Math.floor(Math.random() * 2));
}
*/

//19.
/*
let consecutive = 1;
let coin = "";
let i = 0;
let former = "";
do{
    if(Math.floor(Math.random() * 2) === 1) coin = "heads";
    else coin = "tails";
    
    if(coin === former) consecutive++;
    else consecutive = 1;
    
    former = coin;
    
    console.log(`${i}. ${coin.toUpperCase()} consecutive ${coin}:${consecutive}`);
    i++;
} while(consecutive < 3);
*/


//22.
//0*0
//***
//0*0
//find the middle column of the row
//add asterisks in proportion to the distance from the middle row(i signifies the rows. i  = Math.floor(height/2) is the middle row)
//distance from middle row is |current - middle|
//when the distance from middle gets smaller by 1, the width of * gets larger by 2.
function distanceFromMiddle(row, length){
    let middle = Math.floor(length/2);
    return Math.abs(row - middle);
}
function diamond(height){
    for(let i = 0; i < height; i++){
        let str = "";
        for(j = 0; j < Math.floor(distanceFromMiddle(i, height)/2); j++){
            str += "  ";
        }
        for(j = 0; j <= Math.floor(height/2) - distanceFromMiddle(i, height); j++){//the smaller distance gets I want to print more *. so I can print height - distance times.
            str += "* ";
        }
        console.log(str);
        str = "";
    }

}
diamond(10);

function diamond2(height){
    let arr = [];
    for(let i = 0; i < height; i++){
        let row = [];
        for(let j = 0; j < height; j++){
            if(true){//------------------------------
                row[j] = "*";
            }
            else row[j] = " ";
        }
        arr.push(row);
        row = [];
    }
    console.log(arr);
}
diamond2(10);

function triangle(height){
    for(i = 0; i < height; i++){
        let str = "";
        for(j = 0; j<=i; j++){
            str += "*";
        }
        console.log(str);
        str = "";
    }
}
function triangle2(height){
    for(i = 0; i < height; i++){
        let str = "";
        for(j = height; j > i; j--){
            str += "*";
        }
        console.log(str);
        str = "";
    }
}
//triangle(3);
//triangle2(3);