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

const project = new Project('project 1');

todo.addToCheckList(task);
todo.addToCheckList(task2);

project.addTodo(todo);
console.log(project);

const main = document.querySelector('main');
main.append(displayProject(project));