const listaChamada = ['Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

// retira ana e caio
// altera o array original
// ex: a partir da posição x, remova y elementos, adicione z
// listaChamada.splice(1, 2, 'Rodrigo')
listaChamada.splice(1, 0, 'Rodrigo')

console.log(`Lista de chamada: ${listaChamada}`)