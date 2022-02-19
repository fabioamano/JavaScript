// declaração de função

function minhaFuncao (param) {
    // bloco do código
}

// minhaFuncao('param')

// expressão de função

const soma = function(num1, num2) {return num1 + num2}
// console.log(soma(1,1))

// diferença principal: HOIST
// funções e var são 'Listadas' no topo

function apresentar () {
    return 'olá';
}

console.log(soma(1,1))
const soma = function(num1, num2) {return num1 + num2}