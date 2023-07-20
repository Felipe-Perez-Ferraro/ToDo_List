import addTask from "../__mocks__/addTask";

jest.mock('../index.js');

describe('To Do List', () => {
  describe('Add Task', () => {
    it('Should get the number of the elements added', () => {
      expect(addTask()[0]).toBe(1);
    });
  
    it('Should get task one', () => {
      expect(addTask()[1]).toMatch('task one');
    });
  })
});