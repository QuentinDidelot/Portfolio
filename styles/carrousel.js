// carousel.js

document.addEventListener('DOMContentLoaded', () => {
    const itemsPerPage = 3;
    const totalPages = Math.ceil(projects.length / itemsPerPage);
    let currentPage = 0;

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
        const container = document.querySelector('.carousel-container');
        container.style.transform = `translateX(${-currentPage * 100}%)`;
        renderIndicators();
    }

    // Initialisation du carrousel
    updateCarousel();

});
