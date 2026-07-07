let editingProject = null;

function initProjectCancel() {
    const cancelProject = document.querySelector("#closeProject");
    cancelProject.addEventListener("click", () => {
        document.querySelector("#projectForm").reset();
        document.querySelector("#newProject").close();
    });
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
    const projectDialog = document.querySelector("#newProject");
    const editButton = document.querySelector("#editProject");
    const submitProject = document.querySelector("#submitProject");
    const projectForm = document.querySelector("#projectForm");

    editingProject = project;
    document.querySelector("#projectTitle").value = project.name;
    projectDialog.showModal();
}

export { initProjectCancel, attachProjectSubmit, editProject };