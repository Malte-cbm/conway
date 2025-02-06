//classes_field.js


//die klasse field stellt eine einzelne zelle der welt dar, mit ID, den jeweiligen moore-nachbarschaften, 
//der position in koordinatenform und einem wert, der angibt ob die zelle bevölkert ist oder nicht. this.next
//speichert, ob ein feld in der nächsten iteration am leben sein wird.
class field{

    constructor(id){
        this.id = id
        this.nachbarn = []

        this.position = {x: getXY(id).x, y: getXY(id).y}

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
    if ((z == 2) || (z == 3)){
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

field.prototype.iterate = function(){
    if (this.alive){this.isAlive()}
    else if(!this.alive){this.isEmpty()}
    else{console.log("Kritischer Iterationsfehler in der Zelle " + this.id)}
}

//die Methode getMoore bestimmt die Moore-Nachbarn einer zelle und weist sie in das nachbarn-array ein.

field.prototype.getMoore = function(){

    let a = (this.position.y == 0) ? true:false //ist a true, sind wir in der oberen Zeile
    let b = (this.position.y == (numRows-1)) ? true:false //ist b true sind wir in der unteren Zeile
    let c = (this.position.x == 0) ? true:false //wenn c true dann linker rand
    let d = (this.position.x == (numPerRow-1)) ? true:false //wenn d true dann rechter rand

    //hilfsvektor mit den standardindextransformationswerten, welche dann transformiert werden sollen [o,u,l,r]
    let hilfsvektor = [-numPerRow, numPerRow, -1, +1]

    if (a){hilfsvektor[0] += numCells}
    if (b){hilfsvektor[1] -= numCells}
    if (c){hilfsvektor[2] += numPerRow}
    if (d){hilfsvektor[3] -= numPerRow}

    //durch addition der jeweiligen transformationsindizes werden die nachbarn der reihenfolge nach bestimmt

    this.nachbarn.push(cellArray[(this.id + hilfsvektor[0] + hilfsvektor[2])]) //oben links nachbar
    this.nachbarn.push(cellArray[(this.id + hilfsvektor[0])])                  //oben mitte
    this.nachbarn.push(cellArray[(this.id + hilfsvektor[0] + hilfsvektor[3])]) //oben rechts
    this.nachbarn.push(cellArray[(this.id + hilfsvektor[2])])                  //links
    this.nachbarn.push(cellArray[(this.id + hilfsvektor[3])])                  //rechts
    this.nachbarn.push(cellArray[(this.id + hilfsvektor[1] + hilfsvektor[2])]) //unten links
    this.nachbarn.push(cellArray[(this.id + hilfsvektor[1])])                  //unten
    this.nachbarn.push(cellArray[(this.id + hilfsvektor[1] + hilfsvektor[3])]) //unten rechts
}