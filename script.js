document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Define valid credentials for admin, staff, and students
    const validCredentials = {
        admin: {
            'admin': 'siva@123',
            'admin1': 'siva@123'
        },
        staff: {
            'staff': 'kascps@123',
            'staff1': 'kascps@123'
        },
        student: {
            '221it056': 'kasc@123',
            'student': 'kasc@123'
        }
    };

    // Check if role and username are valid
    const roleCredentials = validCredentials[role];
    if (roleCredentials && roleCredentials[username] === password) {
        // Store role and username in localStorage
        localStorage.setItem('role', role);
        localStorage.setItem('username', username);

        // Redirect based on role or specific student username
        if (role === 'admin') {
            window.location.href = 'check.html';
        } else if (role === 'staff') {
            window.location.href = 'check.html';
        } else if (role === 'student') {
            if (username === '221it056') {
                window.location.href = 'https://kascpsindex.onrender.com/';
            } else {
                window.location.href = 'https://kascpsindex.onrender.com/';
            }
        }
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});
