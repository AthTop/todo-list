import Task from "./task";
import Todo from "./todo";
import Project from "./project";
import displayProject, { refreshDisplay } from "./displayProject";


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
const newBookBtn = document.createElement('button');
newBookBtn.textContent = 'New Project';
newBookBtn.addEventListener('click', (e) => {
    newProjectForm();
    const dialog = document.querySelector('dialog');
    dialog.showModal();
})
main.appendChild(newBookBtn);


function newProjectForm() {
    const dialog = document.createElement('dialog');
    dialog.id = 'new-project-dialog';
    
    const form = document.createElement('form');
    form.id = 'new-project-form';

    const labelProjectName = document.createElement('label');
    labelProjectName.setAttribute('for', 'project-name');
    labelProjectName.textContent = 'Project Name';

    const inputProjectName = document.createElement('input');
    inputProjectName.setAttribute('type', 'text');
    inputProjectName.setAttribute('name', 'project-name');
    inputProjectName.id = 'project-name';
    inputProjectName.required = true;

    const buttonDiv = document.createElement('div');

    const newProjectBtn = document.createElement('button');
    newProjectBtn.type = 'submit';
    newProjectBtn.id = 'new-project-btn';
    newProjectBtn.textContent = 'Add Project';

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.id = 'close-btn';
    closeBtn.textContent = 'X';

    form.appendChild(labelProjectName);
    form.appendChild(inputProjectName);
    buttonDiv.appendChild(newProjectBtn);
    buttonDiv.appendChild(closeBtn);

    dialog.appendChild(form);
    dialog.appendChild(buttonDiv);

    document.body.appendChild(dialog);

    closeBtn.addEventListener('click', (e) => {
        dialog.close();
    })

    newProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const projectName = document.getElementById('project-name').value;
        const project = new Project(projectName);
        projects.push(project);
        refreshDisplay(projects);
        dialog.close();
    })

}