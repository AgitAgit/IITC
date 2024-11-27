//notes:
//I did not understand the 2nd question of the 2nd batch;


//3.
const arr = ["fish", "cucumber"];
const newArr3 = ["Diesel", ...arr];
console.log("exer3", newArr3);

//6.
const newArr6 = [...arr, "farenheit"];
console.log("exer6", newArr6);

//9.
const newArr9 = [...newArr3].reverse();
console.log("exercise9", newArr9);

//2nd batch:
//1.
const str = "baba wears sandals";
const arr2_1 = [...str];
console.log(arr2_1);

//2.
const arr2_2 = [['a','b','c'],['d','e','f']];
const newArr2_2 = [...arr2_2[0], ...arr2_2[1]];
console.log("exercise2_2", arr2_2, newArr2_2);

//4.
const newArr2_4 = [...arr2_1.slice(0,2), "baba wears sandals", ...arr2_1.slice(2)];
console.log(newArr2_4);

//5.
const arr2_5 = [...new Set(newArr2_4)];
console.log(arr2_5);

//6.
const arr2_6 = [...arr2_1.slice(1,-1)];
console.log(arr2_6);

//7.
const arr2_7 = [...newArr2_2.slice(1), newArr2_2[0]];
console.log("exercise 2_7", arr2_7);

//9.
function mergeArrays(){
    
}
