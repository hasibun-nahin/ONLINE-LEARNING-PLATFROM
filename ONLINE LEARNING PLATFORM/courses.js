// Sample course data
const courses = [
    {
        id: 1,
        title: "Web Development Fundamentals",
        description: "Learn HTML, CSS, and JavaScript basics to build modern websites.",
        category: "programming",
        level: "beginner",
        duration: "8 hours",
        image: "https://source.unsplash.com/random/400x300?web-development",
        previewVideo: "https://example.com/preview1.mp4",
        syllabus: [
            "HTML5 Structure and Elements",
            "CSS3 Styling and Layout",
            "JavaScript Basics",
            "Responsive Design"
        ]
    },
    {
        id: 2,
        title: "UI/UX Design Principles",
        description: "Master the fundamentals of user interface and experience design.",
        category: "design",
        level: "intermediate",
        duration: "12 hours",
        image: "https://source.unsplash.com/random/400x300?design",
        previewVideo: "https://example.com/preview2.mp4",
        syllabus: [
            "Design Principles",
            "User Research",
            "Wireframing",
            "Prototyping"
        ]
    },
    {
        id: 3,
        title: "Digital Marketing Strategy",
        description: "Develop effective digital marketing campaigns and strategies.",
        category: "marketing",
        level: "advanced",
        duration: "15 hours",
        image: "https://source.unsplash.com/random/400x300?marketing",
        previewVideo: "https://example.com/preview3.mp4",
        syllabus: [
            "Market Analysis",
            "Content Strategy",
            "Social Media Marketing",
            "Analytics and Optimization"
        ]
    },
    {
        id: 4,
        title: "Python for Data Science",
        description: "Learn Python programming and data analysis for scientific computing.",
        category: "programming",
        level: "intermediate",
        duration: "20 hours",
        image: "https://source.unsplash.com/random/400x300?python",
        previewVideo: "https://example.com/preview4.mp4",
        syllabus: [
            "Python Basics",
            "Data Structures",
            "NumPy and Pandas",
            "Data Visualization"
        ]
    },
    {
        id: 5,
        title: "Business Analytics Fundamentals",
        description: "Master the basics of business analytics and data-driven decision making.",
        category: "business",
        level: "beginner",
        duration: "6 hours",
        image: "https://source.unsplash.com/random/400x300?business",
        previewVideo: "https://example.com/preview5.mp4",
        syllabus: [
            "Data Analysis Basics",
            "Statistical Methods",
            "Business Metrics",
            "Reporting Tools"
        ]
    },
    {
        id: 6,
        title: "Advanced JavaScript Patterns",
        description: "Deep dive into advanced JavaScript concepts and design patterns.",
        category: "programming",
        level: "advanced",
        duration: "18 hours",
        image: "https://source.unsplash.com/random/400x300?javascript",
        previewVideo: "https://example.com/preview6.mp4",
        syllabus: [
            "Design Patterns",
            "Advanced Functions",
            "Async Programming",
            "Performance Optimization"
        ]
    },
    {
        id: 7,
        title: "Graphic Design Essentials",
        description: "Learn the fundamentals of graphic design and visual communication.",
        category: "design",
        level: "beginner",
        duration: "10 hours",
        image: "https://source.unsplash.com/random/400x300?graphic-design",
        previewVideo: "https://example.com/preview7.mp4",
        syllabus: [
            "Color Theory",
            "Typography",
            "Layout Design",
            "Visual Hierarchy"
        ]
    },
    {
        id: 8,
        title: "Social Media Marketing",
        description: "Create and manage effective social media marketing campaigns.",
        category: "marketing",
        level: "intermediate",
        duration: "8 hours",
        image: "https://source.unsplash.com/random/400x300?social-media",
        previewVideo: "https://example.com/preview8.mp4",
        syllabus: [
            "Platform Strategy",
            "Content Creation",
            "Community Management",
            "Analytics and ROI"
        ]
    },
    {
        id: 9,
        title: "Project Management Professional",
        description: "Comprehensive guide to project management methodologies and tools.",
        category: "business",
        level: "advanced",
        duration: "25 hours",
        image: "https://source.unsplash.com/random/400x300?project-management",
        previewVideo: "https://example.com/preview9.mp4",
        syllabus: [
            "Project Planning",
            "Risk Management",
            "Team Leadership",
            "Agile Methodologies"
        ]
    },
    {
        id: 10,
        title: "Mobile App Development",
        description: "Build cross-platform mobile applications using modern frameworks.",
        category: "programming",
        level: "intermediate",
        duration: "15 hours",
        image: "https://source.unsplash.com/random/400x300?mobile-app",
        previewVideo: "https://example.com/preview10.mp4",
        syllabus: [
            "React Native Basics",
            "UI Components",
            "State Management",
            "Native Features"
        ]
    },
    {
        id: 11,
        title: "Content Marketing Strategy",
        description: "Develop and execute effective content marketing strategies.",
        category: "marketing",
        level: "beginner",
        duration: "7 hours",
        image: "https://source.unsplash.com/random/400x300?content-marketing",
        previewVideo: "https://example.com/preview11.mp4",
        syllabus: [
            "Content Planning",
            "SEO Basics",
            "Content Creation",
            "Distribution Channels"
        ]
    },
    {
        id: 12,
        title: "3D Animation Fundamentals",
        description: "Learn the basics of 3D modeling and animation.",
        category: "design",
        level: "intermediate",
        duration: "16 hours",
        image: "https://source.unsplash.com/random/400x300?3d-animation",
        previewVideo: "https://example.com/preview12.mp4",
        syllabus: [
            "3D Modeling",
            "Texturing",
            "Animation Basics",
            "Rendering"
        ]
    }
];

// DOM Elements
const courseGrid = document.querySelector('.course-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const difficultyCheckboxes = document.querySelectorAll('.filter-checkbox input[value^="beginner"], .filter-checkbox input[value^="intermediate"], .filter-checkbox input[value^="advanced"]');
const durationCheckboxes = document.querySelectorAll('.filter-checkbox input[value^="short"], .filter-checkbox input[value^="medium"], .filter-checkbox input[value^="long"]');
const searchInput = document.querySelector('.search-bar input');
const modal = document.getElementById('previewModal');
const closeModal = document.querySelector('.close-modal');

// Current filters
let currentFilters = {
    category: 'all',
    difficulty: [],
    duration: [],
    search: ''
};

// Initialize the course gallery
function initializeCourses() {
    renderCourses(courses);
    setupEventListeners();
}

// Render courses based on current filters
function renderCourses(coursesToRender) {
    courseGrid.innerHTML = '';
    
    coursesToRender.forEach(course => {
        const courseCard = createCourseCard(course);
        courseGrid.appendChild(courseCard);
    });
}

// Create a course card element
function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    
    card.innerHTML = `
        <img src="${course.image}" alt="${course.title}" class="course-image">
        <div class="course-content">
            <h3 class="course-title">${course.title}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-meta">
                <span class="course-duration">${course.duration}</span>
                <span class="course-level level-${course.level}">${course.level}</span>
            </div>
            <div class="course-actions">
                <button class="preview-btn" data-course-id="${course.id}">Preview</button>
                <button class="enroll-btn">Enroll Now</button>
            </div>
        </div>
    `;
    
    return card;
}

// Filter courses based on current filters
function filterCourses() {
    return courses.filter(course => {
        // Category filter
        if (currentFilters.category !== 'all' && course.category !== currentFilters.category) {
            return false;
        }
        
        // Difficulty filter
        if (currentFilters.difficulty.length > 0 && !currentFilters.difficulty.includes(course.level)) {
            return false;
        }
        
        // Duration filter
        const courseDuration = parseInt(course.duration);
        if (currentFilters.duration.length > 0) {
            const durationMatch = currentFilters.duration.some(duration => {
                if (duration === 'short') return courseDuration < 5;
                if (duration === 'medium') return courseDuration >= 5 && courseDuration <= 10;
                if (duration === 'long') return courseDuration > 10;
                return false;
            });
            if (!durationMatch) return false;
        }
        
        // Search filter
        if (currentFilters.search) {
            const searchTerm = currentFilters.search.toLowerCase();
            return course.title.toLowerCase().includes(searchTerm) || 
                   course.description.toLowerCase().includes(searchTerm);
        }
        
        return true;
    });
}

// Show course preview modal
function showPreviewModal(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!course) return;
    
    const modalTitle = modal.querySelector('.preview-title');
    const modalDescription = modal.querySelector('.preview-description');
    const modalDuration = modal.querySelector('.preview-duration');
    const modalLevel = modal.querySelector('.preview-level');
    const modalVideo = modal.querySelector('video source');
    
    modalTitle.textContent = course.title;
    modalDescription.textContent = course.description;
    modalDuration.textContent = `Duration: ${course.duration}`;
    modalLevel.textContent = `Level: ${course.level}`;
    modalVideo.src = course.previewVideo;
    
    modal.style.display = 'block';
}

// Setup event listeners
function setupEventListeners() {
    // Category filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilters.category = button.dataset.category;
            renderCourses(filterCourses());
        });
    });
    
    // Difficulty checkboxes
    difficultyCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            currentFilters.difficulty = Array.from(difficultyCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
            renderCourses(filterCourses());
        });
    });
    
    // Duration checkboxes
    durationCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            currentFilters.duration = Array.from(durationCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
            renderCourses(filterCourses());
        });
    });
    
    // Search input
    searchInput.addEventListener('input', (e) => {
        currentFilters.search = e.target.value;
        renderCourses(filterCourses());
    });
    
    // Preview buttons
    courseGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('preview-btn')) {
            const courseId = parseInt(e.target.dataset.courseId);
            showPreviewModal(courseId);
        }
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}
courseGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('preview-btn')) {
        const courseId = parseInt(e.target.dataset.courseId);
        showPreviewModal(courseId);
    }

    if (e.target.classList.contains('enroll-btn')) {
        window.location.href = 'enrollment.html';
    }
});


// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCourses); 