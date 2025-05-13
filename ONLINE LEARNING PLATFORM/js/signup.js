document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset error messages
        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';

        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate form
        let isValid = true;

        // Validate full name
        if (fullName.length < 2) {
            nameError.textContent = 'Please enter your full name';
            nameError.classList.add('show');
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.classList.add('show');
            isValid = false;
        }

        // Validate password
        if (password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            passwordError.classList.add('show');
            isValid = false;
        }

        // Validate confirm password
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match';
            confirmPasswordError.classList.add('show');
            isValid = false;
        }

        if (isValid) {
            // Create user data object
            const userData = {
                fullName: fullName,
                email: email,
                password: password
            };

            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(userData));

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message show';
            successMessage.textContent = 'Account created successfully! Redirecting to login...';
            signupForm.appendChild(successMessage);

            // Redirect to login page after a short delay
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        }
    });
}); 