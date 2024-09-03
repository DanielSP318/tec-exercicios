const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isFibonacciNumber(n) {
    if (n < 0) return false;

    let a = 0, b = 1;
    while (b < n) {
        [a, b] = [b, a + b];
    }

    if (b === n || n === 0) {
        return `O número ${n} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${n} NÃO pertence à sequência de Fibonacci.`;
    }
}

rl.question('Informe um número para verificar na sequência de Fibonacci: ', (numero) => {
    console.log(isFibonacciNumber(parseInt(numero)));
    rl.close();
});