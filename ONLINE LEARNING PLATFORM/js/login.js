document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset error messages
        emailError.textContent = '';
        passwordError.textContent = '';

        // Get form values
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        // Validate form
        let isValid = true;

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

        if (isValid) {
            // Get stored user data
            const storedUser = localStorage.getItem('user');
            
            if (storedUser) {
                const userData = JSON.parse(storedUser);
                
                // Check if email and password match
                if (userData.email === email && userData.password === password) {
                    // Create session data
                    const sessionData = {
                        isLoggedIn: true,
                        fullName: userData.fullName,
                        email: userData.email
                    };

                    // Store session data
                    localStorage.setItem('session', JSON.stringify(sessionData));

                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message show';
                    successMessage.textContent = 'Login successful! ';
                    loginForm.appendChild(successMessage);

                    // Redirect to dashboard after a short delay
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 1500);
                } else {
                    // Show error for invalid credentials
                    emailError.textContent = 'Invalid email or password';
                    emailError.classList.add('show');
                    passwordError.textContent = 'Invalid email or password';
                    passwordError.classList.add('show');
                }
            } else {
                // Show error if no user data found
                emailError.textContent = 'No account found with this email';
                emailError.classList.add('show');
            }
        }
    });
}); 