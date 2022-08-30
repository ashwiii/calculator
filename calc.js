function displayNum(num){
    result.value+=num
    // result.value=result.value+num
}
function allClear(){
    result.value=""
}
function evaluvateExp(){
    exp=result.value
    out=eval(exp)
    result.value=out
}
function removeElement(){
    curExp=result.value
    result.value=curExp.slice(0,-1)
}


//s.slice ---stingine oro element aayi eduth remove aakan pattum
//last (0,-1) -1 koduthal avasanatha oru element remove aakum