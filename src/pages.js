import TaskManager from './taskManager.js';
import TaskForm from './taskForm.js';




export const createAllPage = (taskManager, taskForm) => {
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

        const form = taskForm.createTaskForm();
        taskContainer.appendChild(form);

        taskForm.handleTaskFormSubmission(form, 'all');
        taskForm.addCancelButtonListener(form);
    });

    allPage.append(header, taskContainer, addTaskButton);
    return allPage;
};

export const createTodayPage = (taskManager, taskForm) => {
    const allPage = document.createElement('div');
    const header = document.createElement('h2');
    const taskContainer = document.createElement('div');
    const addTaskButton = document.createElement('button');


    allPage.classList.add('page-container');
    taskContainer.classList.add('task-container');
    addTaskButton.classList.add('add-task-button');

    header.innerText = 'Today To-Dos';
    addTaskButton.textContent = 'Add a new task';


    addTaskButton.addEventListener('click', () => {
        addTaskButton.style.display = 'none';

        const form = taskForm.createTaskForm();
        taskContainer.appendChild(form);

        taskForm.handleTaskFormSubmission(form, 'today');
        taskForm.addCancelButtonListener(form);
    });

    allPage.append(header, taskContainer, addTaskButton);
    return allPage;
};

export const createCompletedPage = (taskManager, taskForm) => {
    const allPage = document.createElement('div');
    const header = document.createElement('h2');
    const taskContainer = document.createElement('div');
    const addTaskButton = document.createElement('button');


    allPage.classList.add('page-container');
    taskContainer.classList.add('task-container');
    addTaskButton.classList.add('add-task-button');

    header.innerText = 'Completed To-Dos';
    addTaskButton.textContent = 'Add a new task';

    addTaskButton.addEventListener('click', () => {
        addTaskButton.style.display = 'none';

        const form = taskForm.createTaskForm();
        taskContainer.appendChild(form);

        taskForm.handleTaskFormSubmission(form, 'completed');
        taskForm.addCancelButtonListener(form);
    });

    allPage.append(header, taskContainer, addTaskButton);
    return allPage;
};

