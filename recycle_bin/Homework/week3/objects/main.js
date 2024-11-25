"use strict";

const person = {
  name: "John",
  age: 17,
  address: {
    city: "New York",
    zip: "10001",
  },
};

// TODO: Write a function to update the person's city
function updateCity(person, newCity) {
  person.address.city = newCity;
}

updateCity(person, "Los Angeles");
console.log("Updated Person:", person);

/////////////////////////////////////////////////////

const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

// TODO: Write a function to return an array of student names
function getStudentNames(students) {
  const result = [];
  /*
  for(const student of students){
    result.push(student.name);
  }*/
  students.forEach(element => {
    result.push(element.name);  
 });
  return result;
}

const names = getStudentNames(students);
console.log("Student Names:", names);

// TODO: Write a function to find a student by ID
function getStudentById(students, id) {
  for(const student of students){
    if(student.id === id){
        return student;
    }
  }
}

const studentt = getStudentById(students, 2);
console.log("Found Student:", studentt);

// TODO: Write a function to add a new student to the array
function addStudent(students, newStudent) {
  students.push(newStudent);
}

addStudent(students, { id: 4, name: "Charlie", age: 19 });
console.log("Updated Students:", students);

/////////////////////////////////////////////////////

const product = {
  name: "Laptop",
  price: 1200,
  isAvailable: true,
  categories: ["electronics", "computers", "tech"],
};

// TODO: Write a function to toggle the product's availability
function toggleAvailability(product) {
  product['isAvailable'] = !product['isAvailable'];
}

toggleAvailability(product);
console.log("Updated Product:", product);

// TODO: Write a function to update the product's price
function updatePrice(product, newPrice) {
  product.price = newPrice;
}

updatePrice(product, 1500);
console.log("Updated Product:", product);

// TODO: Write a function to remove a category from the product
function removeCategory(product, category) {
    const i = product.categories.indexOf(category);
    product.categories.splice(i,1);
}

removeCategory(product, "tech");
console.log("Updated Product:", product)

/////////////////////////////////////////////////////

const products = [
  { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
  { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
  { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
];

// TODO: Write a function to find the most expensive product
function findMostExpensiveProduct(products) {
  let max = -Infinity;
  let currentMaxProd = products[0];
  products.forEach(product => {
    if(product.price > max){
        max = product.price;
        currentMaxProd = product;
    }
  });
  return currentMaxProd;
}

const expensiveProduct = findMostExpensiveProduct(products);
console.log("Most Expensive Product:", expensiveProduct);

// TODO: Write a function to return an array of only available product sizes
function getAvailableSizes(products) {
  // your code here
}

// const sizes = getAvailableSizes(products);
// console.log("Available Sizes:", sizes);

/////////////////////////////////////////////////////

const student = {
  name: "Alice",
  age: 20,
};

// TODO: Write a function to add a new property to the student object
function addProperty(student, key, value) {
  student[key] = value;
}

addProperty(student, "grade", "A");
console.log("Updated Student:", student);

/////////////////////////////////////////////////////

const school = {
  name: "Greenwood High",
  address: {
    city: "Springfield",
    zip: "12345",
  },
  students: [
    { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
    { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
  ],
};

// TODO: Write a function to update a student's grade in a subject
function updateStudentGrade(school, studentId, subject, newGrade) {
  // your code here
}

// updateStudentGrade(school, 1, "math", 90);
// console.log("Updated School:", school);

/////////////////////////////////////////////////////

const orders = [
  { id: 1, product: "Laptop", status: "delivered" },
  { id: 2, product: "Mouse", status: "pending" },
  { id: 3, product: "Keyboard", status: "delivered" },
  { id: 4, product: "Monitor", status: "pending" },
  { id: 5, product: "Laptop", status: "shipped" },
];

// TODO: Write a function to return an array of only delivered orders
function getDeliveredOrders(orders) {
  // your code here
}

// const deliveredOrders = getDeliveredOrders(orders);
// console.log("Delivered Orders:", deliveredOrders);

// TODO: Write a function to count the occurrences of each product in the orders
function countProductOccurrences(orders) {
  // your code here
}

// const productCounts = countProductOccurrences(orders);
// console.log("Product Counts:", productCounts);
/*
  Output:
  {
    Laptop: 2,
    Mouse: 1,
    Keyboard: 1,
    Monitor: 1
  }
  */