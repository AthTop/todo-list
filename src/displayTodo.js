import { format } from "date-fns";
import displayTasks from "./displayTasks";

export default function displayTodo(todo) {
    const div = document.createElement('div');
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo-button');
    editBtn.textContent = '...';
    const expandBtn = document.createElement('button');
    expandBtn.classList.add('expand-todo-button');
    expandBtn.textContent = 'v'
    div.setAttribute('priority', todo.getPriority());
    div.classList.add('todo');
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

    div.append(title, description, dueDate, notes, checklist, editBtn, expandBtn);
    return div;
}