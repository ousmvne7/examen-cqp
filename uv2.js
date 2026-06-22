const uv2Questions = [        {
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
            question: "Le respect des conditions pour être recruté dans une entreprise privée de sécurité est garanti par la détention :",
            options: ["Aucune des autres réponses", "D'une carte professionnelle dématérialisée délivrée par la C.L.A.C", "D'un badge au nom de la société qui emploie", "D'un contrat de travail", "D'une attestation de l'employeur"],
            correctText: "D'une carte professionnelle dématérialisée délivrée par la C.L.A.C",
            tip: "L'attestation officielle de délivrance par la CLAC fait foi juridiquement."
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
            question: "Le renouvellement de la carte professionnelle :",
            options: ["N'est pas obligatoire", "Est subordonné au suivi d'une formation continue", "N'est pas obligatoire pour les anciens fonctionnaires des forces de l'ordre", "Est subordonné à une autorisation de l'employeur", "Aucune des autres réponses"],
            correctText: "Est subordonné au suivi d'une formation continue",
            tip: "Aucun aménagement n'exempte l'agent opérationnel de son recyclage réglementaire."
        },
        {
            question: "Le respect des conditions pour être recruté dans une entreprise privée de sécurité est garanti par la détention :",
            options: ["D'une carte professionnelle dématérialisée délivrée par la C.L.A.C", "Aucune des autres réponses", "D'un badge au nom de la société qui emploie", "D'un contrat de travail", "D'une attestation de l'employeur"],
            correctText: "D'une carte professionnelle dématérialisée délivrée par la C.L.A.C",
            tip: "La CLAC reste l'organe officiel d'enregistrement de la conformité de l'agent."
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
            question: "La demande de renouvellement de ma carte professionnelle doit être présentée :",
            options: ["Au moins 1 mois avant sa date d'expiration", "Au moins 4 mois avant sa date d'expiration", "Aucune des autres réponses", "Au moins 3 mois avant sa date d'expiration", "6 mois avant sa date d'expiration"],
            correctText: "Au moins 3 mois avant sa date d'expiration",
            tip: "Le code de la sécurité intérieure stipule expressément le délai incompressible de 3 mois."
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
            question: "Agent de prévention et de sécurité en poste de filtrage :",
            options: ["Je suis habilité à effectuer un interrogatoire dans certains cas", "Je peux effectuer un relevé d'identité, si les consignes ou le Règlement intérieur le prévoient", "Je suis habilité à effectuer un contrôle d'identité dans certains cas", "Je suis habilité à effectuer une fouille de personne dans certains cas", "Aucune des autres réponses"],
            correctText: "Je peux effectuer un relevé d'identité, si les consignes ou le Règlement intérieur le prévoient",
            tip: "Il s'agit d'enregistrer des identités déclarées pour le contrôle interne des accès."
        },
        {
            question: "Quelle situation est considérée comme un cas d'aggravation de l'infraction de vol ? Le fait de commettre un vol :",
            options: ["En s'enfuyant après le larcin", "Dans un magasin après avoir rendu inopérantes les caméras de surveillance", "En prenant indûment la qualité d'une personne dépositaire de l'autorité publique", "Aucune des autres réponses", "Dans un magasin après s'être laissé enfermer volontairement à la fermeture des portes"],
            correctText: "En prenant indûment la qualité d'une personne dépositaire de l'autorité publique",
            tip: "Se faire passer pour un policier ou gendarme aggrave l'infraction de vol."
        },
        {
            question: "Quelles sont les caractéristiques du casier judiciaire ?",
            options: ["Le casier judiciaire contient les condamnations pénales d'une même personne", "Aucune des autres réponses", "Le casier judiciaire contient les condamnations civiles d'une même personne. Il existe 4 types de bulletins", "Le casier judiciaire contient les condamnations pénales d'une même personne. Il existe 2 types de bulletins", "Le casier judiciaire contient les condamnations pénales et civiles d'une même personne"],
            correctText: "Le casier judiciaire contient les condamnations pénales d'une même personne",
            tip: "Il s'agit du relevé unique automatisé des sanctions répressives pénales."
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
            question: "Agent de prévention et de sécurité en poste de filtrage :",
            options: ["Je suis habilité à effectuer un contrôle d'identité dans certains cas", "Je suis habilité à effectuer une fouille de personne dans certains cas", "Je suis habilité à effectuer un interrogatoire dans certains cas", "Aucune des autres réponses", "Je peux effectuer un relevé d'identité, si les consignes ou le Règlement intérieur le prévoient"],
            correctText: "Je peux effectuer un relevé d'identité, si les consignes ou le Règlement intérieur le prévoient",
            tip: "Seules les forces de l'ordre contrôlent l'identité. L'APS se limite au registre d'accès."
        },
        {
            question: "Quelles sont les principales missions de la Gendarmerie ?",
            options: ["La surveillance uniquement des campagnes", "La surveillance uniquement des villes", "La dissuasion, la prévention, la protection et l'intervention", "Aucune des autres réponses", "Assurer uniquement les contrôles routiers de dépassement de vitesse"],
            correctText: "La dissuasion, la prévention, la protection et l'intervention",
            tip: "Ces composantes opérationnelles définissent le rôle global de sécurité de la gendarmerie."
        },
        {
            question: "Un Agent de Prévention et de Securité d'un service interne doit :",
            options: ["Porter une tenue réglementaire", "Se soumettre au code de déontologie", "Disposer d'une carte professionnelle délivrée par la CLAC", "Toutes les réponses sont exactes"],
            correctText: "Toutes les réponses sont exactes",
            tip: "Qu'il soit prestataire ou interne, l'agent reste lié par les obligations globales du CSI."
        },
        {
            question: "La légitime défense, c'est :",
            options: ["Le droit de se faire justice soi-même", "Riposter violemment peu importe la gravité de l'agression", "Aucune des autres réponses", "Le droit de se défendre ou de défendre autrui contre une agression physique injuste", "Le droit de se défendre physiquement suite à une agression verbale"],
            correctText: "Le droit de se défendre ou de défendre autrui contre une agression physique injuste",
            tip: "Il s'agit d'une cause d'irresponsabilité pénale face à un péril physique injustifié."
        },
        {
            question: "Laquelle de ces propositions constitue une infraction ?",
            options: ["Le fait de ne pas remplir correctement la main courante", "Le fait de ne pas porter secours à une personne blessée dans l'établissement surveillé.", "Le fait d'arriver en léger retard à sa prise de poste sans avoir prévenu.", "Aucune des autres réponses", "Le fait de ne pas agir contre une personne qui menace avec une arme"],
            correctText: "Le fait de ne pas porter secours à une personne blessée dans l'établissement surveillé.",
            tip: "L'omission de secours face à une personne en détresse constitue un délit pénal."
        },
        {
            question: "Le fait de commettre des violences sur autrui ayant entraîné une ITT de plus de 8 jours est une infraction qualifiée de :",
            options: ["Crime passible d'emprisonnement", "Aucune des autres réponses", "Contravention passible d'emprisonnement", "Délit passible d'emprisonnement", "Rappel à la loi passible d'emprisonnement"],
            correctText: "Délit passible d'emprisonnement",
            tip: "Les coups et blessures avec une ITT > 8 jours sont du ressort correctionnel (délit)."
        },
        {
            question: "La demande de renouvellement de ma carte professionnelle doit être présentée :",
            options: ["6 mois avant sa date d'expiration", "Au moins 3 mois avant sa date d'expiration", "Aucune des autres réponses", "Au moins 4 mois avant sa date d'expiration", "Au moins 1 mois avant sa date d'expiration"],
            correctText: "Au moins 3 mois avant sa date d'expiration",
            tip: "Délai légal pour l'instruction administrative des demandes de renouvellement."
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
            question: "Je suis agent de prévention et de sécurité, intervenant en sous-traitance, pour une autre entreprise de sécurité, quelle tenue dois-je porter ?",
            options: ["La tenue de mon entreprise", "Aucune des autres réponses", "Peu importe la tenue, seule la carte professionnelle compte", "Je dois porter ma tenue mais avec les insignes et les logos de l'entreprise qui détient le contrat", "La tenue de l'entreprise qui détient le contrat"],
            correctText: "La tenue de mon entreprise",
            tip: "Même en sous-traitance, l'agent arbore l'uniforme officiel de son employeur direct."
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
            question: "La formation pour le renouvellement de la carte professionnelle (Maintien et Actualisation de Connaissances), est à la charge :",
            options: ["Aucune des autres réponses", "Du CNAPS via le Fonds de Modernisation Sociale", "De l'entreprise du site sur lequel je suis en poste", "Des centres de formation accrédités", "De mon employeur, conformément à l'accord de branche"],
            correctText: "De mon employeur, conformément à l'accord de branche",
            tip: "Le maintien obligatoire des compétences incombe financièrement au chef d'entreprise."
        },
        {
            question: "Le renouvellement de la carte professionnelle :",
            options: ["N'est pas obligatoire", "Est subordonné à une autorisation de l'employeur", "Aucune des autres réponses", "N'est pas obligatoire pour les anciens fonctionnaires des forces de l'ordre", "Est subordonné au suivi d'une formation continue"],
            correctText: "Est subordonné au suivi d'une formation continue",
            tip: "Le recyclage réglementaire valide la prolongation quinquennale d'activité."
        },
        {
            question: "Le directeur de l'établissement où je suis en poste me demande de prendre un colis à l'accueil pour le déposer dans un service interne pendant ma ronde :",
            options: ["Je ne le fais pas, car je n'ai pas de chariot adapté à la mission", "Je le fais, puisque le principe d'exclusivité ne s'applique qu'à mon entreprise", "Aucune des autres réponses", "Je ne le fais pas, car le principe d'exclusivité prévu dans le CSI, m'interdit de le faire", "Je le fais, puisque cela ne me détourne pas de mon circuit de ronde"],
            correctText: "Je ne le fais pas, car le principe d'exclusivité prévu dans le CSI, m'interdit de le faire",
            tip: "Le principe d'exclusivité des métiers de sécurité interdit l'exercice d'activités logistiques."
        },
        {
            question: "Je suis en situation de pouvoir agir immédiatement contre une atteinte à l'intégrité physique d'une personne :",
            options: ["Je n'agis pas. Dans tous les cas, ce sont aux forces de l'ordre d'intervenir.", "Aucune des autres réponses", "J'agis même s'il y a risque pour moi, c'est mon devoir d'APS.", "Je n'agis jamais sauf si je suis autorisé à porter une arme.", "J'agis s'il n'y a pas de risque pour moi ou pour autrui."],
            correctText: "J'agis s'il n'y a pas de risque pour moi ou pour autrui.",
            tip: "Porter secours est requis tant que l'intégrité du sauveteur n'est pas menacée."
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
            question: "Un Agent de Prévention et de Sécurité d'un service interne doit :",
            options: ["Porter une tenue réglementaire", "Se soumettre au code de déontologie", "Disposer d'une carte professionnelle délivrée par la CLAC", "Toutes les réponses sont exactes"],
            correctText: "Toutes les réponses sont exactes",
            tip: "L'ensemble de ces piliers réglementaires régit l'activité, même au sein d'une boîte interne."
        },
        {
            question: "Dans le cas où l'agent n'a pas passé sa formation MAC à la date anniversaire du renouvellement de la carte professionnelle :",
            options: ["Il a 12 mois pour travailler et passer la formation avant sa perte définitive", "Aucune des autres réponses", "Il a 12 mois pour passer la formation MAC mais il n'a plus le droit de travailler", "Il peut travailler avec une confirmation d'inscription au MAC attestée par un Centre de Formation agréé", "Il doit obligatoirement repasser l'intégralité de la formation"],
            correctText: "Il a 12 mois pour passer la formation MAC mais il n'a plus le droit de travailler",
            tip: "L'autorisation d'exercer tombe le jour de l'échéance, laissant 1 an de sursis pour recycler."
        },
        {
            question: "Parmi ces infractions, laquelle porte atteinte aux intérêts fondamentaux de la nation ?",
            options: ["La délation", "L'abus de droit public", "Le sabotage", "La rébellion", "La violation de domicile"],
            correctText: "Le sabotage",
            tip: "Détruire des infrastructures vitales pour la nation lèse gravement la souveraineté."
        },
        {
            question: "Une arme d'épaule à répétition automatique relevant du matériel de guerre est une arme de catégorie :",
            options: ["D", "C", "A", "B", "Aucune des autres réponses"],
            correctText: "A",
            tip: "Les armes lourdes et automatiques de guerre intègrent la catégorie A."
        },
        {
            question: "Un Revolver chambré pour le calibre 38 Spécial est une arme de catégorie :",
            options: ["Aucune des autres réponses", "C", "A", "D", "B"],
            correctText: "B",
            tip: "Arme de poing de défense classique soumise à autorisation préfectorale."
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
            question: "Selon le code pénal, est assimilé à une arme :",
            options: ["Aucune des autres réponses", "Tout objet présentant une ressemblance avec une arme de nature à créer une confusion pour menacer de tuer ou blesser", "Uniquement les armes de fonction", "Tout objet représentant un danger", "Uniquement les armes en état de fonctionnement"],
            correctText: "Tout objet présentant une ressemblance avec une arme de nature à créer une confusion pour menacer de tuer ou blesser",
            tip: "L'effet d'intimidation créé par une arme factice retient la qualification pénale d'arme."
        },
        {
            question: "Agent Rondier Intervenant, je viens d'apprendre par lettre recommandée que j'ai perdu mon permis de conduire :",
            options: ["Je dois prévenir mon employeur pour mettre en place une solution transitoire", "Etant en fonction d'agent de sécurité, je reste habilité à conduire uniquement pour mon activité de sécurité privée", "Je demande à un ami disposant du permis de me conduire sur les lieux d'intervention.", "Je m'inscris à un stage de récupération de points et continue à tenir mon poste de rondier intervenant", "Aucune des autres réponses"],
            correctText: "Je dois prévenir mon employeur pour mettre en place une solution transitoire",
            tip: "Conduire sans permis est un délit, l'employeur doit être alerté immédiatement."
        },
        {
            question: "La liberté d'aller et venir s'inscrit dans le respect :",
            options: ["De la convention européenne des droits de l'homme de 1950", "De la déclaration des droits de l'homme et du citoyen de 1789", "Du code de la sécurité intérieure", "Du code de procédure pénale", "De la déclaration universelle des droits de l'homme de 1948 et son article 13"],
            correctText: "De la déclaration universelle des droits de l'homme de 1948 et son article 13",
            tip: "Garantie par le texte fondamental onusien des droits humains."
        },
        {
            question: "Je dispose de deux contrats à temps plein dans deux entreprises de sécurité privée différentes :",
            options: ["J'ai parfaitement le droit puisque je ne dépasse pas le temps légal de travail journalier", "Je n'ai pas le droit sauf si je dispose de deux cartes professionnelles", "J'ai parfaitement le droit si je préviens les deux employeurs", "Je n'ai pas le droit de cumuler deux emplois à temps plein", "Aucune des autres réponses"],
            correctText: "Je n'ai pas le droit de cumuler deux emplois à temps plein",
            tip: "Enfreindre les durées maximales du travail est illégal au regard du Code du travail."
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
        }
    ];