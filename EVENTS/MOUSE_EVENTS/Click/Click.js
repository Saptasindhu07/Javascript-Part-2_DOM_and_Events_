document.getElementById("select_1").onclick=function(){
    /** @type {HTMLDivElement} */
    document.getElementById("red").style.display="none"
    document.getElementById("black").style.display="none"
}
document.getElementById("select_2").onclick=function(){
    /** @type {HTMLDivElement} */
    document.getElementById("red").style.display="inline-block"
    if(document.getElementById("black").style.display!=="none"){
        document.getElementById("black").style.display="none"
    }
    else{
        document.getElementById("black").style.display="inline-block"
    }


}
document.getElementById("double-click").ondblclick=function(){
    /** @type {HTMLDivElement} */
    document.getElementById("black").style.display="inline-block"
}