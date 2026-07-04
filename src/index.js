import { displayProject, addButton } from "./projectDOM.js";
import { addProject, deleteProject, getActiveProject, setActiveProject, getProjects} from "./projectManager.js";


if (getProjects().length == 0) {
    addProject("New");
}

//Sets up cancel button for the add note form
const cancelButton = document.querySelector("#closeNote");
cancelButton.addEventListener("click", () => {
    document.querySelector("#noteForm").reset();
    document.querySelector("#newNote").close();
})

addProject('second');
getActiveProject().addNote('crazy', 'i was crazy once');

//Gets the projects in an array and creates a button for them
getProjects().forEach((project) => {
    addButton(() => {
        setActiveProject(project),
        displayProject(project.notes)
    }, project.name, project.id);
})