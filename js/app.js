console.log("Welcome!");

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
});

const showNotes = () => {
    let notes = localStorage.getItem('notes');
    if (notes == null)
        notesObj = [];
    else
        notesObj = JSON.parse(notes);

    let html = '';

}