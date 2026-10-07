📱 Phone Checker

██████╗ ██╗  ██╗ ██████╗ ███╗   ██╗███████╗
██╔══██╗██║  ██║██╔═══██╗████╗  ██║██╔════╝
██████╔╝███████║██║   ██║██╔██╗ ██║█████╗
██╔═══╝ ██╔══██║██║   ██║██║╚██╗██║██╔══╝
██║     ██║  ██║╚██████╔╝██║ ╚████║███████╗
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
              ⚡ DEV CIFER ⚡
        Phone Number Checker

🔎 Un site moderne permettant de vérifier la validité et les informations générales d’un numéro de téléphone.

⸻

👨‍💻 Créé par

Dev Cifer

Projet développé pour proposer une interface simple, rapide et responsive permettant de vérifier un numéro de téléphone.

⸻

✨ Fonctionnalités

* 📱 Vérification du format d’un numéro
* 🌍 Détection de plusieurs pays
* ☎️ Détection de l’indicatif
* 🔢 Affichage du numéro fourni
* ⚡ Interface rapide
* 📱 Compatible téléphone
* 💻 Compatible ordinateur
* 🎨 Interface moderne
* 🔒 Aucun mot de passe demandé
* 🚀 Fonctionne sans framework frontend
* ❤️ Signature Dev Cifer

⸻

🖥️ Aperçu

┌──────────────────────────────────────┐
│                                      │
│              ✓                       │
│                                      │
│        PHONE CHECKER                 │
│                                      │
│   Vérifie un numéro de téléphone     │
│                                      │
│   Créé par Dev Cifer                 │
│                                      │
│   ┌────────────────────────┐         │
│   │ +225 07 00 00 00 00    │ Vérif. │
│   └────────────────────────┘         │
│                                      │
│   ┌──────────────────────────────┐   │
│   │ ✓ NUMÉRO VALIDE               │   │
│   │                              │   │
│   │ Numéro     +225...           │   │
│   │ Pays       Côte d'Ivoire     │   │
│   │ Indicatif  +225              │   │
│   └──────────────────────────────┘   │
│                                      │
│       Créé avec ❤️ par Dev Cifer     │
│              © 2026                  │
│                                      │
└──────────────────────────────────────┘

⸻

📂 Structure du projet

phone-checker/
│
├── 📄 index.html
│
├── 🎨 style.css
│
├── ⚙️ script.js
│
└── 📖 README.md

index.html

Contient toute la structure HTML du site :

* interface
* formulaire
* champ téléphone
* bouton de vérification
* résultats
* footer Dev Cifer

style.css

Contient le design :

* couleurs
* espacements
* boutons
* cartes
* responsive mobile
* animations
* footer

script.js

Contient la logique :

* récupération du numéro
* vérification basique
* détection du pays
* détection de l’indicatif
* affichage du résultat

⸻

🚀 Installation

📱 Sur iPhone

Tu peux créer les trois fichiers suivants :

index.html
style.css
script.js

Puis colle le code correspondant dans chaque fichier.

Le site peut ensuite être envoyé sur un hébergeur de sites statiques.

⸻

💻 Sur ordinateur

Télécharge ou crée le dossier :

phone-checker

Puis ajoute :

index.html
style.css
script.js
README.md

Ouvre ensuite :

index.html

dans ton navigateur.

⸻

🌍 Pays actuellement pris en charge

Le frontend de base reconnaît notamment :

🇨🇮 Côte d'Ivoire
    +225
🇫🇷 France
    +33
🇺🇸 États-Unis
    +1
🇨🇦 Canada
    +1
🇬🇧 Royaume-Uni
    +44
🇭🇹 Haïti
    +509

D’autres pays peuvent être ajoutés facilement dans :

script.js

⸻

🔎 Exemple

L’utilisateur entre :

+225 07 00 00 00 00

Le site affiche :

✓ Numéro valide
Numéro :
+225 07 00 00 00 00
Pays :
Côte d'Ivoire
Indicatif :
+225

⸻

⚠️ À propos des bannissements WhatsApp

Ce projet ne prétend pas pouvoir confirmer le bannissement d’un compte WhatsApp avec seulement un numéro.

Le statut de bannissement d’un compte est une information privée côté serveur.

Le site peut donc vérifier :

✓ Format du numéro
✓ Longueur
✓ Indicatif
✓ Pays

mais ne doit pas afficher un faux :

❌ "Ce numéro est définitivement banni"

sans une source officielle permettant réellement de le confirmer.

⸻

🎨 Personnalisation

Tu peux modifier le nom du développeur dans :

index.html

Cherche :

Dev Cifer

Tu peux également modifier :

Phone Checker

pour changer le nom du projet.

⸻

🛠️ Ajouter un pays

Dans script.js, ajoute par exemple :

if (phone.startsWith("+XXX"))
    return "+XXX";

Puis :

if (phone.startsWith("+XXX"))
    return "Nom du pays";

⸻

🔐 Sécurité

Le projet frontend ne demande :

* aucun mot de passe
* aucun compte
* aucune clé API
* aucune information personnelle supplémentaire

⚠️ Si une API backend est ajoutée plus tard, il faudra prévoir :

* rate-limit
* validation serveur
* protection contre le spam
* HTTPS
* limitation des requêtes
* protection des clés API

⸻

📱 Responsive

Le site est conçu pour fonctionner sur :

📱 iPhone
📱 Android
💻 Windows
💻 macOS
🖥️ Desktop

L’interface s’adapte automatiquement à la taille de l’écran.

⸻

🧑‍💻 Développeur

╔════════════════════════════════════╗
║                                    ║
║          ⚡ DEV CIFER ⚡            ║
║                                    ║
║       PHONE CHECKER PROJECT        ║
║                                    ║
║          © 2026 Dev Cifer          ║
║                                    ║
╚════════════════════════════════════╝

Made with ❤️ by Dev Cifer

⸻

📜 Licence

Projet créé par Dev Cifer.

Tu peux modifier le projet pour ton utilisation personnelle.

Si tu redistribues le projet, conserve la mention :

Created by Dev Cifer

⸻

⭐ Merci

Merci d’utiliser Phone Checker — Dev Cifer.

     ██████╗ ███████╗██╗   ██╗
     ██╔══██╗██╔════╝██║   ██║
     ██║  ██║█████╗  ██║   ██║
     ██║  ██║██╔══╝  ╚██╗ ██╔╝
     ██████╔╝███████╗ ╚████╔╝
     ╚═════╝ ╚══════╝  ╚═══╝
             DEV CIFER
