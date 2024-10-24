import Task from './task'

export default class Todo {
    #title
    #description
    #dueDate
    #priority
    #notes
    #checkList
    #isDone = false

    constructor(title, description, dueDate, priority, notes, checkList) {
        this.#title = title
        this.#description = description
        this.#dueDate = dueDate
        this.#priority = priority
        this.#notes = notes
        this.#checkList = checkList || []
    }

    getTitle() {
        return this.#title
    }
    setTitle(title) {
        this.#title = title
    }

    getDescription() {
        return this.#description
    }
    setDescription(description) {
        this.#description = description
    }

    getDueDate() {
        return this.#dueDate
    }
    setDueDate(dueDate) {
        this.dueDate = dueDate
    }

    getPriority() {
        return this.#priority
    }
    setPriority(priority) {
        this.priority = priority
    }

    getNotes() {
        return this.#notes
    }
    setNotes(notes) {
        this.#notes = notes
    }

    getCheckList() {
        return this.#checkList
    }
    addToCheckList(task) {
        this.#checkList.push(task)
    }
    removeFromCheckList(task) {
        this.#checkList = this.#checkList.filter(
            (item) => item.name !== task.name
        )
    }

    isDone() {
        return this.#isDone
    }
    Done() {
        this.#isDone = true
    }
    notDone() {
        this.#isDone = false
    }

    serialize() {
        return {
            title: this.#title,
            description: this.#description,
            dueDate: this.#dueDate,
            priority: this.#priority,
            notes: this.#notes,
            isDone: this.#isDone,
            checkList: this.#checkList.map((task) => task.serialize()),
        }
    }

    static deserialize(data) {
        const todo = new Todo(
            data.title,
            data.description,
            data.dueDate,
            data.priority,
            data.notes
        )
        todo.#isDone = data.isDone
        todo.#checkList = data.checkList.map((taskData) =>
            Task.deserialize(taskData)
        )
        return todo
    }
}
