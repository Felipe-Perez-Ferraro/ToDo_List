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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ids */ \"./src/modules/ids.js\");\n/* harmony import */ var _modules_tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tasks */ \"./src/modules/tasks.js\");\n\n\n\n\n_modules_ids__WEBPACK_IMPORTED_MODULE_1__.tasksContainer.addEventListener('click', _modules_tasks__WEBPACK_IMPORTED_MODULE_2__.completeTask);\n_modules_ids__WEBPACK_IMPORTED_MODULE_1__.tasksContainer.addEventListener('click', _modules_tasks__WEBPACK_IMPORTED_MODULE_2__.removeTask);\n_modules_ids__WEBPACK_IMPORTED_MODULE_1__.tasksContainer.addEventListener('click', _modules_tasks__WEBPACK_IMPORTED_MODULE_2__.editTask);\n_modules_ids__WEBPACK_IMPORTED_MODULE_1__.clearTasks.addEventListener('click', removeComplete);\n_modules_ids__WEBPACK_IMPORTED_MODULE_1__.toDoSubmit.addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_modules_tasks__WEBPACK_IMPORTED_MODULE_2__.setTask)();\n  (0,_modules_tasks__WEBPACK_IMPORTED_MODULE_2__.printTasks)();\n  _modules_ids__WEBPACK_IMPORTED_MODULE_1__.addList.reset();\n});\n\n\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/ids.js":
/*!****************************!*\
  !*** ./src/modules/ids.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addInput: () => (/* binding */ addInput),\n/* harmony export */   addList: () => (/* binding */ addList),\n/* harmony export */   clearTasks: () => (/* binding */ clearTasks),\n/* harmony export */   errorMessage: () => (/* binding */ errorMessage),\n/* harmony export */   removeAll: () => (/* binding */ removeAll),\n/* harmony export */   tasksContainer: () => (/* binding */ tasksContainer),\n/* harmony export */   toDoSubmit: () => (/* binding */ toDoSubmit)\n/* harmony export */ });\n// Ids\nconst addList = document.getElementById('addList');\nconst tasksContainer = document.getElementById('tasksContainer');\nconst addInput = document.getElementById('addInput');\nconst toDoSubmit = document.getElementById('toDoSubmit');\nconst removeAll = document.getElementById('removeAll');\nconst errorMessage = document.getElementById('errorMessage');\nconst clearTasks = document.getElementById('clearTasks');\n\n//# sourceURL=webpack://todo_list/./src/modules/ids.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   completeTask: () => (/* binding */ completeTask),\n/* harmony export */   editTask: () => (/* binding */ editTask),\n/* harmony export */   printTasks: () => (/* binding */ printTasks),\n/* harmony export */   removeComplete: () => (/* binding */ removeComplete),\n/* harmony export */   removeTask: () => (/* binding */ removeTask),\n/* harmony export */   setTask: () => (/* binding */ setTask)\n/* harmony export */ });\n/* harmony import */ var _ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ids */ \"./src/modules/ids.js\");\n\n\nlet tasks = [];\n\nconst setTask = () => {\n  if (_ids__WEBPACK_IMPORTED_MODULE_0__.addInput.value === '') {\n    _ids__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.display = 'block';\n  } else {\n    const task = {\n      id: tasks?.length + 1,\n      description: _ids__WEBPACK_IMPORTED_MODULE_0__.addInput.value,\n      completed: false,\n    };\n    tasks = [...tasks, task];\n    _ids__WEBPACK_IMPORTED_MODULE_0__.errorMessage.style.display = 'none';\n  }\n};\n\nconst printTasks = () => {\n  while (tasksContainer.firstChild) {\n    tasksContainer.removeChild(tasksContainer.firstChild);\n  }\n\n  if (tasks?.length > 0) {\n    tasks.forEach((task) => {\n      const li = document.createElement('li');\n      li.classList.add('toDo__list__item');\n      li.innerHTML = `\n        ${task.completed ? (\n            `\n          <div data-id=\"${task.id}\" class=\"toDo__list__itemContainer marked\">\n            <i type=\"checkbox\" data-id=\"${task.id}\" class=\"fa-solid fa-square-check completed\"></i>\n            <label class=\"toDo__description checked\">${task.description}</label>\n          </div>\n          `\n  ) : (\n    `\n          <div class=\"sides__container\">\n            <div class=\"toDo__left\">\n              <i type=\"checkbox\" data-id=\"${task.id}\" class=\"fa-regular fa-square completed\" title=\"Mark as complete\"></i>\n              <textarea name=\"textarea\" class=\"toDo__description\" cols=\"30\" rows=\"1\" readonly>${task.description}</textarea>\n            </div>\n            <div class=\"toDo__right\">\n              <i data-id=\"${task.id}\" class=\"fa-solid fa-trash-can remove\" title=\"Delete Task\"></i>\n              <i data-id=\"${task.id}\" class=\"fa-solid fa-pen-to-square edit\" title=\"Edit Task\"></i>\n            </div> \n          </div>\n          `)}\n      `;\n      tasksContainer.appendChild(li);\n    });\n  }\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n};\n\nconst completeTask = (e) => {\n  if (e.target.classList.contains('completed')) {\n    const taskId = Number(e.target.getAttribute('data-id'));\n    tasks.forEach((it) => {\n      if (it.id === taskId) {\n        it.completed = !it.completed;\n      }\n    });\n  }\n  printTasks();\n};\n\nconst removeTask = (el) => {\n  if (el.target.classList.contains('remove')) {\n    const taskId = Number(el.target.getAttribute('data-id'));\n    tasks.forEach((task, index) => {\n      if (task.id === taskId) {\n        tasks.splice(index, 1);\n        for (let i = index; i < tasks.length; i += 1) {\n          tasks[i].id -= 1;\n        }\n      }\n    });\n  }\n  printTasks();\n};\n\nconst editTask = (el) => {\n  const description = document.querySelectorAll('.toDo__description');\n  if (el.target.classList.contains('edit')) {\n    const taskId = Number(el.target.getAttribute('data-id'));\n    tasks.forEach((task) => {\n      if (task.id === taskId) {\n        description[taskId - 1].removeAttribute('readonly');\n        description[taskId - 1].select();\n\n        description[taskId - 1].addEventListener('keydown', (k) => {\n          if (k.key === 'Enter') {\n            description[taskId - 1].setAttribute('readonly', 'readonly');\n            const newTasks = JSON.parse(localStorage.getItem('tasks'));\n            newTasks.forEach((task) => {\n              if (task.id === taskId) {\n                task.description = description[taskId - 1].value;\n              }\n            });\n            tasks = newTasks;\n            printTasks();\n          }\n        });\n      }\n    });\n  }\n};\n\nconst removeComplete = () => {\n    tasks = tasks.filter((task) => !task.completed);\n    tasks.forEach((task, index) => {\n        task.id = index + 1;\n    });\n    console.log(tasks)\n    printTasks();\n}\n\n_ids__WEBPACK_IMPORTED_MODULE_0__.removeAll.addEventListener('click', () => {\n  tasks = [];\n  printTasks();\n});\ndocument.addEventListener('DOMContentLoaded', () => {\n  const data = JSON.parse(localStorage.getItem('tasks')) || [];\n  tasks = data;\n  printTasks();\n});\n\n\n\n//# sourceURL=webpack://todo_list/./src/modules/tasks.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);