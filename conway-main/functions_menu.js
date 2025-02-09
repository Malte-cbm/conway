//functions_menu.js

function tastaturDruck(){
    onkeydown = hum =>{

        switch(hum.key){
            case "e":
                editor()
                break
            case "i":
                step_by_step()
                break
            case "a":
                auto_run()
                break
            case "p":
                toggle(dropdown_list)
                preset()
                break
            case "r":
                rotate_preset()
                break
            //case "k":
            //    grid_config()
            //    toggle(config_form)
            default:
                console.log("Dies war keine Menütaste.")
                break
        
}}}

function rotate_preset(){

    if(preset_wahl){
        let x_dim = preset_wahl.gridForm.x
        let y_dim = preset_wahl.gridForm.y

        preset_wahl.gridForm.x = y_dim
        preset_wahl.gridForm.y = x_dim

        preset_wahl.felderliste.forEach(feld => {
            let new_x = y_dim-1 - feld.position.y
            let new_y = x_dim-1 - feld.position.x
            feld.position.x = new_x
            feld.position.y = new_y
            feld.id = getID(feld.position.x, feld.position.y, y_dim)
            console.log(feld.position, "id " , feld.id)
        })
        
        preset_wahl.felderliste.forEach(feld => feld.getMoore())
        console.log(preset_wahl.gridForm)
    }
}

function grid_config(){

    cellArray = []
    let config_width = document.getElementById("width").value;
    let config_height = document.getElementById("height").value;
    let config_numPerRow = document.getElementById("numPerRow").value;
    let config_numRows = document.getElementById("numRows").value;
    let config_boxSize = document.getElementById("boxSize").value;

    console.log(config_numPerRow)
    numPerRow = config_numPerRow //maximaler x-Wert+1
    numRows = config_numRows   //maximaler y-Wert+1

    numCells = numPerRow*numRows
    canvas.width = config_width
    canvas.height = config_height

    for (let i=0;i<numCells;i++){
        cellArray.push(new Field(i))
    }
    
    
    cellArray.forEach(field => field.getMoore())

    drawArray(cellArray)
    editor()
    
}