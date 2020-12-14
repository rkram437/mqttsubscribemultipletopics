const _ = require("lodash");
const awsIot = require("aws-iot-device-sdk");
const keyFile = "/certfiles/private.pem.key"; //private.pem.key
const certFile = "/certfiles/certificate.pem.crt"; // certificate.pem.crt
const caFile = "/certfiles/rootCA.pem";
const host = "hostname-ats.iot.us-east-1.amazonaws.com"; // iot thing host name
const region = "us-east-1";


async function main() {
  try {
    var options = {
      keyPath: __dirname + keyFile,
      certPath: __dirname + certFile,
      caPath: __dirname + caFile,
      clientId: "*",
      port: 8883,
      region: region,
      host: host,
      keepalive: 60,
      reconnectPeriod: 1000,
      clean: false,
      encoding: "utf8",
    };

    var client = awsIot.device(options);
    client.on("connect", function () {
      // subscribe to all topics in the iot connect device     
      client.subscribe('#')
      let counter = 1;
      // on receivemessage check if the topicname has dev in it and print the message. 
      client.on("message", function (topic, message) {
        if (topic.indexOf("dev") > 0){
          console.log(
            counter + " Message Received - ", topic
          );
          counter++;
        }
        
      });
    });

  } catch (error) {
    console.error(error);
  }
}

(async () => {
  await main();
})().catch((e) => {
  // Deal with the fact the chain failed
  console.log("error details below");
  console.error(e);
});
