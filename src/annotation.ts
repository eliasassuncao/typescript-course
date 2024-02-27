// Variables
const text: string = "Teste"
const age: number = 25

// Arrays
const numbersList: Array<number> = [1, 2, 3]
const numbersList2: number[] = [1, 2, 3]

// Objects
const person: { name: string; age: number; adult?: boolean } = { name: "Cleyton", age: 25 }

// Functions
function sum(x: number, y: number): number {
  return x + y
}

const sum2: (x: number, y: number) => number = (x, y) => x + y

function functionWithoutReturn(...args: Array<string>): void {
  console.log(args.join(" "))
}

// Outputs
functionWithoutReturn("Elias", "Assunção")
console.log(sum(5, 5))
console.log(sum2(10, 10))
console.log(person.name)
console.log(text, age, numbersList, numbersList2)
