document.addEventListener('DOMContentLoaded', function() {

    // --- 1. EFFET "AURORE" QUI SUIT LA SOURIS ---
    // Ce script met à jour les variables CSS '--x' et '--y' 
    // avec la position de la souris, ce qui déplace le dégradé en fond.
    document.body.addEventListener('mousemove', e => {
        // e.clientX et e.clientY nous donnent la position de la souris
        document.documentElement.style.setProperty('--x', e.clientX + 'px');
        document.documentElement.style.setProperty('--y', e.clientY + 'px');
    });


    // --- 2. ANIMATION D'APPARITION AU SCROLL ---
    // Cette partie va ajouter une classe 'visible' aux éléments
    // qui ont la classe 'reveal' lorsqu'ils deviennent visibles à l'écran.
    
    // On crée un "observateur" qui regarde ce qui entre à l'écran
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Si l'élément est en train d'entrer dans le champ de vision...
            if (entry.isIntersecting) {
                // ... on lui ajoute la classe 'visible'
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // L'animation se déclenche quand 10% de l'élément est visible
    });

    // On cherche tous les éléments qu'on veut animer (ceux avec la classe .reveal)
    const elementsToReveal = document.querySelectorAll('.reveal');
    // On demande à l'observateur de surveiller chacun de ces éléments
    elementsToReveal.forEach(el => observer.observe(el));

});