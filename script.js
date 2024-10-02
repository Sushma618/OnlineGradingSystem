// script.js

// Student Login Form Submission
document.getElementById('student-login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simulate login process (replace with real validation)
    const email = document.getElementById('student-email').value;
    const password = document.getElementById('student-password').value;

    if (email === 'student@example.com' && password === 'password') {
        // Redirect to student dashboard
        window.location.href = 'student-dashboard.html';
    } else {
        alert('Invalid login credentials. Please try again.');
    }
});

// // Teacher Login Form Submission
// document.getElementById('teacher-login-form')?.addEventListener('submit', function(e) {
//     e.preventDefault();

//     // Simulate login process (replace with real validation)
//     const email = document.getElementById('teacher-email').value;
//     const password = document.getElementById('teacher-password').value;

//     if (email === 'teacher@example.com' && password === 'password') {
//         // Redirect to teacher dashboard
//         window.location.href = 'teacher-dashboard.html';
//     } else {
//         alert('Invalid login credentials. Please try again.');
//     }
// });

// Submit Assignment Form Submission
document.getElementById('submit-assignment-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simulate assignment submission (replace with real logic)
    const assignmentId = document.getElementById('assignment-id').value;
    const file = document.getElementById('student-file').files[0];

    if (assignmentId && file) {
        // Redirect to student dashboard after submission
        window.location.href = 'studentdashboard.html';
    } else {
        alert('Please fill all fields and upload your assignment.');
    }
});

// Grades & Feedback Form Submission
document.getElementById('grades-feedback-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simulate grade submission (replace with real logic)
    const grade = document.getElementById('grade').value;
    const feedback = document.getElementById('feedback').value;

    if (grade && feedback) {
        // Redirect to teacher dashboard after submission
        window.location.href = 'teacherdashboard.html';
    } else {
        alert('Please fill out all fields.');
    }
});

// Signup Form Submission
document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Validate inputs
    if (!name || !email || !password || !role) {
        alert('Please fill in all fields.');
        return;
    }

    // Mock saving the user data (for real implementation, send data to server via API)
    const newUser = {
        name: name,
        email: email,
        password: password,
        role: role
    };

    console.log('User signed up:', newUser); // Log the user data for testing

    // Hide the form and show success message
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('signup-success-message').style.display = 'block';

    // Optionally, you could set a timeout to redirect after a few seconds
    // Uncomment the following lines to automatically redirect after a delay
    /*
    setTimeout(function() {
        window.location.href = 'login.html';  // Adjust the file path as needed
    }, 5000); // Redirects after 5 seconds
    */
});


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("teacher-login-form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();  // Prevent the form from submitting the traditional way
        const email = document.getElementById("teacher-email").value;
        const password = document.getElementById("teacher-password").value;

        // Basic validation (you can add more validation or authentication logic here)
        if (email && password) {
            // Redirect to the teacher dashboard page
            window.location.href = "teacherdashboard.html";
        } else {
            alert("Please enter both email and password.");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();  // Prevent the form from submitting the traditional way
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;

        // Basic validation to check that all fields are filled
        if (name && email && password && role) {
            if (role === "student") {
                window.location.href = "studentdashboard.html";
            } else if (role === "teacher") {
                window.location.href = "teacherdashboard.html";
            }
        } else {
            alert("Please fill out all fields.");
        }
    });
});

