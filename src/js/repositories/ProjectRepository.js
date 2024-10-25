import StorageService from '../services/StorageService.js';
import Project from '../models/Project.js';
import Task from '../models/Task.js';

class ProjectRepository {
    static STORAGE_KEY = 'projects';

    static getAllProjects() {
        const data = StorageService.load(ProjectRepository.STORAGE_KEY);
        if (!data) return [];

        return data.map(projectData => {
            const project = new Project(projectData.name);
            project.tasks = projectData.tasks.map(taskData => new Task(
                taskData.name,
                taskData.dueDate,
                taskData.priority,
                taskData.completed
            ));
            return project;
        });
    }

    static saveProject(project) {
        const projects = ProjectRepository.getAllProjects();
        const index = projects.findIndex(p => p.name === project.name);
        if (index >= 0) {
            projects[index] = project;
        } else {
            projects.push(project);
        }
        StorageService.save(ProjectRepository.STORAGE_KEY, projects);
    }

    static deleteProject(projectName) {
        const projects = ProjectRepository.getAllProjects();
        const updatedProjects = projects.filter(project => project.name !== projectName);
        StorageService.save(ProjectRepository.STORAGE_KEY, updatedProjects);
    }

    static findProjectByName(projectName) {
        const projects = ProjectRepository.getAllProjects();
        return projects.find(project => project.name === projectName);
    }
}

export default ProjectRepository;
