//With Index.html
let select_element=document.getElementsByClassName("test_")
for(i of select_element){
    i.classList.add("new_add") //from CSS
    console.log(i.classList)
}
let decision=prompt("Wish to keep changes?")
if(decision=="No"){
    for(i of select_element){
        i.classList.remove("new_add")
    }
}