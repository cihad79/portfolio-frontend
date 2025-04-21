document.addEventListener("DOMContentLoaded", function () {
    displayProjects();
});

const projects = [
    {
        "title": "Portfolio Website",
        "description": "A personal portfolio website built using Spring Boot and Bootstrap.",
        "technologies": "HTML, CSS, JavaScript, Spring Boot",
        "githubLink": "https://github.com/cihad79/portfolioCihadOz"
    },
    {
        "title": "fruit recognizer",
        "description": "This repository contains the code and configurations for deploying a machine learning model. It includes scripts for training, predictions, and file handling, along with deployment and package management configurations for seamless integration.",
        "technologies": "Python, keras, HTML, Javascript",
        "githubLink": "https://github.com/ErdalErdem/MachineLearningExamDeploy"
    },
    {
        "title": "jenkins shared library",
        "description": "This repository contains a shared library for Jenkins projects, providing reusable functions and configurations to streamline CI/CD workflows.",
        "technologies": "Groovy",
        "githubLink": "https://github.com/cihad79/jenkins-shared-library"
    },
    {
        "title": "dx-intro",
        "description": "This repository is dedicated to learning GitHub commands and exploring its capabilities for version control and collaboration.",
        "technologies": "Git",
        "githubLink": "https://github.com/cihad79/dx-intro"
    },
    {
        "title": "wishlist-miniproject",
        "description": "This project is a wishlist application that integrates with a database, communicates with a backend system, and is deployed on a server for seamless accessibility.",
        "technologies": "Java, HTML, Thymeleaf",
        "githubLink": "https://github.com/navidmirzad/wishlist-miniproject"
    },
    {
        "title": "Alpha Solutions",
        "description": "This project is a 'Calculation Tool' designed to provide a clear overview of work processes, optimizing project management and efficiency.",
        "technologies": "HTML, CSS, Java, JavaScript, Thymeleaf",
        "githubLink": "https://github.com/danieljappe/AlphaSolutionsEksamensProjekt"
    },
    {
        "title": "TimeToDrive Booking",
        "description": "TimeToDrive is a management system designed to streamline operations for driving schools, optimizing scheduling, student tracking, and administration.",
        "technologies": "HTML, CSS, JavaScript, React, Node.js, MongoDB",
        "githubLink": "https://github.com/ErdalErdem/TimeToDriveBooking"
    },
    {
        "title": "Quotopia-Backend",
        "description": "Quotopia-Backend is a RESTful API that handles data management, authentication, and seamless communication with the frontend application.",
        "technologies": "Java, Spring Boot",
        "githubLink": "https://github.com/MasihSaidAshna/Quotopia-backend"
    },
    {
        "title": "Quotopia-Frontend",
        "description": "Quotopia-Frontend is an interactive web application that offers users a smooth and responsive experience for managing quotes efficiently.",
        "technologies": "HTML, CSS, JavaScript",
        "githubLink": "https://github.com/MasihSaidAshna/Quotopia-frontend"
    },
    {
        "title": "KinoXPBackend",
        "description": "This repository contains a REST API for handling cinema reservations, ticket sales, and scheduling showings, built with Spring Boot (Java 17) and powered by MySQL on Azure.",
        "technologies": "Java, Spring Boot",
        "githubLink": "https://github.com/danieljappe/KinoXPBackend"
    },
    {
        "title": "KinoXPFrontend",
        "description": "KinoXPFrontend is a web application for managing cinema reservations, ticket sales, and scheduling showings, offering a responsive and user-friendly experience through integration with the KinoXPBackend REST API.",
        "technologies": "HTML, CSS, JavaScript",
        "githubLink": "https://github.com/danieljappe/KinoXPFrontend"
    },
    {
        "title": "Superheltev_four",
        "description": "A small Java project that allows CRUD operations (Create, Read, Update, Delete) with superheroes.",
        "technologies": "Java",
        "githubLink": "https://github.com/cihad79/Superheltev_four"
    },
    {
        "title": "Eksame3Programmering",
        "description": "This is my 3rd semester exam project, where I develop a homepage for hotel booking pages, enabling users to browse and reserve accommodations.",
        "technologies": "Java, Spring Boot, HTML, CSS",
        "githubLink": "https://github.com/orgs/Eksame3Programmering/repositories"
    }
];

function displayProjects() {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "";

    if (projects.length === 0) {
        projectList.innerHTML = "<p class='text-muted'>No projects available.</p>";
        return;
    }

    projects.forEach((project, index) => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-card");

        projectItem.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-1">${project.title}</h5>
                <button class="btn btn-sm btn-outline-info" onclick="toggleProjectDetails(${index}, this)">
                    More Info
                </button>
            </div>
            <div id="details-${index}" class="ml-3 mt-2" style="display: none;">
                <p><strong>Description:</strong> ${project.description}</p>
                <p><strong>Technologies:</strong> ${project.technologies}</p>
                <p><a href="${project.githubLink}" target="_blank">View on GitHub</a></p>
            </div>
        `;

        projectList.appendChild(projectItem);
    });
}

function toggleProjectDetails(id, btn) {
    const detailsDiv = document.getElementById(`details-${id}`);
    if (detailsDiv.style.display === "none") {
        detailsDiv.style.display = "block";
        btn.textContent = "Hide Info";
    } else {
        detailsDiv.style.display = "none";
        btn.textContent = "More Info";
    }
}
