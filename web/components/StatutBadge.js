// Mapping statut → classe CSS (vérifie que ces classes existent dans ton CSS)
const statutClasses = {
  'en attente': 'statut-en-attente',
  'confirmée': 'statut-confirmee',
  'en livraison': 'statut-en-livraison',
  'livrée': 'statut-livree',
  'annulée': 'statut-annulee',
};

// Mapping statut → emoji pour rendre l'interface plus vivante
const statutEmojis = {
  'en attente': '⏳',
  'confirmée': '✅',
  'en livraison': '🛵',
  'livrée': '🥡',
  'annulée': '❌',
};

export default function StatutBadge({ statut }) {
  // On récupère la classe et l'emoji, ou rien par défaut si le statut est inconnu
  const classe = statutClasses[statut] || '';
  const emoji = statutEmojis[statut] || '';

  return (
    <span className={`statut-badge ${classe}`}>
      {emoji} {statut}
    </span>
  );
}