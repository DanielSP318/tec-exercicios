const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countLetterA(s) {
    const lowercaseCount = s.split('').filter(char => char === 'a').length;
    const uppercaseCount = s.split('').filter(char => char === 'A').length;

    return `A letra 'a' minúscula aparece ${lowercaseCount} vezes e a letra 'A' maiúscula aparece ${uppercaseCount} vezes na string.`;
}

rl.question('Informe uma string para verificar a ocorrência das letras "a" e "A": ', (string) => {
    console.log(countLetterA(string));
    rl.close();
});
