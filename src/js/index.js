import '../styles.css';
import ProjectUI from './UI';

const ui  = new ProjectUI();

const addProjectButton = document.querySelector('#project-create-button');
if (addProjectButton) {
    addProjectButton.addEventListener('click', () => ui.renderProjectForm());
} else {
    console.error('Add Project button not found');
}
