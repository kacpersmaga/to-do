import './styles.css';
import { createAllPage, createTodayPage, createCompletedPage } from './pages.js';
import TaskManager from './taskManager.js';
import TaskForm from './taskForm.js'; 
import TaskUI from './taskUI.js'


const taskManager = new TaskManager();
const taskForm = new TaskForm(taskManager);

const allPage = createAllPage(taskManager, taskForm);
const todayPage = createTodayPage(taskManager, taskForm);
const completedPage = createCompletedPage(taskManager, taskForm);

const selectPage = (page) => {
    const main = document.querySelector('main');
    main.innerHTML = '';  // Clear the main content
    main.appendChild(page);



    if (page === todayPage) {
        const todayTasks = taskManager.getTodayTasks();
        taskManager.renderTasks(todayTasks);  // Render only today's tasks
    } else if (page === completedPage) {
        const completedTasks = taskManager.getCompletedTasks();
        taskManager.renderTasks(completedTasks);  // Render only completed tasks
    } else {  // Default to the "All" page
        const incompleteTasks = taskManager.getIncompleteTasks();
        taskManager.renderTasks(incompleteTasks);  // Render only incomplete tasks
    }
};

document.querySelector('#all').addEventListener('click', () => selectPage(allPage));
document.querySelector('#today').addEventListener('click', () => selectPage(todayPage));
document.querySelector('#completed').addEventListener('click', () => selectPage(completedPage));

selectPage(allPage);
