let inputTodo = document.querySelector('.text')
let addBtn = document.querySelector('button')
let text = ""

let container = document.createElement('div')
container.className = "todo-list"
document.querySelector('body').appendChild(container)

inputTodo.addEventListener('change', (e) => {
    text = e.target.value
})


addBtn.addEventListener('click', () => {
    let btncompleted=document.createElement('button')
    let btndelete=document.createElement('button')
    btncompleted.className = "btncom"
    btndelete.className = "btncom" 

    let todoHolder = document.createElement('div')
    todoHolder.className = "list-item"
    
    btncompleted.innerHTML = "Completed"
    todoHolder.appendChild(btncompleted)
    
    btndelete.innerHTML = "Delete"
    todoHolder.appendChild(btndelete)
    
    let todo = document.createElement('span')
    todo.className = "todoText"
    todo.innerHTML = text
    
    text = ""
    inputTodo.value = ""

    todoHolder.appendChild(todo)
    container.appendChild(todoHolder)
    
    btncompleted.addEventListener('click',() =>{
        btncompleted.innerHTML = "Undo"
        todo.classList.add("barre")
    
    })
    btndelete.addEventListener('click',()=>{
        btndelete.parentElement.remove()
    })
})