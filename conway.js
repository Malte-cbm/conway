//conway.js



let numPerRow = 30 //maximaler x-Wert 29
let numRows = 20    //maximaler y-Wert 19

let numCells = numPerRow*numRows
let cellArray = []

for (let i=0;i<numCells;i++){
    cellArray.push(new field(i))
}


cellArray.forEach(field => field.getMoore())


console.log(cellArray)