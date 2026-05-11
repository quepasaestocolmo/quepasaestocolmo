import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "¿Qué hacer en Estocolmo en 3 días? Itinerario completo 2026",
  description:
    "Itinerario día a día para visitar Estocolmo en 3 días: Gamla Stan, Djurgården, archipiélago y los mejores tips de un local. Actualizado 2026.",
  openGraph: {
    title: "¿Qué hacer en Estocolmo en 3 días? Itinerario completo 2026",
    description:
      "Guía local con itinerario día a día: qué ver, dónde comer y cómo moverse en Estocolmo en 3 días. Tips reales de alguien que vive aquí.",
    url: "https://www.quepasaestocolmo.com/blog/itinerario-estocolmo-3-dias-2026",
    siteName: "Qué Pasa Estocolmo",
    locale: "es_ES",
    type: "article",
  },
};

const faqItems = [
  {
    question: "¿Cuántos días necesito para visitar Estocolmo?",
    answer:
      "Con 3 días tienes suficiente para ver los barrios principales (Gamla Stan, Djurgården, Södermalm) y hacer una excursión corta por el archipiélago. Si tienes 4-5 días, puedes ir a Uppsala o explorar islas más lejanas.",
  },
  {
    question: "¿Cuánto cuesta un viaje a Estocolmo de 3 días?",
    answer:
      "Un presupuesto medio ronda los 2.500–3.500 SEK por persona al día incluyendo alojamiento, comida y actividades. El abono de transporte SL de 3 días cuesta 350 SEK y te ahorra mucho dinero.",
  },
  {
    question: "¿Cuál es la mejor época para visitar Estocolmo?",
    answer:
      "Mayo y junio son los meses ideales: clima agradable, días largos (hasta 18 horas de luz en junio) y menos masificación que julio-agosto. La primavera también trae los cerezos en flor de Kungsträdgården.",
  },
  {
    question: "¿Se necesita tarjeta o se puede pagar en efectivo en Estocolmo?",
    answer:
      "Estocolmo es prácticamente cashless. Puedes pagar con tarjeta contactless en el metro, autobuses, restaurantes, museos y hasta en los mercadillos. No necesitas llevar coronas en efectivo.",
  },
  {
    question: "¿Merece la pena el Stockholm Pass?",
    answer:
      "Depende de cuántos museos pienses visitar. Si vas al Vasa Museum, Skansen, el Museo Nórdico y haces un tour en barco, el pase de 2-3 días puede compensar. Calcula la suma de entradas individuales antes de comprarlo.",
  },
  {
    question: "¿Cómo llegar del aeropuerto Arlanda al centro de Estocolmo?",
    answer:
      "La opción más rápida es el Arlanda Express (18 minutos, ~340 SEK). La más económica es el tren regional Pendeltåg (unos 151 SEK con tarjeta SL más la tasa de aeropuerto). El taxi cuesta entre 600-800 SEK con tarifa fija.",
  },
  {
    question: "¿Es seguro Estocolmo para turistas?",
    answer:
      "Sí, Estocolmo es una de las capitales más seguras de Europa. Puedes caminar de noche sin problema. Ten cuidado con los carteristas en Gamla Stan y en la Estación Central, como en cualquier ciudad turística.",
  },
  {
    question: "¿Qué idioma se habla en Estocolmo?",
    answer:
      "Sueco, pero prácticamente todos los estocolmeses hablan inglés con fluidez, especialmente los más jóvenes. No tendrás problemas para comunicarte en inglés en ningún sitio.",
  },
  {
    question: "¿Qué tarjeta SL comprar para 3 días en Estocolmo?",
    answer:
      "El abono de 72 horas (3 días) de SL cuesta 350 SEK y cubre metro, autobús, tranvía y ferris urbanos sin límite de viajes. Lo puedes comprar en la app SL, en las máquinas de las estaciones o en el aeropuerto.",
  },
  {
    question: "¿Se puede visitar el archipiélago de Estocolmo en un día?",
    answer:
      "Sí. Islas como Fjäderholmarna (25 min en barco) o Vaxholm (45 min) son perfectas para una excursión de un día. Los ferris salen desde Strömkajen, frente al Gran Hotel, y el abono SL cubre algunas líneas.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "¿Qué hacer en Estocolmo en 3 días? Itinerario completo 2026",
      description:
        "Itinerario día a día para visitar Estocolmo en 3 días con tips locales reales. Actualizado 2026.",
      datePublished: "2026-05-11",
      dateModified: "2026-05-11",
      author: {
        "@type": "Organization",
        name: "Qué Pasa Estocolmo",
        url: "https://www.quepasaestocolmo.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Qué Pasa Estocolmo",
        url: "https://www.quepasaestocolmo.com",
      },
      inLanguage: "es",
      url: "https://www.quepasaestocolmo.com/blog/itinerario-estocolmo-3-dias-2026",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function ItinerarioEstocolmo3Dias() {
  return (
    <>
      <Script
        id="json-ld-itinerario"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ backgroundColor: "#ffffff", color: "#0f0f0f", fontFamily: "system-ui, -apple-system, sans-serif" }}>

        {/* NAV */}
        <nav style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px 32px", borderBottom: "1px solid #eee", position: "sticky", top: 0,
          backgroundColor: "#fff", zIndex: 100,
        }}>
          <Link href="/" style={{ textDecoration: "none", color: "#0f0f0f" }}>
            <div style={{ fontWeight: 900, fontSize: "15px", lineHeight: 1.1 }}>
              ¿QUÉ PASA?
              <span style={{ display: "block", color: "#6b00da", fontSize: "15px" }}>ESTOCOLMO</span>
            </div>
          </Link>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Link href="/" style={{ fontSize: "14px", color: "#0f0f0f", textDecoration: "none" }}>Inicio</Link>
            <Link
              href="/en/blog/stockholm-3-day-itinerary-2026"
              style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: "#6b00da", textDecoration: "none", border: "1px solid #6b00da", padding: "6px 12px", borderRadius: "6px" }}
            >
              🌐 EN
            </Link>
            <Link href="https://www.instagram.com/quepasaestocolmoo" target="_blank"
              style={{ backgroundColor: "#6b00da", color: "#fff", fontSize: "13px", fontWeight: 700, padding: "8px 18px", borderRadius: "8px", textDecoration: "none" }}>
              Seguirnos
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <div style={{ position: "relative", width: "100%", height: "520px", overflow: "hidden" }}>
          <Image
            src="/Gamla-Stan-hero.webp"
            alt="Vista aérea de Gamla Stan, el casco histórico de Estocolmo al atardecer"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.60) 100%)",
          }} />
          <div style={{ position: "absolute", bottom: "48px", left: "32px", right: "32px", maxWidth: "760px" }}>
            <span style={{
              backgroundColor: "#FFD600", color: "#0f0f0f", fontSize: "11px", fontWeight: 700,
              padding: "5px 14px", borderRadius: "20px", letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              Guía de viaje · 2026
            </span>
            <h1 style={{
              color: "#fff", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900,
              lineHeight: 1.1, marginTop: "14px", marginBottom: 0, letterSpacing: "-0.02em",
            }}>
              ¿Qué hacer en Estocolmo en 3 días? Itinerario completo 2026
            </h1>
          </div>
        </div>

        {/* ARTICLE BODY */}
        <article style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px 80px" }}>

          {/* Meta */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "13px", color: "#888", marginBottom: "32px", flexWrap: "wrap" }}>
            <span>Mayo 2026</span>
            <span style={{ color: "#FFD600", fontWeight: 700, fontSize: "18px" }}>·</span>
            <span>Por Qué Pasa Estocolmo</span>
            <span style={{ color: "#FFD600", fontWeight: 700, fontSize: "18px" }}>·</span>
            <span>8 min de lectura</span>
          </div>

          {/* CÁPSULA */}
          <div style={{
            borderLeft: "4px solid #6b00da", backgroundColor: "#f5edff",
            borderRadius: "0 12px 12px 0", padding: "18px 22px", marginBottom: "36px",
          }}>
            <p style={{ margin: 0, fontSize: "16px", fontWeight: 500, lineHeight: 1.7 }}>
              <strong>Resumen rápido:</strong> Tres días son el tiempo perfecto para Estocolmo. <strong>Día 1</strong> — Gamla Stan y las vistas de Södermalm. <strong>Día 2</strong> — Djurgården: Vasa Museum y Skansen. <strong>Día 3</strong> — El archipiélago o el Palacio de Drottningholm. Hazte con el <strong>abono SL de 72h (350 SEK)</strong> antes de salir del aeropuerto y paga todo con tarjeta — aquí no se usa efectivo.
            </p>
          </div>

          <p style={{ fontSize: "19px", lineHeight: 1.75, marginBottom: "16px", fontWeight: 400 }}>
            Estocolmo es una de esas ciudades que parece intimidante antes de llegar — catorce islas, un idioma que no conoces, precios escandinavos — pero que en cuanto pones el pie te das cuenta de que es increíblemente fácil de mover y de disfrutar. Tres días dan para mucho si sabes dónde ir.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "40px", color: "#333" }}>
            Llevamos más de seis años viviendo y cubriendo Estocolmo desde dentro. Este itinerario no es el de un turista que pasó un fin de semana — es el que le daríamos a un amigo que viene a visitarnos.
          </p>

          {/* TRANSPORTE */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            ¿Cómo moverse por Estocolmo? El abono SL explicado
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            Antes de empezar el itinerario, lo más importante: hazte con un <strong>abono SL de 72 horas (350 SEK)</strong>. Cubre metro (tunnelbana), autobús, tranvía y ferris urbanos sin límite de viajes. Lo puedes comprar en la <a href="https://sl.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>app SL</a>, en las máquinas del aeropuerto o en cualquier estación. Paga con tarjeta — aquí prácticamente no se usa efectivo en ningún sitio.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            Si llegas en avión, el <a href="https://www.arlandaexpress.com" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}><strong>Arlanda Express</strong></a> te lleva al centro en 18 minutos (~340 SEK). La alternativa económica es el Pendeltåg (tren regional SL + tasa de aeropuerto, ~151 SEK en total), que tarda unos 38 minutos pero es perfectamente cómodo.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
            <div style={{ position: "relative", width: "100%", height: "220px", borderRadius: "12px", overflow: "hidden" }}>
              <Image
                src="/Tunnelbana_.webp"
                alt="Metro tunnelbana de Estocolmo, el transporte público más rápido para moverse por la ciudad"
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.65))", padding: "12px 14px" }}>
                <span style={{ color: "#fff", fontSize: "13px", fontWeight: 700 }}>Tunnelbana (Metro SL)</span>
              </div>
            </div>
            <div style={{ position: "relative", width: "100%", height: "220px", borderRadius: "12px", overflow: "hidden" }}>
              <Image
                src="/Arlanda-express.webp"
                alt="Arlanda Express, el tren rápido entre el aeropuerto de Arlanda y el centro de Estocolmo"
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.65))", padding: "12px 14px" }}>
                <span style={{ color: "#fff", fontSize: "13px", fontWeight: 700 }}>Arlanda Express</span>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: "#FFD600", borderRadius: "12px", padding: "18px 22px",
            marginBottom: "48px", display: "flex", gap: "12px", alignItems: "flex-start",
          }}>
            <span style={{ fontSize: "20px" }}>💡</span>
            <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, lineHeight: 1.6 }}>
              Tip local: no te compliques con el Stockholm Pass si sigues este itinerario. Las entradas por separado al Vasa Museum (170 SEK) y Skansen (295 SEK en verano) te salen más baratas que el pase.
            </p>
          </div>

          {/* DÍA 1 */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "8px", letterSpacing: "-0.01em" }}>
            Día 1 — Gamla Stan y las vistas de Södermalm
          </h2>
          <p style={{ fontSize: "13px", color: "#888", marginBottom: "20px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Casco histórico · Södermalm · Vistas gratuitas
          </p>

          <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
            <Image
              src="/Gamla-Stan.webp"
              alt="Calles de adoquín de Gamla Stan con edificios de colores en Estocolmo"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            Empieza tu primer día en <strong>Gamla Stan</strong>, el casco histórico fundado en el siglo XIII. Sus calles de adoquín y edificios de colores son la postal clásica de Estocolmo, pero hay mucho más que la calle principal de souvenirs. Piérdete por <strong>Mårten Trotzigs Gränd</strong> — el callejón más estrecho de la ciudad, con solo 90 cm de ancho — y llega hasta <strong>Stortorget</strong>, la plaza más antigua de Estocolmo y uno de los rincones más fotografiados de Europa.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            A mediodía, cruza al barrio de <strong>Södermalm</strong>. Sube a <strong>Monteliusvägen</strong>, un paseo elevado con vistas panorámicas de Gamla Stan y el Ayuntamiento — completamente gratuito y una de las mejores fotos que te llevarás de Estocolmo. Para el atardecer, sube a <strong>Skinnarviksberget</strong>, el punto más alto de la ciudad, donde los locales van con picnic en verano a ver el sol caer sobre el lago Mälaren.
          </p>

          <div style={{ backgroundColor: "#f9f9f9", borderRadius: "12px", padding: "20px 22px", marginBottom: "48px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 12px 0", color: "#6b00da" }}>📍 Highlights del Día 1</h3>
            <ul style={{ margin: 0, padding: "0 0 0 18px", color: "#444", fontSize: "15px", lineHeight: 2.1 }}>
              <li>Gamla Stan — callejear sin mapa, perderse es la idea</li>
              <li>Mårten Trotzigs Gränd — el callejón más estrecho (90 cm)</li>
              <li>Stortorget — la plaza más antigua de Estocolmo</li>
              <li>Palacio Real — exterior gratis, guardia a las 12:15h</li>
              <li>Monteliusvägen — vistas panorámicas, entrada gratuita</li>
              <li>Skinnarviksberget — atardecer con los locales</li>
              <li>Cena en Södermalm — evita los restaurantes de Gamla Stan</li>
            </ul>
          </div>

          {/* DÍA 2 */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "8px", letterSpacing: "-0.01em" }}>
            Día 2 — Djurgården: Vasa Museum y Skansen
          </h2>
          <p style={{ fontSize: "13px", color: "#888", marginBottom: "20px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Isla de los museos · Historia · Naturaleza
          </p>

          <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
            <Image
              src="/Djurgarden.webp"
              alt="Isla de Djurgården en Estocolmo con naturaleza y museos al fondo"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            El segundo día es para <strong>Djurgården</strong>, la isla de los museos. Empieza temprano — antes de las 10:00 — en el <a href="https://www.vasamuseet.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}><strong>Vasa Museum</strong></a>, uno de los museos más impresionantes de Europa. Dentro se conserva un barco de guerra del siglo XVII que se hundió en su primer viaje en 1628 y fue rescatado del fondo del mar en 1961. El 95% del barco es original. Es difícil de creer hasta que lo ves en persona.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            Por la tarde dedica 2-3 horas a <a href="https://www.skansen.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}><strong>Skansen</strong></a>, el museo al aire libre más antiguo del mundo. Es una recreación de cómo vivía Suecia en distintas épocas históricas: casas tradicionales, animales nórdicos (alces, linces, osos) y artesanos trabajando. Los niños lo adoran, pero los adultos también se pierden en él fácilmente.
          </p>

          <div style={{ position: "relative", width: "100%", height: "340px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
            <Image
              src="/Vasamuseum.webp"
              alt="El barco de guerra Vasa del siglo XVII conservado en el Vasa Museum de Estocolmo"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* CTA AFFILIATE DÍA 2 */}
          <div style={{ backgroundColor: "#6b00da", borderRadius: "12px", padding: "24px", marginBottom: "24px", color: "#fff" }}>
            <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>🎟️ Reserva tus entradas con antelación</div>
            <p style={{ fontSize: "14px", lineHeight: 1.6, margin: "0 0 16px", opacity: 0.9 }}>
              El Vasa Museum y Skansen se llenan en temporada alta. Resérvalo online y evita las colas.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://www.getyourguide.es/stockholm-l30/"
                target="_blank"
                rel="noopener noreferrer sponsored"
                style={{ backgroundColor: "#FFD600", color: "#0f0f0f", padding: "10px 20px", borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "14px" }}
              >
                Ver en GetYourGuide →
              </a>
              <a
                href="https://www.civitatis.com/es/estocolmo/"
                target="_blank"
                rel="noopener noreferrer sponsored"
                style={{ backgroundColor: "transparent", color: "#FFD600", padding: "10px 20px", borderRadius: "8px", fontWeight: 600, textDecoration: "none", fontSize: "14px", border: "1px solid rgba(255,214,0,0.5)" }}
              >
                Ver en Civitatis →
              </a>
            </div>
          </div>

          <div style={{ backgroundColor: "#f9f9f9", borderRadius: "12px", padding: "20px 22px", marginBottom: "48px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 12px 0", color: "#6b00da" }}>📍 Highlights del Día 2</h3>
            <ul style={{ margin: 0, padding: "0 0 0 18px", color: "#444", fontSize: "15px", lineHeight: 2.1 }}>
              <li>Vasa Museum — llega antes de las 10:00 para evitar colas</li>
              <li>Skansen — mínimo 2-3 horas, hay mucho que ver</li>
              <li>Museo ABBA — opcional, muy entretenido aunque no seas fan</li>
              <li>Fotografiska — si te gusta la fotografía contemporánea</li>
              <li>Paseo por el waterfront de Djurgården al atardecer</li>
            </ul>
          </div>

          {/* DÍA 3 */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "8px", letterSpacing: "-0.01em" }}>
            Día 3 — El archipiélago o Drottningholm: sal de la ciudad
          </h2>
          <p style={{ fontSize: "13px", color: "#888", marginBottom: "20px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Archipiélago · Palacio · Naturaleza
          </p>

          <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
            <Image
              src="/archipielago.webp"
              alt="Islas del archipiélago de Estocolmo vistas desde el ferry en verano"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            El tercer día merece salir del centro. Tienes dos opciones perfectas. Si quieres naturaleza, toma el ferry hacia el <strong>archipiélago de Estocolmo</strong>. Islas como <strong>Vaxholm</strong> (45 min en barco) o <strong>Fjäderholmarna</strong> (25 min) son ideales para un día: cafés con vistas, senderos por las rocas y el silencio del mar Báltico. Los ferris salen desde Strömkajen con <a href="https://www.waxholmsbolaget.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Waxholmsbolaget</a>, justo frente al Gran Hotel.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            Si prefieres historia y arquitectura, el <a href="https://www.kungligaslotten.se/vara-slott-och-miljöer/drottningholms-slott.html" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}><strong>Palacio de Drottningholm</strong></a> — Patrimonio Mundial de la UNESCO — está a 30 minutos en barco desde el Ayuntamiento. Es la residencia oficial de la familia real sueca y sus jardines son espectaculares. La combinación de ir en barco por el lago Mälaren y llegar a un palacio barroco es difícil de superar.
          </p>

          <div style={{ backgroundColor: "#fffbe6", border: "2px solid #FFD600", borderRadius: "12px", padding: "20px 22px", marginBottom: "24px" }}>
            <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "10px" }}>🚢 Tours de archipiélago recomendados</div>
            <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#333", margin: "0 0 14px" }}>
              Si prefieres ir con guía o en barco turístico con todo incluido:
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://www.getyourguide.es/stockholm-l30/boat-tours-tc103/"
                target="_blank"
                rel="noopener noreferrer sponsored"
                style={{ backgroundColor: "#6b00da", color: "#fff", padding: "10px 20px", borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "14px" }}
              >
                Tours en barco · GetYourGuide →
              </a>
              <a
                href="https://www.civitatis.com/es/estocolmo/tour-archipielago-estocolmo/"
                target="_blank"
                rel="noopener noreferrer sponsored"
                style={{ backgroundColor: "transparent", color: "#6b00da", padding: "10px 20px", borderRadius: "8px", fontWeight: 600, textDecoration: "none", fontSize: "14px", border: "1px solid #6b00da" }}
              >
                Archipiélago · Civitatis →
              </a>
            </div>
          </div>

          <div style={{ backgroundColor: "#f9f9f9", borderRadius: "12px", padding: "20px 22px", marginBottom: "56px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 12px 0", color: "#6b00da" }}>📍 Highlights del Día 3</h3>
            <ul style={{ margin: 0, padding: "0 0 0 18px", color: "#444", fontSize: "15px", lineHeight: 2.1 }}>
              <li>Fjäderholmarna — la isla más cercana, 25 min en ferry</li>
              <li>Vaxholm — el pueblo más bonito del archipiélago, 45 min</li>
              <li>Drottningholm — palacio real, jardines y barco de ida</li>
              <li>Cena de despedida en Östermalm o Södermalm</li>
            </ul>
          </div>

          {/* PRESUPUESTO */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            ¿Cuánto cuesta visitar Estocolmo en 3 días?
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "24px", color: "#333" }}>
            Estocolmo no es barato, pero se puede gestionar bien con planificación. Aquí tienes una estimación real por persona:
          </p>

          <div style={{ overflowX: "auto", marginBottom: "56px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ backgroundColor: "#6b00da", color: "#fff" }}>
                  <th style={{ padding: "12px 14px", textAlign: "left", fontWeight: 700 }}>Concepto</th>
                  <th style={{ padding: "12px 14px", textAlign: "right", fontWeight: 700 }}>Precio</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Alojamiento (hostal/hotel medio)", "700–1.200 SEK/noche"],
                  ["Abono SL 3 días", "350 SEK (total)"],
                  ["Comida (3 comidas/día)", "350–600 SEK/día"],
                  ["Vasa Museum", "170 SEK"],
                  ["Skansen (verano)", "295 SEK"],
                  ["Ferry archipiélago o Drottningholm", "150–350 SEK"],
                  ["Café + fika diario", "80–120 SEK/día"],
                ].map(([concepto, precio], i) => (
                  <tr key={concepto} style={{ backgroundColor: i % 2 === 0 ? "#f9f9f9" : "#fff", borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "12px 14px", color: "#333" }}>{concepto}</td>
                    <td style={{ padding: "12px 14px", color: "#6b00da", fontWeight: 600, textAlign: "right" }}>{precio}</td>
                  </tr>
                ))}
                <tr style={{ backgroundColor: "#6b00da" }}>
                  <td style={{ padding: "12px 14px", color: "#fff", fontWeight: 700 }}>Estimación total (3 días)</td>
                  <td style={{ padding: "12px 14px", color: "#FFD600", fontWeight: 700, textAlign: "right" }}>4.500–8.000 SEK/persona</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Preguntas frecuentes sobre visitar Estocolmo en 3 días
          </h2>
          <div style={{ marginBottom: "56px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqItems.map((item, i) => (
              <div key={i} style={{ backgroundColor: "#f9f9f9", borderRadius: "12px", padding: "20px 22px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 8px 0", color: "#0f0f0f" }}>
                  {item.question}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#444", margin: 0 }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          {/* CTA INSTAGRAM */}
          <div style={{ backgroundColor: "#6b00da", borderRadius: "16px", padding: "40px 32px", textAlign: "center" }}>
            <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: 900, marginBottom: "12px" }}>
              ¿Vas a Estocolmo pronto?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", marginBottom: "24px", lineHeight: 1.6 }}>
              Síguenos en Instagram para ver Estocolmo con ojos locales. Publicamos actividades, eventos y tips todas las semanas desde 2019.
            </p>
            <a
              href="https://www.instagram.com/quepasaestocolmoo"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: "#FFD600", color: "#0f0f0f", fontWeight: 700, fontSize: "15px", padding: "14px 32px", borderRadius: "8px", textDecoration: "none" }}
            >
              Seguir @quepasaestocolmoo
            </a>
          </div>

        </article>

        {/* FOOTER */}
        <footer style={{ backgroundColor: "#0f0f0f", color: "#fff", padding: "32px 24px", textAlign: "center" }}>
          <div style={{ fontWeight: 900, fontSize: "16px", marginBottom: "8px" }}>
            ¿QUÉ PASA? <span style={{ color: "#6b00da" }}>ESTOCOLMO</span>
          </div>
          <p style={{ fontSize: "13px", color: "#888", marginBottom: "16px" }}>
            © 2026 Qué Pasa Estocolmo. Todos los derechos reservados.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "Instagram", url: "https://www.instagram.com/quepasaestocolmoo" },
              { label: "TikTok", url: "https://www.tiktok.com/@quepasaestocolmo" },
              { label: "Facebook", url: "https://www.facebook.com/quepasaestocolmo" },
              { label: "YouTube", url: "https://www.youtube.com/@quepasaestocolmo" },
            ].map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                style={{ color: "#888", fontSize: "13px", textDecoration: "none" }}>
                {link.label}
              </a>
            ))}
          </div>
        </footer>

      </main>
    </>
  );
}
