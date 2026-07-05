function initCancel() {
    const cancelNote = document.querySelector("#closeNote");
    const cancelProject = document.querySelector("#closeProject");
    cancelNote.addEventListener("click", () => {
        document.querySelector("#noteForm").reset();
        document.querySelector("#newNote").close();
    });
    cancelProject.addEventListener("click", () => {
        document.querySelector("#projectForm").reset();
        document.querySelector("#newProject").close();
    });
}

function attachNoteSubmit(func) {
    const submitNote = document.querySelector("#submitNote");
    submitNote.addEventListener("click", (event) => {
        event.preventDefault();
        const noteForm = new FormData(document.querySelector("#noteForm"));
        if (noteForm.get("title")) {
            func(noteForm.get("title"), noteForm.get("description"), noteForm.get("dueDate"));
        };
        document.querySelector("#noteForm").reset();
        document.querySelector("#newNote").close();
    });
}

function attachProjectSubmit(func) {
    const submitProject = document.querySelector("#submitProject");
    submitProject.addEventListener("click", () => {
        const projectForm = new FormData(document.querySelector("#projectForm"));
        if (projectForm.get("projectTitle")) {
            func(projectForm.get("projectTitle"));
        };
        document.querySelector("#projectForm").reset();
        document.querySelector("#newProject").close();
    });
}

export { initCancel, attachNoteSubmit, attachProjectSubmit }