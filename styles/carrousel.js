document.addEventListener('DOMContentLoaded', () => {
    let itemsPerPage;
    let totalPages;
    let currentPage = 0;

    const container = document.querySelector('.carousel-container');
    const projectList = document.getElementById('projectList');
    
    function updateItemsPerPage() {
        if (window.innerWidth >= 900) {
            itemsPerPage = 3; // Sur les écrans plus grands, afficher 3 projets par page
        } else {
            itemsPerPage = 1; // Sur les écrans plus petits, afficher 1 projet par page
        }
        totalPages = Math.ceil(projects.length / itemsPerPage);
    }

    function renderIndicators() {
        const carouselIndicators = document.getElementById('carouselIndicators');
        carouselIndicators.innerHTML = ''; // Réinitialiser les points

        for (let i = 0; i < totalPages; i++) {
            const indicator = document.createElement('span');
            indicator.classList.add('carousel-indicator');
            indicator.dataset.index = i;

            if (i === currentPage) {
                indicator.classList.add('active');
            }

            indicator.addEventListener('click', () => {
                currentPage = i;
                updateCarousel();
            });

            carouselIndicators.appendChild(indicator);
        }
    }

    function updateCarousel() {
        container.style.transform = `translateX(${-currentPage * 100}%)`;
        renderIndicators();
    }

    function initCarousel() {
        updateItemsPerPage();
        currentPage = 0;
        updateCarousel();
    }

    // Initialisation du carrousel
    initCarousel();

    // Mettre à jour le carrousel lors du redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        initCarousel();
    });
});
