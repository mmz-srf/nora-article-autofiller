chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'fill') {
    fill();
  }
});

const dispatchMouseEvent = (element, event) => {
  return new Promise((resolve) => {
    const eventListener = () => {
      element.removeEventListener(event.type, eventListener);
      resolve();
    };
    element.addEventListener(event.type, eventListener);
    element.dispatchEvent(event);
  });
};

const fill = async () => {
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

  const select = document.querySelector('[data-cy="edith-rubric-input"] .select-box__control');
  const testOptionIsAlreadyOpen = document.querySelector('.select-box__option');

  console.log('Select element:', select);

  if (testOptionIsAlreadyOpen) {
    console.log('Option is already open');
    return;
  }

    const mouseDownEvent = new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window });
    const mouseUpEvent = new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window });

    await dispatchMouseEvent(select, mouseDownEvent);
    await dispatchMouseEvent(select, mouseUpEvent);

    //const option = document.getElementById('react-select-5-option-0');
    const option = document.querySelector('.select-box__option');

  console.log('Option element:', option);

  if (!option) {
    console.log('No option found');
    return;
  }

  const mouseDownEvent2 = new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window });
  const mouseUpEvent2 = new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window });

  await dispatchMouseEvent(option, mouseDownEvent2);
  await dispatchMouseEvent(option, mouseUpEvent2);

  option.click();
};

document.addEventListener('keydown', function(event) {
  if (event.metaKey && event.key === 'b') {
    fill();
  }
});
