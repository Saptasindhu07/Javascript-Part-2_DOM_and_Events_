/** @type {HTMLDivElement} */
let btn=document.getElementById("btn-headline")
let count=0
btn.addEventListener("click",function(){
    count=count+1
    if(count%2==0){
        btn.style.backgroundColor="red"
    }
    else{
        btn.style.backgroundColor="yellow"
    }
})
document.body.onload=function(){
    alert("Body Loaded")
}

