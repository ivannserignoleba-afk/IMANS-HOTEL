# IMANS HOTEL — maquette de site vitrine

Site React + Vite responsive pour présenter une proposition de site vitrine à IMANS HOTEL, à Daloa.

## Lancer en local
Prérequis : Node.js.
```bash
npm install
npm run dev
```
Pour compiler : `npm run build`.

## Informations à compléter avant publication
Dans `src/main.jsx`, renseigner l’objet `HOTEL` avec les informations officielles :
- `phone` : téléphone de l’établissement ;
- `whatsapp` : numéro WhatsApp au format international, chiffres uniquement ;
- `address` : adresse exacte ;
- `mapsUrl` : lien Google Maps confirmé.

Les champs sont volontairement vides : aucun numéro ou adresse n’a été inventé. Les boutons affichent un message de démonstration tant que les coordonnées ne sont pas renseignées.

## À valider avec la direction
- Remplacer les images d’inspiration par des photos de l’hôtel autorisées.
- Confirmer les catégories de chambres, les équipements, tarifs et disponibilités.
- Valider les services, l’adresse, le téléphone et le lien de carte.
- Les catégories de chambres sont des exemples de présentation, pas une confirmation de l’offre réelle.

## GitHub Pages
Le fichier `vite.config.js` configure le chemin du dépôt `/IMANS-HOTEL/`. Pour publier, activer GitHub Pages avec GitHub Actions et utiliser un workflow Vite/Node. Cette maquette n’a pas de backend de réservation : la demande sera envoyée par WhatsApp après configuration du numéro officiel.