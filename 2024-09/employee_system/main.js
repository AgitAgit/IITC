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
/**Extras:
 * Instead of updating local storage when certain
 * functions are called, I should update it whenever
 * employees is changed.
 * 
 * Perhaps I should add an option to save changes that
 * updates local storage.
 */
const _displayBtn = document.getElementById('displayBtn')
const _addNew = document.getElementById('addNew');
const _resetList = document.getElementById('resetList');
//display form
const _empDisplay = document.getElementById('empDisplay');
const _depSelect = document.getElementById('depSelect');
const _empList = document.getElementById('empList');
//add form
const _empAddition = document.getElementById('empAddition');
const _addFName = document.getElementById('addFName');
const _addLName = document.getElementById('addLName');
const _addAge = document.getElementById('addAge');
const _addDate = document.getElementById('addDate');
const _addDepSelect = document.getElementById('addDepSelect');
const _addSalary = document.getElementById('addSalary');
const _addNewEmpBtn = document.getElementById('addNewEmpBtn');
//edit form
const _empEditing = document.getElementById('empEditing');
// const _empEdit = document.getElementById('empEdit');
const _editId = document.getElementById('editId');
const _editFName = document.getElementById('editFName');
const _editLName = document.getElementById('editLName');
const _editAge = document.getElementById('editAge');
const _editStartDate = document.getElementById('editStartDate');
const _editDepSelect = document.getElementById('editDepSelect');
const _editSalary = document.getElementById('editSalary');
const _editEmpBtn = document.getElementById('editEmpBtn');


let _currentDisplay = _empDisplay;

//Controller
_displayBtn.addEventListener('click', handleDisplayClick);
_addNew.addEventListener('click', handleAddNewClick);
_depSelect.addEventListener('change', handleDepSelect);
_addNewEmpBtn.addEventListener('click', handleAddEmpClick);
_editEmpBtn.addEventListener('click',handleEditEmp);
_resetList.addEventListener('click', handleResetList);
//event handlers
function handleDisplayClick(){
    changeContent(_empDisplay);
    renderEmployees(_depSelect.value);
}
function handleAddNewClick(){
    changeContent(_empAddition);
}
function handleResetList(){
    employees = originalEmployees;
    updateLocalStorate();
    handleDisplayClick();
}
function handleDepSelect(e){
    renderEmployees(e.target.value);
}
function handleEditClick(id){
    const employee = employees.find(emp => emp.id = id);
    changeContent(_empEditing);
    if(employee){
        const {firstName, lastName, age, startDate, department, salary} = employee;
        _editId.textContent = id;
        _editFName.value = firstName;
        _editLName.value = lastName;
        _editAge.value = age;
        _editStartDate.value = startDate;
        _editDepSelect.value = department;
        _editSalary.value = salary;
    }
    else changeContent(_empDisplay);
}
function handleEditEmp(){
    const id = parseInt(_editId.textContent);
    const fName = _editFName.value;
    const lName = _editLName.value;
    const age = parseInt(_editAge.value);
    const startDate = _editStartDate.value;
    const dep = _editDepSelect.value;
    const salary = parseInt(_editSalary.value);

    if (validateValues(fName, lName, age, startDate,dep, salary)) {
        editEmployee(id, fName, lName, age, startDate, dep, salary);
    }
    handleDisplayClick();
    updateLocalStorate();
}
function handleDeleteClick(id){
    employees = employees.filter(emp => {
        return emp.id !== id;
    });
    renderEmployees(_depSelect.value);
    updateLocalStorate();
}

function handleAddEmpClick(){
    const fName = _addFName.value;
    const lName = _addLName.value;
    const age = parseInt(_addAge.value);
    const date = _addDate.value;
    const dep = _addDepSelect.value;
    const salary = parseInt(_addSalary.value);
    if(validateValues(fName, lName, age, date, dep, salary)){
        createEmployee(fName, lName, age, date, dep, salary);
        changeContent(_empDisplay);
    }
    updateLocalStorate();
}

//functions
function validateValues(fName, lName, age, year, month, day, dep, salary){
    console.log('validate values...');
    return true;
}
function validateValues(fName, lName, age, startDate, dep, salary){
    console.log('validate values...');
    return true;
}
function changeContent(newContent){
    renderEmployees(_depSelect.value);
    _currentDisplay.hidden = true;
    newContent.hidden = false;
    _currentDisplay = newContent;
}
function createEmployee(firstName, lastName, age, startDate, department, salary){
    let maxId = 0;
    for(let i = 0; i < employees.length; i++){
        if(employees[i].id > maxId) maxId = employees[i].id;
    }
    const newEmp = {
        id: maxId + 1,
        firstName,
        lastName,
        age,
        startDate,
        department,
        salary
    }
    employees.push(newEmp);
}
function editEmployee(id, firstName, lastName, age, startDate, department, salary){
    const employee = employees.find(employee => employee.id = id);
    if (employee) {
        employee.firstName = firstName;
        employee.lastName = lastName;
        employee.age = age;
        employee.startDate = startDate;
        employee.department = department;
        employee.salary = salary;
    }
}
function renderEmployees(filter='All'){
    _empList.innerHTML = '';
    employees.forEach(employee =>{
        const {id, firstName, lastName, age, startDate, department, salary} = employee;
        if(filter ==='All' || filter === department){
            const emp = document.createElement('li');
            
            //data
            const data = document.createElement('div');
            data.classList.add('dataDiv');
            data.addEventListener('click', () => handleEditClick(id));
            data.innerHTML = 
            `<span>ID:${id}</span>
            <span>Employee:${firstName}&nbsp${lastName}</span> 
            <span>Age:${age}</span>
            <span>Start&nbspdate:${startDate}</span>
            <span>Department:&nbsp${department}</span>
            <span>Salary:${salary}</span>`;
            
            //buttons
            const buttons = document.createElement('div');
            buttons.classList.add('buttons')
            const edit = document.createElement('button');
            edit.textContent = 'EDIT';
            edit.addEventListener('click', () => handleEditClick(id));

            const del = document.createElement('button');
            del.textContent = 'DELETE';
            del.addEventListener('click', () => handleDeleteClick(id));
            buttons.appendChild(edit);
            buttons.appendChild(del);
        
            
            emp.appendChild(data);
            emp.appendChild(buttons);
            _empList.appendChild(emp);
        }
    });
}

function startApp(){
    renderEmployees();
    // _empDisplay.hidden = true;
    _empAddition.hidden = true;
    _empEditing.hidden = true;
}

startApp();

//Model
//Data manipulation
function updateLocalStorate(){
    console.log('local storage was updated...');
    localStorage.setItem('employees',JSON.stringify(employees));
}  


/** emp details
First Name (string)
Last Name (string)
Age (number)
Start Date (string, date in YYYY-MM-DD format)
Department (string)
Salary (number)
 */
