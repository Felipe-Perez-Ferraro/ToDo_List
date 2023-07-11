import './style.css';

// Ids
const addList = document.getElementById('addList');
const tasksContainer = document.getElementById('tasksContainer');
const addInput = document.getElementById('addInput');
const toDoSubmit = document.getElementById('toDoSubmit');

let tasks = [];

const setTask = () => {
  const task = {
    id: Date.now(),
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
          <p class="checked">${task.description}</p>
          </div>
          `
  ) : (
    `
          <div class="toDo__list__itemContainer">
          <i data-id="${task.id}" class="fa-regular fa-square completed"></i>
          <p>${task.description}</p>
          </div>
          `)}
      `;
      tasksContainer.appendChild(li);
    });
  }
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
});

tasksContainer.addEventListener('click', completeTask);
// clearTasks.addEventListener('click', removeTask);
