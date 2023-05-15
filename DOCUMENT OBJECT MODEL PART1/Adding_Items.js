let name_=prompt("Enter Name")
let age=prompt("Enter Age")
let Gender=prompt("Enter Gender")
let total_info=`<p id="main_"> Your name is ${name_} and your age is ${age} and ua are ${Gender}</p>`
document.getElementsByTagName("button")[0].onclick=function(){
let newDiv=document.createElement("div")
newDiv.setAttribute("id","Details")
newDiv.innerHTML=total_info
document.getElementsByTagName("button")[0].after(newDiv)
}