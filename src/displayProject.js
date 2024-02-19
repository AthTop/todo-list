import displayTodo from "./displayTodo";

export default function displayProject(project) {
    const div = document.createElement('div');
    div.classList.add('project');
    const projecTitle = document.createElement('p');
    projecTitle.classList.add('project-title');
    projecTitle.textContent = project.getName();
    div.append(projecTitle);
    // Get the ToDos for the project and call displayTodo to populate project with them
    const todos = project.getTodos();
    for (const todo of todos) {
        div.append(displayTodo(todo));
    };
    return div;
}