//classes_field.js


//die klasse field stellt eine einzelne zelle der welt dar, mit ID, den jeweiligen moore-nachbarschaften, 
//der position in koordinatenform und einem wert, der angibt ob die zelle bevölkert ist oder nicht. this.next
//speichert, ob ein feld in der nächsten iteration am leben sein wird.
class field{

    constructor(id){
        this.id = id
        this.nachbarn = []

        this.position = {x: (id%numPerRow), y: parseInt(id/numPerRow)}

        this.alive = false
        this.next = false

    }
}

//die klasse field bekommt die beiden Methoden isAlive und isEmpty, um ihre nächste Iteration zu bestimmen
field.prototype.isAlive = function(){

    //zählt die Anzahl der lebenden nachbarn in z rein.
    let z = 0
    this.nachbarn.forEach(nachbar => { 
        if (nachbar.alive){z+=1}});
    
    //wenn eine bevölkerte zelle genau 2 oder 3 nachbarn hat überlebt sie, sonst nicht.
    if (z === 2 || 3){
        this.next = true
    }
    else{this.next = false}
}

field.prototype.isEmpty = function(){

    //zählt die Anzahl der lebenden nachbarn in z rein.
    let z = 0
    this.nachbarn.forEach(nachbar => { 
        if (nachbar.alive){z+=1}});
    
    //wenn eine leere zelle genau 3 lebende nachbarn hat, wird sie in der nächsten iteration bevölkert, sonst nicht.
    if (z === 3){this.next = true}
    else{this.next = false}
}

//die Methode getMoore bestimmt die Moore-Nachbarn einer zelle und weist sie in das nachbarn-array ein.
field.prototype.getMoore = function(){
    
    //erstmal die normalen felder, die nicht am rand liegen
    if ((this.x != 0) && (this.x != (numPerRow-1))){

        if ((this.y != 0) && (this.y != (numRows -1))){
            
            this.nachbarn.push(cellArray[this.id - numPerRow], cellArray[this.id - numPerRow +1], cellArray[this.id + 1],
                                cellArray[this.id + numPerRow + 1], cellArray[this.id + numPerRow], cellArray[this.id + numPerRow - 1],
                                cellArray[this.id - 1], cellArray[this.id - numPerRow -1])
        }
    }

    //linker Rand außer die ecken
    else if ((this.x == 0) && ((this.y !=0) &&(this.y != (numRows-1)))){

        this.nachbarn.push(cellArray[this.id - numPerRow], cellArray[this.id - numPerRow +1], cellArray[this.id + 1],
            cellArray[this.id + numPerRow + 1], cellArray[this.id + numPerRow], cellArray[this.id + 2*numPerRow - 1],
            cellArray[this.id + numPerRow- 1], cellArray[this.id - 1])
    }

    //rechter Rand außer die ecken
    else if ((this.x == (numPerRow-1)) && ((this.y !=0) &&(this.y != (numRows-1)))){

        this.nachbarn.push(cellArray[this.id - numPerRow], cellArray[this.id - 2*numPerRow +1], cellArray[this.id - numPerRow + 1],
            cellArray[this.id + 1], cellArray[this.id + numPerRow], cellArray[this.id + numPerRow - 1],
            cellArray[this.id - 1], cellArray[this.id - numPerRow -1])
    }

    //oberer Rand außer die ecken
    else if ((this.y == 0) && ((this.x !=0) &&(this.x != (numPerRow-1)))){

        this.nachbarn.push(cellArray[this.id - numPerRow + numCells], cellArray[this.id - numPerRow + numCells +1], cellArray[this.id + 1],
            cellArray[this.id + numPerRow + 1], cellArray[this.id + numPerRow], cellArray[this.id + numPerRow - 1],
            cellArray[this.id - 1], cellArray[this.id - numPerRow + numCells -1])
    }

    //unterer Rand außer die ecken
    else if ((this.y == (numRows-1)) && ((this.x !=0) &&(this.x != (numPerRow-1)))){

        this.nachbarn.push(cellArray[this.id - numPerRow], cellArray[this.id - numPerRow +1], cellArray[this.id + 1],
            cellArray[this.id + numPerRow - numCells + 1], cellArray[this.id + numPerRow - numCells ], cellArray[this.id + numPerRow - numCells - 1],
            cellArray[this.id - 1], cellArray[this.id - numPerRow -1])
    }

    //oben links
    else if ((this.y == 0) && (this.x == 0)){
        this.nachbarn.push(cellArray[this.id - numPerRow +numCells], cellArray[this.id - numPerRow + numCells +1], cellArray[this.id + 1],
            cellArray[this.id + numPerRow + 1], cellArray[this.id + numPerRow], cellArray[this.id + 2*numPerRow - 1],
            cellArray[this.id + numPerRow - 1], cellArray[this.id + numCells -1])
    }

    //oben rechts
    else if ((this.y == 0) && (this.x == (numPerRow-1))){

        this.nachbarn.push(cellArray[this.id - numPerRow +numCells], cellArray[this.id - 2*numPerRow +numCells +1], cellArray[this.id + 1],
            cellArray[this.id + numPerRow + 1], cellArray[this.id + numPerRow], cellArray[this.id - 1],
            cellArray[this.id - numPerRow - 1], cellArray[this.id - numPerRow + numCells-1])
    }

    //unten rechts
    else if ((this.y == (numRows-1)) && (this.x == (numPerRow-1))){

        this.nachbarn.push(cellArray[this.id - numPerRow], cellArray[this.id - 2*numPerRow +1], cellArray[this.id  -numPerRow+ 1],
            cellArray[this.id -numCells + 1], cellArray[this.id + numPerRow -numCells], cellArray[this.id + numPerRow -numCells - 1],
            cellArray[this.id - 1], cellArray[this.id - numPerRow -1])
    }

    //unten links
    else if ((this.y == (numRows-1)) && (this.x == 0)){

        this.nachbarn.push(cellArray[this.id - numPerRow], cellArray[this.id - numPerRow +1], cellArray[this.id + 1],
            cellArray[this.id + numPerRow -numCells + 1], cellArray[this.id + numPerRow -numCells], cellArray[this.id + 2*numPerRow -numCells - 1],
            cellArray[this.id +numPerRow - 1], cellArray[this.id  -1])
    }

    else{console.error("Desaster bei der Nachbarnzuweisung!")}
}

field.prototype.getBetterMoore = function(){

    let a = this.id - numPerRow //ist a negativ, sind wir in der oberen Zeile
    let b = this.id + numPerRow //ist b > numCells sind wir in der unteren Zeile
    let c = this.id % numPerRow //wenn c == 0 dann linker rand
    let d = this.id % (numPerRow-1) //wenn d==0 dann rechter rand

    if (a < 0){
        a += numCells
    }

    if (b>numCells){
        b -= numCells
    }
    if (c==0){
        c+=numPerRow
    }
    if (d==0){
        d -= numPerRow-1
    }

    
}