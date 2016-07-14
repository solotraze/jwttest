var assert = require('chai').assert;
var jwtHelper = require('../jwtHelper');

var secret = 'foxjumpedoverthere';

describe('jwtHelper.js', function() {
  it('Should create token', function(done) {
    var token = jwtHelper.getToken({uid:11,username:'st@test.com',fullname:'solo tr'}, secret);
    assert.isNotNull(token);
    done();
  });

  it('should verify passed proper token', function(done) {
    var token = jwtHelper.getToken({uid:11,username:'st@test.com',fullname:'solo tr'}, secret);
    jwtHelper.verifyToken(token, secret, function(err, payload) {
      assert.isNull(err);
      assert.isNotNull(payload);
      assert.isTrue(payload.uid == 11);
      done(); 
    });
  });

  it('should verify failed invalid token', function(done) {
    var token = jwtHelper.getToken({uid:11,username:'st@test.com',fullname:'solo tr'}, secret);
    jwtHelper.verifyToken(token, secret+'abc', function(err, payload) {
      assert.isNotNull(err);
      done(); 
    });
  });
});
