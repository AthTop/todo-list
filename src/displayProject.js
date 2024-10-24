import displayTodo from './displayTodo'
import { newTodoForm, showEditProjectForm } from './formHandler.js'
import {
    deleteProject,
    getProjects,
    updateProjectName,
} from './projectManager.js'
import { saveProjects } from './localstorage.js'

export default function displayProject(project) {
    const div = document.createElement('div')
    div.classList.add('project')
    div.id = project.getName()
    const projecTitle = document.createElement('p')
    projecTitle.classList.add('project-title')
    projecTitle.textContent = project.getName()
    div.append(projecTitle)
    // Get the ToDos for the project and call displayTodo to populate project with them
    const todos = project.getTodos()
    for (const todo of todos) {
        div.append(displayTodo(todo))
    }
    // Add an Edit project name button
    const editNameBtn = document.createElement('button')
    editNameBtn.textContent = 'Project Name'
    editNameBtn.addEventListener('click', () => showEditProjectForm(project))
    editNameBtn.classList.add('edit-project-button')
    // Add a Delete button
    const deleteProjectBtn = document.createElement('button')
    deleteProjectBtn.textContent = 'Remove Project'
    deleteProjectBtn.classList.add('delete-project-button')
    deleteProjectBtn.addEventListener('click', () => {
        if (
            confirm(
                `Are you sure you want to remove project ${project.getName()}?`
            )
        ) {
            deleteProject(project)
            refreshDisplay()
        }
    })
    // Add a new Todo button
    const newTodoBtn = document.createElement('button')
    newTodoBtn.textContent = 'Add Todo'
    newTodoBtn.classList.add('new-todo-button')
    newTodoBtn.addEventListener('click', () => newTodoForm(project))
    const buttonsDiv = document.createElement('div')
    buttonsDiv.append(editNameBtn, deleteProjectBtn, newTodoBtn)
    div.appendChild(buttonsDiv)
    return div
}

export function refreshDisplay() {
    const projects = getProjects()
    const projectsDiv = document.querySelector('#projects-div')
    projectsDiv.innerHTML = ''
    for (const project of projects) {
        projectsDiv.appendChild(displayProject(project, updateProjectName))
    }
    saveProjects(projects)
}
