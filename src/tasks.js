export const createAddTaskUI = (taskContainer, addTaskButton) => {
    const taskItem = document.createElement('div');
    
    // Form HTML
    taskItem.innerHTML = `
      <div class="task-item">
        <label for="task">Task</label>
        <input type="text" id="task" />
      </div>
      <div class="due-date-item">
        <label for="due-date">Due Date</label>
        <input type="date" id="due-date" />
      </div>
      <div class="priority-item">
        <label for="priority">Priority</label>
        <select id="priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div class="decisive-buttons">
        <button type="submit" id="submit-task">Add</button>
        <button id="cancel-task">Cancel</button>
      </div>
    `;
    
    // Append the task input UI to the task container
    taskContainer.appendChild(taskItem);
    
    // Handle Cancel button functionality
    const cancelButton = taskItem.querySelector('#cancel-task');
    cancelButton.addEventListener('click', () => {
      taskContainer.removeChild(taskItem); // Remove the form
      addTaskButton.style.display = 'block'; // Bring back "Add a new task" button
    });
  
    // Handle Submit button functionality
    const submitButton = taskItem.querySelector('#submit-task');
    submitButton.addEventListener('click', () => {
      // Logic to handle form submission can go here
      alert('Task submitted!');
      taskContainer.removeChild(taskItem); // Remove the form
      addTaskButton.style.display = 'block'; // Bring back "Add a new task" button
    });
  };