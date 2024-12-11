# PokemonSociety
Ce projet est une API permettant d'exposer des données sur les Pokémon stockées dans une base de données MySQL. L'API permet d'accéder à différentes ressources telles que les Pokémon, leurs types, mouvements, et groupes d'œufs.
# Installation:
- Initialisation du projet : npm init -y
- Installation des dépendances essentielles: 
- express : Framework pour gérer les requêtes HTTP.
- typescript : Langage de programmation qui ajoute des types statiques à JavaScript pour garantir un code plus robuste et facile à maintenir.
- mysql2 : Permet la connexion à une base de données MySQL.
- dotenv : Utilisé pour stocker des informations sensibles dans un fichier .env, comme les informations de connexion à la base de données.
- nodemon : Outil qui redémarre automatiquement votre application lors des modifications de code en mode développement.
- winston : Bibliothèque pour la gestion des logs dans l'application.

# Modele 
Ce dossier contient les définitions des interfaces pour structurer les données liées à Pokémon.

# Contrôleurs 
  Ce dossier contient les fonctions de contrôleurs pour interagir avec la base de données Pokémon. Chaque contrôleur gère des requêtes spécifiques et retourne les résultats sous forme de réponse HTTP.
  # Structure du dossier
### `getAllPokemon`
- **Description** : Récupère la liste complète des Pokémon depuis la base de données.  
- **Route** : `GET /pokemon` 
### `getAllMoves` : Contrôleur pour les attaques.
- **Description** : Récupère la liste complète des attaques (*moves*) depuis la base de données.
- **Route** : `GET /moves`
### `getAllpokemon_type` :Contrôleur pour les types et leurs Pokémon associés.
- **Description** : Récupère les informations sur un type spécifique et les Pokémon associés.
- **Route** : GET /types/:id
- **id** : Identifiant du type à rechercher
### `getAllegg_groups`: contrôleur pour les egggroupes.
**Description** : Récupère la liste complète des groupes d'œufs (egg_groups) depuis la base de données.
**Route** : GET /egg_groups
# Gestion des erreurs : Retourne une réponse avec un code 500 si une erreur survient.

# Route
### `/test` (Egg Groups)
- **Méthode HTTP** : `GET`
- **Description** : Récupère tous les groupes d'œufs (egg groups) de la base de données.
- **Contrôleur** : `getAllegg_groups`

---

### `/test` (Moves)
- **Méthode HTTP** : `GET`
- **Description** : Récupère toutes les attaques disponibles (moves) de la base de données.
- **Contrôleur** : `getAllMoves`

---

###  `/pokemon`
- **Méthode HTTP** : `GET`
- **Description** : Récupère tous les Pokémon de la base de données.
- **Contrôleur** : `getAllPokemon`

---

### `/getAllpokemon_moves/:id`
- **Méthode HTTP** : `GET`
- **Description** : Récupère les attaques (moves) associées à un Pokémon spécifique.
- **Paramètres** :
  - `id` : L'ID du Pokémon pour lequel récupérer les attaques.
- **Contrôleur** : `getAllpokemon_moves`

---

### `/getAllpokemon_type/:id`
- **Méthode HTTP** : `GET`
- **Description** : Récupère les types associés à un Pokémon spécifique.
- **Paramètres** :
  - `id` : L'ID du Pokémon pour lequel récupérer les types.
- **Contrôleur** : `getAllpokemon_type`

---

###`/getAllpokemon_egg/:id`
- **Méthode HTTP** : `GET`
- **Description** : Récupère les groupes d'œufs associés à un Pokémon spécifique.
- **Paramètres** :
  - `id` : L'ID du Pokémon pour lequel récupérer les groupes d'œufs.
- **Contrôleur** : `getAllpokemon_egg`

---

### `/pokemon/:id`
- **Méthode HTTP** : `GET`
- **Description** : Récupère les détails d'un Pokémon spécifique.
- **Paramètres** :
  - `id` : L'ID du Pokémon à récupérer.
- **Contrôleur** : `getAllpokemonId`

---

### `/type`
- **Méthode HTTP** : `GET`
- **Description** : Récupère tous les types disponibles dans la base de données.
- **Contrôleur** : `getAlltype`

### Le fichier dans .gitignore pour éviter de partager des informations sensibles.
### .env  contient des variables d'environnement pour configurer l'application, PORT : Définit le port sur lequel le serveur écoute (par défaut 8080).