let temp_=document.getRootNode()
let html_node=temp_.childNodes
console.log(html_node)
let HTML_Elements=html_node[0].childNodes
console.log(HTML_Elements)
for(let i of HTML_Elements){
    console.log("child node of ",i,"is",i.childNodes)
}
let body_traversing=HTML_Elements[2].childNodes[1]
console.log("DIV ELEMENTS ARE:",body_traversing.childNodes)
console.log(body_traversing.childNodes[1].textContent)