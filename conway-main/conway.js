//conway.js

for (let i=0;i<numCells;i++){
    cellArray.push(new Field(i))
}


cellArray.forEach(field => {
                field.getMoore()})


//disabled wegen buggy
//grid_config()


randomStart(0.32)

drawArray(cellArray)
editor()
console.log(cellArray)