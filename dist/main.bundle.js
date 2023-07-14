"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo_list/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_ids_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ids.js */ \"./src/modules/ids.js\");\n/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tasks.js */ \"./src/modules/tasks.js\");\n\r\n\r\n\r\n\r\n_modules_ids_js__WEBPACK_IMPORTED_MODULE_1__.tasksContainer.addEventListener('click', _modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__.completeTask);\r\n_modules_ids_js__WEBPACK_IMPORTED_MODULE_1__.tasksContainer.addEventListener('click', _modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__.removeTask);\r\n_modules_ids_js__WEBPACK_IMPORTED_MODULE_1__.tasksContainer.addEventListener('click', _modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__.editTask);\r\n_modules_ids_js__WEBPACK_IMPORTED_MODULE_1__.clearTasks.addEventListener('click', _modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__.removeComplete);\r\n_modules_ids_js__WEBPACK_IMPORTED_MODULE_1__.toDoSubmit.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  (0,_modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__.setTask)();\r\n  (0,_modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__.printTasks)();\r\n  _modules_ids_js__WEBPACK_IMPORTED_MODULE_1__.addList.reset();\r\n});\r\n\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/ids.js":
/*!****************************!*\
  !*** ./src/modules/ids.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addInput: () => (/* binding */ addInput),\n/* harmony export */   addList: () => (/* binding */ addList),\n/* harmony export */   clearTasks: () => (/* binding */ clearTasks),\n/* harmony export */   errorMessage: () => (/* binding */ errorMessage),\n/* harmony export */   removeAll: () => (/* binding */ removeAll),\n/* harmony export */   tasksContainer: () => (/* binding */ tasksContainer),\n/* harmony export */   toDoSubmit: () => (/* binding */ toDoSubmit)\n/* harmony export */ });\n// Ids\r\nconst addList = document.getElementById('addList');\r\nconst tasksContainer = document.getElementById('tasksContainer');\r\nconst addInput = document.getElementById('addInput');\r\nconst toDoSubmit = document.getElementById('toDoSubmit');\r\nconst removeAll = document.getElementById('removeAll');\r\nconst errorMessage = document.getElementById('errorMessage');\r\nconst clearTasks = document.getElementById('clearTasks');\n\n//# sourceURL=webpack://todo_list/./src/modules/ids.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   completeTask: () => (/* binding */ completeTask),\n/* harmony export */   editTask: () => (/* binding */ editTask),\n/* harmony export */   printTasks: () => (/* binding */ printTasks),\n/* harmony export */   removeComplete: () => (/* binding */ removeComplete),\n/* harmony export */   removeTask: () => (/* binding */ removeTask),\n/* harmony export */   setTask: () => (/* binding */ setTask)\n/* harmony export */ });\n/* harmony import */ var _ids_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ids.js */ \"./src/modules/ids.js\");\n\r\n\r\nlet tasks = [];\r\n\r\nconst setTask = () => {\r\n  if (_ids_js__WEBPACK_IMPORTED_MODULE_0__.addInput.value === '') {\r\n    _ids_js__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.display = 'block';\r\n  } else {\r\n    const task = {\r\n      id: tasks?.length + 1,\r\n      description: _ids_js__WEBPACK_IMPORTED_MODULE_0__.addInput.value,\r\n      completed: false,\r\n    };\r\n    tasks = [...tasks, task];\r\n    _ids_js__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.display = 'none';\r\n  }\r\n};\r\n\r\nconst printTasks = () => {\r\n  while (_ids_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.firstChild) {\r\n    _ids_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.removeChild(_ids_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.firstChild);\r\n  }\r\n\r\n  if (tasks?.length > 0) {\r\n    tasks.forEach((task) => {\r\n      const li = document.createElement('li');\r\n      li.classList.add('toDo__list__item');\r\n      li.innerHTML = `\r\n        ${task.completed ? (\r\n    `\r\n          <div data-id=\"${task.id}\" class=\"toDo__list__itemContainer marked\">\r\n            <i type=\"checkbox\" data-id=\"${task.id}\" class=\"fa-solid fa-square-check completed\"></i>\r\n            <label class=\"toDo__description checked\">${task.description}</label>\r\n          </div>\r\n          `\r\n  ) : (\r\n    `\r\n          <div class=\"sides__container\">\r\n            <div class=\"toDo__left\">\r\n              <i type=\"checkbox\" data-id=\"${task.id}\" class=\"fa-regular fa-square completed\" title=\"Mark as complete\"></i>\r\n              <textarea name=\"textarea\" class=\"toDo__description\" cols=\"30\" rows=\"1\" readonly>${task.description}</textarea>\r\n            </div>\r\n            <div class=\"toDo__right\">\r\n              <i data-id=\"${task.id}\" class=\"fa-solid fa-trash-can remove\" title=\"Delete Task\"></i>\r\n              <i data-id=\"${task.id}\" class=\"fa-solid fa-pen-to-square edit\" title=\"Edit Task\"></i>\r\n            </div> \r\n          </div>\r\n          `)}\r\n      `;\r\n      _ids_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.appendChild(li);\r\n    });\r\n  }\r\n  localStorage.setItem('tasks', JSON.stringify(tasks));\r\n};\r\n\r\nconst completeTask = (e) => {\r\n  if (e.target.classList.contains('completed')) {\r\n    const taskId = Number(e.target.getAttribute('data-id'));\r\n    tasks.forEach((it) => {\r\n      if (it.id === taskId) {\r\n        it.completed = !it.completed;\r\n      }\r\n    });\r\n  }\r\n  printTasks();\r\n};\r\n\r\nconst removeTask = (el) => {\r\n  if (el.target.classList.contains('remove')) {\r\n    const taskId = Number(el.target.getAttribute('data-id'));\r\n    tasks.forEach((task, index) => {\r\n      if (task.id === taskId) {\r\n        tasks.splice(index, 1);\r\n        for (let i = index; i < tasks.length; i += 1) {\r\n          tasks[i].id -= 1;\r\n        }\r\n      }\r\n    });\r\n  }\r\n  printTasks();\r\n};\r\n\r\nconst editTask = (el) => {\r\n  const description = document.querySelectorAll('.toDo__description');\r\n  if (el.target.classList.contains('edit')) {\r\n    const taskId = Number(el.target.getAttribute('data-id'));\r\n    tasks.forEach((task) => {\r\n      if (task.id === taskId) {\r\n        description[taskId - 1].removeAttribute('readonly');\r\n        description[taskId - 1].select();\r\n\r\n        description[taskId - 1].addEventListener('keydown', (k) => {\r\n          if (k.key === 'Enter') {\r\n            description[taskId - 1].setAttribute('readonly', 'readonly');\r\n            const newTasks = JSON.parse(localStorage.getItem('tasks'));\r\n            newTasks.forEach((task) => {\r\n              if (task.id === taskId) {\r\n                task.description = description[taskId - 1].value;\r\n              }\r\n            });\r\n            tasks = newTasks;\r\n            printTasks();\r\n          }\r\n        });\r\n      }\r\n    });\r\n  }\r\n};\r\n\r\nconst removeComplete = () => {\r\n  tasks = tasks.filter((task) => !task.completed);\r\n  tasks.forEach((task, index) => {\r\n    task.id = index + 1;\r\n  });\r\n  printTasks();\r\n};\r\n\r\n_ids_js__WEBPACK_IMPORTED_MODULE_0__.removeAll.addEventListener('click', () => {\r\n  tasks = [];\r\n  printTasks();\r\n});\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const data = JSON.parse(localStorage.getItem('tasks')) || [];\r\n  tasks = data;\r\n  printTasks();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/modules/tasks.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);