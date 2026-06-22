const uv5Questions = [
  {
    question: "Quel peut être l'un des dangers des fumées ?",
    options: ["Aucun, elles ne sont pas dangereuses", "Leur couleur", "Aucune des autres réponses", "L'opacité", "La fluidité"],
    correctText: "L'opacité",
    tip: "L'opacité des fumées réduit fortement la visibilité, gêne l'évacuation et peut désorienter les occupants."
  },
  {
    question: "Quels sont les éléments indispensables à la combustion ?",
    options: ["Un combustible, un comburant, une énergie d'activation", "Aucune des autres réponses", "Du liquide, du vent, du carburant", "Une propagation, un carburant, un combustible", "Du vent, une étincelle, une matière ininflammable"],
    correctText: "Un combustible, un comburant, une énergie d'activation",
    tip: "Le triangle du feu réunit un combustible, un comburant et une énergie d'activation."
  },
  {
    question: "Dans quel cas utilise-t-on de préférence un extincteur à eau pulvérisée ?",
    options: ["Feu de métaux", "Feu d'essence", "Aucune des autres réponses", "Feu de poubelles", "Feu d'origine électrique"],
    correctText: "Feu de poubelles",
    tip: "L'eau pulvérisée convient notamment aux feux de matériaux solides de classe A, comme le papier et les déchets ordinaires."
  },
  {
    question: "À quoi sert l'alarme générale sélective ?",
    options: ["À informer les pompiers", "À informer le PC pour effectuer une levée de doute", "À prévenir une catégorie de personnel", "À prévenir le directeur", "Aucune des autres réponses"],
    correctText: "À prévenir une catégorie de personnel",
    tip: "L'alarme générale sélective avertit discrètement une catégorie déterminée de personnel chargée d'agir."
  },
  {
    question: "Quel peut être l'un des dangers des fumées ?",
    options: ["Leur couleur", "Aucun, elles ne sont pas dangereuses", "Aucune des autres réponses", "L'opacité", "La fluidité"],
    correctText: "L'opacité",
    tip: "Les fumées opaques masquent les obstacles et les issues, ce qui complique fortement l'évacuation."
  },
  {
    question: "Un extincteur à CO₂ est-il un extincteur à pression permanente ?",
    options: ["Oui", "Non s'il est rechargeable", "Aucune des autres réponses", "Oui s'il est muni d'un densimètre", "Non"],
    correctText: "Oui",
    tip: "Le CO₂ est stocké sous pression dans l'appareil : l'extincteur est donc à pression permanente."
  },
  {
    question: "Quel élément fait partie du triangle du feu ?",
    options: ["Le refroidissement", "La conduction", "La combustion", "Aucune des autres réponses", "Le comburant"],
    correctText: "Le comburant",
    tip: "Le comburant, généralement l'oxygène de l'air, est l'un des trois éléments du triangle du feu."
  },
  {
    question: "Qu'est-ce qu'un I.G.H. ?",
    options: ["Installation Grandement Habitée", "Immeuble de Grande Hauteur", "Aucune des autres réponses", "Immeuble de Groupement Habilité", "Installation de Grande Hauteur"],
    correctText: "Immeuble de Grande Hauteur",
    tip: "I.G.H. signifie Immeuble de Grande Hauteur, soumis à des règles renforcées de sécurité incendie."
  },
  {
    question: "Une des causes de départ de feu peut être :",
    options: ["Les causes humaines", "Les causes surnaturelles", "Les causes législatives", "Les causes perdues", "Aucune des autres réponses"],
    correctText: "Les causes humaines",
    tip: "De nombreux départs de feu proviennent d'une imprudence, d'une erreur, d'une négligence ou d'un acte volontaire."
  },
  {
    question: "Quelle est la distance d'attaque préconisée avec un extincteur à eau ?",
    options: ["Environ 1 mètre", "Aucune des autres réponses", "De 2 à 3 mètres", "De 6 à 7 mètres", "De 3 à 4 mètres"],
    correctText: "De 2 à 3 mètres",
    tip: "Une distance de 2 à 3 mètres permet d'attaquer le feu efficacement tout en conservant une marge de sécurité."
  },
  {
    question: "La classe de feu F concerne :",
    options: ["Les feux de liquides incombustibles", "Les feux de forêt", "Rien car cette classe n'existe pas", "Aucune des autres réponses", "Les feux de dépôts graisseux servant d'auxiliaires de cuisson"],
    correctText: "Les feux de dépôts graisseux servant d'auxiliaires de cuisson",
    tip: "La classe F concerne les feux d'huiles et de graisses utilisées dans les appareils de cuisson."
  },
  {
    question: "Une des causes de départ de feu peut être :",
    options: ["Les causes législatives", "Les causes perdues", "Aucune des autres réponses", "Les causes surnaturelles", "Les causes humaines"],
    correctText: "Les causes humaines",
    tip: "Les comportements humains figurent parmi les principales origines des incendies."
  },
  {
    question: "Combien y a-t-il de classes de feu ?",
    options: ["Aucune des autres réponses", "Une", "Cinq", "Six", "Deux"],
    correctText: "Cinq",
    tip: "La classification présentée dans ce module comporte cinq classes : A, B, C, D et F."
  },
  {
    question: "Quelle est la distance d'attaque préconisée avec un extincteur à eau ?",
    options: ["De 2 à 3 mètres", "Aucune des autres réponses", "Environ 1 mètre", "De 3 à 4 mètres", "De 6 à 7 mètres"],
    correctText: "De 2 à 3 mètres",
    tip: "Il faut commencer l'attaque à environ 2 à 3 mètres puis progresser si le feu diminue."
  },
  {
    question: "Une des causes de départ de feu peut être :",
    options: ["Les causes législatives", "Les causes perdues", "Les causes surnaturelles", "Aucune des autres réponses", "Les causes humaines"],
    correctText: "Les causes humaines",
    tip: "Une action ou une négligence humaine peut fournir l'énergie d'activation nécessaire au départ du feu."
  },
  {
    question: "Combien de types de pressions différentes trouve-t-on sur un extincteur ?",
    options: ["Deux", "Aucune des autres réponses", "Aucun", "Un", "Quatre"],
    correctText: "Deux",
    tip: "On distingue les extincteurs à pression permanente et ceux à pression auxiliaire."
  },
  {
    question: "Vous intervenez sur un feu d'armoire électrique. Quelle précaution devez-vous prendre auparavant ?",
    options: ["Couper l'électricité", "Contacter préalablement le fournisseur d'électricité", "Vérifier que l'extincteur utilisé est à jet plein", "Mettre un appareil respiratoire isolant", "Aucune des autres réponses"],
    correctText: "Couper l'électricité",
    tip: "La mise hors tension supprime le risque électrique avant l'intervention sur l'armoire."
  },
  {
    question: "Quelle est la fonction de l'E.C.S. ?",
    options: ["Collecter les informations provenant des détecteurs volumétriques", "Fournir de l'Eau Conditionnée Suffisante", "Aucune des autres réponses", "Mettre en sécurité le bâtiment", "Collecter les informations provenant des DAI et des DM"],
    correctText: "Collecter les informations provenant des DAI et des DM",
    tip: "L'équipement de contrôle et de signalisation centralise les informations des détecteurs automatiques et des déclencheurs manuels."
  },
  {
    question: "En cas de départ de feu, quelle doit être l'attitude de l'agent de sécurité ?",
    options: ["Tenter l'extinction du départ de feu", "Récupérer toutes ses affaires avant d'évacuer", "Aucune des autres réponses", "Ouvrir les portes et les fenêtres avant d'évacuer", "Attendre l'arrivée des pompiers pour évacuer"],
    correctText: "Tenter l'extinction du départ de feu",
    tip: "Si cela reste possible sans se mettre en danger, l'agent utilise immédiatement le moyen d'extinction adapté."
  },
  {
    question: "En cas de départ de feu, quelle doit être l'attitude des occupants ?",
    options: ["Attendre l'arrivée des pompiers pour évacuer", "Récupérer toutes leurs affaires avant d'évacuer", "Ouvrir les portes et les fenêtres avant d'évacuer", "Fermer les portes et fenêtres en évacuant", "Aucune des autres réponses"],
    correctText: "Fermer les portes et fenêtres en évacuant",
    tip: "Fermer les ouvertures ralentit l'apport d'oxygène et la propagation des fumées et des flammes."
  },
  {
    question: "Quelle est la fonction de l'E.C.S. ?",
    options: ["Mettre en sécurité le bâtiment", "Fournir de l'Eau Conditionnée Suffisante", "Aucune des autres réponses", "Collecter les informations provenant des détecteurs volumétriques", "Collecter les informations provenant des DAI et des DM"],
    correctText: "Collecter les informations provenant des DAI et des DM",
    tip: "L'E.C.S. reçoit et traite les informations d'alarme incendie issues des DAI et des DM."
  },
  {
    question: "La classe de feu F concerne :",
    options: ["Rien car cette classe n'existe pas", "Les feux de liquides incombustibles", "Aucune des autres réponses", "Les feux de forêt", "Les feux de dépôts graisseux servant d'auxiliaires de cuisson"],
    correctText: "Les feux de dépôts graisseux servant d'auxiliaires de cuisson",
    tip: "La classe F vise spécifiquement les feux d'huiles et de graisses de cuisson."
  },
  {
    question: "Un extincteur à CO₂ est-il un extincteur à pression auxiliaire ?",
    options: ["Non", "Non s'il est rechargeable", "Oui", "Oui s'il est muni d'un anémomètre", "Aucune des autres réponses"],
    correctText: "Non",
    tip: "Le CO₂ est déjà stocké sous pression : l'appareil fonctionne à pression permanente et non auxiliaire."
  },
  {
    question: "Qu'est-ce qu'un I.G.H. ?",
    options: ["Immeuble de Groupement Habilité", "Aucune des autres réponses", "Installation Grandement Habitée", "Installation de Grande Hauteur", "Immeuble de Grande Hauteur"],
    correctText: "Immeuble de Grande Hauteur",
    tip: "L'acronyme I.G.H. désigne un Immeuble de Grande Hauteur."
  },
  {
    question: "Quelle est la fonction de l'E.C.S. ?",
    options: ["Mettre en sécurité le bâtiment", "Collecter les informations provenant des DAI et des DM", "Fournir de l'Eau Conditionnée Suffisante", "Collecter les informations provenant des détecteurs volumétriques", "Aucune des autres réponses"],
    correctText: "Collecter les informations provenant des DAI et des DM",
    tip: "L'E.C.S. centralise les signaux des détecteurs automatiques d'incendie et des déclencheurs manuels."
  }
];
