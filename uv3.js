const uv3Questions = [
  {
    question: "Est-il nécessaire de connaître son cadre légal afin de résoudre un conflit ?",
    options: ["Non, le cadre légal sert uniquement en cas de légitime défense", "Oui, le cadre légal permet de rappeler aux personnes les règles établies", "Oui, car l'agent de prévention et de sécurité a plus de prérogatives qu'un citoyen", "Non, le cadre légal ne concerne que les agents de prévention et de sécurité", "Aucune des autres réponses"],
    correctText: "Oui, le cadre légal permet de rappeler aux personnes les règles établies",
    tip: "La connaissance du cadre légal permet à l'agent de rappeler les règles applicables avec calme et légitimité."
  },
  {
    question: "Quel est l'un des aspects positifs du conflit ?",
    options: ["Dépense d'énergie émotive", "Dépense de temps", "Perception négative envers l'autre", "Stimulation d'énergie", "Aucune des autres réponses"],
    correctText: "Stimulation d'énergie",
    tip: "Un conflit bien géré peut mobiliser les personnes et stimuler une énergie utile au changement."
  },
  {
    question: "Quelle est l'attitude adaptée pour résoudre un conflit ?",
    options: ["Critiquer - Écouter - Imposer - Inciter", "Interroger - Infirmer - Reformuler - Accepter", "Écouter - Reformuler - Interroger - Confirmer", "Imposer - Dialoguer - Interroger - Inciter", "Aucune des autres réponses"],
    correctText: "Écouter - Reformuler - Interroger - Confirmer",
    tip: "L'écoute, la reformulation et les questions permettent de vérifier les faits avant de confirmer une solution."
  },
  {
    question: "Un de vos collègues APS est menacé de mort verbalement par un client qui s'en va. Que faites-vous ?",
    options: ["Je poursuis le client, lui fais la morale et le somme de venir présenter ses excuses à mon collègue", "Je prends soin de bien noter avec mon collègue tous les éléments importants et factuels sur la main courante et je vais porter plainte", "Aucune des autres réponses", "Le client étant parti sans autre action, le dossier est clos", "Je vais remonter le moral de mon collègue pour qu'il banalise la situation"],
    correctText: "Je prends soin de bien noter avec mon collègue tous les éléments importants et factuels sur la main courante et je vais porter plainte",
    tip: "Une menace de mort doit être consignée précisément et peut justifier un dépôt de plainte."
  },
  {
    question: "Lorsque l'agent observe des personnes en conflit dans son périmètre d'action, il doit :",
    options: ["S'en mêler et prendre position", "Uniquement observer ce qui se passe", "Aucune des autres réponses", "Se poser en conciliateur", "Partir le plus vite possible"],
    correctText: "Se poser en conciliateur",
    tip: "L'agent reste neutre et cherche à apaiser les échanges sans prendre parti."
  },
  {
    question: "Dans l'analyse des postures, à quoi correspond le corps en arrière ?",
    options: ["Implication personnelle", "Aucune des autres réponses", "Découragement", "Désengagement", "Affirmation de soi"],
    correctText: "Désengagement",
    tip: "Une posture en retrait traduit généralement une prise de distance ou un désengagement."
  },
  {
    question: "Une opposition d'idées où chaque personne exprime son hostilité pour l'obtention d'une même ressource s'appelle :",
    options: ["Un conflit", "Un exposé", "Un parrainage", "Aucune des autres réponses", "Une interview"],
    correctText: "Un conflit",
    tip: "L'opposition hostile autour d'un objectif ou d'une ressource commune caractérise un conflit."
  },
  {
    question: "À quoi doit-on faire attention lors d'un dialogue avec une personne agressive ?",
    options: ["Toutes les réponses sont bonnes", "À ne pas l'énerver encore plus - Garder son calme - Articuler", "À l'intonation de la voix utilisée", "Au regard - À la voix - Aux gestes", "À l'intonation de la voix - Intensité de la voix - Articulation - Débit de parole"],
    correctText: "Toutes les réponses sont bonnes",
    tip: "Le regard, les gestes, le calme, l'intonation, l'intensité et le débit de parole influencent tous l'apaisement."
  },
  {
    question: "Lorsqu'une personne vous irrite, quelle doit être votre façon de communiquer avec elle ?",
    options: ["Aucune des autres réponses", "Utiliser un langage fort et direct", "Essayer de persuader cette personne d'arrêter", "Parler poliment et exprimer votre point de vue", "Ne rien dire et ne rien faire"],
    correctText: "Parler poliment et exprimer votre point de vue",
    tip: "Une communication polie, factuelle et assertive permet d'exprimer son désaccord sans aggraver la situation."
  },
  {
    question: "Quel type de personne peut être plus générateur de conflit ?",
    options: ["Aucune des autres réponses", "Une personne ne parlant pas le français", "Une personne timide", "Une personne insatisfaite", "Une personne bavarde"],
    correctText: "Une personne insatisfaite",
    tip: "L'insatisfaction non traitée peut nourrir les tensions et favoriser l'apparition d'un conflit."
  },
  {
    question: "Un membre du personnel perd ses droits d'accès à l'établissement dans lequel il travaillait. L'agent en poste lui interdit donc l'accès. Le ton monte :",
    options: ["L'agent reste ferme et diplomate, il lui propose de contacter directement son responsable", "L'agent le laisse rentrer juste pour prendre ses affaires et dire au revoir à ses collègues", "L'agent porte un jugement personnel sur sa situation et lui interdit l'accès", "Aucune des autres réponses", "L'agent le saisit et le conduit à l'extérieur du site"],
    correctText: "L'agent reste ferme et diplomate, il lui propose de contacter directement son responsable",
    tip: "L'agent applique la consigne d'accès sans jugement et oriente la personne vers l'interlocuteur compétent."
  },
  {
    question: "Lorsqu'un avantage auquel on tient est menacé, on parle de :",
    options: ["Conflit d'intérêt", "Conflit d'évaluation", "Conflit de loi", "Conflit de personnes", "Aucune des autres réponses"],
    correctText: "Conflit d'intérêt",
    tip: "Un conflit d'intérêt apparaît lorsque des intérêts ou avantages personnels sont menacés ou incompatibles."
  },
  {
    question: "L'agent aperçoit un client jeter un paquet de biscuits à l'intérieur de la surface de vente après l'avoir mangé. L'agent le ramasse. Le client est pris sur le fait. Que doit faire l'agent ?",
    options: ["L'agent le réprimande d'avoir mangé des biscuits non achetés et l'accuse de vol", "L'agent lui tend le paquet de biscuits pour qu'il le paye avec ses courses en caisse", "Aucune des autres réponses", "L'agent jette le paquet de biscuits à la poubelle", "L'agent menace le client d'interdiction de revenir"],
    correctText: "L'agent lui tend le paquet de biscuits pour qu'il le paye avec ses courses en caisse",
    tip: "L'agent privilégie une résolution calme et proportionnée en invitant le client à régulariser la situation."
  },
  {
    question: "Qu'est-ce qu'un conflit ?",
    options: ["Aucune des autres réponses", "Une situation qui va obligatoirement engendrer des coups", "Une situation où une des personnes a toujours tort", "Une situation où le plus fort a toujours raison", "Une situation problématique n'ayant pas abouti"],
    correctText: "Une situation problématique n'ayant pas abouti",
    tip: "Un conflit est une situation d'opposition non résolue ; il n'implique pas nécessairement de violence."
  },
  {
    question: "Dans une galerie marchande, deux jeunes enfants chahutent bruyamment, les parents ne sont pas présents :",
    options: ["L'agent vient avec plusieurs collègues pour les appréhender", "Aucune des autres réponses", "L'agent leur demande de se calmer et fait appeler les parents au micro", "L'agent les sépare et les réprimande fermement", "S'agissant d'enfants, c'est courant et l'agent ne s'en préoccupe pas"],
    correctText: "L'agent leur demande de se calmer et fait appeler les parents au micro",
    tip: "L'intervention doit rester mesurée : calmer les enfants puis retrouver leurs responsables."
  },
  {
    question: "Dans l'analyse des postures, à quoi correspond le corps en avant ?",
    options: ["Désengagement", "Implication personnelle", "Découragement", "Aucune des autres réponses", "Affirmation de soi"],
    correctText: "Implication personnelle",
    tip: "Le corps penché vers l'avant traduit généralement l'implication dans l'échange."
  },
  {
    question: "Vous êtes agent de sécurité dans un hôpital, une personne s'en prend verbalement à l'agent d'accueil des urgences. Que faites-vous ?",
    options: ["Vous attendez que le conflit se résolve de lui-même", "Vous demandez à la personne de quitter l'hôpital afin de résoudre le conflit avec l'agent d'accueil", "Vous appelez les forces de l'ordre", "Aucune des autres réponses", "Vous demandez à l'agent d'accueil de sortir du champ visuel de l'agresseur afin de résoudre le conflit"],
    correctText: "Vous demandez à l'agent d'accueil de sortir du champ visuel de l'agresseur afin de résoudre le conflit",
    tip: "Éloigner temporairement la personne prise pour cible peut casser la dynamique d'agression et faciliter l'apaisement."
  },
  {
    question: "Quelle est la première attitude à adopter pour résoudre un conflit ?",
    options: ["Le dialogue constructif", "Aucune des autres réponses", "L'agressivité", "La fuite", "La confrontation physique"],
    correctText: "Le dialogue constructif",
    tip: "La résolution commence par un dialogue calme permettant d'identifier le problème et les attentes."
  },
  {
    question: "Quelles sont les 3 grandes phases à utiliser pour bien gérer un conflit, dites aussi piliers de la méthode Gordon ?",
    options: ["Aucune des autres réponses", "Écoute passive - Affirmation - Alerter la police", "Écoute active - Affirmation de soi - Résolution du conflit sans perdant", "Écoute active - Affirmation - Dénonciation", "Écoute passive - Affirmation de ses propos - Résolution du conflit"],
    correctText: "Écoute active - Affirmation de soi - Résolution du conflit sans perdant",
    tip: "La méthode Gordon associe écoute active, affirmation de soi et recherche d'une solution sans perdant."
  },
  {
    question: "Vous êtes en conflit avec une personne. Lors de vos échanges, vous devez :",
    options: ["Aucune des autres réponses", "Écouter passivement, acquiescer et vous excuser", "Essayer de vous imposer par votre discours", "Parler un peu plus de la situation que de l'écouter", "Écouter attentivement et réagir aux mots et aux sentiments"],
    correctText: "Écouter attentivement et réagir aux mots et aux sentiments",
    tip: "L'écoute active tient compte à la fois des faits exprimés et des émotions de l'interlocuteur."
  },
  {
    question: "Lors d'un conflit, que ne faut-il absolument pas faire ?",
    options: ["Écouter et interroger", "Dialoguer et comprendre l'origine du conflit", "Mettre en garde et imposer une solution", "Reformuler et confirmer", "Aucune des autres réponses"],
    correctText: "Mettre en garde et imposer une solution",
    tip: "Une solution imposée augmente la résistance ; il faut favoriser le dialogue et la recherche d'un accord."
  },
  {
    question: "Quels sont les principes pour faire face à une agression verbale ?",
    options: ["Garder son calme - Ne pas interrompre l'interlocuteur", "Aucune des autres réponses", "Dire à l'interlocuteur de patienter - L'ignorer", "Écouter attentivement - Ne pas le faire répéter en cas d'incompréhension", "Donner des réponses claires et précises - Couper court à la conversation"],
    correctText: "Garder son calme - Ne pas interrompre l'interlocuteur",
    tip: "Le calme et l'écoute réduisent la tension et permettent à la personne d'exprimer son mécontentement."
  },
  {
    question: "Les conflits factuels sont :",
    options: ["Des conflits liés à un enjeu de pouvoir", "Des conflits liés à la défense de valeurs différentes", "Aucune des autres réponses", "Des conflits issus d'un fait qui donne lieu à une divergence", "Des conflits issus d'une impression"],
    correctText: "Des conflits issus d'un fait qui donne lieu à une divergence",
    tip: "Un conflit factuel naît d'un désaccord portant sur un fait précis ou sur son interprétation."
  },
  {
    question: "Comment un agent de prévention et de sécurité peut-il prévenir un conflit ?",
    options: ["En haussant le ton dès qu'un conflit débute", "Aucune des autres réponses", "En pratiquant un sport de combat", "En démontrant aux personnes qu'il est détenteur de l'autorité", "En ayant une attitude et un comportement exemplaires"],
    correctText: "En ayant une attitude et un comportement exemplaires",
    tip: "Une posture professionnelle, calme et respectueuse favorise la prévention des tensions."
  },
  {
    question: "Une personne s'énerve parce que vous l'avez bousculée en partant pour une intervention de secours à personne. Que faites-vous ?",
    options: ["Aucune des autres réponses", "Vous lui faites clairement comprendre que cela retarde votre intervention", "Vous vous excusez et repartez rapidement en intervention", "Vous l'ignorez car l'intervention est plus importante", "Vous prenez le temps de lui présenter vos excuses et vous lui en expliquez précisément la cause"],
    correctText: "Vous vous excusez et repartez rapidement en intervention",
    tip: "Une excuse brève apaise la personne sans retarder une intervention urgente."
  },
  {
    question: "Deux de vos collègues, en poste avec vous, ne veulent plus se parler à cause d'un différend. Que faites-vous ?",
    options: ["Vous les laissez se débrouiller, ce ne sont pas vos problèmes", "Aucune des autres réponses", "Vous demandez l'organisation d'une conciliation à votre responsable", "Vous prévenez immédiatement le client", "Vous ne faites rien, vous pouvez enfin travailler dans le calme"],
    correctText: "Vous demandez l'organisation d'une conciliation à votre responsable",
    tip: "Un conflit interne durable doit être signalé afin qu'une conciliation encadrée puisse être organisée."
  },
  {
    question: "Parmi les propositions suivantes, laquelle n'est pas un facteur déclenchant de l'agressivité ?",
    options: ["L'excès d'estime de soi", "Aucune des autres réponses", "L'atteinte au territoire", "L'identité", "La bienveillance"],
    correctText: "La bienveillance",
    tip: "La bienveillance favorise l'apaisement ; elle n'est pas un déclencheur d'agressivité."
  },
  {
    question: "Lorsqu'un conflit n'est pas clairement déclaré, il est :",
    options: ["Ouvert", "Dégradé", "Aucune des autres réponses", "Préalable", "Latent"],
    correctText: "Latent",
    tip: "Un conflit latent existe sans être encore exprimé ouvertement."
  },
  {
    question: "Dans l'analyse des postures, à quoi correspond le corps tassé ?",
    options: ["Aucune des autres réponses", "Affirmation de soi", "Implication personnelle", "Découragement", "Désengagement"],
    correctText: "Découragement",
    tip: "Une posture tassée et refermée traduit souvent le découragement ou l'abattement."
  },
  {
    question: "À l'entrée d'un centre commercial, un client vient se plaindre auprès de vous d'un article acheté, qu'il juge défectueux. Que faites-vous ?",
    options: ["Aucune des autres réponses", "Vous lui indiquez que l'article ne peut être repris car il l'a déjà ouvert et utilisé", "Vous lui rappelez que vous n'êtes pas un vendeur", "Vous lui proposez vos services après votre vacation, car vous connaissez bien les défauts de cet article", "Vous prenez le temps de l'écouter et le dirigez vers le service après-vente"],
    correctText: "Vous prenez le temps de l'écouter et le dirigez vers le service après-vente",
    tip: "L'agent écoute la demande puis oriente le client vers le service compétent sans sortir de sa mission."
  },
  {
    question: "Quels sont les principes généraux pour faire face à une agression verbale ?",
    options: ["Aucune des autres réponses", "Garder son calme - Faire preuve d'écoute active - Montrer que l'on a compris l'origine du problème", "Ecouter attentivement - Ne pas le faire répeter en cas d'incompréhension", "Dire à l'interlocuteur de patienter - L'ignorer", "Donner des réponses claires et précises - Couper court à la conversation"],
    correctText: "Garder son calme - Faire preuve d'écoute active - Montrer que l'on a compris l'origine du problème"
  },
  {
    question: "Comment doit procéder un agent évènementiel pour appréhender une personne sans générer de conflit ?",
    options: ["En menaçant la personne appréhendée", "En ne prenant aucune précaution particulière", "En utilisant des marques de politesse, et en justifiant le cadre légal de son intervention", "Aucune des autres réponses", "En ne se présentant pas et par surprise"],
    correctText: "En utilisant des marques de politesse, et en justifiant le cadre légal de son intervention"
  },
  {
    question: "Que doit faire le chef d'équipe, lorsque vous êtes en conflit avec l'un de vos collègues ?",
    options: ["Réunir les agents concernés pour résoudre le problème", "Ne pas intervenir pour laisser la dispute s'estomper", "Contacter immédiatement la hiérarchie et demander des sanctions", "Attendre la dégradation de la situation pour offrir son aide", "Aucune des autres réponses"],
    correctText: "Réunir les agents concernés pour résoudre le problème"
  },
  {
    question: "Lors de la communication, quelles sont les règles que l'agent doit respecter au niveau de son regard ?",
    options: ["Fixer son interlocuteur en permanence", "Éviter de regarder la personne quand elle vous parle", "Aucune des autres réponses", "Orienter son regard vers la personne sans la fixer trop longtemps", "Orienter son regard vers le sol"],
    correctText: "Orienter son regard vers la personne sans la fixer trop longtemps"
  },
  {
    question: "Quelles sont les phases pouvant être utilisées pour bien gérer un conflit ?",
    options: ["Ecoute active - Affirmation de soi - Recherche d'un compromis", "Aucune des autres réponses", "Ecoute passive - Affirmation - Alerter la police", "Ecoute active - Affirmation - Dénonciation", "Ecoute passive - Affirmation de ses propos - Résolution du conflit"],
    correctText: "Ecoute active - Affirmation de soi - Recherche d'un compromis"
  },
  {
    question: "Qu'est-ce qu'un conflit ?",
    options: ["Une situation qui va obligatoirement engendrer des coups", "Aucune des autres réponses", "Une opposition entre des personnes n'ayant pas trouvé de solution", "Une situation où le plus fort a toujours raison", "Une situation où une des personnes a toujours tort"],
    correctText: "Une opposition entre des personnes n'ayant pas trouvé de solution"
  },
  {
    question: "Lors d'un conflit, quelle est la précaution que l'agent doit prendre avant que celui-ci dégénère ?",
    options: ["Garder les mains dans les poches", "Se mettre en position de combat", "Aucune des autres reponses", "Monter les mains au niveau du torse sans agressivité", "Mettre les mains dans le dos pour éviter d'être provoquant"],
    correctText: "Monter les mains au niveau du torse sans agressivité"
  },
  {
    question: "Lorsque l'agent est pris dans un conflit interpersonnel, quelle attitude doit-il adopter ?",
    options: ["Laisser le temps passer et le problème s'arranger de lui-même", "Imposer sa vision des choses", "Aucune des autres réponses", "Amener l'autre personne à voir le problème tel qu'il le voit", "Examiner leur désaccord et chercher un compromis"],
    correctText: "Examiner leur désaccord et chercher un compromis"
  },
  {
    question: "Est-il nécessaire de connaître son cadre légal afin de résoudre un conflit ?",
    options: ["Non, le cadre légal n'entre pas en compte lors de la gestion d'un conflit", "Oui, car l'agent de prévention et de sécurité a plus de prérogatives qu'un citoyen", "Oui, le cadre légal permet de justifier le bien fondé de son intervention", "Non, le cadre legal sert uniquement en cas de légitime défense", "Aucune des autres reponses"],
    correctText: "Oui, le cadre légal permet de justifier le bien fondé de son intervention"
  },
  {
    question: "Quelle est votre réaction face à un individu provocateur (dans l'enceinte du site) qui vous incite à rentrer en conflit ?",
    options: ["Aucune des autres réponses", "J'appelle immédiatement les forces de l'ordre", "Je me saisis de la personne et l'accompagne à l'extérieur du site", "Je reste calme, j'essaye de gérer le problème, en cas d'échec j'informe ma hiérarchie", "Je lignore et continue ma mission"],
    correctText: "Je reste calme, j'essaye de gérer le problème, en cas d'échec j'informe ma hiérarchie"
  },
  {
    question: "Vous êtes en conflit avec une personne. Lors de vos échanges, vous devez :",
    options: ["Aucune des autres réponses", "Ecouter passivement, acquiescer et vous excuser", "Ecouter attentivement et vous baser sur les faits constatés", "Essayer de vous imposer par votre discours", "Parler un peu plus de la situation que de l'écouter"],
    correctText: "Ecouter attentivement et vous baser sur les faits constatés"
  },
  {
    question: "Quelle est l'attitude adaptée pour résoudre un conflit ?",
    options: ["Ecouter - Reformuler - Interroger - Confirmer", "Aucune des autres réponses", "Critiquer - Ecouter - Imposer - Inciter", "Interroger - Contester - Reformuler - Accepter", "Imposer - Dialoguer - Interroger - Inciter"],
    correctText: "Ecouter - Reformuler - Interroger - Confirmer"
  },
  {
    question: "Que ne faut-il absolument pas faire lors d'un conflit ?",
    options: ["Mettre en garde et imposer une solution", "Ecouter et interroger", "Dialoguer et comprendre l'origine du conflit", "Aucune des autres réponses", "Reformuler et confirmer"],
    correctText: "Mettre en garde et imposer une solution"
  },
  {
    question: "Lorsqu'une personne vous irrite, quelle doit être votre façon de communiquer avec elle ?",
    options: ["Demander fermement à la personne de surveiller son langage", "Parler poliment, rester calme et exprimer son point de vue", "Utiliser un langage fort et direct", "Aucune des autres réponses", "Ne rien dire et ne rien faire"],
    correctText: "Parler poliment, rester calme et exprimer son point de vue"
  },
  {
    question: "Dans la communication non verbale, que peut signifier le fait de pointer quelqu'un du doigt ?",
    options: ["Une attitude menaçante ou arrogante", "Une attitude de séduction", "Aucune des autres réponses", "Une attitude conscilliante", "Une attitude apaisante"],
    correctText: "Une attitude menaçante ou arrogante"
  },
  {
    question: "A l'entrée d'un évènement, un client vient se plaindre auprès de vous que son titre d'accès ne lui permet pas de franchir les contrôles automatiques - Que faites-vous ?",
    options: ["Vous lui proposez de lui procurer un titre valide", "Vous lui proposez vos services, après votre vacation", "Vous refusez de le renseigner", "Vous prenez le temps de l'écouter et le dirigez vers le service chargé des litiges", "Aucune des autres réponses"],
    correctText: "Vous prenez le temps de l'écouter et le dirigez vers le service chargé des litiges"
  },
  {
    question: "Quelles sont les précautions à prendre lorsqu'on aborde une personne susceptible de générer un conflit ?",
    options: ["Rester à une dizaine de mètres pour ne pas s'exposer", "Garder un distance raisonnable de sécurité", "Se munir d'un moyen de défense", "Aucune des autres réponses", "S'approcher au plus près pour rassurer la personne"],
    correctText: "Garder un distance raisonnable de sécurité"
  },
  {
    question: "Lorsque l'agent observe des personnes en conflit dans son périmetre d'action, il doit ?",
    options: ["Aucune des autres réponses", "Partir le plus vite possible", "Se poser en médiateur", "Uniquement observer ce qui se passe", "Prendre position avant de connaître l'origine du conflit"],
    correctText: "Se poser en médiateur"
  },
  {
    question: "Lorsqu'un avantage auquel on tient est menacé, on parle de :",
    options: ["Conflit de génération", "Conflit d'évaluation", "Conflit d'intérét", "Conflit de Loi", "Aucune des autres réponses"],
    correctText: "Conflit d'intérét"
  },
  {
    question: "Vous êtes agent de sécurité sur un point d'inspection filtrage, une personne est en conflit verbal avec un personnel de l'organisateur, que faites-vous ?",
    options: ["Vous attendez une agression physique pour intervenir", "Vous appelez les forces de l'ordre", "Aucune des autres réponses", "Vous demandez aux interressés de quitter les lieux pour gérer le conflit à l'exterieur", "Vous demandez au personnel de l'organisateur de se mettre en retrait afin de résoudre le conflit"],
    correctText: "Vous demandez au personnel de l'organisateur de se mettre en retrait afin de résoudre le conflit"
  }
];
