import Task from "./task";
import Todo from "./todo";
import Project from "./project";
import  { refreshDisplay } from "./displayProject";
import { createDialog } from "./dialog";


// project object
// should contain todos, could possibly be a list instead of object
// default project on app start
// ability to create new projects and name them 
// choose which project to add todos to

// DOM stuff should be seperate, module to display projects and todos
// should be able to view all projects
// view todos in each project with a title and date and color coded priority
// expand todo to see or edit details < - you are here <<<<<
// delete a todo

// use localStorage API to save data
// 
// const task = new Task('wipe')
// const task2 = new Task('wash');
// task.done();
// const date = new Date('12-31-22');
// const todo = new Todo('title', 'descr', date, 1, 'notes')
// const todo2 = new Todo('title2', 'descr2', date, 1, 'notes2')

// const project = new Project('project 1');
// const project2 = new Project('project 2');
export let projects = [];

// todo.addToCheckList(task);
// todo.addToCheckList(task2);

// todo2.addToCheckList(task);
// todo2.addToCheckList(task2);

// project.addTodo(todo);
// project.addTodo(todo2)
// project2.addTodo(todo);
// project2.addTodo(todo2)

// projects.push(project, project2)
// refreshDisplay(projects);

const main = document.querySelector('main');
const projectsDiv = document.createElement('div');
projectsDiv.id = 'projects-div';
main.appendChild(projectsDiv);
const newProjectBtn = document.createElement('button');
newProjectBtn.textContent = 'New Project';
newProjectBtn.addEventListener('click', (e) => {
    newProjectForm();
})
main.appendChild(newProjectBtn);


function newProjectForm() {
    createDialog('new-project-dialog', 'Project Name', '', (newName) => {
        const project = new Project(newName);
        projects.push(project)
        refreshDisplay(projects);
    });
}

export function updateProjectName(project, newName) {
    project.setName(newName);
    refreshDisplay(projects);
}