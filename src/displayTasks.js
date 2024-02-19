export default function displayTasks(tasks) {
    const div = document.createElement('div');
    div.classList.add('tasks', 'hidden');
    const ul = document.createElement('ul');
    for (const task of tasks) {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', task.name);
        if (task.isDone()) input.setAttribute('checked', '');
        label.textContent = task.getTask();
        label.append(input);
        li.append(label);
        ul.append(li);
    };
    div.append(ul);
    return div;
};

