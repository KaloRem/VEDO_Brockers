// MODAL WINDOW OPEN/CLOSE
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const checkboxes = document.querySelectorAll('input[name="option"]');
const submitButton = document.getElementById('checkBtn');
// Store the original overflow value of the body for proper restoration
var bodyOverflowStyle;

submitButton.disabled = true; // Domyślnie wyłącz przycisk

// Function to check if at least one checkbox is selected
function isAtLeastOneCheckboxChecked() {
  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      return true;
    }
  }
  return false;
}

// Open modal
openBtn.onclick = function () {
  modal.style.display = 'block';

  // Prevent body scrolling when modal is open
  bodyOverflowStyle = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  submitButton.disabled = !isAtLeastOneCheckboxChecked();
};

// Close modal by button
closeBtn.onclick = function () {
  modal.style.display = 'none';

  // Restore body scrolling when modal is closed
  document.body.style.overflow = bodyOverflowStyle;
};

// Close modal by clicking outside of modal
window.onclick = function (event) {
  if (event.target.id === modal.id) {
    modal.style.display = 'none';
    document.body.style.overflow = bodyOverflowStyle;
  } else {
    return console.error;
  }
};

// Update submit button state and checkbox parent outline on checkbox change
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    submitButton.disabled = !isAtLeastOneCheckboxChecked();

    const checkboxParent = checkbox.parentElement;
    if (checkbox.checked) {
      checkboxParent.style.outline = '4px solid var(--main-font-color)';
      checkboxParent.style.transition =
        'outline 100ms cubic-bezier(0.4, 0, 0.2, 1)';
    } else {
      checkboxParent.style.outline = '';
      checkboxParent.style.transition = '';
    }
  });
});
