// todo object
// has a title, description, duedate, priority, notes and possibly a checklist
// methods to manipulate its content
// needs a get/set for title, description, due date, priority, the notes and the checklist
// checklist is a list of objects with a title and a done true/false properties

export default class Todo {
    #title;
    #description;
    #dueDate;
    #priority;
    #notes;
    #checkList;
    constructor(title, description, dueDate, priority, notes, checkList) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#notes = notes;
        this.#checkList = checkList || [];
    }
    getTitle() { return this.#title; }
    setTitle(title) { this.#title = title; }

    getDescription(){ return this.#description; }
    setDescription(description) { this.#description = description; }
    
    getDueDate() { return this.#dueDate; }
    setDueDate(dueDate) { this.dueDate = dueDate; }

    getPriority() { return this.#priority; }
    setPriority(priority) { this.priority = priority; }

    getNotes() { return this.#notes; }
    setNotes(notes) { this.#notes = notes; }

    getCheckList() { return this.#checkList; }
    addToCheckList(task) { this.#checkList.push(task); }
    removeFromCheckList(task) { 
        this.#checkList = this.#checkList.filter(item => item.name !== task.name );
    }
};

// Helper class to create tasks for the checklist
export class Task {
    #name;
    #isDone;
    constructor(name) {
        this.#name = name;
        this.#isDone = false;
    }
    done() { this.#isDone = true; }
    notDone() { this.#isDone = false; }
    getTask() { return this.#name; }
    setTask(name) { this.#name = name; }
    isDone() { return this.#isDone; }
}
