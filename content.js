chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'fill') {
    fill();
  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function fill() {
  console.log('Autofilling...');

  // TODO: Fill that damm select element!!!
  const kicker = document.getElementById('kicker');
  const title = document.getElementById('title');
  const shortLead = document.getElementById('shortLead');
  const author = document.getElementById('author');

  const authors = ['Benjamin Knecht', 'Phillip Christen', 'Urban Etter', 'Pascal von Büren', 'Hasan Kryeziu'];

  kicker.value = 'Das ist ein Kicker';
  title.value = 'Das ist ein Titel';
  shortLead.value = 'Das ist ein Shortlead';
  author.value = authors[getRandomInt(authors.length)];

  title.dispatchEvent(new Event('change', { bubbles: true }));
  kicker.dispatchEvent(new Event('change', { bubbles: true }));
  shortLead.dispatchEvent(new Event('change', { bubbles: true }));
  author.dispatchEvent(new Event('change', { bubbles: true }));
}

document.addEventListener('keydown', function(event) {
  if (event.metaKey && event.key === 'b') {
    fill();
  }
});
