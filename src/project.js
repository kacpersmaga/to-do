class Project {
    constructor (taskManager, taskForm) {
        this.taskManager = taskManager;
        this.taskForm = taskForm;
        this.projects = [];
    }

    createProject = (taskManager, taskForm, projectName) => {
        const allPage = document.createElement('div');
        const header = document.createElement('h2');
        const taskContainer = document.createElement('div');
        const addTaskButton = document.createElement('button');
    
        allPage.classList.add('page-container');
        taskContainer.classList.add('task-container');
        addTaskButton.classList.add('add-task-button');
    
        header.innerText = `${projectName} To-Dos`;
        addTaskButton.textContent = 'Add a new task';
    
        
    
        addTaskButton.addEventListener('click', () => {
            addTaskButton.style.display = 'none';
    
            const form = taskForm.createTaskForm();
            taskContainer.appendChild(form);
    
            taskForm.handleTaskFormSubmission(form, '', projectName);
            taskForm.addCancelButtonListener(form);
        });
    
        allPage.append(header, taskContainer, addTaskButton);
        return allPage;
    };

    createProjectInNav(projectName) {
        const projects = document.querySelector('.projects');
        const project = document.createElement('div');
        project.classList.add('project');
        project.innerHTML = `
            <span class="project-name"># ${projectName}</span> 
            <div class="project-options">
                <span>0</span>
                <button>x</button>
            </div>`;
        projects.appendChild(project);
    

        this.projects.push({ name: projectName, ui: project });
    
        project.addEventListener('click', () => {
            this.selectProject(projectName);
        });
    
        const removeButton = project.querySelector('button');
        removeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            this.removeProject(project, projectName);
        });
    }

    showForm() {
        const main = document.querySelector('main');
        const projectFormContainer = document.createElement('div');
        main.innerHTML = ' ';
        projectFormContainer.classList = 'project-form-container';
        projectFormContainer.innerHTML = `
            <form class="project-form">
                <h3 id="project-name-header">Project name</h3>
                <input type="text" name="project-form-name" id="project-form-name" required />
                <input type="submit" id="submit-button" value="Create" />
            </form>`;
        main.appendChild(projectFormContainer);

        const form = projectFormContainer.querySelector('.project-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const projectName = document.querySelector('#project-form-name').value;
            this.createProjectInNav(projectName);
            form.reset(); 
        });
    }

    selectProject(projectName) {
        const main = document.querySelector('main');
        

        main.innerHTML = '';
    

        const projectUI = this.createProject(this.taskManager, this.taskForm, projectName);
    

        main.appendChild(projectUI);
    

        const tasks = this.taskManager.getTasksByProject(projectName);
        this.taskManager.renderTasks(tasks);
    }
}

export default Project;