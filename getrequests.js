const fetch = require('node-fetch');
const Radar = require('radar-sdk-js');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//import Radar from 'radar-sdk-js';

function hello() {
  var obj = {
    method: 'GET',
    headers: {
      Authorization: 'prj_live_sk_29a86f86d54afb0c257cbec943597e6d395a421c'
    }
  };
  let changed = false;
  setInterval(() => {
    fetch('https://api.radar.io/v1/events', obj).then(async response => {
      let data = await response.json();
      console.log(data);
      //   console.log(data.events[0].type);
      let info = data.events[0].type;

      let randnum = Math.random() * 1;
      console.log(randnum);
      if (randnum > 0.5) {
        newOne('true');
      } else {
        newOne('false');
      }
    });
  }, 1000 * 5 * 1);
}

function newOne(userExorEnt) {
  console.log(userExorEnt);
  let request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState === 4) {
      console.log(this.status);
      console.log(this.responseText);
    }
  };
  request.open(
    'POST',
    'https://events-api.notivize.com/applications/33a7f3b1-8cce-473c-a7a3-ce92a3c2f0b7/event_flows/859a1363-c501-42f8-b612-2765938aca5b/events',
    true
  );
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(
    JSON.stringify({
      geofence_id: 'data',
      type: userExorEnt
    })
  );
}

module.exports = {
  hello,
  newOne
};

//use google to find address

//create 50m geofence around address
