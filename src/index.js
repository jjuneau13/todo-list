import { displayProject, addProjectToSidebar, clearSidebar } from "./projectDOM.js";
import { addProject, deleteProject, getActiveProject, setActiveProject, getProjects, deleteNote } from "./projectManager.js";
import { initCancel, attachNoteSubmit, attachProjectSubmit } from "./dialog.js";
import "./styles.css";

if (getProjects().length == 0) {
    addProject("New");
}


initCancel();

//Makes new note and saves note id to pass along to delete note functionality
attachNoteSubmit((title, description, dueDate) => {
    getActiveProject().addNote(title, description, dueDate);
    displayProject(getActiveProject().notes, deleteNote);
});


attachProjectSubmit((title) => {
    addProject(title);
    projectSidebar();
})


//Gets the projects in an array and creates a button and delete button for them
function projectSidebar() {
    clearSidebar();
    getProjects().forEach((project) => {
    addProjectToSidebar(() => {
        setActiveProject(project.id);
        displayProject(project.notes, deleteNote);
    }, () => {deleteProject(project.id)}, 
    project.name, project.id);
})}

projectSidebar();
