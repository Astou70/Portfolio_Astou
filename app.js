
// ====================================
// PARTIE 1 : DONNÉES DU PORTFOLIO
// ====================================

const portfolioData = {
    // 1. PROJETS
    projects: [
        {
            id: 1,
            title: "Qualite de ",
            category: "analyse",
            image: "photo/projet1_analyse3_air.png",
            description: "Analyse spatiale des zones à risque d'inondation à Dakar à partir de MNT et d'images satellites.",
            longDescription: "Dans le cadre du cours Analyse 3, ce projet consiste en une cartographie des zones exposées aux risques naturels (inondations, érosion) dans la région de Dakar. Les données ont été traitées sous QGIS à partir de modèles numériques de terrain (MNT) et d'images satellites multitemporelles. Une analyse multicritère a permis de hiérarchiser les zones vulnérables et de produire des cartes thématiques à destination des décideurs.",
            tech: ["QGIS", "Analyse spatiale", "MNT", "Télédétection"],
            link: "https://github.com/Astou70/Mon_Portfolio/raw/main/rapports/analyse3.pdf",
            github: "https://github.com/Astou70/Mon_Portfolio/raw/main/rapports/analyse3.pdf",
            date: "2025",
            client: "Cours Analyse 3 – UIDT"
        },
        {
            id: 2,
            title: "Occupation du sol – Région de Thiès",
            category: "analyse",
            image: "photo/imagaa4.jpeg",
            description: "Classification d'images Landsat pour cartographier l'évolution de l'occupation du sol à Thiès entre 2010 et 2024.",
            longDescription: "Ce projet du cours Analyse 4 porte sur la dynamique de l'occupation du sol dans la région de Thiès (Sénégal). La classification supervisée d'images Landsat 8 a permis d'identifier plusieurs classes : zones urbaines, agricoles, forêts et plans d'eau. Une comparaison diachronique (2010–2024) révèle l'extension rapide de l'urbanisation et le recul des surfaces cultivables.",
            tech: ["ArcGIS", "Landsat 8", "Classification supervisée", "SIG"],
            link: "#",
            github: "#",
            date: "2025",
            client: "Cours Analyse 4 – UIDT"
        },
       
        {
            id: 3,
            title: "Analyse du trafic routier – Mbour 1 & Nietti Gad",
            category: "sig",
            image: "photo/projet4_trafic_routier.png",
            description: "Comptage et analyse des flux de trafic aux heures de pointe sur deux ronds-points de Thiès.",
            longDescription: "Étude du trafic routier réalisée en binôme aux carrefours Mbour 1 et Nietti Gad à Thiès. Le protocole inclut des comptages manuels aux heures de pointe (matin, midi, soir) sur une semaine complète. Les données ont été saisies sur Excel, analysées statistiquement et cartographiées avec QGIS pour produire un rapport de synthèse remis à l'enseignant.",
            tech: ["Excel", "QGIS", "Cartographie", "Analyse statistique"],
            link: "https://github.com/Astou70/Mon_Portfolio/raw/main/rapports/Rapport_trafic_routier.pdf",
            github: "https://github.com/Astou70/Mon_Portfolio/raw/main/rapports/Rapport_trafic_routier.pdf",
            date: "2025",
            client: "Cours Méthode de collecte – UIDT"
        },
        {
            id: 4,
            title: "Portfolio Web – Géomatique",
            category: "sig",
            image: "photo/projet5_portfolio_web.png",
            description: "Conception et développement d'un portfolio personnel en HTML/CSS/JavaScript pour valoriser mes travaux en géomatique.",
            longDescription: "Ce portfolio a été entièrement conçu et développé de zéro en HTML5, CSS3 et JavaScript vanilla. Il intègre un mode sombre/clair, un design responsive, des animations CSS, un système de filtre de projets dynamique et un formulaire de contact. Ce projet illustre ma capacité à allier compétences techniques et esthétique visuelle.",
            tech: ["HTML5", "CSS3", "JavaScript", "Design responsive"],
            link: "https://astou70.github.io/Portfolio_Astou/",
            github: "https://github.com/Astou70/Portfolio_Astou",
            date: "2025",
            client: "Projet personnel"
        }
    ],

    // 2. COMPÉTENCES
    skills: {
        sig: [
            { name: "QGIS", percent: 80 },
            { name: "ArcGIS", percent: 65 },
            { name: "Cartographie thématique", percent: 80 },
            { name: "Télédétection", percent: 65 },
            { name: "GPS & collecte terrain", percent: 75 },
            { name: "Bases de données spatiales", percent: 60 }
        ],
        dev: [
            { name: "Python", percent: 65 },
            { name: "HTML / CSS", percent: 80 },
            { name: "JavaScript", percent: 70 },
            { name: "SQL", percent: 60 }
        ],
        data: [
            { name: "Analyse des données", percent: 70 },
            { name: "RStudio / R", percent: 50 },
            { name: "Excel (tableaux croisés)", percent: 75 },
            { name: "PowerPoint / Présentation", percent: 70 }
        ]
    },

    // 3. LOGICIELS MAÎTRISÉS
    software: [
        { name: "QGIS", icon: "fa-solid fa-map" },
        { name: "ArcGIS", icon: "fa-solid fa-globe" },
        { name: "RStudio", icon: "fa-solid fa-chart-line" },
        { name: "Wamp", icon: "fa-solid fa-server" },
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "Excel", icon: "fa-solid fa-table" },
        { name: "ODK Collect", icon: "fa-solid fa-mobile-alt" },
        { name: "VS Code", icon: "fa-solid fa-code" }
    ],

    // 4. EXPÉRIENCE ACADÉMIQUE
    experiences: [
        {
            title: " Cartographie thématique – Analyse spatiale",
            company: "UIDT – Cours de Cartographie",
            location: "Thiès, Sénégal",
            period: "Semestre 2 – 2025",
            description: "Réalisation de cartes thématiques complexes sous QGIS à partir de données ANSD et OpenStreetMap. Mise en page cartographique professionnelle avec légendes, échelles et habillages.",
            achievements: [
                "3 cartes thématiques complètes produites (choroplèthes, symboles proportionnels, densités)",
                "Utilisation de données officielles ANSD et OpenStreetMap",
                "Maîtrise du module de mise en page cartographique QGIS",
                "Rapport de synthèse rédigé en autonomie"
            ]
        },
        {
            title: " Méthode de collecte – Comptage du trafic routier",
            company: "UIDT – Cours Méthode de collecte",
            location: "Mbour 1 & Nietti Gad, Thiès",
            period: "2025",
            description: "Protocole complet de collecte et d'analyse des flux de circulation aux heures de pointe sur deux ronds-points stratégiques de la ville de Thiès.",
            achievements: [
                "Conception du protocole de comptage (créneaux horaires, catégories de véhicules)",
                "Comptage manuel sur 3 plages horaires pendant une semaine",
                "Traitement statistique des données avec Excel (tableaux croisés, graphiques)",
                "Production d'un rapport cartographique et analytique complet"
            ]
        },
        {
            title: "Projet Analyse 3 – Cartographie des risques",
            company: "UIDT – Département Géomatique",
            location: "Thiès, Sénégal",
            period: "Semestre 1 – 2025",
            description: "Analyse multicritère des zones à risques naturels à Dakar. Exploitation de MNT et d'images satellites pour identifier et hiérarchiser les zones vulnérables.",
            achievements: [
                "Traitement de MNT et calcul de pentes sous QGIS",
                "Analyse multicritère (AHP) pour la hiérarchisation des risques",
                "Production de cartes de vulnérabilité destinées aux décideurs",
                "Présentation orale des résultats devant la promotion"
            ]
        },
        {
            title: "Projet Analyse 4 – Occupation du sol",
            company: "UIDT – Département Géomatique",
            location: "Thiès, Sénégal",
            period: "Semestre 2 – 2025",
            description: "Classification supervisée d'images Landsat 8 pour analyser l'évolution de l'occupation du sol dans la région de Thiès sur une période de 14 ans.",
            achievements: [
                "Téléchargement et prétraitement d'images Landsat 8",
                "Classification supervisée sous ArcGIS (5 classes d'occupation)",
                "Analyse diachronique 2010–2024 : quantification des changements",
                "Cartographie de synthèse et rapport de 15 pages"
            ]
        }
    ],

    // 5. FORMATION
    formations: [
        {
            degree: "Baccalauréat Scientifique – Série S2",
            institution: "Lycée de Medina Fall",
            location: "Thiés, Sénégal",
            period: "2022 – 2023",
            description: "Baccalauréat général série scientifique, avec spécialisation en sciences de la vie, de la Terre et mathématiques.",
            mention: "Assez bien"
        },
        {
            degree: "Licence 1 en Géomatique",
            institution: "Université Cheikh Anta Diop (UCAD)",
            location: "Dakar, Sénégal",
            period: "2023 – 2024",
            description: "Première année de Licence en Géomatique. Fondamentaux en cartographie, Programmation et initiation aux SIG.",
            mention: "Assez bien"
        },
        {
            degree: "Licence 2 en Géomatique (en cours)",
            institution: "Université Iba Der Thiam de Thiès (UIDT)",
            location: "Thiès, Sénégal",
            period: "2024 – 2025",
            description: "Deuxième année de Licence. Approfondissement en SIG, télédétection, méthodes de collecte, analyse spatiale et développement d'applications géographiques. Réalisation de projets appliqués en cartographie thématique et traitement d'images satellites.",
            mention: "En cours"
        }
    ]
};

// ====================================
// PARTIE 2 : FONCTIONS
// ====================================

// ------------------------------
// FONCTION : Afficher les projets
// ------------------------------
function displayProjects(filter = 'all') {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = '';

    const filteredProjects = filter === 'all'
        ? portfolioData.projects
        : portfolioData.projects.filter(p => p.category === filter);

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const techTags = project.tech.map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        projectCard.innerHTML = `
            <div class="project-img">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.link}" target="_blank" title="Voir le projet"><i class="fas fa-eye"></i></a>
                        <a href="${project.github}" target="_blank" title="Code source"><i class="fab fa-github"></i></a>
                        <a href="#" onclick="showProjectDetails(${project.id}); return false;" title="Détails"><i class="fas fa-info-circle"></i></a>
                    </div>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${techTags}
                </div>
            </div>
        `;

        container.appendChild(projectCard);
    });
}

// ------------------------------
// FONCTION : Afficher les compétences
// ------------------------------
function displaySkills() {
    const sigContainer = document.getElementById('sig-skills');
    if (sigContainer) {
        sigContainer.innerHTML = portfolioData.skills.sig.map(skill => `
            <div class="skill-item">
                <div class="skill-info">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-percent">${skill.percent}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" data-percent="${skill.percent}" style="width: 0%;"></div>
                </div>
            </div>
        `).join('');
    }

    const devContainer = document.getElementById('dev-skills');
    if (devContainer) {
        devContainer.innerHTML = portfolioData.skills.dev.map(skill => `
            <div class="skill-item">
                <div class="skill-info">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-percent">${skill.percent}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" data-percent="${skill.percent}" style="width: 0%;"></div>
                </div>
            </div>
        `).join('');
    }

    const dataContainer = document.getElementById('data-skills');
    if (dataContainer) {
        dataContainer.innerHTML = portfolioData.skills.data.map(skill => `
            <div class="skill-item">
                <div class="skill-info">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-percent">${skill.percent}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" data-percent="${skill.percent}" style="width: 0%;"></div>
                </div>
            </div>
        `).join('');
    }

    const softwareContainer = document.getElementById('software-skills');
    if (softwareContainer) {
        softwareContainer.innerHTML = portfolioData.software.map(soft => `
            <div class="software-item">
                <i class="${soft.icon}"></i>
                <span>${soft.name}</span>
            </div>
        `).join('');
    }
}

// ------------------------------
// FONCTION : Afficher l'expérience
// ------------------------------
function displayExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = portfolioData.experiences.map(exp => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${exp.period}</span>
                <h3>${exp.title}</h3>
                <h4>${exp.company} • ${exp.location}</h4>
                <p>${exp.description}</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                    ${exp.achievements.map(ach => `<li style="margin-bottom: 0.3rem; color: #666;">✓ ${ach}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// ------------------------------
// FONCTION : Afficher la formation
// ------------------------------
function displayFormation() {
    const container = document.getElementById('formation-container');
    if (!container) return;

    container.innerHTML = portfolioData.formations.map(formation => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${formation.period}</span>
                <h3>${formation.degree}</h3>
                <h4>${formation.institution} • ${formation.location}</h4>
                <p>${formation.description}</p>
                ${formation.mention ? `<p style="margin-top: 0.5rem;"><strong>Mention :</strong> ${formation.mention}</p>` : ''}
            </div>
        </div>
    `).join('');
}

// ------------------------------
// FONCTION : Animer les barres de progression
// ------------------------------
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach((bar, index) => {
        const percent = bar.getAttribute('data-percent');
        if (percent) {
            setTimeout(() => {
                bar.style.width = percent + '%';
            }, index * 100);
        }
    });
}

// ------------------------------
// FONCTION : Formulaire de contact
// ------------------------------
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const firstName = document.getElementById('firstName')?.value.trim();
        const lastName  = document.getElementById('lastName')?.value.trim();
        const email     = document.getElementById('email')?.value.trim();
        const sujet     = document.getElementById('sujet')?.value.trim();
        const message   = document.getElementById('message')?.value.trim();

        const confirmationMsg = document.getElementById('confirmation');

        if (!firstName || !lastName || !email || !sujet || !message) {
            confirmationMsg.textContent = '❌ Tous les champs sont obligatoires !';
            confirmationMsg.className = 'confirmation-message error';
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            confirmationMsg.textContent = '❌ Adresse email invalide !';
            confirmationMsg.className = 'confirmation-message error';
            return;
        }

        confirmationMsg.textContent = '✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.';
        confirmationMsg.className = 'confirmation-message success';
        form.reset();

        setTimeout(() => {
            confirmationMsg.textContent = '';
            confirmationMsg.className = 'confirmation-message';
        }, 4000);
    });
}

// ------------------------------
// FONCTION : Texte tapé animé
// ------------------------------
function initTypedText() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;

    const texts = [
        'Étudiante en Géomatique',
        'Passionnée de SIG & Cartographie',
        'Analyste spatiale en formation',
        'Future cartographe professionnelle'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typedElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
}

// ------------------------------
// FONCTION : Menu mobile
// ------------------------------
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu   = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// ------------------------------
// FONCTION : Bouton retour en haut
// ------------------------------
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('show', window.scrollY > 500);
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ------------------------------
// FONCTION : Navigation active
// ------------------------------
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks  = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ------------------------------
// FONCTION : Filtres de projets
// ------------------------------
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayProjects(btn.getAttribute('data-filter'));
        });
    });
}

// ------------------------------
// FONCTION : Animations au scroll
// ------------------------------
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInUp');
                if (entry.target.id === 'competences') {
                    animateProgressBars();
                }
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));
}

// ------------------------------
// FONCTION : Détails d'un projet (modale)
// ------------------------------
function showProjectDetails(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    const existing = document.querySelector('.modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = `
        position: fixed; top:0; left:0; width:100%; height:100%;
        background: rgba(0,0,0,0.85); display:flex; justify-content:center;
        align-items:center; z-index:2000; padding: 1rem;
    `;

    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 15px; max-width: 560px;
                    width:100%; position: relative; color: #333; max-height:90vh; overflow-y:auto;">
            <button onclick="this.closest('.modal').remove()"
                    style="position:absolute; top:10px; right:15px; background:none;
                           border:none; font-size:1.8rem; cursor:pointer; color:#2c3e50;">&times;</button>
            <h2 style="color: #2c3e50; margin-bottom:1rem; padding-right:2rem;">${project.title}</h2>
            <p style="color:#666; line-height:1.7; margin-bottom:1.2rem;">${project.longDescription || project.description}</p>
            <h3 style="color:#2c3e50; margin-bottom:0.5rem;">Technologies utilisées</h3>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.2rem;">
                ${project.tech.map(t => `<span style="background:#f0f0f0; padding:0.3rem 1rem; border-radius:50px; font-size:0.85rem;">${t}</span>`).join('')}
            </div>
            <p><strong>Commanditaire :</strong> ${project.client || 'Université'}</p>
            <p><strong>Année :</strong> ${project.date}</p>
            ${project.link !== '#' ? `<a href="${project.link}" target="_blank"
                style="display:inline-block; margin-top:1rem; padding:0.6rem 1.5rem;
                background:#ffd700; color:#2c3e50; border-radius:50px; text-decoration:none;
                font-weight:600;">Voir le rapport ↗</a>` : ''}
        </div>
    `;

    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
    document.body.appendChild(modal);
}

// ====================================
// PARTIE 3 : INITIALISATION
// ====================================

document.addEventListener('DOMContentLoaded', function () {
    console.log("Portfolio Astou Gueye – Géomatique chargé ✓");

    displayProjects();
    displaySkills();
    displayExperience();
    displayFormation();

    initTypedText();
    initMobileMenu();
    initBackToTop();
    setActiveNavLink();
    initProjectFilters();
    initScrollAnimations();
    initContactForm();
    initThemeToggle();

    // Animer les barres si la section compétences est déjà visible
    setTimeout(() => {
        const skillsSection = document.getElementById('competences');
        if (skillsSection) {
            const rect = skillsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight) animateProgressBars();
        }
    }, 500);
});

// ====================================
// BOUTON MODE SOMBRE / CLAIR
// ====================================
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    const icon = toggleBtn.querySelector('i');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
    }

    toggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        if (icon) {
            const isDark = document.body.classList.contains('dark-mode');
            icon.classList.toggle('fa-moon', !isDark);
            icon.classList.toggle('fa-sun', isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }
    });
}
// ====================================
// PARTIE 1 : DONNÉES DU PORTFOLIO
// ====================================

const portfolioData = {
    // 1. PROJETS
    projects: [
        {
            id: 1,
            title: "Qualite de ",
            category: "analyse",
            image: "photo/projet1_analyse3_air.png",
            description: "Analyse spatiale des zones à risque d'inondation à Dakar à partir de MNT et d'images satellites.",
            longDescription: "Dans le cadre du cours Analyse 3, ce projet consiste en une cartographie des zones exposées aux risques naturels (inondations, érosion) dans la région de Dakar. Les données ont été traitées sous QGIS à partir de modèles numériques de terrain (MNT) et d'images satellites multitemporelles. Une analyse multicritère a permis de hiérarchiser les zones vulnérables et de produire des cartes thématiques à destination des décideurs.",
            tech: ["QGIS", "Analyse spatiale", "MNT", "Télédétection"],
            link: "https://github.com/Astou70/Mon_Portfolio/raw/main/rapports/analyse3.pdf",
            github: "https://github.com/Astou70/Mon_Portfolio/raw/main/rapports/analyse3.pdf",
            date: "2025",
            client: "Cours Analyse 3 – UIDT"
        },
        {
            id: 2,
            title: "Occupation du sol – Région de Thiès",
            category: "analyse",
            image: "photo/imagaa4.jpeg",
            description: "Classification d'images Landsat pour cartographier l'évolution de l'occupation du sol à Thiès entre 2010 et 2024.",
            longDescription: "Ce projet du cours Analyse 4 porte sur la dynamique de l'occupation du sol dans la région de Thiès (Sénégal). La classification supervisée d'images Landsat 8 a permis d'identifier plusieurs classes : zones urbaines, agricoles, forêts et plans d'eau. Une comparaison diachronique (2010–2024) révèle l'extension rapide de l'urbanisation et le recul des surfaces cultivables.",
            tech: ["ArcGIS", "Landsat 8", "Classification supervisée", "SIG"],
            link: "#",
            github: "#",
            date: "2025",
            client: "Cours Analyse 4 – UIDT"
        },
       
        {
            id: 3,
            title: "Analyse du trafic routier – Mbour 1 & Nietti Gad",
            category: "sig",
            image: "photo/projet4_trafic_routier.png",
            description: "Comptage et analyse des flux de trafic aux heures de pointe sur deux ronds-points de Thiès.",
            longDescription: "Étude du trafic routier réalisée en binôme aux carrefours Mbour 1 et Nietti Gad à Thiès. Le protocole inclut des comptages manuels aux heures de pointe (matin, midi, soir) sur une semaine complète. Les données ont été saisies sur Excel, analysées statistiquement et cartographiées avec QGIS pour produire un rapport de synthèse remis à l'enseignant.",
            tech: ["Excel", "QGIS", "Cartographie", "Analyse statistique"],
            link: "https://github.com/Astou70/Mon_Portfolio/raw/main/rapports/Rapport_trafic_routier.pdf",
            github: "https://github.com/Astou70/Mon_Portfolio/raw/main/rapports/Rapport_trafic_routier.pdf",
            date: "2025",
            client: "Cours Méthode de collecte – UIDT"
        },
        {
            id: 4,
            title: "Portfolio Web – Géomatique",
            category: "sig",
            image: "photo/projet5_portfolio_web.png",
            description: "Conception et développement d'un portfolio personnel en HTML/CSS/JavaScript pour valoriser mes travaux en géomatique.",
            longDescription: "Ce portfolio a été entièrement conçu et développé de zéro en HTML5, CSS3 et JavaScript vanilla. Il intègre un mode sombre/clair, un design responsive, des animations CSS, un système de filtre de projets dynamique et un formulaire de contact. Ce projet illustre ma capacité à allier compétences techniques et esthétique visuelle.",
            tech: ["HTML5", "CSS3", "JavaScript", "Design responsive"],
            link: "https://astou70.github.io/Portfolio_Astou/",
            github: "https://github.com/Astou70/Portfolio_Astou",
            date: "2025",
            client: "Projet personnel"
        }
    ],

    // 2. COMPÉTENCES
    skills: {
        sig: [
            { name: "QGIS", percent: 80 },
            { name: "ArcGIS", percent: 65 },
            { name: "Cartographie thématique", percent: 80 },
            { name: "Télédétection", percent: 65 },
            { name: "GPS & collecte terrain", percent: 75 },
            { name: "Bases de données spatiales", percent: 60 }
        ],
        dev: [
            { name: "Python", percent: 65 },
            { name: "HTML / CSS", percent: 80 },
            { name: "JavaScript", percent: 70 },
            { name: "SQL", percent: 60 }
        ],
        data: [
            { name: "Analyse des données", percent: 70 },
            { name: "RStudio / R", percent: 50 },
            { name: "Excel (tableaux croisés)", percent: 75 },
            { name: "PowerPoint / Présentation", percent: 70 }
        ]
    },

    // 3. LOGICIELS MAÎTRISÉS
    software: [
        { name: "QGIS", icon: "fa-solid fa-map" },
        { name: "ArcGIS", icon: "fa-solid fa-globe" },
        { name: "RStudio", icon: "fa-solid fa-chart-line" },
        { name: "Wamp", icon: "fa-solid fa-server" },
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "Excel", icon: "fa-solid fa-table" },
        { name: "ODK Collect", icon: "fa-solid fa-mobile-alt" },
        { name: "VS Code", icon: "fa-solid fa-code" }
    ],

    // 4. EXPÉRIENCE ACADÉMIQUE
    experiences: [
        {
            title: " Cartographie thématique – Analyse spatiale",
            company: "UIDT – Cours de Cartographie",
            location: "Thiès, Sénégal",
            period: "Semestre 2 – 2025",
            description: "Réalisation de cartes thématiques complexes sous QGIS à partir de données ANSD et OpenStreetMap. Mise en page cartographique professionnelle avec légendes, échelles et habillages.",
            achievements: [
                "3 cartes thématiques complètes produites (choroplèthes, symboles proportionnels, densités)",
                "Utilisation de données officielles ANSD et OpenStreetMap",
                "Maîtrise du module de mise en page cartographique QGIS",
                "Rapport de synthèse rédigé en autonomie"
            ]
        },
        {
            title: " Méthode de collecte – Comptage du trafic routier",
            company: "UIDT – Cours Méthode de collecte",
            location: "Mbour 1 & Nietti Gad, Thiès",
            period: "2025",
            description: "Protocole complet de collecte et d'analyse des flux de circulation aux heures de pointe sur deux ronds-points stratégiques de la ville de Thiès.",
            achievements: [
                "Conception du protocole de comptage (créneaux horaires, catégories de véhicules)",
                "Comptage manuel sur 3 plages horaires pendant une semaine",
                "Traitement statistique des données avec Excel (tableaux croisés, graphiques)",
                "Production d'un rapport cartographique et analytique complet"
            ]
        },
        {
            title: "Projet Analyse 3 – Cartographie des risques",
            company: "UIDT – Département Géomatique",
            location: "Thiès, Sénégal",
            period: "Semestre 1 – 2025",
            description: "Analyse multicritère des zones à risques naturels à Dakar. Exploitation de MNT et d'images satellites pour identifier et hiérarchiser les zones vulnérables.",
            achievements: [
                "Traitement de MNT et calcul de pentes sous QGIS",
                "Analyse multicritère (AHP) pour la hiérarchisation des risques",
                "Production de cartes de vulnérabilité destinées aux décideurs",
                "Présentation orale des résultats devant la promotion"
            ]
        },
        {
            title: "Projet Analyse 4 – Occupation du sol",
            company: "UIDT – Département Géomatique",
            location: "Thiès, Sénégal",
            period: "Semestre 2 – 2025",
            description: "Classification supervisée d'images Landsat 8 pour analyser l'évolution de l'occupation du sol dans la région de Thiès sur une période de 14 ans.",
            achievements: [
                "Téléchargement et prétraitement d'images Landsat 8",
                "Classification supervisée sous ArcGIS (5 classes d'occupation)",
                "Analyse diachronique 2010–2024 : quantification des changements",
                "Cartographie de synthèse et rapport de 15 pages"
            ]
        }
    ],

    // 5. FORMATION
    formations: [
        {
            degree: "Baccalauréat Scientifique – Série S2",
            institution: "Lycée de Medina Fall",
            location: "Thiés, Sénégal",
            period: "2022 – 2023",
            description: "Baccalauréat général série scientifique, avec spécialisation en sciences de la vie, de la Terre et mathématiques.",
            mention: "Assez bien"
        },
        {
            degree: "Licence 1 en Géomatique",
            institution: "Université Cheikh Anta Diop (UCAD)",
            location: "Dakar, Sénégal",
            period: "2023 – 2024",
            description: "Première année de Licence en Géomatique. Fondamentaux en cartographie, Programmation et initiation aux SIG.",
            mention: "Assez bien"
        },
        {
            degree: "Licence 2 en Géomatique (en cours)",
            institution: "Université Iba Der Thiam de Thiès (UIDT)",
            location: "Thiès, Sénégal",
            period: "2024 – 2025",
            description: "Deuxième année de Licence. Approfondissement en SIG, télédétection, méthodes de collecte, analyse spatiale et développement d'applications géographiques. Réalisation de projets appliqués en cartographie thématique et traitement d'images satellites.",
            mention: "En cours"
        }
    ]
};

// ====================================
// PARTIE 2 : FONCTIONS
// ====================================

// ------------------------------
// FONCTION : Afficher les projets
// ------------------------------
function displayProjects(filter = 'all') {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = '';

    const filteredProjects = filter === 'all'
        ? portfolioData.projects
        : portfolioData.projects.filter(p => p.category === filter);

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const techTags = project.tech.map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        projectCard.innerHTML = `
            <div class="project-img">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.link}" target="_blank" title="Voir le projet"><i class="fas fa-eye"></i></a>
                        <a href="${project.github}" target="_blank" title="Code source"><i class="fab fa-github"></i></a>
                        <a href="#" onclick="showProjectDetails(${project.id}); return false;" title="Détails"><i class="fas fa-info-circle"></i></a>
                    </div>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${techTags}
                </div>
            </div>
        `;

        container.appendChild(projectCard);
    });
}

// ------------------------------
// FONCTION : Afficher les compétences
// ------------------------------
function displaySkills() {
    const sigContainer = document.getElementById('sig-skills');
    if (sigContainer) {
        sigContainer.innerHTML = portfolioData.skills.sig.map(skill => `
            <div class="skill-item">
                <div class="skill-info">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-percent">${skill.percent}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" data-percent="${skill.percent}" style="width: 0%;"></div>
                </div>
            </div>
        `).join('');
    }

    const devContainer = document.getElementById('dev-skills');
    if (devContainer) {
        devContainer.innerHTML = portfolioData.skills.dev.map(skill => `
            <div class="skill-item">
                <div class="skill-info">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-percent">${skill.percent}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" data-percent="${skill.percent}" style="width: 0%;"></div>
                </div>
            </div>
        `).join('');
    }

    const dataContainer = document.getElementById('data-skills');
    if (dataContainer) {
        dataContainer.innerHTML = portfolioData.skills.data.map(skill => `
            <div class="skill-item">
                <div class="skill-info">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-percent">${skill.percent}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" data-percent="${skill.percent}" style="width: 0%;"></div>
                </div>
            </div>
        `).join('');
    }

    const softwareContainer = document.getElementById('software-skills');
    if (softwareContainer) {
        softwareContainer.innerHTML = portfolioData.software.map(soft => `
            <div class="software-item">
                <i class="${soft.icon}"></i>
                <span>${soft.name}</span>
            </div>
        `).join('');
    }
}

// ------------------------------
// FONCTION : Afficher l'expérience
// ------------------------------
function displayExperience() {
    const container = document.getElementById('experience-container');
    if (!container) return;

    container.innerHTML = portfolioData.experiences.map(exp => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${exp.period}</span>
                <h3>${exp.title}</h3>
                <h4>${exp.company} • ${exp.location}</h4>
                <p>${exp.description}</p>
                <ul style="margin-top: 1rem; padding-left: 1.5rem;">
                    ${exp.achievements.map(ach => `<li style="margin-bottom: 0.3rem; color: #666;">✓ ${ach}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// ------------------------------
// FONCTION : Afficher la formation
// ------------------------------
function displayFormation() {
    const container = document.getElementById('formation-container');
    if (!container) return;

    container.innerHTML = portfolioData.formations.map(formation => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${formation.period}</span>
                <h3>${formation.degree}</h3>
                <h4>${formation.institution} • ${formation.location}</h4>
                <p>${formation.description}</p>
                ${formation.mention ? `<p style="margin-top: 0.5rem;"><strong>Mention :</strong> ${formation.mention}</p>` : ''}
            </div>
        </div>
    `).join('');
}

// ------------------------------
// FONCTION : Animer les barres de progression
// ------------------------------
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach((bar, index) => {
        const percent = bar.getAttribute('data-percent');
        if (percent) {
            setTimeout(() => {
                bar.style.width = percent + '%';
            }, index * 100);
        }
    });
}

// ------------------------------
// FONCTION : Formulaire de contact
// ------------------------------
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const firstName = document.getElementById('firstName')?.value.trim();
        const lastName  = document.getElementById('lastName')?.value.trim();
        const email     = document.getElementById('email')?.value.trim();
        const sujet     = document.getElementById('sujet')?.value.trim();
        const message   = document.getElementById('message')?.value.trim();

        const confirmationMsg = document.getElementById('confirmation');

        if (!firstName || !lastName || !email || !sujet || !message) {
            confirmationMsg.textContent = '❌ Tous les champs sont obligatoires !';
            confirmationMsg.className = 'confirmation-message error';
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            confirmationMsg.textContent = '❌ Adresse email invalide !';
            confirmationMsg.className = 'confirmation-message error';
            return;
        }

        confirmationMsg.textContent = '✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.';
        confirmationMsg.className = 'confirmation-message success';
        form.reset();

        setTimeout(() => {
            confirmationMsg.textContent = '';
            confirmationMsg.className = 'confirmation-message';
        }, 4000);
    });
}

// ------------------------------
// FONCTION : Texte tapé animé
// ------------------------------
function initTypedText() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;

    const texts = [
        'Étudiante en Géomatique',
        'Passionnée de SIG & Cartographie',
        'Analyste spatiale en formation',
        'Future cartographe professionnelle'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typedElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
}

// ------------------------------
// FONCTION : Menu mobile
// ------------------------------
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu   = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// ------------------------------
// FONCTION : Bouton retour en haut
// ------------------------------
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('show', window.scrollY > 500);
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ------------------------------
// FONCTION : Navigation active
// ------------------------------
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks  = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ------------------------------
// FONCTION : Filtres de projets
// ------------------------------
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayProjects(btn.getAttribute('data-filter'));
        });
    });
}

// ------------------------------
// FONCTION : Animations au scroll
// ------------------------------
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInUp');
                if (entry.target.id === 'competences') {
                    animateProgressBars();
                }
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));
}

// ------------------------------
// FONCTION : Détails d'un projet (modale)
// ------------------------------
function showProjectDetails(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    const existing = document.querySelector('.modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = `
        position: fixed; top:0; left:0; width:100%; height:100%;
        background: rgba(0,0,0,0.85); display:flex; justify-content:center;
        align-items:center; z-index:2000; padding: 1rem;
    `;

    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 15px; max-width: 560px;
                    width:100%; position: relative; color: #333; max-height:90vh; overflow-y:auto;">
            <button onclick="this.closest('.modal').remove()"
                    style="position:absolute; top:10px; right:15px; background:none;
                           border:none; font-size:1.8rem; cursor:pointer; color:#2c3e50;">&times;</button>
            <h2 style="color: #2c3e50; margin-bottom:1rem; padding-right:2rem;">${project.title}</h2>
            <p style="color:#666; line-height:1.7; margin-bottom:1.2rem;">${project.longDescription || project.description}</p>
            <h3 style="color:#2c3e50; margin-bottom:0.5rem;">Technologies utilisées</h3>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.2rem;">
                ${project.tech.map(t => `<span style="background:#f0f0f0; padding:0.3rem 1rem; border-radius:50px; font-size:0.85rem;">${t}</span>`).join('')}
            </div>
            <p><strong>Commanditaire :</strong> ${project.client || 'Université'}</p>
            <p><strong>Année :</strong> ${project.date}</p>
            ${project.link !== '#' ? `<a href="${project.link}" target="_blank"
                style="display:inline-block; margin-top:1rem; padding:0.6rem 1.5rem;
                background:#ffd700; color:#2c3e50; border-radius:50px; text-decoration:none;
                font-weight:600;">Voir le rapport ↗</a>` : ''}
        </div>
    `;

    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
    document.body.appendChild(modal);
}

// ====================================
// PARTIE 3 : INITIALISATION
// ====================================

document.addEventListener('DOMContentLoaded', function () {
    console.log("Portfolio Astou Gueye – Géomatique chargé ✓");

    displayProjects();
    displaySkills();
    displayExperience();
    displayFormation();

    initTypedText();
    initMobileMenu();
    initBackToTop();
    setActiveNavLink();
    initProjectFilters();
    initScrollAnimations();
    initContactForm();
    initThemeToggle();

    // Animer les barres si la section compétences est déjà visible
    setTimeout(() => {
        const skillsSection = document.getElementById('competences');
        if (skillsSection) {
            const rect = skillsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight) animateProgressBars();
        }
    }, 500);
});

// ====================================
// BOUTON MODE SOMBRE / CLAIR
// ====================================
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    const icon = toggleBtn.querySelector('i');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
    }

    toggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');

        if (icon) {
            const isDark = document.body.classList.contains('dark-mode');
            icon.classList.toggle('fa-moon', !isDark);
            icon.classList.toggle('fa-sun', isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }
    });
}

