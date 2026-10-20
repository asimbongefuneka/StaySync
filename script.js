function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

function showFormMessage(form, message) {
    const formMessage = form?.querySelector('.form-message');
    if (formMessage) {
        formMessage.textContent = message;
    }
}

function validateLoginForm(form) {
    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (username.length < 3) {
        showFormMessage(form.closest('.form-box'), 'Username must be at least 3 characters long.');
        return false;
    }

    if (password.length < 6 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
        showFormMessage(form.closest('.form-box'), 'Password must be at least 6 characters and include a number and letter.');
        return false;
    }

    return true;
}

function validateEmailAddress(email) {
    return typeof email === 'string' && email.includes('@') && email.includes('.') && email.trim().length > 0;
}

function validateSignUpForm(form) {
    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (username.length < 3) {
        showFormMessage(form.closest('.form-box'), 'Username must be at least 3 characters long.');
        return false;
    }

    if (!validateEmailAddress(email)) {
        showFormMessage(form.closest('.form-box'), 'Email must contain @ and a valid domain.');
        return false;
    }

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
        showFormMessage(form.closest('.form-box'), 'Password must be at least 8 characters and include uppercase, lowercase, and a number.');
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('nsfas');

    const loginForm = document.querySelector('#log form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            if (validateLoginForm(loginForm)) {
                showFormMessage(loginForm.closest('.form-box'), 'Login successful! Redirecting...');
                window.location.href = 'main.html';
            }
        });
    }

    const signUpForm = document.querySelector('#sign form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', (event) => {
            event.preventDefault();

            if (validateSignUpForm(signUpForm)) {
                showFormMessage(signUpForm.closest('.form-box'), 'Account created successfully! Redirecting...');
                window.location.href = 'main.html';
            }
        });
    }
});