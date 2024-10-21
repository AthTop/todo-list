export default function deleteTodo(todo, projects) {
    let projectObj = todo.parentElement.parentElement;
    let todoTitle = todo.parentElement.getElementsByClassName('todo-title')[0].innerText;
    for (let project of projects) {
        if (projectObj.id === project.getName()) {
            project.removeTodo(todoTitle);
        }
    }
}