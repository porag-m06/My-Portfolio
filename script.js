
// -------- contact email validation STARTS --------

const form = document.querySelector('form');
const eInput = document.querySelector('#emil');
let isLower;

eInput.addEventListener('input', () => {
  if (eInput.value === eInput.value.toLowerCase()) {
    eInput.classList.remove('warn');
    document.getElementById('demo').innerHTML = '';
  }
});

form.addEventListener('submit', (event) => {
  isLower = eInput.value === eInput.value.toLowerCase();

  if (!isLower) {
    event.preventDefault();
    eInput.className = 'warn';
    document.getElementById('demo').innerHTML = 'Email address must be in lowercase!';
  }
});

// -------- contact email validation STARTS --------