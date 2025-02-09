//canvas.js

// hide an element
const hide = elem => {
    elem.classList.add('hidden')
  }
  
  // show an element
  const show = elem => {
    elem.classList.remove('hidden')
  }
  
  // toggle the element visibility
  const toggle = elem => {
    elem.classList.toggle('hidden')
  }

let textfeld = document.createElement("input")
textfeld.id = 'textfeld'
textfeld.value = "Editor"
document.getElementById("data").appendChild( textfeld ) 

let counter_ele = document.createElement("input")
counter_ele.id = 'counter'
counter_ele.value = "Iteration Nummer: " + it_counter
document.getElementById("data").appendChild( counter_ele ) 

let delta_feld = document.createElement("input")
delta_feld.id = 'deltas'
delta_feld.value = "Änderung zur letzten Iteration"
document.getElementById("data").appendChild(delta_feld)

let canvas = document.createElement( "canvas" )
let ctx = canvas.getContext("2d")

canvas.width = 800
canvas.height = 800

boxBreit = canvas.width/numPerRow
boxHoch = canvas.height /numRows
canvas.id = "canvas"
canvas.style.backgroundColor = "#DDDDDD"

document.getElementById("malen").appendChild( canvas ) 

drawGrid()


let knopf1 = document.createElement("button")
knopf1.innerHTML = "Iterationsmodus  (I)"
knopf1.id = "button_iterator"

document.getElementById("knopfs").appendChild(knopf1); 
document.getElementById("button_iterator").onmousedown = function(){console.log("Knopf 1 gedrüggt!")
    step_by_step()
}

let knopf2 = document.createElement("button")
knopf2.innerHTML = "Auto Run  (A)"
knopf2.id = "button_auto"

document.getElementById("knopfs").appendChild(knopf2); 
document.getElementById("button_auto").onmousedown = function(){console.log("Knopf 2 gedrückt!");
    auto_run()
}

let knopf3 = document.createElement("button")
knopf3.innerHTML = "Editor  (E)"
knopf3.id = "button_editor"

document.getElementById("knopfs").appendChild(knopf3); 
document.getElementById("button_editor").onmousedown = function(){console.log("Knopf 3 gedrückert!")
    editor()
}

let knopf4 = document.createElement("button")
knopf4.innerHTML = "Presets  (P)"
knopf4.id = "button_presets"


document.getElementById("knopfs").appendChild(knopf4); 
document.getElementById("button_presets").onmousedown = function(){console.log("Knopf 4 gedrückt!");

    //wenn der knopf gedrückt wird, soll das dropdown menu erscheinen
    toggle(dropdown_list)
}


//knopf 5 wird disabled, da das feature nicht korrekt funktioniert
let knopf5 = document.createElement("button")
knopf5.innerHTML = "Konfiguration (K)"
knopf5.id = "button_config"


//document.body.appendChild(knopf5); 
//document.getElementById("button_config").onmousedown = function(){console.log("Knopf 5 gedrückt!");

    //wenn der knopf gedrückt wird, soll die config form erscheinen
    //toggle(config_form)
//}


//das dropdown für die presets basteln
let dropdown_list = document.createElement("select")
    dropdown_list.innerHTML = "Presets  (P)"
    dropdown_list.id = "dropdown_presets"
    dropdown_list.class = "drop"

preset_speicher.forEach((ding, index) => {
    let option = document.createElement("option")
    option.value = index
    option.text = ding.name
    option.id = ding.name
    dropdown_list.appendChild(option)
});


//inspiration von https://ricardometring.com/getting-the-value-of-a-select-in-javascript
dropdown_list.onchange = function(){
    let select = document.getElementById("dropdown_presets")
    let gewahlt = select.options[select.selectedIndex]
    
    preset_wahl = preset_speicher[gewahlt.value]}

//zeigen und verstecken des dropdowns von https://attacomsian.com/blog/javascript-hide-show-elements-using-css-class
document.getElementById("knopfs").appendChild(dropdown_list); 
dropdown_list.classList.add('hidden')

document.getElementById("dropdown_presets").onmousedown = function(){console.log("ding im dropdown");
    preset()
}



//die form für die config basteln
//das feature config wurde wegen nicht rund laufen abgeschafft 
let config_form = document.createElement("div")
    config_form.id = "config_form"
    default_config.forEach(value => {
        config_form.appendChild(document.createElement("br"))
        
        FN = document.createElement("input");
        FN.setAttribute("id", Object.entries(value)[0][0])
        FN.setAttribute("type", "number");
        FN.setAttribute("min", "1");
        FN.setAttribute("step", "1");
        FN.setAttribute("value", Object.entries(value)[0][1]);

        config_form.appendChild(FN)
    })
    config_form.onchange = function(){grid_config()}


//document.body.appendChild(config_form)
config_form.classList.add('hidden')

