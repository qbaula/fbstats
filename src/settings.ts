var DefaultSettings = {
    ignoreBelowMessageCount: 20,
    displayOtherMessages: true,
    anonymous: false,
    appID:"",
    AJAX: {
        threadGetLimit: 100,
        messageGetLimit: 502
    },
    cacheTime: 60 * 60 * 24,
    maxThreadCount: 20,
    downloadMessageBodies: true,
    countChars:false,

    Graph: {
        smoothAmount: 0,
        separateInOut: true,
        stackThreads: true,
        stackInOut: true,
        unstackedOpacity:0.8,
        steps: true,
        scale: "linear",
        grouping: TimeGrouping.weekly,
    }
}
var Settings = DefaultSettings;
var SettingNeedsDownloadMessages = ["Settings.countChars"];

function loadSettings() {
    Settings = storageGetObject("settings") || DefaultSettings;
}

function saveSettings() {
    storageSetObject("settings", Settings);
}
