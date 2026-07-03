import Note from "./note.js";
import Project from "./project.js";

const note = new Note('thing');
const proj = new Project('bigThing');

proj.addNote(note);

localStorage.setItem("Project", JSON.stringify(proj));