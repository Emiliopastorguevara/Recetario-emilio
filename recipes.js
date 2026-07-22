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
  },
  {
    "title": "Ensalada de melocotón",
    "category": "Ensaladas",
    "time": "10 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": [
      "ensalada",
      "melocotón",
      "verano"
    ],
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
    "tags": [
      "ensalada",
      "higos",
      "queso de cabra"
    ],
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
    "tags": [
      "ensalada",
      "pimientos",
      "langostinos"
    ],
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
    "tags": [
      "pasta",
      "salmón",
      "burrata"
    ],
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
    "tags": [
      "burrata",
      "tomate",
      "rápida"
    ],
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
    "tags": [
      "air fryer",
      "merluza",
      "pescado"
    ],
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
    "category": "Arroces",
    "time": "40 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": [
      "arroz",
      "pollo",
      "plato completo"
    ],
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
    "category": "Sándwich",
    "time": "10 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": [
      "sándwich",
      "espárragos",
      "rápida"
    ],
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
    "tags": [
      "sardinas",
      "plancha",
      "sin olores"
    ],
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
    "tags": [
      "tomate",
      "burrata",
      "entrante"
    ],
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
    "category": "Sándwich",
    "time": "20 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": [
      "sándwich",
      "huevo",
      "japonés"
    ],
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
    "category": "Sándwich",
    "time": "10 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": [
      "sándwich",
      "salmón",
      "mozzarella"
    ],
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
    "tags": [
      "rape",
      "guiso",
      "patatas"
    ],
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
    "tags": [
      "crock-pot",
      "lentejas",
      "guiso"
    ],
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
    "tags": [
      "air fryer",
      "espinacas",
      "garbanzos"
    ],
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
    "tags": [
      "canelones",
      "pasta",
      "horno"
    ],
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
    "tags": [
      "alcachofas",
      "pedro ximénez",
      "guarnición"
    ],
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
    "title": "Calabacín al horno con miel y burrata",
    "category": "Verduras",
    "time": "35 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": [
      "calabacín",
      "horno",
      "burrata"
    ],
    "ingredients": [
      "2 calabacines medianos",
      "1 burrata",
      "1 cucharada de miel",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta negra",
      "Tomillo u orégano, opcional",
      "Frutos secos picados, opcional"
    ],
    "steps": [
      "Precalienta el horno a 200 ºC.",
      "Corta los calabacines en rodajas o tiras gruesas y colócalos en una bandeja.",
      "Aliña con aceite, sal, pimienta y las hierbas.",
      "Hornea durante 20-25 minutos, hasta que estén tiernos y dorados.",
      "Coloca la burrata sobre el calabacín caliente.",
      "Añade la miel en un hilo fino y termina con frutos secos si los utilizas."
    ],
    "tip": "Escurre bien la burrata y añade la miel justo antes de servir para mantener el contraste entre dulce y salado."
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
  },
  {
    "title": "Fusilli marinera con sepia, calamar y langostinos",
    "category": "Pastas",
    "time": "40 min",
    "servings": "4 personas",
    "difficulty": "Media",
    "tags": [
      "pasta",
      "marisco",
      "sepia",
      "calamar",
      "langostinos"
    ],
    "ingredients": [
      "500 g de fusilli",
      "300 g de sepia limpia",
      "300 g de calamar limpio",
      "12-16 langostinos medianos (350-400 g)",
      "2-3 dientes de ajo",
      "150 ml de vino blanco seco",
      "200 g de tomate triturado, opcional",
      "4 cucharadas de aceite de oliva virgen extra",
      "1 puñado de perejil fresco picado",
      "Sal y pimienta",
      "1 guindilla pequeña, opcional"
    ],
    "steps": [
      "Corta la sepia y el calamar en trozos regulares y seca bien el marisco.",
      "Calienta el aceite y dora ligeramente los ajos laminados con la guindilla, si la usas.",
      "Añade la sepia y el calamar y saltéalos a fuego vivo hasta que pierdan el agua y empiecen a dorarse.",
      "Incorpora el vino blanco y deja reducir. Añade el tomate triturado si quieres una salsa más ligada y cocina unos minutos.",
      "Cuece los fusilli en agua con sal hasta que queden al dente y reserva un poco del agua de cocción.",
      "Añade los langostinos a la sartén y cocínalos solo 2-3 minutos.",
      "Mezcla la pasta con la salsa marinera, ajusta con un poco del agua reservada y termina con perejil fresco."
    ],
    "tip": "Para 2 personas, utiliza la mitad de todos los ingredientes. No cocines demasiado los langostinos para que queden jugosos."
  },
  {
    "title": "Pasta con tomate cherry y nata",
    "category": "Pastas",
    "time": "20 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": [
      "pasta",
      "tomate cherry",
      "nata",
      "rápida"
    ],
    "ingredients": [
      "200 g de pasta",
      "250 g de tomates cherry",
      "150 ml de nata para cocinar",
      "1 diente de ajo",
      "2 cucharadas de aceite de oliva virgen extra",
      "Sal y pimienta",
      "Queso parmesano rallado, opcional",
      "Albahaca fresca, opcional"
    ],
    "steps": [
      "Cuece la pasta en abundante agua con sal hasta que quede al dente y reserva un poco del agua de cocción.",
      "Saltea el ajo picado en el aceite sin dejar que se queme.",
      "Añade los tomates cherry partidos y cocínalos hasta que se ablanden y suelten su jugo.",
      "Incorpora la nata, salpimenta y cocina a fuego suave durante 3-4 minutos.",
      "Añade la pasta escurrida y mezcla. Ajusta la textura con un poco del agua de cocción.",
      "Sirve con parmesano y albahaca, si te apetece."
    ],
    "tip": "El agua de cocción ayuda a que la salsa quede más cremosa y ligada sin añadir más nata."
  },
  {
    "title": "Calamares en su tinta en Crock-Pot",
    "category": "Crock-Pot",
    "time": "5 h 25 min",
    "servings": "4 personas",
    "difficulty": "Fácil",
    "tags": [
      "calamares",
      "tinta",
      "crock-pot",
      "guiso"
    ],
    "ingredients": [
      "1,2 kg de calamar limpio",
      "2 cebollas",
      "2 dientes de ajo",
      "150 g de tomate triturado",
      "150 ml de vino blanco",
      "2-3 sobres de tinta de calamar",
      "3 cucharadas de aceite de oliva virgen extra",
      "1 hoja de laurel",
      "Sal y pimienta"
    ],
    "steps": [
      "Corta los calamares en anillas o trozos y sécalos bien.",
      "Pocha la cebolla y el ajo con el aceite hasta que estén blandos.",
      "Añade el tomate y cocina unos minutos. Incorpora el vino y deja que reduzca ligeramente.",
      "Disuelve la tinta en un poco de líquido e incorpórala al sofrito.",
      "Pasa todo a la Crock-Pot, añade los calamares y el laurel y mezcla bien.",
      "Cocina 5 horas en LOW. Ajusta de sal y pimienta al final."
    ],
    "tip": "Quedan especialmente buenos acompañados de arroz blanco. Si la salsa está muy líquida, redúcela unos minutos en una cazuela al terminar."
  },
  {
    "title": "Manitas de cerdo en Crock-Pot",
    "category": "Crock-Pot",
    "time": "9 h",
    "servings": "4 personas",
    "difficulty": "Media",
    "tags": [
      "manitas",
      "cerdo",
      "crock-pot",
      "tradicional"
    ],
    "ingredients": [
      "1,5 kg de manitas de cerdo limpias y partidas",
      "1 cebolla",
      "2 zanahorias",
      "3 dientes de ajo",
      "200 g de tomate rallado o triturado",
      "1 hoja de laurel",
      "1 cucharadita de pimentón dulce",
      "150 ml de vino blanco",
      "250 ml de caldo",
      "Aceite de oliva virgen extra",
      "Sal y pimienta"
    ],
    "steps": [
      "Escalda las manitas unos minutos, escúrrelas y enjuágalas.",
      "Pocha la cebolla, la zanahoria y el ajo con un poco de aceite.",
      "Añade el tomate y cocina hasta formar un buen sofrito.",
      "Retira del fuego, incorpora el pimentón y mezcla. Añade el vino y deja reducir unos minutos.",
      "Coloca las manitas en la Crock-Pot, añade el sofrito, el laurel y el caldo.",
      "Cocina 8-9 horas en LOW o 5-6 horas en HIGH, hasta que estén muy tiernas.",
      "Rectifica de sal y deja reposar antes de servir."
    ],
    "tip": "Están todavía mejores al día siguiente. Puedes añadir una pizca de pimentón picante si te gusta un toque más intenso."
  },
  {
    "title": "Sándwich de sardinas y aguacate en pan brioche",
    "category": "Sándwich",
    "time": "10 min",
    "servings": "1 persona",
    "difficulty": "Fácil",
    "tags": [
      "sándwich",
      "sardinas",
      "aguacate",
      "brioche"
    ],
    "ingredients": [
      "2 rebanadas de pan de molde tipo brioche",
      "1 lata pequeña de sardinas en aceite de oliva",
      "1/2 aguacate maduro",
      "2 rodajas finas de tomate",
      "Unas gotas de limón",
      "Sal y pimienta",
      "1 cucharadita de mayonesa",
      "Rúcula o canónigos, opcional"
    ],
    "steps": [
      "Tuesta ligeramente el pan brioche a 160-170 ºC durante 2-3 minutos.",
      "Machaca el aguacate con unas gotas de limón, sal y pimienta.",
      "Unta una rebanada con el aguacate y la otra con una capa fina de mayonesa.",
      "Añade las sardinas bien escurridas, el tomate bien seco y las hojas verdes, si las usas.",
      "Cierra el sándwich y dale un último toque de 1-2 minutos a 160-170 ºC."
    ],
    "tip": "Usa poca mayonesa y seca bien el tomate para que el pan brioche no se humedezca."
  },
  {
    "title": "Espinacas con garbanzos (tradicional andaluza)",
    "category": "Legumbres",
    "time": "35 min",
    "servings": "4 personas",
    "difficulty": "Fácil",
    "tags": [
      "espinacas",
      "garbanzos",
      "andaluza"
    ],
    "ingredients": [
      "500 g de espinacas frescas o congeladas",
      "400 g de garbanzos cocidos",
      "3 dientes de ajo",
      "2 rebanadas de pan",
      "1 cucharadita de pimentón dulce",
      "1 cucharadita de comino molido",
      "1 cucharada de vinagre",
      "Aceite de oliva virgen extra",
      "Sal",
      "Un poco de agua"
    ],
    "steps": [
      "Cuece o saltea las espinacas y escúrrelas bien.",
      "Fríe los ajos y el pan en aceite hasta que estén dorados.",
      "Maja el pan y los ajos con el comino, el vinagre, la sal y un poco de agua.",
      "Retira la sartén del fuego, añade el pimentón y remueve para que no se queme.",
      "Incorpora las espinacas, los garbanzos y el majado.",
      "Cocina todo junto 10-12 minutos, removiendo, hasta que quede bien ligado."
    ],
    "tip": "El reposo mejora el sabor. Sirve con pan y ajusta el vinagre al final."
  },
  {
    "title": "Alcachofas de bote con jamón y huevo (Air Fryer)",
    "category": "Air Fryer",
    "time": "20 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": [
      "alcachofas",
      "jamón",
      "huevo"
    ],
    "ingredients": [
      "1 bote de corazones de alcachofa",
      "100 g de jamón serrano en taquitos",
      "2 huevos",
      "1 cucharada de aceite de oliva",
      "Pimienta negra",
      "Sal, solo si hace falta"
    ],
    "steps": [
      "Escurre y seca muy bien las alcachofas.",
      "Mézclalas con el aceite y colócalas en una fuente apta para Air Fryer.",
      "Cocina a 190 ºC durante 8 minutos.",
      "Añade el jamón y cocina 3 minutos más.",
      "Haz dos huecos, casca los huevos y cocina 4-6 minutos, según el punto deseado.",
      "Añade pimienta y sirve inmediatamente."
    ],
    "tip": "Secar bien las alcachofas ayuda a que se doren. Vigila la yema durante los últimos minutos."
  },
  {
    "title": "Huevos rellenos con salsa rosa",
    "category": "Entrantes",
    "time": "30 min",
    "servings": "4 personas",
    "difficulty": "Fácil",
    "tags": [
      "huevos",
      "atún",
      "salsa rosa"
    ],
    "ingredients": [
      "8 huevos",
      "3 latas de atún en aceite escurridas",
      "3-4 cucharadas de salsa rosa",
      "Lechuga muy picada",
      "Puntas de espárragos, opcional",
      "Langostinos cocidos y pelados, opcional"
    ],
    "steps": [
      "Cuece los huevos, enfríalos y pélalos.",
      "Córtalos longitudinalmente y retira las yemas, reservando media yema para decorar.",
      "Mezcla las yemas restantes con el atún y la salsa rosa hasta obtener una masa cremosa.",
      "Rellena las claras y colócalas boca abajo formando un círculo o una elipse.",
      "Pon el relleno sobrante en el centro y cubre con una capa fina de salsa rosa.",
      "Decora con lechuga picada y la media yema reservada.",
      "Refrigera hasta el momento de servir."
    ],
    "tip": "Añade la salsa rosa poco a poco y escurre muy bien el atún. Están mejor bien fríos."
  },
  {
    "title": "Garbanzos con berberechos y gambones",
    "category": "Legumbres",
    "time": "45 min",
    "servings": "2-3 personas",
    "difficulty": "Media",
    "tags": [
      "garbanzos",
      "berberechos",
      "gambones"
    ],
    "ingredients": [
      "500 g de garbanzos cocidos",
      "300 g de berberechos",
      "10 gambones",
      "2 dientes de ajo",
      "1 cebolla",
      "1/2 puerro",
      "1/4 de pimiento rojo",
      "1/4 de pimiento verde",
      "3 cucharadas de tomate triturado",
      "1 cucharadita de pimentón dulce",
      "500 ml de caldo de verduras o pescado suave",
      "1/2 vaso de vino blanco",
      "Aceite de oliva",
      "Sal",
      "Pimienta",
      "Perejil"
    ],
    "steps": [
      "Desarena los berberechos y pela los gambones.",
      "Saltea los gambones brevemente y resérvalos.",
      "Sofríe la cebolla, el ajo, el puerro y los pimientos bien picados.",
      "Añade el tomate y cocina 10 minutos.",
      "Incorpora el vino y deja que reduzca. Retira del fuego un instante y añade el pimentón.",
      "Vierte el caldo; puedes triturar parte del sofrito para espesar.",
      "Añade los garbanzos y los berberechos y cocina hasta que se abran.",
      "Incorpora los gambones durante los últimos 2 minutos y termina con perejil."
    ],
    "tip": "Con las cabezas de los gambones puedes preparar un caldo rápido. Una pizca de azafrán o guindilla le va muy bien."
  },
  {
    "title": "Wrap de queso crema, salmón ahumado y pepino",
    "category": "Cenas rápidas",
    "time": "10 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": [
      "wrap",
      "salmón ahumado",
      "pepino"
    ],
    "ingredients": [
      "2 tortillas de trigo grandes",
      "120 g de salmón ahumado",
      "100 g de queso crema",
      "1/2 pepino",
      "Un puñado de rúcula o brotes",
      "Eneldo",
      "Unas gotas de limón",
      "Pimienta negra"
    ],
    "steps": [
      "Unta las tortillas con el queso crema.",
      "Añade el salmón ahumado y el pepino cortado en tiras finas.",
      "Incorpora la rúcula, el eneldo, el limón y un poco de pimienta.",
      "Dobla los laterales y enrolla firmemente.",
      "Corta por la mitad y sirve frío."
    ],
    "tip": "Seca el pepino con papel de cocina para que el wrap no se humedezca."
  },
  {
    "title": "Sándwich de pollo al curry",
    "category": "Sándwich",
    "time": "20 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": [
      "sándwich",
      "pollo",
      "curry"
    ],
    "ingredients": [
      "4 rebanadas de pan de molde",
      "180 g de pollo cocinado y desmenuzado",
      "2 cucharadas de mayonesa",
      "1 cucharadita de curry",
      "1 cucharadita de zumo de limón",
      "Lechuga",
      "Sal y pimienta"
    ],
    "steps": [
      "Mezcla el pollo con la mayonesa, el curry y el limón.",
      "Salpimenta y ajusta la cantidad de curry.",
      "Reparte la lechuga y el relleno sobre dos rebanadas.",
      "Cierra, corta y sirve frío o ligeramente tostado."
    ],
    "tip": "Un poco de manzana o pasas aporta un contraste dulce muy agradable."
  },
  {
    "title": "Sándwich club de pollo",
    "category": "Sándwich",
    "time": "25 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": [
      "sándwich",
      "pollo",
      "bacon"
    ],
    "ingredients": [
      "6 rebanadas de pan de molde",
      "1 pechuga de pollo pequeña",
      "4 lonchas de bacon",
      "4 lonchas de jamón cocido",
      "2 lonchas de queso",
      "Lechuga",
      "1 tomate",
      "Mayonesa",
      "Sal y pimienta"
    ],
    "steps": [
      "Cocina el pollo salpimentado a la plancha y córtalo fino.",
      "Dora el bacon y tuesta el pan.",
      "Monta una primera capa con mayonesa, lechuga, tomate y pollo.",
      "Añade otra rebanada y forma la segunda capa con jamón, queso y bacon.",
      "Cierra, presiona ligeramente y corta en triángulos."
    ],
    "tip": "Sujétalo con palillos antes de cortarlo para que mantenga bien las capas."
  },
  {
    "title": "Sándwich de atún mediterráneo",
    "category": "Sándwich",
    "time": "15 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": [
      "sándwich",
      "atún",
      "mediterráneo"
    ],
    "ingredients": [
      "4 rebanadas de pan integral",
      "2 latas de atún escurrido",
      "1 tomate pequeño",
      "Aceitunas negras",
      "Pimiento asado",
      "2 cucharadas de mayonesa o aceite de oliva",
      "Orégano",
      "Hojas verdes"
    ],
    "steps": [
      "Desmenuza el atún y mézclalo con la mayonesa o un poco de aceite.",
      "Añade el tomate picado, las aceitunas, el pimiento y el orégano.",
      "Coloca hojas verdes sobre el pan y reparte el relleno.",
      "Cierra y sirve."
    ],
    "tip": "Escurre bien todos los ingredientes para evitar que el pan se reblandezca."
  },
  {
    "title": "Sándwich Caprese",
    "category": "Sándwich",
    "time": "10 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": [
      "sándwich",
      "mozzarella",
      "tomate"
    ],
    "ingredients": [
      "4 rebanadas de pan rústico",
      "1 bola de mozzarella fresca",
      "1 tomate maduro",
      "Hojas de albahaca",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta",
      "Crema de balsámico, opcional"
    ],
    "steps": [
      "Escurre y corta la mozzarella en rodajas.",
      "Corta el tomate y sazónalo ligeramente.",
      "Monta el sándwich alternando tomate, mozzarella y albahaca.",
      "Añade aceite, pimienta y balsámico si lo deseas.",
      "Sirve frío o tuéstalo brevemente."
    ],
    "tip": "Seca bien la mozzarella para que el pan conserve su textura."
  },
  {
    "title": "Sándwich de huevo y aguacate",
    "category": "Sándwich",
    "time": "15 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": [
      "sándwich",
      "huevo",
      "aguacate"
    ],
    "ingredients": [
      "4 rebanadas de pan integral",
      "2 huevos cocidos",
      "1 aguacate maduro",
      "1 cucharada de mayonesa o yogur",
      "Unas gotas de limón",
      "Sal",
      "Pimienta",
      "Hojas de lechuga"
    ],
    "steps": [
      "Pica los huevos cocidos.",
      "Machaca el aguacate con limón, sal y pimienta.",
      "Mezcla con el huevo y la mayonesa o el yogur.",
      "Añade lechuga al pan, reparte el relleno y cierra."
    ],
    "tip": "Prepáralo justo antes de servir para que el aguacate mantenga su color."
  },
  {
    "title": "Sándwich de pavo, queso brie y arándanos",
    "category": "Sándwich",
    "time": "15 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": [
      "sándwich",
      "pavo",
      "brie"
    ],
    "ingredients": [
      "4 rebanadas de pan rústico o de cereales",
      "120 g de pechuga de pavo en lonchas",
      "100 g de queso brie",
      "2 cucharadas de mermelada de arándanos",
      "Un puñado de rúcula",
      "Mantequilla, opcional"
    ],
    "steps": [
      "Unta la mermelada sobre dos rebanadas.",
      "Coloca el pavo, el brie en láminas y la rúcula.",
      "Cierra el sándwich.",
      "Sírvelo frío o dóralo en sartén o sandwichera hasta que el queso empiece a fundirse."
    ],
    "tip": "El pan de nueces y un poco de cebolla caramelizada combinan especialmente bien."
  },
  {
    "title": "Sándwich de jamón serrano, manchego y tomate",
    "category": "Sándwich",
    "time": "10 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": [
      "sándwich",
      "jamón serrano",
      "manchego"
    ],
    "ingredients": [
      "4 rebanadas de pan rústico o pan de cristal",
      "100 g de jamón serrano",
      "80 g de queso manchego semicurado",
      "1 tomate maduro",
      "Aceite de oliva virgen extra",
      "Pimienta negra, opcional"
    ],
    "steps": [
      "Corta el tomate y el queso en lonchas finas.",
      "Tuesta ligeramente el pan si lo deseas.",
      "Coloca el tomate y añade un hilo de aceite.",
      "Reparte el manchego y el jamón serrano.",
      "Añade pimienta, cierra y sirve."
    ],
    "tip": "No añadas sal si el jamón está muy curado. También queda bien con rúcula."
  },
  {
    "title": "Sándwich de pollo, bacon y aguacate",
    "category": "Sándwich",
    "time": "20 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": [
      "sándwich",
      "pollo",
      "aguacate"
    ],
    "ingredients": [
      "4 rebanadas de pan rústico o de semillas",
      "1 pechuga de pollo pequeña",
      "4 lonchas de bacon",
      "1 aguacate maduro",
      "Hojas de lechuga",
      "Mayonesa",
      "Aceite de oliva",
      "Sal",
      "Pimienta"
    ],
    "steps": [
      "Salpimenta el pollo, cocínalo a la plancha y córtalo fino.",
      "Dora el bacon hasta que quede crujiente.",
      "Corta el aguacate en láminas y añade unas gotas de limón.",
      "Unta el pan con mayonesa y monta con lechuga, pollo, bacon y aguacate.",
      "Cierra y sirve o tuesta ligeramente."
    ],
    "tip": "También funciona muy bien con restos de pollo asado."
  },
  {
    "title": "Sándwich de tortilla francesa y jamón york",
    "category": "Sándwich",
    "time": "15 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": [
      "sándwich",
      "tortilla",
      "jamón york"
    ],
    "ingredients": [
      "4 rebanadas de pan de molde",
      "4 huevos",
      "4 lonchas de jamón york",
      "1 cucharada de mantequilla o aceite de oliva",
      "Sal",
      "Pimienta, opcional"
    ],
    "steps": [
      "Bate los huevos con sal y prepara una tortilla grande o dos individuales.",
      "Coloca el jamón sobre la tortilla todavía caliente.",
      "Tuesta el pan si lo deseas.",
      "Monta el sándwich y pásalo un minuto por la plancha para que quede crujiente."
    ],
    "tip": "Una loncha de queso aporta una textura más cremosa."
  },
  {
    "title": "Sándwich de atún, huevo duro y pimientos del piquillo",
    "category": "Sándwich",
    "time": "25 min",
    "servings": "2 personas",
    "difficulty": "Fácil",
    "tags": [
      "sándwich",
      "atún",
      "piquillo"
    ],
    "ingredients": [
      "4 rebanadas de pan de molde o integral",
      "2 latas de atún escurrido",
      "2 huevos",
      "4 pimientos del piquillo",
      "2 cucharadas de mayonesa",
      "Hojas de lechuga",
      "Pimienta negra, opcional"
    ],
    "steps": [
      "Cuece los huevos 10 minutos, enfríalos y córtalos en rodajas.",
      "Mezcla el atún con la mayonesa.",
      "Reparte la mezcla sobre el pan.",
      "Añade el huevo, los piquillos bien escurridos y la lechuga.",
      "Cierra y sirve."
    ],
    "tip": "Corta los pimientos en tiras para repartirlos mejor y evitar que el relleno se deslice."
  },
  {
    "title": "Sándwich de sobrasada, queso y miel",
    "category": "Sándwich",
    "time": "10 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": [
      "sándwich",
      "sobrasada",
      "miel"
    ],
    "ingredients": [
      "4 rebanadas de pan rústico",
      "100 g de sobrasada",
      "4 lonchas de queso semicurado o de Mahón",
      "2 cucharaditas de miel",
      "Mantequilla, opcional"
    ],
    "steps": [
      "Unta la sobrasada sobre dos rebanadas.",
      "Añade el queso y un hilo fino de miel.",
      "Cierra el sándwich.",
      "Dóralo en sartén o sandwichera hasta que el pan esté crujiente y el queso fundido."
    ],
    "tip": "Usa poca miel: debe equilibrar la sobrasada, no ocultarla."
  },
  {
    "title": "Sándwich de queso de cabra, cebolla caramelizada y nueces",
    "category": "Sándwich",
    "time": "15 min",
    "servings": "2 personas",
    "difficulty": "Muy fácil",
    "tags": [
      "sándwich",
      "queso de cabra",
      "nueces"
    ],
    "ingredients": [
      "4 rebanadas de pan rústico o de nueces",
      "100 g de queso de cabra en rulo",
      "2 cucharadas de cebolla caramelizada",
      "Un puñado de nueces troceadas",
      "Un puñado de rúcula",
      "Aceite de oliva, opcional"
    ],
    "steps": [
      "Tuesta ligeramente el pan.",
      "Unta la cebolla caramelizada sobre dos rebanadas.",
      "Añade el queso de cabra, las nueces y la rúcula.",
      "Cierra y calienta un par de minutos para ablandar el queso.",
      "Sirve inmediatamente."
    ],
    "tip": "Un hilo de miel es opcional; tuesta las nueces para potenciar su sabor."
  }
];
