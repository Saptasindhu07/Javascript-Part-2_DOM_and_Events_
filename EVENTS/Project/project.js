document.getElementById("submit_").addEventListener("click", function(e){
    e.preventDefault()
    console.log(document.getElementById("text_enter").value)
    let new_item=document.createElement("li")
    new_item.innerHTML=`<span class="text">${document.getElementById("text_enter").value}</span>
      <div class="todo-buttons">
      <button class="todo-btn-done">Done</button>
      <button class="todo-btn-remove">Remove</button>
    </div>
    `
    document.getElementsByClassName("todo-list")[0].append(new_item)
    document.getElementById("text_enter").value=""
})
document.getElementsByClassName("todo-list")[0].addEventListener("click",function(e){
    console.log(e.target.classList)
    if(e.target.classList.contains("todo-btn-done")){
        e.target.parentElement.style.display="none"
    }
    if(e.target.classList.contains("todo-btn-remove")){
        e.target.parentElement.parentElement.style.display="none"
    }
})