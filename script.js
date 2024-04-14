const heroText = document.querySelector('.hero-text');

heroText.style.opacity = 0;

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        heroText.style.animationPlayState = 'running';
    }
});
