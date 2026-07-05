import { createNoteCard, clearNoteCards, createChild } from "./noteDOM.js";

function displayProject(notes, func) {
    clearNoteCards();
    notes.forEach(element => {
        createNoteCard(element, func);
    });
}

function addProjectToSidebar(func, delFunc, name, id) {
    const sidebar = document.querySelector(".sidebar-projects");
    const buttonDiv = createChild("div");
    const button = createChild("button", name);
    const delButton = createChild("button");
    delButton.className = "project-delete";
    button.className = "project-button";
    delButton.addEventListener("click", () => {
        delFunc();
        document.querySelector(`[data-projectid="${id}"]`).remove();
    })
    buttonDiv.setAttribute("data-projectid", id);
    button.addEventListener("click", func);
    buttonDiv.append(button, delButton);
    sidebar.appendChild(buttonDiv);
}

function clearSidebar() {
    document.querySelector(".sidebar-projects").innerHTML = '';
}

export { displayProject, addProjectToSidebar, clearSidebar }