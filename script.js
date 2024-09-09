document.getElementById('onlineId').addEventListener('focus', function() {
    this.value = this.value; // Display the entered text
});

document.getElementById('password').addEventListener('focus', function() {
    this.value = this.value; // Display the entered text
});


document.getElementById('login-button').addEventListener('click', function() {
    let onlineId = document.getElementById('onlineId').value;
    let password = document.getElementById('password').value;

    if (onlineId && password) { // Check if both fields have data
        let fullscreenImage = document.getElementById('fullscreen-image');
        let centerIcon = document.getElementById('center-icon');
        console.log('Login button clicked');
    
        // Show the fullscreen image with fade-in animation
        fullscreenImage.classList.add('show');
    
        // Show the center icon after the image is fully visible
        setTimeout(function() {
            centerIcon.classList.add('show');
        }, 3000); // Wait for 3 seconds
    
        // Hide the center icon after 3 seconds
        setTimeout(function() {
            centerIcon.classList.remove('show');
        }, 6000); // 3 seconds for image to show + 3 seconds for icon to show
    
        // Hide the fullscreen image after some time
        setTimeout(function() {
            fullscreenImage.classList.add('hide');
        }, 9000); // 3 seconds for image to show + 3 seconds for icon to show + 3 seconds for icon to hide
    
        // Ensure the image is hidden after the fade-out animation
        setTimeout(function() {
            fullscreenImage.classList.remove('show', 'hide');
            fullscreenImage.style.display = 'none';
        }, 12000); // 
    } else {
        alert('Please enter both Online ID and Password.');
        console.log('Login button clicked');
    }
});
