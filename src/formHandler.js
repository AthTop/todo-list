import { createDialog } from './dialog'
import { refreshDisplay } from './displayProject'
import { addProject, updateProjectName } from './projectManager'
import Todo from './todo'
import Task from './task'

export function newProjectForm() {
    const projectInputs = [
        {
            label: 'Name',
            type: 'text',
            placeholder: 'Project Name',
            required: true,
            name: 'name',
        },
    ]
    createDialog(
        'new-project-dialog',
        'Project Name',
        projectInputs,
        (data) => {
            addProject(data.name)
            refreshDisplay()
        }
    )
}

export function showEditProjectForm(project) {
    const projectInputs = [
        {
            label: 'Name',
            type: 'text',
            value: project.getName(),
            required: true,
            name: 'name',
        },
    ]
    createDialog(
        'edit-project-name-dialog',
        'Edit Project Name',
        projectInputs,
        (data) => {
            updateProjectName(project, data.name)
            refreshDisplay()
        }
    )
}

export function newTodoForm(project) {
    const todoInputs = [
        {
            label: 'Title',
            type: 'text',
            placeholder: 'Todo Title',
            required: true,
            name: 'title',
        },
        {
            label: 'Description',
            type: 'text',
            placeholder: 'Description',
            required: true,
            name: 'description',
        },
        { label: 'Due Date', type: 'date', required: true, name: 'duedate' },
        {
            label: 'Priority',
            type: 'select',
            required: true,
            name: 'priority',
            options: ['Low', 'Medium', 'High'],
        },
        { label: 'Notes', type: 'text', placeholder: 'Notes..', name: 'notes' },
    ]
    createDialog('new-todo-dialog', 'New Todo', todoInputs, (data) => {
        const todo = new Todo(
            data.title,
            data.description,
            data.duedate,
            data.priority,
            data.notes
        )
        project.addTodo(todo)
        refreshDisplay()
    })
}

export function newTaskForm(todo) {
    const taskInputs = [
        {
            label: 'Title',
            type: 'text',
            placeholder: 'Task name',
            required: true,
            name: 'title',
        },
    ]
    createDialog('new-task-dialog', 'Add New Task', taskInputs, (data) => {
        const task = new Task(data.title)
        todo.addToCheckList(task)
        refreshDisplay()
    })
}

export function showEditTodoForm(todo) {
    const todoInputs = [
        {
            label: 'Title',
            type: 'text',
            value: todo.getTitle(),
            required: true,
            name: 'title',
        },
        {
            label: 'Description',
            type: 'text',
            value: todo.getDescription(),
            required: true,
            name: 'description',
        },
        {
            label: 'Due Date',
            type: 'date',
            required: true,
            name: 'duedate',
            value: todo.getDueDate(),
        },
        {
            label: 'Priority',
            type: 'select',
            required: true,
            name: 'priority',
            options: ['Low', 'Medium', 'High'],
            value: todo.getPriority(),
        },
        { label: 'Notes', type: 'text', value: todo.getNotes(), name: 'notes' },
    ]
    createDialog('new-todo-dialog', 'New Todo', todoInputs, (data) => {
        todo.setTitle(data.title)
        todo.setDescription(data.description)
        todo.setDueDate(data.duedate)
        todo.setPriority(data.priority)
        todo.setNotes(data.notes)
        refreshDisplay()
    })
}
