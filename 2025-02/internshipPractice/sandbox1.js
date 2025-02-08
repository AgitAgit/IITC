
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
}, 1)

// console.log(result2)

const numbers3 = [-1, -3000, 1, 1, 7]

const avgOfPositives = numbers3.reduce((accumulator, current, index, arr) => {
    if (current > 0) {
        accumulator.sum += current;
        accumulator.count++;
    }
    return index === arr.length - 1 ? (accumulator.count > 0 ? accumulator.sum / accumulator.count : 0) : accumulator;
}, { sum: 0, count: 0 })

// console.log(avgOfPositives);

function diffMinMax(arr) {
    const accumulator = arr.reduce((accumulator, current) => {
        if (current < accumulator.min) accumulator.min = current;
        if (current > accumulator.max) accumulator.max = current;
        return accumulator;
    }, { min: 0, max: 0 })
    return Math.abs(accumulator.min - accumulator.max)
}

// console.log(diffMinMax([-1, 1, 7, 0, -3000]))

function countOccurrences(num, arr) {
    return arr.reduce((accumulator, current) => num === current ? accumulator + 1 : accumulator, 0)
}

// console.log(countOccurrences(7, [0, 9, 6]))

// console.log(countOccurrences(7, [0, 9, 6, 7, 7]))

// console.log(countOccurrences(7, [7, 7, 6.999999999999999]))

// console.log(countOccurrences(7, [7, 7, 6.9999999999999999]))

function concatWithComma(arr){
    return arr.reduce((accumulator, current, index) => 
        index === 0 ? accumulator += current : accumulator += `, ${current}`, "")
}

// console.log(concatWithComma(["baba", "ba"]))
// console.log(concatWithComma(["baba"]))
// console.log(concatWithComma([]))
// console.log(concatWithComma(["baba", "Unimog", "ba"]))

function pairs(arr){
    return arr.reduce((accumulator, current) => {
        accumulator[current[0]] = current[1]
        return accumulator;
    }, {})
}

// console.log(pairs([["baba", "baba"], ["duck", "debug"]]))

function reverse(str){
    const arr = Array.from(str);

}