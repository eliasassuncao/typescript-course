function toUppercase(...args: string[]): string[] {
  return args.map((item) => item.toUpperCase())
}

const result = toUppercase('a', 'b', 'c')

console.log(result)

const client1: [number, string, string?] = [1, 'Elias']
const client2: [number, string, ...string[]] = [1, 'Elias', 'Teste', 'Teste 2']

console.log(client1)
console.log(client2)

// readonly
const array1: readonly string[] = ['Elias', 'Teste']
const array2: ReadonlyArray<string> = ['Elias', 'Teste']

console.log(array1)
console.log(array2)
