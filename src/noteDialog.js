let editingNote;

function initNoteCancel() {
    const cancelNote = document.querySelector("#closeNote");
    cancelNote.addEventListener("click", () => {
        document.querySelector("#noteForm").reset();
        document.querySelector("#newNote").close();
    });
}

function initNewNote() {
    const newNoteButton = document.querySelector("#addNote");
    const submitNote = document.querySelector("#submitNote");
    newNoteButton.addEventListener("click", () => {
        submitNote.textContent = "Add";
        editingNote = null;
    })
}

function attachNoteSubmit(addFunc, editFunc) {
    const submitNote = document.querySelector("#submitNote");
    submitNote.addEventListener("click", () => {
        const noteForm = new FormData(document.querySelector("#noteForm"));
        if (editingNote) {
            if (noteForm.get("title")) {
                editFunc(noteForm.get("title"), noteForm.get("description"), noteForm.get("dueDate"), editingNote.id);
            };
            editingNote = null;
        }
        else {
            if (noteForm.get("title")) {
                addFunc(noteForm.get("title"), noteForm.get("description"), noteForm.get("dueDate"));
            };
        }
        document.querySelector("#noteForm").reset();
        document.querySelector("#newNote").close();
    });
}

function editNote(note) {
    const noteDialog = document.querySelector("#newNote");
    const submitNote = document.querySelector("#submitNote");
    const noteForm = document.querySelector("#noteForm");
    //removing submit button and displaying edit button
    submitNote.textContent = "Update";
    editingNote = note;
    document.querySelector("#title").value = note.title;
    document.querySelector("#description").value = note.description;
    document.querySelector("#dueDate").value = note.dueDate;
    noteDialog.showModal();
}

export { initNoteCancel, initNewNote, attachNoteSubmit, editNote }