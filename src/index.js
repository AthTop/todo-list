import { newProjectForm } from './formHandler'

const main = document.querySelector('main')
const projectsDiv = document.createElement('div')
projectsDiv.id = 'projects-div'
main.appendChild(projectsDiv)
const newProjectBtn = document.createElement('button')
newProjectBtn.textContent = 'New Project'
newProjectBtn.addEventListener('click', () => {
    newProjectForm()
})
main.appendChild(newProjectBtn)
