type Person = {
  name: string
  age: number
  favoriteColor?: string
}

type Colors = "red" | "green" | "blue"

const person: Person = {
  name: "Elias",
  age: 25,
}

function setFavoriteColor(person: Person, color: Colors): Person {
  return { ...person, favoriteColor: color }
}

const formattedPerson = setFavoriteColor(person, "blue")

console.log(formattedPerson)

/* Para remover escopo global. */
export default setFavoriteColor
