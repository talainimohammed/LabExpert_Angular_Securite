# Labxpert Angular Securite


## Contexte du projet
L'application LabTech est une plateforme de laboratoire médical utilisée par des professionnels de la santé pour gérer les données des patients, les résultats d'analyses, les rendez-vous, etc. La sécurité des données est cruciale pour garantir la confidentialité et l'intégrité des informations médicales sensibles.</br></br>
​
### 1.Implémentation de l'authentification JWT:
Intégrer un système d'authentification basé sur JWT pour permettre aux utilisateurs de s'identifier de manière sécurisée et d'obtenir un jeton JWT valide.</br></br>
### 2.Gestion des sessions utilisateur:
Mettre en place un mécanisme de gestion des sessions utilisateur à l'aide de JWT pour maintenir l'état d'authentification et stocker les informations utilisateur nécessaires.</br></br>
### 3.Contrôle d'accès basé sur les rôles:
Définir des rôles d'utilisateur (par exemple, admin, médecin, technicien) et mettre en place des Guards au niveau du routing pour restreindre l'accès aux fonctionnalités de l'application en fonction du rôle de l'utilisateur.</br></br>
### 4.Protection des routes sensibles:
Configurer des Guards au niveau du routing pour protéger les routes sensibles de l'application, telles que les pages d'administration ou les fonctionnalités réservées aux utilisateurs authentifiés.</br></br>
### 5.Gestion des jetons JWT expirés:
Implémenter une logique de rafraîchissement des jetons JWT expirés afin de maintenir la session utilisateur active et de prévenir les déconnexions involontaires.
