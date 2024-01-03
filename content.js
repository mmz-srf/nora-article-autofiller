chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'fill') {
    console.log('Autofilling...');

    // TODO: Fill that damm select element!!!
    const kicker = document.getElementById('kicker');
    const title = document.getElementById('title');
    const shortLead = document.getElementById('shortLead');
    const author = document.getElementById('author');

    kicker.value = 'Das ist ein Kicker';
    kicker.dispatchEvent(new Event('change', { bubbles: true }));
    title.value = 'Das ist ein Titel';
    title.dispatchEvent(new Event('change', { bubbles: true }));
    shortLead.value = 'Das ist ein Shortlead';
    shortLead.dispatchEvent(new Event('change', { bubbles: true }));
    author.value = 'Benjamin Knecht';
    author.dispatchEvent(new Event('change', { bubbles: true }));

  }
});
