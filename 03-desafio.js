//FUNÇAÕ INVERTE LISTA

function inverter(...value){
    const arrayInverer =[]
    let position = value.length-1
     for (let index = 0; index <value.length; index++) {
        arrayInverer.push(value[position-index])
    }
    return arrayInverer
}

console.log(inverter(0,9,6,8,9,1,5,7))
console.log(inverter("Oh","Hi","Mark"))
console.log(inverter(false, true, true, true))
console.log(inverter("It's","not",true, 0))

