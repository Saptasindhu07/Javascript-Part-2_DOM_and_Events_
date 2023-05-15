//GO Backward from Child to parent and change style 
let select_heading=document.querySelector(".container")
let parent_node= select_heading.parentNode
parent_node.style.color="red"

//2 step
let custom_select=document.querySelector("#test_sample")
custom_select.parentNode.parentNode.style.backgroundColor="green"
console.log(document.querySelector("#test_sample").textContent)