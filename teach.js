document.getElementById('teacher-login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Simulate login process (replace with real validation)
    const email = document.getElementById('teacher-email').value;
    const password = document.getElementById('teacher-password').value;

    if (email === 'teacher@example.com' && password === 'password') {
        // Redirect to teacher dashboard
        window.location.href = 'teacherdashboard.html';
    } else {
        alert('Invalid login credentials. Please try again.');
    }
});
