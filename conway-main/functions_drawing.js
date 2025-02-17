//functions_drawing.js

//malt das Gitter auf den canvas, duh
function drawGrid(){
    for( let x = 0 ;  x < canvas.width; x += boxBreit ) {
        ctx.moveTo( x, 0 )
        ctx.lineTo( x, canvas.height )
    }

    for( let y = 0 ;  y < canvas.height; y += boxHoch ) {
        ctx.moveTo( 0, y )
        ctx.lineTo( canvas.width,y  )
    }
    ctx.stroke()
}

//drawArray malt die aktuell lebenden zellen schwarz aus, übergeben wird ein array mit objekten der klasse field
function drawArray(array){
    clearScreen()
    ctx.beginPath()
    drawGrid()
    array.forEach(field => {
        if(field.alive){fillCell(field.position)}
    })
}

//an fillCell kann eine position der form {x:value, y:value} übergeben werden, diese soll dann ausgemalt werden
function fillCell(pos){

    ctx.beginPath()
    ctx.fillStyle = "black"
    ctx.fillRect(pos.x * boxBreit, pos.y * boxHoch, boxBreit, boxHoch)

}


//clearScreen resettet den canvas
function clearScreen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

//aus der ID XY-position berechnen bezogen auf das array
function getXY(id){
    
    let x = id%numPerRow
    let y = parseInt(id/numPerRow)
    return{x,y}
}


function getID(x,y){
    return (y * numPerRow + x)
}

function getXYCoord(id){
    let x = boxBreit*(id%numPerRow)
    let y = boxHoch*(parseInt(id/numPerRow))
    return {x,y}
}


function getIDCoord(x,y){
    let arrX = parseInt(x/boxBreit)
    let arrY = parseInt(y/boxHoch)
    let erg = getID(arrX,arrY)
    return erg
}

function preset_drop(preset, zelle){

  
    let id_cell = zelle.id

    for (let i = 0; i < preset.gridForm.y; i++){

        
        for (let j = 0; j < preset.gridForm.x; j++){

            let k = i*preset.gridForm.x + j


            cellArray[id_cell].alive = preset.felderliste[k].alive
            
            id_cell = cellArray[id_cell].nachbarn[4].id
            //console.log("ID rechter Nachbar cellArray: " + id_cell)
            }
        
        id_cell = cellArray[id_cell].nachbarn[6].id - preset.gridForm.x 
        //console.log("ID Zeile drunter links cellArray: " + id_cell)
    }

    }
