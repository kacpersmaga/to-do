import Task from './task.js';

class TaskForm {
    constructor(taskManager) {
        this.taskManager = taskManager;
    }

    createTaskForm() {
        const taskCreateInfo = document.createElement('form');
        taskCreateInfo.classList = 'task-info-container';
        taskCreateInfo.innerHTML = `
            <div class="item">
                <label for="task">Task</label>
                <input type="text" id="task" required />
            </div>
            <div class="item">
                <label for="due-date">Due Date</label>
                <input type="date" id="due-date" required />
            </div>
            <div class="item">
                <label for="priority">Priority</label>
                <select id="priority" required>
                    <option value="" disabled selected>Select priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <div class="decisive-buttons">
                <button type="submit" id="submit-task">Add</button>
                <button type="button" id="cancel-task">Cancel</button>
            </div>
        `;

        return taskCreateInfo;
    }

    addCancelButtonListener(taskCreateInfo) {
        const cancelButton = taskCreateInfo.querySelector('#cancel-task');
        const addTaskButton = document.querySelector('.add-task-button');

        cancelButton.addEventListener('click', () => {
            taskCreateInfo.remove(); 
            addTaskButton.style.display = 'block'; 
        });
    }

    handleTaskFormSubmission(taskCreateInfo) {
        taskCreateInfo.addEventListener('submit', (event) => {
            event.preventDefault();

            const taskName = taskCreateInfo.querySelector('#task').value;
            const dueDate = taskCreateInfo.querySelector('#due-date').value;
            const priority = taskCreateInfo.querySelector('#priority').value;

            const task = new Task(taskName, dueDate, priority);
            this.taskManager.addTask(task);

            taskCreateInfo.remove();
            document.querySelector('.add-task-button').style.display = 'block';
        });
    }
}

export default TaskForm;
