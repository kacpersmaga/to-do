class Task {
    constructor(name, dueDate, priority, completed = false) {
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }
}

export default Task;
