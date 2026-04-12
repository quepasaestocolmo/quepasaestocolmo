'use client'

export default function Home() {
  return (
    <main style={{fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0, background: 'white'}}>

      {/* BARRA SUPERIOR */}
      <div style={{background: '#6b00da', color: 'white', textAlign: 'center', padding: '8px', fontSize: '13px'}}>
        🌸 Primavera en Estocolmo — Descubre los mejores planes de la temporada
      </div>

      {/* NAV DESKTOP */}
      <style>{`
        .nav-links { display: flex; gap: 32px; }
        .nav-right { display: flex; align-items: center; gap: 12px; }
        .hamburger { display: none; flex-direction: column; gap: 4px; cursor: pointer; }
        .mobile-menu { display: none; }
        .hero-img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .grid-editorial { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .guides-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-right { display: none; }
          .hamburger { display: flex; }
          .mobile-menu.open { display: flex; flex-direction: column; background: white; padding: 20px; gap: 16px; border-bottom: 1px solid #eee; }
          .grid-editorial { grid-template-columns: 1fr; }
          .guides-grid { grid-template-columns: 1fr; }
          .hero-height { height: 70vh !important; }
        }
      `}</style>

      <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 40px', borderBottom: '1px solid #eee', background: 'white', position: 'sticky', top: 0, zIndex: 100}}>
        <div style={{fontWeight: 900, fontSize: '16px', color: '#6b00da', lineHeight: 1.1}}>
          <div>¿QUÉ PASA?</div>
          <div style={{color: '#FFD600', WebkitTextStroke: '1px #6b00da'}}>ESTOCOLMO</div>
        </div>
        <div className="nav-links" style={{fontSize: '14px', fontWeight: 500}}>
          <a href="#" style={{color: '#0f0f0f', textDecoration: 'none'}}>Guías</a>
          <a href="#" style={{color: '#0f0f0f', textDecoration: 'none'}}>Eventos</a>
          <a href="#" style={{color: '#0f0f0f', textDecoration: 'none'}}>Noticias</a>
          <a href="#" style={{color: '#0f0f0f', textDecoration: 'none'}}>Galería</a>
        </div>
        <div className="nav-right">
          <select style={{border: '1px solid #eee', borderRadius: '6px', padding: '4px 8px', fontSize: '13px', cursor: 'pointer'}}>
            <option value="es">🇪🇸 ES</option>
            <option value="en">🇬🇧 EN</option>
            <option value="sv">🇸🇪 SV</option>
          </select>
          <a href="https://instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer" style={{background: '#6b00da', color: 'white', padding: '8px 20px', borderRadius: '20px', fontSize: '13px', textDecoration: 'none', fontWeight: 600}}>
            Seguirnos
          </a>
        </div>
        <div className="hamburger" onClick={() => {
          const menu = document.getElementById('mobile-menu')
          if (menu) menu.classList.toggle('open')
        }}>
          <div style={{width: '22px', height: '2px', background: '#0f0f0f', borderRadius: '2px'}}></div>
          <div style={{width: '22px', height: '2px', background: '#0f0f0f', borderRadius: '2px'}}></div>
          <div style={{width: '22px', height: '2px', background: '#0f0f0f', borderRadius: '2px'}}></div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div id="mobile-menu" className="mobile-menu">
        <a href="#" style={{color: '#0f0f0f', textDecoration: 'none', fontWeight: 500, fontSize: '16px'}}>Guías</a>
        <a href="#" style={{color: '#0f0f0f', textDecoration: 'none', fontWeight: 500, fontSize: '16px'}}>Eventos</a>
        <a href="#" style={{color: '#0f0f0f', textDecoration: 'none', fontWeight: 500, fontSize: '16px'}}>Noticias</a>
        <a href="#" style={{color: '#0f0f0f', textDecoration: 'none', fontWeight: 500, fontSize: '16px'}}>Galería</a>
        <a href="https://instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer" style={{background: '#6b00da', color: 'white', padding: '10px 20px', borderRadius: '20px', fontSize: '14px', textDecoration: 'none', fontWeight: 600, textAlign: 'center'}}>
          Seguirnos en Instagram
        </a>
      </div>

      {/* HERO */}
      <div className="hero-height" style={{position: 'relative', height: '90vh', overflow: 'hidden'}}>
        <img className="hero-img" src="/hero.webp .webp" alt="Estocolmo" />
        <div style={{position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)'}} />
        <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px'}}>
          <div style={{background: '#FFD600', color: '#6b00da', fontSize: '12px', fontWeight: 700, padding: '4px 16px', borderRadius: '20px', marginBottom: '20px', letterSpacing: '0.1em'}}>
            TU GUÍA DE ESTOCOLMO EN ESPAÑOL
          </div>
          <h1 style={{color: 'white', fontSize: 'clamp(32px, 6vw, 72px)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 20px', maxWidth: '800px'}}>
            Descubre todo lo que pasa en Estocolmo
          </h1>
          <p style={{color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(15px, 2vw, 18px)', marginBottom: '32px', maxWidth: '500px'}}>
            Eventos, guías, noticias y los mejores rincones de la ciudad — en tu idioma.
          </p>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <a href="#" style={{background: '#6b00da', color: 'white', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '15px'}}>
              Explorar guías
            </a>
            <a href="#" style={{background: '#FFD600', color: '#6b00da', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '15px'}}>
              Ver eventos
            </a>
          </div>
        </div>
      </div>

      {/* GRID EDITORIAL */}
      <div style={{maxWidth: '1200px', margin: '60px auto', padding: '0 24px'}}>
        <h2 style={{fontSize: '28px', fontWeight: 900, marginBottom: '24px', color: '#0f0f0f'}}>
          Lo mejor de Estocolmo
        </h2>
        <div className="grid-editorial">
          <div style={{position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '500px', cursor: 'pointer'}}>
            <img src="/gamla-stan.webp.webp" alt="Gamla Stan" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
            <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(107,0,218,0.85) 0%, transparent 60%)'}} />
            <div style={{position: 'absolute', bottom: 0, padding: '24px'}}>
              <span style={{background: '#6b00da', color: 'white', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', letterSpacing: '0.08em'}}>GUÍAS</span>
              <h3 style={{color: 'white', fontSize: '24px', fontWeight: 900, margin: '12px 0 8px', lineHeight: 1.2}}>
                Gamla Stan en un día — el itinerario perfecto
              </h3>
              <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '14px', margin: 0}}>Por Qué Pasa Estocolmo · 5 min de lectura</p>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {[
              {img: '/stortorget.webp.webp', cat: 'ACTIVIDADES', title: 'Qué hacer en Estocolmo en primavera 2026'},
              {img: '/ciudad.webp.webp', cat: 'TURISMO', title: 'Los mejores miradores para fotografiar la ciudad'},
              {img: '/noche.webp.webp', cat: 'NOTICIAS', title: 'El clima en Estocolmo esta semana'},
            ].map((item, i) => (
              <div key={i} style={{position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '152px', cursor: 'pointer'}}>
                <img src={item.img} alt={item.title} style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
                <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(107,0,218,0.8) 0%, transparent 60%)'}} />
                <div style={{position: 'absolute', bottom: 0, padding: '16px'}}>
                  <span style={{background: '#FFD600', color: '#6b00da', fontSize: '10px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px'}}>{item.cat}</span>
                  <p style={{color: 'white', fontSize: '14px', fontWeight: 700, margin: '6px 0 0', lineHeight: 1.3}}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ÚLTIMAS GUÍAS */}
      <div style={{background: '#f9f9f9', padding: '60px 24px'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px'}}>
            <h2 style={{fontSize: '28px', fontWeight: 900, color: '#0f0f0f', margin: 0}}>Últimas guías</h2>
            <a href="#" style={{color: '#6b00da', fontWeight: 700, textDecoration: 'none', fontSize: '14px'}}>Ver todas →</a>
          </div>
          <div className="guides-grid">
            {[
              {img: '/gamla-stan.webp.webp', cat: 'Guías & Tips', title: 'Cómo moverse en Estocolmo — metro y la tarjeta SL'},
              {img: '/stortorget.webp.webp', cat: 'Actividades', title: 'Estocolmo con poco presupuesto — qué hacer gratis'},
              {img: '/ciudad.webp.webp', cat: 'Turismo', title: 'Las mejores playas cerca de Estocolmo en verano'},
              {img: '/noche.webp.webp', cat: 'Cultura', title: 'Södermalm para turistas — cafés y miradores'},
            ].map((item, i) => (
              <div key={i} style={{background: 'white', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'}}>
                <div style={{position: 'relative', height: '180px'}}>
                  <img src={item.img} alt={item.title} style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
                  <span style={{position: 'absolute', top: '12px', left: '12px', background: 'white', color: '#6b00da', fontSize: '10px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px'}}>{item.cat}</span>
                </div>
                <div style={{padding: '16px'}}>
                  <p style={{fontWeight: 700, fontSize: '14px', lineHeight: 1.4, margin: '0 0 8px', color: '#0f0f0f'}}>{item.title}</p>
                  <p style={{color: '#999', fontSize: '12px', margin: 0}}>Qué Pasa Estocolmo</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA INSTAGRAM */}
      <div style={{background: '#6b00da', padding: '60px 24px', textAlign: 'center'}}>
        <div style={{maxWidth: '600px', margin: '0 auto'}}>
          <div style={{fontSize: '40px', marginBottom: '16px'}}>📸</div>
          <h2 style={{color: 'white', fontSize: '32px', fontWeight: 900, margin: '0 0 12px'}}>
            Síguenos en Instagram
          </h2>
          <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '16px', marginBottom: '28px'}}>
            +35,000 seguidores ya descubren Estocolmo con nosotros cada día
          </p>
          <a href="https://instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer" style={{background: '#FFD600', color: '#6b00da', padding: '14px 36px', borderRadius: '8px', fontWeight: 900, textDecoration: 'none', fontSize: '16px'}}>
            @quepasaestocolmoo
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{background: '#0f0f0f', color: 'white', padding: '40px 24px'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px'}}>
          <div>
            <div style={{fontWeight: 900, fontSize: '16px', color: '#6b00da', lineHeight: 1.1, marginBottom: '8px'}}>
              <div>¿QUÉ PASA?</div>
              <div style={{color: '#FFD600'}}>ESTOCOLMO</div>
            </div>
            <p style={{color: '#666', fontSize: '13px', margin: 0}}>Tu guía de Estocolmo en español © 2026</p>
          </div>
          <div style={{display: 'flex', gap: '20px', fontSize: '13px', flexWrap: 'wrap'}}>
            <a href="https://instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none', fontWeight: 600}}>Instagram</a>
            <a href="https://www.tiktok.com/@quepasaestocolmo" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none', fontWeight: 600}}>TikTok</a>
            <a href="https://www.facebook.com/quepasaestocolmo" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none', fontWeight: 600}}>Facebook</a>
            <a href="https://www.youtube.com/@quepasaestocolmo" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none', fontWeight: 600}}>YouTube</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
