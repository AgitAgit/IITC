//---------------------------------implicit types
var firstName = "baba";
firstName = "lulu";
firstName = 5;
var person = { name: "bob", age: 44 };
person = "banana";
person.location = "USA";
person.name = "bobby";
person.name = 30;
var users = [{ id: "1", name: "babi" }, { id: "2" }];
users.push({ id: "9", name: "harry" }); // this is allowed
users.push({ id: "4" }); // this is allowed
users.push({ id: 1 }); // this is not allowed
users.push({}); // this is not allowed
document.addEventListener('resize', function (ev) {
    console.log(ev.ctrlKey);
});
document.addEventListener('click', function (ev) {
    console.log(ev.ctrlKey);
});
function onInit() { }
document.onload = onInit();
document.onload = onInit;
function handleClick() { }
document.onclick = handleClick();
document.onclick = handleClick;
//-------------------------explicit types
var num_1 = 1;
var num_2 = 1;
var numsArray_1 = [1, 2, 3];
var arr2 = [1, 'a', false];
var numsArray_2 = [1, 2, 3, true];
var numsArray_3 = [1, 2, 3, true]; //array with multiple possible types
var baba = ["baba", 1]; //tuple
var baba2 = ["baba", 1]; //tuple
//in a tuple, the order of types has meaning
var numsArray;
numsArray = [1, 2, 3];
//real use case
var myData = null;
myData = ["duck", "yorai"];
function safeSum(a, b) {
    return a + b;
}
function safeSum2(a, b) {
    return a + b;
}
function unsafeSum(a, b) {
    return a + b;
}
safeSum(2, 2);
safeSum(2, "2");
unsafeSum(2, "2");
var res = safeSum(10, 20);
// typescript knows that res is of type 'number' even when we don't explicitly type it! great!
res.toLowerCase();
function render(str) {
    document.body.innerHTML = str; //why is there no warning here? ------------------------------???
}
function sayHello(name) {
    return "Hello ".concat(name.toUpperCase()); // why isn't name marked in red? -----------------------------------???
}
sayHello(null);
var person_1 = { name: 'baba', age: 15 };
var person_duck = { name: 15, age: 15, location: "baba", address: "ddd" }; //why can I add address here?-------------------???
var persond;
persond.address = "dddd";
var person_33 = { name: "name" };
var employee_1 = {
    name: "John",
    age: 25,
    location: "USA",
    salary: 1000
};
var data_1 = { id: "1", body: "dads", baba: "bubu", data: true };
var data_2 = { body: "I don't have an id...", baba: "bubu", data: true };
var data_3 = { id: "4", body: "dads", baba: "bubu", data: true, gigi: "samap" };
var age = 25;
age = "25"; //this is not allowed
var task_1 = { title: "Task 1" };
var task_2 = { title: "Task 2", color: "red" };
var task_3 = { title: "Task 1", color: "yellow" }; //this is not allowed (Color should be red, green or blue).
var posts = [
    { title: "post1", content: "Conntent 1", isFeatured: true },
    { title: "post2", content: "Conntent 2", isFeatured: false },
    { title: "post3", content: "Conntent 3", isFeatured: "true" }
];
var colors = [];
colors.push("purple");
colors.push("red");
// Casting is a way to tell TypeScript that you know better than it does.
// be careful with casting!
function getStringMaybe(str) {
    return Math.random() > 0.5 ? str : null;
}
// bad code! 👇
var result_1 = getStringMaybe("hello");
result_1.toLowerCase(); //why doesn't this get marked in red?--------------------------------???
var result_2 = getStringMaybe("hello");
result_2.toLowerCase();
// real world example:
var input = document.getElementById("userInput");
if (input) {
    input.value = "Hello World!";
}
