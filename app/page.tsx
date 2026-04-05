'use client'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0 }}>
      <style>{`
        * { box-sizing: border-box; }

        /* NAV */
        .nav-links {
          display: flex;
          gap: 32px;
          font-size: 14px;
          font-weight: 500;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .nav-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          flex-direction: column;
          gap: 5px;
        }
        .nav-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #6b00da;
          border-radius: 2px;
          transition: all 0.2s;
        }
        .mobile-menu {
          display: none;
          flex-direction: column;
          background: white;
          border-top: 1px solid #eee;
        }
        .mobile-menu.open {
          display: flex;
        }
        .mobile-menu a {
          padding: 14px 20px;
          color: #0f0f0f;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          border-bottom: 1px solid #f5f5f5;
        }
        .mobile-menu-follow {
          padding: 14px 20px;
        }
        .mobile-menu-follow a {
          background: #6b00da;
          color: white;
          padding: 10px 20px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          border-bottom: none;
        }

        /* HERO */
        .hero {
          position: relative;
          height: 90vh;
          overflow: hidden;
          width: 100%;
        }

        /* EDITORIAL GRID */
        .editorial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .editorial-main {
          height: 500px;
        }
        .editorial-side {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .editorial-side-card {
          height: 152px;
        }

        /* GUIDES GRID */
        .guides-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-actions { display: none; }
          .nav-hamburger { display: flex; }

          .hero { height: 70vh; }

          .editorial-grid { grid-template-columns: 1fr; }
          .editorial-main { height: 300px; }
          .editorial-side-card { height: 160px; }

          .guides-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* BARRA SUPERIOR */}
      <div style={{ background: '#6b00da', color: 'white', textAlign: 'center', padding: '8px', fontSize: '13px' }}>
        🌸 Primavera en Estocolmo — Descubre los mejores planes de la temporada
      </div>

      {/* NAV */}
      <nav style={{ background: 'white', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 40px' }}>
          <div style={{ fontWeight: 900, fontSize: '16px', color: '#6b00da', lineHeight: 1.1 }}>
            <div>¿QUÉ PASA?</div>
            <div style={{ color: '#FFD600', WebkitTextStroke: '1px #6b00da' }}>ESTOCOLMO</div>
          </div>
          <div className="nav-links">
            <a href="#" style={{ color: '#0f0f0f', textDecoration: 'none' }}>Guías</a>
            <a href="#" style={{ color: '#0f0f0f', textDecoration: 'none' }}>Eventos</a>
            <a href="#" style={{ color: '#0f0f0f', textDecoration: 'none' }}>Noticias</a>
            <a href="#" style={{ color: '#0f0f0f', textDecoration: 'none' }}>Galería</a>
          </div>
          <div className="nav-actions">
            <select style={{ border: '1px solid #eee', borderRadius: '6px', padding: '4px 8px', fontSize: '13px', cursor: 'pointer' }}>
              <option value="es">🇪🇸 ES</option>
              <option value="en">🇬🇧 EN</option>
              <option value="sv">🇸🇪 SV</option>
            </select>
            <a href="https://instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer" style={{ background: '#6b00da', color: 'white', padding: '8px 20px', borderRadius: '20px', fontSize: '13px', textDecoration: 'none', fontWeight: 600 }}>
              Seguirnos
            </a>
          </div>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        {/* MENÚ MÓVIL */}
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          <a href="#" onClick={() => setMenuOpen(false)}>Guías</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Eventos</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Noticias</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Galería</a>
          <div className="mobile-menu-follow">
            <a href="https://instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer">
              Seguirnos en Instagram
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <img src="/hero.webp .webp" alt="Estocolmo" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px' }}>
          <div style={{ background: '#FFD600', color: '#6b00da', fontSize: '12px', fontWeight: 700, padding: '4px 16px', borderRadius: '20px', marginBottom: '20px', letterSpacing: '0.1em' }}>
            TU GUÍA DE ESTOCOLMO EN ESPAÑOL
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(28px, 7vw, 80px)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 20px', maxWidth: '800px' }}>
            Descubre todo lo que pasa en Estocolmo
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', marginBottom: '32px', maxWidth: '500px' }}>
            Eventos, guías, noticias y los mejores rincones de la ciudad — en tu idioma.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#" style={{ background: '#6b00da', color: 'white', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
              Explorar guías
            </a>
            <a href="#" style={{ background: '#FFD600', color: '#6b00da', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
              Ver eventos
            </a>
          </div>
        </div>
      </div>

      {/* GRID EDITORIAL */}
      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '24px', color: '#0f0f0f' }}>
          Lo mejor de Estocolmo
        </h2>
        <div className="editorial-grid">
          <div className="editorial-main" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer' }}>
            <img src="/gamla-stan.webp.webp" alt="Gamla Stan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(107,0,218,0.85) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: 0, padding: '24px' }}>
              <span style={{ background: '#6b00da', color: 'white', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', letterSpacing: '0.08em' }}>GUÍAS</span>
              <h3 style={{ color: 'white', fontSize: '24px', fontWeight: 900, margin: '12px 0 8px', lineHeight: 1.2 }}>
                Gamla Stan en un día — el itinerario perfecto
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', margin: 0 }}>Por Qué Pasa Estocolmo · 5 min de lectura</p>
            </div>
          </div>
          <div className="editorial-side">
            {[
              { img: '/stortorget.webp.webp', cat: 'ACTIVIDADES', title: 'Qué hacer en Estocolmo en primavera 2026' },
              { img: '/ciudad.webp.webp', cat: 'TURISMO', title: 'Los mejores miradores para fotografiar la ciudad' },
              { img: '/noche.webp.webp', cat: 'NOTICIAS', title: 'El clima en Estocolmo esta semana' },
            ].map((item, i) => (
              <div key={i} className="editorial-side-card" style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(107,0,218,0.8) 0%, transparent 60%)' }} />
                <div style={{ position: 'absolute', bottom: 0, padding: '16px' }}>
                  <span style={{ background: '#FFD600', color: '#6b00da', fontSize: '10px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>{item.cat}</span>
                  <p style={{ color: 'white', fontSize: '14px', fontWeight: 700, margin: '6px 0 0', lineHeight: 1.3 }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ÚLTIMAS GUÍAS */}
      <div style={{ background: '#f9f9f9', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#0f0f0f', margin: 0 }}>Últimas guías</h2>
            <a href="#" style={{ color: '#6b00da', fontWeight: 700, textDecoration: 'none', fontSize: '14px' }}>Ver todas →</a>
          </div>
          <div className="guides-grid">
            {[
              { img: '/gamla-stan.webp.webp', cat: 'Guías & Tips', title: 'Cómo moverse en Estocolmo — metro y la tarjeta SL' },
              { img: '/stortorget.webp.webp', cat: 'Actividades', title: 'Estocolmo con poco presupuesto — qué hacer gratis' },
              { img: '/ciudad.webp.webp', cat: 'Turismo', title: 'Las mejores playas cerca de Estocolmo en verano' },
              { img: '/noche.webp.webp', cat: 'Cultura', title: 'Södermalm para turistas — cafés y miradores' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ position: 'relative', height: '180px' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'white', color: '#6b00da', fontSize: '10px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px' }}>{item.cat}</span>
                </div>
                <div style={{ padding: '16px' }}>
                  <p style={{ fontWeight: 700, fontSize: '14px', lineHeight: 1.4, margin: '0 0 8px', color: '#0f0f0f' }}>{item.title}</p>
                  <p style={{ color: '#999', fontSize: '12px', margin: 0 }}>Qué Pasa Estocolmo</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA INSTAGRAM */}
      <div style={{ background: '#6b00da', padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '40px', marginBottom: '16px' }}>📸</div>
          <h2 style={{ color: 'white', fontSize: '32px', fontWeight: 900, margin: '0 0 12px' }}>
            Síguenos en Instagram
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', marginBottom: '28px' }}>
            +35,000 seguidores ya descubren Estocolmo con nosotros cada día
          </p>
          <a href="https://instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer" style={{ background: '#FFD600', color: '#6b00da', padding: '14px 36px', borderRadius: '8px', fontWeight: 900, textDecoration: 'none', fontSize: '16px' }}>
            @quepasaestocolmoo
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#0f0f0f', color: 'white', padding: '40px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: '16px', color: '#6b00da', lineHeight: 1.1, marginBottom: '8px' }}>
                <div>¿QUÉ PASA?</div>
                <div style={{ color: '#FFD600' }}>ESTOCOLMO</div>
              </div>
              <p style={{ color: '#666', fontSize: '13px', margin: 0 }}>Tu guía de Estocolmo en español © 2026</p>
            </div>
            <div style={{ display: 'flex', gap: '20px', fontSize: '13px', flexWrap: 'wrap' }}>
              <a href="https://instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Instagram</a>
              <a href="https://www.tiktok.com/@quepasaestocolmo" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>TikTok</a>
              <a href="https://www.facebook.com/quepasaestocolmo" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Facebook</a>
              <a href="https://www.youtube.com/@quepasaestocolmo" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>YouTube</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  )
}
