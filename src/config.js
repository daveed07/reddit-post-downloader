const snoowrap = require("snoowrap");
const dotenv = require("dotenv");
dotenv.config();

const r = new snoowrap({
  userAgent: process.env.USER_AGENT,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
});

r.config({
  requestDelay: 1000,
  requestTimeout: 10000,
  continueAfterRatelimitError: true,
});

module.exports = r;