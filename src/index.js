import Note from "./note.js";
import Project from "./project.js";
import { displayProject } from "./projectDOM.js";

const note = new Note('again');
const proj1 = new Project('2');

proj1.addNote(note);

displayProject(proj1);