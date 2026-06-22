const uv4Questions = [
  {
    question: "Lors d'une alarme intrusion, comment faites-vous pour transmettre les consignes à votre collègue ?",
    options: ["Par SMS", "En le joignant avec votre émetteur-récepteur portatif", "En lui envoyant un email", "En l'appelant sur son téléphone personnel", "Aucune des autres réponses"],
    correctText: "En le joignant avec votre émetteur-récepteur portatif",
    tip: "L'émetteur-récepteur professionnel permet une transmission immédiate, fiable et adaptée aux communications opérationnelles."
  },
  {
    question: "Comment votre hiérarchie peut-elle vous transmettre une nouvelle consigne permanente ?",
    options: ["Par email sur la boîte mail du PC", "Remise en mains propres", "Par écrit", "Toutes les réponses sont exactes", "Par la main courante électronique"],
    correctText: "Toutes les réponses sont exactes",
    tip: "Une consigne permanente doit être traçable ; elle peut être transmise par écrit, email, remise directe ou main courante électronique."
  },
  {
    question: "Une consigne ponctuelle est une consigne :",
    options: ["Obligatoirement orale", "Aucune des autres réponses", "Obligatoirement écrite", "Obligatoirement envoyée par email", "Écrite ou orale"],
    correctText: "Obligatoirement écrite",
    tip: "Dans le cadre de ce module, une consigne ponctuelle doit être formalisée par écrit afin d'être claire et traçable."
  },
  {
    question: "De quelle couleur est-il préférable d'écrire les interventions liées à l'incendie sur une main courante ?",
    options: ["En vert", "Aucune des autres réponses", "En noir", "En rouge", "En bleu"],
    correctText: "En rouge",
    tip: "Le rouge permet d'identifier rapidement les événements et interventions liés à l'incendie."
  },
  {
    question: "Vous devez, suite à un événement grave, remonter l'information à votre responsable hiérarchique. Que devez-vous faire ?",
    options: ["Je lui transmets un rapport quand je le croise", "Je lui donnerai quand je serai convoqué à l'agence", "Aucune des autres réponses", "Je lui transmettrai par voie postale", "Je l'appelle pour un compte rendu oral et lui transmettrai par email"],
    correctText: "Je l'appelle pour un compte rendu oral et lui transmettrai par email",
    tip: "Un événement grave exige une alerte orale immédiate, suivie d'une trace écrite adressée à la hiérarchie."
  },
  {
    question: "Comment votre hiérarchie peut-elle vous transmettre une nouvelle consigne permanente ?",
    options: ["Par écrit", "Par la main courante électronique", "Remise en mains propres", "Toutes les réponses sont exactes", "Par email sur la boîte mail du PC"],
    correctText: "Toutes les réponses sont exactes",
    tip: "Tous ces moyens permettent de transmettre et de conserver une consigne permanente."
  },
  {
    question: "Une consigne client, qui vous prévient que demain un VIP viendra visiter l'établissement, est :",
    options: ["Une consigne permanente", "Une consigne ponctuelle", "Aucune des autres réponses", "Une consigne spéciale", "Une consigne générale"],
    correctText: "Une consigne ponctuelle",
    tip: "La visite du VIP est un événement limité dans le temps : la consigne s'applique donc ponctuellement."
  },
  {
    question: "Vous devez, suite à un événement grave, remonter l'information à votre responsable hiérarchique. Que devez-vous faire ?",
    options: ["Je lui donnerai quand je serai convoqué à l'agence", "Je l'appelle pour un compte rendu oral et lui transmettrai par email", "Aucune des autres réponses", "Je lui transmettrai par voie postale", "Je lui transmets un rapport quand je le croise"],
    correctText: "Je l'appelle pour un compte rendu oral et lui transmettrai par email",
    tip: "La gravité impose de prévenir sans délai par téléphone, puis de confirmer les faits par écrit."
  },
  {
    question: "Le compte rendu oral ou écrit est un moyen de communication :",
    options: ["Simple et direct avec sa hiérarchie", "Il évite dans tous les cas de rédiger un rapport complet qui serait trop contraignant", "Aucune des autres réponses", "Il est effectué uniquement à l'aide d'un émetteur-récepteur", "Qui reste interne à votre entreprise sans conséquence pénale"],
    correctText: "Simple et direct avec sa hiérarchie",
    tip: "Le compte rendu sert à transmettre rapidement et clairement les informations utiles à la hiérarchie."
  },
  {
    question: "Le compte rendu écrit est un moyen :",
    options: ["De contrôle du travail effectué par les agents", "De noter sur un document brouillon avant de le rédiger au propre", "De signaler un fait circonstancié urgent et important", "Qui constitue une preuve irréfutable", "Aucune des autres réponses"],
    correctText: "De signaler un fait circonstancié urgent et important",
    tip: "Un compte rendu écrit décrit précisément un événement important et permet d'en assurer la transmission et la traçabilité."
  },
  {
    question: "Une consigne qui vous explique la procédure pour pénétrer dans un local où des matières toxiques sont entreposées en permanence est :",
    options: ["Aucune des autres réponses", "Une consigne générale", "Une consigne spéciale", "Une consigne ponctuelle", "Une consigne particulière"],
    correctText: "Une consigne particulière",
    tip: "Cette consigne vise un lieu et un risque précis ; elle est donc particulière à cette situation."
  },
  {
    question: "Le compte rendu oral ou écrit est un moyen de communication :",
    options: ["Qui reste interne à votre entreprise sans conséquence pénale", "Il est effectué uniquement à l'aide d'un émetteur-récepteur", "Simple et direct avec sa hiérarchie", "Aucune des autres réponses", "Il évite dans tous les cas de rédiger un rapport complet qui serait trop contraignant"],
    correctText: "Simple et direct avec sa hiérarchie",
    tip: "Le compte rendu permet une communication directe et structurée avec le responsable hiérarchique."
  },
  {
    question: "Les consignes spéciales de votre société de sécurité doivent-elles avoir un numéro séquentiel de version ?",
    options: ["Non, puisqu'elles sont permanentes", "Oui, pour pouvoir les ranger dans les archives", "Non, cela ne sert à rien", "Oui, pour savoir si c'est la bonne version en vigueur", "Aucune des autres réponses"],
    correctText: "Oui, pour savoir si c'est la bonne version en vigueur",
    tip: "Le numéro de version évite d'appliquer une consigne remplacée ou devenue obsolète."
  },
  {
    question: "Concernant les rondes, que doit-on notifier sur la main courante ?",
    options: ["Les mesures prises en cas d'anomalies", "Le nom de l'agent effectuant la ronde", "L'heure de retour de ronde", "Les anomalies constatées", "Toutes les réponses sont bonnes"],
    correctText: "Toutes les réponses sont bonnes",
    tip: "La main courante doit retracer l'agent, les horaires, les anomalies rencontrées et les mesures prises."
  },
  {
    question: "Le compte rendu oral ou écrit est un moyen de communication :",
    options: ["Il est effectué uniquement à l'aide d'un émetteur-récepteur", "Qui reste interne à votre entreprise sans conséquence pénale", "Il évite dans tous les cas de rédiger un rapport complet qui serait trop contraignant", "Simple et direct avec sa hiérarchie", "Aucune des autres réponses"],
    correctText: "Simple et direct avec sa hiérarchie",
    tip: "Sa fonction première est de transmettre simplement les faits utiles à la chaîne hiérarchique."
  },
  {
    question: "La consigne affichée à proximité des sorties concernant l'évacuation est :",
    options: ["Aucune des autres réponses", "Une consigne ponctuelle", "Une consigne particulière", "Une consigne spéciale", "Une consigne permanente"],
    correctText: "Une consigne permanente",
    tip: "La procédure d'évacuation reste applicable en permanence et doit être disponible à tout moment."
  },
  {
    question: "De quelle couleur est-il préférable d'écrire les interventions liées à l'incendie sur une main courante ?",
    options: ["En bleu", "En rouge", "En vert", "Aucune des autres réponses", "En noir"],
    correctText: "En rouge",
    tip: "Le rouge distingue immédiatement les événements relatifs à l'incendie."
  },
  {
    question: "De quelle couleur est-il préférable d'écrire les événements quotidiens sur une main courante ?",
    options: ["En rouge", "En jaune", "En noir", "Aucune des autres réponses", "En vert"],
    correctText: "En noir",
    tip: "Les événements courants sont inscrits en noir ; les couleurs particulières servent à signaler certains événements spécifiques."
  },
  {
    question: "Quelle est la meilleure façon d'écrire une date sur la main courante papier ?",
    options: ["L'an 2017-10-30", "Le 17-10-30", "Lundi 30 octobre 2017", "Le 30/10/17", "Le 30/10/2017"],
    correctText: "Lundi 30 octobre 2017",
    tip: "Une date entièrement rédigée évite les ambiguïtés et limite les risques de modification ou de mauvaise interprétation."
  },
  {
    question: "La mise en place et l'utilisation d'une main courante sont-elles soumises à une réglementation ?",
    options: ["Aucune des autres réponses", "Oui, c'est la loi du 12 juillet 1983 qui l'impose", "Oui, c'est le C.S.I. qui l'impose", "Oui, c'est la convention collective qui l'impose", "Non, mais elle permet de se protéger en cas de saisie par la justice"],
    correctText: "Non, mais elle permet de se protéger en cas de saisie par la justice",
    tip: "La main courante n'est pas imposée ici par un texte spécifique, mais sa traçabilité protège l'agent et l'entreprise en cas de contrôle judiciaire."
  },
  {
    question: "De quelle couleur est-il préférable d'écrire les événements quotidiens sur une main courante ?",
    options: ["En vert", "En rouge", "En jaune", "En noir", "Aucune des autres réponses"],
    correctText: "En noir",
    tip: "Le noir est utilisé pour les inscriptions quotidiennes ordinaires."
  },
  {
    question: "Vous disposez d'une main courante informatisée. Devez-vous quand même disposer d'une main courante papier ?",
    options: ["Oui, dans l'éventualité où la main courante informatisée serait hors service", "Non, cela ne sert à rien", "Aucune des autres réponses", "Non, puisqu'on peut tout imprimer plus tard", "Oui, et on doit remplir les deux"],
    correctText: "Oui, dans l'éventualité où la main courante informatisée serait hors service",
    tip: "Le support papier assure la continuité de la traçabilité lors d'une panne informatique."
  },
  {
    question: "La mise en place et l'utilisation d'une main courante sont-elles soumises à une réglementation ?",
    options: ["Oui, c'est le C.S.I. qui l'impose", "Oui, c'est la loi du 12 juillet 1983 qui l'impose", "Non, mais elle permet de se protéger en cas de saisie par les autorités", "Aucune des autres réponses", "Oui, c'est la convention collective qui l'impose"],
    correctText: "Non, mais elle permet de se protéger en cas de saisie par les autorités",
    tip: "La main courante constitue une trace professionnelle utile et protectrice lorsqu'elle est demandée par les autorités."
  },
  {
    question: "Vous disposez d'une main courante informatisée. Devez-vous quand même disposer d'une main courante papier ?",
    options: ["Non, puisqu'on peut tout imprimer plus tard", "Non, cela ne sert à rien", "Aucune des autres réponses", "Oui, et on doit remplir les deux", "Oui, dans l'éventualité où la main courante informatisée serait hors service"],
    correctText: "Oui, dans l'éventualité où la main courante informatisée serait hors service",
    tip: "Une solution papier de secours permet de continuer les inscriptions pendant toute indisponibilité du système."
  },
  {
    question: "La consigne affichée à proximité des sorties concernant l'évacuation est :",
    options: ["Une consigne spéciale", "Une consigne particulière", "Aucune des autres réponses", "Une consigne permanente", "Une consigne ponctuelle"],
    correctText: "Une consigne permanente",
    tip: "Les instructions d'évacuation doivent rester affichées et applicables de façon permanente."
  }
];
