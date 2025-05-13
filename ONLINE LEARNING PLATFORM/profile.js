// DOM Elements
const profileImage = document.getElementById('profileImage');
const changeAvatarBtn = document.getElementById('changeAvatarBtn');
const avatarModal = document.getElementById('avatarModal');
const avatarInput = document.getElementById('avatarInput');
const uploadBtn = document.getElementById('uploadBtn');
const imagePreview = document.getElementById('imagePreview');
const saveAvatarBtn = document.getElementById('saveAvatarBtn');
const editProfileBtn = document.getElementById('editProfileBtn');
const editProfileModal = document.getElementById('editProfileModal');
const editProfileForm = document.getElementById('editProfileForm');
const changePasswordBtn = document.getElementById('changePasswordBtn');
const changePasswordModal = document.getElementById('changePasswordModal');
const changePasswordForm = document.getElementById('changePasswordForm');

// Close buttons for all modals
const closeButtons = document.querySelectorAll('.close');

// Load user data
function loadUserData() {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    document.getElementById('fullName').textContent = user.fullName || 'Not set';
    document.getElementById('email').textContent = user.email || 'Not set';
    document.getElementById('memberSince').textContent = new Date().toLocaleDateString();
    
    // Load profile image if exists
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
        profileImage.src = savedImage;
    }
}

// Modal handling
function openModal(modal) {
    modal.style.display = 'block';
}

function closeModal(modal) {
    modal.style.display = 'none';
}

// Close modal when clicking the close button or outside the modal
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target);
    }
});

// Avatar upload handling
uploadBtn.addEventListener('click', () => {
    avatarInput.click();
});

avatarInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);
            saveAvatarBtn.disabled = false;
        };
        reader.readAsDataURL(file);
    }
});

saveAvatarBtn.addEventListener('click', () => {
    const img = imagePreview.querySelector('img');
    if (img) {
        profileImage.src = img.src;
        localStorage.setItem('profileImage', img.src);
        closeModal(avatarModal);
        showMessage('Profile picture updated successfully', 'success');
    }
});

// Edit profile handling
editProfileBtn.addEventListener('click', () => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    document.getElementById('editFullName').value = user.fullName || '';
    document.getElementById('editEmail').value = user.email || '';
    openModal(editProfileModal);
});

editProfileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = {
        fullName: document.getElementById('editFullName').value,
        email: document.getElementById('editEmail').value
    };
    localStorage.setItem('user', JSON.stringify(user));
    loadUserData();
    closeModal(editProfileModal);
    showMessage('Profile updated successfully', 'success');
});

// Change password handling
changePasswordBtn.addEventListener('click', () => {
    openModal(changePasswordModal);
});

changePasswordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;

    if (newPassword !== confirmNewPassword) {
        showMessage('New passwords do not match', 'error');
        return;
    }

    if (!validatePassword(newPassword)) {
        showMessage('Password must be at least 8 characters long and contain uppercase, lowercase, and numbers', 'error');
        return;
    }

    // Here you would typically make an API call to verify current password
    // For demo purposes, we'll just show a success message
    showMessage('Password updated successfully', 'success');
    closeModal(changePasswordModal);
    changePasswordForm.reset();
});

// Utility functions
function showMessage(message, type = 'error') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    document.querySelector('.profile-container').insertBefore(messageDiv, document.querySelector('.profile-content'));
    setTimeout(() => messageDiv.remove(), 5000);
}

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
}

// Event listeners for buttons
changeAvatarBtn.addEventListener('click', () => openModal(avatarModal));

// Initialize
loadUserData(); 