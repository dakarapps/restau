// Gestion du splash screen
document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("splash-screen");

  // Simuler un temps de chargement
  setTimeout(() => {
    splashScreen.style.opacity = "0";
    setTimeout(() => {
      splashScreen.style.display = "none";
    }, 300);
  }, 2000);
});

// Gestion du changement de langue
const languageToggle = document.getElementById("language-toggle");
let currentLang = "fr";

languageToggle.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  updateLanguage(currentLang);
  languageToggle.textContent = currentLang === "fr" ? "FR/EN" : "EN/FR";
});

// Fonction pour mettre à jour les textes selon la langue
function updateLanguage(lang) {
  const translations = {
    fr: {
      "menu-title": "Notre Menu",
      entrees: "Entrées",
      plats: "Plats Principaux",
      desserts: "Desserts",
      boissons: "Boissons",
      all: "Tout",
      vegetarian: "Végétarien",
      spicy: "Épicé",
      "gluten-free": "Sans Gluten",
    },
    en: {
      "menu-title": "Our Menu",
      entrees: "Starters",
      plats: "Main Courses",
      desserts: "Desserts",
      boissons: "Drinks",
      all: "All",
      vegetarian: "Vegetarian",
      spicy: "Spicy",
      "gluten-free": "Gluten Free",
    },
  };

  // Mettre à jour les textes
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// Gestion des filtres
const filterButtons = document.querySelectorAll(".filter-buttons button");
let menuItems = [];

// Attendre que les éléments du menu soient générés
document.addEventListener("DOMContentLoaded", () => {
  // Récupérer tous les éléments du menu après leur génération
  menuItems = document.querySelectorAll(".menu-item");

  // Ajouter les écouteurs d'événements aux boutons de filtre
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Mettre à jour l'état actif des boutons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filtrer les éléments du menu
      menuItems.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block";
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = "block";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          } else {
            item.style.opacity = "0";
            item.style.transform = "translateY(20px)";
            setTimeout(() => {
              item.style.display = "none";
            }, 300);
          }
        }
      });
    });
  });
});

// Animation au scroll
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".menu-section").forEach((section) => {
  observer.observe(section);
});

// Lazy loading des images
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => imageObserver.observe(img));
});

// Gestion du parallaxe
window.addEventListener("scroll", () => {
  const parallaxElements = document.querySelectorAll(".parallax");
  const scrolled = window.pageYOffset;

  parallaxElements.forEach((element) => {
    const speed = element.dataset.speed || 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Fonction pour créer un élément de menu
function createMenuItem(item) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                ${item.image ? `<img src="${item.image}" class="card-img-top" alt="${item.name}">` : ''}
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <div class="d-flex flex-column">
                        <div class="price-container mb-2">
                            <span class="price">${formatPrice(item.price)} FCFA</span>
                        </div>
                        ${item.tags ? `
                            <div class="tags">
                                ${item.tags.map(tag => `
                                    <span class="badge">
                                        <i class="fas ${getTagIcon(tag)}"></i>
                                        ${tag}
                                    </span>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Fonction pour formater le prix
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR').format(price);
}

// Fonction pour obtenir l'icône correspondant au tag
function getTagIcon(tag) {
    const icons = {
        'vegetarian': 'fa-leaf',
        'spicy': 'fa-pepper-hot',
        'gluten-free': 'fa-bread-slice',
        'vegan': 'fa-seedling',
        'halal': 'fa-moon',
        'bio': 'fa-leaf',
        'local': 'fa-map-marker-alt',
        'seasonal': 'fa-calendar-alt'
    };
    return icons[tag.toLowerCase()] || 'fa-tag';
}

// Fonction pour initialiser les carousels
function initializeCarousels() {
    const sections = ['cocktails', 'sandwichs', 'tacos', 'pizzas', 'crepes', 'specialites', 'accompagnements', 'chicha'];
    
    sections.forEach(section => {
        const carousel = document.querySelector(`#${section}Carousel .carousel-inner`);
        const items = menuData[section] || [];
        
        // Diviser les éléments en groupes de 3 pour chaque slide
        const itemsPerSlide = 3;
        const slides = [];
        
        for (let i = 0; i < items.length; i += itemsPerSlide) {
            const slideItems = items.slice(i, i + itemsPerSlide);
            slides.push(slideItems);
        }
        
        // Créer les slides
        carousel.innerHTML = slides.map((slideItems, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <div class="row">
                    ${slideItems.map(item => createMenuItem(item)).join('')}
                </div>
            </div>
        `).join('');
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initializeCarousels();
    
    // Gestion des filtres
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            filterMenuItems(filter);
        });
    });
});

// Fonction pour filtrer les éléments du menu
function filterMenuItems(filter) {
    const sections = document.querySelectorAll('.menu-section');
    
    sections.forEach(section => {
        const items = section.querySelectorAll('.card');
        items.forEach(item => {
            const tags = item.querySelector('.tags');
            if (filter === 'all' || !tags) {
                item.closest('.col-md-4').style.display = 'block';
            } else {
                const hasTag = Array.from(tags.querySelectorAll('.badge'))
                    .some(badge => badge.textContent.toLowerCase().includes(filter));
                item.closest('.col-md-4').style.display = hasTag ? 'block' : 'none';
            }
        });
    });
}
