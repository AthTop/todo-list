import Task from "./task";
import Todo from "./todo";
import Project from "./project";
import displayProject from "./displayProject";


// project object
// should contain todos, could possibly be a list instead of object
// default project on app start
// ability to create new projects and name them 
// choose which project to add todos to

// DOM stuff should be seperate, module to display projects and todos
// should be able to view all projects
// view todos in each project with a title and date and color coded priority
// expand todo to see or edit details
// delete a todo

// use localStorage API to save data
// 
const task = new Task('wipe')
const task2 = new Task('wash');
task.done();
const date = new Date('12-31-22');
const todo = new Todo('title', 'descr', date, 1, 'notes')
const todo2 = new Todo('title2', 'descr2', date, 1, 'notes2')

const project = new Project('project 1');
const project2 = new Project('project 2');


todo.addToCheckList(task);
todo.addToCheckList(task2);

todo2.addToCheckList(task);
todo2.addToCheckList(task2);

project.addTodo(todo);
project.addTodo(todo2)
project2.addTodo(todo);
project2.addTodo(todo2)
console.log(project);

const main = document.querySelector('main');
main.append(displayProject(project), displayProject(project2));

// const expandBtn = document.querySelector('.expand-todo-button');
// expandBtn.addEventListener('click', (e) => {
//     if(expandBtn.parentElement.hasChildNodes()) {
//         let children = expandBtn.parentElement.childNodes;
//         for (const child of children) {
//             console.log(child);
//             if (child.classList.contains('hidden')) {
//                 child.classList.remove('hidden');
//             }
//             if (!child.classList.contains('hidden')) {
//                 child.classList.add('hidden');
//             }
//         }
//     }
// });

main.addEventListener('click', (e) => {
    if (e.target.classList.contains('expand-todo-button')) {
        clickTodo(e.target);
    };
});

function clickTodo(expandBtn) {
        let children = expandBtn.parentElement.childNodes;
        for (const child of children) {
            if (child.classList.contains('hidden')) {
                child.classList.remove('hidden');
                child.classList.add('open');
                continue;
            }
            if (child.classList.contains('open')) {
                child.classList.remove('open');
                child.classList.add('hidden');
            }
        }
    }