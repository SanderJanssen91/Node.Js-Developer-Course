// console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-date.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-date.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var newNotes = notes.filter((note) => note.title === title);
  return newNotes[0];
};

var removeNote = (title) => {
  var oldNotes = fetchNotes();
  var newNotes = oldNotes.filter((note) => note.title !== title);
  saveNotes(newNotes);

  return oldNotes.length !== newNotes.length;
};

var logNote = (note) => {
  debugger;
  console.log('--------------------');
  console.log('Title: '+note.title);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
