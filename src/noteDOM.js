function createChild(element, content = null) {
    const ele = document.createElement(element);
    if (content) {ele.textContent = content};
    return ele;
}

function createNoteCard(note, func) {
    const notes = document.querySelector(".notes");
    const noteCard = createChild("div");
    const delButton = createChild("button");
    delButton.addEventListener("click", () => {
        func(note.id);
        document.querySelector(`[data-id="${note.id}"]`).remove();
    });
    noteCard.appendChild(createChild("h3", note.title));
    noteCard.appendChild(delButton);
    if (note.dueDate) { noteCard.appendChild(createChild("p", note.dueDate))};
    noteCard.setAttribute("data-id", note.id);
    notes.appendChild(noteCard);
}

function clearNoteCards() {
    document.querySelector(".notes").innerHTML = '';
}

export { createNoteCard, clearNoteCards, createChild }