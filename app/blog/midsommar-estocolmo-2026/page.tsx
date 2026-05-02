import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Midsommar en Estocolmo 2026 — dónde celebrarlo y qué esperar",
  description:
    "Guía completa para vivir el Midsommar en Estocolmo 2026. Los 6 mejores lugares, tradiciones, qué comer, museos abiertos y tips de un local. Midsommarafton: viernes 19 de junio.",
  openGraph: {
    title: "Midsommar en Estocolmo 2026 — dónde celebrarlo y qué esperar",
    description:
      "Guía completa para vivir el Midsommar en Estocolmo 2026. Los 6 mejores lugares, tradiciones, qué comer y tips de un local.",
    url: "https://www.quepasaestocolmo.com/blog/midsommar-estocolmo-2026",
    siteName: "Qué Pasa Estocolmo",
    images: [
      {
        url: "https://www.quepasaestocolmo.com/Hero-midsommar.webp",
        width: 1200,
        height: 630,
        alt: "Palo de Midsommar decorado con flores en Estocolmo con gente bailando alrededor",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
};

const faqItems = [
  {
    question: "¿Cuándo es el Midsommar en Estocolmo en 2026?",
    answer:
      "El Midsommarafton (víspera de Midsommar) en 2026 es el viernes 19 de junio. El Midsommardagen (día de Midsommar) es el sábado 20 de junio. El viernes es el día principal con el levantamiento del palo, bailes y comida tradicional. En Suecia, el Midsommar siempre cae el viernes más cercano al solsticio de verano (24 de junio).",
  },
  {
    question: "¿Cuántas horas de luz hay en Estocolmo durante el Midsommar 2026?",
    answer:
      "En el solsticio de verano de 2026, Estocolmo tiene aproximadamente 18 horas y 37 minutos de luz solar. El sol sale alrededor de las 3:31h y se pone sobre las 22:08h. Incluso después de la puesta de sol, el cielo mantiene una claridad crepuscular durante toda la noche. Es el fenómeno conocido como 'noche blanca' escandinava.",
  },
  {
    question: "¿Cuánto cuesta la entrada a Skansen durante el Midsommar 2026?",
    answer:
      "La entrada general a Skansen cuesta aproximadamente 220 SEK para adultos (precio orientativo, puede variar). Durante el Midsommar la celebración está incluida en el precio de entrada. Se recomienda comprar las entradas con antelación en skansen.se ya que el aforo se llena rápido. Los niños menores de 4 años entran gratis.",
  },
  {
    question: "¿A qué hora empieza la celebración del Midsommar en Skansen?",
    answer:
      "En Skansen, la celebración del Midsommar empieza a mediodía (12:00h) y se extiende hasta la tarde. El levantamiento del midsommarstång (palo de Midsommar) suele realizarse entre las 15:00h y las 16:00h. Se recomienda llegar antes de las 13:00h para encontrar buen sitio.",
  },
  {
    question: "¿Está todo cerrado durante el Midsommar en Estocolmo?",
    answer:
      "Sí, el Midsommarafton (viernes 19 de junio) es festivo nacional en Suecia. La mayoría de supermercados, tiendas y farmacias cierran o tienen horario muy reducido. Es imprescindible comprar todo lo necesario el jueves 18 de junio. Los restaurantes turísticos del centro suelen estar abiertos, pero con reserva previa.",
  },
  {
    question: "¿Dónde ver el Midsommar en Estocolmo sin turistas?",
    answer:
      "Los lugares con menos turistas para celebrar el Midsommar en Estocolmo son Vinterviken (Liljeholmen), Klubbensborg con el Café Uddvillan, y Hågelbyparken en Botkyrka. Los tres tienen ambiente local auténtico, naturaleza y espacio para picnic. Hagaparken también es tranquilo y familiar.",
  },
  {
    question: "¿Qué es el midsommarstång y cómo se decora?",
    answer:
      "El midsommarstång es el palo de Midsommar, una estructura de madera en forma de cruz cubierta con flores, hojas de abedul y guirnaldas verdes. Se levanta entre todos como acto comunitario y se convierte en el centro de los bailes. La tradición de levantar el palo lleva practicándose en Suecia desde el siglo XV.",
  },
  {
    question: "¿Qué se come en el Midsommar en Suecia?",
    answer:
      "La mesa tradicional del Midsommar incluye: sill (arenque marinado en múltiples variedades), nuevas patatas hervidas con eneldo y mantequilla, gräddfil (crema agria), cebollino, gravlax (salmón curado), Västerbottensostpaj (tarta de queso), y fresas con nata como postre. Todo se acompaña con snaps (aguardiente) y canciones de brindis (snapsvisor).",
  },
  {
    question: "¿Cómo se hace una corona de flores para el Midsommar?",
    answer:
      "La corona tradicional de Midsommar (blomsterkrans) se hace con al menos 7 tipos de flores silvestres distintas, recogidas en silencio caminando hacia atrás. Se trenzan sobre una base de alambre o mimbre y se usan el día del Midsommar. Si no tienes tiempo de hacerla, se venden ya hechas en mercados y floristerías de Estocolmo durante la semana previa al Midsommar.",
  },
  {
    question: "¿Qué línea de tunnelbana va a Skansen para el Midsommar?",
    answer:
      "No hay tunnelbana directa a Skansen. Lo más práctico es tomar la tunnelbana hasta Slussen (línea roja T13 o verde T17/T18/T19) y desde allí coger el bus 67 directo a Skansen, o el barco de Waxholmsbolaget desde Slussen. También se puede ir en barco desde Nybroplan (línea azul hasta Östermalmstorg).",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Midsommar en Estocolmo 2026 — dónde celebrarlo y qué esperar",
      description:
        "Guía completa para vivir el Midsommar en Estocolmo 2026. Los 6 mejores lugares, tradiciones, qué comer y tips de un local.",
      image: "https://www.quepasaestocolmo.com/Hero-midsommar.webp",
      datePublished: "2026-05-02",
      dateModified: "2026-05-02",
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
      url: "https://www.quepasaestocolmo.com/blog/midsommar-estocolmo-2026",
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
      name: "Midsommar en Estocolmo 2026",
      startDate: "2026-06-19",
      endDate: "2026-06-20",
      eventStatus: "https://schema.org/EventScheduled",
      image: "https://www.quepasaestocolmo.com/Hero-midsommar.webp",
      location: {
        "@type": "Place",
        name: "Skansen",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Estocolmo",
          addressCountry: "SE",
        },
      },
      description:
        "Celebración tradicional del Midsommar sueco en Estocolmo con levantamiento del palo, bailes tradicionales, comida y música en distintos parques y espacios de la ciudad.",
      isAccessibleForFree: false,
      organizer: {
        "@type": "Organization",
        name: "Skansen",
        url: "https://www.skansen.se",
      },
    },
  ],
};

export default function MidsommarEstocolmo() {
  return (
    <>
      <Script
        id="json-ld-midsommar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ backgroundColor: "#ffffff", color: "#0f0f0f", fontFamily: "system-ui, -apple-system, sans-serif" }}>

        {/* NAV */}
        <nav style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px 32px", borderBottom: "1px solid #eee", position: "sticky", top: 0,
          backgroundColor: "#fff", zIndex: 100
        }}>
          <Link href="/" style={{ textDecoration: "none", color: "#0f0f0f" }}>
            <div style={{ fontWeight: 900, fontSize: "15px", lineHeight: 1.1 }}>
              ¿QUÉ PASA?
              <span style={{ display: "block", color: "#6b00da", fontSize: "15px" }}>ESTOCOLMO</span>
            </div>
          </Link>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Link href="/" style={{ fontSize: "14px", color: "#0f0f0f", textDecoration: "none" }}>Inicio</Link>
            <Link href="https://www.instagram.com/quepasaestocolmoo" target="_blank"
              style={{ backgroundColor: "#6b00da", color: "#fff", fontSize: "13px", fontWeight: 700, padding: "8px 18px", borderRadius: "8px", textDecoration: "none" }}>
              Seguirnos
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <div style={{ position: "relative", width: "100%", height: "520px", overflow: "hidden" }}>
          <Image
            src="/Hero-midsommar.webp"
            alt="Palo de Midsommar decorado con flores en Estocolmo con gente bailando alrededor"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)"
          }} />
          <div style={{ position: "absolute", bottom: "48px", left: "32px", right: "32px", maxWidth: "760px", margin: "0 auto" }}>
            <span style={{
              backgroundColor: "#FFD600", color: "#0f0f0f", fontSize: "11px", fontWeight: 700,
              padding: "5px 14px", borderRadius: "20px", letterSpacing: "0.08em", textTransform: "uppercase"
            }}>
              Verano en Estocolmo
            </span>
            <h1 style={{
              color: "#fff", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900,
              lineHeight: 1.1, marginTop: "14px", marginBottom: 0, letterSpacing: "-0.02em"
            }}>
              Midsommar en Estocolmo 2026 — dónde celebrarlo y qué esperar
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
            <span>10 min de lectura</span>
          </div>

          {/* CÁPSULA */}
          <div style={{
            borderLeft: "4px solid #6b00da", backgroundColor: "#f5edff",
            borderRadius: "0 12px 12px 0", padding: "18px 22px", marginBottom: "36px"
          }}>
            <p style={{ margin: 0, fontSize: "16px", fontWeight: 500, lineHeight: 1.7 }}>
              <strong>Resumen rápido:</strong> El Midsommar 2026 es el <strong>viernes 19 de junio</strong> — el día más largo del año en Estocolmo, con casi <strong>18h 37min de luz solar</strong>. El lugar más tradicional es <strong>Skansen</strong>. Para algo local y tranquilo: <strong>Vinterviken, Hagaparken</strong> o <strong>Klubbensborg</strong>. Para ambiente festivo: <strong>Rålambshovsparken</strong>. Compra todo el <strong>jueves 18</strong> — el viernes cierra casi todo.
            </p>
          </div>

          <p style={{ fontSize: "19px", lineHeight: 1.75, marginBottom: "16px", fontWeight: 400 }}>
            Si hay un momento del año en que Estocolmo se transforma por completo, ese es el Midsommar. La ciudad entera sale a la calle, los parques se llenan de flores, la gente baila alrededor de palos decorados y el sol no se pone hasta casi la medianoche. Es mágico, es raro y es completamente sueco.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "40px", color: "#333" }}>
            En 2026, el Midsommarafton — el día grande — es el <strong>viernes 19 de junio</strong>. Llevamos años cubriendo esta celebración desde Estocolmo y en esta guía te contamos exactamente dónde ir, qué esperar y cómo vivirlo como un local.
          </p>

          {/* ¿QUÉ ES EL MIDSOMMAR? */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            ¿Qué es el Midsommar y por qué es tan importante en Suecia?
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            El Midsommar es la celebración del solsticio de verano, una de las festividades más antiguas de Escandinavia con raíces que se remontan al siglo XV. En Suecia tiene el mismo peso cultural que la Navidad — de hecho, en varias ocasiones se ha propuesto oficialmente como Día Nacional sueco. Las familias se reúnen, se levantan palos decorados con flores y se baila alrededor de ellos cantando canciones tradicionales.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            Lo más especial es la luz. El 19 de junio de 2026, Estocolmo tendrá <strong>18 horas y 37 minutos de luz solar</strong>. El sol sale a las 3:31h y se pone a las 22:08h — y después de eso, el cielo nunca se queda completamente oscuro. Esa luz dorada de las 10 de la noche es algo que no se olvida.
          </p>

          <div style={{
            backgroundColor: "#FFD600", borderRadius: "12px", padding: "18px 22px",
            marginBottom: "48px", display: "flex", gap: "12px", alignItems: "flex-start"
          }}>
            <span style={{ fontSize: "20px" }}>📍</span>
            <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, lineHeight: 1.6 }}>
              Tip local: sigue{" "}
              <a href="https://www.instagram.com/quepasaestocolmoo" target="_blank"
                style={{ color: "#6b00da", textDecoration: "none" }}>@quepasaestocolmoo</a>
              {" "}— publicamos cobertura en tiempo real del Midsommar con los mejores planes y spots cada año.
            </p>
          </div>

          {/* TABLA COMPARATIVA */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            Comparativa rápida: ¿qué lugar te conviene?
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "24px", color: "#333" }}>
            Antes de entrar en detalle, aquí tienes un resumen rápido para elegir el lugar que mejor se adapta a lo que buscas:
          </p>
          <div style={{ overflowX: "auto", marginBottom: "56px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ backgroundColor: "#6b00da", color: "#fff" }}>
                  <th style={{ padding: "12px 14px", textAlign: "left", fontWeight: 700 }}>Lugar</th>
                  <th style={{ padding: "12px 14px", textAlign: "left", fontWeight: 700 }}>Ambiente</th>
                  <th style={{ padding: "12px 14px", textAlign: "left", fontWeight: 700 }}>Entrada</th>
                  <th style={{ padding: "12px 14px", textAlign: "left", fontWeight: 700 }}>Ideal para</th>
                  <th style={{ padding: "12px 14px", textAlign: "left", fontWeight: 700 }}>Tunnelbana</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { lugar: "Skansen", ambiente: "Tradicional organizado", entrada: "~220 SEK", ideal: "Primera vez, familias", metro: "Slussen + bus 67" },
                  { lugar: "Hagaparken", ambiente: "Tranquilo, familiar", entrada: "Gratis", ideal: "Picnic en calma", metro: "Odenplan + bus 515" },
                  { lugar: "Vinterviken", ambiente: "Local, folk", entrada: "Gratis", ideal: "Auténtico y tranquilo", metro: "Liljeholmen + bus 13" },
                  { lugar: "Klubbensborg", ambiente: "Íntimo, junto al lago", entrada: "Gratis", ideal: "Romantico, parejas", metro: "Liljeholmen + bus 155" },
                  { lugar: "Hågelbyparken", ambiente: "Organizado, familiar", entrada: "Consultar web", ideal: "Familias con niños", metro: "Alby (línea roja)" },
                  { lugar: "Rålambshovsparken", ambiente: "Festivo, joven ⚠️", entrada: "Gratis", ideal: "Ambiente y fiesta", metro: "Fridhemsplan" },
                ].map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f9f9f9" : "#fff", borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "12px 14px", fontWeight: 700 }}>{row.lugar}</td>
                    <td style={{ padding: "12px 14px", color: "#444" }}>{row.ambiente}</td>
                    <td style={{ padding: "12px 14px", color: "#444" }}>{row.entrada}</td>
                    <td style={{ padding: "12px 14px", color: "#444" }}>{row.ideal}</td>
                    <td style={{ padding: "12px 14px", color: "#6b00da", fontWeight: 600 }}>{row.metro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* LOS 6 LUGARES */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "32px", letterSpacing: "-0.01em" }}>
            Los mejores lugares para celebrar el Midsommar en Estocolmo
          </h2>

          {/* LUGAR 1 — SKANSEN */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Skansen.webp" alt="Celebración del Midsommar en Skansen con el palo decorado y gente bailando" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>1</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Skansen — la celebración más tradicional de Estocolmo</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              <a href="https://www.skansen.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Skansen</a> es el museo al aire libre más antiguo del mundo (fundado en 1891) y el lugar donde el Midsommar se celebra de manera más auténtica y organizada de toda Estocolmo. Llevan celebrando el Midsommar desde su fundación — más de 130 años de tradición ininterrumpida. El levantamiento del midsommarstång, los bailes con trajes folclóricos, las canciones tradicionales y la música en vivo hacen de este el plan ideal si es tu primer Midsommar en la ciudad.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              La celebración empieza a mediodía y se extiende toda la tarde. El levantamiento del palo suele ser entre las 15:00h y 16:00h. Hay actuaciones, talleres para niños, animales del parque y puestos de comida tradicional. Las vistas sobre Djurgården y el lago Mälaren desde la colina son de las más bonitas de Estocolmo.
            </p>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Cómo llegar:</strong> Tunnelbana línea roja (T13) o verde (T17/T18/T19) hasta <strong>Slussen</strong>, luego bus 67 directo a Skansen. También en barco desde Slussen o Nybroplan con{" "}
              <a href="https://www.waxholmsbolaget.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Waxholmsbolaget</a>.{" "}
              <strong style={{ color: "#0f0f0f" }}>Entrada:</strong> ~220 SEK adultos. Compra en{" "}
              <a href="https://www.skansen.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>skansen.se</a> con antelación.
            </div>
          </div>

          {/* LUGAR 2 — HAGAPARKEN */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Hagaparken.webp" alt="Hagaparken en verano con gente de picnic y naturaleza exuberante cerca de Estocolmo" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>2</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Hagaparken — Midsommar en el parque real</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              El parque real de Haga, al norte del centro, es uno de los lugares más bonitos de Estocolmo para un Midsommar con picnic. Sus grandes praderas, jardines históricos y naturaleza exuberante se llenan de familias y grupos de amigos que extienden sus mantas y disfrutan de la interminable luz de junio.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Es el plan favorito de las familias estocolmenses que quieren un Midsommar tranquilo y alejado de las aglomeraciones del centro. Lleva tu propia comida — arenque, patatas nuevas, fresas — y disfruta del ambiente más íntimo de todos los spots de esta lista.
            </p>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Cómo llegar:</strong> Tunnelbana línea roja hasta <strong>Universitetet</strong> o línea verde hasta <strong>Odenplan</strong>, luego bus 515 hasta Haga Norra. Entrada libre.
            </div>
          </div>

          {/* LUGAR 3 — VINTERVIKEN */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Vinterviken-.webp" alt="Vinterviken en verano con el jardín y el lago al fondo en Estocolmo" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>3</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Vinterviken — música folk, bailes y picnic junto al agua</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              <a href="https://vinterviken.com/event/midsommarfirande/" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Vinterviken</a> es uno de los spots más especiales de Estocolmo para el Midsommar. El palo se decora por la mañana y durante la tarde hay varias rondas de bailes tradicionales con música folk en directo. El ambiente es festivo pero tranquilo, con ese carácter local auténtico que hace que sea el favorito de muchos estocolmenses.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              La gran pradera junto al jardín es perfecta para extender una manta y hacer picnic con vistas al agua. Una de las mejores combinaciones de tradición sueca y naturaleza cerca del centro.
            </p>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Cómo llegar:</strong> Tunnelbana línea verde hasta <strong>Liljeholmen</strong>, luego bus 13 hasta la parada Vinterviken. Dirección:{" "}
              <a href="https://maps.app.goo.gl/qmDMGzvRJFdNkXSm9" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Vinterviksvägen 30</a>. Entrada libre.
            </div>
          </div>

          {/* LUGAR 4 — KLUBBENSBORG */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Klubbensborg.webp" alt="Café Uddvillan en Klubbensborg con vistas al lago en verano" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>4</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Klubbensborg, Café Uddvillan — el Midsommar con alma de archipiélago</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Klubbensborg es uno de esos rincones de Estocolmo que parece sacado de las islas del archipiélago. El histórico <a href="https://www.uddvillan.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Café Uddvillan</a>, con sus terrazas de madera junto al lago Mälaren, es el escenario perfecto para un Midsommar con ambiente íntimo, vistas al agua y ese espíritu sueco de verano que tanto se busca.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Muy popular entre los estocolmenses que saben dónde esconderse. Ideal para parejas o grupos pequeños que buscan calma con el lago como telón de fondo.
            </p>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Cómo llegar:</strong> Tunnelbana línea verde hasta <strong>Liljeholmen</strong>, luego bus 155 hasta Klubbensborg. También accesible en bici desde el centro por el carril bici de la orilla del lago Mälaren.
            </div>
          </div>

          {/* LUGAR 5 — HÅGELBYPARKEN */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Hagelbyparken.webp" alt="Hågelbyparken en Botkyrka con actividades tradicionales de Midsommar" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>5</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Hågelbyparken — Midsommar familiar al sur de Estocolmo</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              <a href="https://www.hagelbyparken.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Hågelbyparken</a>, en Botkyrka al sur de Estocolmo, es uno de los lugares con más tradición de Midsommar de toda la región. Un parque enorme con zonas verdes, animales, actividades para niños y una celebración muy completa y organizada. Es la opción perfecta si vas con familia o si buscas un ambiente genuinamente sueco sin el caos del centro.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              El palo de Midsommar, los bailes tradicionales, la música folk y el espacio para picnic hacen de Hågelbyparken una jornada completa. Vale mucho la pena el pequeño viaje desde el centro.
            </p>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Cómo llegar:</strong> Tunnelbana línea roja hasta <strong>Alby</strong>, luego 15 minutos caminando o bus local. También en coche desde el centro en unos 25 minutos. Consulta entrada en{" "}
              <a href="https://www.hagelbyparken.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>hagelbyparken.se</a>.
            </div>
          </div>

          {/* LUGAR 6 — RÅLAMBSHOVSPARKEN */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Ralambshovsparken.webp" alt="Rålambshovsparken lleno de gente joven celebrando el Midsommar en verano" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>6</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Rålambshovsparken — el Midsommar más animado de la ciudad</h3>
            </div>
            <div style={{
              border: "2px solid #FFD600", backgroundColor: "#fffbe6", borderRadius: "10px",
              padding: "14px 18px", marginBottom: "16px", display: "flex", gap: "10px", alignItems: "flex-start"
            }}>
              <span style={{ fontSize: "18px", flexShrink: 0 }}>⚠️</span>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.65, color: "#555" }}>
                <strong style={{ color: "#0f0f0f" }}>Aviso:</strong> Rålis atrae a mucha gente joven y el ambiente es muy festivo y movido. Si buscas tradición sueca tranquila o vas con familia y niños, elige Skansen, Vinterviken o Hågelbyparken. Si buscas energía, ambiente y fiesta junto al agua, este es tu lugar.
              </p>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Rålambshovsparken, conocido como &quot;Rålis&quot; por los estocolmenses, es el punto de encuentro informal por excelencia en Kungsholmen. Sus grandes praderas junto al lago Mälaren se llenan de grupos de amigos con mantas, cestas de picnic y mucho buen humor. El ambiente es completamente espontáneo — cada quien trae su propia comida y bebida. Las vistas sobre el lago y el Ayuntamiento son espectaculares. Si quieres jugar a las bochas, el{" "}
              <a href="https://www.boulebar.se/sthlm-ralambshov" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Boulebar Rålambshov</a>
              {" "}está justo al lado.
            </p>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Cómo llegar:</strong> Tunnelbana línea verde (T17/T18/T19) o azul (T10/T11) hasta <strong>Fridhemsplan</strong>, luego 10 minutos caminando hacia el lago. Entrada gratuita.
            </div>
          </div>

          {/* TRADICIONES */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            Coronas de flores y snaps: las tradiciones del Midsommar sueco
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "24px", color: "#333" }}>
            El Midsommar va mucho más allá de salir al parque con una manta. Es un conjunto de rituales que los suecos llevan repitiendo desde hace siglos y que, una vez que los vives, no se olvidan.
          </p>
          <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "32px" }}>
            <Image src="/midsommarstang.webp" alt="Midsommarstång decorado con flores y guirnaldas verdes listo para el Midsommar en Estocolmo" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "56px" }}>
            {[
              {
                icon: "🌼",
                title: "La corona de flores (blomsterkrans)",
                text: "La corona tradicional se hace con al menos 7 tipos de flores silvestres distintas — en algunas regiones, 9. Según la costumbre, las flores deben recogerse en silencio, caminando hacia atrás, saltando 7 vallas. Si pones la corona debajo de la almohada esa noche, dicen que soñarás con tu futuro amor. Se venden ya hechas en mercados y floristerías durante la semana previa al Midsommar.",
              },
              {
                icon: "🎶",
                title: "El snaps y las canciones de brindis (snapsvisor)",
                text: "El snaps — aguardiente sueco de enebro o eneldo — es parte inseparable de la mesa del Midsommar. Antes de cada vasito se entona una snapsvisa, una canción de brindis tradicional. Las más famosas son \"Helan går\" y \"Små grodorna\" (la canción de las ranitas). No hace falta saber la letra — los suecos de alrededor te la enseñarán encantados.",
              },
              {
                icon: "🐸",
                title: "El baile de las ranitas (Små grodorna)",
                text: "El momento más entrañable de toda la celebración. Todo el mundo — niños, adultos, abuelos — forma un círculo alrededor del palo y baila imitando a una rana: saltando, agitando los brazos y cantando. Es absurdo, es divertido y es completamente sueco. Si ves que empieza, súmate sin pensarlo.",
              },
              {
                icon: "🏅",
                title: "El pentatlón de Midsommar",
                text: "En muchas celebraciones se juega al pentatlón de Midsommar: una serie de juegos al aire libre entre equipos. Carreras de sacos, lanzamiento de herradura, tiro de cuerda... El objetivo es reírse más que ganar. Skansen y Hågelbyparken suelen organizar versiones de este pentatlón durante el día.",
              },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#f5edff", borderRadius: "12px", padding: "22px 24px" }}>
                <div style={{ fontSize: "22px", marginBottom: "8px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "17px", fontWeight: 800, margin: "0 0 8px 0" }}>{item.title}</h3>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#444", margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* MUSEOS ABIERTOS */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            ¿Qué museos y atracciones abren durante el Midsommar?
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "24px", color: "#333" }}>
            El Midsommarafton es festivo nacional y la mayoría de tiendas y negocios cierran. Pero si quieres combinar la celebración con una visita cultural, estos museos y atracciones suelen abrir ese fin de semana con horario reducido. Consulta siempre la web de cada lugar antes de ir.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "56px" }}>
            {[
              { name: "Skansen", url: "https://www.skansen.se", emoji: "🏛️" },
              { name: "Vasa Museet", url: "https://www.vasamuseet.se", emoji: "⛵" },
              { name: "Nordiska Museet", url: "https://www.nordiskamuseet.se", emoji: "🏺" },
              { name: "Gröna Lund", url: "https://www.gronalund.com", emoji: "🎢" },
              { name: "Junibacken", url: "https://www.junibacken.se", emoji: "📚" },
              { name: "Palacio Real", url: "https://www.kungligaslotten.se/english/royal-palaces-and-sites/the-royal-palace.html", emoji: "👑" },
              { name: "Avicii Experience", url: "https://aviciiexperience.com", emoji: "🎵" },
              { name: "The Viking Museum", url: "https://thevikingmuseum.com", emoji: "⚔️" },
              { name: "Spritmuseum", url: "https://www.spritmuseum.se", emoji: "🥃" },
              { name: "Artipelag", url: "https://www.artipelag.se", emoji: "🎨" },
              { name: "Skokloster Castle", url: "https://www.skoklostersslott.se", emoji: "🏰" },
              { name: "Skogskyrkogården", url: "https://www.skogskyrkogarden.stockholm", emoji: "🌿" },
            ].map((place, i) => (
              <a key={i} href={place.url} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 16px", textDecoration: "none", color: "#0f0f0f" }}>
                <span style={{ fontSize: "20px" }}>{place.emoji}</span>
                <span style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1.3 }}>{place.name}</span>
              </a>
            ))}
          </div>

          {/* QUÉ COMER */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Qué comer y beber en el Midsommar
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "56px" }}>
            {[
              { icon: "🐟", text: "Sill (arenque marinado) — en todas sus variedades. Es el plato central del Midsommar. Si no te gusta el arenque, el Midsommar te lo hará probar." },
              { icon: "🥔", text: "Nuevas patatas con eneldo — hervidas y con mantequilla. Las primeras patatas de la temporada son casi sagradas en Suecia." },
              { icon: "🍓", text: "Fresas con nata — el postre obligatorio. Las jordgubbar (fresas suecas) de temporada son incomparablemente dulces y aromáticas." },
              { icon: "🥃", text: "Snaps (aquavit) — el aguardiente tradicional con el que se brinda cantando. No te preocupes, te enseñarán la canción." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#f9f9f9", borderRadius: "12px", padding: "20px 16px" }}>
                <div style={{ fontSize: "22px", marginBottom: "10px" }}>{item.icon}</div>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#333", margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* TIPS */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Tips para vivir el Midsommar como un local
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "56px" }}>
            {[
              { icon: "🌸", text: "Hazte una corona de flores. Puedes comprarlas ya hechas en mercados o hacer la tuya con flores silvestres — necesitas al menos 7 tipos distintos." },
              { icon: "🛒", text: "Compra todo el jueves 18. El viernes de Midsommar casi todo cierra: supermercados, tiendas, farmacias. No lo dejes para el último momento." },
              { icon: "🚇", text: "Usa la tunnelbana. Consulta qué línea te lleva más cerca en la tabla de arriba. El Midsommar en coche es un caos — el transporte público es la opción inteligente." },
              { icon: "📸", text: "La mejor luz es a las 9-10pm. El sol de junio a esa hora es puro oro. Lleva la cámara cargada y aprovecha esa magia nórdica única." },
            ].map((tip, i) => (
              <div key={i} style={{ backgroundColor: "#f9f9f9", borderRadius: "12px", padding: "20px 16px" }}>
                <div style={{ fontSize: "22px", marginBottom: "10px" }}>{tip.icon}</div>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#333", margin: 0 }}>{tip.text}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Preguntas frecuentes sobre el Midsommar en Estocolmo 2026
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
          <div style={{ backgroundColor: "#6b00da", borderRadius: "16px", padding: "40px 32px", textAlign: "center" }}>
            <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: 900, marginBottom: "12px" }}>
              ¿Quieres vivir el Midsommar como un local?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", marginBottom: "24px", lineHeight: 1.6 }}>
              Publicamos los mejores planes, spots y cobertura en tiempo real cada verano. No te pierdas nada.
            </p>
            <a href="https://www.instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: "#FFD600", color: "#0f0f0f", fontWeight: 700, fontSize: "15px", padding: "14px 32px", borderRadius: "8px", textDecoration: "none" }}>
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