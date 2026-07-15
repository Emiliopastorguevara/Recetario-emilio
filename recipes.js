const recipes = [
  {
    "title": "Corvina en guiso",
    "category": "Pescados",
    "time": "30 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": ["pescado", "guiso", "tradicional"],
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
    "tags": ["air fryer", "pollo", "patatas"],
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
    "tags": ["ensalada", "legumbres", "verano"],
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
    "tags": ["cena fría", "verano", "huevos"],
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
    "tags": ["pescado", "plancha", "rápida"],
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
    "tags": ["ensalada", "legumbres", "verano"],
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
    "tags": ["carne", "guiso", "clásica"],
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
    "tags": ["cerdo", "guiso", "aprovechamiento"],
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
  },
  {
    "title": "Ensalada de melocotón",
    "category": "Ensaladas",
    "time": "10 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": ["ensalada", "melocotón", "verano"],
    "ingredients": [
      "Cogollitos de lechuga o rúcula",
      "1 tomate",
      "1 melocotón",
      "Mozzarella",
      "Pistachos",
      "Aceite de oliva virgen extra",
      "Vinagre de Módena",
      "Sal"
    ],
    "steps": [
      "Lava y corta los cogollitos o la rúcula.",
      "Trocea el tomate, el melocotón y la mozzarella.",
      "Coloca todos los ingredientes en una fuente.",
      "Añade los pistachos.",
      "Aliña con aceite, vinagre de Módena y sal."
    ],
    "tip": "El melocotón puede marcarse brevemente en la plancha para potenciar su sabor."
  },
  {
    "title": "Ensalada de higos",
    "category": "Ensaladas",
    "time": "10 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": ["ensalada", "higos", "queso de cabra"],
    "ingredients": [
      "Bolsa de ensalada variada, rúcula o canónigos",
      "4-6 higos",
      "Queso de cabra",
      "Uvas",
      "Pasas",
      "Aceite de oliva virgen extra",
      "Vinagre",
      "Sal"
    ],
    "steps": [
      "Coloca la ensalada en una fuente.",
      "Lava y corta los higos y las uvas.",
      "Añade el queso de cabra y las pasas.",
      "Aliña con aceite, vinagre y sal."
    ],
    "tip": "Puedes añadir nueces y una cucharadita de miel al aliño."
  },
  {
    "title": "Ensalada de pimientos",
    "category": "Ensaladas",
    "time": "15 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": ["ensalada", "pimientos", "langostinos"],
    "ingredients": [
      "1 lata de pimientos asados",
      "Cebolla al gusto",
      "1 tomate",
      "1 aguacate",
      "Langostinos",
      "2 cucharadas de zumo de limón",
      "1 cucharada de salsa de soja",
      "Cilantro",
      "Aceite de oliva",
      "Sal",
      "Ajo, opcional"
    ],
    "steps": [
      "Pon una base de pimientos asados.",
      "Añade la cebolla picada.",
      "Incorpora el tomate cortado en dados y aliña con aceite y sal.",
      "Machaca o trocea el aguacate y mézclalo con el zumo de limón y la salsa de soja.",
      "Reparte la mezcla de aguacate por encima.",
      "Decora con los langostinos y añade un poco de cilantro."
    ],
    "tip": "Si los langostinos son congelados, saltéalos antes con un poco de aceite y ajo."
  },
  {
    "title": "Ensalada de pasta con salmón y burrata",
    "category": "Ensaladas",
    "time": "20 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": ["pasta", "salmón", "burrata"],
    "ingredients": [
      "Pasta de vegetales para 2 personas",
      "1 aguacate",
      "Salmón ahumado",
      "Nueces",
      "Albahaca fresca",
      "1 burrata",
      "Aceite de oliva",
      "Vinagre",
      "Miel",
      "Sal"
    ],
    "steps": [
      "Cuece la pasta con un poco de sal y déjala enfriar.",
      "Añade el aguacate, el salmón ahumado, las nueces y la albahaca.",
      "Coloca la burrata sobre la ensalada.",
      "Mezcla aceite, vinagre y miel y reparte el aliño por encima."
    ],
    "tip": "Enfría la pasta antes de añadir el salmón y la burrata."
  },
  {
    "title": "Burrata con tomate",
    "category": "Ensaladas",
    "time": "10 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": ["burrata", "tomate", "rápida"],
    "ingredients": [
      "1 burrata",
      "2 tomates maduros",
      "Hojas de albahaca",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta, opcional"
    ],
    "steps": [
      "Lava y corta los tomates en rodajas o gajos.",
      "Colócalos en una fuente y añade un poco de sal.",
      "Pon la burrata en el centro.",
      "Añade albahaca y termina con aceite de oliva.",
      "Abre la burrata justo antes de servir."
    ],
    "tip": "Sírvela con pan tostado para aprovechar el jugo del tomate y la burrata."
  },
  {
    "title": "Merluza en Air Fryer",
    "category": "Air Fryer",
    "time": "18 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": ["air fryer", "merluza", "pescado"],
    "ingredients": [
      "2 lomos o rodajas de merluza",
      "Aceite de oliva",
      "Sal",
      "Pimienta",
      "Limón"
    ],
    "steps": [
      "Seca bien la merluza y sazónala.",
      "Pincélala ligeramente con aceite.",
      "Colócala en la cesta sin amontonar.",
      "Cocina a 190 ºC durante 12-18 minutos, según el grosor.",
      "Comprueba que se separa fácilmente en lascas y sirve con limón."
    ],
    "tip": "Si está congelada, añade unos minutos y revisa el centro antes de servir."
  },
  {
    "title": "Arroz con pollo",
    "category": "Carnes",
    "time": "40 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": ["arroz", "pollo", "plato completo"],
    "ingredients": [
      "200 g de arroz",
      "300 g de pollo troceado",
      "1/2 cebolla",
      "1/2 pimiento",
      "1 diente de ajo",
      "1 tomate rallado",
      "500 ml de caldo de pollo",
      "Aceite de oliva",
      "Sal",
      "Pimentón o azafrán"
    ],
    "steps": [
      "Dora el pollo con un poco de aceite y resérvalo.",
      "Pocha la cebolla, el pimiento y el ajo.",
      "Añade el tomate rallado y cocina unos minutos.",
      "Incorpora el arroz, el pollo y el pimentón o azafrán.",
      "Vierte el caldo caliente y cocina unos 18 minutos.",
      "Deja reposar 5 minutos antes de servir."
    ],
    "tip": "No remuevas demasiado el arroz durante la cocción para que quede suelto."
  },
  {
    "title": "Sándwich de mayonesa y espárragos",
    "category": "Cenas rápidas",
    "time": "10 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": ["sándwich", "espárragos", "rápida"],
    "ingredients": [
      "4 rebanadas de pan de molde",
      "8-10 espárragos blancos en conserva",
      "Mayonesa",
      "Sal y pimienta, opcional"
    ],
    "steps": [
      "Escurre y seca bien los espárragos.",
      "Unta las rebanadas de pan con mayonesa.",
      "Coloca los espárragos sobre dos rebanadas.",
      "Añade un poco de pimienta si te gusta.",
      "Cierra los sándwiches y córtalos por la mitad."
    ],
    "tip": "Déjalo unos minutos en la nevera antes de servir para que quede más firme."
  },
  {
    "title": "Sardinas a la plancha sin olores",
    "category": "Pescados",
    "time": "12 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": ["sardinas", "plancha", "sin olores"],
    "ingredients": [
      "10 sardinas",
      "2 hojas de papel de horno",
      "Sal"
    ],
    "steps": [
      "Reparte cinco sardinas sobre cada hoja de papel de horno.",
      "Añade sal por encima.",
      "Cierra cada papel formando un paquete bien doblado, como un sobre.",
      "Coloca los paquetes directamente sobre una sartén caliente.",
      "Cocina 4 minutos por cada lado.",
      "Abre con cuidado y sirve inmediatamente."
    ],
    "tip": "No necesitan aceite; el paquete reduce mucho el olor y mantiene las sardinas jugosas."
  },
  {
    "title": "Tomate relleno de burrata",
    "category": "Ensaladas",
    "time": "15 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": ["tomate", "burrata", "entrante"],
    "ingredients": [
      "2 tomates grandes y firmes",
      "1 burrata",
      "Hojas de albahaca",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta",
      "Crema de vinagre balsámico, opcional"
    ],
    "steps": [
      "Lava los tomates y corta una tapa en la parte superior.",
      "Vacía parte de la pulpa con una cucharilla y deja los tomates boca abajo unos minutos.",
      "Escurre la burrata y repártela dentro de los tomates.",
      "Añade albahaca picada, sal, pimienta y un hilo de aceite.",
      "Coloca las tapas y termina con crema balsámica si te gusta."
    ],
    "tip": "Sírvelo frío y acompáñalo con pan tostado."
  },
  {
    "title": "Sándwich japonés de huevo",
    "category": "Cenas rápidas",
    "time": "20 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": ["sándwich", "huevo", "japonés"],
    "ingredients": [
      "4 rebanadas de pan de molde tierno o brioche",
      "4 huevos",
      "3 cucharadas de mayonesa",
      "1 cucharadita de mostaza suave, opcional",
      "Sal",
      "Pimienta",
      "Mantequilla, opcional"
    ],
    "steps": [
      "Cuece los huevos durante 10 minutos y enfríalos.",
      "Pela los huevos y separa dos yemas.",
      "Machaca el resto con mayonesa, mostaza, sal y pimienta.",
      "Unta ligeramente el pan con mantequilla si lo deseas.",
      "Reparte la mezcla y coloca las yemas enteras en el centro.",
      "Cierra, presiona suavemente y corta cada sándwich por la mitad."
    ],
    "tip": "Déjalo 10 minutos en la nevera antes de cortarlo para que quede más limpio."
  },
  {
    "title": "Sándwich de salmón y mozzarella",
    "category": "Cenas rápidas",
    "time": "10 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": ["sándwich", "salmón", "mozzarella"],
    "ingredients": [
      "4 rebanadas de pan de brioche o pan de molde",
      "100 g de salmón ahumado",
      "1 bola de mozzarella",
      "Queso crema",
      "Rúcula o canónigos",
      "Pimienta",
      "Unas gotas de limón"
    ],
    "steps": [
      "Unta las rebanadas con una capa fina de queso crema.",
      "Reparte la rúcula o los canónigos.",
      "Añade la mozzarella bien escurrida y cortada en rodajas.",
      "Coloca el salmón ahumado encima.",
      "Añade pimienta y unas gotas de limón.",
      "Cierra los sándwiches y córtalos por la mitad."
    ],
    "tip": "Seca bien la mozzarella para evitar que el pan se humedezca."
  },
  {
    "title": "Rape guisado con pimientos, puerro y patatas",
    "category": "Pescados",
    "time": "50 min",
    "servings": "4 personas",
    "difficulty": "Media",
    "tags": ["rape", "guiso", "patatas"],
    "ingredients": [
      "800 g de rape limpio en trozos",
      "3 patatas medianas",
      "1 cebolla",
      "1 puerro",
      "1 pimiento rojo",
      "1 pimiento verde",
      "2 dientes de ajo",
      "200 g de tomate triturado",
      "750 ml de caldo de pescado",
      "100 ml de vino blanco",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta",
      "Pimentón"
    ],
    "steps": [
      "Pocha la cebolla, el puerro, los pimientos y el ajo con aceite.",
      "Añade el tomate y cocina unos 10 minutos.",
      "Incorpora el pimentón y el vino blanco y deja que reduzca.",
      "Añade las patatas chascadas y el caldo de pescado.",
      "Cuece durante 20-25 minutos, hasta que las patatas estén casi tiernas.",
      "Incorpora el rape salpimentado y cocina 6-8 minutos más.",
      "Deja reposar unos minutos antes de servir."
    ],
    "tip": "Se puede preparar el día anterior; añade el rape al recalentar para que no se pase."
  },
  {
    "title": "Lentejas en Crock-Pot",
    "category": "Guisos",
    "time": "7 h",
    "servings": "4 personas",
    "difficulty": "Fácil",
    "tags": ["crock-pot", "lentejas", "guiso"],
    "ingredients": [
      "300 g de lentejas pardinas",
      "1 chorizo",
      "1 cebolla",
      "1 zanahoria",
      "1 patata",
      "1 pimiento verde",
      "2 dientes de ajo",
      "1 tomate rallado",
      "1 cucharadita de pimentón",
      "1 hoja de laurel",
      "1,2 litros de caldo de pollo o verduras",
      "Aceite de oliva",
      "Sal"
    ],
    "steps": [
      "Lava las lentejas y colócalas en la Crock-Pot.",
      "Añade la cebolla, la zanahoria, la patata, el pimiento, el ajo y el tomate.",
      "Incorpora el chorizo, el pimentón, el laurel y un chorrito de aceite.",
      "Cubre con el caldo y mezcla suavemente.",
      "Cocina 7 horas en temperatura baja o 4 horas en alta.",
      "Comprueba el punto de sal y la cantidad de caldo antes de servir."
    ],
    "tip": "Si quedan secas, añade caldo caliente poco a poco y cocina 20-30 minutos más."
  },
  {
    "title": "Espinacas con garbanzos en Air Fryer",
    "category": "Air Fryer",
    "time": "25 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": ["air fryer", "espinacas", "garbanzos"],
    "ingredients": [
      "400 g de garbanzos cocidos",
      "250 g de espinacas",
      "2 dientes de ajo",
      "1 cucharadita de pimentón",
      "1/2 cucharadita de comino, opcional",
      "Aceite de oliva",
      "Sal",
      "2 huevos, opcional"
    ],
    "steps": [
      "Lava y escurre bien los garbanzos.",
      "Mezcla los garbanzos con aceite, ajo picado, pimentón, comino y sal.",
      "Cocina en la Air Fryer a 190 ºC durante 10 minutos.",
      "Añade las espinacas y mezcla con cuidado.",
      "Cocina 6-8 minutos más, removiendo una vez.",
      "Si deseas añadir huevo, haz dos huecos, incorpora los huevos y cocina 4-6 minutos más."
    ],
    "tip": "Añade las espinacas en dos tandas si ocupan demasiado volumen al principio."
  },
  {
    "title": "Canelones caseros",
    "category": "Pastas",
    "time": "1 h 15 min",
    "servings": "4 personas",
    "difficulty": "Media",
    "tags": ["canelones", "pasta", "horno"],
    "ingredients": [
      "16 placas de canelones",
      "500 g de carne picada",
      "1 cebolla",
      "2 dientes de ajo",
      "200 g de tomate triturado",
      "Aceite de oliva",
      "Sal",
      "Pimienta",
      "500 ml de bechamel",
      "Queso rallado"
    ],
    "steps": [
      "Cuece o hidrata las placas de canelones siguiendo las instrucciones del envase.",
      "Pocha la cebolla y el ajo con aceite.",
      "Añade la carne picada, salpimienta y cocina hasta que se dore.",
      "Incorpora el tomate y cocina 10 minutos.",
      "Rellena las placas y colócalas en una fuente de horno.",
      "Cubre con bechamel y queso rallado.",
      "Hornea a 200 ºC durante 20 minutos y gratina al final."
    ],
    "tip": "Puedes prepararlos el día anterior y hornearlos justo antes de servir."
  },
  {
    "title": "Alcachofas al Pedro Ximénez",
    "category": "Verduras",
    "time": "35 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": ["alcachofas", "pedro ximénez", "guarnición"],
    "ingredients": [
      "6 alcachofas",
      "1 cebolla pequeña",
      "2 dientes de ajo",
      "75 ml de vino Pedro Ximénez",
      "150 ml de caldo de verduras",
      "Aceite de oliva",
      "Sal",
      "Pimienta",
      "Taquitos de jamón, opcional"
    ],
    "steps": [
      "Limpia las alcachofas, córtalas por la mitad y resérvalas en agua con limón.",
      "Pocha la cebolla y el ajo con aceite.",
      "Añade las alcachofas escurridas y saltéalas unos minutos.",
      "Incorpora el Pedro Ximénez y deja reducir 2-3 minutos.",
      "Añade el caldo, salpimienta y cocina tapado durante 20 minutos.",
      "Destapa y deja reducir la salsa.",
      "Añade jamón al final si lo deseas."
    ],
    "tip": "La salsa debe quedar brillante y ligeramente espesa, no demasiado dulce."
  },
  {
  "title": "Revuelto de champiñones y jamón",
  "category": "Huevos",
  "time": "20 min",
  "servings": "4 personas",
  "difficulty": "Fácil",
  "tags": [
    "revuelto",
    "champiñones",
    "jamón"
  ],
  "ingredients": [
    "400 g de champiñones laminados",
    "4 huevos grandes",
    "150 g de jamón picado",
    "Aceite de oliva",
    "Sal",
    "Perejil picado"
  ],
  "steps": [
    "Calienta un poco de aceite en una sartén amplia.",
    "Añade los champiñones y cocínalos primero a fuego fuerte para que pierdan el agua.",
    "Baja a fuego medio y continúa hasta que estén bien pochados.",
    "Incorpora el jamón picado y saltéalo brevemente con los champiñones.",
    "Bate los huevos con una pizca de sal y viértelos en la sartén.",
    "Remueve y mezcla hasta que el huevo quede cuajado pero jugoso.",
    "Sirve en una fuente y termina con un poco de perejil picado."
  ],
  "tip": "Retira el revuelto del fuego un poco antes de que el huevo esté completamente cuajado; terminará de hacerse con el calor residual."
},
  {
  "title": "Dorada al horno",
  "category": "Pescados",
  "time": "30 min",
  "servings": "2 personas",
  "difficulty": "Fácil",
  "tags": [
    "dorada",
    "horno",
    "pescado"
  ],
  "ingredients": [
    "1 dorada de unos 800 g, limpia y abierta",
    "2 patatas medianas",
    "1 cebolla",
    "1 limón",
    "100 ml de vino blanco",
    "Aceite de oliva virgen extra",
    "Sal",
    "Pimienta",
    "Perejil"
  ],
  "steps": [
    "Precalienta el horno a 200 ºC.",
    "Corta las patatas y la cebolla en rodajas finas, colócalas en una fuente, añade aceite y sal, y hornéalas 15 minutos.",
    "Salpimienta la dorada y haz dos cortes en el lomo.",
    "Colócala sobre las patatas, introduce unas rodajas de limón en los cortes y añade el vino blanco.",
    "Hornea entre 15 y 18 minutos, según el tamaño del pescado.",
    "Sirve con el jugo de la fuente y perejil picado."
  ],
  "tip": "La dorada estará lista cuando la carne se separe fácilmente de la espina; evita cocinarla de más para que no quede seca."
},
  {
  "title": "Lubina al horno",
  "category": "Pescados",
  "time": "30 min",
  "servings": "2 personas",
  "difficulty": "Fácil",
  "tags": [
    "lubina",
    "horno",
    "pescado"
  ],
  "ingredients": [
    "1 lubina de unos 800 g, limpia",
    "2 patatas medianas",
    "1 cebolla",
    "2 dientes de ajo",
    "100 ml de vino blanco",
    "1 limón",
    "Aceite de oliva virgen extra",
    "Sal",
    "Pimienta"
  ],
  "steps": [
    "Precalienta el horno a 200 ºC.",
    "Corta las patatas y la cebolla finas, sazónalas y hornéalas con aceite durante 15 minutos.",
    "Salpimienta la lubina y colócala encima de las patatas.",
    "Añade el ajo laminado, el vino blanco y unas rodajas de limón.",
    "Hornea durante 15-18 minutos, dependiendo del tamaño.",
    "Riega la lubina con el jugo de la fuente antes de servir."
  ],
  "tip": "Puedes pedir en la pescadería que la abran a la espalda; en ese caso necesitará unos minutos menos de horno."
},
  {
  "title": "Ensalada de tomate, aguacate y langostinos",
  "category": "Ensaladas",
  "time": "15 min",
  "servings": "2 personas",
  "difficulty": "Muy fácil",
  "tags": [
    "ensalada",
    "aguacate",
    "langostinos",
    "verano"
  ],
  "ingredients": [
    "2 tomates maduros",
    "1 aguacate",
    "200 g de langostinos cocidos y pelados",
    "1/4 de cebolla morada, opcional",
    "Aceite de oliva virgen extra",
    "Zumo de 1/2 lima",
    "1 cucharadita de miel",
    "1 cucharadita de mostaza suave",
    "Sal",
    "Pimienta"
  ],
  "steps": [
    "Corta los tomates y el aguacate en trozos y colócalos en una fuente.",
    "Añade los langostinos y la cebolla morada cortada muy fina.",
    "Mezcla el aceite, la lima, la miel, la mostaza, la sal y la pimienta.",
    "Aliña la ensalada justo antes de servir y mezcla con cuidado."
  ],
  "tip": "Añade el aguacate al final y mézclalo suavemente para que mantenga su forma."
},
  {
  "title": "Ensalada de burrata, tomate y fresas",
  "category": "Ensaladas",
  "time": "10 min",
  "servings": "2 personas",
  "difficulty": "Muy fácil",
  "tags": [
    "burrata",
    "fresas",
    "tomate",
    "ensalada"
  ],
  "ingredients": [
    "1 burrata",
    "2 tomates maduros",
    "150 g de fresas",
    "Un puñado de rúcula, opcional",
    "Aceite de oliva virgen extra",
    "Crema de vinagre balsámico",
    "Sal",
    "Pimienta",
    "Hojas de albahaca"
  ],
  "steps": [
    "Corta los tomates y las fresas y distribúyelos en una fuente.",
    "Añade la rúcula si la utilizas.",
    "Coloca la burrata en el centro y ábrela ligeramente.",
    "Aliña con aceite, sal, pimienta y unas gotas de crema balsámica.",
    "Termina con hojas de albahaca y sirve inmediatamente."
  ],
  "tip": "Saca la burrata del frigorífico 15 minutos antes para que esté más cremosa y sabrosa."
},
  {
  "title": "Ensalada de burrata, tomate, aguacate y pistachos",
  "category": "Ensaladas",
  "time": "10 min",
  "servings": "2 personas",
  "difficulty": "Muy fácil",
  "tags": [
    "burrata",
    "aguacate",
    "pistachos",
    "ensalada"
  ],
  "ingredients": [
    "1 burrata",
    "2 tomates maduros",
    "1 aguacate",
    "30 g de pistachos pelados",
    "Aceite de oliva virgen extra",
    "Vinagre balsámico",
    "Sal",
    "Pimienta",
    "Albahaca, opcional"
  ],
  "steps": [
    "Corta los tomates y el aguacate y colócalos en una fuente.",
    "Pon la burrata en el centro.",
    "Pica ligeramente los pistachos y repártelos por encima.",
    "Aliña con aceite, vinagre balsámico, sal y pimienta.",
    "Añade albahaca y sirve."
  ],
  "tip": "Los pistachos aportan el punto crujiente; añádelos justo antes de servir."
},
  {
  "title": "Calabacín con miel y burrata",
  "category": "Verduras",
  "time": "25 min",
  "servings": "2 personas",
  "difficulty": "Fácil",
  "tags": [
    "calabacín",
    "burrata",
    "miel",
    "horno"
  ],
  "ingredients": [
    "2 calabacines medianos",
    "1 burrata",
    "1 cucharada de miel",
    "Aceite de oliva virgen extra",
    "Crema de vinagre balsámico",
    "Sal",
    "Pimienta",
    "Un puñado de nueces o pistachos, opcional"
  ],
  "steps": [
    "Precalienta el horno a 200 ºC.",
    "Corta los calabacines en rodajas o tiras, colócalos en una fuente y añade aceite, sal y pimienta.",
    "Hornea durante 18-20 minutos, hasta que estén tiernos y ligeramente dorados.",
    "Coloca la burrata sobre el calabacín caliente.",
    "Añade la miel en hilo y unas gotas de crema balsámica.",
    "Termina con frutos secos si los utilizas y sirve."
  ],
  "tip": "También puedes preparar el calabacín en la Air Fryer a 190 ºC durante 12-15 minutos."
},
  {
  "title": "Patatas guisadas con ternera",
  "category": "Carnes",
  "time": "1 h 15 min",
  "servings": "4 personas",
  "difficulty": "Media",
  "tags": [
    "ternera",
    "patatas",
    "guiso",
    "tradicional"
  ],
  "ingredients": [
    "700 g de ternera para guisar",
    "5 patatas medianas",
    "1 cebolla",
    "2 dientes de ajo",
    "1 pimiento verde",
    "2 tomates maduros rallados",
    "100 ml de vino blanco",
    "750 ml de caldo de carne",
    "1 hoja de laurel",
    "1 cucharadita de pimentón dulce",
    "Aceite de oliva",
    "Sal",
    "Pimienta"
  ],
  "steps": [
    "Salpimienta la carne y dórala en una cazuela con aceite; retírala y reserva.",
    "Pocha la cebolla, el ajo y el pimiento picados.",
    "Añade el tomate y cocina 8-10 minutos.",
    "Incorpora el pimentón, mezcla rápidamente y vierte el vino blanco.",
    "Devuelve la carne a la cazuela, añade el laurel y el caldo, y cocina tapado 35 minutos.",
    "Chasca las patatas, añádelas y cocina otros 25 minutos, hasta que estén tiernas.",
    "Rectifica de sal y deja reposar 10 minutos antes de servir."
  ],
  "tip": "Chascar las patatas ayuda a que el caldo espese de forma natural."
},
  {
  "title": "Carrilleras de cerdo en Crock-Pot",
  "category": "Crock-Pot",
  "time": "8 h 30 min",
  "servings": "4 personas",
  "difficulty": "Fácil",
  "tags": [
    "carrilleras",
    "cerdo",
    "crock-pot",
    "vino tinto"
  ],
  "ingredients": [
    "1-1,2 kg de carrilleras de cerdo limpias",
    "1 cebolla",
    "2 zanahorias",
    "3 dientes de ajo",
    "200-250 ml de vino tinto",
    "200 ml de caldo de carne",
    "1 hoja de laurel",
    "Aceite de oliva",
    "Sal",
    "Pimienta",
    "Harina, opcional"
  ],
  "steps": [
    "Salpimienta las carrilleras y pásalas ligeramente por harina si lo deseas.",
    "Dóralas en una sartén con aceite y colócalas en la Crock-Pot.",
    "En la misma sartén, pocha la cebolla, la zanahoria y el ajo.",
    "Añade el vino tinto y deja que hierva 2-3 minutos.",
    "Vierte todo en la Crock-Pot, incorpora el caldo y el laurel.",
    "Cocina 8 horas en LOW o 4-5 horas en HIGH.",
    "Retira las carrilleras, tritura la salsa y redúcela en un cazo si quieres que quede más espesa."
  ],
  "tip": "Quedan aún mejor de un día para otro, una vez reposadas en su salsa."
},
  {
  "title": "Pollo al ajillo en Crock-Pot",
  "category": "Crock-Pot",
  "time": "5 h 20 min",
  "servings": "4 personas",
  "difficulty": "Fácil",
  "tags": [
    "pollo",
    "ajo",
    "crock-pot"
  ],
  "ingredients": [
    "1,2 kg de pollo troceado",
    "8 dientes de ajo",
    "150 ml de vino blanco",
    "100 ml de caldo de pollo",
    "1 hoja de laurel",
    "1 cucharadita de tomillo",
    "Aceite de oliva",
    "Sal",
    "Pimienta",
    "Perejil picado"
  ],
  "steps": [
    "Salpimienta el pollo y dóralo en una sartén con un poco de aceite.",
    "Pásalo a la Crock-Pot.",
    "Dora ligeramente los ajos enteros y machacados en la misma sartén.",
    "Añade el vino blanco, deja hervir 2 minutos y vierte todo sobre el pollo.",
    "Incorpora el caldo, el laurel y el tomillo.",
    "Cocina 5-6 horas en LOW o 3 horas en HIGH.",
    "Espolvorea con perejil antes de servir."
  ],
  "tip": "Para una piel más crujiente, pasa el pollo unos minutos bajo el gratinador al terminar."
},
  {
  "title": "Patatas con choco en Crock-Pot",
  "category": "Crock-Pot",
  "time": "6 h 30 min",
  "servings": "4 personas",
  "difficulty": "Fácil",
  "tags": [
    "choco",
    "patatas",
    "crock-pot",
    "guiso"
  ],
  "ingredients": [
    "700-800 g de choco limpio y troceado",
    "4-5 patatas medianas",
    "1 cebolla",
    "2 dientes de ajo",
    "1 pimiento verde",
    "2 tomates maduros rallados",
    "100 ml de vino blanco",
    "400-500 ml de caldo de pescado o agua",
    "1 hoja de laurel",
    "1 cucharadita de pimentón dulce",
    "3-4 cucharadas de aceite de oliva",
    "Sal"
  ],
  "steps": [
    "Pocha en una sartén la cebolla, el ajo y el pimiento picados.",
    "Añade el tomate y cocina hasta que el sofrito esté concentrado.",
    "Incorpora el pimentón, mezcla y vierte el vino blanco; deja hervir 2 minutos.",
    "Pasa el sofrito a la Crock-Pot y añade el choco, las patatas chascadas, el laurel y el caldo.",
    "Cocina 6-7 horas en LOW o 3 horas y media-4 horas en HIGH.",
    "Evita remover durante la cocción para que las patatas no se rompan.",
    "Deja reposar 15-20 minutos antes de servir."
  ],
  "tip": "Añade solo el caldo necesario para casi cubrir los ingredientes; la Crock-Pot apenas pierde líquido."
},
  {
  "title": "Espárragos blancos gratinados",
  "category": "Verduras",
  "time": "20 min",
  "servings": "2 personas",
  "difficulty": "Fácil",
  "tags": [
    "espárragos",
    "gratinado",
    "queso"
  ],
  "ingredients": [
    "1 frasco grande de espárragos blancos gruesos",
    "4 lonchas de jamón cocido o pavo, opcional",
    "200 ml de bechamel",
    "50 g de queso rallado",
    "Sal",
    "Pimienta",
    "Nuez moscada"
  ],
  "steps": [
    "Escurre muy bien los espárragos y sécalos con papel de cocina.",
    "Envuélvelos con jamón cocido o pavo si lo deseas y colócalos en una fuente.",
    "Cubre con la bechamel y sazona con pimienta y una pizca de nuez moscada.",
    "Espolvorea el queso rallado.",
    "Gratina a 220 ºC durante 8-10 minutos, hasta que la superficie esté dorada."
  ],
  "tip": "Escurrir bien los espárragos evita que la bechamel quede aguada."
},
  {
  "title": "Paté de salmón y langostinos",
  "category": "Entrantes",
  "time": "15 min",
  "servings": "6 personas",
  "difficulty": "Muy fácil",
  "tags": [
    "paté",
    "salmón",
    "langostinos",
    "aperitivo"
  ],
  "ingredients": [
    "150 g de salmón ahumado",
    "150 g de langostinos cocidos y pelados",
    "200 g de queso crema",
    "1 cucharada de zumo de limón",
    "1 cucharadita de eneldo, opcional",
    "Pimienta",
    "Unas gotas de salsa picante, opcional"
  ],
  "steps": [
    "Reserva un poco de salmón o langostino para decorar.",
    "Pon el resto de los ingredientes en una batidora o procesador.",
    "Tritura hasta obtener una crema homogénea, dejando algo de textura si lo prefieres.",
    "Prueba y ajusta de limón y pimienta.",
    "Guarda en el frigorífico al menos 1 hora antes de servir.",
    "Decora y acompaña con tostadas o pan crujiente."
  ],
  "tip": "No añadas sal hasta probarlo, porque el salmón ahumado ya aporta bastante."
}
];
