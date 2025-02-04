//conway.js

for (let i=0;i<numCells;i++){
    cellArray.push(new field(i))
}


cellArray.forEach(field => field.getMoore())

randomStart(0.42)

cellArray.forEach(field => {
    if(field.alive) { fillCell(field.position)}
})

console.log(cellArray)