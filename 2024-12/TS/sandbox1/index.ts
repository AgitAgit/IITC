//---------------------------------implicit types
let firstName = "baba";
firstName = "lulu";
firstName = 5;

let person = { name: "bob", age: 44 };
person = "banana";
person.location = "USA";
person.name = "bobby";
person.name = 30;

let users = [{ id: "1", name: "babi" }, {id: "2"}];
users.push({ id: "9", name: "harry" });// this is allowed
users.push({ id:"4" });// this is allowed
users.push({ id:1 });// this is not allowed
users.push({});// this is not allowed

document.addEventListener('resize', function(ev) {
    console.log(ev.ctrlKey);
});

document.addEventListener('click', function(ev) {
    console.log(ev.ctrlKey);
});

function onInit () {}
document.onload = onInit();
document.onload = onInit;

function handleClick() {}
document.onclick = handleClick();
document.onclick = handleClick;

//-------------------------explicit types
let num_1: number = 1;
let num_2: string = 1;

let numsArray_1 = [1, 2, 3];
let arr2 = [1, 'a', false];
let numsArray_2: number[] = [1, 2, 3, true];
let numsArray_3: (number | boolean)[] = [1, 2, 3, true];//array with multiple possible types
let baba: [number, string] = ["baba", 1];//tuple
let baba2: [string, number] = ["baba", 1];//tuple
//in a tuple, the order of types has meaning

let numsArray: number[];
numsArray = [1, 2, 3];

//real use case
let myData: null | string[] = null;

myData = ["duck","yorai"];

function safeSum(a: number, b:number) {
    return a+b;
}

function safeSum2(a: number, b:number): string {//here we define the return type as string, which collides with the return type of the sum of two numbers
    return a+b;
}

function unsafeSum(a: any, b: any) {
    return a+b;
}

safeSum(2, 2);
safeSum(2, "2");

unsafeSum(2, "2");

let res = safeSum(10, 20);

// typescript knows that res is of type 'number' even when we don't explicitly type it! great!
res.toLowerCase();

function render(str: string | null) { 
    document.body.innerHTML = str; //why is there no warning here? ------------------------------???
}

function sayHello(name: string | null) {
    return `Hello ${name.toUpperCase()}`;// why isn't name marked in red? -----------------------------------???
}
sayHello(null);


//------------------------------interface & type-------------------

interface Person {
    name: string;
    age: number;
    location?: string;
}

let person_1:Person = { name: 'baba', age:15 };

let person_duck:Person = { name:15, age:15, location:"baba", address:"ddd" };//why can I add address here?-------------------???

let persond:Person;
persond.address = "dddd";

let person_33:Person = { name:"name" };

interface Employee extends Person {
    salary: number;
}

let employee_1: Employee = {
    name: "John",
    age: 25,
    location: "USA",
    salary: 1000
}

interface Data {
    id: string;
    body: string;
    [key: string]: any;
}

let data_1: Data = { id: "1", body: "dads", baba: "bubu", data: true };
let data_2: Data = { body: "I don't have an id...", baba: "bubu", data: true };
let data_3: Data = { id: "4", body: "dads", baba: "bubu", data: true, gigi:"samap" };

//Type
//Type is a way to define a type of a variable, but not limited to objects
//Type is more flexible than interface but it takes longer to compile (affects only development);

type Age = number;
let age: Age = 25;
age = "25"; //this is not allowed

// union type
type Color = "red" | "green" | "blue";

type Task = {
    title: string;
    color: Color;
};

let task_1: Task = { title: "Task 1" };
let task_2: Task = { title: "Task 2", color: "red" };
let task_3: Task = { title: "Task 1", color: "yellow" };//this is not allowed (Color should be red, green or blue).

type TaskWithDeadline = Task & { deadline: Date };

interface Post {
    title: string;
    content: string;
    isFeatured: boolean;
}

let posts: Post[] = [
    { title: "post1", content: "Conntent 1", isFeatured: true },
    { title: "post2", content: "Conntent 2", isFeatured: false },
    { title: "post3", content: "Conntent 3", isFeatured: "true" }
]

let colors: Color[] = [];
colors.push("purple");
colors.push("red");

// Casting is a way to tell TypeScript that you know better than it does.
// be careful with casting!

function getStringMaybe(str: string) : string | null {
    return Math.random() > 0.5 ? str : null;
}

// bad code! 👇
let result_1 = getStringMaybe("hello");
result_1.toLowerCase();//why doesn't this get marked in red?--------------------------------???

let result_2 = getStringMaybe("hello") as string;
result_2.toLowerCase();

// real world example:
let input = document.getElementById("userInput") as HTMLInputElement | null;
if (input) {
    input.value = "Hello World!";
}

//----------------------------Generics------------------

// Generics is a way to create reusable functions

// without generics
function unSafeReturnValueInArray(value: any) {
    return [value];
}

let unSafeNumberArray = unSafeReturnValueInArray(10);
let unSafeStringArray = unSafeReturnValueInArray("Hello world");

unSafeNumberArray.push(1);
unSafeNumberArray.push("baba");

unSafeStringArray.push("baba");
unSafeStringArray.push(1);

//with generics
function SafeReturnValueInArray<T>(value: T) {
    return [value];
}

let SafeNumberArray = SafeReturnValueInArray(10);
let SafeStringArray = SafeReturnValueInArray("Hello world");

SafeNumberArray.push(1);
SafeNumberArray.push("baba");

SafeStringArray.push("baba");
SafeStringArray.push(1);


// real use cases:
interface MyResponse<T> {
    items: T[];
    selectedItem: T | null;
}

let response_1: MyResponse<number> = {
    items: [],
    selectedItem: null
}

response_1.selectedItem = 1;
response_1.selectedItem = "baba";
response_1.selectedItem = null;

response_1.items.push("baba");
response_1.items.push(13);

let response_2: MyResponse<string> = {
    items: [],
    selectedItem: null
}

response_2.selectedItem = 1;
response_2.selectedItem = "baba";
response_2.selectedItem = null;

response_2.items.push("baba");
response_2.items.push(13);
