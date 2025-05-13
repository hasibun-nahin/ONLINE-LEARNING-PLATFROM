// DOM Elements
const welcomeMessage = document.querySelector('.welcome-section h1');
const currentDateElement = document.getElementById('currentDate');
const activityList = document.getElementById('activityList');
const analyticsCards = document.querySelectorAll('.analytics-card');
const actionCards = document.querySelectorAll('.action-card');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');
const userNameElement = document.getElementById('userName');
const profileImage = document.getElementById('profileImage');
const logoutButton = document.querySelector('.logout-btn');

// Initialize Dashboard
function initializeDashboard() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    // Set welcome message
    userNameElement.textContent = user.fullName || user.name;
    
    // Set current date
    const currentDate = new Date();
    currentDateElement.textContent = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Load profile image if available
    const savedProfileImage = localStorage.getItem('profileImage');
    if (savedProfileImage) {
        profileImage.src = savedProfileImage;
    }

    // Load recent activity
    loadRecentActivity();
    
    // Load analytics data
    loadAnalytics();
}

// Load Recent Activity
function loadRecentActivity() {
    const activities = [
        { type: 'course', text: 'Completed Module 3 in Web Development', time: '2 hours ago' },
        { type: 'certificate', text: 'Earned JavaScript Fundamentals Certificate', time: '1 day ago' },
        { type: 'course', text: 'Started UI/UX Design Course', time: '2 days ago' }
    ];

    activityList.innerHTML = activities.map(activity => `
        <li class="activity-item">
            <i class="fas fa-${activity.type === 'course' ? 'book' : 'certificate'}"></i>
            <div class="activity-content">
                <p>${activity.text}</p>
                <span class="activity-time">${activity.time}</span>
            </div>
        </li>
    `).join('');
}

// Load Analytics Data
function loadAnalytics() {
    // Sample analytics data
    const analyticsData = {
        courses: { value: 3, progress: 60 },
        certificates: { value: 2, progress: 40 },
        hours: { value: 45, progress: 75 }
    };

    analyticsCards.forEach(card => {
        const type = card.dataset.type;
        const data = analyticsData[type];
        if (data) {
            card.querySelector('.analytics-value').textContent = data.value;
            card.querySelector('.progress').style.width = `${data.progress}%`;
        }
    });
}

// Event Listeners
actionCards.forEach(card => {
    card.addEventListener('click', () => {
        const action = card.dataset.action;
        switch(action) {
            case 'join-course':
                window.location.href = 'courses.html';
                break;
            case 'continue-learning':
                // Handle continue learning
                break;
            case 'view-progress':
                window.location.href = 'progresstracking.html';
                break;
            case 'earn-certificates':
                // Handle earn certificates
                break;
        }
    });
});

analyticsCards.forEach(card => {
    card.addEventListener('click', () => {
        const type = card.dataset.type;
        // Handle analytics card click
    });
});

// Modal handling
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

// Logout functionality
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('user');
    localStorage.removeItem('profileImage');
    window.location.href = 'login.html';
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeDashboard); 