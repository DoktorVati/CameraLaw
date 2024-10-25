document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Thank you for your interest! A form will be available soon.');
});
// JavaScript to toggle dropdown menu on click
document.getElementById('practiceAreas').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'; // Toggle visibility
});

// Close the dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('#practiceAreas') && !event.target.matches('#dropdownMenu') && !event.target.closest('div.dropdown')) {
        const dropdown = document.getElementById('dropdownMenu');
        dropdown.style.display = 'none';
    }
};