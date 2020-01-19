const fetch = require('node-fetch');
const Radar = require('radar-sdk-js');
//import Radar from 'radar-sdk-js';

function hello() {
  var obj = {
    method: 'GET',
    headers: {
      Authorization: 'prj_live_sk_29a86f86d54afb0c257cbec943597e6d395a421c'
    }
  };
  fetch('https://api.radar.io/v1/events', obj).then(async response => {
    let data = await response.json();
    //if data.events[0].type changes into user.exited_geofence
    //send sms to parent
  });
}

module.exports = {
  hello
};

//use google to find address

//create 50m geofence around address
