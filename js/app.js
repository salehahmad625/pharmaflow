require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const myNum = process.env.MYNUM;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This is a text message! It can be anything",
    from: "+14096840428",
    to: myNum,
  })
  .then((message) => console.log(message))
  .catch((err) => console.log(err));
