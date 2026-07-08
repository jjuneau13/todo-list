function getStored() {
    try {
        const projects = localStorage.getItem("projects");
        const activeProject = localStorage.getItem("active-project");
        if (!projects) {
            return {};
        }
        return {"activeProject": activeProject, "projects": JSON.parse(projects)};
    } catch (error) {
        console.log(error);
        return {};
    }
}

function updateProjectStorage(activeProject, projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("active-project", activeProject);
}


export { updateProjectStorage, getStored }