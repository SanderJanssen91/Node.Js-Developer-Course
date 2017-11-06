console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
<<<<<<< HEAD
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('yargs ', argv);

if (command === 'add'){
  notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read'){
  notes.getNote(argv.title);
} else if (command === 'remove'){
  notes.removeNote(argv.title);
=======

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);

if (command === 'add'){
  console.log('Adding new note');
} else if (command === 'list'){
  console.log('Listing all notes');
} else if (command === 'read'){
    console.log('Reading note');
} else if (command === 'remove'){
    console.log('Removing note');
>>>>>>> 13c99f8e3f295c2f0c087070a872a7436e6001e8
} else {
  console.log('Command not recognized');
};
