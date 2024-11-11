import ProjectRepository from '../repositories/ProjectRepository.js';
import Task from '../models/Task.js';

class TaskUI {
    renderProjectTasks(project) {
        const main = document.querySelector('main');
        main.innerHTML = '';
        
        const projectPage = this.createProjectUI(project);
        main.appendChild(projectPage);

        this.renderTasks(project.tasks, project);
        this.bindAddTaskButton(project);
    }

    createProjectUI(project) {
        const allPage = document.createElement('div');
        const header = document.createElement('h2');
        const taskContainer = document.createElement('div');
        const addTaskButton = document.createElement('button');

        allPage.classList.add('page-container');
        taskContainer.classList.add('task-container');
        addTaskButton.classList.add('add-task-button');

        header.innerText = `${project.name} To-Dos`;
        addTaskButton.textContent = 'Add a new task';

        allPage.append(header, taskContainer, addTaskButton);
        return allPage;
    }

    renderTasks(tasks, project = null) {
        const taskContainer = document.querySelector('.task-container');
        taskContainer.innerHTML = '';
        tasks.forEach(task => {
            const taskElement = this.createTaskElement(task, project);
            taskContainer.appendChild(taskElement);
        });
    }

    createTaskElement(task, project) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('project-item');


        taskElement.innerHTML = `
            <p class="task-name">${task.name}</p>
            <p class="due-date">Due: ${task.dueDate}</p>
            <p class="priority">Priority: ${task.priority}</p>
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
        `;

        this.bindTaskEvents(taskElement, task, project);
        return taskElement;
    }

    bindTaskEvents(taskElement, task, project) {
        const checkbox = taskElement.querySelector('.task-checkbox');
        checkbox.addEventListener('change', () => {
            task.toggleCompletion();
            if (project) {
                ProjectRepository.saveProject(project);
            }
            this.updateTaskCounts();
        });
    }

    bindAddTaskButton(project) {
        const addTaskButton = document.querySelector('.add-task-button');
        addTaskButton.addEventListener('click', () => {
            this.renderTaskForm(project);
        });
    }

    renderTaskForm(project) {
        const main = document.querySelector('main');
        main.innerHTML = '';

        const taskFormContainer = document.createElement('div');
        taskFormContainer.classList.add('task-info-container');
        taskFormContainer.innerHTML = `
            <form class="task-form">
                <div class="item">
                    <label for="task-name">Task</label>
                    <input type="text" id="task-name" name="task-name" required />
                </div>
                <div class="item">
                    <label for="due-date">Due Date</label>
                    <input type="date" id="due-date" name="due-date" required />
                </div>
                <div class="item">
                    <label for="priority">Priority</label>
                    <select id="priority" name="priority" required>
                        <option value="" disabled selected>Select priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <div class="decisive-buttons">
                    <button type="submit" id="submit-task">Add</button>
                    <button type="button" id="cancel-task">Cancel</button>
                </div>
            </form>
        `;

        main.appendChild(taskFormContainer);
        this.bindTaskFormEvents(project);
    }

    bindTaskFormEvents(project) {
        const form = document.querySelector('.task-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const taskName = form.querySelector('#task-name').value.trim();
            const dueDate = form.querySelector('#due-date').value;
            const priority = form.querySelector('#priority').value;

            if (taskName && dueDate && priority) {
                const newTask = new Task(taskName, dueDate, priority);
                project.addTask(newTask);
                ProjectRepository.saveProject(project);
                this.renderProjectTasks(project);
                this.updateTaskCounts();
            }
        });

        const cancelButton = document.getElementById('cancel-task');
        cancelButton.addEventListener('click', () => {
            this.renderProjectTasks(project);
        });
    }

    renderAllTasks() {
        const projects = ProjectRepository.getAllProjects();
        let allTasks = [];
        projects.forEach(project => {
            allTasks = allTasks.concat(project.tasks);
        });
        this.renderTasksPage('All Tasks', allTasks);
    }

    renderTodayTasks() {
        const projects = ProjectRepository.getAllProjects();
        const today = new Date().toISOString().split('T')[0];
        let todayTasks = [];
        projects.forEach(project => {
            const tasksDueToday = project.tasks.filter(task => task.dueDate === today);
            todayTasks = todayTasks.concat(tasksDueToday);
        });
        this.renderTasksPage("Today's Tasks", todayTasks);
    }

    renderCompletedTasks() {
        const projects = ProjectRepository.getAllProjects();
        let completedTasks = [];
        projects.forEach(project => {
            const completed = project.tasks.filter(task => task.completed);
            completedTasks = completedTasks.concat(completed);
        });
        this.renderTasksPage('Completed Tasks', completedTasks);
    }

    renderTasksPage(title, tasks) {
        const main = document.querySelector('main');
        main.innerHTML = '';

        const pageContainer = document.createElement('div');
        pageContainer.classList.add('page-container');

        const header = document.createElement('h2');
        header.innerText = title;

        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

        pageContainer.append(header, taskContainer);
        main.appendChild(pageContainer);

        this.renderTasks(tasks);
        this.updateTaskCounts();
    }

    updateTaskCounts() {
        const projects = ProjectRepository.getAllProjects();
        let allTasks = [];
        let todayTasks = [];
        let completedTasks = [];
        const today = new Date().toISOString().split('T')[0];

        projects.forEach(project => {
            allTasks = allTasks.concat(project.tasks);
            todayTasks = todayTasks.concat(project.tasks.filter(task => task.dueDate === today));
            completedTasks = completedTasks.concat(project.tasks.filter(task => task.completed));
        });

        document.getElementById('all-count').textContent = allTasks.length;
        document.getElementById('today-count').textContent = todayTasks.length;
        document.getElementById('completed-count').textContent = completedTasks.length;
    }
}

export default TaskUI;
