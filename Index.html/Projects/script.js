const toggleButton = document.querySelector('#toggle-btn');
const extraContent = document.querySelector('#extra-content');

toggleButton.addEventListener('click', () => {
    if (extraContent.style.display === 'none') {
        extraContent.style.display = 'block';
        toggleButton.textContent = 'Hide Details';
        toggleButton.setAttribute('aria-expanded', 'true');
    } else {
        extraContent.style.display = 'none';
        toggleButton.textContent = 'Show Details';
        toggleButton.setAttribute('aria-expanded', 'false');
    }
});

const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#user-name');
const nameError = document.querySelector('#name-error');

if (contactForm && nameInput && nameError) {
    contactForm.addEventListener('submit', (event) => {
        nameError.textContent = '';

        if (nameInput.value.trim() === '') {
            event.preventDefault();
            nameError.textContent = 'Please enter your name before submitting.';
        }
    });

    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() !== '') {
            nameError.textContent = '';
        }
    });

}