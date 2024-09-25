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
 * Perhaps I should add an option to save changes that
 * updates local storage.
 */
const _displayBtn = document.getElementById('displayBtn')
const _addNew = document.getElementById('addNew');
const _empDisplay = document.getElementById('empDisplay');
    const _depSelect = document.getElementById('depSelect');
    const _empList = document.getElementById('empList');
const _empAddition = document.getElementById('empAddition');
const _empEditing = document.getElementById('empEditing');
    
let _currentDisplay = _empDisplay;

//Controller
_displayBtn.addEventListener('click', handleDisplayClick);
_addNew.addEventListener('click', handleAddNewClick);
_depSelect.addEventListener('change', handleDepSelect);

//event handlers
function handleDisplayClick(){
    changeContent(_empDisplay);
}
function handleAddNewClick(){
    changeContent(_empAddition);
}
function handleDepSelect(e){
    renderEmployees(e.target.value);
}
function handleEditClick(){
    changeContent(_empEditing);
}
function handleDeleteClick(id){
    employees = employees.filter(emp => {
        return emp.id !== id;
    });
    renderEmployees(_depSelect.value);
}

//functions
function changeContent(newContent){
    _currentDisplay.hidden = true;
    newContent.hidden = false;
    _currentDisplay = newContent;
}
function renderEmployees(filter='All'){
    _empList.innerHTML = '';
    employees.forEach(employee =>{
        const {id, firstName, lastName, age, startDate, department, salary} = employee;
        if(filter ==='All' || filter === department){
            const emp = document.createElement('li');
            
            //data
            const data = document.createElement('div');
            data.textContent = 
            `Employee: ${firstName} ${lastName} 
            Age: ${age}
            Start date: ${startDate}
            Department: ${department}
            Salary: ${salary}`;
            
            //buttons
            const buttons = document.createElement('div');
            const edit = document.createElement('button');
            edit.textContent = 'EDIT';
            edit.addEventListener('click', handleEditClick);

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
function updateLocalStorate(){}  


/** emp details
First Name (string)
Last Name (string)
Age (number)
Start Date (string, date in YYYY-MM-DD format)
Department (string)
Salary (number)
 */
