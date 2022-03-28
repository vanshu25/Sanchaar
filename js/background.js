const audioCtx = new AudioContext();
const destination = audioCtx.createMediaStreamDestination();
var output = new MediaStream();
var micsource;
var syssource;
var mediaRecorder = '';
var mediaConstraints;
var micstream;
var audiodevices = [];
var cancel = false;
var recording = false;
var tabid = 0;
var maintabs = [];
var camtabs = [];
var recording_type = "tab-only";
var pushtotalk;
var newwindow = null;
var micable = true;
var width = 1920;
var height = 1080;
var quality = "max";
var fps = 60;
var camerasize = "small-size";
var camerapos = {x:"10px", y:"10px"};
const streamSaver = window.streamSaver;

// Get list of available audio devices
getDeviceId();

chrome.runtime.onInstalled.addListener(function() {
    // Set defaults when the extension is installed
    chrome.storage.sync.set({
        toolbar: true,
        countdown: true,
        countdown_time: 3,
        flip: true,
        pushtotalk: false,
        camera: 0,
        mic: 0,
        type: "tab-only",
        quality: "max",
        fps: 60,
		start:0,
		total:0
    });
    
    // Inject content scripts in existing tabs
    chrome.tabs.query({currentWindow: true}, function gotTabs(tabs){
        for (let index = 0; index < tabs.length; index++) {
            if (!tabs[index].url.includes("chrome://") && !tabs[index].url.includes("chrome.com")) {
                chrome.tabs.executeScript(tabs[index].id, {
                    file: './js/detect.js'
                })
            }
        }
    });
});

// Get a list of the available audio devices
function getDeviceId() {
    audiodevices = [];
    navigator.mediaDevices.enumerateDevices().then(function(devices) {
        devices.forEach(function(device) {
            if (device.kind == "audioinput") {
                audiodevices.push({
                    label: device.label,
                    id: device.deviceId
                });
            }
        });
        chrome.runtime.sendMessage({type: "audio-done", devices:audiodevices});
    });
}

// Update camera device
function updateCamera(request) {
    chrome.tabs.getSelected(null, function(tab) {
        // Save user preference
        chrome.storage.sync.set({
            camera: request.id
        });

        // Send user preference to content script
        chrome.tabs.sendMessage(tab.id, {
            type: request.type,
            id: request.id
        });
    });
}
