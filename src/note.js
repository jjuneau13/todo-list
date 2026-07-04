export default class Note {
    constructor(title, description = null, dueDate = null, priority = 1) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
        this.id = crypto.randomUUID;
    };

    toggleCompleted() {
        this.completed = !this.completed;
    }
};