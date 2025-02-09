//functions_iterate.js

//erstmal random zellen alive sein lassen
function randomStart(prozentwert){

    let counter = parseInt(prozentwert*numCells)

    for (let c = 0;c<counter;c++){
        let z = parseInt((numCells) * Math.random())
        cellArray[z].alive = true 
    }
}

//die nächste iteration berechnen und zeichnen
function nextIter(){
    delta2 = 0
    delta1 = 0
    cellArray.forEach(field => field.iterate())
    cellArray.forEach(field => field.alive = field.next)
    it_counter += 1
    let delta = delta2 - delta1
    counter_ele.value = "Iteration Nummer: " + it_counter
    delta_feld.value = " \u0394 Zellen: " + (delta2-delta1)

    drawArray(cellArray)

}