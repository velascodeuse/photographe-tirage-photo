const handleMobileMenu = () => {
    console.log('handleMobileMenu exécuté');
    const navMobileMenu = document.getElementById('navMobileMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');

    if (!navMobileMenu || !mobileMenu || !mobileMenuClose) {
        console.error("Un ou plusieurs éléments nécessaires ne sont pas trouvés.");
        return;
    }

    const openMenu = () => {
        console.log('menu ouvert');
        mobileMenu.classList.add('mobile-menu--open');
    };

    const closeMenu = () => {
        console.log('menu fermé');
        mobileMenu.classList.remove('mobile-menu--open');
    };

    navMobileMenu.addEventListener('click', (event) => {
        event.stopPropagation(); // Évite des conflits de clics
        openMenu();
    });

    mobileMenuClose.addEventListener('click', (event) => {
        event.stopPropagation();
        closeMenu();
    });
};

handleMobileMenu();


// Gestion des emails
// Initialise EmailJS avec la clé publique
emailjs.init('spWQc5FC8cCT1OLae');

// Ajoute un gestionnaire d'événements au formulaire
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche la soumission classique du formulaire

        // Envoie les données via EmailJS
        emailjs.sendForm('ton_service_id', 'ton_template_id', contactForm)
        .then(function(response) {
            console.log('Message envoyé avec succès', response);
            alert('Message envoyé avec succès !');
            contactForm.reset(); // Réinitialise le formulaire
        })
        .catch(function(error) {
            console.error('Erreur lors de l\'envoi : ', error);
            alert('Une erreur est survenue, merci de réessayer plus tard.');
        });
    
    });
}





// // Sélectionner les éléments nécessaires
// const portfolioItems = document.querySelectorAll('.portfolio__image-wrapper');
// const salonTableau = document.querySelector('.portfolio__salon-tableau');

// // Ajouter un événement au survol
// portfolioItems.forEach(item => {
//   item.addEventListener('mouseover', () => {
//     const tableauSrc = item.getAttribute('data-tableau'); // Récupère le chemin du tableau
//     salonTableau.src = tableauSrc; // Met à jour l'image affichée dans le salon
//     salonTableau.style.opacity = 1; // Rend visible le tableau
//     salonTableau.style.transform = 'scale(1)'; // Éventuel effet de zoom
//   });

//   // Réinitialisation lors du retrait de la souris
//   item.addEventListener('mouseout', () => {
//     salonTableau.style.opacity = 0; // Cache l'image du tableau
//     salonTableau.style.transform = 'scale(0.95)'; // Optionnel : effet de réduction
//   });
// });







// 1er essai

// const handleMobileMenu = () => {
//     console.log('handleMobileMenu exécuté');
//     const navMobileMenu = document.getElementById('navMobileMenu');
//     const mobileMenu = document.getElementById('mobileMenu');
//     const mobileMenuClose = document.getElementById('mobileMenuClose');

//     if (!navMobileMenu || !mobileMenu || !mobileMenuClose) {
//         console.error("Un ou plusieurs éléments nécessaires ne sont pas trouvés.");
//         return;
//     }

//     const openMenu = () =>{
//         console.log('menu ouvert');
//         mobileMenu.classList.add('mobile-menu--open')
//     };
//     const closeMenu = () => {
//         console.log('menu fermé')
//         mobileMenu.classList.remove('mobile-menu--open')
//     };

//     navMobileMenu.addEventListener('click',openMenu);
//     mobileMenuClose.addEventListener('click',closeMenu);
// }

// handleMobileMenu();