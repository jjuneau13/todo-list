export default class Note {
    constructor(title, description, dueDate, priority, completed = false, id = null) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
        this.id = id ? id : crypto.randomUUID();
    };

    updateNote(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
};