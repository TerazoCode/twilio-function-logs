// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

// This will send logs from a deployed twilio service to datadog

const accountSid = "<twilio_account_id>";
const authToken = "<auth_token>";
const client = require('twilio')(accountSid, authToken);
const serialize = require("/twilio-logs/node_modules/twilio/dist/lib/base/serialize.js");
var request = require("request");
const logUrl = "https://http-intake.logs.datadoghq.com/api/v2/logs";
const api_key = "<your datadog api key";

function sendLogs(log){
    request({
        url: logUrl,
        headers: {
            "Content-Type": "application/json",
            "DD-API-KEY": api_key
        },
        method: "POST",
        body: log,
        json: true
    }, function (err, res,) {
        if (err) {
            console.log(err);
            callback(null, "An error found when sending log to Datadog!");
        }


        console.log(res);
        callback(null, res);
    });
}
// change the date for what time frame you want, you can set a startDate and endDate Default is 1 day
// limit is optional.
// you can just print the logs to the console instead of sending to datadog
client.serverless.v1.services('<service_sid>')
      .environments('<env-sid>')
    .logs
    .list({limit: 20, startDate: serialize.iso8601DateTime("2023-01-27T19:12:24Z")})
    .then(logs => logs.forEach(l => sendLogs(l)));




