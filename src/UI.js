import Project from './project';


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

}

export default ProjectUI;
