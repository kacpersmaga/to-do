import Project from './project';
import Task from './task';


class ProjectUI {
    constructor() {
        this.projects = Project.getAllProjects();
        this.renderProjects();
    }


    renderProjectForm() {
        const main = document.querySelector('main');
        main.innerHTML = '';

        const projectFormContainer = this.createProjectFormElement();
        this.appendFormToMain(main, projectFormContainer);
        this.handleFormSubmission(projectFormContainer);
    }

    createProjectFormElement() {
        const projectFormContainer = document.createElement('div');
        projectFormContainer.classList.add('project-form-container');
        projectFormContainer.innerHTML = `
            <form class="project-form">
                <h3 id="project-name-header">Project name</h3>
                <input type="text" name="project-form-name" id="project-form-name" required />
                <input type="submit" id="submit-button" value="Create" />
            </form>`;
        return projectFormContainer;
    }

    createProject(projectName) {
        const newProject = new Project(projectName);
        this.projects.push(newProject);
        newProject.saveProject();
        return newProject;
    }

    renderProjects() {
        this.projects = Project.getAllProjects();
        const projectsContainer = document.querySelector('.projects');
        projectsContainer.innerHTML = '';
    
        this.projects.forEach(project => {
            const projectElement = this.createProjectElement(project);
            this.attachDeleteButtonHandler(projectElement, project.name);
            this.handleShowingTasks(projectElement, project);
            projectsContainer.appendChild(projectElement);
        });
    }

    appendFormToMain(main, projectFormContainer) {
        main.appendChild(projectFormContainer);
    }

    handleFormSubmission(projectFormContainer) {
        const form = projectFormContainer.querySelector('.project-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const projectName = document.querySelector('#project-form-name').value;
            const newProject = this.createProject(projectName);
            this.appendProjectToNavigation(newProject);
            this.renderProjects();  // Refresh the projects list
            this.renderProjectTasks(newProject);  // Display the new project
        });
    }

    appendProjectToNavigation(project) {
        const projectsContainer = document.querySelector('.projects');
        const projectElement = this.createProjectElement(project);
        this.attachDeleteButtonHandler(projectElement, project.name);
        projectsContainer.appendChild(projectElement);
    }

    createProjectElement(project) {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <span class="project-name"># ${project.name}</span> 
            <div class="project-options">
                <button class="delete-button">x</button>
            </div>`;

        return projectElement;
    }

    attachDeleteButtonHandler(projectElement, projectName) {
        const removeButton = projectElement.querySelector('.delete-button');
        removeButton.addEventListener('click', () => {
            this.removeProject(projectName);
        });
    }

    removeProject(projectName) {
        Project.removeProjectByName(projectName);
        this.renderProjects();
    }
    
    createProjectUI = (project) => {
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
    };

    handleShowingTasks(projectElement, project){
        projectElement.addEventListener('click', (e) => {          
            if (e.target.classList.contains('delete-button')) return;
            this.renderProjectTasks(project);
        });
    }

    renderProjectTasks(project) {
        const main = document.querySelector('main');
        main.innerHTML = '';
        const projectPage = this.createProjectUI(project);
        main.appendChild(projectPage);
    
        const taskContainer = projectPage.querySelector('.task-container');
    
        project.tasks.forEach(task => {
            const taskElement = this.createTaskElement(task, project);
            taskContainer.appendChild(taskElement);
        });
    
        const addTaskButton = projectPage.querySelector('.add-task-button');
        addTaskButton.addEventListener('click', () => {
            this.renderTaskForm(project);
        });
    }

    createTaskElement(task, project) {
        const taskContainer = document.querySelector('.task-container');
        const taskElement = document.createElement('div');
        taskElement.classList.add('project-item');
    
        taskElement.innerHTML = `
            <p class="task-name">${task.name}</p>
            <p class="due-date">${task.dueDate}</p>
            <p class="priority">${task.priority}</p>
            <input type="checkbox" class="task-checkbox">
        `;
    
        taskContainer.appendChild(taskElement);
    
        const completeButton = taskElement.querySelector('.task-checkbox');
    
        completeButton.checked = task.completed;
        completeButton.style.backgroundColor = task.completed ? 'red' : 'orange';
    
        completeButton.addEventListener('click', () => {
            task.completed = completeButton.checked;
            completeButton.style.backgroundColor = task.completed ? 'red' : 'orange';
            project.saveProject(); 
        });
    
        return taskElement;
    }
    

    renderTaskForm(project) {
        const main = document.querySelector('main');
    
        const taskFormContainer = document.createElement('div');
        taskFormContainer.classList.add('task-info-container');
        taskFormContainer.innerHTML = `
        <form class="task-form">
            <div class="item">
                <label for="task">Task</label>
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
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <div class="decisive-buttons">
                <button type="submit" id="submit-task">Add</button>
                <button type="button" id="cancel-task">Cancel</button>
            </div>
        </form>
        `;
    
        main.innerHTML = '';
        main.appendChild(taskFormContainer);


    
        const form = taskFormContainer.querySelector('.task-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const taskName = form.querySelector('#task-name').value;
            const dueDate = form.querySelector('#due-date').value;
            const priority = form.querySelector('#priority').value;
    
            const newTask = new Task(taskName, dueDate, priority);
            project.addTask(newTask);
    
            this.renderProjectTasks(project);
        });
    }

}

export default ProjectUI;
