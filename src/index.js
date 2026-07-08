import { displayProject, addProjectToSidebar, clearSidebar, addSidebarListener } from "./projectDOM.js";
import { addProject, initProjects, pushProjects, deleteProject, getActiveProject, setActiveProject, getProjects, deleteNote, editProjectName } from "./projectManager.js";
import { initNoteCancel, initNewNote, attachNoteSubmit, editNoteDiag } from "./noteDialog.js";
import { initProjectCancel, attachProjectSubmit, editProject, initAddProject } from "./projectDialog.js";
import "./styles.css";


//initializes the create, edit, and cancel buttons for the dialogs
initNoteCancel();
initProjectCancel();
initNewNote();
initAddProject();
initProjects();

addSidebarListener((id) => {
        deleteProject(id);
        refreshview();
    });

//Makes new note and saves note id to pass along to delete note functionality
attachNoteSubmit((title, description, dueDate, priority) => {
    getActiveProject().addNote(title, description, dueDate, priority);
    refreshview()
}, (title, description, dueDate, priority, id) => {
    getActiveProject().editNote(title, description, dueDate, priority, id);
    refreshview();
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
        getActiveProject().findNote(id).toggleCompleted();
        pushProjects();
    }, (id) => {
        editNoteDiag(getActiveProject().findNote(id), updateNote);
    });
    projectSidebar();
    pushProjects();
}

//Note update handler
function updateNote(title, description = null, dueDate = null, priority = 1, id) {
    getActiveProject().editNote(title, description, dueDate, priority, id);
    refreshview();
}

//Gets the projects in an array and creates a button and delete button for them
function projectSidebar() {
    clearSidebar();
    getProjects().forEach((project) => {
    addProjectToSidebar((id) => {
        if (id === getActiveProject().id) {
            editProject(project);
        }
        else {
            setActiveProject(project.id);
            pushProjects();
        }
        refreshview();
    }, project.name, project.id, getActiveProject().id);
})}

refreshview();
