import Task from './task.js';
import TaskUI from './taskUI.js';

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
        this.renderTask(task);
    }

    removeTask(taskIndex) {
        this.tasks.splice(taskIndex, 1);
    }

    renderTask(task) {
        const taskUI = new TaskUI();
        taskUI.displayTask(task);
    }
}

export default TaskManager;
