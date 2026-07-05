import Project from "./project.js";

let projects = [];
let activeProject;


function addProject(name) {
    const newProject = new Project(name);
    projects.push(newProject);
    activeProject = newProject.id;
}

function deleteProject(id) {
    projects = projects.filter((project) => project.id != id);
}

function deleteNote(id) {
    getActiveProject().notes = getActiveProject().notes.filter((note) => note.id != id);
}

function getActiveProject() {
    return projects.find((project) => project.id == activeProject);
}

function setActiveProject(id) {
    activeProject = id;
}

function getProjects() {
    return projects;
}

export { addProject, deleteProject, getActiveProject, setActiveProject, getProjects, deleteNote }