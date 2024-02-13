// project object
// should contain todos, could possibly be a list instead of object
// default project on app start
// ability to create new projects and name them 
// choose which project to add todos to

export default class Project {
    #name;
    #todoList;
    constructor(projectName = '') {
        this.#name = projectName;
        this.#todoList = [];
    }
    getName() { return this.#name; }
    setName(name) { this.#name = name; }

    addTodo(todo) { this.#todoList.push(todo); }
    removeTodo(todo) { 
        this.#todoList = this.#todoList.filter(item => item.getTitle() !== todo.getTitle())
    }
};