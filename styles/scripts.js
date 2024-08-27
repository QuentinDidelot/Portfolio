// Smooth scroll pour la navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




// Bouton Retour en Haut
document.addEventListener("DOMContentLoaded", function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // Afficher ou masquer le bouton en fonction du défilement
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    // Fonction pour faire défiler vers le haut
    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const headerNav = document.querySelector(".main-nav");
    const headerHeight = document.querySelector("header").offsetHeight;
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > headerHeight) {
            headerNav.classList.add("fixed-nav");
        } else {
            headerNav.classList.remove("fixed-nav");
        }
    });
});

