document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const session = localStorage.getItem('session');
    if (!session) {
        window.location.href = 'login.html';
        return;
    }

    const sessionData = JSON.parse(session);
    if (!sessionData.isLoggedIn) {
        window.location.href = 'login.html';
        return;
    }

    // Get all continue learning buttons
    const continueButtons = document.querySelectorAll('.course-actions .btn-primary');
    
    // Add click event listeners to continue learning buttons
    continueButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseCard = this.closest('.progress-card');
            const courseName = courseCard.querySelector('h3').textContent;
            
            // Store the selected course in session
            sessionData.currentCourse = courseName;
            localStorage.setItem('session', JSON.stringify(sessionData));
            
            // Redirect to the course page
            window.location.href = 'course.html';
        });
    });

    // Update progress bars with animation
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}); 