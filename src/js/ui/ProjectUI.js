import ProjectRepository from '../repositories/ProjectRepository.js';
import Project from '../models/Project.js';
import TaskUI from './TaskUI.js';

class ProjectUI {
    constructor() {
        this.projects = ProjectRepository.getAllProjects();
        this.taskUI = new TaskUI();
    }

    init() {
        this.renderProjects();
        this.bindAddProjectButton();
        this.bindFilterButtons();
        this.updateTaskCounts();
    }

    bindAddProjectButton() {
        const addProjectButton = document.getElementById('project-create-button');
        addProjectButton.addEventListener('click', () => this.renderProjectForm());
    }

    bindFilterButtons() {
        document.getElementById('filter-all').addEventListener('click', () => {
            this.taskUI.renderAllTasks();
        });
        document.getElementById('filter-today').addEventListener('click', () => {
            this.taskUI.renderTodayTasks();
        });
        document.getElementById('filter-completed').addEventListener('click', () => {
            this.taskUI.renderCompletedTasks();
        });
    }

    renderProjects() {
        const projectsContainer = document.querySelector('.projects');
        projectsContainer.innerHTML = '';

        this.projects.forEach(project => {
            const projectElement = this.createProjectElement(project);
            projectsContainer.appendChild(projectElement);
        });
    }

    createProjectElement(project) {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <span class="project-name"># ${project.name}</span>
            <div class="project-options">
                <button class="delete-button">×</button>
            </div>
        `;
        this.bindProjectEvents(projectElement, project);
        return projectElement;
    }

    bindProjectEvents(projectElement, project) {
        projectElement.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-button')) {
                e.stopPropagation();
                this.deleteProject(project.name);
            } else {
                this.taskUI.renderProjectTasks(project);
            }
        });
    }

    renderProjectForm() {
        const main = document.querySelector('main');
        main.innerHTML = '';

        const projectFormContainer = document.createElement('div');
        projectFormContainer.classList.add('project-form-container');
        projectFormContainer.innerHTML = `
            <form class="project-form">
                <h3 id="project-name-header">Project Name</h3>
                <input type="text" name="project-form-name" id="project-form-name" required />
                <input type="submit" id="submit-button" value="Create" />
            </form>
        `;

        main.appendChild(projectFormContainer);
        this.bindProjectFormEvents();
    }

    bindProjectFormEvents() {
        const form = document.querySelector('.project-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const projectName = document.querySelector('#project-form-name').value.trim();
            if (projectName) {
                const newProject = new Project(projectName);
                ProjectRepository.saveProject(newProject);
                this.projects.push(newProject);
                this.renderProjects();
                this.taskUI.renderProjectTasks(newProject);
            }
        });
    }

    deleteProject(projectName) {
        ProjectRepository.deleteProject(projectName);
        this.projects = this.projects.filter(project => project.name !== projectName);
        this.renderProjects();
        this.updateTaskCounts();
        const main = document.querySelector('main');
        if (main.querySelector('h2') && main.querySelector('h2').textContent.includes(projectName)) {
            main.innerHTML = '';
        }
    }

    updateTaskCounts() {
        this.taskUI.updateTaskCounts();
    }
}

export default ProjectUI;
