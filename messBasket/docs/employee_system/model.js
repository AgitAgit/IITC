const originalEmployees = [
    {
      "id":1,
      "firstName": "Alice",
      "lastName": "Smith",
      "age": 28,
      "startDate": "2020-06-15",
      "department": "Marketing",
      "salary": 50000
    },
    {
      "id":2,
      "firstName": "John",
      "lastName": "Doe",
      "age": 35,
      "startDate": "2018-01-25",
      "department": "Sales",
      "salary": 60000
    },
    {
        "id":3,
      "firstName": "Emma",
      "lastName": "Johnson",
      "age": 42,
      "startDate": "2015-03-12",
      "department": "IT",
      "salary": 70000
    },
    {
        "id":4,
      "firstName": "Michael",
      "lastName": "Brown",
      "age": 30,
      "startDate": "2019-07-01",
      "department": "Finance",
      "salary": 55000
    },
    {
        "id":5,
      "firstName": "Sophia",
      "lastName": "Williams",
      "age": 26,
      "startDate": "2021-05-20",
      "department": "HR",
      "salary": 45000
    },
    {
        "id":6,
      "firstName": "David",
      "lastName": "Taylor",
      "age": 39,
      "startDate": "2017-09-14",
      "department": "Operations",
      "salary": 64000
    },
    {
        "id":7,
      "firstName": "Laura",
      "lastName": "White",
      "age": 32,
      "startDate": "2016-11-03",
      "department": "Logistics",
      "salary": 50000
    }
];

let employees = ( localStorage.getItem('employees') ?
    JSON.parse(localStorage.getItem('employees')) : [
    {
      "id":1,
      "firstName": "Alice",
      "lastName": "Smith",
      "age": 28,
      "startDate": "2020-06-15",
      "department": "Marketing",
      "salary": 50000
    },
    {
      "id":2,
      "firstName": "John",
      "lastName": "Doe",
      "age": 35,
      "startDate": "2018-01-25",
      "department": "Sales",
      "salary": 60000
    },
    {
        "id":3,
      "firstName": "Emma",
      "lastName": "Johnson",
      "age": 42,
      "startDate": "2015-03-12",
      "department": "IT",
      "salary": 70000
    },
    {
        "id":4,
      "firstName": "Michael",
      "lastName": "Brown",
      "age": 30,
      "startDate": "2019-07-01",
      "department": "Finance",
      "salary": 55000
    },
    {
        "id":5,
      "firstName": "Sophia",
      "lastName": "Williams",
      "age": 26,
      "startDate": "2021-05-20",
      "department": "HR",
      "salary": 45000
    },
    {
        "id":6,
      "firstName": "David",
      "lastName": "Taylor",
      "age": 39,
      "startDate": "2017-09-14",
      "department": "Operations",
      "salary": 64000
    },
    {
        "id":7,
      "firstName": "Laura",
      "lastName": "White",
      "age": 32,
      "startDate": "2016-11-03",
      "department": "Logistics",
      "salary": 50000
    }
]);

function updateLocalStorate(){
    console.log('local storage was updated...');
    localStorage.setItem('employees',JSON.stringify(employees));
}  