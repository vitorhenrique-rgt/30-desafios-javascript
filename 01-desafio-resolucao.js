//CALCULADORA DE MEDIA RESOLUÇÃO

function average(...numbers) { // (...)rest parameter - Recebe qualquer número de argumentos e os agrupa em um array
    const sum = numbers.reduce((accum, num) => accum + num, 0); // .reduce() - Soma todos os números do array
    return sum / numbers.length; // length - conta os registros
}

console.log(average(3,5,8,9))