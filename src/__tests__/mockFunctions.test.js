import ToDo from '../__mocks__/mockFuntions';

describe('To Do List', () => {
  it('Should add 1 task', () => {
    const testTask = new ToDo();
    testTask.addTask('task one');
    testTask.addTask('task two');
    testTask.addTask('task three');
    expect(testTask.arr.length).toBe(3);
  });

  it('Should remove 1 task', () => {
    const testTask = new ToDo();
    testTask.addTask('task one');
    testTask.addTask('task two');
    testTask.addTask('task three');
    testTask.removeTask(1, 'task one');
    testTask.removeTask(2, 'task one');
    testTask.removeTask(3, 'task one');
    expect(testTask.arr.length).toBe(0);
  });

  it('Should edit 1 task', () => {
    const testTask = new ToDo();
    testTask.addTask('task one');
    testTask.addTask('task two');
    testTask.addTask('task three');
    testTask.editTask(1, 'task one edited');
    testTask.editTask(2, 'task one edited');
    testTask.editTask(3, 'task one edited');
    expect(testTask.object.description).toBe('task one edited');
  });
});