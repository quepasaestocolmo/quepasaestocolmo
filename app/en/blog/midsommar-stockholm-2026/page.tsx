import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Midsommar in Stockholm 2026 — Where to Celebrate & What to Expect",
  description:
    "Complete guide to Midsommar in Stockholm 2026. The 6 best places to celebrate, Swedish traditions, what to eat, museums open and local tips. Midsommar Eve: Friday June 19.",
  openGraph: {
    title: "Midsommar in Stockholm 2026 — Where to Celebrate & What to Expect",
    description:
      "Complete guide to Midsommar in Stockholm 2026. The 6 best places to celebrate, Swedish traditions, what to eat and local tips.",
    url: "https://www.quepasaestocolmo.com/en/blog/midsommar-stockholm-2026",
    siteName: "Qué Pasa Estocolmo",
    images: [
      {
        url: "https://www.quepasaestocolmo.com/Hero-midsommar.webp",
        width: 1200,
        height: 630,
        alt: "Midsommar pole decorated with flowers in Stockholm with people dancing around it",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const faqItems = [
  {
    question: "When is Midsommar in Stockholm in 2026?",
    answer:
      "Midsommar Eve (Midsommarafton) in 2026 falls on Friday, June 19. Midsommar Day (Midsommardagen) is Saturday, June 20. Friday is the main celebration day with the raising of the maypole, traditional dancing and food. In Sweden, Midsommar always falls on the Friday closest to the summer solstice (June 24).",
  },
  {
    question: "How many hours of daylight does Stockholm have during Midsommar 2026?",
    answer:
      "On the summer solstice in 2026, Stockholm has approximately 18 hours and 37 minutes of daylight. The sun rises around 3:31 AM and sets around 10:08 PM. Even after sunset, the sky never gets completely dark — this is the famous Scandinavian 'white night' phenomenon that makes Midsommar so magical.",
  },
  {
    question: "How much does Skansen cost during Midsommar 2026?",
    answer:
      "General admission to Skansen costs approximately 220 SEK for adults (subject to change — check skansen.se for current prices). The Midsommar celebration is included in the entry price. Tickets should be purchased in advance online as it sells out quickly. Children under 4 enter free.",
  },
  {
    question: "What time does the Midsommar celebration start at Skansen?",
    answer:
      "At Skansen, the Midsommar celebrations begin at noon (12:00) and continue throughout the afternoon. The raising of the midsommarstång (maypole) typically takes place between 3:00 PM and 4:00 PM. It is recommended to arrive before 1:00 PM to find a good spot.",
  },
  {
    question: "Is everything closed during Midsommar in Stockholm?",
    answer:
      "Yes, Midsommar Eve (Friday, June 19) is a public holiday in Sweden. Most supermarkets, shops and pharmacies close or have very reduced hours. It is essential to buy everything you need on Thursday, June 18. Tourist restaurants in the city centre are usually open, but advance reservations are recommended.",
  },
  {
    question: "Where can I celebrate Midsommar in Stockholm without crowds?",
    answer:
      "The best places to celebrate Midsommar in Stockholm without big crowds are Vinterviken (Liljeholmen), Klubbensborg with Café Uddvillan, and Hågelbyparken in Botkyrka. All three have an authentic local atmosphere, nature and picnic space. Hagaparken is also calm and family-friendly.",
  },
  {
    question: "What is the midsommarstång and how is it decorated?",
    answer:
      "The midsommarstång is the Swedish maypole — a wooden cross-shaped structure covered with flowers, birch leaves and green garlands. It is raised together as a community act and becomes the centre of the dancing. The tradition of raising the maypole has been practiced in Sweden since the 15th century.",
  },
  {
    question: "What do you eat at Midsommar in Sweden?",
    answer:
      "The traditional Midsommar table includes: pickled herring (sill) in multiple varieties, new potatoes boiled with dill and butter, gräddfil (sour cream), chives, gravlax (cured salmon), Västerbottensostpaj (cheese tart), and strawberries with cream for dessert. Everything is accompanied by snaps (Swedish aquavit) and traditional drinking songs called snapsvisor.",
  },
  {
    question: "How do you make a flower crown for Midsommar?",
    answer:
      "The traditional Midsommar flower crown (blomsterkrans) is made with at least 7 different types of wildflowers — in some regions, 9. According to tradition, the flowers should be picked in silence, walking backwards, jumping over 7 fences. If you place the crown under your pillow that night, it is said you will dream of your future love. Pre-made crowns are sold at markets and florists in Stockholm during the week before Midsommar.",
  },
  {
    question: "Which metro line goes to Skansen for Midsommar?",
    answer:
      "There is no direct metro line to Skansen. The easiest option is to take the tunnelbana to Slussen (red line T13 or green line T17/T18/T19) and then take bus 67 directly to Skansen, or the Waxholmsbolaget boat from Slussen. You can also take the boat from Nybroplan (blue line to Östermalmstorg).",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Midsommar in Stockholm 2026 — Where to Celebrate & What to Expect",
      description:
        "Complete guide to Midsommar in Stockholm 2026. The 6 best places to celebrate, Swedish traditions, what to eat and local tips.",
      image: "https://www.quepasaestocolmo.com/Hero-midsommar.webp",
      datePublished: "2026-05-03",
      dateModified: "2026-05-03",
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
      inLanguage: "en",
      url: "https://www.quepasaestocolmo.com/en/blog/midsommar-stockholm-2026",
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
      name: "Midsommar in Stockholm 2026",
      startDate: "2026-06-19",
      endDate: "2026-06-20",
      eventStatus: "https://schema.org/EventScheduled",
      image: "https://www.quepasaestocolmo.com/Hero-midsommar.webp",
      location: {
        "@type": "Place",
        name: "Skansen",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Stockholm",
          addressCountry: "SE",
        },
      },
      description:
        "Traditional Swedish Midsommar celebration in Stockholm with maypole raising, folk dancing, traditional food and music across parks and venues throughout the city.",
      isAccessibleForFree: false,
      organizer: {
        "@type": "Organization",
        name: "Skansen",
        url: "https://www.skansen.se",
      },
    },
  ],
};

export default function MidsommarStockholm() {
  return (
    <>
      <Script
        id="json-ld-midsommar-en"
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
            <Link href="/" style={{ fontSize: "14px", color: "#0f0f0f", textDecoration: "none" }}>Home</Link>
            <Link href="https://www.instagram.com/quepasaestocolmoo" target="_blank"
              style={{ backgroundColor: "#6b00da", color: "#fff", fontSize: "13px", fontWeight: 700, padding: "8px 18px", borderRadius: "8px", textDecoration: "none" }}>
              Follow us
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <div style={{ position: "relative", width: "100%", height: "520px", overflow: "hidden" }}>
          <Image
            src="/Hero-midsommar.webp"
            alt="Midsommar pole decorated with flowers in Stockholm with people dancing around it"
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
              Stockholm in Summer
            </span>
            <h1 style={{
              color: "#fff", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900,
              lineHeight: 1.1, marginTop: "14px", marginBottom: 0, letterSpacing: "-0.02em"
            }}>
              Midsommar in Stockholm 2026 — Where to Celebrate & What to Expect
            </h1>
          </div>
        </div>

        {/* ARTICLE BODY */}
        <article style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px 80px" }}>

          {/* Meta */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "13px", color: "#888", marginBottom: "32px", flexWrap: "wrap" }}>
            <span>May 2026</span>
            <span style={{ color: "#FFD600", fontWeight: 700, fontSize: "18px" }}>·</span>
            <span>By Qué Pasa Estocolmo</span>
            <span style={{ color: "#FFD600", fontWeight: 700, fontSize: "18px" }}>·</span>
            <span>10 min read</span>
          </div>

          {/* SUMMARY CAPSULE */}
          <div style={{
            borderLeft: "4px solid #6b00da", backgroundColor: "#f5edff",
            borderRadius: "0 12px 12px 0", padding: "18px 22px", marginBottom: "36px"
          }}>
            <p style={{ margin: 0, fontSize: "16px", fontWeight: 500, lineHeight: 1.7 }}>
              <strong>Quick summary:</strong> Midsommar 2026 is on <strong>Friday, June 19</strong> — the longest day of the year in Stockholm, with nearly <strong>18h 37min of daylight</strong>. The most traditional spot is <strong>Skansen</strong>. For a local, quieter vibe: <strong>Vinterviken, Hagaparken</strong> or <strong>Klubbensborg</strong>. For a lively party atmosphere: <strong>Rålambshovsparken</strong>. Buy everything on <strong>Thursday June 18</strong> — almost everything closes on Friday.
            </p>
          </div>

          <p style={{ fontSize: "19px", lineHeight: 1.75, marginBottom: "16px", fontWeight: 400 }}>
            If there is one moment of the year when Stockholm completely transforms, it is Midsommar. The entire city heads outside, parks fill with flowers, people dance around decorated poles and the sun barely sets past midnight. It is magical, it is strange and it is completely Swedish.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "40px", color: "#333" }}>
            In 2026, Midsommar Eve — the big day — is <strong>Friday, June 19</strong>. We have been covering this celebration from Stockholm for years, and in this guide we tell you exactly where to go, what to expect and how to experience it like a local.
          </p>

          {/* WHAT IS MIDSOMMAR */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            What is Midsommar and why is it so important in Sweden?
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            Midsommar is the celebration of the summer solstice, one of the oldest festivals in Scandinavia with roots going back to the 15th century. In Sweden it carries the same cultural weight as Christmas — in fact, it has been officially proposed as Sweden&apos;s National Day on several occasions. Families gather, decorated poles are raised and everyone dances around them singing traditional songs.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            What makes it truly special is the light. On June 19, 2026, Stockholm will have <strong>18 hours and 37 minutes of daylight</strong>. The sun rises at 3:31 AM and sets at 10:08 PM — and even after sunset, the sky never turns completely dark. That golden light at 10 PM is something you will never forget.
          </p>

          <div style={{
            backgroundColor: "#FFD600", borderRadius: "12px", padding: "18px 22px",
            marginBottom: "48px", display: "flex", gap: "12px", alignItems: "flex-start"
          }}>
            <span style={{ fontSize: "20px" }}>📍</span>
            <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, lineHeight: 1.6 }}>
              Local tip: follow{" "}
              <a href="https://www.instagram.com/quepasaestocolmoo" target="_blank"
                style={{ color: "#6b00da", textDecoration: "none" }}>@quepasaestocolmoo</a>
              {" "}— we share real-time coverage of Midsommar with the best plans and spots every year.
            </p>
          </div>

          {/* COMPARISON TABLE */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            Quick comparison: which place is right for you?
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "24px", color: "#333" }}>
            Before going into detail, here is a quick overview to help you choose the spot that best fits what you are looking for:
          </p>
          <div style={{ overflowX: "auto", marginBottom: "56px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ backgroundColor: "#6b00da", color: "#fff" }}>
                  <th style={{ padding: "12px 14px", textAlign: "left", fontWeight: 700 }}>Place</th>
                  <th style={{ padding: "12px 14px", textAlign: "left", fontWeight: 700 }}>Vibe</th>
                  <th style={{ padding: "12px 14px", textAlign: "left", fontWeight: 700 }}>Entry</th>
                  <th style={{ padding: "12px 14px", textAlign: "left", fontWeight: 700 }}>Best for</th>
                  <th style={{ padding: "12px 14px", textAlign: "left", fontWeight: 700 }}>Metro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { lugar: "Skansen", ambiente: "Traditional, organised", entrada: "~220 SEK", ideal: "First-timers, families", metro: "Slussen + bus 67" },
                  { lugar: "Hagaparken", ambiente: "Calm, family-friendly", entrada: "Free", ideal: "Relaxed picnic", metro: "Odenplan + bus 515" },
                  { lugar: "Vinterviken", ambiente: "Local, folk music", entrada: "Free", ideal: "Authentic & quiet", metro: "Liljeholmen + bus 13" },
                  { lugar: "Klubbensborg", ambiente: "Intimate, lakeside", entrada: "Free", ideal: "Couples, small groups", metro: "Liljeholmen + bus 155" },
                  { lugar: "Hågelbyparken", ambiente: "Organised, family", entrada: "Check website", ideal: "Families with kids", metro: "Alby (red line)" },
                  { lugar: "Rålambshovsparken", ambiente: "Lively, young ⚠️", entrada: "Free", ideal: "Party atmosphere", metro: "Fridhemsplan" },
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

          {/* THE 6 PLACES */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "32px", letterSpacing: "-0.01em" }}>
            The best places to celebrate Midsommar in Stockholm
          </h2>

          {/* PLACE 1 — SKANSEN */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Skansen.webp" alt="Midsommar celebration at Skansen with decorated maypole and people dancing" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>1</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Skansen — the most traditional Midsommar in Stockholm</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              <a href="https://www.skansen.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Skansen</a> is the world&apos;s oldest open-air museum (founded in 1891) and the place where Midsommar is celebrated in the most authentic and organised way in all of Stockholm. They have been celebrating Midsommar here for over 130 years without interruption. The raising of the midsommarstång, folk dancers in traditional costumes, live music and traditional songs make this the perfect choice if it is your first Midsommar in the city.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Celebrations start at noon and run through the afternoon. The maypole raising typically takes place between 3:00 and 4:00 PM. There are performances, children&apos;s activities, farm animals and traditional food stalls. The views over Djurgården and Lake Mälaren from the hilltop are among the best in Stockholm.
            </p>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Getting there:</strong> Tunnelbana red line (T13) or green line (T17/T18/T19) to <strong>Slussen</strong>, then bus 67 direct to Skansen. Also by boat from Slussen or Nybroplan with{" "}
              <a href="https://www.waxholmsbolaget.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Waxholmsbolaget</a>.{" "}
              <strong style={{ color: "#0f0f0f" }}>Entry:</strong> ~220 SEK adults. Book at{" "}
              <a href="https://www.skansen.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>skansen.se</a> in advance.
            </div>
          </div>

          {/* PLACE 2 — HAGAPARKEN */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Hagaparken.webp" alt="Hagaparken in summer with people having a picnic in lush nature near Stockholm" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>2</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Hagaparken — Midsommar in the royal park</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              The royal Haga Park, north of the city centre, is one of Stockholm&apos;s most beautiful spots for a Midsommar picnic. Its vast meadows, historic gardens and lush nature fill up with families and groups of friends spreading out their blankets and enjoying the endless June light.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              This is the favourite choice of Stockholm families who want a calm Midsommar away from the crowds. Bring your own food — pickled herring, new potatoes, strawberries — and enjoy the most relaxed atmosphere on this list.
            </p>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Getting there:</strong> Tunnelbana red line to <strong>Universitetet</strong> or green line to <strong>Odenplan</strong>, then bus 515 to Haga Norra. Free entry.
            </div>
          </div>

          {/* PLACE 3 — VINTERVIKEN */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Vinterviken-.webp" alt="Vinterviken in summer with the garden and lake in the background in Stockholm" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>3</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Vinterviken — folk music, dancing and lakeside picnic</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              <a href="https://vinterviken.com/event/midsommarfirande/" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Vinterviken</a> is one of Stockholm&apos;s most special Midsommar spots. The maypole is decorated in the morning and throughout the afternoon there are several rounds of traditional dancing with live folk music. The atmosphere is festive but relaxed, with that authentic local character that makes this a favourite among Stockholmers in the know.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              The large meadow beside the garden is perfect for spreading out a picnic blanket with views over the water. One of the best combinations of Swedish tradition and nature close to the city centre.
            </p>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Getting there:</strong> Tunnelbana green line to <strong>Liljeholmen</strong>, then bus 13 to Vinterviken stop. Address:{" "}
              <a href="https://maps.app.goo.gl/qmDMGzvRJFdNkXSm9" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Vinterviksvägen 30</a>. Free entry.
            </div>
          </div>

          {/* PLACE 4 — KLUBBENSBORG */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Klubbensborg.webp" alt="Café Uddvillan at Klubbensborg with lake views in summer" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>4</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Klubbensborg, Café Uddvillan — Midsommar with an archipelago feel</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Klubbensborg is one of those corners of Stockholm that feels like it was lifted straight from the archipelago islands. The historic{" "}
              <a href="https://www.uddvillan.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Café Uddvillan</a>, with its wooden terraces right on Lake Mälaren, is the perfect setting for an intimate Midsommar with water views and that Swedish summer spirit everyone seeks.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Very popular among Stockholmers who know where to hide. Ideal for couples or small groups looking for calm with the lake as a backdrop.
            </p>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Getting there:</strong> Tunnelbana green line to <strong>Liljeholmen</strong>, then bus 155 to Klubbensborg. Also accessible by bike from the city centre along the Lake Mälaren cycle path.
            </div>
          </div>

          {/* PLACE 5 — HÅGELBYPARKEN */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Hagelbyparken.webp" alt="Hågelbyparken in Botkyrka with traditional Midsommar activities" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>5</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Hågelbyparken — family Midsommar south of Stockholm</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              <a href="https://www.hagelbyparken.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Hågelbyparken</a>, in Botkyrka south of Stockholm, is one of the most traditional Midsommar venues in the entire region. A huge park with green spaces, animals, children&apos;s activities and a very complete, organised Midsommar celebration. The perfect option if you are going with family or looking for a genuinely Swedish atmosphere without the city centre chaos.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              The maypole, traditional dancing, folk music and picnic space make Hågelbyparken a full day out. Well worth the short trip from the centre.
            </p>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Getting there:</strong> Tunnelbana red line to <strong>Alby</strong>, then 15 minutes walking or local bus. Also accessible by car from the city centre in about 25 minutes. Check entry prices at{" "}
              <a href="https://www.hagelbyparken.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>hagelbyparken.se</a>.
            </div>
          </div>

          {/* PLACE 6 — RÅLAMBSHOVSPARKEN */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Ralambshovsparken.webp" alt="Rålambshovsparken packed with young people celebrating Midsommar in summer" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>6</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Rålambshovsparken — the liveliest Midsommar in the city</h3>
            </div>
            <div style={{
              border: "2px solid #FFD600", backgroundColor: "#fffbe6", borderRadius: "10px",
              padding: "14px 18px", marginBottom: "16px", display: "flex", gap: "10px", alignItems: "flex-start"
            }}>
              <span style={{ fontSize: "18px", flexShrink: 0 }}>⚠️</span>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.65, color: "#555" }}>
                <strong style={{ color: "#0f0f0f" }}>Heads up:</strong> Rålis draws a large young crowd and the atmosphere is very festive and lively. If you want to experience traditional Swedish culture quietly or are going with young children, we recommend Skansen, Vinterviken or Hågelbyparken instead. If you are after energy, music and a party vibe by the water, this is your place.
              </p>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Rålambshovsparken, known as &quot;Rålis&quot; by locals, is the go-to informal gathering spot in Kungsholmen during Midsommar. Its vast meadows along Lake Mälaren fill up with groups of friends with blankets, picnic baskets and plenty of good humour. The atmosphere is completely spontaneous — everyone brings their own food and drinks. The views over Lake Mälaren and Stockholm City Hall are spectacular. If you fancy a game of pétanque, the{" "}
              <a href="https://www.boulebar.se/sthlm-ralambshov" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Boulebar Rålambshov</a>
              {" "}is right next door.
            </p>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Getting there:</strong> Tunnelbana green line (T17/T18/T19) or blue line (T10/T11) to <strong>Fridhemsplan</strong>, then 10 minutes walking towards the lake. Free entry.
            </div>
          </div>

          {/* TRADITIONS */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            Flower crowns and snaps: Swedish Midsommar traditions
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "24px", color: "#333" }}>
            Midsommar is far more than heading to a park with a blanket. It is a set of rituals that Swedes have been repeating for centuries — and once you experience them, you never forget them.
          </p>
          <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "32px" }}>
            <Image src="/midsommarstang.webp" alt="Midsommarstång decorated with flowers and green garlands ready for Midsommar in Stockholm" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "56px" }}>
            {[
              {
                icon: "🌼",
                title: "The flower crown (blomsterkrans)",
                text: "The traditional Midsommar crown is made with at least 7 different types of wildflowers — in some regions, 9. According to tradition, the flowers must be picked in silence, walking backwards, jumping over 7 fences. Place the crown under your pillow that night and you will supposedly dream of your future love. Pre-made crowns are sold at markets and florists in Stockholm throughout the week before Midsommar.",
              },
              {
                icon: "🎶",
                title: "Snaps and drinking songs (snapsvisor)",
                text: "Snaps — Swedish aquavit made with juniper or dill — is an inseparable part of the Midsommar table. Before each shot, a snapsvisa (traditional drinking song) is sung. The most famous are \"Helan går\" and \"Små grodorna\" (the little frogs song). You do not need to know the lyrics — the Swedes around you will happily teach you.",
              },
              {
                icon: "🐸",
                title: "The little frogs dance (Små grodorna)",
                text: "The most charming moment of the whole celebration. Everyone — children, adults, grandparents — forms a circle around the maypole and dances imitating a frog: jumping, flapping their arms and singing. It is absurd, it is fun and it is completely Swedish. If you see it starting, join in without a second thought.",
              },
              {
                icon: "🏅",
                title: "The Midsommar pentathlon",
                text: "Many organised celebrations include the Midsommar pentathlon: a series of outdoor team games. Sack races, horseshoe throwing, tug of war... The goal is to laugh more than to win. Skansen and Hågelbyparken usually organise their own versions throughout the day.",
              },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#f5edff", borderRadius: "12px", padding: "22px 24px" }}>
                <div style={{ fontSize: "22px", marginBottom: "8px" }}>{item.icon}</div>
                <h3 style={{ fontSize: "17px", fontWeight: 800, margin: "0 0 8px 0" }}>{item.title}</h3>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#444", margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* MUSEUMS OPEN */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            Which museums and attractions are open during Midsommar?
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "24px", color: "#333" }}>
            Midsommar Eve is a public holiday in Sweden and most shops and businesses close. But if you want to combine the celebrations with some culture, these museums and attractions are usually open that weekend with reduced hours. Always check each venue&apos;s website before visiting.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "56px" }}>
            {[
              { name: "Skansen", url: "https://www.skansen.se", emoji: "🏛️" },
              { name: "Vasa Museum", url: "https://www.vasamuseet.se", emoji: "⛵" },
              { name: "Nordiska Museet", url: "https://www.nordiskamuseet.se", emoji: "🏺" },
              { name: "Gröna Lund", url: "https://www.gronalund.com", emoji: "🎢" },
              { name: "Junibacken", url: "https://www.junibacken.se", emoji: "📚" },
              { name: "The Royal Palace", url: "https://www.kungligaslotten.se/english/royal-palaces-and-sites/the-royal-palace.html", emoji: "👑" },
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

          {/* FOOD */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.01em" }}>
            What to eat and drink at Midsommar
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "56px" }}>
            {[
              { icon: "🐟", text: "Sill (pickled herring) — in all its varieties. It is the centrepiece of the Midsommar table. If you do not like herring, Midsommar will change your mind." },
              { icon: "🥔", text: "New potatoes with dill — boiled with butter. Simple and perfect. The first potatoes of the season are practically sacred in Sweden." },
              { icon: "🍓", text: "Strawberries with cream — the essential dessert. Swedish jordgubbar in season are incomparably sweet and fragrant." },
              { icon: "🥃", text: "Snaps (aquavit) — the traditional spirit for toasting. It comes with a song. Do not worry, they will teach you." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "#f9f9f9", borderRadius: "12px", padding: "20px 16px" }}>
                <div style={{ fontSize: "22px", marginBottom: "10px" }}>{item.icon}</div>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#333", margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* TIPS */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Tips for experiencing Midsommar like a local
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "56px" }}>
            {[
              { icon: "🌸", text: "Wear a flower crown. You can buy one ready-made at markets or make your own with wildflowers — you need at least 7 different types." },
              { icon: "🛒", text: "Shop on Thursday June 18. Almost everything closes on Midsommar Friday: supermarkets, shops, pharmacies. Do not leave it to the last minute." },
              { icon: "🚇", text: "Use the tunnelbana. Check which line gets you closest in the table above. Driving on Midsommar is chaotic — public transport is the smart choice." },
              { icon: "📸", text: "Best light is at 9-10 PM. The June sun at that hour is pure gold. Keep your camera charged and make the most of that unique Nordic magic." },
            ].map((tip, i) => (
              <div key={i} style={{ backgroundColor: "#f9f9f9", borderRadius: "12px", padding: "20px 16px" }}>
                <div style={{ fontSize: "22px", marginBottom: "10px" }}>{tip.icon}</div>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#333", margin: 0 }}>{tip.text}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Frequently asked questions about Midsommar in Stockholm 2026
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
              Want to experience Midsommar like a local?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", marginBottom: "24px", lineHeight: 1.6 }}>
              We share the best plans, spots and real-time coverage every summer. Don&apos;t miss a thing.
            </p>
            <a href="https://www.instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: "#FFD600", color: "#0f0f0f", fontWeight: 700, fontSize: "15px", padding: "14px 32px", borderRadius: "8px", textDecoration: "none" }}>
              Follow @quepasaestocolmoo
            </a>
          </div>

        </article>

        {/* FOOTER */}
        <footer style={{ backgroundColor: "#0f0f0f", color: "#fff", padding: "32px 24px", textAlign: "center" }}>
          <div style={{ fontWeight: 900, fontSize: "16px", marginBottom: "8px" }}>
            ¿QUÉ PASA? <span style={{ color: "#6b00da" }}>ESTOCOLMO</span>
          </div>
          <p style={{ fontSize: "13px", color: "#888", marginBottom: "16px" }}>
            © 2026 Qué Pasa Estocolmo. All rights reserved.
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