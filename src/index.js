import './style.css';

// Ids
const addList = document.getElementById('addList');
const tasksContainer = document.getElementById('tasksContainer');
const addInput = document.getElementById('addInput');
const toDoSubmit = document.getElementById('toDoSubmit');
const removeAll = document.getElementById('removeAll');

let tasks = [];

const setTask = () => {
  const task = {
    id: tasks.length + 1,
    description: addInput.value,
    completed: false,
  };
  tasks = [...tasks, task];
};

const printTasks = () => {
  while (tasksContainer.firstChild) {
    tasksContainer.removeChild(tasksContainer.firstChild);
  }

  if (tasks.length > 0) {
    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.classList.add('toDo__list__item');
      li.innerHTML = `
        ${task.completed ? (
    `
          <div class="toDo__list__itemContainer marked">
          <i data-id="${task.id}" class="fa-solid fa-square-check completed"></i>
          <p class="toDo__description checked">${task.description}</p>
          </div>
          `
  ) : (
    `
          <div class="sides__container">
            <div class="toDo__left">
              <i data-id="${task.id}" class="fa-regular fa-square completed" title="Mark as complete"></i>
              <p class="toDo__description">${task.description}</p>
            </div>
            <div class="toDo__right">
              <i data-id="${task.id}" class="fa-solid fa-trash-can remove" title="Delete Task"></i>
              <i class="fa-solid fa-pen-to-square" title="Edit Task"></i>
            </div> 
          </div>
          `)}
      `;
      tasksContainer.appendChild(li);
    });
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const completeTask = (e) => {
  if (e.target.classList.contains('completed')) {
    const taskId = Number(e.target.getAttribute('data-id'));
    tasks.forEach((it) => {
      if (it.id === taskId) {
        it.completed = !it.completed;
      }
    });
  }
  printTasks();
};

const removeTask = (el) => {
  if (el.target.classList.contains('remove')) {
    const taskId = Number(el.target.getAttribute('data-id'));
    tasks.forEach((task, index) => {
      if (task.id === taskId) {
        tasks.splice(index, 1);
        for (let i = index; i < tasks.length; i++) {
          tasks[i].id -= 1;
        }
      }
    });
  }
  printTasks();
  console.log(tasks);
};

// const removeTask = () => {
//   const completeTask = document.querySelectorAll('.marked')
//   tasks.forEach((it) => {
//     if (it.completed === true) {
//       completeTask.forEach((el) => {
//         el.remove()
//       });
//     }
//   });
// }

toDoSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  setTask();
  printTasks();
  addList.reset();
  console.log(tasks);
});
tasksContainer.addEventListener('click', completeTask);
tasksContainer.addEventListener('click', removeTask);
removeAll.addEventListener('click', () => {
  tasks = [];
  printTasks();
});
document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('tasks'));
  tasks = data;
  printTasks();
});
