export const createAddTaskUI = (taskContainer, addTaskButton) => {
  const taskCreateInfo = document.createElement('form');
  const tasks = [];

    
  taskCreateInfo.innerHTML = `
    <div class="item">
      <label for="task">Task</label>
      <input type="text" id="task" required />
    </div>
    <div class="item">
      <label for="due-date">Due Date</label>
      <input type="date" id="due-date" required />
    </div>
    <div class="item">
      <label for="priority">Priority</label>
      <select id="priority" required>
        <option value="" disabled selected>Select priority</option>
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
    taskCreateInfo.classList = 'task-info-container'
    taskContainer.appendChild(taskCreateInfo);


    
    const cancelButton = taskCreateInfo.querySelector('#cancel-task');
    cancelButton.addEventListener('click', () => {
      taskCreateInfo.remove();
      addTaskButton.style.display = 'block'; // 
    });
  
    const submitButton = taskCreateInfo.querySelector('#submit-task');
    taskCreateInfo.addEventListener('submit', () => {




      const taskName = taskCreateInfo.querySelector('#task').value;
      const dueDate = taskCreateInfo.querySelector('#due-date').value;
      const priority = taskCreateInfo.querySelector('#priority').value;

      taskCreateInfo.remove();
      addTaskButton.style.display = 'block';

      const task = createProject(taskContainer, taskName, dueDate, priority);
      tasks.push(task);

    });

    const createProject = (taskContainer, taskName, dueDate, priority) => {
      const project = document.createElement('div');
      project.classList.add('project-item'); 
      project.innerHTML = `
        <p class="task-name">${taskName}</p>
        <p class="due-date">${dueDate}</p>
        <p class="priority">${priority}</p>
        <input type="checkbox" class="task-checkbox">
      `;
      
      taskContainer.appendChild(project);
      const checkbox = project.querySelector('.task-checkbox');
  

      checkbox.addEventListener('change', (event) => {
          project.remove();
      });
    };
  };