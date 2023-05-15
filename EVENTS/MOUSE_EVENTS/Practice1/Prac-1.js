let count=0
document.getElementById("clicked").onclick=function(){
    count=count+1
    let new_= document.createElement("div")
    let paragraph_=`<p class="text_content">You have clicked ${count}  times </p>`
    new_.innerHTML=paragraph_
    document.getElementsByTagName("body")[0].lastChild.after(new_)
}