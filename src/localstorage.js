import Project from './project'

export function saveProjects(projects) {
    const serializedProjects = projects.map((project) => project.serialize())
    localStorage.setItem('projects', JSON.stringify(serializedProjects))
}

export function loadProjects() {
    const projectsData = JSON.parse(localStorage.getItem('projects'))
    return projectsData
        ? projectsData.map((data) => Project.deserialize(data))
        : []
}
