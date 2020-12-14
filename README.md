# mqttsubscribemultipletopics
IOT mqtt subscribe to multiple topics and check for the message received in console
Create an IOT thing in AWS

Download all the cert files private, certificate files and rootca files and place the references in code
const keyFile = "/certfiles/private.pem.key"; //private.pem.key
const certFile = "/certfiles/certificate.pem.crt"; // certificate.pem.crt
const caFile = "/certfiles/rootCA.pem";

Copy the host name from aws and update the host 
const host = "hostname-ats.iot.us-east-1.amazonaws.com"; // iot thing host name

npm install lodash and aws-iot-device-sdk