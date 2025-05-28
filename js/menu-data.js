const menuData = {
  sandwichs: [
    {
      id: 1,
      name: "Chawarma",
      description:
        "Pain pita, viande ou poulet mariné, légumes frais, sauce spéciale",
      price: "2000",
      image: "images/sandwichs/chawarma.jpg",
      categories: ["sandwichs"],
      allergens: ["gluten"],
    },
    {
      id: 2,
      name: "Burger",
      description:
        "Pain brioché, steak haché, fromage, salade, tomate, oignon, sauce spéciale",
      price: "2000",
      image: "images/sandwichs/burger.jpg",
      categories: ["sandwichs"],
      allergens: ["gluten", "lactose"],
    },
    {
      id: 3,
      name: "Double Burger",
      description:
        "Pain brioché, double steak haché, double fromage, salade, tomate, oignon, sauce spéciale",
      price: "3000",
      image: "images/sandwichs/double-burger.jpg",
      categories: ["sandwichs"],
      allergens: ["gluten", "lactose"],
    },
    {
      id: 4,
      name: "Norvégienne",
      description: "Pain spécial, thon, œuf, légumes frais, sauce mayonnaise",
      price: "2000",
      image: "images/sandwichs/norvegienne.jpg",
      categories: ["sandwichs"],
      allergens: ["gluten", "poisson", "œuf"],
    },
    {
      id: 5,
      name: "Double Norvégienne",
      description:
        "Pain spécial, double thon, œuf, légumes frais, sauce mayonnaise",
      price: "3000",
      image: "images/sandwichs/double-norvegienne.jpg",
      categories: ["sandwichs"],
      allergens: ["gluten", "poisson", "œuf"],
    },
  ],
  tacos: [
    {
      id: 6,
      name: "Tacos Poulet",
      description:
        "Galette de blé, poulet mariné, fromage, légumes, sauce spéciale",
      price: "2500",
      image: "images/tacos/tacos-poulet.jpg",
      categories: ["tacos"],
      allergens: ["gluten", "lactose"],
    },
    {
      id: 7,
      name: "Tacos Viande",
      description:
        "Galette de blé, viande marinée, fromage, légumes, sauce spéciale",
      price: "2500",
      image: "images/tacos/tacos-viande.jpg",
      categories: ["tacos"],
      allergens: ["gluten", "lactose"],
    },
    {
      id: 8,
      name: "Tacos Mix",
      description:
        "Galette de blé, mélange poulet et viande, fromage, légumes, sauce spéciale",
      price: "3000",
      image: "images/tacos/tacos-mix.jpg",
      categories: ["tacos"],
      allergens: ["gluten", "lactose"],
    },
  ],
  pizzas: [
    {
      id: 9,
      name: "Pizza Reine",
      description: "Sauce tomate, jambon, fromage, champignons",
      price: "4000",
      price_large: "5000",
      image: "images/pizzas/pizza-reine.jpg",
      categories: ["pizzas"],
      allergens: ["gluten", "lactose"],
    },
    {
      id: 10,
      name: "Pizza Poulet",
      description: "Sauce tomate, poulet mariné, fromage, poivrons",
      price: "4000",
      price_large: "5000",
      image: "images/pizzas/pizza-poulet.jpg",
      categories: ["pizzas"],
      allergens: ["gluten", "lactose"],
    },
    {
      id: 11,
      name: "Pizza Viande",
      description: "Sauce tomate, viande hachée, fromage, oignons",
      price: "4000",
      price_large: "5000",
      image: "images/pizzas/pizza-viande.jpg",
      categories: ["pizzas"],
      allergens: ["gluten", "lactose"],
    },
    {
      id: 12,
      name: "Pizza Margarita",
      description: "Sauce tomate, fromage, basilic frais",
      price: "4000",
      price_large: "5000",
      image: "images/pizzas/pizza-margarita.jpg",
      categories: ["pizzas"],
      allergens: ["gluten", "lactose"],
    },
    {
      id: 13,
      name: "Pizza Mix",
      description: "Sauce tomate, mélange de viandes, fromage, légumes variés",
      price: "4500",
      price_large: "6000",
      image: "images/pizzas/pizza-mix.jpg",
      categories: ["pizzas"],
      allergens: ["gluten", "lactose"],
    },
    {
      id: 14,
      name: "Pizza Fruits de Mer",
      description: "Sauce tomate, fruits de mer, fromage, oignons",
      price: "5000",
      price_large: "6500",
      image: "images/pizzas/pizza-fruits-mer.jpg",
      categories: [],
      allergens: ["gluten", "lactose", "fruits de mer"],
    },
  ],
  crepes: [
    {
      id: 15,
      name: "Crêpe Salée",
      description:
        "Crêpe garnie au choix : jambon, viande hachée, viande, poulet",
      price: "3000",
      image: "images/crepes/crepe-salee.jpg",
      categories: ["pizzas"],
      allergens: ["gluten", "lactose"],
    },
    {
      id: 16,
      name: "Crêpe Nutella",
      description: "Crêpe garnie de Nutella, banane",
      price: "2000",
      image: "images/crepes/crepe-nutella.jpg",
      categories: ["vegetarian"],
      allergens: ["gluten", "lactose", "fruits à coque"],
    },
  ],
  specialites: [
    {
      id: 17,
      name: "Mbakhal",
      description: "Plat traditionnel de viande avec légumes",
      price: "2000",
      image: "images/specialites/mbakhal.jpg",
      categories: [],
      allergens: ["poisson"],
    },
    {
      id: 18,
      name: "Assiette Brochettes",
      description: "Brochettes de viande ou poulet, accompagnement au choix",
      price: "5000",
      image: "images/specialites/brochettes.jpg",
      categories: ["specialites"],
      allergens: [],
    },
    {
      id: 19,
      name: "Assiette Cuisse",
      description: "Cuisse de poulet grillée, accompagnement au choix",
      price: "5000",
      image: "images/specialites/cuisse.jpg",
      categories: [],
      allergens: [],
    },
    {
      id: 20,
      name: "Poisson Braisé",
      description: "Poisson frais braisé, accompagnement au choix",
      price: "6000",
      image: "images/specialites/poisson.jpg",
      categories: [],
      allergens: ["poisson"],
    },
  ],
  accompagnements: [
    {
      id: 21,
      name: "Frites",
      description: "Pommes de terre frites croustillantes",
      price: "1000",
      image: "images/specialites/frites.jpg",
      categories: ["vegetarian"],
      allergens: [],
    },
    {
      id: 22,
      name: "Légumes Sautées",
      description: "Mélange de légumes frais sautés",
      price: "1000",
      image: "images/specialites/legumes.jpg",
      categories: ["vegetarian", "specialites"],
      allergens: [],
    },
    {
      id: 23,
      name: "Alloco",
      description: "Bananes plantains frites",
      price: "1000",
      image: "images/specialites/alloco.jpg",
      categories: ["vegetarian", "specialites"],
      allergens: [],
    },
    {
      id: 24,
      name: "Athiécké",
      description: "Semoule de manioc traditionnelle",
      price: "1000",
      image: "images/specialites/athiecke.jpg",
      categories: ["vegetarian", "specialites"],
      allergens: [],
    },
  ],
  chicha: [
    {
      id: 25,
      name: "Chicha",
      description: "Chicha traditionnelle avec saveur au choix",
      price: "5000",
      image: "images/specialites/chicha.jpg",
      categories: [],
      allergens: [],
    },
    {
      id: 26,
      name: "Changement de Tête",
      description: "Remplacement de la tête de chicha",
      price: "2000",
      image: "images/specialites/tete.jpg",
      categories: [],
      allergens: [],
    },
  ],
  cocktails: [
    {
      id: 26,
      name: "Teranga",
      description:
        "Un mélange rafraîchissant de bouye, ananas et fruit de la passion",
      price: "5000",
      image: "images/cocktails/teranga.jpg",
      categories: ["cocktails"],
      allergens: [],
      isSignature: false,
    },
    {
      id: 27,
      name: "Askir",
      description: "Un délicieux mélange de bissap, goyave et fraise/framboise",
      price: "3000",
      image: "images/cocktails/askir.jpg",
      categories: ["cocktails"],
      allergens: [],
      isSignature: false,
    },
    {
      id: 28,
      name: "Power",
      description: "Notre signature : ananas, passion, citron et orange",
      price: "6000",
      image: "images/cocktails/power.jpg",
      categories: ["cocktails"],
      allergens: [],
      isSignature: true,
    },
    {
      id: 29,
      name: "Virgin Mojito",
      description: "Menthe fraîche, citron vert, sucre de canne et eau gazeuse",
      price: "2500",
      image: "images/cocktails/virgin-mojito.jpg",
      categories: ["cocktails", "sans-alcool"],
      allergens: [],
      isSignature: false,
    },
    {
      id: 30,
      name: "Bouye",
      description: "Jus de fruit de baobab rafraîchissant",
      price: "2000",
      image: "images/cocktails/bouye.jpg",
      categories: ["cocktails", "sans-alcool"],
      allergens: [],
      isSignature: false,
    },
    {
      id: 31,
      name: "Orange",
      description: "Jus d'orange frais pressé",
      price: "2000",
      image: "images/cocktails/orange.jpg",
      categories: ["cocktails", "sans-alcool"],
      allergens: [],
      isSignature: false,
    },
    {
      id: 32,
      name: "Cocktail",
      description: "Cocktail maison aux fruits frais",
      price: "2000",
      image: "images/cocktails/cocktail.jpg",
      categories: ["cocktails"],
      allergens: [],
      isSignature: false,
    },
    {
      id: 33,
      name: "Thé Jasmin",
      description: "Thé parfumé aux fleurs de jasmin",
      price: "1500",
      image: "images/cocktails/the-jasmin.jpg",
      categories: ["cocktails", "the"],
      allergens: [],
      isSignature: false,
    },
    {
      id: 34,
      name: "Thé Gingembre",
      description: "Thé au gingembre, citron et miel",
      price: "1500",
      image: "images/cocktails/the-gingembre.jpg",
      categories: ["cocktails", "the"],
      allergens: [],
      isSignature: false,
    },
    {
      id: 35,
      name: "Thé Menthe",
      description: "Thé vert à la menthe fraîche",
      price: "1500",
      image: "images/cocktails/the-menthe.jpg",
      categories: ["cocktails", "the"],
      allergens: [],
      isSignature: false,
    },
    {
      id: 36,
      name: "Café",
      description: "Café fraîchement moulu",
      price: "1000",
      image: "images/cocktails/cafe.jpg",
      categories: ["cocktails", "cafe"],
      allergens: [],
      isSignature: false,
    },
  ],
};

// Fonction pour générer les éléments du menu
function generateMenuItems() {
  // Générer les cocktails
  const cocktailsContainer = document.querySelector("#cocktails .row");
  menuData.cocktails.forEach((item) => {
    cocktailsContainer.appendChild(createMenuItem(item));
  });

  // Générer les sandwichs
  const sandwichsContainer = document.querySelector("#sandwichs .row");
  menuData.sandwichs.forEach((item) => {
    sandwichsContainer.appendChild(createMenuItem(item));
  });

  // Générer les tacos
  const tacosContainer = document.querySelector("#tacos .row");
  menuData.tacos.forEach((item) => {
    tacosContainer.appendChild(createMenuItem(item));
  });

  // Générer les pizzas
  const pizzasContainer = document.querySelector("#pizzas .row");
  menuData.pizzas.forEach((item) => {
    pizzasContainer.appendChild(createMenuItem(item));
  });

  // Générer les crêpes
  const crepesContainer = document.querySelector("#crepes .row");
  menuData.crepes.forEach((item) => {
    crepesContainer.appendChild(createMenuItem(item));
  });

  // Générer les spécialités
  const specialitesContainer = document.querySelector("#specialites .row");
  menuData.specialites.forEach((item) => {
    specialitesContainer.appendChild(createMenuItem(item));
  });

  // Générer les accompagnements
  const accompagnementsContainer = document.querySelector(
    "#accompagnements .row"
  );
  menuData.accompagnements.forEach((item) => {
    accompagnementsContainer.appendChild(createMenuItem(item));
  });

  // Générer la chicha
  const chichaContainer = document.querySelector("#chicha .row");
  menuData.chicha.forEach((item) => {
    chichaContainer.appendChild(createMenuItem(item));
  });
}

// Fonction pour créer un élément de menu
function createMenuItem(item) {
  const col = document.createElement("div");
  col.className = "col-md-4 menu-item";

  // Ajouter les classes de catégorie
  item.categories.forEach((category) => {
    col.classList.add(category);
  });

  col.innerHTML = `
        <div class="card h-100">
            <img src="${item.image}" class="card-img-top" alt="${
    item.name
  }" loading="lazy">
            <div class="card-body">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-text description">${item.description}</p>
                <p class="price">
                    ${item.price} FCFA
                    ${
                      item.price_large
                        ? `<br><small>Grande: ${item.price_large} FCFA</small>`
                        : ""
                    }
                </p>
                <div class="icons">
                    ${
                      item.categories.includes("vegetarian")
                        ? '<i class="fas fa-leaf" title="Végétarien"></i>'
                        : ""
                    }
                </div>
                ${
                  item.allergens.length > 0
                    ? `
                    <div class="allergens mt-2">
                        <small>Allergènes: ${item.allergens.join(", ")}</small>
                    </div>
                `
                    : ""
                }
            </div>
        </div>
    `;

  return col;
}

// Générer le menu au chargement de la page
document.addEventListener("DOMContentLoaded", generateMenuItems);
