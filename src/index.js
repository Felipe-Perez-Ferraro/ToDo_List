import './style.css';
import {
  addList, tasksContainer, toDoSubmit, clearTasks,
} from './modules/ids.js';
import {
  setTask, printTasks, completeTask, removeTask, editTask, removeComplete,
} from './modules/tasks.js';

tasksContainer.addEventListener('click', completeTask);
tasksContainer.addEventListener('click', removeTask);
tasksContainer.addEventListener('click', editTask);
clearTasks.addEventListener('click', removeComplete);
toDoSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  setTask();
  printTasks();
  addList.reset();
});
