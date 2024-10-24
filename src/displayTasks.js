import { refreshDisplay } from './displayProject'

export default function displayTasks(todo) {
    const tasks = todo.getCheckList()
    const div = document.createElement('div')
    div.classList.add('tasks', 'open')
    const ul = document.createElement('ul')
    for (const task of tasks) {
        const li = document.createElement('li')
        const label = document.createElement('label')
        const input = document.createElement('input')
        input.setAttribute('type', 'checkbox')
        input.setAttribute('name', task.name)
        if (task.isDone()) input.setAttribute('checked', '')
        input.addEventListener('change', () => changeTaskStatus(task, todo))
        label.textContent = task.getTask()
        label.append(input)
        // Remove task button
        const removeTaskBtn = document.createElement('button')
        removeTaskBtn.type = 'button'
        removeTaskBtn.textContent = 'Delete Task'
        removeTaskBtn.classList.add('remove-task-button')
        removeTaskBtn.addEventListener('click', () => {
            todo.removeFromCheckList(task)
            refreshDisplay()
        })
        li.append(label)
        li.append(removeTaskBtn)
        ul.append(li)
    }
    div.append(ul)
    return div
}

function changeTaskStatus(task) {
    if (!task.isDone()) {
        task.done()
    } else {
        task.notDone()
    }
    refreshDisplay()
}
