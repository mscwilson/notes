function interface() {
  let root = document.getElementById("root");

  let notebook = new Notebook();

  // root.innerHTML = createHeader() + createMainContent() + createFooter();
  root.innerHTML = createNoteCapture() + createMainContent();

  let capture = document.getElementById("note-capture");

  capture.innerHTML = notebook.newNote();

  let note = document.getElementById("note");

  note.addEventListener("submit", (event) => {
    event.preventDefault();
    notebook.addNote(notetext.value);
    notebook.addLink(notetext.value);
    document.getElementById("main-content").innerHTML = notebook.printAll();
  });
}

interface();

function createHeader() {
  return '<div id="header"></div>';
}

function createNoteCapture() {
  return '<div id="note-capture"></div>';
}

function createMainContent() {
  return '<div id="main-content"></div>';
}

function createFooter() {
  return '<div id="footer"></div>';
}
