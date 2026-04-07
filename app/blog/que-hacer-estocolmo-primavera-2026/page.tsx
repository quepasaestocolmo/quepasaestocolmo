// app/blog/que-hacer-estocolmo-primavera-2026/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Qué hacer en Estocolmo en primavera 2026 | Tu guía definitiva",
  description:
    "Descubre los mejores planes para visitar Estocolmo en primavera 2026: parques florecidos, festivales, barrios que explorar y consejos de un local. ¡Guía completa para hispanohablantes!",
  keywords: [
    "qué hacer en Estocolmo en primavera",
    "Estocolmo primavera 2026",
    "visitar Estocolmo primavera",
    "turismo Estocolmo 2026",
    "planes Estocolmo mayo",
    "Estocolmo en abril",
    "guía Estocolmo español",
  ],
  openGraph: {
    title: "Qué hacer en Estocolmo en primavera 2026",
    description:
      "La guía más completa en español para disfrutar Estocolmo en primavera. Actividades, eventos, barrios y consejos de alguien que vive aquí.",
    url: "https://quepasaestocolmo.com/blog/que-hacer-estocolmo-primavera-2026",
    siteName: "¿Qué Pasa Estocolmo?",
    locale: "es_ES",
    type: "article",
    images: [
      {
        url: "/og-primavera-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Estocolmo en primavera con cerezos en flor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qué hacer en Estocolmo en primavera 2026",
    description: "La guía definitiva en español para tu viaje a Estocolmo esta primavera.",
  },
  alternates: {
    canonical: "https://quepasaestocolmo.com/blog/que-hacer-estocolmo-primavera-2026",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Qué hacer en Estocolmo en primavera 2026",
  description:
    "Guía completa en español con los mejores planes, actividades y eventos para visitar Estocolmo en primavera 2026.",
  image: "https://quepasaestocolmo.com/og-primavera-2026.jpg",
  author: {
    "@type": "Person",
    name: "Luis Granobles",
    url: "https://www.instagram.com/quepasaestocolmoo",
  },
  publisher: {
    "@type": "Organization",
    name: "¿Qué Pasa Estocolmo?",
    logo: {
      "@type": "ImageObject",
      url: "https://quepasaestocolmo.com/logo.png",
    },
  },
  datePublished: "2026-03-01",
  dateModified: "2026-03-01",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://quepasaestocolmo.com/blog/que-hacer-estocolmo-primavera-2026",
  },
};

interface SectionProps {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}

interface TipBoxProps {
  emoji: string;
  title: string;
  children: React.ReactNode;
}

interface HighlightCardProps {
  emoji: string;
  title: string;
  description: string;
  tag?: string;
}

function Section({ id, number, title, children }: SectionProps) {
  return (
    <section id={id} className="article-section">
      <div className="section-header">
        <span className="section-number">{number}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function TipBox({ emoji, title, children }: TipBoxProps) {
  return (
    <aside className="tip-box">
      <div className="tip-header">
        <span className="tip-emoji">{emoji}</span>
        <strong>{title}</strong>
      </div>
      <div className="tip-body">{children}</div>
    </aside>
  );
}

function HighlightCard({ emoji, title, description, tag }: HighlightCardProps) {
  return (
    <div className="highlight-card">
      {tag && <span className="card-tag">{tag}</span>}
      <span className="card-emoji">{emoji}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const tocItems = [
  { href: "#por-que-primavera", label: "¿Por qué visitar en primavera?" },
  { href: "#parques-naturaleza", label: "Parques y naturaleza" },
  { href: "#barrios-explorar", label: "Barrios que explorar" },
  { href: "#eventos-festivales", label: "Eventos y festivales" },
  { href: "#gastronomia", label: "Gastronomía de temporada" },
  { href: "#actividades-agua", label: "Actividades en el agua" },
  { href: "#consejos-practicos", label: "Consejos prácticos" },
];

export default function PrimaveraEstocolmo2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="article-wrapper">

        <header className="article-hero">
          <div className="hero-label">
            <span className="label-tag">✦ Guía de viaje</span>
            <span className="label-date">Primavera 2026</span>
          </div>
          <h1>
            Qué hacer en Estocolmo<br />
            <span className="title-highlight">en primavera 2026</span>
          </h1>
          <p className="hero-subtitle">
            La ciudad despierta. Los días se alargan. Y yo, que llevo años
            viviendo aquí, te cuento exactamente qué no te puedes perder.
          </p>
          <div className="hero-meta">
            <div className="author-chip">
              <div className="author-avatar">L</div>
              <div>
                <span className="author-name">Luis · @quepasaestocolmoo</span>
                <span className="author-sub">Tu guía local en Estocolmo</span>
              </div>
            </div>
            <div className="meta-stats">
              <span>🕐 10 min de lectura</span>
              <span>📍 Estocolmo, Suecia</span>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <Image
              src="/primavera-estocolmo-hero.jpg"
              alt="Vista panorámica de Estocolmo en primavera con cerezos en flor en Kungsträdgården"
              width={1200}
              height={600}
              priority
              className="hero-image"
            />
            <div className="hero-image-caption">
              Kungsträdgården en plena floración — el momento más fotogénico del año 📸
            </div>
          </div>
        </header>

        <div className="article-body">

          <nav className="toc" aria-label="Tabla de contenidos">
            <div className="toc-title">📋 En este artículo</div>
            <ol className="toc-list">
              {tocItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="article-intro">
            <p>
              Si hay una época del año para visitar Estocolmo, es la primavera.
              Y no lo digo por decir — lo digo después de haber vivido aquí varios
              años y ver cómo esta ciudad cambia completamente entre marzo y junio.
            </p>
            <p>
              Los suecos tienen una palabra para describir ese primer día de sol
              después del largo invierno: <em>vårkänsla</em>. Algo así como la
              sensación de que la vida vuelve. Y créeme, cuando lo vives en persona,
              lo entiendes perfectamente.
            </p>
            <p>
              En esta guía te cuento todo lo que necesitas saber para aprovechar
              al máximo tu viaje a Estocolmo esta primavera 2026. Sin relleno,
              sin copy-paste de otras webs. Solo lo que yo mismo haría si viniera
              de visita.
            </p>
          </div>

          <Section id="por-que-primavera" number="01" title="¿Por qué visitar Estocolmo en primavera?">
            <p>
              Vamos al grano: la primavera es el punto dulce entre el frío invierno
              y el caótico verano. En verano Estocolmo se llena de turistas y los
              precios suben. En invierno hay poca luz y mucho frío. La primavera
              es el secreto mejor guardado.
            </p>
            <div className="highlight-grid">
              <HighlightCard emoji="☀️" title="Días que se alargan" description="En junio llega el sol de medianoche. Pero incluso en abril ya tienes 14+ horas de luz al día. Un lujo para explorar la ciudad." tag="Clima" />
              <HighlightCard emoji="💸" title="Precios más razonables" description="Antes del pico de verano, hoteles y actividades cuestan bastante menos. El mismo viaje puede salirte un 30-40% más barato." tag="Presupuesto" />
              <HighlightCard emoji="👥" title="Menos masificación" description="Las atracciones principales como Gamla Stan o el Vasamuseet están cómodas. Nada de colas interminables ni empujones." tag="Experiencia" />
              <HighlightCard emoji="🌸" title="La naturaleza explota" description="Cerezos, tulipanes, patos con crías... La ciudad se convierte en una postal viviente que dura pocas semanas." tag="Naturaleza" />
            </div>
            <TipBox emoji="🌡️" title="¿Cuándo exactamente ir?">
              <p>
                <strong>Abril</strong> es fresco (5-12°C) y con mucha floración.{" "}
                <strong>Mayo</strong> es mi favorito: 12-18°C, sol garantizado la mayoría
                de días y la ciudad en plena energía. <strong>Junio</strong> ya
                roza el verano con hasta 22°C. Lleva siempre una chaqueta ligera,
                Estocolmo cambia rápido.
              </p>
            </TipBox>
          </Section>

          <Section id="parques-naturaleza" number="02" title="Parques y naturaleza que no te puedes saltar">
            <p>
              Estocolmo tiene más verde por habitante que casi cualquier otra capital
              europea. En primavera eso se nota muchísimo. Aquí van mis favoritos:
            </p>
            <div className="place-block">
              <div className="place-image-wrapper">
                <Image src="/kungstradgarden-cerezos.jpg" alt="Cerezos en flor en Kungsträdgården" width={800} height={450} className="place-image" />
              </div>
              <div className="place-content">
                <h3>🌸 Kungsträdgården — El espectáculo de los cerezos</h3>
                <p>Cada primavera, los cerezos japoneses florecen y se convierten en el lugar más fotografiado de Estocolmo. El momento exacto varía, pero generalmente es entre finales de abril y principios de mayo. Dura apenas dos semanas — si coincide con tu visita, <strong>no te lo pienses</strong>.</p>
                <p>El ambiente es increíble: familias, fotógrafos, músicos espontáneos... Es uno de esos momentos donde te das cuenta de por qué esta ciudad es especial.</p>
                <div className="place-details">
                  <span>📍 Kungsträdgårdsgatan, Norrmalm</span>
                  <span>🕐 Abierto 24h · Gratis</span>
                </div>
              </div>
            </div>
            <div className="place-block reverse">
              <div className="place-image-wrapper">
                <Image src="/djurgarden-primavera.jpg" alt="Paseo en bici por Djurgården en primavera" width={800} height={450} className="place-image" />
              </div>
              <div className="place-content">
                <h3>🌳 Djurgården — La isla parque de Estocolmo</h3>
                <p>Esta isla es el pulmón verde de la ciudad y en primavera se convierte en el lugar de escape favorito de los estocolmenses. Puedes ir andando, en bici o en barco desde Slussen.</p>
                <p>Aquí también están el <strong>Vasamuseet</strong>, el <strong>ABBA Museum</strong> y el <strong>Skansen</strong>. Pero si el día acompaña, simplemente pasear ya merece la pena.</p>
                <div className="place-details">
                  <span>📍 Isla de Djurgården</span>
                  <span>🚲 Alquiler de bici desde ~150 SEK/hora</span>
                </div>
              </div>
            </div>
            <TipBox emoji="🦢" title="Dato de local">
              <p>En primavera, los patos y cisnes del lago Mälaren tienen crías. Es un momento precioso para ver familias de animales mientras tomas un café en alguno de los quioscos del parque.</p>
            </TipBox>
            <h3>Más parques que vale la pena visitar:</h3>
            <ul className="styled-list">
              <li><strong>Hagaparken</strong> — El parque romántico con el Palacio de Haga y unas vistas espectaculares. Ideal para un picnic.</li>
              <li><strong>Tantolunden</strong> — En Södermalm, con vistas al lago y mucho ambiente local. Menos turístico, más auténtico.</li>
              <li><strong>Rålambs­hovs­parken</strong> — En Kungsholmen, junto al agua. Perfecto para ver el atardecer con una cerveza.</li>
            </ul>
          </Section>

          <Section id="barrios-explorar" number="03" title="Los barrios que tienes que explorar">
            <p>Estocolmo tiene personalidades muy distintas según el barrio. En primavera, con el buen tiempo, explorarlos a pie es un placer.</p>
            <div className="barrio-grid">
              <div className="barrio-card">
                <div className="barrio-color" style={{ background: "#6b00da" }} />
                <h3>🏰 Gamla Stan</h3>
                <p>El casco histórico medieval. Obligatorio, sí, pero evita las horas centrales del mediodía. Ve por la mañana temprano o al atardecer cuando la luz es mágica y hay menos gente.</p>
              </div>
              <div className="barrio-card">
                <div className="barrio-color" style={{ background: "#FFD600" }} />
                <h3>🎨 Södermalm</h3>
                <p>El barrio cool de Estocolmo. Cafés de especialidad, tiendas vintage, restaurantes con onda... y unas vistas desde Monteliusvägen que no tienen precio. Mi favorito.</p>
              </div>
              <div className="barrio-card">
                <div className="barrio-color" style={{ background: "#0f0f0f" }} />
                <h3>🛍️ Östermalm</h3>
                <p>El barrio elegante. El Östermalms Saluhall es una parada obligatoria para probar productos suecos de calidad. También hay tiendas de diseño escandinavo.</p>
              </div>
              <div className="barrio-card">
                <div className="barrio-color" style={{ background: "#6b00da" }} />
                <h3>🌿 Kungsholmen</h3>
                <p>Menos turístico pero con mucho encanto. El paseo junto al agua es precioso en primavera. El Ayuntamiento de Estocolmo merece una visita guiada.</p>
              </div>
            </div>
            <TipBox emoji="🚶" title="Mi ruta favorita de primavera">
              <p>Empieza en <strong>Slussen</strong>, sube a Södermalm hasta Monteliusvägen. Baja a Gamla Stan, explora las callejuelas. Cruza a Norrmalm, pasa por Kungsträdgården. Termina con una cerveza en alguna terraza junto al agua. Unas 4-5 horas perfectas.</p>
            </TipBox>
          </Section>

          <Section id="eventos-festivales" number="04" title="Eventos y festivales de primavera 2026">
            <p>La agenda cultural de Estocolmo en primavera es bastante activa. Estos son los eventos que más me interesan para 2026:</p>
            <div className="event-list">
              <div className="event-item">
                <div className="event-date"><span className="event-month">ABR</span><span className="event-day">30</span></div>
                <div className="event-info">
                  <h3>Valborg / Walpurgis Night</h3>
                  <p>La noche de Walpurgis marca la llegada oficial de la primavera en Suecia. Hay hogueras, música en vivo y estudiantes cantando canciones tradicionales. Hagaparken es uno de los mejores lugares para vivirlo.</p>
                  <span className="event-tag">Tradición sueca · Gratis</span>
                </div>
              </div>
              <div className="event-item">
                <div className="event-date"><span className="event-month">MAY</span><span className="event-day">01</span></div>
                <div className="event-info">
                  <h3>Día del Trabajador</h3>
                  <p>Día festivo en Suecia con manifestaciones pacíficas y actos culturales. Muchos museos tienen entrada gratuita este día.</p>
                  <span className="event-tag">Festivo nacional</span>
                </div>
              </div>
              <div className="event-item">
                <div className="event-date"><span className="event-month">MAY</span><span className="event-day">—</span></div>
                <div className="event-info">
                  <h3>Design Week Stockholm</h3>
                  <p>Una semana dedicada al diseño escandinavo con exposiciones, talleres y showrooms abiertos al público.</p>
                  <span className="event-tag">Diseño · Cultura</span>
                </div>
              </div>
              <div className="event-item">
                <div className="event-date"><span className="event-month">JUN</span><span className="event-day">06</span></div>
                <div className="event-info">
                  <h3>Día Nacional de Suecia</h3>
                  <p>Celebraciones en Skansen con música folclórica y trajes tradicionales. Ambiente muy especial.</p>
                  <span className="event-tag">Festivo nacional · Skansen</span>
                </div>
              </div>
            </div>
            <TipBox emoji="📅" title="Consejo de planificación">
              <p>Valborg (30 de abril) y el puente del 1 de mayo suelen llenar los hoteles. Reserva con antelación si viajas esas fechas.</p>
            </TipBox>
          </Section>

          <Section id="gastronomia" number="05" title="Gastronomía: qué comer en primavera">
            <p>La cocina sueca cambia con las estaciones y la primavera trae algunos sabores muy particulares. Aquí lo que tienes que probar:</p>
            <div className="food-grid">
              <div className="food-item">
                <span className="food-emoji">🦐</span>
                <h3>Räkor (gambas)</h3>
                <p>Los puestos de gambas cocidas en los muelles empiezan a abrir en primavera. Comer gambas frescas mirando al agua es una experiencia obligatoria.</p>
              </div>
              <div className="food-item">
                <span className="food-emoji">🥐</span>
                <h3>Semla</h3>
                <p>Un bollo relleno de crema de almendra y nata que hay que probar al menos una vez. Muchas panaderías los sirven hasta bien entrado marzo.</p>
              </div>
              <div className="food-item">
                <span className="food-emoji">☕</span>
                <h3>Fika en terraza</h3>
                <p>En cuanto sale el sol, todas las terrazas de Estocolmo se llenan. Únete al ritual del café sueco, es parte de la experiencia.</p>
              </div>
              <div className="food-item">
                <span className="food-emoji">🌿</span>
                <h3>Cocina New Nordic</h3>
                <p>En primavera los restaurantes actualizan sus menús con espárragos silvestres, ortigas y flores comestibles. La mejor época para la alta cocina escandinava.</p>
              </div>
            </div>
            <TipBox emoji="🍽️" title="Mercados recomendados">
              <p>El <strong>Östermalms Saluhall</strong> es el mercado gourmet por excelencia. Para algo más auténtico, el <strong>Hötorgshallen</strong> en Hötorget mezcla puestos internacionales y suecos.</p>
            </TipBox>
          </Section>

          <Section id="actividades-agua" number="06" title="Actividades en el agua">
            <p>Estocolmo está construida sobre 14 islas y tiene más de 20 km de costa dentro de la ciudad. En primavera, el agua empieza a despertar.</p>
            <div className="activity-list">
              <div className="activity-item">
                <span className="activity-icon">⛵</span>
                <div>
                  <h3>Paseo en barco por el Archipiélago</h3>
                  <p>El archipiélago de Estocolmo tiene más de 30.000 islas. En primavera empiezan los ferrys a las islas más cercanas. Un día a Vaxholm o Sandhamn es una experiencia completamente diferente.</p>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">🚣</span>
                <div>
                  <h3>Kayak urbano</h3>
                  <p>Ver Gamla Stan desde el agua en kayak es una perspectiva completamente diferente. En mayo el agua ya está a temperatura razonable.</p>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">🚢</span>
                <div>
                  <h3>Crucero por los canales</h3>
                  <p>Hay opciones con audioguía en español y duración de 1-2 horas. Perfectos para orientarte al llegar a la ciudad.</p>
                </div>
              </div>
            </div>
            <div className="image-full">
              <Image src="/archipielago-estocolmo-primavera.jpg" alt="Vista del archipiélago de Estocolmo en primavera" width={1100} height={500} className="full-image" />
              <p className="image-caption">El archipiélago en primavera — una de las escapadas más bonitas desde Estocolmo</p>
            </div>
          </Section>

          <Section id="consejos-practicos" number="07" title="Consejos prácticos para tu viaje">
            <div className="tips-grid">
              <div className="practical-tip">
                <span className="tip-icon">🚇</span>
                <h3>Transporte</h3>
                <p>El metro (Tunnelbana) cubre bien la ciudad. Compra la tarjeta SL Access. En primavera, ir a pie entre barrios es muy agradable.</p>
              </div>
              <div className="practical-tip">
                <span className="tip-icon">💳</span>
                <h3>Pagos</h3>
                <p>Suecia es casi cashless. Lleva una tarjeta sin comisiones internacionales. Revolut y Wise funcionan muy bien.</p>
              </div>
              <div className="practical-tip">
                <span className="tip-icon">🏨</span>
                <h3>Dónde alojarse</h3>
                <p><strong>Södermalm</strong> para ambiente local. <strong>Norrmalm</strong> para estar en el centro. Reserva con anticipación para el puente de mayo.</p>
              </div>
              <div className="practical-tip">
                <span className="tip-icon">🌤️</span>
                <h3>Ropa</h3>
                <p>Capas, capas y más capas. Por la mañana 5°C y por la tarde 18°C. Una chaqueta impermeable ligera es esencial.</p>
              </div>
              <div className="practical-tip">
                <span className="tip-icon">🗣️</span>
                <h3>Idioma</h3>
                <p>Los suecos hablan inglés excelente. Aprende <em>tack</em> (gracias) y <em>hej</em> (hola) — la gente lo agradece mucho.</p>
              </div>
              <div className="practical-tip">
                <span className="tip-icon">📱</span>
                <h3>Apps útiles</h3>
                <p><strong>SL</strong> para transporte, <strong>Maps.me</strong> para mapas offline. Y sígueme en <strong>@quepasaestocolmoo</strong> para actualizaciones en tiempo real.</p>
              </div>
            </div>
          </Section>

          <div className="article-closing">
            <h2>¿Listo para tu primavera en Estocolmo?</h2>
            <p>Espero que esta guía te haya dado una idea clara de lo que te espera. Estocolmo en primavera es de esas experiencias que repites.</p>
            <p>Si tienes dudas concretas, escríbeme por Instagram. Leo todos los mensajes.</p>
            <div className="cta-block">
              <a href="https://www.instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer" className="cta-button">
                Sígueme en Instagram →
              </a>
              <span className="cta-sub">Contenido diario sobre Estocolmo en español</span>
            </div>
          </div>

        </div>
      </article>

      <style jsx>{`
        :root {
          --purple: #6b00da;
          --yellow: #FFD600;
          --white: #ffffff;
          --text: #0f0f0f;
          --gray: #f4f4f4;
          --gray-mid: #e0e0e0;
          --text-light: #555;
          --radius: 12px;
          --radius-sm: 8px;
        }
        .article-wrapper { font-family: 'Georgia', serif; color: var(--text); max-width: 860px; margin: 0 auto; padding: 0 1.5rem 4rem; }
        .article-hero { padding: 3rem 0 2rem; border-bottom: 2px solid var(--gray-mid); margin-bottom: 2.5rem; }
        .hero-label { display: flex; gap: 1rem; align-items: center; margin-bottom: 1.25rem; }
        .label-tag { background: var(--purple); color: var(--white); font-family: sans-serif; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.35rem 0.85rem; border-radius: 100px; }
        .label-date { font-family: sans-serif; font-size: 0.85rem; color: var(--text-light); font-weight: 600; }
        h1 { font-size: clamp(2.25rem, 5vw, 3.5rem); line-height: 1.1; font-weight: 900; margin: 0 0 1rem; letter-spacing: -0.02em; }
        .title-highlight { color: var(--purple); }
        .hero-subtitle { font-size: 1.2rem; color: var(--text-light); line-height: 1.6; margin: 0 0 1.5rem; font-style: italic; }
        .hero-meta { display: flex; align-items: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 2rem; }
        .author-chip { display: flex; align-items: center; gap: 0.75rem; }
        .author-avatar { width: 42px; height: 42px; background: var(--purple); color: var(--white); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0; }
        .author-name { display: block; font-family: sans-serif; font-size: 0.9rem; font-weight: 700; }
        .author-sub { display: block; font-family: sans-serif; font-size: 0.78rem; color: var(--text-light); }
        .meta-stats { display: flex; gap: 1rem; font-family: sans-serif; font-size: 0.85rem; color: var(--text-light); }
        .hero-image-wrapper { border-radius: var(--radius); overflow: hidden; }
        .hero-image { width: 100%; height: auto; display: block; }
        .hero-image-caption { background: rgba(0,0,0,0.7); color: var(--white); font-family: sans-serif; font-size: 0.8rem; padding: 0.6rem 1rem; text-align: center; }
        .toc { background: var(--gray); border-left: 4px solid var(--purple); border-radius: var(--radius-sm); padding: 1.5rem; margin-bottom: 2.5rem; }
        .toc-title { font-family: sans-serif; font-weight: 700; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.85rem; }
        .toc-list { margin: 0; padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.4rem; }
        .toc-list a { font-family: sans-serif; font-size: 0.95rem; color: var(--purple); text-decoration: none; }
        .toc-list a:hover { text-decoration: underline; }
        .article-intro { margin-bottom: 2.5rem; }
        .article-intro p { font-size: 1.1rem; line-height: 1.75; margin: 0 0 1rem; }
        .article-section { margin-bottom: 3.5rem; padding-bottom: 3.5rem; border-bottom: 1px solid var(--gray-mid); }
        .section-header { display: flex; align-items: baseline; gap: 1rem; margin-bottom: 1.5rem; }
        .section-number { font-family: sans-serif; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.1em; color: var(--white); background: var(--purple); padding: 0.25rem 0.55rem; border-radius: 4px; flex-shrink: 0; }
        .article-section h2 { font-size: clamp(1.5rem, 3vw, 2rem); margin: 0; font-weight: 800; }
        .article-section p { font-size: 1.05rem; line-height: 1.75; margin: 0 0 1.25rem; }
        .article-section h3 { font-size: 1.2rem; font-weight: 800; margin: 1.5rem 0 0.5rem; }
        .highlight-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1.5rem 0; }
        .highlight-card { background: var(--gray); border-radius: var(--radius); padding: 1.25rem; }
        .card-tag { font-family: sans-serif; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--purple); display: block; margin-bottom: 0.5rem; }
        .card-emoji { font-size: 1.75rem; display: block; margin-bottom: 0.5rem; }
        .highlight-card h3 { font-size: 1rem !important; font-weight: 800 !important; margin: 0 0 0.4rem !important; }
        .highlight-card p { font-size: 0.9rem !important; color: var(--text-light) !important; margin: 0 !important; line-height: 1.5 !important; }
        .tip-box { background: #fff8e1; border: 2px solid var(--yellow); border-radius: var(--radius); padding: 1.25rem 1.5rem; margin: 1.5rem 0; }
        .tip-header { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.6rem; }
        .tip-emoji { font-size: 1.25rem; }
        .tip-header strong { font-family: sans-serif; font-size: 0.9rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; }
        .tip-body p { font-size: 0.95rem !important; margin: 0 !important; line-height: 1.65 !important; }
        .place-block { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: start; margin: 1.5rem 0; }
        .place-block.reverse { direction: rtl; }
        .place-block.reverse > * { direction: ltr; }
        .place-image-wrapper { border-radius: var(--radius); overflow: hidden; }
        .place-image { width: 100%; height: auto; display: block; }
        .place-details { display: flex; flex-direction: column; gap: 0.25rem; margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--gray-mid); }
        .place-details span { font-family: sans-serif; font-size: 0.82rem; color: var(--text-light); }
        .styled-list { padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.6rem; margin: 1rem 0; }
        .styled-list li { font-size: 1rem; line-height: 1.65; }
        .barrio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin: 1.5rem 0; }
        .barrio-card { border: 1px solid var(--gray-mid); border-radius: var(--radius); padding: 1.25rem; position: relative; overflow: hidden; }
        .barrio-color { position: absolute; top: 0; left: 0; right: 0; height: 4px; }
        .barrio-card h3 { font-size: 1.05rem !important; margin: 0.25rem 0 0.6rem !important; }
        .barrio-card p { font-size: 0.9rem !important; color: var(--text-light) !important; margin: 0 !important; line-height: 1.6 !important; }
        .event-list { display: flex; flex-direction: column; gap: 0; margin: 1.5rem 0; border: 1px solid var(--gray-mid); border-radius: var(--radius); overflow: hidden; }
        .event-item { display: flex; gap: 1.25rem; padding: 1.25rem; border-bottom: 1px solid var(--gray-mid); align-items: start; }
        .event-item:last-child { border-bottom: none; }
        .event-date { background: var(--purple); color: var(--white); border-radius: var(--radius-sm); padding: 0.5rem 0.75rem; text-align: center; flex-shrink: 0; min-width: 52px; }
        .event-month { display: block; font-family: sans-serif; font-size: 0.65rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; }
        .event-day { display: block; font-size: 1.4rem; font-weight: 900; line-height: 1; margin-top: 0.1rem; }
        .event-info h3 { font-size: 1.05rem !important; margin: 0 0 0.4rem !important; }
        .event-info p { font-size: 0.9rem !important; color: var(--text-light) !important; margin: 0 0 0.6rem !important; line-height: 1.6 !important; }
        .event-tag { font-family: sans-serif; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--purple); background: rgba(107,0,218,0.08); padding: 0.2rem 0.6rem; border-radius: 100px; }
        .food-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1.5rem 0; }
        .food-item { background: var(--gray); border-radius: var(--radius); padding: 1.25rem; text-align: center; }
        .food-emoji { font-size: 2rem; display: block; margin-bottom: 0.5rem; }
        .food-item h3 { font-size: 1rem !important; margin: 0 0 0.4rem !important; }
        .food-item p { font-size: 0.88rem !important; color: var(--text-light) !important; margin: 0 !important; line-height: 1.55 !important; }
        .activity-list { display: flex; flex-direction: column; gap: 1rem; margin: 1.5rem 0; }
        .activity-item { display: flex; gap: 1rem; align-items: start; background: var(--gray); border-radius: var(--radius); padding: 1.25rem; }
        .activity-icon { font-size: 2rem; flex-shrink: 0; }
        .activity-item h3 { font-size: 1.05rem !important; margin: 0 0 0.4rem !important; }
        .activity-item p { font-size: 0.9rem !important; color: var(--text-light) !important; margin: 0 !important; line-height: 1.6 !important; }
        .image-full { margin: 2rem 0; border-radius: var(--radius); overflow: hidden; }
        .full-image { width: 100%; height: auto; display: block; }
        .image-caption { background: var(--gray); font-family: sans-serif; font-size: 0.82rem; color: var(--text-light); padding: 0.7rem 1rem; text-align: center; margin: 0; font-style: italic; }
        .tips-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin: 1rem 0; }
        .practical-tip { border: 1px solid var(--gray-mid); border-radius: var(--radius); padding: 1.25rem; }
        .tip-icon { font-size: 1.5rem; display: block; margin-bottom: 0.5rem; }
        .practical-tip h3 { font-size: 1rem !important; margin: 0 0 0.4rem !important; }
        .practical-tip p { font-size: 0.88rem !important; color: var(--text-light) !important; margin: 0 !important; line-height: 1.6 !important; }
        .article-closing { background: linear-gradient(135deg, rgba(107,0,218,0.06) 0%, rgba(255,214,0,0.08) 100%); border: 2px solid var(--purple); border-radius: var(--radius); padding: 2.5rem; text-align: center; margin-top: 1rem; }
        .article-closing h2 { font-size: 1.75rem; margin: 0 0 1rem; font-weight: 800; }
        .article-closing p { font-size: 1.05rem; line-height: 1.7; color: #333; margin: 0 0 1rem; max-width: 580px; margin-inline: auto; }
        .cta-block { display: flex; flex-direction: column; align-items: center; gap: 0.6rem; margin-top: 1.5rem; }
        .cta-button { display: inline-block; background: var(--purple); color: var(--white); font-family: sans-serif; font-weight: 800; font-size: 0.95rem; padding: 0.85rem 2rem; border-radius: 100px; text-decoration: none; box-shadow: 0 4px 20px rgba(107,0,218,0.3); }
        .cta-sub { font-family: sans-serif; font-size: 0.82rem; color: var(--text-light); }
        @media (max-width: 680px) {
          .place-block, .place-block.reverse { grid-template-columns: 1fr; direction: ltr; }
          .hero-meta { flex-direction: column; gap: 0.75rem; }
        }
      `}</style>
    </>
  );
}
