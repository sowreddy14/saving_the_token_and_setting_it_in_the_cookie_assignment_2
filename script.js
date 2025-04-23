const jwt = require("jsonwebtoken");

/**
 * Encrypts a payload into a JWT token with expiry.
 * @param {Object} payload - The data to encode in the token.
 * @param {string} secret - The secret key to sign the token.
 * @returns {string} The signed JWT token.
 */
const encrypt = (payload, secret) => {
  // Set the token to expire in 1 hour
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

module.exports = encrypt;