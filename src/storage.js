function getProject(project) {
    return localStorage.getItem(project);
}

function getNotes(project) {
    return JSON.parse(localStorage.getItem(project.name));
}

