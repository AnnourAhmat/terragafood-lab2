# API TerrangaFood – Documentation

## Base URL
`http://localhost:3001/api`

## Commandes (Lab 1)

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/commandes | Créer une commande |
| GET | /api/commandes | Lister toutes les commandes |
| GET | /api/commandes/:id | Détail d'une commande |
| PATCH | /api/commandes/:id/statut | Changer le statut |
| DELETE | /api/commandes/:id | Supprimer une commande |

### Exemple de création (POST)
```json
{
  "client": "Moussa Diop",
  "telephone": "+221 77 123 45 67",
  "adresseLivraison": "Dakar, Keur Gorgui",
  "restaurant": "ID_RESTAURANT",
  "plats": ["ID_PLAT_1", "ID_PLAT_2"],
  "montantTotal": 4500
}