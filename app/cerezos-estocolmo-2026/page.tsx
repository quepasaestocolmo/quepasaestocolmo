import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cerezos en flor en Estocolmo 2026 — dónde verlos y cuándo ir",
  description:
    "Guía completa sobre los cerezos en flor en Estocolmo 2026: cuándo florecen, los mejores lugares como Kungsträdgården, Lumaparken y Bysistorget, y tips para sacar las mejores fotos.",
  openGraph: {
    title: "Cerezos en flor en Estocolmo 2026 — dónde verlos y cuándo ir",
    description:
      "Guía completa sobre los cerezos en flor en Estocolmo 2026: cuándo florecen, los mejores lugares y tips para sacar las mejores fotos.",
    url: "https://www.quepasaestocolmo.com/cerezos-estocolmo-2026",
    siteName: "Qué Pasa Estocolmo",
    images: [
      {
        url: "https://www.quepasaestocolmo.com/cerezos-hero.webp",
        width: 1200,
        height: 630,
        alt: "Cerezos en flor en Estocolmo con la torre del Ayuntamiento al fondo",
      },
    ],
    locale: "es_ES",
    type: "article",
  },
};

const faqItems = [
  {
    question: "¿Cuándo florecen los cerezos en Estocolmo en 2026?",
    answer:
      "En 2026, los cerezos de Estocolmo florecen normalmente entre mediados de abril y principios de mayo. La segunda semana de abril suelen aparecer los primeros brotes, y para el 20 de abril suelen estar en su punto máximo. El espectáculo dura aproximadamente dos semanas.",
  },
  {
    question: "¿Cuál es el mejor lugar para ver cerezos en Estocolmo?",
    answer:
      "El lugar más famoso es Kungsträdgården, en el centro de Estocolmo, donde más de 60 cerezos japoneses forman un dosel de flores rosadas espectacular. Para evitar multitudes, Lumaparken en Hammarby Sjöstad y Bysistorget en Södermalm son las alternativas favoritas de los locales.",
  },
  {
    question: "¿Hay algún festival de cerezos en Estocolmo 2026?",
    answer:
      "Sí. El 28 de abril de 2026 se celebra el Día del Cerezo en Flor en Kungsträdgården, un festival gratuito de cultura japonesa con teatro Bunraku, música tradicional, danzas Geiko Mai y puestos de comida y artesanía.",
  },
  {
    question: "¿Cuánto dura la floración de los cerezos en Estocolmo?",
    answer:
      "La floración de los cerezos en Estocolmo dura aproximadamente dos semanas. El período exacto depende del invierno y las temperaturas de primavera, pero generalmente ocurre entre la segunda y la cuarta semana de abril.",
  },
  {
    question: "¿Cómo llegar a Kungsträdgården para ver los cerezos?",
    answer:
      "Puedes llegar en metro (línea azul o roja, estación Kungsträdgården) o caminando desde Gamla Stan en unos 10 minutos. La mejor hora para visitarlo es entre semana antes de las 10am para evitar las multitudes.",
  },
  {
    question: "¿Dónde ver cerezos en Estocolmo sin turistas?",
    answer:
      "Lumaparken, en Hammarby Sjöstad, tiene unos 50 cerezos japoneses con muy pocas multitudes. Bysistorget, en Hornsgatan (Södermalm), es otro spot tranquilo favorito de los locales, con cafés y restaurantes alrededor.",
  },
  {
    question: "¿Qué temperatura hace en Estocolmo durante la floración de cerezos?",
    answer:
      "En abril, las temperaturas en Estocolmo pueden variar entre 5°C y 15°C en el mismo día. Se recomienda llevar capas de ropa para adaptarse a los cambios.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cerezos en flor en Estocolmo 2026 — dónde verlos y cuándo ir",
      description:
        "Guía completa sobre los cerezos en flor en Estocolmo 2026: cuándo florecen, los mejores lugares y tips para sacar las mejores fotos.",
      image: "https://www.quepasaestocolmo.com/cerezos-hero.webp",
      datePublished: "2026-04-01",
      dateModified: "2026-04-12",
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
      url: "https://www.quepasaestocolmo.com/cerezos-estocolmo-2026",
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
      name: "Día del Cerezo en Flor en Estocolmo 2026",
      startDate: "2026-04-28",
      endDate: "2026-04-28",
      location: {
        "@type": "Place",
        name: "Kungsträdgården",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Estocolmo",
          addressCountry: "SE",
        },
      },
      description:
        "Festival gratuito de cultura japonesa en Kungsträdgården con teatro Bunraku, música tradicional, danzas Geiko Mai y puestos de comida y artesanía.",
      isAccessibleForFree: true,
      organizer: {
        "@type": "Organization",
        name: "Föreningen Japanska Trädgårdssällskapet",
      },
    },
  ],
};

export default function CerezosPage() {
  return (
    <>
      <Script
        id="json-ld-cerezos"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white text-[#0f0f0f]">
        {/* Nav */}
        <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <a href="/" className="font-bold text-lg tracking-tight">
            <span style={{ color: "#6b00da" }}>¿QUÉ PASA?</span>
            <span className="text-[#0f0f0f]">ESTOCOLMO</span>
          </a>
          <div className="flex gap-4 text-sm">
            <a href="/" className="hover:text-[#6b00da] transition-colors">Inicio</a>
            <a
              href="https://www.instagram.com/quepasaestocolmoo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6b00da] transition-colors"
            >
              Seguirnos
            </a>
          </div>
        </nav>

        <article className="max-w-2xl mx-auto px-6 py-10">
          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden mb-8">
            <Image
              src="/cerezos-hero.webp"
              alt="Cerezos en flor en Estocolmo con la torre del Ayuntamiento al fondo"
              width={800}
              height={450}
              className="w-full object-cover"
              priority
            />
          </div>

          {/* Category + meta */}
          <p className="text-sm text-[#6b00da] font-semibold uppercase tracking-wider mb-2">
            Primavera en Estocolmo
          </p>
          <h1 className="text-3xl font-bold leading-tight mb-3">
            Cerezos en flor en Estocolmo 2026 — dónde verlos y cuándo ir
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Abril 2026 · Por Qué Pasa Estocolmo · 6 min de lectura
          </p>

          {/* ✅ PÁRRAFO CÁPSULA — respuesta directa para IA */}
          <div className="bg-purple-50 border-l-4 border-[#6b00da] rounded-r-xl p-5 mb-8">
            <p className="text-base font-medium text-[#0f0f0f] leading-relaxed">
              <strong>Resumen rápido:</strong> Los cerezos en Estocolmo florecen entre mediados de
              abril y principios de mayo 2026. El mejor lugar es{" "}
              <strong>Kungsträdgården</strong>, en el centro. Para evitar
              multitudes, los locales prefieren <strong>Lumaparken</strong> y{" "}
              <strong>Bysistorget</strong>. El 28 de abril hay un festival
              japonés gratuito. La floración dura aproximadamente dos semanas.
            </p>
          </div>

          {/* Intro */}
          <p className="text-base leading-relaxed mb-4">
            Si vives en Estocolmo sabes que hay un momento del año que lo cambia
            todo. Es cuando florecen los cerezos y la ciudad entera despierta de
            golpe después del invierno. Dura poco — a veces solo dos semanas —
            pero es absolutamente mágico.
          </p>
          <p className="text-base leading-relaxed mb-8">
            El año pasado los cerezos de Kungsträdgården ya estaban en plena
            floración el 12 de abril. Así que si estás planificando tu visita,
            esa es tu fecha de referencia.
          </p>

          {/* Cuándo */}
          <h2 className="text-2xl font-bold mb-3">
            ¿Cuándo florecen los cerezos en Estocolmo 2026?
          </h2>
          <p className="text-base leading-relaxed mb-4">
            La floración ocurre normalmente entre mediados de abril y principios
            de mayo, dependiendo del invierno. En un año normal, la segunda
            semana de abril ya aparecen los primeros brotes y para el 20 de
            abril suelen estar en su punto máximo.
          </p>
          <p className="text-base leading-relaxed mb-4">
            El espectáculo dura aproximadamente dos semanas — así que si puedes
            elegir cuándo viajar, apunta a la tercera semana de abril.
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Fuente de referencia:{" "}
            <a
              href="https://visitstockholm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b00da] underline hover:opacity-80"
            >
              Visit Stockholm
            </a>{" "}
            publica actualizaciones anuales sobre la floración.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-10">
            <p className="text-sm">
              📍 <strong>Tip local:</strong> sigue nuestra cuenta{" "}
              <a
                href="https://www.instagram.com/quepasaestocolmoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b00da] underline"
              >
                @quepasaestocolmoo
              </a>{" "}
              — publicamos actualizaciones en tiempo real sobre el estado de la
              floración cada primavera.
            </p>
          </div>

          {/* Lugares */}
          <h2 className="text-2xl font-bold mb-6">
            Los mejores lugares para ver cerezos en Estocolmo
          </h2>

          {/* Lugar 1 */}
          <div className="mb-10">
            <div className="rounded-2xl overflow-hidden mb-4">
              <Image
                src="/kungstradgardenapoyo.webp"


                alt="Dosel de cerezos en Kungsträdgården con gente disfrutando la primavera"
                width={800}
                height={450}
                className="w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">
              1. Kungsträdgården — el clásico imprescindible
            </h3>
            <p className="text-base leading-relaxed mb-3">
              El{" "}
              <a
                href="https://kungstradgarden.stockholm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b00da] underline"
              >
                Kungsträdgården
              </a>{" "}
              alberga más de 60 cerezos, un regalo de Japón al rey Carl XVI
              Gustaf en 1998. En su punto máximo forman un dosel de flores
              rosadas espectacular. Es el epicentro de la floración en Estocolmo
              y el lugar más fotografiado de la ciudad en primavera.
            </p>
            <p className="text-base leading-relaxed mb-3">
              El <strong>28 de abril</strong> se celebra el Día del Cerezo en
              Flor, un festival de cultura japonesa con teatro Bunraku, música
              tradicional, danzas Geiko Mai y puestos de comida y artesanía —
              todo gratuito.
            </p>
            <div className="rounded-2xl overflow-hidden mb-3">
              <Image
                src="/kungstradgardenapoyo2.webp"
                alt="Luz del atardecer atravesando los cerezos en Kungsträdgården"
                width={800}
                height={450}
                className="w-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-500">
              <strong>Cómo llegar:</strong> Metro línea azul o roja, estación
              Kungsträdgården. También caminando desde Gamla Stan en 10 minutos.{" "}
              <strong>Mejor hora:</strong> Entre semana antes de las 10am.
            </p>
          </div>

          {/* Lugar 2 */}
          <div className="mb-10">
            <div className="rounded-2xl overflow-hidden mb-4">
              <Image
                src="/cerezos-bysistorget.webp"
                alt="Cerezos en flor en Bysistorget, Södermalm"
                width={800}
                height={450}
                className="w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">
              2. Bysistorget — el secreto de los locales
            </h3>
            <p className="text-base leading-relaxed mb-2">
              Esta pequeña plaza en Hornsgatan tiene varios cerezos de estilo
              bonsai que florecen vibrantes en primavera, rodeada de cafés,
              restaurantes y tiendas de diseño. Es el spot que los locales
              eligen cuando quieren evitar las multitudes de Kungsträdgården.
              Más tranquilo, más auténtico y con el café Melvqist justo al lado
              para un fika perfecto bajo los cerezos.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Cómo llegar:</strong> Metro Slussen, luego caminando hacia
              Hornsgatan.
            </p>
          </div>

          {/* Lugar 3 */}
          <div className="mb-10">
            <div className="rounded-2xl overflow-hidden mb-4">
              <Image
                src="/cerezos-lumaparken.webp"
                alt="Túnel de cerezos en Lumaparken, Hammarby Sjöstad"
                width={800}
                height={450}
                className="w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">
              3. Lumaparken — el secreto mejor guardado
            </h3>
            <p className="text-base leading-relaxed mb-2">
              En Lumaparken, al sureste del centro en Hammarby Sjöstad,
              encontrarás unos 50 cerezos japoneses sin ninguna de las
              multitudes de Kungsträdgården. Si quieres hacer fotos tranquilo
              sin turistas de fondo, este es tu lugar. El barrio tiene además
              una arquitectura moderna muy fotogénica que contrasta perfecto con
              las flores rosas.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Cómo llegar:</strong> Tranvía 22 hasta Lumaparken.
            </p>
          </div>

          {/* Lugar 4 */}
          <div className="mb-10">
            <div className="rounded-2xl overflow-hidden mb-4">
              <Image
                src="/cerezos-rosendals.webp"
                alt="Picnic en Rosendals Trädgård en primavera"
                width={800}
                height={450}
                className="w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">
              4. Rosendals Trädgård — cerezos con picnic incluido
            </h3>
            <p className="text-base leading-relaxed mb-2">
              <a
                href="https://rosendalstradgard.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b00da] underline"
              >
                Rosendals Trädgård
              </a>{" "}
              es un jardín encantador perfecto para picnics en primavera. Tienen
              una panadería orgánica donde puedes comprar pan recién hecho y
              café para completar el plan perfecto bajo los árboles.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Cómo llegar:</strong> Bus 69 hasta Bellmansro, luego
              caminando.
            </p>
          </div>

          {/* Tips fotos */}
          <h2 className="text-2xl font-bold mb-4">
            Tips para sacar las mejores fotos de los cerezos
          </h2>
          <ul className="space-y-3 mb-10 text-base leading-relaxed">
            <li>
              📸 Apunta la cámara hacia arriba desde debajo de los cerezos —
              conseguirás esa foto con el cielo cubierto de pétalos.
            </li>
            <li>
              🌅 Hora dorada en abril: alrededor de las 7–8pm. La luz es
              perfecta y los cerezos brillan de una manera imposible de replicar
              al mediodía.
            </li>
            <li>
              📅 Ve entre semana — los fines de semana Kungsträdgården se llena.
              Entre semana por la mañana es otra experiencia.
            </li>
            <li>
              🧥 Lleva capas — en abril las temperaturas pueden ir de 5°C a 15°C
              en el mismo día.
            </li>
          </ul>

          {/* ✅ FAQ SECTION — clave para GEO */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">
              Preguntas frecuentes sobre los cerezos en Estocolmo 2026
            </h2>
            <div className="space-y-5">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-100 rounded-xl p-5 bg-gray-50"
                >
                  <h3 className="font-semibold text-base mb-2">
                    {item.question}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-[#6b00da] text-white rounded-2xl p-6 text-center mb-10">
            <h3 className="text-lg font-bold mb-2">
              ¿Quieres saber exactamente cuándo florecen este año?
            </h3>
            <p className="text-sm mb-4 opacity-90">
              Publicamos actualizaciones en tiempo real cada primavera. No te
              pierdas el momento perfecto.
            </p>
            <a
              href="https://www.instagram.com/quepasaestocolmoo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#6b00da] font-bold px-6 py-2 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Seguir @quepasaestocolmoo
            </a>
          </div>
        </article>

        {/* Footer */}
        <footer className="border-t border-gray-100 py-8 px-6 text-center">
          <p className="font-bold text-base mb-1">
            <span style={{ color: "#6b00da" }}>¿QUÉ PASA?</span> ESTOCOLMO
          </p>
          <p className="text-xs text-gray-400 mb-4">
            © 2026 Qué Pasa Estocolmo. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-4 text-sm text-[#6b00da]">
            <a href="https://www.instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@quepasaestocolmo" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://www.facebook.com/quepasaestocolmo" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.youtube.com/@quepasaestocolmo" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </footer>
      </main>
    </>
  );
}
