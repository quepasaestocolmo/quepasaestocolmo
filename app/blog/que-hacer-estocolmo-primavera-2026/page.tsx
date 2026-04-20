import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qué hacer en Estocolmo en primavera 2026 — guía completa",
  description:
    "Los mejores planes en Estocolmo esta primavera 2026: festivales, parques en flor, mercados y actividades imprescindibles. Guía de un local para aprovechar la ciudad al máximo.",
  openGraph: {
    title: "Qué hacer en Estocolmo en primavera 2026 — guía completa",
    description:
      "Los mejores planes en Estocolmo esta primavera 2026: festivales, parques en flor, mercados y actividades imprescindibles.",
    url: "https://www.quepasaestocolmo.com/que-hacer-estocolmo-primavera-2026",
    siteName: "Qué Pasa Estocolmo",
    images: [
      {
        url: "https://www.quepasaestocolmo.com/Skinnarviksberget2.webp",
        width: 1200,
        height: 630,
        alt: "Estocolmo en primavera con canales y flores",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
};

const faqItems = [
  {
    question: "¿Cuándo empieza la primavera en Estocolmo en 2026?",
    answer:
      "La primavera en Estocolmo llega de forma gradual. En marzo los días se alargan notablemente, pero es en abril cuando la ciudad realmente despierta. Las temperaturas suben entre 8°C y 15°C, los parques se llenan de flores y la gente sale masivamente a la calle. Mayo ya es prácticamente verano.",
  },
  {
    question: "¿Qué festivales hay en Estocolmo en primavera 2026?",
    answer:
      "En primavera 2026 destacan el Día del Cerezo en Flor en Kungsträdgården (28 de abril), Valborg el 30 de abril — la fiesta de bienvenida al verano — y el inicio de la temporada de conciertos al aire libre en Skansen. Consulta el programa actualizado en visitstockholm.com.",
  },
  {
    question: "¿Qué ropa llevar a Estocolmo en primavera?",
    answer:
      "En abril las temperaturas pueden variar entre 5°C y 15°C en el mismo día. Lo mejor es ir en capas: una camiseta, un jersey y una chaqueta ligera. En mayo ya puedes salir con menos ropa, aunque los días de lluvia siguen siendo frecuentes. Lleva siempre un paraguas pequeño.",
  },
  {
    question: "¿Cuáles son los mejores parques de Estocolmo en primavera?",
    answer:
      "Los mejores parques para visitar en primavera son Kungsträdgården (cerezos en flor en abril), Djurgården (animales, museos y naturaleza), Hagaparken (tulipanes y paseos junto al lago) y Skinnarviksberget en Södermalm para las mejores vistas de la ciudad al atardecer.",
  },
  {
    question: "¿Qué es Valborg y cómo se celebra en Estocolmo?",
    answer:
      "Valborg (30 de abril) es la fiesta tradicional sueca de bienvenida al verano. En Estocolmo la celebración más famosa es en Evert Taubes terrass en Riddarholmen, donde miles de personas se reúnen a cantar canciones de primavera. También hay celebraciones en Skansen y en los campus universitarios. Es uno de los días más animados del año en la ciudad.",
  },
  {
    question: "¿Vale la pena visitar Estocolmo en primavera?",
    answer:
      "Sí, absolutamente. La primavera es una de las mejores épocas para visitar Estocolmo. Hay menos turistas que en verano, los precios de los hoteles son más bajos, los días se alargan rápidamente y la ciudad está especialmente bonita con los cerezos en flor y los suecos celebrando el fin del invierno en parques y terrazas.",
  },
  {
    question: "¿Cuánto cuesta visitar Estocolmo en primavera 2026?",
    answer:
      "Estocolmo es cara, pero la primavera es temporada media con precios más bajos que en verano. Un hotel céntrico puede costar entre 100 y 200€ por noche. La mayoría de parques, mercados y festivales de primavera son gratuitos. La Stockholm Card (desde 699 SEK/día) incluye transporte público y entrada a más de 60 museos.",
  },
  {
    question: "¿Qué museos abren en primavera en Estocolmo?",
    answer:
      "Todos los grandes museos están abiertos en primavera: el Vasa (barco vikingo del siglo XVII), el ABBA Museum, el Fotografiska, el Moderna Museet y el Skansen al aire libre. En primavera además amplían sus horarios y muchos organizan actividades especiales. La mayoría son gratuitos con la Stockholm Card.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Qué hacer en Estocolmo en primavera 2026 — guía completa",
      description:
        "Los mejores planes en Estocolmo esta primavera 2026: festivales, parques en flor, mercados y actividades imprescindibles.",
      image: "https://www.quepasaestocolmo.com/Skinnarviksberget2.webp",
      datePublished: "2026-04-01",
      dateModified: "2026-04-17",
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
      url: "https://www.quepasaestocolmo.com/que-hacer-estocolmo-primavera-2026",
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
    {
      "@type": "Event",
      name: "Valborg 2026 en Estocolmo",
      startDate: "2026-04-30",
      endDate: "2026-04-30",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Evert Taubes terrass, Riddarholmen",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Estocolmo",
          addressCountry: "SE",
        },
      },
      description:
        "Celebración tradicional sueca de bienvenida al verano con canciones de primavera, reuniones masivas en parques y festividades en toda la ciudad.",
      isAccessibleForFree: true,
      organizer: {
        "@type": "Organization",
        name: "Visit Stockholm",
        url: "https://visitstockholm.com",
      },
    },
  ],
};

export default function PrimaveraEstocolmo2026() {
  return (
    <>
      <Script
        id="json-ld-primavera"
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
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Link href="/" style={{ fontSize: "14px", color: "#0f0f0f", textDecoration: "none" }}>Inicio</Link>
            <Link
              href="https://www.instagram.com/quepasaestocolmoo"
              target="_blank"
              style={{
                backgroundColor: "#6b00da", color: "#fff", fontSize: "13px", fontWeight: 700,
                padding: "8px 18px", borderRadius: "8px", textDecoration: "none",
              }}
            >
              Seguirnos
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <div style={{ position: "relative", width: "100%", height: "520px", overflow: "hidden" }}>
          <Image
            src="/stockholmhero.webp"
            alt="Estocolmo en primavera 2026 con canales, flores y cielo despejado"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.60) 100%)",
          }} />
          <div style={{
            position: "absolute", bottom: "48px", left: "32px", right: "32px",
            maxWidth: "760px", margin: "0 auto",
          }}>
            <span style={{
              backgroundColor: "#FFD600", color: "#0f0f0f", fontSize: "11px", fontWeight: 700,
              padding: "5px 14px", borderRadius: "20px", letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              Primavera en Estocolmo
            </span>
            <h1 style={{
              color: "#fff", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900,
              lineHeight: 1.1, marginTop: "14px", marginBottom: 0, letterSpacing: "-0.02em",
            }}>
              ¿Qué hacer en Estocolmo en primavera 2026? — guía completa
            </h1>
          </div>
        </div>

        {/* ARTÍCULO */}
        <article style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px 80px" }}>

          {/* META */}
          <div style={{
            display: "flex", gap: "10px", alignItems: "center", fontSize: "13px",
            color: "#888", marginBottom: "32px", flexWrap: "wrap",
          }}>
            <span>Abril 2026</span>
            <span style={{ color: "#FFD600", fontWeight: 700, fontSize: "18px" }}>·</span>
            <span>Por Qué Pasa Estocolmo</span>
            <span style={{ color: "#FFD600", fontWeight: 700, fontSize: "18px" }}>·</span>
            <span>8 min de lectura</span>
          </div>

          {/* CÁPSULA RESUMEN */}
          <div style={{
            borderLeft: "4px solid #6b00da", backgroundColor: "#f5edff",
            borderRadius: "0 12px 12px 0", padding: "18px 22px", marginBottom: "36px",
          }}>
            <p style={{ margin: 0, fontSize: "16px", fontWeight: 500, lineHeight: 1.7 }}>
              <strong>Resumen rápido:</strong> La primavera en Estocolmo 2026 empieza a notarse en abril y explota en mayo. Los planes imprescindibles son los <strong>cerezos en Kungsträdgården</strong> (mediados de abril), <strong>Valborg el 30 de abril</strong>, pasear por <strong>Djurgården</strong>, el atardecer desde <strong>Skinnarviksberget</strong>, el <strong>Ocean Bus</strong> anfibio y explorar el <strong>archipiélago</strong> en ferry. Hay menos turistas que en verano y muchos planes son gratuitos.
            </p>
          </div>

          <p style={{ fontSize: "19px", lineHeight: 1.75, marginBottom: "16px", fontWeight: 400 }}>
            Primavera en Estocolmo es una cosa especial. Después de meses de oscuridad e invierno, cuando el sol vuelve y los días se alargan, los suecos salen a la calle como si fuera la primera vez que ven la luz. La energía de la ciudad cambia completamente — y si puedes estar aquí en ese momento, lo vas a entender.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "40px", color: "#333" }}>
            Llevamos años viviendo y documentando Estocolmo desde <a href="https://www.instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>@quepasaestocolmoo</a>, y la primavera sigue siendo nuestra época favorita del año. Aquí tienes los planes que realmente merece la pena hacer — los que hacemos nosotros.
          </p>

          {/* H2 PRINCIPAL DE PLANES */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "40px", letterSpacing: "-0.01em" }}>
            ¿Cuáles son los mejores planes en Estocolmo en primavera 2026?
          </h2>

          {/* PLAN 1 */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Kungstradgarden1.webp" alt="Cerezos en flor en Kungsträdgården, Estocolmo, en abril" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>1</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Ver los cerezos en flor en Kungsträdgården</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              A mediados de abril, <a href="https://kungstradgarden.stockholm/" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Kungsträdgården</a> se convierte en el parque más fotogénico de toda Escandinavia. Más de 60 cerezos japoneses — regalo de Japón al rey sueco en 1998 — forman un dosel de flores rosas que dura aproximadamente dos semanas.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              El <strong>28 de abril</strong> se celebra el Día del Cerezo en Flor, un festival gratuito de cultura japonesa con teatro Bunraku, música tradicional y puestos de comida. Para evitar multitudes, los locales van entre semana antes de las 10am — o se van a <strong>Lumaparken</strong> en Hammarby Sjöstad, que tiene 50 cerezos igual de bonitos y ningún turista.
            </p>
            <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
              <Image src="/Kungstradgarden.webp" alt="Pétalos de cerezo cayendo en Kungsträdgården en primavera" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Cómo llegar:</strong> Metro línea azul o roja, estación Kungsträdgården. También caminando desde Gamla Stan en 10 minutos. <strong style={{ color: "#0f0f0f" }}>Mejor hora:</strong> entre semana antes de las 10am.
            </div>
          </div>

          {/* PLAN 2 */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Valborg1.webp" alt="Celebración de Valborg en Estocolmo con miles de personas al aire libre" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>2</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Celebrar Valborg el 30 de abril</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Valborg es la fiesta sueca de bienvenida al verano y es absolutamente imprescindible si estás en Estocolmo el 30 de abril. Miles de personas se reúnen en Evert Taubes terrass, en Riddarholmen, para cantar canciones tradicionales de primavera. El ambiente es único — mezcla de tradición, emoción colectiva y mucha cerveza al aire libre.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              También hay celebraciones en <a href="https://www.skansen.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Skansen</a>, en los campus universitarios y en prácticamente todos los barrios de la ciudad. Consulta el programa completo en <a href="https://visitstockholm.com" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Visit Stockholm</a>.
            </p>
            <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
              <Image src="/Valborg_.webp" alt="Gente reunida en Riddarholmen durante Valborg en primavera" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Cómo llegar:</strong> Metro a Gamla Stan, luego 5 minutos caminando. <strong style={{ color: "#0f0f0f" }}>Entrada:</strong> Gratuita y abierta a todo el mundo.
            </div>
          </div>

          {/* PLAN 3 */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Djurgarden.webp" alt="Paseo primaveral por Djurgården con árboles en flor y canal" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>3</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Pasear un día entero por Djurgården</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Djurgården es la isla verde del centro de Estocolmo y en primavera se convierte en el plan perfecto para un día entero. Puedes pasear entre árboles en flor, visitar el <a href="https://www.vasamuseet.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>museo Vasa</a>, entrar al ABBA Museum o simplemente sentarte junto al canal con un fika mientras los barcos pasan.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              El parque <a href="https://www.skansen.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Skansen</a> abre con actividades especiales de primavera, incluyendo animales bebés y demostraciones de artesanía tradicional sueca. Es uno de esos planes que gustan tanto a niños como a adultos.
            </p>
            <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
              <Image src="/Djurgarden1.webp" alt="Naturaleza y flores en Djurgården durante la primavera de Estocolmo" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Cómo llegar:</strong> Ferry desde Slussen o bus 67 desde el centro. También en bici con Donkey Republic — hay estaciones por toda la ciudad.
            </div>
          </div>

          {/* PLAN 4 */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Skinnarviksberget.webp" alt="Vista panorámica de Estocolmo desde Skinnarviksberget al atardecer en primavera" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>4</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Ver el atardecer desde Skinnarviksberget</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Skinnarviksberget, en Södermalm, ofrece la mejor vista panorámica de Estocolmo — y los locales lo saben. En primavera, cuando el sol se pone pasadas las 8pm, este lugar se convierte en el punto de encuentro favorito de la ciudad. La gente llega con cervezas, mantas y bocadillos para ver el atardecer sobre los canales.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Es completamente gratuito, siempre abierto y no aparece en casi ninguna guía turística. Exactamente el tipo de plan que solo conoces si vives aquí — o si nos sigues en <a href="https://www.instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>@quepasaestocolmoo</a>.
            </p>
            <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
              <Image src="/Skinnarviksberget3.webp" alt="Estocolmenses disfrutando del atardecer en Skinnarviksberget en primavera" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Cómo llegar:</strong> Metro a Zinkensdamm o Hornstull, luego 10 minutos caminando hacia arriba. <strong style={{ color: "#0f0f0f" }}>Mejor hora:</strong> 1 hora antes de la puesta de sol.
            </div>
          </div>

          {/* PLAN 5 */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Oceanbus1.webp" alt="Ocean Bus anfibio recorriendo los canales de Estocolmo en primavera" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>5</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Subirse al Ocean Bus — el autobús anfibio</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              El <a href="https://oceanbus.se/en/" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Ocean Bus</a> es uno de los planes más originales de Estocolmo y en primavera es especialmente espectacular. Es un autobús anfibio que empieza el recorrido por las calles de la ciudad y de repente se lanza al agua — literalmente entra al canal y se convierte en barco. La cara de la gente en ese momento no tiene precio.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              El recorrido dura unos 60 minutos y combina las mejores vistas de la ciudad tanto desde tierra como desde el agua. Es perfecto para hacer con familia, amigos o en pareja. En primavera la luz es increíble y las fotos desde el agua con la ciudad de fondo son de otro nivel. Reserva con antelación porque se agota rápido.
            </p>
            <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
              <Image src="/Oceanbus.webp" alt="Vista desde el Ocean Bus navegando por los canales de Estocolmo" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Punto de salida:</strong> Strömgatan 10, junto a la Royal Opera. <strong style={{ color: "#0f0f0f" }}>Duración:</strong> aprox. 60 minutos. <strong style={{ color: "#0f0f0f" }}>Precio:</strong> 325 SEK adultos / 270 SEK niños. Reserva en oceanbus.se.
            </div>
          </div>

          {/* PLAN 6 */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/archipielago.webp" alt="Ferry navegando por el archipiélago de Estocolmo en primavera" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>6</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Tomar el ferry por el archipiélago</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              En mayo el archipiélago de Estocolmo empieza a despertar y puedes tomar un ferry desde Strömkajen para llegar a islas como Vaxholm, Grinda o Sandhamn. El paisaje desde el barco — agua, rocas, bosques y casitas rojas — es exactamente lo que imaginas cuando piensas en Suecia.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Los ferris de <a href="https://waxholmsbolaget.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Waxholmsbolaget</a> son parte del transporte público y se pueden pagar con la tarjeta de transporte de Estocolmo (SL). Una excursión de medio día a Vaxholm es uno de los planes más suecos que puedes hacer en primavera.
            </p>
            <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
              <Image src="/archipielago1.webp" alt="Isla del archipiélago de Estocolmo con naturaleza primaveral" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Punto de salida:</strong> Strömkajen, frente al Gran Hôtel. Los trayectos van de 45 minutos a 2 horas dependiendo del destino.
            </div>
          </div>

          {/* TIPS */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.01em" }}>
            ¿Qué tips debes saber antes de visitar Estocolmo en primavera?
          </h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "16px", marginBottom: "40px",
          }}>
            {[
              { icon: "🧥", text: "Viste en capas — en abril puede hacer 5°C por la mañana y 15°C al mediodía. Sin excepción." },
              { icon: "🎟️", text: "La Stockholm Card incluye transporte y más de 60 museos. Si vas a visitar varios, sale muy a cuenta." },
              { icon: "🌅", text: "En mayo el sol se pone pasadas las 9pm. Aprovecha las horas de tarde — son las más bonitas." },
              { icon: "🚲", text: "La ciudad es muy ciclable en primavera. Alquila una bici con Donkey Republic y muévete como un local." },
              { icon: "💳", text: "Estocolmo es casi 100% sin efectivo. Tarjeta siempre, no necesitas coronas en físico para nada." },
              { icon: "📅", text: "Valborg (30 abril) y el Día del Cerezo (28 abril) son los días más animados. Reserva alojamiento con antelación." },
            ].map((tip, i) => (
              <div key={i} style={{ backgroundColor: "#f9f9f9", borderRadius: "12px", padding: "20px 16px" }}>
                <div style={{ fontSize: "22px", marginBottom: "10px" }}>{tip.icon}</div>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#333", margin: 0 }}>{tip.text}</p>
              </div>
            ))}
          </div>

          {/* TIP INSTAGRAM */}
          <div style={{
            backgroundColor: "#FFD600", borderRadius: "12px", padding: "18px 22px",
            marginBottom: "56px", display: "flex", gap: "12px", alignItems: "flex-start",
          }}>
            <span style={{ fontSize: "20px" }}>📍</span>
            <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, lineHeight: 1.6 }}>
              Tip local: seguimos la primavera en tiempo real en <a href="https://www.instagram.com/quepasaestocolmoo" target="_blank" style={{ color: "#6b00da", textDecoration: "none" }}>@quepasaestocolmoo</a> — publicamos cuándo florecen los cerezos, qué festivales están pasando y los mejores planes de cada semana.
            </p>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Preguntas frecuentes sobre Estocolmo en primavera 2026
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

          {/* CTA */}
          <div style={{
            backgroundColor: "#6b00da", borderRadius: "16px",
            padding: "40px 32px", textAlign: "center",
          }}>
            <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: 900, marginBottom: "12px" }}>
              ¿Quieres saber qué está pasando en Estocolmo esta semana?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", marginBottom: "24px", lineHeight: 1.6 }}>
              Publicamos los mejores planes, festivales y eventos de Estocolmo en español — cada semana, en tiempo real.
            </p>
            <a
              href="https://www.instagram.com/quepasaestocolmoo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block", backgroundColor: "#FFD600", color: "#0f0f0f",
                fontWeight: 700, fontSize: "15px", padding: "14px 32px",
                borderRadius: "8px", textDecoration: "none",
              }}
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
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#888", fontSize: "13px", textDecoration: "none" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </footer>

      </main>
    </>
  );
}
