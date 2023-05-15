// SIBLING RELATIONSHIP
let HTML_root= document.getRootNode()
console.log(HTML_root.childNodes)
let HTML_main=HTML_root.childNodes[0]
console.log(HTML_main)
let HTML_Childnodes=HTML_main.childNodes
console.log(HTML_Childnodes)
console.log(HTML_Childnodes[0].childNodes[1].nextElementSibling)
