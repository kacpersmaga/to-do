import Task from './task.js';
import TaskUI from './taskUI.js';

class TaskManager {
    constructor() {
        this.taskUI = new TaskUI();
        this.tasks = this.loadTasks();
    }

    addTask(task, category) {
        this.tasks.push(task);
        this.saveTasks();

        if (category === 'today') {
            this.renderTasks(this.getTodayTasks());
        } else if (category === 'completed') {
            this.renderTasks(this.getCompletedTasks());
        } else {
            this.renderTasks(this.getIncompleteTasks());
        }
        

        
    }

    removeTask(taskIndex) {
        this.tasks.splice(taskIndex, 1);
        this.saveTasks();
    }

    renderTasks(tasks) {
        this.taskUI.clearTaskUI();


        tasks.forEach(task => {
            this.taskUI.displayTask(task);
        });
    }

    getTodayTasks() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
    
        return this.tasks.filter((task) => {
            const taskDueDate = new Date(task.dueDate);
            taskDueDate.setHours(0, 0, 0, 0);
            return taskDueDate.getTime() === today.getTime() && !task.completed
        });
    }

    getCompletedTasks() {
        return this.tasks.filter(task => task.completed);
    }

    getIncompleteTasks() {
        return this.tasks.filter(task => !task.completed);
    }


    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }


    loadTasks() {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }
}

export default TaskManager;
