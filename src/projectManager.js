import Project from "./project";
import Task from "./task";
import Todo from "./todo";
let projects = [];

export function addProject(name) {
    if (!name) throw new Error("Project name cannot be empty");
    const project = new Project(name);
    projects.push(project)
}

export function deleteProject(project) {
    const index = projects.indexOf(project);
    if (index !== -1) {
        projects.splice(index, 1);
    } else {
        throw new Error("Project not found");
    }
}

export function updateProjectName(project, newName) {
    project.setName(newName);
}

export function getProjects() {
    return projects;
}


const task = new Task('wipe')
task.done();
const date = new Date('12-31-22');
const todo = new Todo('title', 'descr', date, 1, 'notes')
const project = new Project('project 1');



todo.addToCheckList(task);



project.addTodo(todo);


projects.push(project)