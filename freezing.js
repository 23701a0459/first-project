function checkfreezing(temp){
    if(temp<=0){
        return "freezing point or below";
    }
    else{
        return "above freezing point";
    }
}
console.log(checkfreezing(5));