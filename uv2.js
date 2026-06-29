const uv2Questions = [
  {
    question: "Dans le cadre de son activité, l'agent de sécurité porte :",
    options: ["Aucune des autres réponses", "Une tenue particulière qui ne doit entraîner aucune confusion avec les tenues des forces de l'ordre", "Un uniforme avec au maximum 2 insignies distinctifs placés de façon à ne pas être visibles", "Un uniforme avec au maximum 2 insignies distinctifs placés de façon à être toujours visibles", "Une tenue particulière qui doit toujours être conforme aux exigences des services d'incendie"],
    correctText: "Une tenue particulière qui ne doit entraîner aucune confusion avec les tenues des forces de l'ordre",
    tip: "La tenue professionnelle ne doit pas créer de méprise avec la Police ou la Gendarmerie."
  },
  {
    question: "Que risque un employeur qui a conclu un contrat de travail avec un agent de sécurité, non titulaire de la carte professionnelle ?",
    options: ["1 an d'emprisonnement et 2 000 euros d'amende", "Aucune des autres réponses", "L'employeur ne risque rien", "2 ans d'emprisonnement et 30 000 euros d'amende", "1 an d'emprisonnement et 15 000 euros d'amende"],
    correctText: "2 ans d'emprisonnement et 30 000 euros d'amende",
    tip: "Employer délibérément un agent sans carte pro constitue un délit pénal lourd pour le gérant."
  },
  {
    question: "Le respect des conditions pour être recruté dans une entreprise privée de sécurité est guaranteed par la détention :",
    options: ["D'un badge au nom de la société qui emploie", "Aucune des autres réponses", "D'une attestation de l'employeur", "D'un contrat de travail", "D'une carte professionnelle dématérialisée délivrée par la C.L.A.C"],
    correctText: "D'une carte professionnelle dématérialisée délivrée par la C.L.A.C",
    tip: "La commission d'agrément (CLAC) valide le profil avant toute embauche effective."
  },
  {
    question: "Les agents de sécurité employés par un bailleur d'immeuble à usage d'habitation peuvent être armés :",
    options: ["D'un bâton de défense de type TONFA", "D'un pistolet", "D'un revolver", "D'une grenade lacrymogène ayant une capacité inférieure à 100 ml", "Aucune des autres réponses"],
    correctText: "D'un bâton de défense de type TONFA",
    tip: "Les agents des bailleurs sociaux bénéficient d'un décret spécifique d'équipement pour ce type de bâton."
  },
  {
    question: "La demande de renouvellement de ma carte professionnelle doit être présentée :",
    options: ["Au moins 3 mois avant sa date d'expiration", "Au moins 1 mois avant sa date d'expiration", "Aucune des autres réponses", "Au moins 4 mois avant sa date d'expiration", "6 mois avant sa date d'expiration"],
    correctText: "Au moins 3 mois avant sa date d'expiration",
    tip: "Cette anticipation réglementaire de 3 mois évite la coupure de validité pendant le traitement CNAPS."
  },
  {
    question: "La carte professionnelle peut être retirée si le titulaire :",
    options: ["Change de site d'affectation", "Déménagement dans une autre région", "Fait l'objet d'une inscription sur le bulletin n°2 de son casier judiciaire", "Aucune des autres réponses", "Change d'employeur"],
    correctText: "Fait l'objet d'une inscription sur le bulletin n°2 de son casier judiciaire",
    tip: "Une condamnation sur le B2 détruit immédiatement la condition obligatoire de moralité."
  },
  {
    question: "Quelles sont les caractéristiques du casier judiciaire ?",
    options: ["Le casier judiciaire contient les condamnations pénales et civiles d'une même personne", "Le casier judiciaire contient les condamnations pénales d'une même personne", "Le casier judiciaire contient les condamnations civiles d'une même personne. Il existe 4 types de bulletins", "Le casier judiciaire contient les condamnations pénales d'une même personne. Il existe 2 types de bulletins", "Aucune des autres réponses"],
    correctText: "Le casier judiciaire contient les condamnations pénales d'une même personne",
    tip: "Seules les peines pénales y figurent. Les jugements civils ne basculent jamais dans le casier."
  },
  {
    question: "La formation pour le renouvellement de la carte professionnelle (Maintien et Actualisation de Connaissances), est à la charge :",
    options: ["De l'entreprise du site sur lequel je suis en poste", "Des centres de formation accrédités", "Du CNAPS via le Fonds de Modernisation Sociale", "Aucune des autres réponses", "De mon employeur, conformément à l'accord de branche"],
    correctText: "De mon employeur, conformément à l'accord de branche",
    tip: "Le financement du stage obligatoire MAC relève des obligations de formation de l'employeur."
  },
  {
    question: "Parmi ces infractions, laquelle porte atteinte aux intérêts fondamentaux de la nation ?",
    options: ["La délation", "L'abus de droit public", "Le sabotage", "La violation de domicile", "La rébellion"],
    correctText: "Le sabotage",
    tip: "Le sabotage d'usines stratégiques, de réseaux ou de bases militaires menace directement l'État."
  },
  {
    question: "Quelles sont les principales missions de la Gendarmerie ?",
    options: ["La surveillance uniquement des villes.", "La dissuasion, la prévention, la protection et l'intervention.", "Assurer uniquement les contrôles routiers de dépassement de vitesse.", "La surveillance uniquement des campagnes.", "Aucune des autres réponses"],
    correctText: "La dissuasion, la prévention, la protection et l'intervention.",
    tip: "Ce socle en 4 mots résume les prérogatives fondamentales de la Gendarmerie Nationale."
  },
  {
    question: "La légitime défense, c'est :",
    options: ["Riposter violemment peu importe la gravité de l'agression", "Le droit de se faire justice soi-même", "Aucune des autres réponses", "Le droit de se défendre ou de défendre autrui contre une agression physique injuste", "Le droit de se défendre physiquement suite à une agression verbale"],
    correctText: "Le droit de se défendre ou de défendre autrui contre une agression physique injuste",
    tip: "L'article 122-5 pose le cadre de riposte proportionnée et immédiate face à une atteinte corporelle."
  },
  {
    question: "Agent de prévention et de sécurité en poste de filtrage :",
    options: ["Je suis habilité à effectuer un contrôle d'identité dans certains cas", "Aucune des autres réponses", "Je suis habilité à effectuer une fouille de personne dans certains cas", "Je peux effectuer un relevé d'identité, si les consignes ou le Règlement intérieur le prévoient", "Je suis habilité à effectuer un interrogatoire dans certains cas"],
    correctText: "Je peux effectuer un relevé d'identité, si les consignes ou le Règlement intérieur le prévoient",
    tip: "Noter le nom d'un visiteur sur un cahier d'accès est un relevé, pas un contrôle d'identité officiel."
  },
  {
    question: "Selon le code pénal, est assimilé à une arme :",
    options: ["Uniquement les armes de fonction", "Uniquement les armes en état de fonctionnement", "Aucune des autres réponses", "Tout objet présentant une ressemblance avec une arme de nature à créer une confusion pour menacer de tuer ou blesser", "Tout objet représentant un danger"],
    correctText: "Tout objet présentant une ressemblance avec une arme de nature à créer une confusion pour menacer de tuer ou blesser",
    tip: "Une réplique factice ou un pistolet en plastique exhibé pour braquer est assimilé à une arme réelle."
  },
  {
    question: "Le renouvellement de la carte professionnelle :",
    options: ["N'est pas obligatoire pour les anciens fonctionnaires des forces de l'ordre", "Est subordonné au suivi d'une formation continue", "Aucune des autres réponses", "Est subordonné à une autorisation de l'employeur", "N'est pas obligatoire"],
    correctText: "Est subordonné au suivi d'une formation continue",
    tip: "C'est l'obligation de formation continue (stage MAC) imposée tous les 5 ans."
  },
  {
    question: "Un Revolver chambré pour le calibre 38 Spécial est une arme de catégorie :",
    options: ["Aucune des autres réponses", "A", "C", "B", "D"],
    correctText: "B",
    tip: "Les armes de poing à percussion centrale classiques se rangent en Catégorie B."
  },
  {
    question: "Un APS autorisé au port d'armes peut détendre l'arme de service à son domicile ?",
    options: ["Aucune des autres réponses", "Oui, il est titulaire d'une autorisation de port d'armes", "Oui, avec l'autorisation de son employeur", "Oui, à condition de l'enfermer dans un coffre fort", "Non, en aucun cas"],
    correctText: "Non, en aucun cas",
    tip: "Le stockage doit impérativement se faire dans le coffre fort ou l'armurerie sécurisée du site d'affectation."
  },
  {
    question: "Quelle situation est-elle une abstention volontaire de combattre un sinistre ?",
    options: ["Aucune des autres réponses", "Le fait de ne pas faire déplacer un véhicule garé sur l'emplacement réservé aux véhicules des pompiers", "Le fait de ne pas avoir effectué la levée de doute avant le déclenchement de l'alarme incendie", "Le fait de fuir face à un incendie sans avoir fait alerter les services de secours", "Le fait de s'abstenir de porter assistance à une personne ayant chuté dans un escalier"],
    correctText: "Le fait de fuir face à un incendie sans avoir fait alerter les services de secours",
    tip: "Partir en courant sans appeler les secours caractérise l'omission volontaire face à un sinistre."
  },
  {
    question: "Le transport d'armes sans agrément spécifique, de type générateurs aérosols et arme à impulsion électrique de contact :",
    options: ["Aucune des autres réponses", "Est interdit par la loi sauf en cas de légitime défense", "Constitue une contravention passible d'une peine d'emprisonnement", "Constitue une infraction qualifiée de délit, passible d'une peine d'un an d'emprisonnement et de 15000 euros d'amende", "Est autorisé"],
    correctText: "Constitue une infraction qualifiée de délit, passible d'une peine d'un an d'emprisonnement et de 15000 euros d'amende",
    tip: "Le transport injustifié d'armes de catégorie D (bombe lacrymogène lourde, shocker) est un délit."
  },
  {
    question: "Je suis en situation de pouvoir agir immédiatement contre une atteinte à l'intégrité physique d'une personne :",
    options: ["Je n'agis jamais sauf si je suis autorisé à porter une arme.", "J'agis même s'il y a risque pour moi, c'est mon devoir d'APS.", "Aucune des autres réponses", "Je n'agis pas. Dans tous les cas, ce sont aux forces de l'ordre d'intervenir.", "J'agis s'il n'y a pas de risque pour moi ou pour autrui."],
    correctText: "J'agis s'il n'y a pas de risque pour moi ou pour autrui.",
    tip: "L'obligation d'assistance s'arrête là où commence un danger réel pour sa propre vie ou celle de tiers."
  },
  {
    question: "Une arme à feu d'épaule à un coup par canon (type fusil de chasse) est classée en catégorie ?",
    options: ["D", "B", "C", "A", "Aucune des autres réponses"],
    correctText: "C",
    tip: "Les fusils de chasse classiques à canon lisse à un coup par canon font partie de la catégorie C."
  },
  {
    question: "Je dispose de deux contrats à temps plein dans deux entreprises de sécurité privée différentes :",
    options: ["Aucune des autres réponses", "J'ai parfaitement le droit si je préviens les deux employeurs", "J'ai parfaitement le droit puisque je ne dépasse pas le temps légal de travail journalier", "Je n'ai pas le droit de cumuler deux emplois à temps plein", "Je n'ai pas le droit sauf si je dispose de deux cartes professionnelles"],
    correctText: "Je n'ai pas le droit de cumuler deux emplois à temps plein",
    tip: "La législation française interdit le dépassement des durées maximales absolues du travail."
  },
  {
    question: "Au titre de quel article de loi un agent de prévention et de sécurité peut-il appréhender un individu ?",
    options: ["Article R 661-1 du code pénal", "Aucune des autres réponses", "Article 122-5 du code pénal", "Article 53 du code de procédure pénale", "Article 223-1 du code pénal"],
    correctText: "Aucune des autres réponses",
    tip: "L'appréhension se base sur l'article 73 du Code de procédure pénale (non cité ici)."
  },
  {
    question: "Quels sont les trois elements constitutifs de l'infraction ?",
    options: ["L'élément coupable, intentionnel, moral", "L'élément pénal, matériel, moral", "L'élément légal, matériel, moral", "Aucune des autres réponses", "L'élément légal, constitutionnel, moral"],
    correctText: "L'élément légal, matériel, moral",
    tip: "Légal (un texte), Matériel (les faits), Moral (l'intention de commettre la faute)."
  },
  {
    question: "Quelle situation est considérée comme un cas d'aggravation de l'infraction de vol ? Le fait de commettre un vol :",
    options: ["En s'enfuyant après le larcin", "Dans un magasin après avoir rendu inopérantes les caméras de surveillance", "En prenant indûment la qualité d'une personne dépositaire de l'autorité publique", "Aucune des autres réponses", "Dans un magasin après s'être laissé enfermer volontairement à la fermeture des portes"],
    correctText: "En prenant indûment la qualité d'une personne dépositaire de l'autorité publique",
    tip: "Se faire passer pour un policier ou gendarme aggrave l'infraction de vol."
  },
  {
    question: "Je suis agent de prévention et de sécurité, intervenant en sous-traitance, pour une autre entreprise de sécurité, quelle tenue dois-je porter ?",
    options: ["Aucune des autres réponses", "Je dois porter ma tenue mais avec les insignes et les logos de l'entreprise qui détient le contrat", "Peu importe la tenue, seule la carte professionnelle compte", "La tenue de l'entreprise qui détient le contrat", "La tenue de mon entreprise"],
    correctText: "La tenue de mon entreprise",
    tip: "L'agent reste lié par un lien de subordination avec son employeur réel et doit porter ses couleurs."
  },
  {
    question: "Le fait de commettre des violences sur autrui ayant entraîné une ITT de plus de 8 jours est une infraction qualifiée de :",
    options: ["Contravention passible d'emprisonnement", "Aucune des autres réponses", "Crime passible d'emprisonnement", "Rappel à la loi passible d'emprisonnement", "Délit passible d'emprisonnement"],
    correctText: "Délit passible d'emprisonnement",
    tip: "Une ITT supérieure à 8 jours fait basculer la violence volontaire dans la qualification de délit."
  },
  {
    question: "La liberté d'aller et venir s'inscrit dans le respect :",
    options: ["De la convention européenne des droits de l'homme de 1950", "De la déclaration des droits de l'homme et du citoyen de 1789", "Du code de la sécurité intérieure", "De la déclaration universelle des droits de l'homme de 1948 et son article 13", "Du code de procédure pénale"],
    correctText: "De la déclaration universelle des droits de l'homme de 1948 et son article 13",
    tip: "L'article 13 de la DUDH proclame la liberté de circuler librement."
  },
  {
    question: "Est une arme par destination :",
    options: ["Tout objet pouvant causer des dommages", "Aucune des autres réponses", "Tout objet non conçu pour menacer, tuer ou blesser mais utilisé comme tel", "Tout objet conçu pour tuer ou blesser", "Tout objet conçu pour usage professionnel"],
    correctText: "Tout objet non conçu pour menacer, tuer ou blesser mais utilisé comme tel",
    tip: "Une bouteille, un tournevis ou un outil utilisé pour attaquer devient une arme par destination."
  },
  {
    question: "En poste dans un magasin, le directeur me demande de surveiller une caissière qu'il soupçonne de ne pas respecter ses horaires de pause :",
    options: ["Je lo fais mais exige de disposer de la vidéo pour disposer des preuves", "Aucune des autres réponses", "Je refuse de le faire car c'est un délégué du personnel du client", "Je refuse car il m'est interdit de m'immiscer dans le déroulement d'un événement se rapportant à un possible conflit de travail"],
    correctText: "Je refuse car il m'est interdit de m'immiscer dans le déroulement d'un événement se rapportant à un possible conflit de travail",
    tip: "Le code de déontologie proscrit toute interférence des agents dans les relations de travail ou litiges salariaux."
  },
  {
    question: "Un Agent de Prévention et de Securité d'un service interne doit :",
    options: ["Porter une tenue réglementaire", "Se soumettre au code de déontologie", "Disposer d'une carte professionnelle délivrée par la CLAC", "Toutes les réponses sont exactes"],
    correctText: "Toutes les réponses sont exactes",
    tip: "Qu'il soit prestataire ou interne, l'agent reste lié par les obligations globales du CSI."
  },
  {
    question: "Laquelle de ces propositions constitue une infraction ?",
    options: ["Le fait de ne pas remplir correctement la main courante", "Le fait de ne pas porter secours à une personne blessée dans l'établissement surveillé.", "Le fait d'arriver en léger retard à sa prise de poste sans avoir prévenu.", "Aucune des autres réponses", "Le fait de ne pas agir contre une personne qui menace avec une arme"],
    correctText: "Le fait de ne pas porter secours à une personne blessée dans l'établissement surveillé.",
    tip: "L'omission de secours face à une personne en détresse constitue un délit pénal."
  },
  {
    question: "Que contient le casier judiciaire B3 ?",
    options: ["Rien de particulier", "Le bulletin n°3 ne comporte les condamnations correctionnelles et criminelles", "Aucune des autres réponses.", "Le bulletin n°3 comporte toutes les décisions de justice (peines de prison, amende...)", "Le bulletin n°3 comporte uniquement les condamnations les plus graves"],
    correctText: "Le bulletin n°3 comporte uniquement les condamnations les plus graves",
    tip: "Le B3 ne mentionne que les peines privatives de liberté lourdes (> 2 ans sans sursis)."
  },
  {
    question: "Si vous réussissez à l'examen final du CQP-APS, vous pourrez demander la carte professionnelle d' :",
    options: ["Agent Privé de Sécurité", "Aucune des autres réponses", "Agent de Protection et de Sécurité", "Agent de Prévention et de Sécurité"],
    correctText: "Agent de Prévention et de Sécurité",
    tip: "C'est l'intitulé officiel et réglementaire reconnu par la branche et le CNAPS."
  },
  {
    question: "Quelle situation est-elle une abstention volontaire de combattre un sinistre ?",
    options: ["Le fait de fuir face à un incendie sans avoir fait alerter les services de secours", "Le fait de s'abstenir de porter assistance à une personne ayant chuté dans un escalier", "Aucune des autres réponses", "Le fait de ne pas faire déplacer un véhicule garé sur l'emplacement réservé au véhicule des pompiers", "Le fait de ne pas avoir effectué la levée de doute avant le déclenchement de l'alarme incendie"],
    correctText: "Le fait de fuir face à un incendie sans avoir fait alerter les services de secours",
    tip: "Ne rien faire pour stopper ou faire stopper un sinistre destructeur est réprimé pénalement."
  },
  {
    question: "Quelles sont les différentes formes de libertés publiques ?",
    options: ["Politique", "Civile", "Toutes les réponses sont bonnes", "Individuelle", "Syndicale"],
    correctText: "Toutes les réponses sont bonnes",
    tip: "Les libertés publiques englobent les droits civils, individuels, syndicats et politiques."
  },
  {
    question: "Pour avoir accès à une formation aux métiers de la sécurité privée, un candidat doit obtenir auprès de la C.L.A.C :",
    options: ["Une attestation de compétence", "Une prescription d'entrée en stage", "Aucune des autres réponses", "Un agrément signé par le préfet", "Une autorisation préalable ou provisoire"],
    correctText: "Une autorisation préalable ou provisoire",
    tip: "Le sésame administratif du CNAPS indispensable pour débuter son parcours en école."
  },
  {
    question: "Agent rondier intervention, je dispose d'une véhicule d'entreprise équipé d'un gyrophare orange :",
    options: ["C'est interdit sauf en situation d'Urgence Attentat", "C'est autorisé uniquement à l'intérieur des sites surveillés, si les consignes le prévoient", "C'est autorisé même sur la voie publique", "C'est absolument interdit", "Aucune des autres réponses"],
    correctText: "C'est autorisé uniquement à l'intérieur des sites surveillés, si les consignes le prévoient",
    tip: "Sur la voie publique, l'usage sauvage de gyrophares est proscrit par le Code de la route."
  },
  {
    question: "En fin de contrat, que devez-vous faire de votre carte professionnelle matérialisée ?",
    options: ["La rendre obligatoirement à l'employeur", "Aucune des autres réponses", "La détruire", "La rendre au CNAPS", "La conserver"],
    correctText: "La rendre obligatoirement à l'employeur",
    tip: "Le support physique fourni pour l'exercice des missions dans la structure lui est restitué."
  },
  {
    question: "Le directeur de l'établissement où je suis en poste me demande de prendre un colis à l'accueil pour le déposer dans un service interne pendant ma ronde :",
    options: ["Je ne le fais pas, car je n'ai pas de chariot adapté à la mission", "Je le fais, puisque le principe d'exclusivité ne s'applique qu'à mon entreprise", "Aucune des autres réponses", "Je ne le fais pas, car le principe d'exclusivité prévu dans le CSI, m'interdit de le faire", "Je le fais, puisque cela ne me détourne pas de mon circuit de ronde"],
    correctText: "Je ne le fais pas, car le principe d'exclusivité prévu dans le CSI, m'interdit de le faire",
    tip: "Le principe d'exclusivité des métiers de sécurité interdit l'exercice d'activités logistiques."
  },
  {
    question: "Le vol avec arme est qualifié de :",
    options: ["Crime", "Délit aggravé", "Aucune des autres réponses", "Crime terroriste", "Délit qualifié"],
    correctText: "Crime",
    tip: "La présence d'une arme fait automatiquement basculer le vol en crime (Cour d'Assises)."
  },
  {
    question: "Dans quelle situation seriez vous reconnu coupable d'atteinte à la liberté d'aller et venir ?",
    options: ["En incitant une personne victime d'un malaise à attendre les secours après avoir reçu la confirmation de leur arrivée", "En immobilisant un individu coupable de violence avec arme sur une personne inconsciente au sol", "En empêchant un spectateur de concert de monter sur scène pour obtenir un selfie", "Aucune des autres réponses", "En enfermant à clé dans la salle de démarque une personne refusant de reconnaître un vol dont vous êtes persuadé"],
    correctText: "En enfermant à clé dans la salle de démarque une personne refusant de reconnaître un vol dont vous êtes persuadé",
    tip: "Séquestrer arbitrairement une personne sans preuve absolue flagrante est pénalement répréhensible."
  },
  {
    question: "Dans le cas où l'agent n'a pas passé sa formation MAC à la date anniversaire du renouvellement de la carte professionnelle :",
    options: ["Il a 12 mois pour travailler et passer la formation avant sa perte définitive", "Aucune des autres réponses", "Il a 12 mois pour passer la formation MAC mais il n'a plus le droit de travailler", "Il peut travailler avec une confirmation d'inscription au MAC attestée par un Centre de Formation agréé", "Il doit obligatoirement repasser l'intégralité de la formation"],
    correctText: "Il a 12 mois pour passer la formation MAC mais il n'a plus le droit de travailler",
    tip: "L'autorisation d'exercer tombe le jour de l'échéance, laissant 1 an de sursis pour recycler."
  },
  {
    question: "Une arme d'épaule à répétition automatique relevant du matériel de guerre est une arme de catégorie :",
    options: ["D", "C", "A", "B", "Aucune des autres réponses"],
    correctText: "A",
    tip: "Les armes lourdes et automatiques de guerre intègrent la catégorie A."
  },
  {
    question: "Un agent de sécurité a le droit de porter un « TASER »",
    options: ["Sous condition qu'il détienne une carte professionnelle à jour", "Sous condition qu'il réalise une prestation sur un site dangereux", "Sous condition d'une autorisation du maire", "Le port et l'utilisation sont interdits", "Aucune des autres réponses"],
    correctText: "Le port et l'utilisation sont interdits",
    tip: "Hors missions d'armement ultra-spécifiques, le port d'armes de type PIE est prohibé."
  },
  {
    question: "La légitime défense, c'est :",
    options: ["Le droit de se défendre physiquement suite à une agression verbal", "Le droit de se défendre ou de défendre autrui contre une agression physique injuste", "Le droit de se faire justice soi-même", "Riposter violemment peu importe la gravité de l'agression", "Aucune des autres réponses"],
    correctText: "Le droit de se défendre ou de défendre autrui contre une agression physique injuste",
    tip: "La riposte légitime protège les vies face à des agressions corporelles illégitimes."
  },
  {
    question: "Quelle sanction disciplinaire n'est pas applicable à un agent de sécurité suite à un manquement au code de déontologie ?",
    options: ["Une interdiction d'exercer la profession à titre définitif", "Une interdiction d'exercer la profession à titre temporaire", "Un blâme", "Un avertissement"],
    correctText: "Une interdiction d'exercer la profession à titre définitif",
    tip: "Le CNAPS prononce des interdictions temporaires (5 ans max), pas d'exclusions perpétuelles directes."
  },
  {
    question: "Agent Rondier Intervenant, je viens d'apprendre par lettre recommandée que j'ai perdu mon permis de conduire :",
    options: ["Je dois prévenir mon employeur pour mettre en place une solution transitoire", "Etant en fonction d'agent de sécurité, je reste habilité à conduire uniquement pour mon activité de sécurité privée", "Je demande à un ami disposant du permis de me conduire sur les lieux d'intervention.", "Je m'inscris à un stage de récupération de points et continue à tenir mon poste de rondier intervenant", "Aucune des autres réponses"],
    correctText: "Je dois prévenir mon employeur pour mettre en place une solution transitoire",
    tip: "Conduire sans permis est un délit, l'employeur doit être alerté immédiatement."
  },
  {
    question: "Un agent de sécurité exerçant ses fonctions dans une grande surface peut-il appréhender un individu qui y entre avec une matraque et tente d'agresser une caissière ?",
    options: ["Il peut juste l'aborder mais il ne peut pas l'appréhender en vertu de l'art. 73 du CPP", "Non car il n'y a pas d'infraction prévue pour ce type de fait", "Oui, car il sera dans le cadre de l'état de nécessité, prévu dans l'article 122-7 du code pénal", "Il peut seulement consigner sa matraque ou son poignard", "Aucune des autres réponses"],
    correctText: "Oui, car il sera dans le cadre de l'état de nécessité, prévu dans l'article 122-7 du code pénal",
    tip: "L'état de nécessité justifie une action proportionnée pour neutraliser un danger imminent."
  },
  {
    question: "Quel est le casier judiciaire que consulte le CNAPS pour délivrer l'Autorisation Préalable ou la Carte Professionnelle ?",
    options: ["Aucune des autres réponses", "Bulletin N° 4", "Bulletin N° 3", "Bulletin N° 1", "Bulletin N° 2"],
    correctText: "Bulletin N° 2",
    tip: "Le B2 contient la majorité des condamnations et reste réservé aux administrations de contrôle."
  },
  {
    question: "Que signifie le sigle C. L. A. C. pour les acteurs de la Sécurité ?",
    options: ["Commission Locale des Agents de Protection et de Contrôle", "Comité Législatif des Agences de Transports Sécurisés", "Commission Locale d'Agrément et de Contrôle", "Comité Légitime des Activités de Prévention et de Conseil en sécurité privée", "Conseil pour la Libération des Agents garde du Corps"],
    correctText: "Commission Locale d'Agrément et de Contrôle",
    tip: "Les CLAC gèrent l'attribution de proximité des cartes professionnelles."
  },
  {
    question: "En poste dans un magasin, le directeur me demande de surveiller une caissière qu'il soupçonne de ne pas respecter ses horaires de pause :",
    options: ["Je le fais mais exige de disposer de la vidéo pour disposer des preuves", "Je le fais et prends bien soin de l'indiquer sur la main courante", "Je refuse de le faire car c'est un délégué du personnel du client", "Je refuse car il m'est interdit de m'immiscer dans le déroulement d'un événement se rapportant à un possible conflit de travail", "Aucune des autres réponses"],
    correctText: "Je refuse car il m'est interdit de m'immiscer dans le déroulement d'un événement se rapportant à un possible conflit de travail",
    tip: "L'agent préserve sa neutralité professionnelle vis-à-vis des litiges managériaux."
  },
  {
    question: "Au titre de l'article R631-15 du livre VI du code de la sécurité intérieure, les employeurs ont l'obligation :",
    options: ["De contrôler la classification de leurs employés", "Aucune des autres réponses", "De s'assurer de l'adéquation des qualifications professionnelles de leurs employés avec les missions confiées", "D'effectuer une déclaration unique d'embauche", "De vérifier que leurs employés sont titulaires d'autorisation préfectorale d'exercer"],
    correctText: "De s'assurer de l'adéquation des qualifications professionnelles de leurs employés avec les missions confiées",
    tip: "L'employeur doit garantir l'adéquation exacte entre la mission terrain et la compétence de son agent."
  },
  {
    question: "Quelles sont les différentes formes de libertés publiques ?",
    options: ["Toutes les réponses sont bonnes", "Individuelle", "Politique", "Civile"],
    correctText: "Toutes les réponses sont bonnes",
    tip: "L'ensemble de ces libertés forme le bloc des libertés publiques constitutionnelles."
  },
  {
    question: "Je dispose de deux contrats à temps plein dans deux entreprises de sécurité privée différentes :",
    options: ["Je n'ai pas le droit sauf si je dispose de deux cartes professionnelles", "J'ai parfaitement le droit si je préviens les deux employeurs", "Aucune des autres réponses", "Je n'ai pas le droit de cumuler deux emplois à temps plein", "J'ai le droit si le travail s'effectue le week-end"],
    correctText: "Je n'ai pas le droit de cumuler deux emplois à temps plein",
    tip: "Travailler sur deux temps complets excède de facto le plafond légal de travail."
  },
  {
    question: "Après avoir appréhendé une personne, celle-ci est conduite dans un local spécifique. Quelle précaution doit-on prendre en se rendant au local ?",
    options: ["Etre accompagné(e) d'un agent en renfort", "Avoir du café à disposition", "Aucune des autres réponses", "Disposer de menottes pour maîtriser toutes les personnes appréhendées", "Inscrire les faits sur le registre des consignes"],
    correctText: "Etre accompagné(e) d'un agent en renfort"
  },
  {
    question: "Le Premier ministre est nommé par :",
    options: ["Les députés et sénateurs", "Ses ministres", "Les citoyens et citoyennes ayant l'age de voter", "Le Président de la République", "L'armée française"],
    correctText: "Le Président de la République"
  },
  {
    question: "La légitime défense, c'est :",
    options: ["Le droit de se défendre physiquement suite à une agression verbale", "Riposter violemment peu importe la gravité de l'agression", "Le droit de se défendre ou de défendre autrui contre une atteinte injustifiée", "Le droit de se faire justice soi-même", "Aucune des autres réponses"],
    correctText: "Le droit de se défendre ou de défendre autrui contre une atteinte injustifiée"
  },
  {
    question: "Une mission de gardiennage peut être sous-traitée :",
    options: ["Sur autorisation du CNAPS", "Sur autorisation spécifique du Préfet", "Selon le Code du commerce et les restrictions du Code de la sécurité intérieure", "En aucun cas, la sous-traitance étant interdite.", "selon le Code du commerce, comme toute prestation de service"],
    correctText: "Selon le Code du commerce et les restrictions du Code de la sécurité intérieure"
  },
  {
    question: "Où siège le Sénat ?",
    options: ["A Matignon", "Au quai Branly", "Au Palais du Luxembourg", "A Versailles", "A l'Elysée"],
    correctText: "Au Palais du Luxembourg"
  },
  {
    question: "Dans le cadre de son activité, l'agent privé de sécurité porte :",
    options: ["Aucune des autres réponses", "Une tenue particulière qui doit toujours être conforme aux exigences des services d'incendie", "Un uniforme avec au maximum 2 insignes distinctifs placés de façon à ne pas être visibles", "Un uniforme avec au minimum 1 insigne distinctif placé de façon à être toujours visible", "Une tenue particulière qui ne doit entraîner aucune confusion avec les tenues des agents des services publics"],
    correctText: "Une tenue particulière qui ne doit entraîner aucune confusion avec les tenues des agents des services publics"
  },
  {
    question: "Quelles sont les conditions relatives à la défense devant être réunies pour pouvoir invoquer la légitime défense ?",
    options: ["Actuelle, dirigée contre l'agresseur, imminente", "Aucune des autres réponses", "Nécessaire, dans le même temps, proportionnée à la gravité de l'atteinte", "Instinctive, sans violence, après sommations", "Indispensable, proportionnée à l'attitude de l'agresseur, différée en cas d'hésitation"],
    correctText: "Nécessaire, dans le même temps, proportionnée à la gravité de l'atteinte"
  },
  {
    question: "pendant ma ronde :",
    options: ["Je le fais, puisque que le principe d'exclusivité ne s'applique qu'à mon entreprise", "Aucune des autres réponses", "Je ne le fais pas, car je n'ai pas de chariot adapté à la mission", "Je le fais, puisque cela ne me détourne pas de mon circuit de ronde", "Je ne le fais pas, car le principe d'exclusivité prévu dans le CSI, m'interdit de le faire"],
    correctText: "Je ne le fais pas, car le principe d'exclusivité prévu dans le CSI, m'interdit de le faire"
  },
  {
    question: "Agent de sécurité exerçant avec un véhicule, je viens d'apprendre par lettre recommandée que j'ai perdu mon permis de conduire :",
    options: ["Je demande à un ami disposant du permis de me conduire sur les lieux d'intervention.", "Etant en fonction d'agent de sécurité, je reste habilité à conduire uniquement pour mon activité de sécurité privée", "Je m'inscris à un stage de récupération de points et continue à tenir mon poste de rondier intervenant", "Je dois prévenir mon employeur pour mettre en place une solution transitoire", "Aucune des autres reponses"],
    correctText: "Je dois prévenir mon employeur pour mettre en place une solution transitoire"
  },
  {
    question: "Présent à un point d'inspection filtrage, vous voyez un individu qui se dirige vers la sortie du site que vous surveillez, en courant. Que faites-vous en premier ?",
    options: ["Vous analysez au préalable la réaction des personnes de l'endroit d'où il sort", "Vous l'appréhendez immédiatement, il a sûrement commis un délit", "Vous ne vous en préoccupez pas, il fait sûrement son footing", "Vous demandez l'intervention de la police", "Aucune des autres réponses"],
    correctText: "Vous analysez au préalable la réaction des personnes de l'endroit d'où il sort"
  },
  {
    question: "Une personne qui, ayant connaissance qu'une agression va étre commise contre un tiers par un individu, ne fait rien, commet l'infraction de :",
    options: ["Non assistance à personne en danger", "Aucune des autres réponses", "Omission d'empêcher un crime ou un délit contre l'intégrité d'une personne", "Mise en danger de vie d'autrui", "Non dénonciation d'un crime"],
    correctText: "Omission d'empêcher un crime ou un délit contre l'intégrité d'une personne"
  },
  {
    question: "Quelles sont les conditions de rétention d'une personne dans le cadre de l'article 73 du Code de procédure pénale ?",
    options: ["Si l'état de la personne appréhendée nécessite des soins, l'agent doit immédiatement faire appel aux services médicaux compétents.", "Aucune des réponses", "Si l'état de la personne appréhendée nécessite des soins, l'agent doit immédiatement avertir son avocat", "Si l'état de la personne appréhendée nécessite des soins, l'agent doit rien faire jusqu'à l'arrivée des forces de l'ordre", "Si l'état de la personne appréhendée nécessite des soins, l'agent doit immédiatement faire appel aux forces de l'ordre"],
    correctText: "Si l'état de la personne appréhendée nécessite des soins, l'agent doit immédiatement faire appel aux services médicaux compétents."
  },
  {
    question: "Quelle est la précaution à prendre après l'appréhension d'un individu en application de l'article 73 du CPP ?",
    options: ["L'interroger", "Aucune des autres réponses", "Le maintenir au sol", "Le garder sous surveillance permanente en attendant l'arrivée des forces de l'ordre", "S'occuper de sa surveillance et de sa protection en attendant l'arrivée du directeur de l'établissement"],
    correctText: "Le garder sous surveillance permanente en attendant l'arrivée des forces de l'ordre"
  },
  {
    question: "Qu'est-ce qui constitue un cas de présomption en légitime défense ?",
    options: ["Se défendre en cas d'agression verbale", "Se défendre en cas de dispute", "Se défendre en cas d'agression mentale", "Aucune des autres réponses", "Se défendre contre les auteurs de vols exécutés avec violence"],
    correctText: "Se défendre contre les auteurs de vols exécutés avec violence"
  },
  {
    question: "Quand peut-on considérer que la captation d'une image revêt un caractère illégal ?",
    options: ["Seul la transmission d'une image peut revêtir un caractère illégal", "Quand l'image est fixée sans le consentement d'une personne se trouvant dans un lieu public", "Aucune des réponses est bonne", "Quand l'image est fixée sans le consentement d'une personne se trouvant dans un lieu privé", "Quand l'image est fixée sans le consentement d'une personne se trouvant dans un lieu public ou privé"],
    correctText: "Quand l'image est fixée sans le consentement d'une personne se trouvant dans un lieu privé"
  },
  {
    question: "En vertu de l'article L613-2 du code de la sécurité intérieure, suite à un arrêté prefectoral, l'agent de sécurité peut réaliser des palpations s'il :",
    options: ["S'il justifie de deux années d'exercice professionnel", "S'il justifie de cinq années d'exercice professionnel", "S'il justifie de trois années d'exercice professionnel", "Sans condition d'ancienneté", "S'il est en binôme"],
    correctText: "Sans condition d'ancienneté"
  },
  {
    question: "L'accès à un lieu recevant du public avec un chien guide d'aveugles ou d'assistance est :",
    options: ["Autorisé même si le chien n'est pas identifié comme chien guide ou chien d'assistance", "Autorisé si le chien est d'une taille réduite", "Autorisé si la personne avec le chien est également accompagnée par une autre personne", "Autorisé si le chien est identifié comme chien guide ou chien d'assistance, et si la personne possède les documents le prouvant", "Est interdit dans tous les cas"],
    correctText: "Autorisé si le chien est identifié comme chien guide ou chien d'assistance, et si la personne possède les documents le prouvant"
  },
  {
    question: "Pour demander une carte professionnelle ou une autorisation d'entrée en formation, il est nécessaire de fournir, pour les ressortissants français :",
    options: ["Un certificat médical", "Un justificatif de domicile de moins de 3 mois.", "Un extrait de casier judiciaire B3", "Une copie du permis de conduire", "Un extrait d'acte de naissance pour"],
    correctText: "Un justificatif de domicile de moins de 3 mois."
  },
  {
    question: "Qu'appelle-t-on le Palais Bourbon ?",
    options: ["Le Sénat", "La résidence du Premier ministre", "Le Conseil d'Etat", "L'Assemblée nationale", "Le Conseil constitutionnel"],
    correctText: "L'Assemblée nationale"
  },
  {
    question: "En cas d'arrivée d'une personne avec un chien guide d'aveugles ou d'assistance, l'agent de sécurité privée :",
    options: ["Autorise l'accès de la personne avec son chien mais prévient ses collègues pour surveiller la personne et son chien", "Autorise l'accès de la personne avec son chien dès lors qu'il a reconnu qu'il s'agissait d'un chien guide d'aveugles ou d'assistance", "Arrête la personne afin de demander la consigne à sa hiérarchie", "Lui interdit l'accès si le lieu n'autorise pas les chiens", "Demande à la personne si elle peut se passer de son chien pour entrer"],
    correctText: "Autorise l'accès de la personne avec son chien dès lors qu'il a reconnu qu'il s'agissait d'un chien guide d'aveugles ou d'assistance"
  },
  {
    question: "Je ne peux pas devenir formateur en sécurité privée si :",
    options: ["J'ai eu un retrait de ma carte professionnelle", "Je suis formateur dans un autre domaine", "J'ai été agent de sécurité privée", "J'ai fait un excès de vitesse", "Je n'ai pas passé mon TFP APS"],
    correctText: "J'ai eu un retrait de ma carte professionnelle"
  },
  {
    question: "Il est interdit aux personnes exerçant une activité de sécurité privée",
    options: ["Aucune des autres réponses", "De se livrer à une surveillance sur des lieux recevant du public", "De s'immiscer dans le déroulement d'un conflit du travail.", "De se livrer à une surveillance contre le vol à l'étalage", "De se livrer à une surveillance dans un stade"],
    correctText: "De s'immiscer dans le déroulement d'un conflit du travail."
  },
  {
    question: "La carte professionnelle peut être retirée si le titulaire",
    options: ["Change de site d'affectation", "Déménage dans une autre région", "Fait l'objet d'une inscription sur le bulletin n°2 de son casier judiciaire", "Aucune des autres réponses", "Change d'employeur"],
    correctText: "Fait l'objet d'une inscription sur le bulletin n°2 de son casier judiciaire"
  },
  {
    question: "En cas d'arrivée d'une personne avec un chien guide d'aveugles ou d'assistance, l'agent de sécurité privée :",
    options: ["Peut demander à la personne si elle est en possession des documents justifiant que son chien est un chien guide ou d'assistance", "Accompagne la personne durant ses déplacements dans les lieux", "Autorise l'accès de la personne en lui demandant de faire très attention à son chien", "Arrête la personne afin de demander la consigne à sa hiérarchie", "Lui interdit l'accès si le lieu n'autorise pas les chiens"],
    correctText: "Peut demander à la personne si elle est en possession des documents justifiant que son chien est un chien guide ou d'assistance"
  },
  {
    question: "Le respect des conditions pour être recruté dans une entreprise privée de sécurité est garanti par la détention :",
    options: ["Aucune des autres réponses", "D'un contrat de travail", "D'une carte professionnelle valide dématérialisée délivrée par le Directeur du CNAPS", "D'une attestation de l'employeur", "Un badge au nom de la société qui emploie"],
    correctText: "D'une carte professionnelle valide dématérialisée délivrée par le Directeur du CNAPS"
  },
  {
    question: "Je ne peux pas devenir formateur en sécurité privée si :",
    options: ["J'ai été agent de sécurité privée", "J'ai eu une interdiction temporaire d'exercer", "Je suis formateur dans un autre domaine", "J'ai fait un excès de vitesse", "Je n'ai pas passé mon TFP APS"],
    correctText: "J'ai eu une interdiction temporaire d'exercer"
  },
  {
    question: "Quels sont les principes de la République ?",
    options: ["Indivisible, tolérante, libérale, écologique", "Divisible, religieuse, tyrannique, élégante", "Indivisible, laïque, démocratique, sociale", "Égale, tolérante, libre, entraide", "Ecologique, syndicale, tolérante, libre"],
    correctText: "Indivisible, laïque, démocratique, sociale"
  },
  {
    question: "Selon la Loi, est une arme par destination :",
    options: ["Tout objet pouvant causer des dommages", "Tout objet susceptible de présenter un danger pour les personnes, dès lors qu'il est utilisé pour", "menacer", "Aucune des autres reponses", "Tout objet conçu pour tuer ou blesser"],
    correctText: "Tout objet susceptible de présenter un danger pour les personnes, dès lors qu'il est utilisé pour"
  },
  {
    question: "Le droit d'appréhender conformément à l'article 73 du CPP est :",
    options: ["Un droit de tout citoyen", "Réservé aux forces de l'ordre", "Aucune des autres réponses", "Un droit des seuls citoyens élus ou assermentés", "Réservé aux agents de sécurité"],
    correctText: "Un droit de tout citoyen"
  },
  {
    question: "Constitue une rébellion le fait d'opposer une résistance violente",
    options: ["Lors d'une agression contre sa personne", "Aucune des autres réponses", "A un représentant des forces de l'ordre agissant dans l'exercice de ses fonctions pour l'exécution des lois", "Pour repousser de nuit l'entrée dans un lieu habité", "Dans un cas de légitime défense des biens"],
    correctText: "A un représentant des forces de l'ordre agissant dans l'exercice de ses fonctions pour l'exécution des lois"
  },
  {
    question: "La formation pour le renouvellement de la carte professionnelle d'un agent de sécurité privée (MAC) est financièrement à la charge :",
    options: ["De l'entreprise du site sur lequel je suis en poste", "Des centres de formation accrédités", "Du CNAPS via le Fonds de Modernisation Sociale", "De mon employeur", "Aucune des autres réponses"],
    correctText: "De mon employeur"
  },
  {
    question: "Je suis en situation de pouvoir agir immédiatement contre une atteinte à l'intégrité physique d'une personne :",
    options: ["J'agis même s'il y a risque pour moi, c'est mon devoir d'agent de sécurité privée.", "Je n'agis jamais sauf si je suis autorisé à porter une arme.", "Je n'agis pas. Dans tous les cas, ce sont aux forces de l'ordre d'intervenir.", "J'agis s'il n'y a pas de risque pour moi ou pour autrui.", "Aucune des autres réponses"],
    correctText: "J'agis s'il n'y a pas de risque pour moi ou pour autrui."
  },
  {
    question: "Auprès de qui les APS doivent-il être en mesure de présenter leur carte professionnelle en cas de procédure publique de contrôle ?",
    options: ["Personne car c'est confidentiel", "Uniquement le CNAPS, les forces de l'ordre, le client et le mandant", "Uniquement le CNAPS, les forces de l'ordre, les pompiers et le mandant", "Uniquement les agents du CNAPS et les forces de l'ordre", "Uniquement le CNAPS"],
    correctText: "Uniquement les agents du CNAPS et les forces de l'ordre"
  },
  {
    question: "Quelles sont les conditions de rétention d'une personne dans le cadre de l'article 73 du Code de procédure pénale ?",
    options: ["Il n'y a pas de condition particulière de rétention, l'agent fait comme il veut", "La personne appréhendée peut subir des violences et humiliations si nécessaire", "Aucune des autres réponses", "La personne appréhendée doit être remise en liberté dès lors qu'elle a avoué le délit |", "La personne appréhendée ne doit subir aucune violence ni humiliation"],
    correctText: "La personne appréhendée ne doit subir aucune violence ni humiliation"
  },
  {
    question: "Un agent de sécurité privée peut-il, au regard du livre VI du Code de la Sécurité Intérieure :",
    options: ["Poster un pli urgent sur demande du client ?", "Aucune des autres réponses", "Déneiger le site ?", "Vérifier visuellement le bon fonctionnement de certains dispositifs de contrôle d'accès ?", "Tenir le standard téléphonique du client à plein temps ?"],
    correctText: "Vérifier visuellement le bon fonctionnement de certains dispositifs de contrôle d'accès ?"
  },
  {
    question: "Un Agent de Prévention et de Sécurité d'un service interne doit :",
    options: ["Disposer d'une carte professionnelle délivrée par le Directeur du CNAPS", "Se soumettre au code de déontologie", "Se soumettre à l'application du Livre VI", "Toutes les réponses sont exactes", "Porter une tenue réglementaire"],
    correctText: "Toutes les réponses sont exactes"
  },
  {
    question: "La République française est :",
    options: ["un régime autoritaire", "une démocratie directe", "une monarchie constitutionnelle", "un régime autogéré", "une démocratie représentative"],
    correctText: "une démocratie représentative"
  }
];
