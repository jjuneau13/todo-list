function createChild(element, content = null) {
    const ele = document.createElement(element);
    if (content) {ele.textContent = content};
    return ele;
}

function createNoteCard(note, func, completeFunc, edit) {
    const notes = document.querySelector(".notes");
    const noteCard = createChild("div");
    const delButton = createChild("button");
    const complete = createChild("button");
    complete.setAttribute("class", "complete-button");
    complete.addEventListener("click", () => {
        completeFunc(note.id);
        document.querySelector(`[data-id="${note.id}"]`).classList.toggle("completed");
    })
    //Creates the function that deletes each note
    delButton.setAttribute("class", "del-button");
    delButton.addEventListener("click", () => {
        func(note.id);
        document.querySelector(`[data-id="${note.id}"]`).remove();
    });
    const title = createChild("button", note.title);
    //Makes the title and shows the update dialog when clicked
    title.setAttribute("class", "title-button");
    title.addEventListener("click", () => {
        edit(note.id)});
    noteCard.append(title, complete, delButton);
    noteCard.classList.add(`priority${note.priority}`);
    if (note.dueDate) { noteCard.appendChild(createChild("p", note.dueDate))};
    noteCard.setAttribute("data-id", note.id);
    notes.appendChild(noteCard);
}

function clearNoteCards() {
    document.querySelector(".notes").innerHTML = '';
}

export { createNoteCard, clearNoteCards, createChild }