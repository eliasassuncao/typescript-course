type MapStringsCallback = (item: string) => string

function mapStrings(array: string[], callbackFn: MapStringsCallback): string[] {
  return array.map((item) => callbackFn(item))
}

const mappedStrings = mapStrings(["a", "b", "c"], (item) => item.toUpperCase())

console.log(mappedStrings)
