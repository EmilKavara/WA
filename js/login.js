function checkLogin() {
    var enteredUsername = document.getElementById('username').value;
    var enteredPassword = document.getElementById('password').value;
    if (enteredUsername === 'user' && enteredPassword === 'pass') {
        window.location.href = 'index.html';
    } else {
        alert('Incorrect username or password. Please try again.');
    }
}
