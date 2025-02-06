//functions_main.js

function step_by_step(){
    textfeld.value = "Iterationsmodus"
    clearInterval(loop)
    loop = null
    canvas.onclick = evt =>{
        nextIter();}
    
    gnopfdrug()
}

function auto_run(){

    textfeld.value = "Auto Run => 1 Sekunde"

    if (!loop){
        loop = setInterval(()=> {
        nextIter()

    }, 100)}

    canvas.onclick = evt =>{
        clearInterval(loop)
        loop = null
        editor()}
}

function editor(){

    textfeld.value = "Editormodus"
    clearInterval(loop)
    loop = null
    canvas.onclick = evt =>{

        let cl_x = evt.offsetX
        let cl_y = evt.offsetY

        let cl_id = getIDCoord(cl_x,cl_y)
        console.log("x: ", cl_x, "y: ", cl_y, "id: ", cl_id)
        cellArray[cl_id].alive = !cellArray[cl_id].alive
        drawArray(cellArray)

    }
    gnopfdrug()

}

function preset(){

fetch('daten.json')
  .then(response => response.json())  // JSON in ein Objekt umwandeln
  .then(data => console.log(data))    // JSON-Daten ausgeben
  .catch(error => console.error('Fehler:', error));
 

}