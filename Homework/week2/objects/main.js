//practice
/*
function animal(name, sound, food) {
    this.name = name; 
    this.sound = sound;
    this.food = food;
}

let zoo = [new animal("lion", "roar", "meat"), new animal("horn","beep!","gas")];
let input = prompt("Choose Animal");
let key = prompt("Choose property");
let chosen = zoo.find(item => item[`name`] === input);
alert(`${chosen[key]}`);
*/

//12. bank account
let bankAccount = {
    accountNumber: "",
    
    balance: 0,
    
    isActive: false,
    
    deposit: function (amount) {
        this.balance += Number(amount);
        console.log(`${amount} deposited. Current balance:${this.balance}`);
    },

    withdraw: function (amount) {
        if(this.balance >= amount){
            this.balance -= Number(amount);
            console.log(`${amount} withdrawn. Current balance:${this.balance}`);
        }
    },
    showBalance: function() {
        console.log(`The balance is:${this.balance}`);
    }
}
bankAccount.showBalance();
bankAccount.deposit(100);
bankAccount.withdraw(50);

//15. to-do list
let todoList = {
    tasks:[],
    completedTasks:[],
    addTask: function (task){
        this.tasks.push(task);
    },
    completeTask: function (task){
        this.tasks = this.tasks.filter(element => element !== task);
        this.completedTasks.push(task);
    },
    displayTasks: function (){
        console.log(`tasks:${this.tasks}\ncompleted tasks:${this.completedTasks}`);
    }
}

todoList.addTask("cook");
todoList.addTask("eat");
todoList.addTask("clean");
todoList.addTask("code");

todoList.displayTasks();

todoList.completeTask("code");

todoList.displayTasks();

//20. quiz
function Question (text = "default question", options = ["def op1", "def op2"], correctAnswer = 0) {
    this.text = text;
    this.options = options;
    this.correctAnswer = correctAnswer;
}

let question = new Question();
let question2 = new Question("Are you a student?", ["yes","no"], 0);
let question3 = new Question("Are you a giraffe?", ["yes","no"], 1);
let question4 = new Question("Are you a dishwasher3000gold?", ["Yes!","no"], 0);

let quiz = {
    questions: [question, question2, question3, question4],
    score: 0,
    askQuestion: function (index) {
        let question = this.questions[index];
        let answer = prompt(`question: ${question.text}\noption 1: ${question.options[0]} \noption 2: ${question.options[1]}`);
        answer = parseFloat(answer) - 1;
        if(this.checkAnswer(index, answer)){
            alert("You are correct!");
        }
        else{
            alert(`You are wrong. \nThe correct answer is: ${question.options[question.correctAnswer]}`);
        }
    },
    checkAnswer: function (index, answer)
    {
        let question = this.questions[index];
        
        return answer === question.correctAnswer;
    }
}

let choice = 0; 

while(choice !== -1) {
    choice = parseInt(prompt(`Choose a question between 0 and ${quiz.questions.length - 1}`));
    quiz.askQuestion(choice);
}

