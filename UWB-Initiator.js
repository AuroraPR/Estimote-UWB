// Configuration for the device as TOF_INITIATOR
var initiatorOptions = {
    timeout: 0,               // Maximum operation time (120 seconds)
    mode: uwb.Mode.HIGH_RESPONSIVNESS,  // Long-range operation mode
    panId: 0x2393,              // UWB network identifier
    minDistance: 0.0,           // Minimum distance to report (in meters)
    maxDistance: 15.0           // Maximum distance to report (in meters)
};

// Callback to handle the received distance
function distanceCallback(distance) {
    print(`Device ID: ${distance.id}, Distance: ${distance.dist.toFixed(2)} meters`);
}

// Start the beacon as Initiator
uwb.start(uwb.Role.TOF_INITIATOR, initiatorOptions)
    .then(() => print("Initiator configured and searching for devices..."))
    .catch(error => print("Error starting the Initiator:", error));
