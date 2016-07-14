var jwt = require('jsonwebtoken');

function getToken(payload, secret) {
  return jwt.sign(payload, secret); //, { 'expiresInMinutes': 2 });
}

function verifyToken(token, secret, callback) {
  jwt.verify(token, secret, function(err, payload) {
    if (err) {
      callback(err);
      return;
    }
    else {
      callback(null, payload);
    }
  });
}

exports.getToken = getToken;
exports.verifyToken = verifyToken;
