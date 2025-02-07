
const arr1 = [1, 2, 3]

arr1.reduce((prev, current, index, arr) => {

}, 0)

const numbers = [1, 2, 3, 4, 5];

const result1 = numbers.reduce((accumulator, current, index, numbers) => {
    return accumulator + current * current;
}, 0)

// console.log(result1)

const numbers2 = [...numbers, 6]

// const numbers2 = [2, 2, 1, 3, 5, 7, 9]

const result2 = numbers2.reduce((accumulator, current) => {
    return current % 2 === 0 ? accumulator * current : accumulator * 1
},1)

// console.log(result2)

const numbers3 = [1, -1, 2, -3000, 7]

const avgOfPositives = numbers3.reduce((accumulator, current) => {
    
},0)