// ====================================
// PARTIE 1 : DONNÉES DU PORTFOLIO
// ====================================

const portfolioData = {
    // 1. PROJETS
    projects: [
        {
            id: 1,
            title: "Analyse 3 - Cartographie des risques",
            category: "analyse",
            image: "photo/Rplot04.jpeg",
            description: "Analyse spatiale des risques naturels à Dakar avec QGIS.",
            longDescription: "Projet du cours Analyse 3. Cartographie des zones à risque à partir de MNT et images satellites.",
            tech: ["QGIS", "Analyse spatiale", "MNT"],
            link: "https://github.com/Astou70/Mon_Portfolio/raw/main/rapports/analyse3.pdf",
            github: "https://github.com/Astou70/Mon_Portfolio/raw/main/rapports/analyse3.pdf",
            date: "2025",
            client: "Cours Analyse 3"
        },
        {
            id: 2,
            title: "Analyse 4 - SIG et aménagement",
            category: "analyse",
            image: "photo/imagaa4.jpeg",
            description: "Étude de l'occupation du sol à Thiès.",
            longDescription: "Classification d'images Landsat pour cartographier l'occupation du sol.",
            tech: ["ArcGIS", "Landsat", "Analyse"],
            link: "#",
            github: "#",
            date: "2025",
            client: "Cours Analyse 4"
        },
        {
            id: 3,
            title: "Méthode de collecte - Enquêtes GPS",
            category: "sig",
            image: "photo/carte.jpeg",
            description: "Collecte de données GPS sur le terrain.",
            longDescription: "Projet du cours Méthode de collecte. Collecte et traitement de points GPS.",
            tech: ["GPS", "QGIS", "ODK"],
            link: "https://github.com/Astou70/Mon_Portfolio/raw/main/rapports/Rapport_trafic_routier.pdf",
            github: "https://github.com/Astou70/Mon_Portfolio/raw/main/rapports/Rapport_trafic_routier.pdf",
            date: "2025",
            client: "Cours Méthode de collecte"
        }
    ],
    
    // 2. COMPÉTENCES (MISES À JOUR)
    skills: {
        sig: [
            { name: "QGIS", percent: 75 },
            { name: "ArcGIS", percent: 60 },
            { name: "Cartographie", percent: 70 }
        ],
        dev: [
            { name: "Python", percent: 60 },
            { name: "HTML/CSS", percent: 70 },
            { name: "SQL", percent: 50 }
        ],
        data: [
            { name: "Analyse des données", percent: 70 },
            { name: "RStudio", percent: 50 },
            { name: "Excel", percent: 75 },
            { name: "PowerPoint", percent: 70 }
        ]
    },
    
    // 3. LOGICIELS MAÎTRISÉS
    software: [
        { name: "QGIS", icon: "fa-solid fa-map" },
        { name: "ArcGIS", icon: "fa-solid fa-globe" },
        { name: "RStudio", icon: "fa-solid fa-chart-line" },
        { name: "Wamp", icon: "fa-solid fa-server" },
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "Excel", icon: "fa-solid fa-table" }
    ],
    
    // 4. EXPÉRIENCE
    experiences: [
        {
            title: "Travaux pratiques - Cartographie thématique",
            company: "UIDT - Cours de Cartographie",
            location: "THIES",
            period: "Semestre 2 - 2025",
            description: "Réalisation de cartes thématiques avec QGIS.",
            achievements: [
                "3 cartes thématiques réalisées",
                "Utilisation de données ANSD et OpenStreetMap"
            ]
        },
        {
            title: "TP Méthode de collecte - Comptage routier",
            company: "THIES - Cours Méthode de collecte",
            location: "Mbour1",
            period: "2025",
            description: "Comptage du trafic routier à Mbour 1 et Nietti Gad.",
            achievements: [
                "Comptage manuel aux heures de pointe",
                "2 ronds-points étudiés (Mbour 1, Nietti Gad)",
                "Analyse des flux avec Excel"
            ]
        }
    ],
    
    // 5. FORMATION
    formations: [
        {
            degree: "Baccalauréat Scientifique",
            institution: "Lycée de Dakar",
            location: "Dakar",
            period: "2023 - 2024",
            description: "Série S2",
            mention: "Assez bien"
        },
        {
            degree: "Licence 1 en Géomatique",
            institution: "UCAD",
            location: "Dakar",
            period: "2024 - 2025",
            description: "Première année",
            mention: "Assez bien"
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
                        <a href="#" onclick="showProjectDetails(${project.id})" title="Détails"><i class="fas fa-info-circle"></i></a>
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
// FONCTION : Afficher les compétences (sans certifications)
// ------------------------------
function displaySkills() {
    // Compétences SIG
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
    
    // Compétences Développement
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
    
    // Compétences Analyse
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
    
    // Logiciels
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
    console.log("Animation des barres de progression...");
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
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // ✅ .trim() enlève les espaces inutiles
        const firstName = document.getElementById('firstName')?.value.trim();
        const lastName = document.getElementById('lastName')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const sujet = document.getElementById('sujet')?.value.trim();
        const message = document.getElementById('message')?.value.trim();
        
        const confirmationMsg = document.getElementById('confirmation');
        
        // ✅ Vérification des champs vides
        if (!firstName || !lastName || !email || !sujet || !message) {
            confirmationMsg.textContent = '❌ Tous les champs sont obligatoires !';
            confirmationMsg.className = 'confirmation-message error';
            return;
        }
        
        // ✅ Vérification du format email
        if (!email.includes('@') || !email.includes('.')) {
            confirmationMsg.textContent = '❌ Email invalide !';
            confirmationMsg.className = 'confirmation-message error';
            return;
        }
        
        // ✅ Simulation d'envoi
        confirmationMsg.textContent = '✅ Message envoyé avec succès !';
        confirmationMsg.className = 'confirmation-message success';
        form.reset();
        
        setTimeout(() => {
            confirmationMsg.textContent = '';
            confirmationMsg.className = 'confirmation-message';
        }, 3000);
    });
}

// ------------------------------
// FONCTION : Texte tapé
// ------------------------------
function initTypedText() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;
    
    const texts = [
        'Étudiante en Géomatique',
        'Passionnée de SIG',
        'Future cartographe'
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
    const navMenu = document.querySelector('.nav-menu');
    
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
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
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
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 200) {
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
    const observerOptions = { threshold: 0.2 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInUp');
                
                if (entry.target.id === 'competences') {
                    animateProgressBars();
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// ------------------------------
// FONCTION : Détails d'un projet
// ------------------------------
function showProjectDetails(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = `
        position: fixed; top:0; left:0; width:100%; height:100%;
        background: rgba(0,0,0,0.8); display:flex; justify-content:center; align-items:center; z-index:2000;
    `;
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 15px; max-width: 500px; position: relative; color: #333;">
            <button onclick="this.parentElement.parentElement.remove()" style="position:absolute; top:10px; right:10px; background:none; border:none; font-size:1.5rem;">&times;</button>
            <h2 style="color: #2c3e50;">${project.title}</h2>
            <p style="margin:1rem 0;">${project.longDescription || project.description}</p>
            <h3>Technologies :</h3>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin:1rem 0;">
                ${project.tech.map(t => `<span style="background:#f0f0f0; padding:0.3rem 1rem; border-radius:50px;">${t}</span>`).join('')}
            </div>
            <p><strong>Client :</strong> ${project.client || 'Université'}</p>
            <p><strong>Date :</strong> ${project.date}</p>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// ------------------------------
// INITIALISATION
// ------------------------------
document.addEventListener('DOMContentLoaded', function() {
    console.log("Portfolio étudiante chargé !");
    
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

    setTimeout(() => {
        const skillsSection = document.getElementById('competences');
        if (skillsSection) {
            const rect = skillsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight) animateProgressBars();
        }
    }, 500);
});
// ===== BOUTON MODE SOMBRE/CLAIR =====
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const icon = toggleBtn.querySelector('i');
    
    // Vérifier si un thème est déjà sauvegardé
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Changer l'icône
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}
// ===== BOUTON MODE SOMBRE/CLAIR =====
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;
    
    const icon = toggleBtn.querySelector('i');
    
    // Vérifier le thème sauvegardé
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
    
    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (icon) {
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        }
    });
}

// Appeler la fonction au chargement
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
});