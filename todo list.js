const todoList = [
    {name:' Go to game house ',
    dueDate: '2024-1-23',
    },
    {name:'make dinner',
    dueDate: '2024-2-1',
    }
];

renderTodoList();

function renderTodoList() {
let todoListHTML = ''

for (let i = 0; i < todoList.length; i++ )
{const todoObject = todoList [i];
    const name = todoObject.name;
    const dueDate= todoObject.dueDate;
    
const html = `
<div>${name} </div>
 <div>${dueDate} </div>
 

<button onclick="
todoList.splice(${i}, 1);
renderTodoList();
 " class="delete-todo-button">Delete</button>`;
todoListHTML += html;
}
console.log(todoListHTML);

document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;}

function addTodo() {
    const inputElement =
    document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateinputElement = 
document.querySelector('.js-due-date-input');
const dueDate= dateinputElement.value;
 todoList.push({
    name: name,
    dueDate: dueDate,

});
 console.log(todoList);

 inputElement.value= '' ;

 renderTodoList();
}