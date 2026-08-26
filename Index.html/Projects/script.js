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