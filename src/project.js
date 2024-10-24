import Todo from './todo'

export default class Project {
    #name
    #toDoList

    constructor(projectName = '') {
        this.#name = projectName
        this.#toDoList = []
    }

    getName() {
        return this.#name
    }
    setName(name) {
        this.#name = name
    }

    getTodos() {
        return this.#toDoList
    }
    addTodo(todo) {
        this.#toDoList.push(todo)
    }
    removeTodo(todo) {
        this.#toDoList = this.#toDoList.filter(
            (item) => item.getTitle() !== todo.getTitle()
        )
    }

    serialize() {
        return {
            name: this.#name,
            todoList: this.#toDoList.map((todo) => todo.serialize()),
        }
    }

    static deserialize(data) {
        const project = new Project(data.name)
        project.#toDoList = data.todoList.map((toDoData) =>
            Todo.deserialize(toDoData)
        )
        return project
    }
}
