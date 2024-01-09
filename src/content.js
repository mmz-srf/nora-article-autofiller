chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'fill') {
    fill();
  }
});

const fill = () => {
  console.log('bin da 2');

  const fields = {
    kicker: 'Das ist ein Kicker',
    title: 'Das ist ein Titel',
    shortLead: 'Das ist ein Shortlead',
    author: 'Benjamin Knecht',
  };

  for (const [fieldId, value] of Object.entries(fields)) {
    const field = document.getElementById(fieldId);
    if (field) {
      field.value = value;

      // Dispatch a change event to notify React components of the change
      const changeEvent = new Event('change', { bubbles: true, cancelable: true });
      field.dispatchEvent(changeEvent);
    }
  }
};

document.addEventListener('keydown', function(event) {
  if (event.metaKey && event.key === 'b') {
    fill();
  }
});
