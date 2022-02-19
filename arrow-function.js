function apresentar (nome) {
    return 'meu nome é ${nome}';
}

// Arrow function
const apresentaArrow = nome => {'meu nome é ${nome}'}
const Soma = (num1, num2) => num + num2;

// Arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return 'somente numeros de 1 a 9'
    
    } else {
        return num1 + num2;
    }
}
// hoisting: arrow function se comporta como expressão

// Operador maior ou igual que
// >=