const addTask = () => {
  document.body.innerHTML = `
  <form id="addList" class="toDo__add">
    <input 
      type="text" 
      name="add" 
      id="addInput" 
      class="toDo__add__input"
      placeholder="Add to your list..."
      required
    >
    <button 
      type="submit" 
      id="toDoSubmit"
      class="fa-solid fa-share"
      value=""
    >
    </button>
  </form>
  <ul id="tasksContainer" class="toDo__list__container"><ul>
  `;
  // Print first Task
  const addItem = document.getElementById('addInput');
  addItem.value = 'task one';
  const toDoList = document.createElement('li');
  toDoList.classList.add('toDo__list__item');
  toDoList.innerText = addItem.value;
  const tasksContainer = document.getElementById('tasksContainer');
  tasksContainer.appendChild(toDoList);
  // Adding the task to the array
  const listContainer = document.querySelectorAll('.toDo__list__item');
  const arr = [];
  arr[0] = listContainer.length;
  arr[1] = addItem.value;
  return arr;
};

export default addTask;