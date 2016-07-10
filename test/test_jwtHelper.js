var assert = require('chai').assert;
var jwtHelper = require('../jwtHelper');

describe('jwtHelper.js', function() {
  it('Should create token', function(done) {
    var token = jwtHelper.getToken({uid:11,username:'st@test.com',fullname:'solo tr'});
    assert.isNotNull(token);
    done();
  });
});
