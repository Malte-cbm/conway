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
                preset()
                break
            default:
                console.log("Dies war keine Menütaste.")
                break
        
}}}

// function choose_preset(){

//     const dropdown = document.createElement("select")
// }