let obj = {
    starr:["apple","banana","camel"]
}
obj['starr'][0] = "app";
console.log(obj['starr'][0]);



let ob;
function countFreq(str){
    ob = {}
    for(let i = 0; i < str.length; i++){
        if(!ob[str[i]]) ob[str[i]] = 1;
        else ob[str[i]]++;
    }
}

countFreq("abbcccddddeeeffg");
console.log(ob);
countFreq("Helloooo!");
console.log(ob);