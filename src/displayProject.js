import displayTodo from "./displayTodo";


export default function displayProject(project) {
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
    return div;
}

export function refreshDisplay(projects) {
    const main = document.querySelector('main');
    const projectsDiv = document.createElement('projects');
    projectsDiv.id = 'projects-div';
    projectsDiv.innerHTML = '';
    for (const project of projects) {
        projectsDiv.appendChild(displayProject(project));
    };
    main.appendChild(projectsDiv);
}