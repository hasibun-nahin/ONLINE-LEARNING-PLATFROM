// Course data
const courses = [
    {
        title: 'Python for Data Science',
        description: 'Master Python programming and data analysis techniques for data science applications.',
        image: 'assets/images/courses/python-ds.jpg',
        duration: '20 hours',
        level: 'Intermediate'
    },
    {
        title: 'Web Development Bootcamp',
        description: 'Learn modern web development with HTML, CSS, JavaScript, and popular frameworks.',
        image: 'assets/images/courses/web-dev.jpg',
        duration: '30 hours',
        level: 'Beginner'
    },
    {
        title: 'Machine Learning Fundamentals',
        description: 'Introduction to machine learning algorithms and their practical applications.',
        image: 'assets/images/courses/ml.jpg',
        duration: '25 hours',
        level: 'Advanced'
    }
];

// Initialize the page
function initializeCourses() {
    const courseGallery = document.querySelector('.course-gallery');
    if (!courseGallery) return;

    // Create course cards
    courses.forEach(course => {
        const courseCard = createCourseCard(course);
        courseGallery.appendChild(courseCard);
    });

    // Set up event listeners
    setupEventListeners();
}

// Create course card
function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    
    card.innerHTML = `
        <div class="course-image">
            <img src="${course.image}" alt="${course.title}">
        </div>
        <div class="course-content">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <div class="course-meta">
                <span><i class="fas fa-clock"></i> ${course.duration}</span>
                <span><i class="fas fa-signal"></i> ${course.level}</span>
            </div>
        </div>
    `;

    return card;
}

// Set up event listeners
function setupEventListeners() {
    // Category filter click handler
    document.querySelectorAll('.category-filter').forEach(filter => {
        filter.addEventListener('click', handleCategoryFilter);
    });
}

// Handle category filter
function handleCategoryFilter(e) {
    const category = e.target.dataset.category;
    if (!category) return;

    // Remove active class from all filters
    document.querySelectorAll('.category-filter').forEach(filter => {
        filter.classList.remove('active');
    });

    // Add active class to clicked filter
    e.target.classList.add('active');

    // Filter courses
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        const courseLevel = card.querySelector('.course-meta span:last-child').textContent;
        if (category === 'all' || courseLevel.toLowerCase().includes(category.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCourses); 