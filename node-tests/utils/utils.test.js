const expect = require('expect');

const utils = require('./utils')

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(2, 4);

      expect(res).toBe(6).toBeA('number');
    });
  });

  it('should square a number', () => {
    var res = utils.square(2);

    expect(res).toBeA('number').toBe(4);
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(2, 4, (sum) => {
      expect(sum).toBe(6).toBeA('number');
      done();
    })
  })

  it('should async square a number', (done) => {
    utils.asyncSquare(2, (res) => {
      expect(res).toBe(4).toBeA('number');
      done();
    })
  })
});



it('should expect some values', () => {
  // expect(12).toNotBe(11);
  // expect({name: 'Sander'}).toEqual({name: 'Sander'});
  // expect([2,3,4]).toExclude(1);
  expect({
    name: 'Sander',
    age: 26,
    location: 'Nijmegen'
  }).toInclude({
    age: 26
  })
});

it('should verify first and last names are set', () => {
  var user = {
    age: 26,
    location: 'Nijmegen'
  };
  var fullName = 'Sander Janssen'
  expect(utils.setName(user, fullName)).toInclude({
    firstName: 'Sander',
    lastName: 'Janssen'
  })
});
