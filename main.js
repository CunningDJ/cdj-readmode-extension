//console.log('MAIN IMPORTED')
`document.addEventListener('DOMContentLoaded', function() {
    let readModeButton = document.getElementById('readModeButton');
    readModeButton.addEventListener('click', function() {
        console.log('[event] READMODE click')
        // v2
        chrome.tabs.executeScript(i{ file: 'readMode.js' }, function() {
            if (chrome.runtime.lastError) {
                alert('READMODE ERROR: ' + chrome.runtime.lastError.message);
            }
        });

        // v1
        /*chrome.tabs.getSelected(null, function(tab) {
            // MAIN
            readMode();
        });*/
    });
});`

console.log(chrome);

chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('READMODE browserAction.onClicked');
  chrome.tabs.executeScript({
    file: 'readMode.js'
  });
});




`

    "browser_action": {
        "default_title": "READMODE_DEFAULT_TITLE",
        "default_icon": "cdj-icon.png",
        "default_popup": "popup.html"
    }



`