import { createNoteCard, clearNoteCards, createChild } from "./noteDOM.js";
//calls NoteDOM to display the notes within each project
function displayProject(notes, func, edit) {
    clearNoteCards();
    notes.forEach((element) => {
        createNoteCard(element, func, edit);
    });
}

function addProjectToSidebar(func, name, id, activeID) {
    const sidebar = document.querySelector(".sidebar-projects");
    const buttonDiv = createChild("div");
    //sets the active project class
    if (id == activeID) {
        buttonDiv.setAttribute("class", "activeProject");
    }
    else {
        buttonDiv.setAttribute("class", "sidebarProjectButton");
    }
    //creates the clickable project button, then the delete project button
    const button = createChild("button", name);
    const delButton = createChild("button");
    delButton.className = "project-delete";
    button.className = "project-button";
    buttonDiv.setAttribute("data-projectid", id);
    delButton.setAttribute("data-projectid", id);
    //handles setting the active project when clicked
    button.addEventListener("click", () => {
        func(id);
        document.querySelector(".activeProject").setAttribute("class", "sidebarProjectButton");
        document.querySelector(`[data-projectid="${id}"]`).setAttribute("class", "activeProject");
    });
    buttonDiv.append(button, delButton);
    sidebar.appendChild(buttonDiv);
}

function clearSidebar() {
    document.querySelector(".sidebar-projects").innerHTML = '';
}
//handles the deleting of projects
function addSidebarListener(func) {
    const sidebar = document.querySelector(".sidebar-projects");
    sidebar.addEventListener("click", (event) => {
        if (event.target.getAttribute("class") == "project-delete") {
            const id = event.target.getAttribute("data-projectid");
            func(id);
        }
    })
}

export { displayProject, addProjectToSidebar, clearSidebar, addSidebarListener }