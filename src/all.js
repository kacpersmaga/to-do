import { createAddTaskUI } from './tasks.js';

export const createAllPage = () => {
  const allPage = document.createElement('div');
  const header = document.createElement('h2');
  const taskContainer = document.createElement('div');
  const addTaskButton = document.createElement('button');


  allPage.classList.add('page-container');
  taskContainer.classList.add('task-container');
  addTaskButton.classList.add('add-task-button');

  header.innerText = 'All Open To-Dos';
  addTaskButton.textContent = 'Add a new task';


  addTaskButton.addEventListener('click', () => {
    addTaskButton.style.display = 'none';
    createAddTaskUI(taskContainer, addTaskButton);
  });

  allPage.append(header, taskContainer, addTaskButton);
  return allPage;
};