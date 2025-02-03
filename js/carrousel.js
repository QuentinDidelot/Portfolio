document.addEventListener('DOMContentLoaded', () => {

    const projectList = document.getElementById('projectList');

    // Ajouter les événements pour les boutons "prev" et "next"
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateCarousel(projects); // Mettre à jour le carrousel avec la page précédente
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateCarousel(projects); // Mettre à jour le carrousel avec la page suivante
        }
    });

});

let itemsPerPage;
let totalPages;
let currentPage = 0;

// Fonction pour mettre à jour le nombre d'éléments par page
const container = document.querySelector('.carousel-container');
function updateItemsPerPage(filteredProjects) {
    if (filteredProjects.length === 0) {
        itemsPerPage = 0; // Aucun élément par page
        totalPages = 0;   // Pas de pages
        return;           // Arrêter la fonction
    }

    if (window.innerWidth >= 900) {
        itemsPerPage = 3; // Sur les grands écrans, afficher 3 projets par page
    } else {
        itemsPerPage = 1; // Sur les petits écrans, 1 projet par page
    }
    totalPages = Math.ceil(filteredProjects.length / itemsPerPage); // Calculer le nombre de pages
}


// Fonction pour afficher les indicateurs
function renderIndicators(filteredProjects) {
    const carouselIndicators = document.getElementById('carouselIndicators');
    carouselIndicators.innerHTML = ''; // Réinitialiser les indicateurs
    
    // Si aucun projet, aucun indicateur n'est affiché
    if (filteredProjects.length === 0 || totalPages === 0) {
        console.log('No indicators to render.');
        return; // Ne pas rendre d'indicateurs
    }
    
    // Si il y a des projets filtrés, créer les indicateurs
    for (let i = 0; i < totalPages; i++) {
        const indicator = document.createElement('span');
        indicator.classList.add('carousel-indicator');
        indicator.dataset.index = i;
    
        if (i === currentPage) {
            indicator.classList.add('active');
        }
    
        indicator.addEventListener('click', () => {
            currentPage = i;
            updateCarousel(filteredProjects); // Actualiser le carrousel avec la page sélectionnée
        });
    
        console.log(totalPages)
        carouselIndicators.appendChild(indicator);
    }
}



// Fonction pour mettre à jour le carrousel avec les projets filtrés ou non filtrés
function updateCarousel(filteredProjects = projects) {
    updateItemsPerPage(filteredProjects);
    
    // Si aucun projet à afficher, réinitialiser le carrousel et quitter
    if (filteredProjects.length === 0 || totalPages === 0) {
        console.log('No projects to display in the carousel.');
        container.style.transform = 'translateX(0px)'; // Réinitialiser la position
        renderIndicators([]); // Supprimer tous les indicateurs
        return;
    }
    
    // Largeur d'un seul "slide" de projet
    const slideWidth = projectList.offsetWidth;
    
    // Ajustement du container en fonction de la page actuelle
    container.style.transform = `translateX(${-currentPage * slideWidth}px)`; 
    
    console.log(`Carousel updated, currentPage: ${currentPage}, slideWidth: ${slideWidth}px, totalPages: ${totalPages}`);
    renderIndicators(filteredProjects); // Mettre à jour les indicateurs
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
