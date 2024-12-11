// Configuration for the device as TOF_RESPONDER
var responderOptions = {
  timeout: 0,                // Maximum operation time (120 seconds)
  mode: uwb.Mode.HIGH_RESPONSIVNESS, // Long-range operation mode
  panId: 0x2393,              // UWB network identifier
  minDistance: 0.0,           // Minimum distance to report (in meters)
  maxDistance: 15.0           // Maximum distance to report (in meters)
};

// Callback to handle the received distance
function distanceCallback(distance) {
  print(`Device ID: ${distance.id}, Distance: ${distance.dist.toFixed(2)} meters`);

  // Create the data object to send to the cloud (within the function)
  var cloudData = {
    id: distance.id,
    distance: distance.dist.toFixed(2),  // Format the distance to 2 decimal places
    timestamp: new Date().getTime()     // Add the timestamp
  };

  // Send the data to the cloud
  cloud.enqueue('distance-data', { distance: cloudData });
  sync.now();
}

// Start the beacon as Responder
uwb.start(uwb.Role.TOF_RESPONDER, responderOptions, distanceCallback)
  .then(() => print("Responder configured and waiting for distance measurements..."))
  .catch(error => print("Error starting the Responder:", error));
