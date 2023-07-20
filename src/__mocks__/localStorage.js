export const saveDataToLocal = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getDataFromLocal = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};