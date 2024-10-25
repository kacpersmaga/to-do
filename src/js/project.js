// project.js
import Task from './task';
import LocalStorageManager from './localstorage';

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.storage = new LocalStorageManager('projects');
  }

  // Add a new task to the project
  addTask(task) {
    this.tasks.push(task);
    this.saveProject();
  }

  // Remove a task from the project
  removeTask(taskToRemove) {
    this.tasks = this.tasks.filter(task => task !== taskToRemove);
    this.saveProject();
  }

  // Save the current project to local storage
  saveProject() {
    const projects = Project.getAllProjects();
    const updatedProjects = projects.filter(p => p.name !== this.name);
    updatedProjects.push(this);
    this.storage.save(updatedProjects);
  }

  // Static method to save all projects to local storage
  static saveAllProjects(projects) {
    const storage = new LocalStorageManager('projects');
    storage.save(projects);
  }

  // Static method to retrieve all projects from local storage
  static getAllProjects() {
    const storage = new LocalStorageManager('projects');
    const storedProjects = storage.get();
    return storedProjects.map(data => {
      const project = new Project(data.name);
      project.tasks = data.tasks.map(taskData => {
        return new Task(taskData.name, taskData.dueDate, taskData.priority, taskData.completed);
      });
      return project;
    });
  }

  // Static method to remove a project by its name
  static removeProjectByName(projectName) {
    let projects = Project.getAllProjects();
    projects = projects.filter(p => p.name !== projectName);
    Project.saveAllProjects(projects);
  }
}

export default Project;
