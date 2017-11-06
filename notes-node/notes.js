console.log('Starting notes.js');

<<<<<<< HEAD
var addNote = (title, body) => {
  console.log('Adding note: ', title, body);
};

var getAll = () => {
  console.log('Getting al notes');
};

var getNote = (title) => {
  console.log('Getting note: '+title);
};

var removeNote = (title) => {
  console.log('Removing note: '+title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
=======
module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
};
>>>>>>> 13c99f8e3f295c2f0c087070a872a7436e6001e8
