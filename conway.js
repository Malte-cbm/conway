//conway.js

for (let i=0;i<numCells;i++){
    cellArray.push(new field(i))
}


cellArray.forEach(field => field.getMoore())

randomStart(0.12)

drawArray(cellArray)
main()
console.log(cellArray)