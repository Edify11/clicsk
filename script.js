function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');

    // Optional: Prevent body scroll when menu is open
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
}

// Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });
});
