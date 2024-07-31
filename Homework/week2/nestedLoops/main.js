//1. star pattern
function starPattern(height){
    let str = "";

    for(let i = 0; i < height; i++){
        str += "*";
        console.log(str);
    }
}

starPattern(5);

//3. array search
function arraySearch(arr, num){
    let found = false;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === num) console.log(`${num} is at position: (${i},${j})`);
        }
    }
    if(!found) console.log(`the number was not found...`);
}



//11 palindrome check
function isPalindrome(str){
    for(let i = 0; i < str.length/2; i++){
        if(str.charAt(i) != str.charAt(str.length -1 - i)) return false;
    }
    return true;
}
console.log(isPalindrome("radar"));
console.log(isPalindrome("ratata"));
console.log(isPalindrome("wow"));