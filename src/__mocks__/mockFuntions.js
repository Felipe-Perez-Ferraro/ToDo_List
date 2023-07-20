export default class ToDo {
  constructor() {
    this.arr = [];
  }

  addTask(task) {
    this.arr.push(task);
  }

  removeTask(taskName) {
    this.arr.splice(0, taskName);
  }
}