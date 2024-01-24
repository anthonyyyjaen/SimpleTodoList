const todolist = JSON.parse(localStorage.getItem('todoList')) ||
[
];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';
    
    /*
    for(let i = 0; i < todoList2.length; i++) {
        const todoObject = todoList2[i];
        const { name, dueDate } = todoObject;

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        // todoList2.splice(${i}, 1);
        renderTodoList();
        saveStorage();
        ">Delete</button>
        `;
        // todoListHTML += html;
    }
    */

    todolist.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button 
        class="delete-button"
        >Delete</button>
        `;
        todoListHTML += html;
    });

    document.querySelector('.todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todolist.splice(index, 1);
            renderTodoList();
            saveStorage();
        });
    });
}

document.querySelector('.add-button').addEventListener('click', () => {
    addTodo();
});


function addTodo() {
    const inputElement = document.querySelector('.input-box2');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.date-input');
    const dueDate = dateInputElement.value

    todolist.push({
        // name: name,
        // dueDate: date
        name,
        dueDate
    });

    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();
    saveStorage();
}

function saveStorage() {
    localStorage.setItem('todoList', JSON.stringify(todolist));
}

