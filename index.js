// Select modal elements
const innerModal = document.querySelector('.modal-inner');
const outerModal = document.querySelector('.modal-outer');

// Setup button click callback
const handleButtonClick = (e) => {
  // Get required information
  const card = e.currentTarget.closest('.card');
  const img = card.querySelector('img');

  // Set inner modal html
  const innerModalHtml = `
    <img width="400" height="400" src="${img.src.replace('200', '400')}" alt="${
    img.alt
  }" />
    <h2>${card.dataset.description}</h2>
    <small>(Click outside this modal to close)</small>
  `;
  innerModal.innerHTML = innerModalHtml;

  // Add classes to open modal
  innerModal.classList.add('open');
  outerModal.classList.add('open');
};

// Setup outer modal click
const handleOuterModalClick = (e) => {
  const isOutside = !e.target.closest('.modal-inner');

  if (isOutside) {
    innerModal.classList.remove('open');
    outerModal.classList.remove('open');
  }
};

// Attach listeners
outerModal.addEventListener('click', handleOuterModalClick);
document
  .querySelectorAll('.card button')
  .forEach((button) => button.addEventListener('click', handleButtonClick));
