console.log("Welcome!");

const showNotes = () => {
    let notes = localStorage.getItem('notes');
    if (notes == null)
        notesObj = [];
    else
        notesObj = JSON.parse(notes);

    let html = '';
    notesObj.forEach((element, index) => {
        html += `<div class="notePack">
                    <div class="note">
                        <div id="noteTitle" class="noteTitle">Note ${index + 1}</div>
                        <div class="noteBody">${element}</div>
                    </div>
                    <input id=${index} onclick="deleteNode(this.id)" class="btn" type="button" value="Delete note">
                </div>`;
    })

    let notesElem = document.getElementById('all-notes');
    if (notesObj.length != 0)
        notesElem.innerHTML = html;
    else
        notesElem.innerHTML = ''
}

showNotes();

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", () => {
    let textNote = document.getElementById('textNote');
    let currNotes = localStorage.getItem('notes');

    if (currNotes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(currNotes);
    }

    notesObj.push(textNote.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    textNote.value = "";
    showNotes();
});

function deleteNode(index) {
    console.log("Delete clicked!")
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}