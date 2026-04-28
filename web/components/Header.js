import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        {/* Le logo qui ramène à l'accueil */}
        <Link href="/" className="header-logo">
          🍛 Terranga<span>Food</span>
        </Link>

        {/* La navigation principale */}
        <nav className="header-nav">
          <Link href="/">Restaurants</Link>
          
          {/* Nouveau lien ajouté ici */}
          <Link href="/mes-commandes">
            Mes commandes
          </Link>
        </nav>
      </div>
    </header>
  );
}