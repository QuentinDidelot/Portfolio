

const projects = [
    {
        title: "Booki",
        link: "projets.html",
        image: "img/projets/projet_1.png",
        skills: ["HTML", "CSS", "Intégration"]
    },
    {
        title: "The ArtBox",
        link: "projets.html",
        image: "img/projets/projet_2.png",
        skills: ["HTML", "CSS", "PHP", "SQL"]
    },
    {
        title: "Blog d'Emilie Forteroche",
        link: "projets.html",
        image: "img/projets/projet_3.png",
        skills: ["HTML", "CSS", "PHP", "SQL"]
    },
    {
        title: "Tom Troc",
        link: "projets.html",
        image: "img/projets/projet_4.png",
        skills: ["HTML", "CSS", "PHP", "Intégration", "SQL" ]
    },
    {
        title: "TaskLinker",
        link: "projets.html",
        image: "img/projets/projet_5.png",
        skills: ["HTML", "CSS", "PHP", "Symfony", "Doctrine", "Twig"]
    },
    {
        title: "Projet à venir",
        link: "",
        image: "img/projets/projet_à_venir.jpg",
        skills: []
    },


];


function renderProjects() {
    const projectList = document.getElementById('projectList');
    projectList.innerHTML = ''; 

    projects.forEach((project, index) => {
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
}

renderProjects();

function toggleSkills(element) {
    const skillList = element.nextElementSibling;
    if (skillList.style.display === "block") {
        skillList.style.display = "none";
    } else {
        skillList.style.display = "block";
    }
}