//practice
/*
for (let i = 0; i < 10; i++){
    console.log(Math.floor(Math.random() * 2));
}
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
function distanceFromMiddleRow(row, length){
    let middle = Math.floor(length/2);//if the length is even, the larger "middle" will be used
    return Math.abs(row - middle);
}
function diamond(height){
    for(let i = 0; i < height; i++){
        let str = "";
        for(j = 0; j < Math.floor(distanceFromMiddleRow(i, height)/2); j++){
            str += "  ";
        }
        for(j = 0; j <= Math.floor(height/2) - distanceFromMiddleRow(i, height); j++){//the smaller distance gets I want to print more *. so I can print height - distance times.
            str += "* ";
        }
        console.log(str);
        str = "";
    }

}
//diamond(10);

function diamond2(height){
    let arr = [];
    for(let i = 0; i < height; i++){
        let row = [];
        for(let j = 0; j < height; j++){
            if(distanceFromMiddleRow(i, height) <= j && j < height - distanceFromMiddleRow(i, height)){
            //The left limit grows larger the farther from the center row it gets. 
            //The right limit grows smaller the farther from the center row it gets.
            //thus, the rows grow narrower the further from the middle they get.
                row[j] = "*";
            }
            else row[j] = " ";
        }
        arr.push(row);
        row = [];
    }
    console.log(arr);
}
//diamond2(9);

function distanceFromMiddleRow3(row, length){
    let middle = Math.floor(length/2);
    if(length % 2 === 0) middle--;//if the length is even, the smaller "middle" is used.
    return Math.abs(row - middle);
}
function diamond3(height){
    let arr = [];
    let width = height;
    for(let i = 0; i < height; i++){
        let row = [];
        for(let j = 0; j < height; j++){
            if((distanceFromMiddleRow(i, height) <= j && j < width - distanceFromMiddleRow(i, height)) || (distanceFromMiddleRow3(i, height) <= j && j < width - distanceFromMiddleRow3(i, height))){
            //The left limit grows larger the farther from the center row it gets. 
            //The right limit grows smaller the farther from the center row it gets.
            //thus, the rows grow narrower the further from the middle they get.
            //The added condition after the "||" addresses the case of an even height array.
            //It treats the smaller middle as a middle as well.
                row[j] = "*";
            }
            else row[j] = " ";
        }
        arr.push(row);
        row = [];
    }
    console.log(arr);
}

//diamond3(9);