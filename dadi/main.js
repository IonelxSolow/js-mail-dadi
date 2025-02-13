//genera casualmente dei numeri per il pc e il player
let player = Math.trunc(6*Math.random()+1)
let computer = Math.trunc(6*Math.random()+1)
console.log(player)
console.log(computer)

// stampa in console il risultato
if (player < computer) {
    console.log(`Ha vinto il computer ${computer}`)
} else if (player > computer){
    console.log(`Ha vinto il player ${player}`)
} else {
    console.log("I numeri sono pari, ritirate")
}