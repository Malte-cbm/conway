//functions_main.js

function step_by_step(){
    textfeld.value = "Iterationsmodus"

    canvas.onclick = evt =>{
    nextIter();
    cellArray.forEach(field => field.alive = field.next)
    
    drawArray(cellArray)
    onkeydown = hum =>{

        editor()
        
    }
}}

function editor(){

    textfeld.value = "Editormodus"

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

        step_by_step()
        
    }

}

function preset(){

fetch('daten.json')
  .then(response => response.json())  // JSON in ein Objekt umwandeln
  .then(data => console.log(data))    // JSON-Daten ausgeben
  .catch(error => console.error('Fehler:', error));
 

}