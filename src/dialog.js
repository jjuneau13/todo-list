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
    submitNote.addEventListener("click", () => {
        const noteForm = new FormData(document.querySelector("#noteForm"));
        if (noteForm.get("title")) {
            func(noteForm.get("title"), noteForm.get("description"), noteForm.get("dueDate"));
        }
    });
    
}

export { initCancel, attachNoteSubmit }