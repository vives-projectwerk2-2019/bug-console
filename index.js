var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://labict.be');

client.on('connect', function () {
    client.subscribe('TTN');
});

client.on('message', function (topic, message) {
    //TODO:how will the format be? How to process information?
    data = JSON.parse(message.toString());
    console.log(data);
});