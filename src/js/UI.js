// ui.js
import Project from './project';
import Task from './task';

class ProjectUI {
  constructor() {
    this.projects = Project.getAllProjects();
    this.renderProjects();
    this.updateTaskCounts();
  }

  bindFilterButtons() {
    const allFilter = document.getElementById('filter-all');
    const todayFilter = document.getElementById('filter-today');
    const completedFilter = document.getElementById('filter-completed');

    allFilter.addEventListener('click', () => this.renderAllTasks());
    todayFilter.addEventListener('click', () => this.renderTodayTasks());
    completedFilter.addEventListener('click', () => this.renderCompletedTasks());
  }

  renderAllTasks() {
    const allTasks = this.getAllTasks();
    this.renderTasksPage('All Tasks', allTasks);
  }

  renderTodayTasks() {
    const todayTasks = this.getTodayTasks();
    this.renderTasksPage("Today's Tasks", todayTasks);
  }

  renderCompletedTasks() {
    const completedTasks = this.getCompletedTasks();
    this.renderTasksPage('Completed Tasks', completedTasks);
  }

  getAllTasks() {
    let tasks = [];
    this.projects.forEach(project => {
      tasks = tasks.concat(project.tasks);
    });
    return tasks;
  }

  getTodayTasks() {
    const allTasks = this.getAllTasks();
    const today = new Date().toISOString().split('T')[0];
    return allTasks.filter(task => task.dueDate === today);
  }

  getCompletedTasks() {
    const allTasks = this.getAllTasks();
    return allTasks.filter(task => task.completed);
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

    tasks.forEach(task => {
      const taskElement = this.createTaskElement(task);
      taskContainer.appendChild(taskElement);
    });

    this.updateTaskCounts();
  }

  createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('project-item');

    taskElement.innerHTML = `
      <p class="task-name">${task.name}</p>
      <p class="due-date">${task.dueDate}</p>
      <p class="priority">${task.priority}</p>
      <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
    `;

    const completeButton = taskElement.querySelector('.task-checkbox');

    completeButton.checked = task.completed;
    completeButton.style.backgroundColor = task.completed ? 'red' : 'orange';

    completeButton.addEventListener('change', () => {
      task.completed = completeButton.checked;
      completeButton.style.backgroundColor = task.completed ? 'red' : 'orange';
      this.saveTask(task);
      this.updateTaskCounts();

      const headerTitle = document.querySelector('main h2').innerText;
      if (headerTitle === 'Completed Tasks') {
        this.renderCompletedTasks();
      } else if (headerTitle === "Today's Tasks") {
        this.renderTodayTasks();
      } else if (headerTitle === 'All Tasks') {
        this.renderAllTasks();
      }
    });

    return taskElement;
  }

  saveTask(updatedTask) {
    this.projects.forEach(project => {
      const taskIndex = project.tasks.findIndex(task => task.name === updatedTask.name && task.dueDate === updatedTask.dueDate);
      if (taskIndex !== -1) {
        project.tasks[taskIndex] = updatedTask;
        project.saveProject();
      }
    });
  }

  updateTaskCounts() {
    const allCountElement = document.getElementById('all-count');
    const todayCountElement = document.getElementById('today-count');
    const completedCountElement = document.getElementById('completed-count');

    const allTasks = this.getAllTasks();
    const todayTasks = this.getTodayTasks();
    const completedTasks = this.getCompletedTasks();

    allCountElement.textContent = allTasks.length;
    todayCountElement.textContent = todayTasks.length;
    completedCountElement.textContent = completedTasks.length;
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

    this.updateTaskCounts();
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
      this.renderProjects();
      this.renderProjectTasks(newProject);
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
    removeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.removeProject(projectName);
    });
  }

  removeProject(projectName) {
    Project.removeProjectByName(projectName);
    this.renderProjects();
    const mainTitle = document.querySelector('main h2');
    if (mainTitle && mainTitle.innerText.includes(projectName)) {
      document.querySelector('main').innerHTML = '';
    }
  }

  handleShowingTasks(projectElement, project) {
    projectElement.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-button')) return;
      this.renderProjectTasks(project);
    });
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

  renderProjectTasks(project) {
    const main = document.querySelector('main');
    main.innerHTML = '';
    const projectPage = this.createProjectUI(project);
    main.appendChild(projectPage);

    const taskContainer = projectPage.querySelector('.task-container');

    project.tasks.forEach(task => {
      const taskElement = this.createTaskElementForProject(task, project);
      taskContainer.appendChild(taskElement);
    });

    const addTaskButton = projectPage.querySelector('.add-task-button');
    addTaskButton.addEventListener('click', () => {
      this.renderTaskForm(project);
    });

    this.updateTaskCounts();
  }

  createTaskElementForProject(task, project) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('project-item');

    taskElement.innerHTML = `
      <p class="task-name">${task.name}</p>
      <p class="due-date">${task.dueDate}</p>
      <p class="priority">${task.priority}</p>
      <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
    `;

    const completeButton = taskElement.querySelector('.task-checkbox');

    completeButton.checked = task.completed;
    completeButton.style.backgroundColor = task.completed ? 'red' : 'orange';

    completeButton.addEventListener('change', () => {
      task.completed = completeButton.checked;
      completeButton.style.backgroundColor = task.completed ? 'red' : 'orange';
      project.saveProject();
      this.updateTaskCounts();

      const headerTitle = document.querySelector('main h2').innerText;
      if (headerTitle === 'Completed Tasks') {
        this.renderCompletedTasks();
      } else if (headerTitle === "Today's Tasks") {
        this.renderTodayTasks();
      } else if (headerTitle === 'All Tasks') {
        this.renderAllTasks();
      }
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
      this.updateTaskCounts();
    });

    const cancelButton = form.querySelector('#cancel-task');
    cancelButton.addEventListener('click', () => {
      this.renderProjectTasks(project);
    });
  }
}

export default ProjectUI;
