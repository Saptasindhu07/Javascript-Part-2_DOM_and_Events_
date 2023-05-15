let body_=document.body
body_.addEventListener("keypress", function(a){
    console.log(a.key)
    let new_= document.createElement("p")
    new_.textContent=`${a.key} is pressed`
    document.getElementsByTagName("body")[0].append(new_)
})