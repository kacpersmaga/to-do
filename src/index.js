import './styles.css';
import UI from './UI';

const ui  = new UI();

const addProjectButton = document.querySelector('#project-create-button');
if (addProjectButton) {
    addProjectButton.addEventListener('click', () => ui.renderProjectForm());
} else {
    console.error('Add Project button not found');
}
