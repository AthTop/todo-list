export default class Task {
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
    
    serialize () {
        return {
            name: this.#name, 
            isDone: this.#isDone
        };
    }

    static deserialize (data) {
        const task = new Task(data.name);
        if (data.isDone) task.done();
        return task;
    }
}
