# OuTrack (Won 1st Place in Best Use of Amazon Alexa Category @ CruzHacks)
[OuTrack on Devpost](https://devpost.com/software/outrack)

## What it does
OuTrack creates a geofence around a user's home and sends an email to the parent once their child has exited the premises. Next, the parent can ask their amazon alexa to give them precise location updates as to address that their child is.

## How I built it
I used Radar.io's geofencing API to create a geofence around a 'parent's' home and then track when their child leaves the geofence. Next, I used Notivize's API to send an email to the parent to notify them that their child has left the home. Then, we created an Alexa skill to determine the child's exact location by requesting back to our server which converted the child's Lat & Long coordinates (which we received from Radar.io) into an address using Google Maps' reverse geocoding.

