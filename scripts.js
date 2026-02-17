document.addEventListener('DOMContentLoaded', function() {
    // Booking Form Modal
    var modal = document.getElementById('bookingModal');
    if (modal) {
        // Show modal on page load
        modal.style.display = "block";
        // Close button
        var closeBtn = document.querySelector('.modal-content .close');
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
        // Hide modal when clicking outside of the modal content
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }
    // Mobile navigation toggle
    var hamburger = document.querySelector('.hamburger');
    var navMenu = document.querySelector('.nav-menu');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});
