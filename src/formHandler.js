import { createDialog } from "./dialog";
import { addProject, updateProjectName } from "./projectManager";

export function newProjectForm() {
    createDialog('new-project-dialog', 'Project Name', '', (newName) => {
        addProject(newName);
        refreshDisplay();
    });
}

export function showEditProjectForm(project) {
    createDialog('edit-project-name', 'Edit Project Name', project.getName(), (newName) => {
        updateProjectName(project, newName);
    });
}