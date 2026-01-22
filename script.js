// 1. Cambio de estilo del Navbar al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Animación de entrada para la Galería (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'all 0.8s ease-out';
            // Dejar de observar una vez animado
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar el observador a cada elemento de la galería
document.querySelectorAll('.gallery-item').forEach(item => {
    observer.observe(item);
});

// 3. Smooth scroll para los enlaces (opcional, ya lo hace CSS pero esto añade soporte extra)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});