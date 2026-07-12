
# Convertisseur de mesures

Petit convertisseur d'unités en JavaScript vanille, avec historique persistant. Projet personnel réalisé en dehors d'un programme d'apprentissage JS, pour pratiquer les modules ES6.

## Fonctionnalités

- Conversion dans les deux sens pour :
  - Distance (km ↔ miles)
  - Poids (kg ↔ lb)
  - Température (°C ↔ °F)
- Historique des conversions sauvegardé en `localStorage`
- Suppression d'une conversion individuelle dans l'historique
- Bouton pour tout effacer
- Validation du champ de saisie (message d'erreur si vide)

## Stack technique

- HTML / CSS
- JavaScript vanille (ES6+, modules)
- `localStorage` pour la persistance des données
- Aucune dépendance externe

## Architecture

Le code est découpé en modules ES6 selon leur responsabilité :

```
├── index.html
├── style.css
├── main.js          → point d'entrée, orchestration des événements
├── conversions.js    → logique de calcul pure (aucune dépendance au DOM)
├── storage.js        → lecture/écriture dans le localStorage
└── ui.js             → création et manipulation des éléments du DOM
```

## Démo

[https://rb2512.github.io/unit-converter]

## Ce que ce projet m'a permis de pratiquer

- Découpage d'une application en modules ES6 (`import`/`export` nommés et par défaut)
- Manipulation du DOM et délégation d'événements
- Persistance de données avec `localStorage`
- Gestion de la validation d'un formulaire côté client
