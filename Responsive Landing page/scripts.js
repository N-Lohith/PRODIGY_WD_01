window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#2980b9';
    } else {
        navbar.style.backgroundColor = '#3498db';
    }
});
