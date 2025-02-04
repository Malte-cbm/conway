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



//an fillCell kann eine position der form {x:value, y:value} übergeben werden, diese soll dann ausgemalt werden
function fillCell(pos){

    ctx.beginPath()
    ctx.fillStyle = "black"
    ctx.fillRect(pos.x * boxBreit, pos.y * boxHoch, boxBreit, boxHoch)

}