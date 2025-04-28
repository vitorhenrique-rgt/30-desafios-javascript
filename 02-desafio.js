//REPETINDO STRING BASEADO EM UM VALOR NUMERICO

function dropString(number){
    const defaultWord ="chunks"
    const words = Array(number) //Array() - Cria um array vazio com um comprimento especificado
    .fill(defaultWord) //.fill() - Preenche todos os elementos do array com o valor fornecido
    .join("-") // .join() - Junta todos os elementos do array em uma única string, separando-os pelo separador fornecido
    return words
}

console.log(dropString(10))