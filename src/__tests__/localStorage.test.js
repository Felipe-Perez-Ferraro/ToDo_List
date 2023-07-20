import { saveDataToLocal, getDataFromLocal } from "../__mocks__/localStorage";

const localStorageMock = (() => {
  let store = {};

  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('localStorageUtil', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('should save data to local storage', () => {
    const key = 'testKey';
    const data = { testVariable: 'testString' };
    saveDataToLocal(key, data);

    expect(localStorage.getItem(key)).toBe(JSON.stringify(data));
  });

  it('should get data from local storage', () => {
    const key = 'testKey';
    const data = { testVariable: 'testString' };

    localStorage.setItem(key, JSON.stringify(data));

    expect(getDataFromLocal(key)).toEqual(data);
  });
});