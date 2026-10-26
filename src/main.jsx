import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Menu, X, Wifi, Snowflake, CarFront, BedDouble, MapPin, Phone, MessageCircle, Sparkles } from 'lucide-react';
import './styles.css';

// À renseigner après confirmation par la direction. Aucun contact fictif n'est utilisé.
const HOTEL = { phone: '', whatsapp: '', address: '', mapsUrl: '' };

const rooms = [
  { name: 'Chambre standard', note: 'Catégorie à confirmer', desc: 'Un espace accueillant pour se reposer après une journée bien remplie.', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Chambre supérieure', note: 'Catégorie à confirmer', desc: 'Une ambiance soignée pour les séjours professionnels ou personnels.', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=85' },
  { name: 'Suite', note: 'Disponibilité à confirmer', desc: 'Une proposition de présentation à adapter à l’offre réelle de l’hôtel.', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85' }
];
const gallery = [
  ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85', 'Architecture hôtelière'],
  ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85', 'Chambre'],
  ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85', 'Intérieur'],
  ['https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85', 'Espace hôtelier']
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [room, setRoom] = useState('Chambre standard');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [guests, setGuests] = useState('2 personnes');
  const [notice, setNotice] = useState('');
  const closeMenu = () => setMenuOpen(false);

  function reserve() {
    if (!HOTEL.whatsapp) {
      setNotice('Maquette de démonstration : ajoutez le numéro WhatsApp officiel de l’hôtel avant la mise en ligne.');
      return;
    }
    const message = `Bonjour IMANS HOTEL, je souhaite demander une réservation. Chambre : ${room}. Arrivée : ${arrival || 'à préciser'}. Départ : ${departure || 'à préciser'}. Voyageurs : ${guests}.`;
    window.open(`https://wa.me/${HOTEL.whatsapp.replace(/\\D/g, '')}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }
  function callHotel() {
    if (HOTEL.phone) window.location.href = `tel:${HOTEL.phone}`;
    else setNotice('Le téléphone officiel sera ajouté après confirmation par l’hôtel.');
  }
  function showMap() {
    if (HOTEL.mapsUrl) window.open(HOTEL.mapsUrl, '_blank', 'noopener,noreferrer');
    else setNotice('L’adresse exacte et le lien Google Maps seront ajoutés après confirmation.');
  }

  return <div className="site">
    <div className="topline"><span className="dot" /> HOSPITALITÉ & CONFORT <i /> DALОA, CÔTE D’IVOIRE</div>
    <header className="header">
      <a className="brand" href="#accueil" onClick={closeMenu}><span className="brand-icon">I<sup>✦</sup></span><span><b>IMANS</b><small>H O T E L</small></span></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir ou fermer le menu">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <a href="#accueil" onClick={closeMenu}>Accueil</a><a href="#chambres" onClick={closeMenu}>Chambres</a><a href="#services" onClick={closeMenu}>Services</a><a href="#galerie" onClick={closeMenu}>Galerie</a><a className="nav-cta" href="#reservation" onClick={closeMenu}>Demander une réservation <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero" id="accueil">
        <div className="hero-photo" /><div className="hero-overlay" />
        <div className="hero-content"><div className="eyebrow"><span/> L’ESPRIT IMANS <span/></div>
          <h1>Votre séjour,<br/><em>en toute sérénité.</em></h1>
          <p>Une adresse à Daloa pour se reposer, se retrouver et profiter pleinement de son séjour.</p>
          <div className="hero-buttons"><a className="btn gold" href="#chambres">Découvrir les chambres <ArrowUpRight size={17}/></a><a className="btn outline" href="#hotel">Découvrir l’hôtel</a></div>
        </div>
        <div className="hero-foot"><span><b>01</b> L’hospitalité au cœur<br/> de chaque attention</span><small>DÉFILER　 ───</small></div>
        <div className="seal"><Sparkles size={18}/><span>CONFORT<br/>& ACCUEIL</span></div>
      </section>

      <section className="booking" id="reservation"><div><small className="kicker">PRÉPAREZ VOTRE SÉJOUR</small><h2>Une demande en quelques instants.</h2></div>
        <div className="booking-fields">
          <label>ARRIVÉE<input type="date" value={arrival} onChange={e=>setArrival(e.target.value)}/></label>
          <label>DÉPART<input type="date" min={arrival || undefined} value={departure} onChange={e=>setDeparture(e.target.value)}/></label>
          <label>VOYAGEURS<select value={guests} onChange={e=>setGuests(e.target.value)}><option>1 personne</option><option>2 personnes</option><option>3 personnes</option><option>4 personnes</option><option>5 personnes et plus</option></select></label>
          <button className="btn dark" onClick={reserve}>Faire une demande <ArrowUpRight size={16}/></button>
        </div>
      </section>

      <section className="section intro" id="hotel"><div className="section-label"><span>01</span> BIENVENUE CHEZ IMANS</div>
        <div className="intro-grid"><h2>Le plaisir de<br/>se sentir <em>bien.</em></h2><div className="intro-copy"><p className="lead">Bienvenue à IMANS HOTEL, votre point de départ pour un séjour à Daloa.</p><p>Cette maquette présente une expérience hôtelière élégante, claire et facile à parcourir. Les photos, catégories de chambres, tarifs et coordonnées définitifs seront ajoutés après validation par la direction.</p><a className="text-link" href="#services">Explorer les services <ArrowUpRight size={16}/></a></div></div>
        <div className="feature-photo"><img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=90" alt="Hôtel, image d’inspiration"/><div><span>IMANS HOTEL</span><span>DALОA · CÔTE D’IVOIRE</span></div></div>
      </section>

      <section className="section rooms" id="chambres"><div className="section-heading"><div><div className="section-label"><span>02</span> ESPACES DE REPOS</div><h2>Des chambres<br/><em>pour vous accueillir.</em></h2></div><p>Les photos et catégories ci-dessous sont provisoires. Elles seront ajustées selon l’offre réelle de l’hôtel. Aucun tarif n’est inventé.</p></div>
        <div className="room-grid">{rooms.map((r,i)=><article className="room-card" key={r.name}><div className="room-photo"><img src={r.image} alt={r.name+' — image d’inspiration'} loading="lazy"/><span>0{i+1}</span></div><div className="room-title"><div><h3>{r.name}</h3><small>{r.note}</small></div><button aria-label={'Choisir '+r.name} onClick={()=>{setRoom(r.name);document.getElementById('reservation').scrollIntoView({behavior:'smooth'});}}><ArrowUpRight size={18}/></button></div><p>{r.desc}</p></article>)}</div>
        <p className="disclaimer"><b>À NOTER</b> Les catégories présentées sont des exemples de maquette et ne confirment pas l’inventaire de l’hôtel.</p>
      </section>

      <section className="section services" id="services"><div className="service-intro"><div className="section-label"><span>03</span> L’ESSENTIEL POUR VOTRE SÉJOUR</div><h2>Le confort,<br/><em>sans compromis.</em></h2><p>Services communiqués pour cette première proposition.</p></div>
        <div className="service-list"><div className="service"><span><BedDouble/></span><div><h3>Hébergement</h3><p>Un espace pour se reposer et profiter de son séjour.</p></div><small>01</small></div><div className="service"><span><Snowflake/><Wifi/></span><div><h3>Climatisation & Wi-Fi</h3><p>Des équipements annoncés pour accompagner votre séjour.</p></div><small>02</small></div><div className="service"><span><CarFront/></span><div><h3>Parking</h3><p>Une solution de stationnement proposée par l’établissement.</p></div><small>03</small></div></div>
      </section>

      <section className="section gallery" id="galerie"><div className="section-heading"><div><div className="section-label"><span>04</span> EN IMAGES</div><h2>Un aperçu de <em>l’expérience.</em></h2></div><p>Les visuels d’inspiration seront remplacés par des photos autorisées de IMANS HOTEL.</p></div><div className="gallery-grid">{gallery.map(([src,label],i)=><div className={'gallery-item gallery-'+i} key={src}><img src={src} alt={label+' — photo d’inspiration'} loading="lazy"/><span>{label}</span></div>)}</div></section>

      <section className="contact-banner"><div className="rings"/><div className="section-label"><span>05</span> NOUS SOMMES À VOTRE ÉCOUTE</div><h2>Votre prochain séjour<br/>commence <em>ici.</em></h2><p>Contactez IMANS HOTEL pour obtenir les informations et disponibilités confirmées.</p><div className="hero-buttons"><button className="btn gold" onClick={reserve}><MessageCircle size={17}/> Demander une réservation</button><button className="btn outline" onClick={callHotel}><Phone size={16}/> Contacter l’hôtel</button></div></section>

      <section className="section location" id="contact"><div><div className="section-label"><span>06</span> NOUS TROUVER</div><h2>À Daloa,<br/><em>près de vous.</em></h2><p>L’adresse exacte et l’itinéraire seront ajoutés après confirmation par l’établissement.</p><button className="text-link" onClick={showMap}>Voir l’itinéraire <ArrowUpRight size={16}/></button></div><div className="map"><div className="map-lines"/><div className="map-pin"><MapPin size={24}/></div><div className="map-card"><MapPin/><div><b>IMANS HOTEL</b><small>Daloa, Côte d’Ivoire</small><em>Adresse à confirmer</em></div></div><small className="map-tag">DALОA · CI</small></div></section>
    </main>

    <footer className="footer"><a className="brand" href="#accueil"><span className="brand-icon">I<sup>✦</sup></span><span><b>IMANS</b><small>H O T E L</small></span></a><p>Une adresse à Daloa. Une expérience à découvrir.</p><div className="footer-bottom"><span>© {new Date().getFullYear()} IMANS HOTEL — Maquette de présentation</span><a href="#accueil">Retour en haut ↑</a></div></footer>
    {notice && <div className="notice" role="status"><span>{notice}</span><button onClick={()=>setNotice('')} aria-label="Fermer"><X size={16}/></button></div>}
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);