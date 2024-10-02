document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Validación del formulario de contacto
    const form = document.querySelector('.contacto__formulario');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });

        if (isValid) {
            alert('Formulario enviado con éxito!');
            form.reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });

    // Animación de habilidades al hacer scroll
    const habilidades = document.querySelectorAll('.habilidades__item');
    const animateOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        habilidades.forEach(habilidad => {
            const habilidadTop = habilidad.getBoundingClientRect().top;

            if(habilidadTop < triggerBottom) {
                habilidad.classList.add('animate');
            } else {
                habilidad.classList.remove('animate');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
});