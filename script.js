document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.querySelector('.toggle-password');
    const passwordField = document.querySelector('#password');

    togglePassword.addEventListener('click', () => {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            togglePassword.textContent = 'Hide';
        } else {
            passwordField.type = 'password';
            togglePassword.textContent = 'Show';
        }
    });

    const form = document.querySelector('#registrationForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Perform form validation and submission
        console.log('Form submitted');
    });
});
