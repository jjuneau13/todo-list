import Project from "./project.js";
import { updateProjectStorage, getStored } from "./storage.js";

let projects = [];
let activeProject;

function pushProjects() {
    updateProjectStorage(activeProject, projects);
}

function initProjects() {
    const stored = getStored();
    if (stored.projects) {
        activeProject = stored.activeProject;
        stored.projects.forEach((project) => {
            const newProj = addProject(project.name, project.id, false);
            newProj.reconstruct(project.notes);
        })
    }
    
    if (projects.length == 0) {
        addProject("New");
    }
}

function addProject(name, id, setActive = true) {
    const newProject = new Project(name, id);
    projects.push(newProject);
    if (setActive) {
        activeProject = newProject.id;
        pushProjects();
    };
    return newProject;
}

function deleteProject(id) {
    projects = projects.filter((project) => project.id != id);
    if (getProjects().length == 0) {
        addProject("New");
    }
    if (id === activeProject) {
        setActiveProject(getProjects()[0].id);
    }
    pushProjects();
}

function findProject(id) {
    return projects.find((project) => project.id === id);
}

function editProjectName(title, id) {
    findProject(id).editName(title);
    setActiveProject(id);
    pushProjects();
}

function deleteNote(id) {
    getActiveProject().removeNote(id);
    pushProjects();
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

export { addProject, initProjects, pushProjects, deleteProject, getActiveProject, setActiveProject, getProjects, deleteNote, editProjectName }