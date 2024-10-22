import { format } from "date-fns";
import displayTasks from "./displayTasks";
import { getProjects } from './projectManager';
import { newTaskForm } from "./formHandler";

export default function displayTodo(todo) {
    const div = document.createElement('div');
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo-button');
    editBtn.textContent = '...';
    const expandBtn = document.createElement('button');
    expandBtn.classList.add('expand-todo-button');
    expandBtn.textContent = 'v';
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-todo-button');
    deleteBtn.textContent = 'X';
    div.setAttribute('priority', todo.getPriority());
    div.classList.add('todo');
    div.setAttribute('data-id', todo.getTitle());
    const title = document.createElement('p');
    title.classList.add('todo-title')
    const description = document.createElement('p');
    description.classList.add('description', 'hidden');
    const dueDate = document.createElement('p');
    dueDate.classList.add('duedate');
    const notes = document.createElement('p');
    notes.classList.add('notes', 'hidden');

    title.textContent = todo.getTitle();
    description.textContent = todo.getDescription();
    dueDate.textContent = `Due: ${format(todo.getDueDate(), "dd-MM-yyyy")}`;
    notes.textContent = `Notes: ${todo.getNotes()}`;
    
    // Call displaytasks to populate the checklist
    const checklist = displayTasks(todo.getCheckList());

    expandBtn.addEventListener('click', (e) => {
        expandTodo(e.target);
    })
    deleteBtn.addEventListener('click', (e) => {
        deleteTodo(e.target);
    })
    // New Task button
    const newTaskBtn = document.createElement('button');
    newTaskBtn.type = 'button';
    newTaskBtn.textContent = 'New task';
    newTaskBtn.classList.add('new-task-btn');
    newTaskBtn.addEventListener('click', (e) => newTaskForm(todo))
    div.append(title, description, dueDate, notes, checklist, editBtn, expandBtn, deleteBtn, newTaskBtn);
    return div;
}

function expandTodo(expandBtn) {
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

function deleteTodo(todoBtn) {
    const todoDiv = todoBtn.parentElement;
    const projectDiv = todoDiv.closest('.project');

    const projectId = projectDiv.id;
    const todoId = todoDiv.getAttribute('data-id');

    todoDiv.remove();
    const projects = getProjects();
    const project = projects.find(proj => proj.getName() === projectId);

    if (project) {
        const todo = project.getTodos().find(todo => todo.getTitle() === todoId);
        if (todo) {
            project.removeTodo(todo);
        }
    }
}
