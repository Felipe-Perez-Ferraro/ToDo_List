import './style.css';

const tasksContainer = document.getElementById('tasksContainer');

const tasks = [
  {
    description: 'Play Football',
    completed: false,
    index: 1
  }
]

const printTask = () => {
  tasks.forEach((el) => {
    const li = document.createElement('li');
    li.classList.add('toDo__list__item');
    li.innerHTML = `
      <p>${el.completed ? 'completed' : 'not completed'}</p>
      <p>${el.description}</p>
    `
    tasksContainer.appendChild(li);
  })
}
printTask()