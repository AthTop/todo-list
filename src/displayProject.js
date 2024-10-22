import { createDialog } from "./dialog.js";
import displayTodo from "./displayTodo";
import { updateProjectName } from "./index.js";

export default function displayProject(project, updateProjectName) {
    const div = document.createElement('div');
    div.classList.add('project');
    div.id = project.getName();
    const projecTitle = document.createElement('p');
    projecTitle.classList.add('project-title');
    projecTitle.textContent = project.getName();
    div.append(projecTitle);
    // Get the ToDos for the project and call displayTodo to populate project with them
    const todos = project.getTodos();
    for (const todo of todos) {
        div.append(displayTodo(todo));
    };
    div.setAttribute('data-tag', project);
    // Add an Edit project name button
    const editNameBtn = document.createElement('button');
    editNameBtn.textContent = "...";
    editNameBtn.addEventListener('click', () => showEditProjectForm(project));
    editNameBtn.classList.add("edit-project-button");
    div.appendChild(editNameBtn);
    return div;
}

export function refreshDisplay(projects) {
    const projectsDiv = document.querySelector('#projects-div');
    projectsDiv.innerHTML = '';
    for (const project of projects) {
        projectsDiv.appendChild(displayProject(project, updateProjectName));
    };
}

function showEditProjectForm(project) {
    createDialog('edit-project-name', 'Edit Project Name', project.getName(), (newName) => {
        updateProjectName(project, newName);
    });
}