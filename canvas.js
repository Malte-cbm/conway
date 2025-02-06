//canvas.js

let textfeld = document.createElement("input")
textfeld.id = 'textfeld'
textfeld.value = "Editor"
document.body.appendChild( textfeld ) 


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

let knopf1 = document.createElement("button")
knopf1.innerHTML = "Iterationsmodus  (I)"
knopf1.id = "button_iterator"

document.body.appendChild(knopf1); 
document.getElementById("button_iterator").onmousedown = function(){console.log("Knopf 1 gedrüggt!")
    step_by_step()
}

let knopf2 = document.createElement("button")
knopf2.innerHTML = "Auto Run  (A)"
knopf2.id = "button_auto"

document.body.appendChild(knopf2); 
document.getElementById("button_auto").onmousedown = function(){console.log("Knopf 2 gedrückt!");
    auto_run()
}
let knopf3 = document.createElement("button")
knopf3.innerHTML = "Editor  (E)"
knopf3.id = "button_editor"

document.body.appendChild(knopf3); 
document.getElementById("button_editor").onmousedown = function(){console.log("Knopf 3 gedrückert!")
    editor()
}

let knopf4 = document.createElement("button")
knopf4.innerHTML = "Presets  (P)"
knopf4.id = "button_presets"

document.body.appendChild(knopf4); 
document.getElementById("button_presets").onmousedown = function(){console.log("Knopf 4 gedrückt!");
    preset()
}
