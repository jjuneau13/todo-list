import { displayProject, addProjectToSidebar, clearSidebar, addSidebarListener } from "./projectDOM.js";
import { addProject, deleteProject, getActiveProject, setActiveProject, getProjects, deleteNote, editProjectName } from "./projectManager.js";
import { initNoteCancel, initNoteEdit, initNewNote, attachNoteSubmit, editNote } from "./noteDialog.js";
import { initProjectCancel, attachProjectSubmit, editProject } from "./projectDialog.js";
import "./styles.css";

if (getProjects().length == 0) {
    addProject("New");
}

//initializes the create, edit, and cancel buttons for the dialogs
initNoteCancel();
initProjectCancel();
initNoteEdit(updateNote);
initNewNote();

addSidebarListener((id) => {
        deleteProject(id);
        refreshview();
    });

//Makes new note and saves note id to pass along to delete note functionality
attachNoteSubmit((title, description, dueDate) => {
    getActiveProject().addNote(title, description, dueDate);
    refreshview()
});

//Adds projects to project manager
attachProjectSubmit((title) => {
    addProject(title);
    refreshview();
}, (title) => {
    editProjectName(title, getActiveProject().id);
    refreshview();
})

//Refreshed the notes within each project
function refreshview() {
    displayProject(getActiveProject().notes, deleteNote, (id) => {
        editNote(getActiveProject().findNote(id), updateNote);
    });
    projectSidebar();
}

//Note update handler
function updateNote(title, description = null, dueDate = null, priority = 1, id) {
    getActiveProject().editNote(title, description, dueDate, priority, id);
    refreshview();
}

function updateProject(title) {
    editProjectName(title, getActiveProject().id);
    refreshview();
}
//Gets the projects in an array and creates a button and delete button for them
function projectSidebar() {
    clearSidebar();
    getProjects().forEach((project) => {
    addProjectToSidebar((id) => {
        console.log(id);
        if (id === getActiveProject().id) {
            editProject(project);
        }
        else {
            setActiveProject(project.id);
        }
        displayProject(project.notes, deleteNote);

    }, project.name, project.id, getActiveProject().id);
})}

refreshview();
