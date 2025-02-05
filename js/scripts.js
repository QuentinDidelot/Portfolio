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


// Fonction qui fixe la barre de navigation dès que le header est dépassé
document.addEventListener("DOMContentLoaded", function() {
    const headerNav = document.querySelector(".main-nav");
    const headerHeight = document.querySelector("header").offsetHeight;
    const offset = 200; 

    window.addEventListener("scroll", function() {
        if (window.scrollY > (headerHeight - offset)) {
            headerNav.classList.add("fixed-nav");
        } else {
            headerNav.classList.remove("fixed-nav");
        }
    });
});


// Fonction qui colorise les sections dans la barre de navigation dès qu'on entre dans ladite section
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section'); 
    const navLinks = document.querySelectorAll('.fixed-nav ul li a');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.fixed-nav ul li a[href="#${id}"]`);

            if (entry.isIntersecting) {
                // Quand la section est visible
                navLinks.forEach(link => link.classList.remove('active')); 
                navLink.classList.add('active'); 
            } else if (!entry.isIntersecting && navLink.classList.contains('active')) {
                // Quand la section n'est plus visible
                navLink.classList.remove('active');
            }
        });
    }, {
        threshold: 0.65 
    });

    sections.forEach(section => {
        observer.observe(section); 
    });
});

function openModal(imgElement) {
    document.getElementById('modalImage').src = imgElement.src;
    document.getElementById('imageModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}


/*
* Menu burger
*/
document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const secondNav = document.querySelector(".second-nav");

    burgerMenu.addEventListener("click", function () {
        burgerMenu.classList.toggle("active");
        secondNav.classList.toggle("active");
    });

    // Fermer le menu lorsqu'on clique sur un lien
    document.querySelectorAll(".second-nav a").forEach(link => {
        link.addEventListener("click", () => {
            burgerMenu.classList.remove("active");
            secondNav.classList.remove("active");
        });
    });
});
