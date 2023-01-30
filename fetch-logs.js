
// fetches a log by it's sid
const accountSid = "";
const authToken = "";
const client = require('twilio')(accountSid, authToken);

client.serverless.v1.services('ZSxxxxxxxxxxxxxxxxxxxxxxxx')
    .environments('ZExxxxxxxxxxxxxxxxxxxxxxxxx')
    .logs(
        'NOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    .fetch()
    .then(log => console.log(log));