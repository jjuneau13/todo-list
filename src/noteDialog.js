let editingNote;

function initNoteCancel() {
    const cancelNote = document.querySelector("#closeNote");
    cancelNote.addEventListener("click", () => {
        document.querySelector("#noteForm").reset();
        document.querySelector("#newNote").close();
    });
}

function initNoteEdit(func) {
    const editButton = document.querySelector("#editNote");
    const noteForm = document.querySelector("#noteForm");
    const noteDialog = document.querySelector("#newNote");
    editButton.addEventListener("click", () => {
        const formData = new FormData(noteForm);
        func(formData.get("title"), formData.get("description"), formData.get("dueDate"), 0, editingNote);
        noteDialog.close();
        noteForm.reset();
    }); 
}

function initNewNote() {
    const newNoteButton = document.querySelector("#addNote");
    const submitNote = document.querySelector("#submitNote");
    const editNote = document.querySelector("#editNote");

    newNoteButton.addEventListener("click", () => {
        editNote.style.display = "none";
        submitNote.style.display = "block";
    })
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

function editNote(note) {
    const noteDialog = document.querySelector("#newNote");
    const editButton = document.querySelector("#editNote");
    const submitNote = document.querySelector("#submitNote");
    const noteForm = document.querySelector("#noteForm");
    //removing submit button and displaying edit button
    submitNote.style.display = "none";
    editButton.style.display = "block";
    editingNote = note.id;
    document.querySelector("#title").value = note.title;
    document.querySelector("#description").value = note.description;
    document.querySelector("#dueDate").value = note.dueDate;
    noteDialog.showModal();
}

export { initNoteCancel, initNewNote, initNoteEdit, attachNoteSubmit, editNote }