document.addEventListener('DOMContentLoaded', function() {
    const flipSwitch = document.getElementById('flip-checkbox');
    const signUpForm = document.querySelector('.front');
    const loginForm = document.querySelector('.back');

    flipSwitch.addEventListener('change', function() {
        if (this.checked) {
            signUpForm.style.display = 'none';
            loginForm.style.display = 'block';
        } else {
            signUpForm.style.display = 'block';
            loginForm.style.display = 'none';
        }
    });
});