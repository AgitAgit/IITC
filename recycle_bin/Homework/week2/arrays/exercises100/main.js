//1.
let fruits = [];

//2.
let numbers = [1,2,3,4,5];

//3.
let colors = ["red", "green", "blue"];

//4.
let mixed = [1,"yellow", true];

//5.
let seasons = ["summer","fall","winter","spring"];

//6.
console.log("The length of numbers is:" + numbers.length);

//7.
let emptyCheck = [];
if(emptyCheck.length === 0) console.log("emptyCheck is empty");
else console.log("emptyCheck is not empty");

//8.
let dynamic = [0,1,2,3,4];
console.log(`dynamic length = ${dynamic.length}`);

//9.
dynamic.push(5);
console.log(`dynamic length = ${dynamic.length}`);

//10.
dynamic.pop();
console.log(`dynamic length = ${dynamic.length}`);

//11.
console.log(`The first element of "colors" is: ${colors[0]}`);

//12.
console.log(`The last element of "seasons" is: ${seasons[seasons.length - 1]}`);

//13.
console.log(`The middle element of "numbers" is: ${numbers[Math.floor(numbers.length / 2)]}`);

//14.
console.log(`The 100th element in "fruits" is: ${fruits[99]}`);

//15.
console.log(`The second color is ${colors[1]}`);

//16.
console.log(`fruits before change: ${fruits}`);
fruits[0] = "apple";
console.log(`fruits after change: ${fruits}`);

//17.
numbers[numbers.length - 1] = 10;

//18.
numbers[2] *= 2;

//19.
console.log(`colors before change: ${colors}`);
for(let i = 0; i < colors.length; i++){
    colors[i] = colors[i].toUpperCase();
}
console.log(`colors afteer change: ${colors}`);

//20.
console.log(`seasons before swap: ${seasons}`);
let temp = seasons[0];
seasons[0] = seasons[seasons.length - 1];
seasons[seasons.length - 1] = temp;
console.log(`seasons after swap: ${seasons}`);

//21.
fruits.push("orange");

//22.
numbers.pop();

//23.
console.log(`colors: ${colors}`);
colors.push("violet", "pink","blue");
console.log(`colors: ${colors}`);

//24.
let numbers2 = [];
for(let i = 1; i < 6; i++){
    numbers2.push(i);
}
console.log(`numbers2: ${numbers2}`);

//25.
while(numbers2.length > 0){
    console.log(`pop: ${numbers2.pop()}`);
}