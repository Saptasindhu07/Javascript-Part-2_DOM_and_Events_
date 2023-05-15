document.getElementById("colors").onclick=function(){
    let temp2=Math.floor(Math.random()*244)
    let temp1=Math.floor(Math.random()*244)
    let temp3=Math.floor(Math.random()*244)
    console.log(temp1)
    let color_=`rgb(${temp1},${temp2},${temp3})`
    /** @type {HTMLDivElement} */
    document.getElementsByTagName("body")[0].style.background=color_
    console.log(document.getElementsByTagName("body")[0].style)
}