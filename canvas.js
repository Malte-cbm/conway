//canvas.js

let canvas = document.createElement( "canvas" )
let ctx = canvas.getContext("2d")
canvas.width = 1000
canvas.height = 1000

boxBreit = canvas.width/numPerRow
boxHoch = canvas.height / numRows
canvas.id = "canvas"
canvas.style.backgroundColor = "#DDDDDD"

document.body.appendChild( canvas ) 

drawGrid()
