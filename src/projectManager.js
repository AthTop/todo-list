import Project from './project'
import { loadProjects } from './localstorage'
import { refreshDisplay } from './displayProject'

export let projects = []

export function addProject(name) {
    if (!name) throw new Error('Project name cannot be empty')
    const project = new Project(name)
    projects.push(project)
}

export function deleteProject(project) {
    const index = projects.indexOf(project)
    if (index !== -1) {
        projects.splice(index, 1)
    } else {
        throw new Error('Project not found')
    }
}

export function updateProjectName(project, newName) {
    project.setName(newName)
}

export function getProjects() {
    return projects
}

window.addEventListener('load', () => {
    const loadedProjects = loadProjects()
    loadedProjects.forEach((project) => {
        projects.push(project)
    })
    refreshDisplay()
})
