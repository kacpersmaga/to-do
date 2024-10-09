class UI {
    constructor() {

    }

    // PROJECT
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


    appendFormToMain(main, projectFormContainer) {
        main.appendChild(projectFormContainer);
    }

    handleFormSubmission(projectFormContainer) {
        const form = projectFormContainer.querySelector('.project-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const projectName = document.querySelector('#project-form-name').value;
            this.appendProjectToNavigation(projectName);
        });
    }

    appendProjectToNavigation(projectName) {
        const projects = document.querySelector('.projects');
        const project = this.createProjectElement(projectName);
        this.attachDeleteButtonHandler(project);
        projects.appendChild(project);
    }

    createProjectElement(projectName) {
        const project = document.createElement('div');
        project.classList.add('project');
        project.innerHTML = `
            <span class="project-name"># ${projectName}</span> 
            <div class="project-options">
                <button class="delete-button">x</button>
            </div>`;

        return project;
    }

    attachDeleteButtonHandler(project) {
        const removeButton = project.querySelector('.delete-button');
        removeButton.addEventListener('click', (e) => {
            this.removeProject(project);
        });
    }

    removeProject(project) {
        project.remove();
    }
}

export default UI;
