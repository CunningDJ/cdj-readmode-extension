chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('READMODE browserAction.onClicked');
  chrome.tabs.executeScript({
    file: 'readMode.js'
  });
});