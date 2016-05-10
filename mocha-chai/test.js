var expect = require('chai').expect;
var user = require('./user');

describe('Name', function() {
  it('Should have a name', function() {
    expect(user).to.have.ownProperty('name');
  });
  it('The name property should be a string', function () {
    expect(user.name).to.be.a('string');
  });
  it('Should have non empty string as name', function () {
    expect(user.name).to.have.length.above(0);
  });
});
