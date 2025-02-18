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
string_array[0].toFixed()
number_array[0].toFixed()

