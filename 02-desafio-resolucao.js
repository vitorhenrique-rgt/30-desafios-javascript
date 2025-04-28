//REPETINDO STRING BASEADO EM UM VALOR NUMERICO

function chunk(num){
    if (num === 0 ) {
        return ''
    }
    if (num === 1) {
        return 'chunk'
    }else{
        return 'chunk-' + chunk(num-1)
    }
}

console.log(chunk(10))