import { mapStrings } from './functions'

const formattedStrings = mapStrings(['a', 'b', 'c'], (item) => `${item} xD`)

console.log(formattedStrings)
