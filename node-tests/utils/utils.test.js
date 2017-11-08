const utils = require('./utils')

it('should add two numbers', () => {
  var res = utils.add(2, 4);

  if (res !== 6){
    throw new Error(`Expected 6, but got ${res}`);
  }
});

it('should square a number', () => {
  var res = utils.square(2);

  if (res !== 4){
    throw new Error(`Expected 4, but got ${res}`);
  }
});
