function createChild(element, content = null) {
    const ele = document.createElement(element);
    if (content) {ele.textContent = content};
    return ele;
}

function createNoteCard(note) {
    const notes = document.querySelector(".notes");
    const noteCard = document.createElement("div");
    noteCard.appendChild(createChild("h3", note.title));
    if (note.dueDate) { noteCard.appendChild(createChild("p", note.dueDate))};
    noteCard.setAttribute("data-id", note.id);
    notes.appendChild(noteCard);
}

function clearNoteCards() {
    document.querySelector(".notes").innerHTML = '';
}

export { createNoteCard, clearNoteCards, createChild }