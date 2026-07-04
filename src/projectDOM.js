import { createNoteCard, clearNoteCards } from "./noteDOM.js";

function displayProject(project) {
    clearNoteCards();
    project.notes.forEach(element => {
        createNoteCard(element);
    });
}

export { displayProject }