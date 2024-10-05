class Task {
    constructor(name, dueDate, priority,  projectName = '', completed = false) {
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
        this.projectName = projectName;
    }
}

export default Task;
