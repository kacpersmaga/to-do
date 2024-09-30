import Task from './task.js';
import TaskUI from './taskUI.js';

class TaskManager {
    constructor() {
        this.taskUI = new TaskUI();
        this.tasks = [];
    }

    addTask(task, category) {
        this.tasks.push(task);
        
        if (category === 'today') {
            this.renderTasks(this.getTodayTasks());
        } else if (category === 'completed') {
            this.renderTasks(this.getCompletedTasks());
        } else {  // 'all'
            this.renderTasks(this.getIncompleteTasks());
        }
        

        
    }

    removeTask(taskIndex) {
        this.tasks.splice(taskIndex, 1);
    }

    renderTasks(tasks) {
        this.taskUI.clearTaskUI();  // Clear existing tasks from the UI


        tasks.forEach(task => {
            this.taskUI.displayTask(task);  // Display each task from the filtered list
        });
    }

    getTodayTasks() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);  // Normalize the time for comparison
    
        return this.tasks.filter((task) => {
            const taskDueDate = new Date(task.dueDate);
            taskDueDate.setHours(0, 0, 0, 0);  // Normalize the time for comparison
            return taskDueDate.getTime() === today.getTime() && !task.completed
        });
    }

    getCompletedTasks() {
        return this.tasks.filter(task => task.completed);
    }

    getIncompleteTasks() {
        return this.tasks.filter(task => !task.completed);
    }
}

export default TaskManager;
