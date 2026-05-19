// main.js
document.addEventListener("DOMContentLoaded", () => {
    // Highlight the active link in the navigation menu based on current URL
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('nav a');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });
});