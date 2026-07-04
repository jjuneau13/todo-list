import { displayProject, addProjectToSidebar } from "./projectDOM.js";
import { addProject, deleteProject, getActiveProject, setActiveProject, getProjects} from "./projectManager.js";
import { initCancel, attachNoteSubmit } from "./dialog.js";

if (getProjects().length == 0) {
    addProject("New");
}

initCancel();
attachNoteSubmit((title, description, dueDate) => {
    getActiveProject().addNote(title, description, dueDate);
    displayProject(getActiveProject().notes);
    console.log(getActiveProject());
});


//Gets the projects in an array and creates a button for them
function projectSidebar() {
    getProjects().forEach((project) => {
    addProjectToSidebar(() => {
        setActiveProject(project),
        displayProject(project.notes)
    }, project.name, project.id);
})}

projectSidebar();
