import type { LessonDiagramSpec } from "./registry";
export const AI_CONTEXT_DIAGRAMS: readonly LessonDiagramSpec[] = [
  {
    id: "biasloop",
    title: "Ce que l’on mesure peut orienter les décisions suivantes",
    paths: [
      "/intelligence-artificielle/ethique-et-societe/biais/biais-algorithmiques-exemples-documentes",
    ],
    steps: [
      {
        label: "Choisir quoi observer",
        caption: "Les données ne sont pas une copie complète de la réalité.",
        detail:
          "Les deux zones fictives contiennent ici autant d’événements, mais l’effort d’observation diffère. Les nombres sont construits pour illustrer un biais de sélection, pas une mesure d’infractions ni une carte de population.",
      },
      {
        label: "Utiliser les observations",
        caption:
          "Un système peut prendre les observations partielles pour une mesure du phénomène.",
        detail:
          "Les huit observations de la zone A et les deux de B reflètent ici un effort de mesure inégal. Les exploiter sans ce contexte peut orienter davantage de moyens vers A, même si les événements réels sont aussi nombreux.",
      },
      {
        label: "Renforcer la boucle",
        caption:
          "Les décisions peuvent produire de nouvelles données qui entretiennent le même ciblage.",
        detail:
          "La flèche de retour illustre un risque de rétroaction, pas une évolution inévitable. Il faut aussi examiner les objectifs choisis, les facteurs institutionnels et l’interprétation humaine ; changer les seules données ne suffit pas toujours.",
      },
    ],
    limit:
      "Scénario fictif de sélection avec dix événements par zone et observations choisies. Aucun quartier réel ou groupe démographique. Les biais peuvent être systémiques, statistiques et humains ; la boucle n’en représente qu’une forme.",
    source: {
      title: "NIST — SP 1270, Identifying and Managing Bias in AI",
      url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf",
    },
  },
  {
    id: "aiact",
    title: "Des règles différentes selon la pratique et le contexte",
    paths: [
      "/intelligence-artificielle/ethique-et-societe/regulation/reglement-europeen-sur-lia-ai-act",
    ],
    steps: [
      {
        label: "Certaines pratiques interdites",
        caption: "Des pratiques définies par le texte sont interdites.",
        detail:
          "La notation sociale visée par l’article 5 est un exemple soumis à des critères précis, notamment un traitement préjudiciable dans un autre contexte ou injustifié ou disproportionné. Tout score numérique n’est pas interdit.",
      },
      {
        label: "Des usages à haut risque",
        caption: "Certains usages nécessitent une classification et des exigences renforcées.",
        detail:
          "Le dossier de recrutement illustre un domaine de l’annexe III, à lire avec les règles de classification de l’article 6. Gestion des risques, documentation et contrôle humain font partie du cadre ; la liste dessinée n’est pas exhaustive.",
      },
      {
        label: "Informer les personnes",
        caption:
          "Certaines interactions et certains contenus sont soumis à des obligations de transparence.",
        detail:
          "La bulle marquée IA représente une information sur l’interaction. L’article 50 distingue plusieurs obligations, destinataires et exceptions. Des obligations peuvent se cumuler ; les autres systèmes et modèles à usage général ont aussi leur propre cadre.",
      },
    ],
    limit:
      "Repères pédagogiques, pas quatre cases exclusives ni une évaluation de conformité. Articles 5, 6, 14, 50 et annexe III consultés le 9 novembre 2026 sur le service officiel de la Commission ; aucun calendrier ou montant de sanction n’est représenté.",
    source: {
      title: "Commission européenne — AI Act Service Desk, texte et annexes",
      url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-5",
    },
  },
  {
    id: "worktasks",
    title: "Un métier regroupe plusieurs tâches différentes",
    paths: [
      "/intelligence-artificielle/ethique-et-societe/travail-et-usages/ia-et-transformation-du-travail",
    ],
    steps: [
      {
        label: "Décomposer le travail",
        caption: "Un même métier peut réunir rédaction, vérification et échanges.",
        detail:
          "Le dossier fictif regroupe trois tâches d’exemple, sans prétendre décrire toute une profession. Les cartes ont la même taille pour rester lisibles, pas parce qu’elles prendraient chacune un tiers du temps de travail.",
      },
      {
        label: "Une tâche assistée",
        caption: "Une IA peut proposer un brouillon à l’intérieur d’un travail plus large.",
        detail:
          "Le bloc IA est relié seulement à la carte du premier jet. Le gain dépend de la tâche, de la qualité obtenue et du temps de vérification ; aucun pourcentage de productivité ou de remplacement n’est calculé.",
      },
      {
        label: "Un travail recomposé",
        caption: "Le premier jet peut passer par une vérification puis par un échange humain.",
        detail:
          "Le scénario montre une organisation possible, sans promettre que les emplois seront préservés ou supprimés. L’exposition de tâches à une technologie n’est pas une prévision directe de pertes d’emplois.",
      },
    ],
    limit:
      "Trois tâches illustratives, sans durée, classement de métiers ou prévision économique. L’étude OIT 2025 évalue une exposition potentielle à l’IA générative et distingue cette exposition des effets effectifs sur l’emploi.",
    source: {
      title: "OIT — Generative AI and Jobs, Working Paper 140, 2025",
      url: "https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure",
    },
  },
  {
    id: "facematching",
    title: "Distinguer deux erreurs et mesurer leurs écarts",
    paths: [
      "/intelligence-artificielle/ethique-et-societe/biais/pourquoi-certains-logiciels-de-reconnaissance-faciale-se-trompent-ils-plus-sur-certains-visages",
    ],
    steps: [
      {
        label: "Deux personnes confondues",
        caption: "Une fausse correspondance associe deux personnes différentes.",
        detail:
          "Les cartes A et B représentent des identités fictives différentes. Le résultat erroné « même personne » illustre un faux positif, sans exécuter une reconnaissance ni attribuer des caractéristiques sensibles aux portraits.",
      },
      {
        label: "Une personne non reconnue",
        caption: "Une non-correspondance peut séparer deux photos d’une même personne.",
        detail:
          "Les deux cartes A désignent ici la même identité malgré un éclairage différent. Un résultat « personnes différentes » est un faux négatif. Cette erreur n’a pas toujours les mêmes conséquences qu’un faux positif.",
      },
      {
        label: "Comparer par groupe",
        caption: "Une moyenne globale peut masquer des taux d’erreur différents.",
        detail:
          "Deux séries fictives de dix essais produisent ici deux et quatre erreurs du même type. Les 20 % et 40 % ne sont pas des résultats du NIST ni de Gender Shades ; les tests réels dépendent des algorithmes, des tâches et des images.",
      },
    ],
    limit:
      "Portraits symboliques et résultats inventés, sans inférence d’identité, de sexe ou d’origine. Gender Shades évaluait une classification de genre ; le NIST 2019 évaluait des correspondances d’identité. Les tâches et types d’erreur doivent rester distincts.",
    source: {
      title: "NIST — Demographic effects on face recognition, étude 2019",
      url: "https://www.nist.gov/news-events/news/2019/12/nist-study-evaluates-effects-race-age-sex-face-recognition-software",
    },
  },
  {
    id: "justiceai",
    title: "Analyser des décisions ne remplace pas l’examen d’un dossier",
    paths: [
      "/intelligence-artificielle/ethique-et-societe/travail-et-usages/que-peut-faire-l-ia-dans-un-tribunal-et-qu-est-ce-qui-est-interdit",
    ],
    steps: [
      {
        label: "Des décisions passées",
        caption: "Une analyse peut extraire des éléments de décisions précédentes.",
        detail:
          "Les documents et leurs éléments sont fictifs. Le dessin représente une opération d’analyse, sans prédire l’issue d’un litige ni affirmer que tout traitement de décisions serait libre de contraintes.",
      },
      {
        label: "Vérifier le cas concret",
        caption: "Des résultats doivent être confrontés aux pièces et aux règles pertinentes.",
        detail:
          "La loupe symbolise la vérification des sources et du dossier, sans score de culpabilité ni pourcentage de succès. Un précédent statistique ne dispense pas d’examiner les faits, le droit et les arguments propres à une affaire.",
      },
      {
        label: "Une interdiction française ciblée",
        caption:
          "L’identité des magistrats et du greffe ne peut servir à profiler leurs pratiques.",
        detail:
          "L’article L111-13 du Code de l’organisation judiciaire interdit la réutilisation de leurs données d’identité pour évaluer, analyser, comparer ou prédire leurs pratiques professionnelles réelles ou supposées. Le bloc barré vise cet usage précis.",
      },
    ],
    limit:
      "Exemple documentaire sans dossier réel ni conseil juridique individuel. La dernière scène résume une interdiction française ciblée ; elle ne résume pas toutes les règles françaises ou européennes applicables aux outils de justice. Source consultée le 9 novembre 2026.",
    source: {
      title: "Légifrance — Code de l’organisation judiciaire, article L111-13",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038311162",
    },
  },
];
