import {
  addInput, removeAll, errorMessage, tasksContainer,
} from './ids.js';

let tasks = [];

const setTask = () => {
  if (addInput.value === '') {
    errorMessage.style.display = 'block';
  } else {
    const task = {
      id: tasks?.length + 1,
      description: addInput.value,
      completed: false,
    };
    tasks = [...tasks, task];
    errorMessage.style.display = 'none';
  }
};

const printTasks = () => {
  while (tasksContainer.firstChild) {
    tasksContainer.removeChild(tasksContainer.firstChild);
  }

  if (tasks?.length > 0) {
    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.classList.add('toDo__list__item');
      li.innerHTML = `
        ${task.completed ? (
    `
          <div data-id="${task.id}" class="toDo__list__itemContainer marked">
            <i type="checkbox" data-id="${task.id}" class="fa-solid fa-square-check completed"></i>
            <label class="toDo__description checked">${task.description}</label>
          </div>
          `
  ) : (
    `
          <div class="sides__container">
            <div class="toDo__left">
              <i type="checkbox" data-id="${task.id}" class="fa-regular fa-square completed" title="Mark as complete"></i>
              <textarea name="textarea" class="toDo__description" cols="30" rows="1" readonly>${task.description}</textarea>
            </div>
            <div class="toDo__right">
              <i data-id="${task.id}" class="fa-solid fa-trash-can remove" title="Delete Task"></i>
              <i data-id="${task.id}" class="fa-solid fa-pen-to-square edit" title="Edit Task"></i>
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
        for (let i = index; i < tasks.length; i += 1) {
          tasks[i].id -= 1;
        }
      }
    });
  }
  printTasks();
};

const editTask = (el) => {
  const description = document.querySelectorAll('.toDo__description');
  if (el.target.classList.contains('edit')) {
    const taskId = Number(el.target.getAttribute('data-id'));
    tasks.forEach((task) => {
      if (task.id === taskId) {
        description[taskId - 1].removeAttribute('readonly');
        description[taskId - 1].select();

        description[taskId - 1].addEventListener('keydown', (k) => {
          if (k.key === 'Enter') {
            description[taskId - 1].setAttribute('readonly', 'readonly');
            const newTasks = JSON.parse(localStorage.getItem('tasks'));
            newTasks.forEach((task) => {
              if (task.id === taskId) {
                task.description = description[taskId - 1].value;
              }
            });
            tasks = newTasks;
            printTasks();
          }
        });
      }
    });
  }
};

const removeComplete = () => {
  tasks = tasks.filter((task) => !task.completed);
  tasks.forEach((task, index) => {
    task.id = index + 1;
  });
  printTasks();
};

removeAll.addEventListener('click', () => {
  tasks = [];
  printTasks();
});
document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = data;
  printTasks();
});

export {
  setTask, printTasks, completeTask, removeTask, editTask, removeComplete,
};