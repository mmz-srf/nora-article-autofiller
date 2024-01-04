//console.log("This is a popup!");

//document.getElementById('kicker').value = 'Das ist ein Test';

document.addEventListener('DOMContentLoaded', function() {
  var autofillButton = document.getElementById('autofillButton');

  autofillButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'fill' });
    });
  });
});