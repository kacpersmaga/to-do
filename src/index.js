import './styles.css';
import { createAllPage, createTodayPage, createCompletedPage } from './pages.js';
import TaskManager from './taskManager.js';
import TaskForm from './taskForm.js'; 
import TaskUI from './taskUI.js'


const taskManager = new TaskManager();
const taskForm = new TaskForm(taskManager);
const taskUI = new TaskUI(taskManager);


const allPage = createAllPage(taskManager, taskForm);
const todayPage = createTodayPage(taskManager, taskForm);
const completedPage = createCompletedPage(taskManager, taskForm);

const selectPage = (page) => {
    const main = document.querySelector('main');
    main.innerHTML = ''; 
    main.appendChild(page);



    if (page === todayPage) {
        const todayTasks = taskManager.getTodayTasks();
        taskManager.renderTasks(todayTasks);
    } else if (page === completedPage) {
        const completedTasks = taskManager.getCompletedTasks();
        taskManager.renderTasks(completedTasks);
    } else { 
        const incompleteTasks = taskManager.getIncompleteTasks();
        taskManager.renderTasks(incompleteTasks);
    }

    taskManager.updateTaskCounts();
};

document.querySelector('#all').addEventListener('click', () => selectPage(allPage));
document.querySelector('#today').addEventListener('click', () => selectPage(todayPage));
document.querySelector('#completed').addEventListener('click', () => selectPage(completedPage));

selectPage(allPage);
