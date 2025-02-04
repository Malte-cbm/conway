//functions_main.js

function main(){
    
    canvas.onclick = evt =>{
    nextIter();
    cellArray.forEach(field => field.alive = field.next)
    
    drawArray(cellArray)
}}