// Define sample course data (replace with actual data)
const courses = [
    { id: 1, title: 'HTML Fundamentals', description: 'Learn the basics of HTML.', lessons: 10, completed: 5 },
    { id: 2, title: 'CSS Essentials', description: 'Explore essential CSS concepts.', lessons: 8, completed: 3 },
    { id: 3, title: 'JavaScript Basics', description: 'Get started with JavaScript programming.', lessons: 12, completed: 8 }
];

// Function to display the course listing
function displayCourses() {
    const courseListingSection = document.getElementById('course-listing');

    // Clear existing content
    courseListingSection.innerHTML = '';

    // Loop through courses and create course cards
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        // Set background image based on course title
        let backgroundImageUrl = '';
        if (course.title === 'HTML Fundamentals') {
            backgroundImageUrl = 'Images/htmlFundamentl.webp';
        } else if (course.title === 'CSS Essentials') {
            backgroundImageUrl = 'Images/cssEssential.jpg';
        } else if (course.title === 'JavaScript Basics') {
            backgroundImageUrl = 'Images/javascriptBasic.png';
        }
        courseCard.style.backgroundImage = `url(${backgroundImageUrl})`;

        // Add event listener to display course details
        courseCard.addEventListener('click', () => displayCourseDetails(course));
        courseListingSection.appendChild(courseCard);
    });
}

// Function to display course details
function displayCourseDetails(course) {
    const courseDetailsSection = document.getElementById('course-details');
    const progressTrackingSection = document.getElementById('progress-tracking');

    // Define font styles for course details
    const titleStyle = 'font-size: 1.5rem; font-weight: bold; color: #333; margin-bottom: 0.5rem;';
    const descriptionStyle = 'font-size: 1.1rem; color: #666; margin-bottom: 1rem;';
    const progressStyle = 'font-size: 1rem; color: #777;';

    // Display course details
    courseDetailsSection.innerHTML = `
        <h2 style="${titleStyle}">${course.title}</h2>
        <p style="${descriptionStyle}">${course.description}</p>
        <p style="${progressStyle}">Lessons Completed: ${course.completed} out of ${course.lessons}</p>
    `;

    // Show progress tracking section
    progressTrackingSection.style.display = 'block';

    // Calculate progress and update progress bar
    const lessonsCompleted = course.completed;
    const lessonsTotal = course.lessons;
    const progressBar = document.createElement('progress');
    progressBar.value = lessonsCompleted;
    progressBar.max = lessonsTotal;

    // Add progress text
    const progressText = document.createElement('p');
    progressText.id = 'progress-text';
    progressText.textContent = `${Math.round((lessonsCompleted / lessonsTotal) * 100)}% Complete`;

    // Update progress tracking section
    progressTrackingSection.innerHTML = '';
    progressTrackingSection.appendChild(progressBar);
    progressTrackingSection.appendChild(progressText);
}

// Function to handle course upload form submission
document.getElementById('course-upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const title = document.getElementById('course-title').value;
    const description = document.getElementById('course-description').value;
    const lessons = parseInt(document.getElementById('course-lessons').value);

    // Add the new course to the courses array
    const newCourse = {
        id: courses.length + 1, // Generate a unique ID for the new course
        title: title,
        description: description,
        lessons: lessons,
        completed: 0 // Initialize completed lessons to 0
    };
    courses.push(newCourse);

    // Display the newly added course
    displayCourse(newCourse);

    // Clear the form fields
    document.getElementById('course-title').value = '';
    document.getElementById('course-description').value = '';
    document.getElementById('course-lessons').value = '';
});

// Function to display a single course
function displayCourse(course) {
    const courseListingSection = document.getElementById('course-listing');

    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');

    // Set background image based on course title
    let backgroundImageUrl = '';
    if (course.title === 'HTML Fundamentals') {
        backgroundImageUrl = 'Images/htmlFundamentl.webp';
    } else if (course.title === 'CSS Essentials') {
        backgroundImageUrl = 'Images/cssEssential.jpg';
    } else if (course.title === 'JavaScript Basics') {
        backgroundImageUrl = 'Images/javascriptBasic.png';
    }
    courseCard.style.backgroundImage = `url(${backgroundImageUrl})`;

    // Populate course details in the course card
    courseCard.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p>Progress: ${course.completed} out of ${course.lessons} lessons completed</p>
    `;
    courseCard.addEventListener('click', () => displayCourseDetails(course));
    courseListingSection.appendChild(courseCard);

    // Apply background color to newly added course card
    courseCard.classList.add('new-course');
}

// Event listener for login form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulate authentication
        if (username === 'admin' && password === 'password') {
            // Redirect to dashboard or display success message
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
        } else {
            loginMessage.textContent = 'Invalid username or password';
        }
    });
});

// Initialize the course listing
displayCourses();
