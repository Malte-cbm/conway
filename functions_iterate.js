//functions_iterate.js

//erstmal random zellen alive sein lassen
function randomStart(prozentwert){

    let counter = parseInt(prozentwert*numCells)

    for (let c = 0;c<counter;c++){
        let z = parseInt((numCells) * Math.random())
        cellArray[z].alive = true 
    }
}