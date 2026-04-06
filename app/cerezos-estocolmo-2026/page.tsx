import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cerezos en flor en Estocolmo 2026 — dónde verlos y cuándo ir | Qué Pasa Estocolmo",
  description:
    "Guía completa para ver los cerezos en flor en Estocolmo en 2026. Los mejores lugares, cuándo ir y tips de un local para vivir la floración como se merece.",
};

export default function CerezosEstocolmo() {
  return (
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
          src="/cerezos-hero.webp"
          alt="Cerezos en flor en Estocolmo con la torre del Ayuntamiento al fondo"
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
            Primavera en Estocolmo
          </span>
          <h1 style={{
            color: "#fff", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900,
            lineHeight: 1.1, marginTop: "14px", marginBottom: 0, letterSpacing: "-0.02em"
          }}>
            Cerezos en flor en Estocolmo 2026 — dónde verlos y cuándo ir
          </h1>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Meta */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "13px", color: "#888", marginBottom: "32px", flexWrap: "wrap" }}>
          <span>Abril 2026</span>
          <span style={{ color: "#FFD600", fontWeight: 700, fontSize: "18px" }}>·</span>
          <span>Por Qué Pasa Estocolmo</span>
          <span style={{ color: "#FFD600", fontWeight: 700, fontSize: "18px" }}>·</span>
          <span>5 min de lectura</span>
        </div>

        {/* Intro */}
        <p style={{ fontSize: "19px", lineHeight: 1.75, marginBottom: "16px", fontWeight: 400 }}>
          Si vives en Estocolmo sabes que hay un momento del año que lo cambia todo. Es cuando florecen los cerezos y la ciudad entera despierta de golpe después del invierno. Dura poco — a veces solo dos semanas — pero es absolutamente mágico.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "40px", color: "#333" }}>
          El año pasado los cerezos de Kungsträdgården ya estaban en plena floración el 12 de abril. Así que si estás planificando tu visita, esa es tu fecha de referencia.
        </p>

        {/* Cuándo */}
        <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.01em" }}>
          Cuándo florecen los cerezos en Estocolmo
        </h2>
        <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
          La floración ocurre normalmente entre mediados de abril y principios de mayo, dependiendo del invierno. En un año normal, la segunda semana de abril ya aparecen los primeros brotes y para el 20 de abril suelen estar en su punto máximo.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
          El espectáculo dura aproximadamente dos semanas — así que si puedes elegir cuándo viajar, apunta a la tercera semana de abril.
        </p>

        {/* Tip box */}
        <div style={{
          backgroundColor: "#FFD600", borderRadius: "12px", padding: "18px 22px",
          marginBottom: "48px", display: "flex", gap: "12px", alignItems: "flex-start"
        }}>
          <span style={{ fontSize: "20px" }}>📍</span>
          <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, lineHeight: 1.6 }}>
            Tip local: sigue nuestra cuenta{" "}
            <a href="https://www.instagram.com/quepasaestocolmoo" target="_blank"
              style={{ color: "#6b00da", textDecoration: "none" }}>@quepasaestocolmoo</a>
            {" "}— publicamos actualizaciones en tiempo real sobre el estado de la floración cada primavera.
          </p>
        </div>

        {/* Los mejores lugares */}
        <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "32px", letterSpacing: "-0.01em" }}>
          Los mejores lugares para ver cerezos en Estocolmo
        </h2>

        {/* SPOT 1 — Kungsträdgården */}
        <div style={{ marginBottom: "56px" }}>
          <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
            <Image
              src="/kungstradgardenapoyo.webp"
              alt="Dosel de cerezos en Kungsträdgården con gente disfrutando la primavera"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <span style={{
              backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px",
              borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "14px", fontWeight: 700, flexShrink: 0
            }}>1</span>
            <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Kungsträdgården — el clásico imprescindible</h3>
          </div>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
            El Kungsträdgården alberga más de 60 cerezos, un regalo de Japón al rey Carl XVI Gustaf en 1998. En su punto máximo forman un dosel de flores rosadas espectacular. Es el epicentro de la floración en Estocolmo y el lugar más fotografiado de la ciudad en primavera.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
            El 28 de abril se celebra el Día del Cerezo en Flor, un festival de cultura japonesa con teatro Bunraku, música tradicional, danzas Geiko Mai y puestos de comida y artesanía — todo gratuito.
          </p>
          <div style={{ position: "relative", width: "100%", height: "320px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
            <Image
              src="/kungstradgardenapoyo2.webp"
              alt="Luz del atardecer atravesando los cerezos en Kungsträdgården"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
            <strong style={{ color: "#0f0f0f" }}>Cómo llegar:</strong> Metro línea azul o roja, estación Kungsträdgården. También caminando desde Gamla Stan en 10 minutos.{" "}
            <strong style={{ color: "#0f0f0f" }}>Mejor hora:</strong> Entre semana antes de las 10am.
          </div>
        </div>

        {/* SPOT 2 — Bysistorget */}
        <div style={{ marginBottom: "56px" }}>
          <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
            <Image
              src="/cerezos-bysistorget.webp.webp"
              alt="Cerezos en flor en Bysistorget, Södermalm"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <span style={{
              backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px",
              borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "14px", fontWeight: 700, flexShrink: 0
            }}>2</span>
            <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Bysistorget — el secreto de los locales</h3>
          </div>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
            Esta pequeña plaza en Hornsgatan tiene varios cerezos de estilo bonsai que florecen vibrantes en primavera, rodeada de cafés, restaurantes y tiendas de diseño. Es el spot que los locales eligen cuando quieren evitar las multitudes de Kungsträdgården. Más tranquilo, más auténtico y con el café Melvqist justo al lado para un fika perfecto bajo los cerezos.
          </p>
          <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
            <strong style={{ color: "#0f0f0f" }}>Cómo llegar:</strong> Metro Slussen, luego caminando hacia Hornsgatan.
          </div>
        </div>

        {/* SPOT 3 — Lumaparken */}
        <div style={{ marginBottom: "56px" }}>
          <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
            <Image
              src="/cerezos-lumaparken.webp.webp"
              alt="Túnel de cerezos en Lumaparken, Hammarby Sjöstad"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <span style={{
              backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px",
              borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "14px", fontWeight: 700, flexShrink: 0
            }}>3</span>
            <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Lumaparken — el secreto mejor guardado</h3>
          </div>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
            En Lumaparken, al sureste del centro en Hammarby Sjöstad, encontrarás unos 50 cerezos japoneses sin ninguna de las multitudes de Kungsträdgården. Si quieres hacer fotos tranquilo sin turistas de fondo, este es tu lugar. El barrio tiene además una arquitectura moderna muy fotogénica que contrasta perfecto con las flores rosas.
          </p>
          <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
            <strong style={{ color: "#0f0f0f" }}>Cómo llegar:</strong> Tranvía 22 hasta Lumaparken.
          </div>
        </div>

        {/* SPOT 4 — Rosendals */}
        <div style={{ marginBottom: "56px" }}>
          <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
            <Image
              src="/cerezos-rosendals.webp.webp"
              alt="Picnic en Rosendals Trädgård en primavera"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <span style={{
              backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px",
              borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "14px", fontWeight: 700, flexShrink: 0
            }}>4</span>
            <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Rosendals Trädgård — cerezos con picnic incluido</h3>
          </div>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
            Rosendals Trädgård es un jardín encantador perfecto para picnics en primavera. Tienen una panadería orgánica donde puedes comprar pan recién hecho y café para completar el plan perfecto bajo los árboles.
          </p>
          <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
            <strong style={{ color: "#0f0f0f" }}>Cómo llegar:</strong> Bus 69 hasta Bellmansro, luego caminando.
          </div>
        </div>

        {/* Tips fotos */}
        <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.01em" }}>
          Tips para sacar las mejores fotos
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "56px" }}>
          {[
            { icon: "📸", text: "Apunta la cámara hacia arriba desde debajo de los cerezos — conseguirás esa foto con el cielo cubierto de pétalos." },
            { icon: "🌅", text: "Hora dorada en abril: alrededor de las 7–8pm. La luz es perfecta y los cerezos brillan de una manera imposible de replicar al mediodía." },
            { icon: "📅", text: "Ve entre semana — los fines de semana Kungsträdgården se llena. Entre semana por la mañana es otra experiencia." },
            { icon: "🧥", text: "Lleva capas — en abril las temperaturas pueden ir de 5°C a 15°C en el mismo día." },
          ].map((tip, i) => (
            <div key={i} style={{ backgroundColor: "#f9f9f9", borderRadius: "12px", padding: "20px 16px" }}>
              <div style={{ fontSize: "22px", marginBottom: "10px" }}>{tip.icon}</div>
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#333", margin: 0 }}>{tip.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Instagram */}
        <div style={{ backgroundColor: "#6b00da", borderRadius: "16px", padding: "40px 32px", textAlign: "center" }}>
          <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: 900, marginBottom: "12px" }}>
            ¿Quieres saber exactamente cuándo florecen este año?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", marginBottom: "24px", lineHeight: 1.6 }}>
            Publicamos actualizaciones en tiempo real cada primavera. No te pierdas el momento perfecto.
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
  );
}