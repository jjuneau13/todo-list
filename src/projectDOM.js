import { createNoteCard, clearNoteCards, createChild } from "./noteDOM.js";

function displayProject(notes) {
    clearNoteCards();
    notes.forEach(element => {
        createNoteCard(element);
    });
}

function addProjectToSidebar(func, name, id) {
    const sidebar = document.querySelector(".sidebar");
    const button = createChild("button", name);
    button.setAttribute("data-id", id);
    button.addEventListener("click", () => {
        func(); 
    })
    sidebar.appendChild(button)
}

function delProjectSidebar(button) {
    button.remove();
}

export { displayProject, addProjectToSidebar }