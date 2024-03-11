const objectA: {
  keyA: string
  keyB: string
  keyC?: string // chave Opcional
  [key: string]: unknown // Usado no caso de utilizar um objeto na qual você não sabe todas as chaves/valores dele.
} = {
  keyA: "Valor A",
  keyB: "Valor B",
}

objectA.keyA = "Outro valor"
objectA.keyC = "Nova chave"
objectA.keyD = "Nova chave D"
