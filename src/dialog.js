export function createDialog(dialogId, title, content = "", onConfirm) {
    const dialog = document.createElement('dialog');
    dialog.id = dialogId;

    const form = document.createElement('form');
    const titleLabel = document.createElement('label');
    titleLabel.textContent = title;

    const inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.value = content;
    inputField.required = true;

    const buttonDiv = document.createElement('div');
    const confirmBtn = document.createElement('button');
    confirmBtn.type = 'submit';
    confirmBtn.textContent = 'Confirm';

    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';

    buttonDiv.append(confirmBtn, cancelBtn);
    form.append(title, inputField, buttonDiv);
    dialog.append(form);
    document.body.append(dialog);

    dialog.addEventListener('close', () => dialog.remove());
    cancelBtn.addEventListener('click', () => dialog.close());

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (onConfirm) {
            onConfirm(inputField.value);
        }
        dialog.close();
    })

    dialog.showModal();
}