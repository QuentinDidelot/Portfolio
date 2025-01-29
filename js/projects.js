
const projects = [
    {
        title: "Booki",
        link: "projets/booki.html",
        image: "./img/projets_carrousel/projet_1.png",
        skills: ["HTML", "CSS", "Intégration"]
    },
    {
        title: "The ArtBox",
        link: "projets/the_artbox.html",
        image: "./img/projets_carrousel/projet_2.png",
        skills: ["HTML", "CSS", "PHP", "SQL"]
    },
    {
        title: "Blog d'Emilie Forteroche",
        link: "projets/blog_forteroche.html",
        image: "./img/projets_carrousel/projet_3.png",
        skills: ["HTML", "CSS", "PHP", "SQL"]
    },
    {
        title: "Tom Troc",
        link: "projets/tomtroc.html",
        image: "./img/projets_carrousel/projet_4.png",
        skills: ["HTML", "CSS", "PHP", "Intégration", "SQL" ]
    },
    {
        title: "TaskLinker",
        link: "projets/tasklinker.html",
        image: "./img/projets_carrousel/projet_5.png",
        skills: ["HTML", "CSS", "PHP", "Symfony", "Doctrine", "Twig"]
    },
    {
        title: "Projet à venir",
        link: "",
        image: "./img/projets_carrousel/projet_à_venir.jpg",
        skills: []
    },


];

// Variable pour stocker les filtres sélectionnés
let selectedFilters = [];


// Fonction pour filtrer les projets selon les compétences sélectionnées
function filterProjects() {
    const filteredProjects = projects.filter(project => 
        selectedFilters.every(filter => project.skills.includes(filter))
    );
    return filteredProjects;
}

// Fonction pour rendre les projets filtrés
function renderFilteredProjects() {
    const projectList = document.getElementById('projectList');
    projectList.innerHTML = ''; 

    const filteredProjects = filterProjects(); // Obtenir les projets filtrés

    console.log('Filtered Projects:', filteredProjects); // Vérifiez les projets filtrés

    if (filteredProjects.length === 0) {
        projectList.innerHTML = '<p class="no_project">Aucun projet ne correspond aux filtres sélectionnés.</p>';
        currentPage = 0;
        updateCarousel([]); // Passer un tableau vide à updateCarousel
        return;
    }

    filteredProjects.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');

        const projectLink = document.createElement('a');
        projectLink.href = project.link;

        const projectImg = document.createElement('img');
        projectImg.src = project.image;
        projectImg.alt = project.title;

        projectLink.appendChild(projectImg);
        projectItem.appendChild(projectLink);

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        projectItem.appendChild(projectTitle);

        const skillsContainer = document.createElement('div');
        skillsContainer.classList.add('skills-container');

        project.skills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.classList.add('skill-item');
            skillItem.textContent = skill;
            skillsContainer.appendChild(skillItem);
        });

        projectItem.appendChild(skillsContainer);
        projectList.appendChild(projectItem);
    });

    updateCarousel(filteredProjects); // Mettre à jour le carrousel avec les projets filtrés
}

// Écouteur d'événement pour les boutons de filtre
const filterButtons = document.querySelectorAll('.filter-btn:not(.reset-btn)');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        if (selectedFilters.includes(filter)) {
            selectedFilters = selectedFilters.filter(f => f !== filter); // Retirer le filtre s'il est déjà sélectionné
            button.classList.remove('active'); // Retirer la classe active
        } else {
            selectedFilters.push(filter); // Ajouter le filtre
            button.classList.add('active'); // Ajouter la classe active
        }

        renderFilteredProjects(); // Rafraîchir les projets filtrés
    });
});

// Réinitialisation des filtres
document.getElementById('reset-filters').addEventListener('click', () => {
    selectedFilters = []; // Réinitialiser les filtres
    filterButtons.forEach(button => button.classList.remove('active')); // Enlever la classe active de tous les boutons
    renderFilteredProjects(); // Re-rendre tous les projets
});



// Rendu initial des projets
renderFilteredProjects();
