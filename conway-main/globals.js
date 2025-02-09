let numPerRow = 100 //maximaler x-Wert+1
let numRows = 100   //maximaler y-Wert+1

let numCells = numPerRow*numRows
let cellArray = []
let loop = null

//das hier war mal der config vektor, aber der wird jetzt nicht mehr benutzt weil das resizen des grid immer die presets zerschiesst, kp warum.
let default_config = [{width:900}, {height:900}, {numPerRow: 100}, {numRows:100}, {boxSize: 9}]

//deltavariablen zum zählen der veränderungen beim iterieren, it_counter für die anzahl der iterationen
let delta1 = 0
let delta2 = 0
let it_counter = 0

//speicher der preset-konfigurationen und der auswahl
let preset_speicher = ['{"name":"Diagonale","bitsize":20,"gridForm":{"x":3,"y":3},"felderliste":[],"komprimiert":[273]}',
                    '{"name":"Rando Testfeld","bitsize":20,"gridForm":{"x":11,"y":11},"felderliste":[],"komprimiert":[99736,192,439425,887729,458880,90636,1]}',
                    '{"name":"Gospers Glider Gun","bitsize":20,"gridForm":{"x":36,"y":9},"felderliste":[],"komprimiert":[0,16,262144,1,12336,524480,776,16444,49,214019,20,4160,1,136,0,3,0]}' 
                ]
let preset_wahl = null


//entpacken der presets aus dem globalen speicher, um das dropdown kreieren zu können
preset_speicher.forEach((json_save, index)=> {
    let neu = new Save()
    neu.deserialisieren(json_save)
    preset_speicher[index] = neu.dekomprimieren()
})
