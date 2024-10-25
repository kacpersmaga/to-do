class Task {
  constructor(name, dueDate, priority, completed = false) {
      this.name = name;
      this.dueDate = dueDate;
      this.priority = priority;
      this.completed = completed;
  }

  toggleCompletion() {
      this.completed = !this.completed;
  }
}

export default Task;
