# twilio-function-logs

You can use these code snippets to grab deployed twilio funtion logs and send them to datadog.


## requirements
- Download the helper library from https://www.twilio.com/docs/node/install
  Find your Account SID and Auth Token at twilio.com/console
  and set the environment variables. See http://twil.io/secure
- npm install requests

- To get the env sid you will have to run read-env.js, all other sids can be 
  retrieved from the twilio console
  
- set the datadog api key, (double check the log intake url is correct for your account) 

