const removeTask = () => {
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
  const addInput = document.getElementById('addInput');
  addInput.value = 'first task';
  const toDoListOne = document.createElement('li');
  toDoListOne.classList.add('toDo__list__item');
  toDoListOne.innerText = addInput.value;
  const tasksContainer = document.getElementById('tasksContainer');
  tasksContainer.appendChild(toDoListOne);
  // Print Second Task
  const addInputTwo = document.getElementById('addInput');
  addInputTwo.value = 'second task';
  const toDoListTwo = document.createElement('li');
  toDoListTwo.classList.add('toDo__list__item');
  toDoListTwo.innerText = addInputTwo.value;
  tasksContainer.appendChild(toDoListTwo);
  // Removing First <li> Element from the dom
  let listQuantity = 2;
  toDoListOne.remove();
  const listContainer = document.querySelectorAll('.toDo__list__item');
  listQuantity = listContainer.length;
  
  return listQuantity;
}

export default removeTask;