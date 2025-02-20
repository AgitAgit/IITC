import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

console.log("baba")

//since I gave item the type T, TS infers that T is the type of number, whatever it will be assigned.
//There is no meaning to the order of types in the <> brackets!
function my_generic_func <T>(item:T){
  const result:T[] = [item]
  return result
}

const string_array = my_generic_func("bbb")
const number_array = my_generic_func(3)

string_array[0].toUpperCase()
// string_array[0].toFixed()
number_array[0].toFixed()


/**
 * implement custom array methods (see myMap inclass example, ignore TS):
 *
 * 1. forEach - retrun nothing
 * 2. filter - array
 * 3. find - item | null
 * 4. findIndex - number | -1 (in case we dont find any)
 * 5. every - boolean
 * 6. some - boolean
 * 7. includes - boolean
 * 8. Bonus: Reduce - see docs.
 * 9. whetver you like...
 */

Array.prototype.myForEach = function(callbackFunc:(element:any, index?:number, array?:any[]) => void){
  for(let i = 0; i < this.length; i++){
    callbackFunc(this[i])
  }
}

const myArr = [1, 2, 3];
// myArr.myForEach((element) => {
//   console.log(element)
// })

//seems to me like the generics is meaningless here
Array.prototype.myGenericForEach = function<T>(callbackFunc:(element:T, index?:number, array?:T[]) => void){
  for(let i = 0; i < this.length; i++){
    callbackFunc(this[i])
  }
}
type FilterCallbackFunc<T> = (element:T, index?:number, array?:T[]) => boolean
Array.prototype.myGenericFilter = function<T>(callbackFunc:FilterCallbackFunc<T>){
  const result = []
  for(let i = 0; i < this.length; i++){
    if(callbackFunc(this[i])){
      result.push(this[i])
    }
  }
  return result;
}

declare global {
  interface Array<T> {
    myGenericFilter(callbackFunc: FilterCallbackFunc<T>): T[];
    myGenericFind(callbackFunc:FilterCallbackFunc<T>):T | null;
  }
}

const numbers = [1, 2, 3, 4, 5, 6]
const filteredNumbers = numbers.myGenericFilter((element) => element % 2 === 0)
// console.log(filteredNumbers)

// Array.prototype.myGenericFilter = function<T>(callbackFunc:FilterCallbackFunc<T>){...
// I am trying to add a function to the prototype of Array in TS, but TS says Property 'myGenericFilter' does not exist on type 'any[]'.ts(2339)

Array.prototype.myGenericFind = function<T>(callbackFunc:FilterCallbackFunc<T>){
  for(let i = 0; i < this.length; i++){
    if(callbackFunc(this[i])) return this[i];
  }
  return null;
}

const findArr = [{baba:false, duck:true}, {baba:false, duck:true}, {baba:true, duck:false}, {baba:false, duck:true}]

const obj1 = findArr.myGenericFind( (element) => element.baba === true)
const obj11 = findArr.find((element) => element.baba === true)
// console.log(obj1, obj11)