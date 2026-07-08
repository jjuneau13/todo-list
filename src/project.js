import Note from "./note.js";

export default class Project {
    constructor(name, id = null) {
        this.name = name;
        this.notes = [];
        this.id = id ? id : crypto.randomUUID();
    }

    addNote(title, description = null, dueDate = null, priority = 1, completed) {
        const newNote = new Note(title, description, dueDate, priority, completed);
        this.notes.push(newNote);
        return newNote.id;
    }

    findNote(id) {
        return this.notes.find((note) => note.id === id);
    }

    editNote(title, description = null, dueDate = null, priority = 1, id) {
        this.findNote(id).updateNote(title, description, dueDate, priority);
    }

    editName(title) {
        this.name = title;
    }

    reconstruct(notes) {
        notes.forEach((note) => {
            console.log(note);
            this.addNote(note.title, note.description, note.dueDate, note.priority, note.completed)
        })
    }
}