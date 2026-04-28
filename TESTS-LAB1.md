# Rapport de tests — Lab 1

## Équipe : [Ton Nom de Guerre, ex: Terranga Warriors]
## Testeur : onil tony (QA)

| # | Test | Résultat | Notes |
|---|----------------------------------|------------|------------------------------------------|
| 1 | POST commande valide | ✅ OK | Commande créée avec code 201 |
| 2 | POST commande sans client | ✅ OK | Erreur 400 reçue comme prévu |
| 3 | GET toutes les commandes | ✅ OK | Liste complète récupérée |
| 4 | GET commande par ID | ✅ OK | Détails affichés correctement |
| 5 | GET commande ID inexistant | ✅ OK | Erreur 404 gérée par le contrôleur |
| 6 | PATCH en attente → confirmée | ✅ OK | Transition réussie |
| 7 | PATCH confirmée → en livraison | ✅ OK | Transition réussie |
| 8 | PATCH en livraison → livrée | ✅ OK | État final atteint |
| 9 | PATCH transition interdite | ✅ OK | Bloqué (ex: confirmée vers livrée) |
| 10| PATCH commande livrée | ✅ OK | Impossible de modifier après livraison |
| 11| DELETE commande | ✅ OK | Suppression fonctionnelle (code 204/200) |
| 12| Populate restaurant visible | ✅ OK | Nom et adresse visibles au lieu de l'ID |
| 13| Populate plats visible | ✅ OK | Liste des plats détaillée |