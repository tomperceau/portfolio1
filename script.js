document.addEventListener('DOMContentLoaded', function() {

    const body = document.body;

    // --- 1. EFFET "AURORE" QUI SUIT LA SOURIS ---
    body.addEventListener('mousemove', e => {
        document.documentElement.style.setProperty('--x', e.clientX + 'px');
        document.documentElement.style.setProperty('--y', e.clientY + 'px');
    });


    // --- 2. ANIMATION D'APPARITION AU SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(el => observer.observe(el));


    // --- 3. NOUVEAU : CURSEUR PERSONNALISÉ ---
    const cursorDot = document.querySelector('.custom-cursor-dot');
    const cursorOutline = document.querySelector('.custom-cursor-outline');
    
    // Variable pour gérer l'effet de "clic" (scale)
    let currentScale = 1;

    // Mettre à jour la position des deux curseurs
    window.addEventListener('mousemove', function(e) {
        // Position de la souris
        const posX = e.clientX;
        const posY = e.clientY;

        // Le point central suit précisément la souris
        if (cursorDot) {
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
        }

        // Le cercle extérieur suit avec un léger délai (grâce au 'transition' en CSS)
        // On combine le translate (position) et le scale (clic)
        if (cursorOutline) {
            cursorOutline.style.transform = `translate(${posX}px, ${posY}px) scale(${currentScale})`;
        }
    });

    // Effet au clic (mousedown)
    document.addEventListener('mousedown', () => {
        currentScale = 0.9; // Rétrécit le cercle
        body.classList.add('cursor-mousedown'); // Augmente l'opacité (via CSS)
    });

    // Effet au relâchement du clic (mouseup)
    document.addEventListener('mouseup', () => {
        currentScale = 1; // Revient à la taille normale
        body.classList.remove('cursor-mousedown');
    });

    // Effet au SURVOL des éléments interactifs
    // On sélectionne tous les liens, boutons, et éléments cliquables
    const interactiveElements = document.querySelectorAll(
        'a, button, .nav-link, .project-card-link, .logo, .contact-link'
    );

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            body.classList.add('cursor-hover'); // Ajoute la classe pour agrandir le cercle
        });
        el.addEventListener('mouseleave', () => {
            body.classList.remove('cursor-hover'); // Retire la classe
        });
    });

    // Cacher le curseur s'il sort de la fenêtre
    document.addEventListener('mouseleave', () => {
        if (cursorDot) cursorDot.style.opacity = '0';
        if (cursorOutline) cursorOutline.style.opacity = '0';
    });
    // Le remontrer s'il revient
    document.addEventListener('mouseenter', () => {
        if (cursorDot) cursorDot.style.opacity = '1';
        if (cursorOutline) cursorOutline.style.opacity = '0.5'; // Opacité par défaut
    });

});