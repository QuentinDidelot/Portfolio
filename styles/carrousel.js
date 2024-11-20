document.addEventListener('DOMContentLoaded', () => {
    let itemsPerPage;
    let totalPages;
    let currentPage = 0;

    const container = document.querySelector('.carousel-container');
    const projectList = document.getElementById('projectList');

    // Fonction pour mettre à jour le nombre d'éléments par page
    function updateItemsPerPage(filteredProjects) {
        if (window.innerWidth >= 900) {
            itemsPerPage = 3; // Sur les grands écrans, afficher 3 projets par page
        } else {
            itemsPerPage = 1; // Sur les petits écrans, 1 projet par page
        }
        totalPages = Math.ceil(filteredProjects.length / itemsPerPage); // Calculer le nombre de pages en fonction des projets filtrés
    }

    // Fonction pour afficher les indicateurs
    function renderIndicators(filteredProjects) {
        const carouselIndicators = document.getElementById('carouselIndicators');
        carouselIndicators.innerHTML = ''; // Réinitialiser les indicateurs

        updateItemsPerPage(filteredProjects); // Calculer le nombre d'indicateurs

        console.log('Total Pages:', totalPages); // Vérification du nombre de pages

        // Si totalPages est 0, il n'y a pas de projets à afficher
        if (totalPages === 0) return;

        for (let i = 0; i < totalPages; i++) {
            const indicator = document.createElement('span');
            indicator.classList.add('carousel-indicator');
            indicator.dataset.index = i;

            if (i === currentPage) {
                indicator.classList.add('active');
            }

            // Ajout de l'événement pour naviguer entre les pages du carrousel
            indicator.addEventListener('click', () => {
                console.log(`Indicator ${i} clicked`); // Vérification si le clic est bien détecté
                currentPage = i;
                updateCarousel(filteredProjects);
            });

            carouselIndicators.appendChild(indicator);
        }
    }

    // Fonction pour mettre à jour le carrousel avec les projets filtrés ou non filtrés
    function updateCarousel(filteredProjects = projects) {
        updateItemsPerPage(filteredProjects);

        // Largeur d'un seul "slide" de projet
        const slideWidth = projectList.offsetWidth;

        // Ajustement du container en fonction de la page actuelle
        container.style.transform = `translateX(${-currentPage * slideWidth}px)`; // Translate basé sur la largeur des slides

        console.log(`Carousel updated, currentPage: ${currentPage}, slideWidth: ${slideWidth}px, totalPages: ${totalPages}`); // Log du déplacement
        renderIndicators(filteredProjects);
    }

    // Initialisation du carrousel au chargement de la page
    function initCarousel() {
        const allProjects = projects; // Tous les projets par défaut
        updateCarousel(allProjects); // Passer tous les projets lors de l'initialisation
    }

    // Initialisation du carrousel
    initCarousel();

    // Mettre à jour le carrousel lors du redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        const filteredProjects = filterProjects(); // Garder les filtres appliqués lors du redimensionnement
        updateCarousel(filteredProjects);
    });
});
