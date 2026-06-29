const recipes = [
  {
    "title": "Corvina en guiso",
    "category": "Pescados",
    "time": "30 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": [
      "pescado",
      "guiso",
      "tradicional"
    ],
    "ingredients": [
      "2 rodajas de corvina",
      "1 cebolla pequeña",
      "2 dientes de ajo",
      "150 g de tomate natural rallado",
      "Aceite de oliva virgen extra",
      "Sal y pimienta",
      "Caldo de pescado o agua, si hace falta",
      "Un chorrito de vino blanco, opcional"
    ],
    "steps": [
      "Pocha la cebolla y el ajo con aceite de oliva.",
      "Añade el tomate rallado y cocina 8-10 minutos.",
      "Incorpora la corvina salpimentada.",
      "Añade un poco de caldo si quieres más salsa.",
      "Cocina a fuego suave 10-12 minutos."
    ],
    "tip": "Muy buena con arroz blanco, patatas cocidas o pan para la salsa."
  },
  {
    "title": "Pollo con patatas en Air Fryer",
    "category": "Air Fryer",
    "time": "35 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": [
      "air fryer",
      "pollo",
      "patatas"
    ],
    "ingredients": [
      "2 muslos de pollo",
      "2 patatas medianas",
      "Aceite de oliva",
      "Romero",
      "Tomillo",
      "Pimentón",
      "Sal"
    ],
    "steps": [
      "Corta las patatas en gajos.",
      "Mezcla pollo y patatas con aceite, sal y especias.",
      "Cocina a 190 ºC durante 30-35 minutos.",
      "Da la vuelta a mitad de cocción."
    ],
    "tip": "Si quieres las patatas más crujientes, añádelas 5 minutos después del pollo."
  },
  {
    "title": "Ensalada de garbanzos",
    "category": "Ensaladas",
    "time": "15 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": [
      "ensalada",
      "legumbres",
      "verano"
    ],
    "ingredients": [
      "400 g de garbanzos cocidos",
      "1 tomate",
      "1/2 pepino",
      "1 aguacate",
      "Cebolla al gusto",
      "Aceite de oliva virgen extra",
      "Limón o vinagre",
      "Sal"
    ],
    "steps": [
      "Lava y escurre bien los garbanzos.",
      "Trocea el tomate, pepino, cebolla y aguacate.",
      "Mezcla todo en una fuente.",
      "Aliña con aceite, limón o vinagre y sal."
    ],
    "tip": "Admite atún, huevo duro, queso feta o langostinos."
  },
  {
    "title": "Huevos rellenos con atún y salmón",
    "category": "Cenas rápidas",
    "time": "20 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": [
      "cena fría",
      "verano",
      "huevos"
    ],
    "ingredients": [
      "4 huevos",
      "80 g de atún",
      "40 g de salmón ahumado",
      "Yemas cocidas",
      "Salsa rosa"
    ],
    "steps": [
      "Cuece los huevos y enfríalos.",
      "Parte los huevos por la mitad y retira las yemas.",
      "Mezcla las yemas con atún, salmón picado y salsa rosa.",
      "Rellena las claras.",
      "Deja enfriar antes de servir."
    ],
    "tip": "Puedes decorar con una tira de salmón por encima."
  },
  {
    "title": "Pez espada con pimientos asados",
    "category": "Pescados",
    "time": "20 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": [
      "pescado",
      "plancha",
      "rápida"
    ],
    "ingredients": [
      "2 filetes de pez espada",
      "Pimientos asados",
      "Aceite de oliva",
      "Sal",
      "Ajo picado, opcional"
    ],
    "steps": [
      "Seca bien el pez espada.",
      "Hazlo a la plancha con poco aceite.",
      "Calienta los pimientos asados con un poco de ajo si quieres.",
      "Sirve el pescado con los pimientos al lado."
    ],
    "tip": "Los pimientos asados compensan muy bien la sequedad del pez espada."
  },
  {
    "title": "Ensalada de alubias blancas",
    "category": "Ensaladas",
    "time": "15 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": [
      "ensalada",
      "legumbres",
      "verano"
    ],
    "ingredients": [
      "400 g de alubias blancas cocidas",
      "1 tomate",
      "Cebolla morada",
      "Atún o caballa",
      "Aceite de oliva",
      "Vinagre",
      "Sal"
    ],
    "steps": [
      "Lava y escurre las alubias.",
      "Corta tomate y cebolla.",
      "Añade atún o caballa.",
      "Aliña y mezcla con cuidado."
    ],
    "tip": "Mejor si reposa 10 minutos en frío antes de comer."
  },
  {
    "title": "Albóndigas caseras",
    "category": "Carnes",
    "time": "45 min",
    "servings": "2-3 personas",
    "difficulty": "Media",
    "tags": [
      "carne",
      "guiso",
      "clásica"
    ],
    "ingredients": [
      "400 g de carne picada",
      "1 huevo",
      "Pan rallado",
      "Ajo y perejil",
      "Sal y pimienta",
      "Harina",
      "Salsa de tomate o salsa casera"
    ],
    "steps": [
      "Mezcla la carne con huevo, ajo, perejil, sal y pimienta.",
      "Añade pan rallado hasta que la masa sea manejable.",
      "Forma las albóndigas y pásalas por harina.",
      "Dóralas ligeramente.",
      "Termina de cocinarlas en la salsa."
    ],
    "tip": "Quedan muy bien con arroz blanco o patatas fritas."
  },
  {
    "title": "Lomo de cerdo guisado",
    "category": "Carnes",
    "time": "40 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": [
      "cerdo",
      "guiso",
      "aprovechamiento"
    ],
    "ingredients": [
      "Lomo de cerdo",
      "Zanahoria",
      "Cebolla",
      "Caldo",
      "Aceite de oliva",
      "Sal y pimienta"
    ],
    "steps": [
      "Dora el lomo ligeramente.",
      "Pocha cebolla y zanahoria.",
      "Añade caldo y cocina suavemente.",
      "Sirve con zanahorias y puré de patata."
    ],
    "tip": "Guárdalo con algo de caldo para que no se seque en la nevera."
  }
];
