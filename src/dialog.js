export function createDialog(dialogId, title, inputs, onConfirm) {
    const dialog = document.createElement('dialog');
    dialog.id = dialogId;
    dialog.classList.add('dialog');

    const form = document.createElement('form');
    const titleLabel = document.createElement('h2');
    titleLabel.textContent = title;
    form.appendChild(titleLabel);
    inputs.forEach(input => {
        const label = document.createElement('label');
        label.textContent = input.label;
        if (input.type === 'select') {
            const selectField = document.createElement('select');
            selectField.name = input.name;
            input.options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option;
                opt.textContent = option;
                selectField.appendChild(opt);
            });
            form.appendChild(selectField);
        }
        else {
            const inputField = document.createElement('input');
            inputField.type = input.type;
            inputField.placeholder = input.placeholder;
            inputField.required = input.required || false;
            inputField.name = input.name;
            label.appendChild(inputField);
            form.appendChild(label);
        }
    });

    const buttonDiv = document.createElement('div');
    const confirmBtn = document.createElement('button');
    confirmBtn.type = 'submit';
    confirmBtn.textContent = 'Confirm';

    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';

    buttonDiv.append(confirmBtn, cancelBtn);
    form.append(buttonDiv);
    dialog.append(form);
    document.body.append(dialog);

    dialog.addEventListener('close', () => dialog.remove());
    cancelBtn.addEventListener('click', () => dialog.close());

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (onConfirm) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries()); // Convert FormData to object
            onConfirm(data); // Pass all form inputs as objects
        }
        dialog.close();
    })

    dialog.showModal();
}