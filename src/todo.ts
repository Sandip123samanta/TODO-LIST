// selectors
const todoInput = document.querySelector<HTMLInputElement>('.todo-input');
const todolist = document.querySelector<HTMLUListElement>('.todo-list');
const switchButton = document.querySelector<HTMLButtonElement>('.swbtn');
const filters = document.querySelector<HTMLDivElement>('.filter');
const clearButton = document.querySelector<HTMLButtonElement>('.clear');
const countConteiner = document.querySelector<HTMLSpanElement>('.count span');

const allTodo = document.querySelectorAll<HTMLDivElement>('.todo');

//change the mode

switchButton?.addEventListener('click',()=>{
    document.body.classList.toggle('darkmode');
})

//creating elements on the click of enter

todoInput?.addEventListener("keypress", (e)=>{
    
    if(e.key === "Enter"){

        //prevent to refresh the page
        e.preventDefault();

        //checks if the input is empty
        if(todoInput?.value == "" || todoInput?.value == null) return;
        

        /*todo div*/
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //craeting check button
        const checkButton = document.createElement('button');
        checkButton.classList.add('check');
        checkButton.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>';
        todoDiv.appendChild(checkButton);

        //creating a li
        const newTodo = document.createElement('li');
        newTodo.innerText= `${todoInput.value}`;
        newTodo.classList.add('todo-todo');
        todoDiv.appendChild(newTodo);

        //creating delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('del');
        deleteButton.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>';
        todoDiv.appendChild(deleteButton);

        //appending to the ul
        todolist?.appendChild(todoDiv);

        //clearing the input
        todoInput!.value="";
    }
})

//adding functionality to buttons

todolist?.addEventListener('click',(e)=>{
    if(e.target == null) return;

    const todo = <Element>e.target;

    //deleting todo
    if(todo.classList[0] === 'del'){
        const todos = todo.parentElement;
        todos?.remove();
    }

    //checking of done
    if(todo.classList[0] === 'check'){
        const todos = todo.parentElement;
        todos?.classList.toggle('checked');
    }
})

//fillters

filters?.addEventListener('click',(e)=>{
    if(e.target == null) return;

    const todos = document.querySelectorAll<HTMLElement>('.todo');
    const fill = <Element>e.target;

    switch(fill.classList[0]){
        case "all":
            for(let i=0;i<todos.length;i++){
                todos[i].style.display = "flex";
            }
            break;
        case "complete":
            for(let i=0;i<todos.length;i++){
                if(todos[i].classList.contains('checked')){
                    todos[i].style.display = "flex";
                }
                else{
                    todos[i].style.display = "none";
                }
            }
            break;
        case "active":
            for(let i=0;i<todos.length;i++){
                if(!todos[i].classList.contains('checked')){
                    todos[i].style.display = "flex";
                }
                else{
                    todos[i].style.display = "none";
                }
            }
            break;
    }

})

//delete the compleded ones

clearButton?.addEventListener('click',()=>{
    const checkedTodos = document.querySelectorAll<HTMLDivElement>('.checked'); 

    checkedTodos.forEach((todo)=>{
        todo?.remove();
    })
})

