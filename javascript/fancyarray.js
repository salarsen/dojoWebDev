var names = ["James","Jill","Jane","Jack"];
printNames(names,"-->",false);
printNames(names,") ",true);
function printNames(list,spacer,reversed){
    if(!reversed){
        for(var i = 0; i < list.length; i++){
            console.log(i + spacer + list[i]);
        }
    } else {
        for(var i = list.length - 1; i >= 0; i--){
            console.log(i + spacer + list[i]);
        }
    }
}
