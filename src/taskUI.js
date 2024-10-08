import TaskManager from './taskManager.js';

class TaskUI {
    constructor(taskManager) {
        this.taskManager = taskManager;
    }

    displayTask(task) {
        const taskContainer = document.querySelector('.task-container');
        const project = document.createElement('div');
        project.classList.add('project-item');

        project.innerHTML = `
            <p class="task-name">${task.name}</p>
            <p class="due-date">${task.dueDate}</p>
            <p class="priority">${task.priority}</p>
            <input type="checkbox" class="task-checkbox">
        `;

        taskContainer.appendChild(project);

        const checkbox = project.querySelector('.task-checkbox');
        checkbox.addEventListener('change', () => {
            task.completed = task.completed = !task.completed;
            this.taskManager.saveTasks();
            this.taskManager.updateTaskCounts();
            project.remove();

        });
    }

    clearTaskUI() {
        const taskContainer = document.querySelector('.task-container');
        if(taskContainer){
            taskContainer.innerHTML = '';
        }

    }


}

export default TaskUI;
