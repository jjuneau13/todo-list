import Project from "./project.js";

const projects = [];
let activeProject;


function addProject(name) {
    const newProject = new Project(name);
    projects.push(newProject);
    activeProject = newProject;
}

function deleteProject(projectDEL) {
    projects = projects.filter((project) => project.id != projectDEL.id);
}

function getActiveProject() {
    return activeProject;
}

function setActiveProject(project) {
    activeProject = project;
}

function getProjects() {
    return projects;
}

export { addProject, deleteProject, getActiveProject, setActiveProject, getProjects }