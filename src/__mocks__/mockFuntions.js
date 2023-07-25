export default class ToDo {
  constructor() {
    this.arr = [];
    this.object = {
      index : 1,
      description : 'description',
      completed : false,
    };
  }

  addTask(task) {
    this.arr.push(task);
  }

  removeTask(taskName) {
    this.arr.splice(0, taskName);
  }

  editTask (index, newTask) {
    if (this.object.index === index) {
      this.object.description = newTask;
    }
  }
  
  updateStatus(boolean) {
    let initialSatus = true;

    if (boolean === initialSatus) {
      boolean = !initialSatus;
      this.object.completed = boolean;
    } else {
      boolean = initialSatus;
      this.object.completed = boolean;
    }
  }

  // remove all completed tasks from the array of objects if completed is true
  
  removeComplete(...tasks) {
    if (this.object.completed === true) {
      this.arr.splice(0, tasks);
    }
  }
}