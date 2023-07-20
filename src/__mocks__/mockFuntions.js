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
}