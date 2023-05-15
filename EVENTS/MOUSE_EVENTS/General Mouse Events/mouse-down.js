document.getElementById("mouse-down").addEventListener("mousedown",function(){
    let color1=Math.floor(Math.random()*244)
    let color2=Math.floor(Math.random()*244)
    let color3=Math.floor(Math.random()*244)
    let text_=`rgb(${color1},${color2},${color3})`
    console.log(text_)
    document.getElementsByTagName("body")[0].style.background=text_
})
