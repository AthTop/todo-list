import { format } from "date-fns";
import displayTasks from "./displayTasks";

export default function displayTodo(todo) {
    const div = document.createElement('div');
    div.setAttribute('priority', todo.getPriority());
    div.classList.add('todo');
    const title = document.createElement('p');
    title.classList.add('todo-title')
    const description = document.createElement('p');
    description.classList.add('description');
    const dueDate = document.createElement('p');
    dueDate.classList.add('duedate');
    const notes = document.createElement('p');
    notes.classList.add('notes');

    title.textContent = todo.getTitle();
    description.textContent = todo.getDescription();
    dueDate.textContent = `Due: ${format(todo.getDueDate(), "dd-MM-yyyy")}`;
    notes.textContent = `Notes: ${todo.getNotes()}`;
    
    const checklist = displayTasks(todo.getCheckList());

    div.append(title, description, dueDate, notes, checklist);
    return div;
}