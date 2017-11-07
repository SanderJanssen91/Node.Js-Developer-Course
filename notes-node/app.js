// console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleOptions = {
  describe: 'Title of the note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list','List all notes')
  .command('read','Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];
// console.log('Command: ', command);
// console.log('yargs ', argv);

if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note === undefined) {
    console.log('Note title is already in use. Please use another note title.');
  } else {
    console.log('Note was saved.');
    notes.logNote(note);
  };
} else if (command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
  } else if (command === 'read'){
  var note = notes.getNote(argv.title);
  if(note){
    console.log('Note found.');
    notes.logNote(note);
  } else {
    console.log('Note not found.');
  }
} else if (command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was succesfully removed.' : 'Note not found.';
  console.log(message);
} else {
  console.log('Command not recognized');
};
