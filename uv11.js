const uv11Questions = [
  {
    question: "Sur votre GTB/GTC vous recevez une alarme « SURCHAUFF » au niveau de la chaufferie que devez-vous faire en premier ?",
    options: ["Appeler les services de secours", "Appeler le technicien compétent", "Couper la chaudière", "Aucune des autres réponses", "Arrêter le signal sonore de l'alarme"],
    correctText: "Arrêter le signal sonore de l'alarme"
  },
  {
    question: "Que devez vous fournir éventuellement comme document aux services de secours lors d'une intervention ?",
    options: ["Des extincteurs CO2", "Les consignes de l'établissement", "Aucune des autres réponses", "Les dossiers techniques des installations de sécurité", "_es plans de l'établissement"],
    correctText: "_es plans de l'établissement"
  },
  {
    question: "Quel est l'un des modes de déclenchement dans le fonctionnement d'un DATI ?",
    options: ["En cas d'arrachement et/ou d'agression physique", "En cas d'arrachement et/ou d'agression verbale", "Aucune des autres réponses", "En cas d'arrachement et/ou d'agression morale", "En cas d'arrachement et/ou d'agression psychique"],
    correctText: "En cas d'arrachement et/ou d'agression physique"
  },
  {
    question: "A quoi peut servir une GTC (ou une GTB) dans les missions journalières d'un agent de prévention et de sécurité ?",
    options: ["A disposer d'une information centralisée au PCS notamment des alarmes techniques", "A limiter le nombre de rondes prévues aux consignes du site lorsque tous les voyants sont verts", "A reporter les alarmes émanant du système d'extinction à eau", "Gérer et suivre les contrôles d'entrées et de sorties du site", "Aucune des autres reponses"],
    correctText: "A disposer d'une information centralisée au PCS notamment des alarmes techniques"
  },
  {
    question: "Combien de temps maximum avez-vous pour acquitter le processus d'alarme d'évacuation générale d'un bâtiment où vous étes en poste, avant qu'elle ne se déclenche ?",
    options: ["5 minutes", "10 minutes", "3 minutes", "Le temps maximum dépend du chef d'établissement", "15 minutes"],
    correctText: "5 minutes"
  },
  {
    question: "Un groupe d'individus cagoulés et armés pénètre dans votre établissement et vous êtes seul : que faites-vous ?",
    options: ["J'appelle la relève pour me venir en aide le plus tôt possible", "Je m'enfuis si je peux ou sinon je me confine, et je contacte le 114 par SMS", "Je m'enfuis et je fais appel aux forces de l'ordre le plus rapidement possible", "Je dois agir physiquement pour les expulser de l'établissement", "Aucune des autres réponses"],
    correctText: "Je m'enfuis si je peux ou sinon je me confine, et je contacte le 114 par SMS"
  },
  {
    question: "Quels sont notamment les effets secondaires du courant électrique sur l'homme ?",
    options: ["Aucune des autres réponses", "Une force musculaire décuplée", "Des troubles digestifs", "Des troubles cardiovasculaires et des lésions veineuses", "Une sensation d'euphorie"],
    correctText: "Des troubles cardiovasculaires et des lésions veineuses"
  },
  {
    question: "Vous venez d'alerter les secours, que devez-vous faire ?",
    options: ["Envoyer un membre du personnel du site pour les réceptionner", "Envoyer obligatoirement un agent des services techniques pour les réceptionner", "Aucune des autres réponses", "Rien de particulier juste à les attendre", "Envoyer obligatoirement un agent de sécurité incendie pour les réceptionner"],
    correctText: "Envoyer un membre du personnel du site pour les réceptionner"
  },
  {
    question: "En cas de défaillance du DATI, quelle est l'une des solutions alternatives pouvant étre mise en place ?",
    options: ["L'agent reste au PCS et n'effectue aucune ronde n'ayant pas de dispositif en bon état de fonctionnement", "L'agent envoie des SMS à un de ses collègues toutes les heures", "L'agent de sécurité termine sa vacation normalement", "L'agent fait des appels sécuritaires conformément aux consignes de site", "Aucune des autres reponses"],
    correctText: "L'agent fait des appels sécuritaires conformément aux consignes de site"
  },
  {
    question: "En vous rendant sur une levée de doute intrusion, votre PC vous appelle car une détection incendie vient d'avoir lieu. Que faites-vous ?",
    options: ["Je termine la levée de doute intrusion sans effectuer les contrôles de rigueur pour aller sur la levée de doute incendie", "Je demande au chef de poste d'effectuer lui-mème la levée de doute incendie", "Aucune des autres reponses", "Je poursuis la levée de doute intrusion, étant presque arrivé", "Je fais demi-tour et priorise la détection incendie dont la gravité peut être supérieure"],
    correctText: "Je fais demi-tour et priorise la détection incendie dont la gravité peut être supérieure"
  },
  {
    question: "Sur votre G TB/GTC vous recevez une alarme « défaut groupe électrogène » que devez-vous faire ?",
    options: ["Aucune des autres réponses", "Appeler immédiatement l'électricien de votre établissement conformément aux consignes", "Aller rapidement dans le local pour faire une levée de doute", "Appeler le client pour lui demander la conduite à tenir", "Appeler immédiatement les techniciens de la société de distribution d'électricité"],
    correctText: "Appeler immédiatement l'électricien de votre établissement conformément aux consignes"
  },
  {
    question: "Suite à une détection incendie, votre PC vous demande d'effectuer une levée de doute, à quel moment pouvez-vous lui confirmer la levée de doute ?",
    options: ["Jusqu'à ce que vous identifiez le voyant rouge allumé sur le détecteur, si possible l", "Jusqu'à ce que vous identifiez le voyant jaune allumé sur le détecteur, si possible", "Aucune des autres réponses", "Dès que vous étes arrivé sur zone sans chercher à aller plus loin", "Dès que vous êtes arrivé au niveau sans chercher à aller plus loin"],
    correctText: "Jusqu'à ce que vous identifiez le voyant rouge allumé sur le détecteur, si possible l"
  },
  {
    question: "Quand un agent peut-il alerter les forces de l'ordre lors d'une détection intrusion ?",
    options: ["Dès que l'agent est arrivé sur zone", "Dès que l'agent constate l'ouverture d'une fenêtre", "Dès que l'agent reçoit l'alarme", "Aucune des autres réponses", "Dès que l'intrusion est confirmée"],
    correctText: "Dès que l'intrusion est confirmée"
  },
  {
    question: "Quel type d'alarme existe dans le fonctionnement d'un DATI ?",
    options: ["L'alarme aléatoire", "a perte de verticalité", "Aucune des autres reponses", "L'alarme semi automatique", "La perte d'horizontalité"],
    correctText: "a perte de verticalité"
  },
  {
    question: "De façon générale, quel appareil est utilisable pour effectuer une réanimation cardio-pulmonaire (RCP)?",
    options: ["Un DSE : défibrillateur sécurisé élémentaire", "Aucune des réponses", "Un DMA: défibrillateur à mouvement automatique", "Un DAE : défibrillateur automatisé externe", "Un DAI : défibrillateur automatiséinterne"],
    correctText: "Un DAE : défibrillateur automatisé externe"
  },
  {
    question: "Un voyant rouge fixe est allumé sur l'ECS du SDI, à quoi correspond cette information ?",
    options: ["Un défaut de fonctionnement", "Aucune des autres réponses", "Une alarme feu", "Un défaut de liaison avec un DAI", "Que le SSI est bien alimenté en courant"],
    correctText: "Une alarme feu"
  },
  {
    question: "Un employé appelle au PC Sécurité pour me signaler qu'il se sent mal et qu'il risque de perdre connaissance. Que dois je faire en premier ?",
    options: ["Appeler immédiatement les pompiers", "Lui demander où il se trouve, de s'asseoir ou de s'étendre au sol en attendant les secours", "Prévenir le responsable de la sécurité de l'établissement", "Envoyer l'agent rondier le secourir dès qu'il aura terminé sa ronde", "Aucune des autres réponses"],
    correctText: "Lui demander où il se trouve, de s'asseoir ou de s'étendre au sol en attendant les secours"
  },
  {
    question: "Quels types d'alarme existe-il notamment dans le fonctionnement d'un DATI ?",
    options: ["Déclenchement volontaire - Perte de verticalité", "Perte de liaison - Appel secours", "Signal sonore continu - Alerte générale", "Appel aléatoire - Perte de verticalité", "Aucune des autres réponses"],
    correctText: "Déclenchement volontaire - Perte de verticalité"
  },
  {
    question: "Vous êtes en position de travailleur isolé sur un site de nuit et disposez d'un DATI :",
    options: ["Aucune des autres réponses", "Le DATI est un appareil mis à disposition des agents pour garantir leur sécurité totale", "Le DATI est un élément de la chaîne de sécurité, qui emet un signal afin de déclencher une procédure", "prédéfinie", "Vous êtes totalement en sécurité sil vous arrivait quoi que ce soit"],
    correctText: "Le DATI est un élément de la chaîne de sécurité, qui emet un signal afin de déclencher une procédure"
  },
  {
    question: "En poste au PC Sécurité, je viens d'envoyer un agent en levée de doute incendie, une alarme intrusion se déclenche. Je dois :",
    options: ["Envoyer un technicien vérifier l'équipement qui a dû se déclencher par erreur", "Faire procéder à l'évacuation générale de l'établissement", "Lui demander de se rendre sur l'alarme intrusion et d'arrêter la levée de doute incendie", "Aucune des autres réponses", "Laisser la priorité à l'alarme incendie, la gravité pouvant être plus importante"],
    correctText: "Laisser la priorité à l'alarme incendie, la gravité pouvant être plus importante"
  }
];
