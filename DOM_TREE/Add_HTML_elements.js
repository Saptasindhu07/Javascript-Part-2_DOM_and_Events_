let selection=document.querySelector(".todo-list")
/** @type {HTMLDivElement} */
let changes= document.createElement("li")
changes.textContent="HOLA"
selection.append(changes)
changes.style.color="red"
changes.style.backgroundColor="orange"