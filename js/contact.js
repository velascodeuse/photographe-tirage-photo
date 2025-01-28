
    // Initialise EmailJS avec la clé publique
    emailjs.init('spWQc5FC8cCT1OLae');

    // Gestion des emails
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Empêche la soumission classique du formulaire

            // Envoie les données via EmailJS
            emailjs.sendForm('service_fzjp98h', 'mathilde-photographie', contactForm)
                .then(function (response) {
                    console.log('Votre message a bien été envoyé!', response);
                    alert('Message envoyé avec succès !');
                    contactForm.reset(); // Réinitialise le formulaire
                })
                .catch(function (error) {
                    console.error('Erreur lors de l\'envoi : ', error);
                    alert('Une erreur est survenue, merci de réessayer plus tard.');
                });
        });
    }
