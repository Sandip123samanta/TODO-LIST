"use strict";
// selectors
const todoInput = document.querySelector('.todo-input');
const todolist = document.querySelector('.todo-list');
const switchButton = document.querySelector('.swbtn');
const filters = document.querySelector('.filter');
const clearButton = document.querySelector('.clear');
const countConteiner = document.querySelector('.count span');
const allTodo = document.querySelectorAll('.todo');
//change the mode
switchButton === null || switchButton === void 0 ? void 0 : switchButton.addEventListener('click', () => {
    if (switchButton.classList[1] === 'moon') {
        const toggleimage = document.querySelector('.toggleimage');
        if (toggleimage === null)
            return;
        toggleimage.src = './dist/images/icon-sun.svg';
        switchButton.classList.remove('moon');
        switchButton.classList.add('sun');
    }
    if (switchButton.classList[1] === 'sun') {
        const toggleimage = document.querySelector('.toggleimage');
        if (toggleimage === null)
            return;
        toggleimage.src = './dist/images/icon-moon.svg';
        switchButton.classList.remove('sun');
        switchButton.classList.add('moon');
    }
    document.body.classList.toggle('darkmode');
});
//creating elements on the click of enter
todoInput === null || todoInput === void 0 ? void 0 : todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        //prevent to refresh the page
        e.preventDefault();
        //checks if the input is empty
        if ((todoInput === null || todoInput === void 0 ? void 0 : todoInput.value) == "" || (todoInput === null || todoInput === void 0 ? void 0 : todoInput.value) == null)
            return;
        /*todo div*/
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //craeting check button
        const checkButton = document.createElement('button');
        checkButton.classList.add('check');
        checkButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>';
        todoDiv.appendChild(checkButton);
        //creating a li
        const newTodo = document.createElement('li');
        newTodo.innerText = `${todoInput.value}`;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //creating delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('del');
        deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>';
        todoDiv.appendChild(deleteButton);
        //appending to the ul
        todolist === null || todolist === void 0 ? void 0 : todolist.appendChild(todoDiv);
        //clearing the input
        todoInput.value = "";
    }
});
//adding functionality to buttons
todolist === null || todolist === void 0 ? void 0 : todolist.addEventListener('click', (e) => {
    if (e.target == null)
        return;
    const item = e.target;
    //deleting item
    if (item.classList[0] === 'del') {
        const todo = item.parentElement;
        todo === null || todo === void 0 ? void 0 : todo.remove();
    }
    //checking of done
    if (item.classList[0] === 'check') {
        const todo = item.parentElement;
        todo === null || todo === void 0 ? void 0 : todo.classList.toggle('checked');
    }
});
//fillters
filters === null || filters === void 0 ? void 0 : filters.addEventListener('click', (e) => {
    if (e.target == null)
        return;
    const todos = document.querySelectorAll('.todo');
    const fill = e.target;
    switch (fill.classList[0]) {
        case "all":
            for (let i = 0; i < todos.length; i++) {
                todos[i].style.display = "flex";
            }
            break;
        case "complete":
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].classList.contains('checked')) {
                    todos[i].style.display = "flex";
                }
                else {
                    todos[i].style.display = "none";
                }
            }
            break;
        case "active":
            for (let i = 0; i < todos.length; i++) {
                if (!todos[i].classList.contains('checked')) {
                    todos[i].style.display = "flex";
                }
                else {
                    todos[i].style.display = "none";
                }
            }
            break;
    }
});
//delete the compleded ones
clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener('click', () => {
    const checkedTodos = document.querySelectorAll('.checked');
    checkedTodos.forEach((todo) => {
        todo === null || todo === void 0 ? void 0 : todo.remove();
    });
});
//conting the left items to do
