const fetch = require('node-fetch');
const Radar = require('radar-sdk-js');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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
      let info = data.events[0].type;
      //simulate enter and exit of geofence
      let randnum = Math.random() * 1;
      if (randnum > 0.8) {
        console.log('User has exited -- check email');
        newOne(true);
      } else {
        console.log('User has is still inside');
        newOne(false);
      }
    });
  }, 1000 * 5 * 1); //every 5 seconds
}

function newOne(userExorEnt) {
  // console.log(userExorEnt);
  let request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState === 4) {
      // console.log(this.status);
      // console.log(this.responseText);
    }
  };
  request.open(
    'POST',
    'https://events-api.notivize.com/applications/33a7f3b1-8cce-473c-a7a3-ce92a3c2f0b7/event_flows/dec4b42e-61bc-46af-98e7-de658591be0f/events',
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
