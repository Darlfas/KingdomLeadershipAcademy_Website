document.addEventListener('DOMContentLoaded', function() {
    // Get references to the menu toggle button and the navigation menu
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // Add a click event listener to the menu toggle button
    menuToggle.addEventListener('click', function() {
        // Toggle the 'active' class on the main navigation
        mainNav.classList.toggle('active');
    });
});