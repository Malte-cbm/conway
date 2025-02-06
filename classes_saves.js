//classes_saves.js

class Save{

    constructor(){

        this.name = null
        this.bitsize = null

        this.gridForm = null

        this.felderliste = null
        this.komprimiert = null
    }
}

//array_feld, name, gridForm={x:numPerRow, y:numRows}, komprimiert=null

Save.prototype.serialisieren = function(name, bitsize=20){

    this.name = name
    this.felderliste = cellArray
    this.komprimiert =[]
    this.bitsize = bitsize
    this.gridForm = {x:numPerRow, y:numRows}
    let bitBuffer = ""

    this.felderliste.forEach((feld, index) => {

        if (feld.alive){bitBuffer = "1" + bitBuffer}
        
        else {bitBuffer = "0" +bitBuffer}

        if ((bitBuffer.length == this.bitsize) || (index == (numCells-1))){
            let alszahl = parseInt(bitBuffer, 2)
            this.komprimiert.push(alszahl)
            bitBuffer =""
        }
    });
    this.felderliste = []
    return JSON.stringify(this)
}

Save.prototype.deserialisieren = function(json_string){

    Object.assign(this, JSON.parse(json_string))
    let dim_var = this.gridForm.y * this.gridForm.x

    for (let i=0;i<dim_var;i++){
    this.felderliste.push(new Field(i))
    }

    
}

Save.prototype.dekomprimieren = function(){

    if (this.komprimiert){
        
        let max_grid = this.gridForm.x * this.gridForm.y //maximalter index des feldarrays

        this.komprimiert.forEach((blockzahl, index) => {


            let min_bit = index * this.bitsize //der startindex des aktuellen bitblocks

            //konvertiert jedes feld aus dem komprimiert array und ergänzt fehlende führende nullen
            let bitstrom = blockzahl.toString(2)
            
            if (bitstrom.length < this.bitsize){
                do {bitstrom = "0" + bitstrom}
                while(bitstrom.length < this.bitsize)
            }

            //den bitstrom umdrehen, um die indizes vergleichbarer zu machen
            umdrehen = bitstrom.split("").reverse()
            
            //die Einsen aus dem bitstrom auf alive setzen
            for (let i = 0; i < this.bitsize; i++){
                if (umdrehen[i] == "1"){
                this.felderliste[i+min_bit].alive = true

            }}
            
            
        })
        cellArray = this.felderliste
        this.felderliste.forEach(field => field.getMoore())

        drawArray(cellArray)

        
    }
    else {console.log("komprimieren war leer!")}
}