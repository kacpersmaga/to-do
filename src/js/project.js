import Task from './task';
import LocalStorageManager from './localstorage'

class Project {
    constructor(name){
        this.tasks = [];
        this.name = name;
        this.storage = new LocalStorageManager('projects');
    }

    addTask(task) {
        this.tasks.push(task);
        this.saveProject();
    }

    saveProject() {
        const projects = Project.getAllProjects();
        const updatedProjects = projects.filter(p => p.name !== this.name);
        updatedProjects.push(this);
        this.storage.save(updatedProjects);
    }

    static saveAllProjects(projects) {
        const storage = new LocalStorageManager('projects');
        storage.save(projects);
    }

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

    static removeProjectByName(projectName) {
        let projects = Project.getAllProjects();
        projects = projects.filter(p => p.name !== projectName);
        Project.saveAllProjects(projects);
    }
}

export default Project;
