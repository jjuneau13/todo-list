import Note from "./note.js";

export default class Project {
    constructor(name) {
        this.name = name;
        this.notes = [];
        this.id = crypto.randomUUID;
    }

    addNote(title, description = null, dueDate = null, priority = 1) {
        const newNote = new Note(title, description, dueDate, priority);
        this.notes.push(newNote);
    }

    getNotes() {
        return this.notes;
    }
}