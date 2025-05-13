// Utility functions
const showMessage = (message, type = 'error') => {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    document.querySelector('.auth-box').insertBefore(messageDiv, document.querySelector('.auth-form'));
    setTimeout(() => messageDiv.remove(), 5000);
};

const validatePassword = (password) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
};

// Login functionality
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;

        try {
            // Here you would typically make an API call to your backend
            // For demo purposes, we'll simulate a successful login
            localStorage.setItem('user', JSON.stringify({ email }));
            if (remember) {
                localStorage.setItem('rememberMe', 'true');
            }
            window.location.href = 'dashboard.html';
        } catch (error) {
            showMessage('Invalid email or password');
        }
    });
}

// Signup functionality
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            showMessage('Passwords do not match');
            return;
        }

        if (!validatePassword(password)) {
            showMessage('Password must be at least 8 characters long and contain uppercase, lowercase, and numbers');
            return;
        }

        try {
            // Here you would typically make an API call to your backend
            // For demo purposes, we'll simulate a successful signup
            window.location.href = 'email-verification.html';
        } catch (error) {
            showMessage('Error creating account');
        }
    });
}

// Forgot password functionality
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;

        try {
            // Here you would typically make an API call to your backend
            // For demo purposes, we'll simulate sending a reset email
            showMessage('Password reset link sent to your email', 'success');
        } catch (error) {
            showMessage('Error sending reset link');
        }
    });
}

// Reset password functionality
const resetPasswordForm = document.getElementById('resetPasswordForm');
if (resetPasswordForm) {
    resetPasswordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            showMessage('Passwords do not match');
            return;
        }

        if (!validatePassword(password)) {
            showMessage('Password must be at least 8 characters long and contain uppercase, lowercase, and numbers');
            return;
        }

        try {
            // Here you would typically make an API call to your backend
            // For demo purposes, we'll simulate a successful password reset
            showMessage('Password reset successful', 'success');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        } catch (error) {
            showMessage('Error resetting password');
        }
    });
}

// Email verification functionality
const verifyEmail = document.getElementById('verifyEmail');
const verificationStatus = document.getElementById('verificationStatus');

if (verifyEmail) {
    verifyEmail.addEventListener('click', async () => {
        try {
            // Simulate email verification
            verificationStatus.textContent = 'Email verified successfully!';
            verificationStatus.className = 'verification-status success';
            
            // Store verification status
            localStorage.setItem('emailVerified', 'true');
            
            // Redirect to login after 2 seconds
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        } catch (error) {
            verificationStatus.textContent = 'Error verifying email. Please try again.';
            verificationStatus.className = 'verification-status error';
        }
    });
}

const resendVerification = document.getElementById('resendVerification');
if (resendVerification) {
    resendVerification.addEventListener('click', async () => {
        try {
            // Simulate resending verification email
            verificationStatus.textContent = 'Verification email resent successfully!';
            verificationStatus.className = 'verification-status success';
        } catch (error) {
            verificationStatus.textContent = 'Error resending verification email. Please try again.';
            verificationStatus.className = 'verification-status error';
        }
    });
}

// Check if user is already logged in
const checkAuth = () => {
    const user = localStorage.getItem('user');
    const emailVerified = localStorage.getItem('emailVerified');
    
    if (user && emailVerified && window.location.pathname.includes('login.html')) {
        window.location.href = 'dashboard.html';
    }
};

// Run auth check on page load
checkAuth(); 