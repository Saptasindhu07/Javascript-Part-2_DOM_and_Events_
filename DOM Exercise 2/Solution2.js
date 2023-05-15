//UPDATE THE LIST USING USER INPUTS

let input_=prompt("Enter position to append")
let input_2=prompt("Element to append")
let new_=document.createElement("li")
new_.textContent=input_2
document.getElementsByClassName(input_)[0].before(new_)