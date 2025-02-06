let numPerRow = 11 //maximaler x-Wert 29
let numRows = 11    //maximaler y-Wert 19

let numCells = numPerRow*numRows
let cellArray = []

//json teststrings
let test = '{"name":"Testsave","bitsize":20,"gridForm":{"x":3,"y":3},"felderliste":[],"komprimiert":[27]}'
let test2 = '{"name":"Pascal","bitsize":20,"gridForm":{"x":3,"y":3},"felderliste":[],"komprimiert":[2]}'
let diagonale = '{"name":"Diagonale","bitsize":20,"gridForm":{"x":3,"y":3},"felderliste":[],"komprimiert":[273]}'
let grosseroschi = '{"name":"diescheissegeht","bitsize":20,"gridForm":{"x":11,"y":11},"felderliste":[],"komprimiert":[4095,794628,34320,131136,622896,526080,1]}'
let navid = '{"name":"hiho","bitsize":20,"gridForm":{"x":11,"y":11},"felderliste":[],"komprimiert":[266239,796709,296464,131136,622896,526080,1]}' 