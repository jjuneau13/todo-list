export default class Project {
    constructor(name) {
        this.name = name;
        this.notes = [];
        this.id = crypto.randomUUID;
        localStorage.setItem(this.id, JSON.stringify(this.notes));
    }

    addNote(Note) {
        this.notes.push(Note);
        localStorage.setItem(this.name, JSON.stringify(this.notes));
    }
}