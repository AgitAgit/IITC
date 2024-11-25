//1.
function returnLength(str){
    return str.length;
}

//2.
function convertToUpper(str){
    return str.toUpperCase();
}

//3.
function convertToLower(str){
    return str.toLowerCase();
}

//4.
function returnAt(str, index){
    return str.charAt(index);
}

//5.
function extract(str, start, end){
    return str.substring(start, end);
}

//6.
let str = "abc abc abcd ppppp abc";
console.log(str);
function replaceOccur(str, oldSubstring, newSubstring) {
    let reg = new RegExp(oldSubstring, 'g');
    return str.replace(reg, newSubstring);
  }
str = replaceOccur(str, "abc", "*");
console.log(str);

//7.
str = "      III    "
console.log(str);
function trimEdges(str){
    return str.trim();
}
str = trimEdges(str);
console.log(str);

//8.
function starts(str, subString){
    console.log(`${str} starts with "${subString}": ${str.startsWith(subString)}`);
}
starts(str, "Hello");
starts(str, "II");

//9.
function ends(str, subString){
    console.log(`${str} ends with "${subString}": ${str.endsWith(subString)}`);
}
ends(str, "Hello");
ends(str, "III");
ends(str, "I");

//11.
function splitStr(str, separator){
    console.log(`"${str}" split by "${separator}" returns: ${str.split(separator)}`);
    return str.split(separator);
}
splitStr(str, "I");
splitStr("IabcIabI", "ab");

let arr = ["ab","abc","a"];
console.log(arr);

arr = splitStr("IabcIabI", "ab");

console.log(arr);
console.log(`${arr}`);

let arrr = ["a", "b", "c"];
console.log(arrr);
console.log(`${arrr}`);

//14.
function startPad(str, ch){
    return str.padStart(12,ch);
}
console.log(startPad("abc","0"));