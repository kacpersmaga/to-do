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
        this.updateTaskCounts();


    }

    removeTask(taskIndex) {
        this.tasks.splice(taskIndex, 1);
        this.updateTaskCounts();
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

    getAllTaskCount() {
        return this.tasks.length; // Total number of tasks
    }

    getTodayTaskCount() {
        return this.getTodayTasks().length; // Number of tasks due today
    }

    getCompletedTaskCount() {
        return this.getCompletedTasks().length; // Number of completed tasks
    }


    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }


    loadTasks() {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }

    updateTaskCounts() {
        const allCount = document.getElementById('all-count');
        const todayCount = document.getElementById('today-count');
        const completedCount = document.getElementById('completed-count');

        if (allCount) allCount.innerText = this.getAllTaskCount();
        if (todayCount) todayCount.innerText = this.getTodayTaskCount();
        if (completedCount) completedCount.innerText = this.getCompletedTaskCount();
    }
}

export default TaskManager;
