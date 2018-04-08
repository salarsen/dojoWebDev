printRange(2,10,2);
console.log("--------------")
printRange(2,10,1);
console.log("--------------")
printRange(4,8);
console.log("--------------")
printRange(4);
console.log("--------------")
printRange(-10,-2,2);
function printRange(start,stop,multiplier){
    if(multiplier == undefined){
        multiplier = 1;
    }
    if(stop == undefined){
        stop = start;
        start = 0;
    }
    for(var i = start; i < stop; i+= multiplier){
        console.log(i);
    }
}
