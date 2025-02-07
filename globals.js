let numPerRow = 100 //maximaler x-Wert+1
let numRows = 100   //maximaler y-Wert+1

let numCells = numPerRow*numRows
let cellArray = []
let preset_store = null
let loop = null
let it_counter = 0

//json teststrings
let test = '{"name":"Testsave","bitsize":20,"gridForm":{"x":3,"y":3},"felderliste":[],"komprimiert":[27]}'
let test2 = '{"name":"Pascal","bitsize":20,"gridForm":{"x":3,"y":3},"felderliste":[],"komprimiert":[2]}'
let diagonale = '{"name":"Diagonale","bitsize":20,"gridForm":{"x":3,"y":3},"felderliste":[],"komprimiert":[273]}'
let grosseroschi = '{"name":"Lennart","bitsize":20,"gridForm":{"x":11,"y":11},"felderliste":[],"komprimiert":[99736,192,439425,887729,458880,90636,1]}'
let navid = '{"name":"hiho","bitsize":20,"gridForm":{"x":11,"y":11},"presarray":[],"komprimiert":[266239,796709,296464,131136,622896,526080,1]}' 

let goglgu ='{"name":"Gospers Glider Gun","bitsize":20,"gridForm":{"x":36,"y":9},"felderliste":[],"komprimiert":[0,16,262144,1,12336,524480,776,16444,49,214019,20,4160,1,136,0,3,0]}' 