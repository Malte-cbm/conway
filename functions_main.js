//functions_main.js

function main(){
    
    canvas.onclick = evt =>{
    nextIter();
    cellArray.forEach(field => field.alive = field.next)
    
    drawArray(cellArray)
    onkeydown = hum =>{

        editor()
        return null
    }
}}

function editor(){

    canvas.onclick = evt =>{

        let cl_x = evt.offsetX
        let cl_y = evt.offsetY

        let cl_id = getIDCoord(cl_x,cl_y)
        console.log("x: ", cl_x, "y: ", cl_y, "id: ", cl_id)
        cellArray[cl_id].alive = !cellArray[cl_id].alive
        //fillCell(cellArray[cl_id].position)
        drawArray(cellArray)

    }
    
    onkeydown = hum =>{

        main()
        return null
    }

}