let editingProject = null;

function initProjectCancel() {
    const cancelProject = document.querySelector("#closeProject");
    cancelProject.addEventListener("click", () => {
        document.querySelector("#projectForm").reset();
        document.querySelector("#newProject").close();
    });
}

function initAddProject() {
    const addButton = document.querySelector("#addProject");
    addButton.addEventListener("click", () => {
        document.querySelector("#submitProject").textContent = "Add";
        editingProject = null;
    })
}

function attachProjectSubmit(addFunc, editFunc) {
    const submitProject = document.querySelector("#submitProject");
    submitProject.addEventListener("click", () => {
        const projectForm = new FormData(document.querySelector("#projectForm"));
        if (editingProject) {
            if (projectForm.get("projectTitle")) {
                editFunc(projectForm.get("projectTitle"))
            }
            editingProject = null;
        }
        else {
            if (projectForm.get("projectTitle")) {
                addFunc(projectForm.get("projectTitle"));
            };
        }
        
        document.querySelector("#projectForm").reset();
        document.querySelector("#newProject").close();
    });
}

function editProject(project) {
    const submitProject = document.querySelector("#submitProject");
    submitProject.textContent = "Update";
    editingProject = project;
    document.querySelector("#projectTitle").value = project.name;
    document.querySelector("#newProject").showModal();
}



export { initProjectCancel, attachProjectSubmit, editProject, initAddProject };