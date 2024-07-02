# Documentation technique

[Home](https://github.com/JaxV9/Sneakers)

### Architecture du projet 🛠

L'architecture suivante est un diagramme représentant le fonctionnement du projet sous forme de bloc. En effet chaque bloc présent ici représente une instance isolé. Le fait d'isoler chaque bloc de notre système nous permet de mieux gérer ces derniers.

De plus si nous voulons rajouter des systèmes pour se connecter à ces différents bloc nous pouvons le faire (par exemple développer une application mobile en `SWIFT` ou `Kotlin` ou tout autre logiciel de création d'application dite web app tel que `React Native` ou encore `Flutr` sera donc possible, uniqument une connexion sera nécessaire).

<img src="./">

### Choix technique

Pour ce qui est des choix techniques, nous sommes partie sur plusieurs technologies avangardistes et au goût du jour dans l'objectif de proposer au client la meilleur expérience d'utilisation possible.

<img src="./">

#### Choix front-end

Nous avons développé le POC (Proof Of Concept) avec la dernière version de`React`. `React` est LE framework dans le monde du web. Parfait pour gérer les uses-cases de VEJA, ce dernier nous permettra de développer le projet en toute sécurité.

Ce framework sera donc de choix pour développer :

- Les pages imaginée dans le cadre du workshop
- L'intégration site web marchands de VEJA

#### Choix back-end

Nous avons besoin d'un back-end uniquement pour recevoir les produits du store ainsi que les coupons de réduction.

#### Choix base de donnée

Pour notre POC, nous avons utilisé une base de donnée PostgreSQL.

## Schéma BDD 🗃

<img src="./">
