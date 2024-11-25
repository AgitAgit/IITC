function printZigzag(limit, zig){
    let str = "*";
    
    for(let i = 0; i < limit; i++){
        for(let j = 0; j < zig; j++){
            str = "  " + str;
            console.log(str);
        }
        for(let k = 0; k < zig; k++){
            str = str.substring(2);
            console.log(str);
        }
    }
}

printZigzag(10,5);

const txt = document.getElementById("txt");
function fillArray(height, filler){
    let arr = [];
    for(let i = 0; i < height; i++){
        let row = [];
        for(let j = 0; j < height; j++){
            row.push(`${filler}`);
        }
        arr.push(row);
    }
    return arr;
}
str = 
`
aaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaa
`;
txt.textContent = str;