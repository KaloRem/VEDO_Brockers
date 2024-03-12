// MODAL WINDOW OPEN/CLOSE
var modal = document.getElementById('modal');
var openBtn = document.getElementById('openBtn');
var closeBtn = document.getElementById('closeBtn');

// Store the original overflow value of the body for proper restoration
var bodyOverflowStyle;

openBtn.onclick = function () {
  modal.style.display = 'block';

  // Prevent body scrolling when modal is open
  bodyOverflowStyle = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
};

closeBtn.onclick = function () {
  modal.style.display = 'none';

  // Restore body scrolling when modal is closed
  document.body.style.overflow = bodyOverflowStyle;
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.body.style.overflow = bodyOverflowStyle;
  }
};

// AT LEAST 1 CHECKBOX ACTIVE
var checkboxes = document.querySelectorAll('input[name="option"]');
var submitButton = document.querySelector('button[type="submit"]');

// Function to check if at least one checkbox is selected
function isAtLeastOneCheckboxSelected() {
  return Array.from(checkboxes).some(checkbox => checkbox.checked);
}

// Update submit button state based on selection
function updateSubmitButton() {
  submitButton.disabled = !isAtLeastOneCheckboxSelected();
}

// Add event listener to each checkbox for selection changes
checkboxes.forEach(checkbox =>
  checkbox.addEventListener('change', updateSubmitButton)
);

// Call updateSubmitButton initially (in case checkboxes are pre-selected)
updateSubmitButton();

// ADDING OUTLINE WHEN CHECKBOX IS CHECKED
// Function to add outline on checkbox check
function addOutlineOnCheckboxCheck(checkbox) {
  const labelElement = checkbox.parentElement; // Get the parent label element
  labelElement.style.outline = checkbox.checked
    ? '4px solid var(--main-font-color)'
    : '';
  labelElement.style.transition = 'outline 100ms cubic-bezier(0.4, 0, 0.2, 1)';
}

// Event listener for checkbox change
checkboxes.forEach(checkbox =>
  checkbox.addEventListener('change', () => addOutlineOnCheckboxCheck(checkbox))
);
