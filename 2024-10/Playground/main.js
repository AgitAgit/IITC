function asyncOperation(){
    return new Promise((resolve, reject) => {
        console.log("It's lottery time!")
        setTimeout(() => {
            const rand = Math.random();
            if(rand > 0.6){
                resolve("You Won!");
            }
            else{
                reject("You lost!");
            }
        }, 2000)
    });
}

asyncOperation()
    .then(result => {
        console.log(result);
    })
    .catch(error => console.log(error));