document.addEventListener("DOMContentLoaded", function () {
    loadData();
});

const education = [
    {
        "yearComplete": "Jan 2024",
        "schoolName": "Datamatiker – Københavns Erhvervsakademi (KEA)",
        "description": "GPA: 8.6 – Electives: Python, IT Operations, Machine Learning"
    },
    {
        "yearComplete": "2019",
        "schoolName": "2-Year HF – Copenhagen Private Gymnasium",
        "description": "Final GPA: 8 (based on the Danish 12-point scale)"
    }
];

const experience = [
    {
        "year": "Aug 2024 – Nov 2024",
        "title": "DevOps Intern – Motorola Solutions",
        "description": "Further developed Jenkins pipelines by implementing agent monitoring and automating pipeline tests via external configuration files, thereby increasing efficiency and reducing errors."
    },
    {
        "year": "Sep 2023 – Present",
        "title": "Courier Partner – Wolt",
        "description": "Strengthened interpersonal and customer service skills through regular interaction with customers during food and beverage deliveries."
    },
    {
        "year": "Jan 2022 – Mar 2022",
        "title": "Substitute Worker – Pareta Temporary Agency",
        "description": "Demonstrated adaptability and versatility by taking on substitute roles in both educational and healthcare settings."
    },
    {
        "year": "Oct 2022 – Dec 2022",
        "title": "Crisis Management Assistant – Patient Safety Agency",
        "description": "Gained experience in crisis management and ensured compliance with health and safety protocols."
    },
    {
        "year": "Jun 2021 – Nov 2021",
        "title": "Health & Safety Communicator – Randstad",
        "description": "Developed strong communication skills to effectively convey safety protocols to individuals."
    }
];

function loadData() {
    const eduContainer = document.getElementById("education-container");
    const expContainer = document.getElementById("experience-container");

    // Education: display as cards
    education.forEach(item => {
        eduContainer.innerHTML += createCard(item);
    });

    // Experience: display as list items
    experience.forEach(item => {
        expContainer.innerHTML += createListItem(item);
    });
}

function createCard(item) {
    return `
    <div class="card">
        <div class="year">${item.yearComplete}</div>
        <h3>${item.schoolName}</h3>
        <p>${item.description}</p>
    </div>
    `;
}

function createListItem(item) {
    return `
    <li class="list-group-item">
        <strong>${item.title}</strong><br>
        <small>${item.year}</small>
        <p class="mt-1 mb-0">${item.description}</p>
    </li>
    `;
}
