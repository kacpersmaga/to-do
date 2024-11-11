import '../css/styles.css';
import ProjectUI from './ui/ProjectUI.js';

document.addEventListener('DOMContentLoaded', () => {
    const projectUI = new ProjectUI();
    projectUI.init();
});