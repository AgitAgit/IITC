const num1 = document.getElementById("num1");//10
let value1 = 0;
const num2 = document.getElementById("num2");//314
let value2 = 0;
const num3 = document.getElementById("num3");//12
let value3 = 0;

function incrementNum1(inc){
    if(value1 >= 11) {
        num1.style.color = 'hsl(277, 64%, 61%)';
        return;
    }
    num1.textContent = value1 + 'K+';
    value1++;
    setTimeout(() => incrementNum1(inc + 30), inc);
}
function incrementNum2(inc){
    if(value2 >= 315) {
        num2.style.color = 'hsl(277, 64%, 61%)';
        return;
    }
    num2.textContent = value2;
    value2+= 5;
    setTimeout(() => incrementNum2(inc + 1.2), inc);
}
function incrementNum3(inc){
    if(value3 >= 13) {
        num3.style.color = 'hsl(277, 64%, 61%)';
        return;
    }
    num3.textContent = value3 + 'M+';
    value3++;
    setTimeout(() => incrementNum3(inc + 30), inc);
}

incrementNum1(30);
incrementNum2(0);
incrementNum3(90);