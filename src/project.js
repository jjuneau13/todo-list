export default class Project {
    constructor(name) {
        this.name = name;
        this.notes = [];
    }

    addNote(Note) {
        this.notes.push(Note);
    }
}