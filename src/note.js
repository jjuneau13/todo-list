export default class Note {
    constructor(title, description = null, dueDate = null, priority = null) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    };

    toggleCompleted() {
        this.completed = !this.completed;
    }
};