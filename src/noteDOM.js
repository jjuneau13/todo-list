function createChild(element, content = null) {
    const ele = document.createElement(element);
    if (content) {ele.textContent = content};
    return ele;
}

function createNoteCard(note, func, edit) {
    const notes = document.querySelector(".notes");
    const noteCard = createChild("div");
    const delButton = createChild("button");
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
        console.log(note.id);
        edit(note.id)});
    noteCard.appendChild(title)
    noteCard.appendChild(delButton);
    if (note.dueDate) { noteCard.appendChild(createChild("p", note.dueDate))};
    noteCard.setAttribute("data-id", note.id);
    notes.appendChild(noteCard);
}

function clearNoteCards() {
    document.querySelector(".notes").innerHTML = '';
}

export { createNoteCard, clearNoteCards, createChild }