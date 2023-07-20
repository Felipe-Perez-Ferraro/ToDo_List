import removeTask from "../__mocks__/removeTask";

jest.mock('../index.js');

describe('To Do List', () => {
  describe('Removing a Task', () => {
    test('Removing task one', () => {
      expect(removeTask()).toBe(1);
    });
  })
});