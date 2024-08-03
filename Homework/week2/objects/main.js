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