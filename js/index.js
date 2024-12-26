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