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

  it('Should update the status', () => {
    const testTask = new ToDo();
    const testObj = {
      id: 1,
      description: 'task one',
      completed: false
    }
    testTask.updateStatus(testObj.completed)
    const satusExpected = true;
    expect(testTask.object.completed).toStrictEqual(satusExpected);
  });  

  it('Should remove tasks with completed property set to true from an array of objects completed value', () => {
    const testTask = new ToDo();
    const testArr = [
      {
        id: 1,
        description: 'task one',
        completed: false
      },
      {
        id: 2,
        description: 'task two',
        completed: true
      },
      {
        id: 3,
        description: 'task three',
        completed: false
      }
    ];
    testTask.removeComplete(testArr);
    const testArrExpected = [
      {
        id: 1,
        description: 'task one',
        completed: false
      },
      {
        id: 3,
        description: 'task three',
        completed: false
      }
    ];
    expect(testArr).toStrictEqual(testArrExpected);
  });
});

