import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3 Days in Stockholm: The Ultimate First-Timer's Itinerary (2026)",
  description:
    "The perfect 3-day Stockholm itinerary for first-time visitors: Gamla Stan, Vasa Museum, Skansen, the archipelago, fika spots and local tips. Updated 2026.",
  openGraph: {
    title: "3 Days in Stockholm: The Ultimate First-Timer's Itinerary (2026)",
    description:
      "Day-by-day Stockholm itinerary for first timers: what to see, where to eat, how to get around and hidden gems only locals know. Updated 2026.",
    url: "https://www.quepasaestocolmo.com/en/blog/stockholm-3-day-itinerary-2026",
    siteName: "Qué Pasa Estocolmo",
    locale: "en_US",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Is 3 days enough for Stockholm?",
    answer:
      "Yes — 3 days is the sweet spot for Stockholm. You can cover Gamla Stan, Djurgården (Vasa Museum + Skansen), Södermalm and still fit in a day trip to the archipelago or Drottningholm Palace. If you have 4–5 days, you can add Uppsala or explore further islands.",
  },
  {
    question: "How much does a 3-day trip to Stockholm cost?",
    answer:
      "A mid-range budget is around 2,500–3,500 SEK per person per day including accommodation, food and activities. The 3-day SL transport pass costs 350 SEK and saves you a lot of money. Stockholm is expensive but manageable with planning.",
  },
  {
    question: "What is the best time to visit Stockholm?",
    answer:
      "May and June are ideal: pleasant weather, long days (up to 18 hours of daylight in June) and fewer crowds than July–August. Spring also brings the cherry blossoms at Kungsträdgården. Winter is magical but cold — the Christmas markets are worth it.",
  },
  {
    question: "Do I need cash in Stockholm?",
    answer:
      "No. Stockholm is practically cashless. You can pay by contactless card everywhere — metro, buses, restaurants, museums and even street markets. Don't bother getting Swedish kronor in cash.",
  },
  {
    question: "What is fika and where should I have it in Stockholm?",
    answer:
      "Fika is the Swedish coffee break tradition — a moment to slow down with coffee and a cinnamon or cardamom bun. Good fika spots include Vete-Katten in Norrmalm, Drop Coffee in Södermalm and Johan & Nyström near Gamla Stan.",
  },
  {
    question: "Is the Stockholm Pass worth it for 3 days?",
    answer:
      "It depends on how many museums you plan to visit. If you go to the Vasa Museum, Skansen, the Nordic Museum and take a boat tour, the 2–3 day pass may be worth it. For this itinerary, buying tickets separately works out cheaper.",
  },
  {
    question: "How do I get from Arlanda Airport to central Stockholm?",
    answer:
      "The fastest option is the Arlanda Express (18 minutes, ~340 SEK). The cheapest is the Pendeltåg regional train (about 151 SEK total including airport fee, ~38 minutes). A taxi has a fixed rate of around 700 SEK.",
  },
  {
    question: "Is Stockholm safe for tourists?",
    answer:
      "Yes, Stockholm is one of the safest capitals in Europe. You can walk at night without problems. Watch out for pickpockets in Gamla Stan and Stockholm Central Station, as in any tourist city.",
  },
  {
    question: "What are the best Stockholm metro art stations?",
    answer:
      "Stockholm's tunnelbana is known as the world's longest art gallery. Don't miss T-Centralen (blue line, cave-like blue paintings), Kungsträdgården (ancient ruins on the platform) and Solna Centrum (eerie red forest ceiling). All free with your SL pass.",
  },
  {
    question: "Can I visit the Stockholm archipelago in one day?",
    answer:
      "Yes. Islands like Fjäderholmarna (25 min by boat) or Vaxholm (45 min) are perfect for a day trip. Ferries depart from Strömkajen, in front of the Grand Hotel. The SL pass covers some lines — check the Waxholmsbolaget website for schedules.",
  },
  {
    question: "Where should I stay in Stockholm for the first time?",
    answer:
      "Södermalm is the best neighbourhood for first-timers: central, vibrant, great food scene and good transport links. Gamla Stan is atmospheric but pricey. Norrmalm near Central Station is practical if arriving by train.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "3 Days in Stockholm: The Ultimate First-Timer's Itinerary (2026)",
      description:
        "The perfect 3-day Stockholm itinerary for first-time visitors with real local tips. Updated 2026.",
      datePublished: "2026-05-12",
      dateModified: "2026-05-12",
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
      url: "https://www.quepasaestocolmo.com/en/blog/stockholm-3-day-itinerary-2026",
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

export default function Stockholm3DayItinerary() {
  return (
    <>
      <Script
        id="json-ld-itinerary-en"
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
            <Link href="/" style={{ fontSize: "14px", color: "#0f0f0f", textDecoration: "none" }}>Home</Link>
            <Link
              href="/blog/itinerario-estocolmo-3-dias-2026"
              style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: "#6b00da", textDecoration: "none", border: "1px solid #6b00da", padding: "6px 12px", borderRadius: "6px" }}
            >
              🌐 ES
            </Link>
            <Link href="https://www.instagram.com/quepasaestocolmoo" target="_blank"
              style={{ backgroundColor: "#6b00da", color: "#fff", fontSize: "13px", fontWeight: 700, padding: "8px 18px", borderRadius: "8px", textDecoration: "none" }}>
              Follow us
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <div style={{ position: "relative", width: "100%", height: "520px", overflow: "hidden" }}>
          <Image
            src="/Gamla-Stan-hero.webp"
            alt="Aerial view of Gamla Stan, Stockholm old town at sunset — perfect for a first visit"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.65) 100%)",
          }} />
          <div style={{ position: "absolute", bottom: "48px", left: "32px", right: "32px", maxWidth: "760px" }}>
            <span style={{
              backgroundColor: "#FFD600", color: "#0f0f0f", fontSize: "11px", fontWeight: 700,
              padding: "5px 14px", borderRadius: "20px", letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              Travel Guide · Updated 2026
            </span>
            <h1 style={{
              color: "#fff", fontSize: "clamp(26px, 5vw, 48px)", fontWeight: 900,
              lineHeight: 1.1, marginTop: "14px", marginBottom: 0, letterSpacing: "-0.02em",
            }}>
              3 Days in Stockholm: The Ultimate First-Timer&apos;s Itinerary (2026)
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
            <span>9 min read</span>
          </div>

          {/* CAPSULE */}
          <div style={{
            borderLeft: "4px solid #6b00da", backgroundColor: "#f5edff",
            borderRadius: "0 12px 12px 0", padding: "18px 22px", marginBottom: "36px",
          }}>
            <p style={{ margin: 0, fontSize: "16px", fontWeight: 500, lineHeight: 1.7 }}>
              <strong>Quick summary:</strong> 3 days is the perfect amount of time for a first visit to Stockholm. <strong>Day 1</strong> — Gamla Stan, the Royal Palace and sunset views from Södermalm. <strong>Day 2</strong> — Djurgården: Vasa Museum, Skansen and the metro art gallery. <strong>Day 3</strong> — Stockholm archipelago or Drottningholm Palace. Get the <strong>72h SL pass (350 SEK)</strong> before leaving the airport — it covers everything.
            </p>
          </div>

          <p style={{ fontSize: "19px", lineHeight: 1.75, marginBottom: "16px", fontWeight: 400 }}>
            Stockholm looks expensive and complicated on paper — fourteen islands, Scandinavian prices, a language you don&apos;t know. But the moment you arrive, you realise it&apos;s one of the easiest and most rewarding cities in Europe to navigate. Three days is genuinely enough to see the best of it.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "40px", color: "#333" }}>
            We&apos;ve been living in Stockholm for over six years and covering the city since 2019. This isn&apos;t written by someone who visited for a weekend — it&apos;s what we&apos;d actually tell a friend visiting for the first time.
          </p>

          {/* TRANSPORT */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            How to get around Stockholm: the SL pass explained
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            First thing: get a <strong>72-hour SL pass (350 SEK)</strong>. It covers the metro (tunnelbana), buses, trams and urban ferries with unlimited trips. Buy it on the <a href="https://sl.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>SL app</a> or at any station machine. Pay by card — Stockholm is essentially cashless.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            From Arlanda Airport, the <a href="https://www.arlandaexpress.com" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}><strong>Arlanda Express</strong></a> gets you to the city centre in 18 minutes (~340 SEK). The budget option is the Pendeltåg regional train (~151 SEK total, ~38 minutes) — comfortable and a fraction of the price.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
            <div style={{ position: "relative", width: "100%", height: "220px", borderRadius: "12px", overflow: "hidden" }}>
              <Image src="/Tunnelbana_.webp" alt="Stockholm tunnelbana metro — easy and efficient public transport" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.65))", padding: "12px 14px" }}>
                <span style={{ color: "#fff", fontSize: "13px", fontWeight: 700 }}>Tunnelbana (SL Metro)</span>
              </div>
            </div>
            <div style={{ position: "relative", width: "100%", height: "220px", borderRadius: "12px", overflow: "hidden" }}>
              <Image src="/Arlanda-express.webp" alt="Arlanda Express — fast train from Stockholm Arlanda Airport" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.65))", padding: "12px 14px" }}>
                <span style={{ color: "#fff", fontSize: "13px", fontWeight: 700 }}>Arlanda Express</span>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#FFD600", borderRadius: "12px", padding: "18px 22px", marginBottom: "48px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "20px" }}>💡</span>
            <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, lineHeight: 1.6 }}>
              Local tip: skip the Stockholm Pass for this itinerary. Separate tickets for the Vasa Museum (170 SEK) and Skansen (295 SEK in summer) are cheaper than the pass unless you&apos;re visiting 5+ attractions.
            </p>
          </div>

          {/* DAY 1 */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "8px", letterSpacing: "-0.01em" }}>
            Day 1 — Gamla Stan, the Royal Palace and Södermalm at sunset
          </h2>
          <p style={{ fontSize: "13px", color: "#888", marginBottom: "20px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Old Town · Royal Palace · Södermalm · Fika
          </p>

          <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
            <Image src="/Gamla-Stan.webp" alt="Cobblestone streets of Gamla Stan — Stockholm's medieval old town" fill style={{ objectFit: "cover" }} />
          </div>

          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            Start in <strong>Gamla Stan</strong>, Stockholm&apos;s medieval old town founded in the 13th century. One of the best-preserved old towns in Europe — cobblestone alleys, colourful facades and centuries of history on a walkable island. Don&apos;t just stick to the main street: find <strong>Mårten Trotzigs Gränd</strong> (90 cm wide, the narrowest alley in the city) and head to <strong>Stortorget</strong>, the oldest square in Stockholm and the one on every travel guide cover.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            At noon, watch the <strong>changing of the guard at the Royal Palace</strong> (daily at 12:15, free from outside). Then cross into <strong>Södermalm</strong> — Stockholm&apos;s coolest neighbourhood, full of independent cafés, vintage shops and the city&apos;s best free viewpoints. Walk up to <strong>Monteliusvägen</strong> for panoramic views over Gamla Stan, then end the day at <strong>Skinnarviksberget</strong> for sunset — the highest point in the city, where locals bring picnics in summer.
          </p>

          <div style={{ backgroundColor: "#FFD600", borderRadius: "12px", padding: "18px 22px", marginBottom: "24px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "20px" }}>☕</span>
            <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, lineHeight: 1.6 }}>
              <strong>Fika stop:</strong> Drop Coffee in Södermalm (Wollmar Yxkullsgatan 10) is one of the best specialty coffee spots in Stockholm. Get a cinnamon bun, sit down and slow down — this is what fika is about.
            </p>
          </div>

          <div style={{ backgroundColor: "#f9f9f9", borderRadius: "12px", padding: "20px 22px", marginBottom: "48px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 12px 0", color: "#6b00da" }}>📍 Day 1 Highlights</h3>
            <ul style={{ margin: 0, padding: "0 0 0 18px", color: "#444", fontSize: "15px", lineHeight: 2.1 }}>
              <li>Gamla Stan — wander without a plan, getting lost is the point</li>
              <li>Mårten Trotzigs Gränd — narrowest alley in Stockholm (90 cm)</li>
              <li>Stortorget — oldest and most photographed square</li>
              <li>Royal Palace — changing of the guard at 12:15 (free outside)</li>
              <li>Monteliusvägen — panoramic views, completely free</li>
              <li>Fika break in Södermalm — cinnamon bun is non-negotiable</li>
              <li>Skinnarviksberget — sunset with the locals</li>
            </ul>
          </div>

          {/* DAY 2 */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "8px", letterSpacing: "-0.01em" }}>
            Day 2 — Djurgården: Vasa Museum, Skansen and the metro art gallery
          </h2>
          <p style={{ fontSize: "13px", color: "#888", marginBottom: "20px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Museum island · Vasa · Skansen · Metro art stations
          </p>

          <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
            <Image src="/Djurgarden.webp" alt="Djurgården island Stockholm — home to the Vasa Museum and Skansen" fill style={{ objectFit: "cover" }} />
          </div>

          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            Day two is for <strong>Djurgården</strong>, the museum island. Arrive early — before 10:00 — at the <a href="https://www.vasamuseet.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}><strong>Vasa Museum</strong></a>. Inside: a 17th-century warship that sank on its maiden voyage in 1628 and was recovered from the seabed in 1961. 95% original. Nothing prepares you for the scale of it — it&apos;s genuinely one of the most extraordinary things you&apos;ll see in Europe.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            Afternoon at <a href="https://www.skansen.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}><strong>Skansen</strong></a>, the world&apos;s oldest open-air museum: historical Swedish houses, Nordic animals (moose, lynx, brown bears) and craftspeople at work. Allow at least 2–3 hours. Optional: the <strong>ABBA Museum</strong> is right next door and genuinely fun even if you&apos;re not a fan.
          </p>

          <div style={{ position: "relative", width: "100%", height: "340px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
            <Image src="/Vasamuseum.webp" alt="The Vasa warship — 17th century, 95% original, inside the Vasa Museum Stockholm" fill style={{ objectFit: "cover" }} />
          </div>

          <div style={{ backgroundColor: "#FFD600", borderRadius: "12px", padding: "18px 22px", marginBottom: "24px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "20px" }}>🚇</span>
            <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, lineHeight: 1.6 }}>
              <strong>Evening: the metro art gallery.</strong> Stockholm&apos;s tunnelbana is the world&apos;s longest art gallery. Don&apos;t miss <strong>Kungsträdgården</strong> station (ancient ruins on the platform) and <strong>T-Centralen</strong> (cave-like blue paintings). Both free with your SL pass.
            </p>
          </div>

          <div style={{ backgroundColor: "#6b00da", borderRadius: "12px", padding: "24px", marginBottom: "24px", color: "#fff" }}>
            <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>🎟️ Book tickets in advance</div>
            <p style={{ fontSize: "14px", lineHeight: 1.6, margin: "0 0 16px", opacity: 0.9 }}>
              The Vasa Museum and Skansen fill up fast in high season. Book online and skip the queues.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://www.getyourguide.com/stockholm-l30/" target="_blank" rel="noopener noreferrer sponsored"
                style={{ backgroundColor: "#FFD600", color: "#0f0f0f", padding: "10px 20px", borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>
                GetYourGuide →
              </a>
              <a href="https://www.civitatis.com/en/stockholm/" target="_blank" rel="noopener noreferrer sponsored"
                style={{ backgroundColor: "transparent", color: "#FFD600", padding: "10px 20px", borderRadius: "8px", fontWeight: 600, textDecoration: "none", fontSize: "14px", border: "1px solid rgba(255,214,0,0.5)" }}>
                Civitatis →
              </a>
            </div>
          </div>

          <div style={{ backgroundColor: "#f9f9f9", borderRadius: "12px", padding: "20px 22px", marginBottom: "48px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 12px 0", color: "#6b00da" }}>📍 Day 2 Highlights</h3>
            <ul style={{ margin: 0, padding: "0 0 0 18px", color: "#444", fontSize: "15px", lineHeight: 2.1 }}>
              <li>Vasa Museum — arrive before 10:00 to avoid queues (170 SEK)</li>
              <li>Skansen — minimum 2–3 hours (295 SEK in summer)</li>
              <li>ABBA Museum — optional, surprisingly fun (250 SEK)</li>
              <li>Fotografiska — world-class photography, open until 11pm</li>
              <li>Metro art stations — Kungsträdgården + T-Centralen (free)</li>
            </ul>
          </div>

          {/* DAY 3 */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "8px", letterSpacing: "-0.01em" }}>
            Day 3 — Stockholm archipelago or Drottningholm Palace
          </h2>
          <p style={{ fontSize: "13px", color: "#888", marginBottom: "20px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Archipelago · UNESCO Palace · Day trip from Stockholm
          </p>

          <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
            <Image src="/Vinterviken-.webp" alt="Stockholm archipelago — thousands of islands just outside the city" fill style={{ objectFit: "cover" }} />
          </div>

          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            Day three: leave the centre. Stockholm has over 30,000 islands in its archipelago and even a short ferry changes the whole feel of the trip. <strong>Fjäderholmarna</strong> (25 min by boat) is the closest — waterfront cafés, craft brewery, walking trails. <strong>Vaxholm</strong> (45 min) is the most beautiful: a historic fortress town with wooden houses in classic Swedish red. Ferries depart from Strömkajen with <a href="https://www.waxholmsbolaget.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Waxholmsbolaget</a>, in front of the Grand Hotel.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            Prefer history? <a href="https://www.kungligaslotten.se/english/royal-palaces-and-sites/drottningholm-palace.html" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}><strong>Drottningholm Palace</strong></a> is a UNESCO World Heritage Site 30 minutes by boat from the City Hall. The official home of the Swedish royal family, with spectacular baroque gardens. The boat ride through Lake Mälaren is half the experience.
          </p>

          <div style={{ backgroundColor: "#fffbe6", border: "2px solid #FFD600", borderRadius: "12px", padding: "20px 22px", marginBottom: "24px" }}>
            <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "10px" }}>🚢 Recommended boat tours</div>
            <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#333", margin: "0 0 14px" }}>
              Prefer a guided tour with commentary?
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://www.getyourguide.com/stockholm-l30/boat-tours-tc103/" target="_blank" rel="noopener noreferrer sponsored"
                style={{ backgroundColor: "#6b00da", color: "#fff", padding: "10px 20px", borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>
                Boat tours · GetYourGuide →
              </a>
              <a href="https://www.civitatis.com/en/stockholm/stockholm-archipelago-tour/" target="_blank" rel="noopener noreferrer sponsored"
                style={{ backgroundColor: "transparent", color: "#6b00da", padding: "10px 20px", borderRadius: "8px", fontWeight: 600, textDecoration: "none", fontSize: "14px", border: "1px solid #6b00da" }}>
                Archipelago · Civitatis →
              </a>
            </div>
          </div>

          <div style={{ backgroundColor: "#f9f9f9", borderRadius: "12px", padding: "20px 22px", marginBottom: "56px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 12px 0", color: "#6b00da" }}>📍 Day 3 Highlights</h3>
            <ul style={{ margin: 0, padding: "0 0 0 18px", color: "#444", fontSize: "15px", lineHeight: 2.1 }}>
              <li>Fjäderholmarna — closest island, 25 min ferry, great for lunch</li>
              <li>Vaxholm — most scenic archipelago town, 45 min</li>
              <li>Drottningholm Palace — UNESCO site, go by boat</li>
              <li>Farewell fika and dinner in Östermalm or Södermalm</li>
            </ul>
          </div>

          {/* BUDGET */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            How much does 3 days in Stockholm cost?
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "24px", color: "#333" }}>
            Stockholm is expensive by European standards but very manageable with planning. Here&apos;s a realistic per-person breakdown:
          </p>
          <div style={{ overflowX: "auto", marginBottom: "56px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ backgroundColor: "#6b00da", color: "#fff" }}>
                  <th style={{ padding: "12px 14px", textAlign: "left", fontWeight: 700 }}>Item</th>
                  <th style={{ padding: "12px 14px", textAlign: "right", fontWeight: 700 }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Accommodation (hostel/mid-range hotel)", "700–1,200 SEK/night"],
                  ["SL 72h transport pass", "350 SEK (total)"],
                  ["Food (3 meals/day)", "350–600 SEK/day"],
                  ["Vasa Museum", "170 SEK"],
                  ["Skansen (summer)", "295 SEK"],
                  ["Ferry to archipelago or Drottningholm", "150–350 SEK"],
                  ["Coffee + fika daily", "80–120 SEK/day"],
                ].map(([item, price], i) => (
                  <tr key={item} style={{ backgroundColor: i % 2 === 0 ? "#f9f9f9" : "#fff", borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "12px 14px", color: "#333" }}>{item}</td>
                    <td style={{ padding: "12px 14px", color: "#6b00da", fontWeight: 600, textAlign: "right" }}>{price}</td>
                  </tr>
                ))}
                <tr style={{ backgroundColor: "#6b00da" }}>
                  <td style={{ padding: "12px 14px", color: "#fff", fontWeight: 700 }}>Total estimate (3 days)</td>
                  <td style={{ padding: "12px 14px", color: "#FFD600", fontWeight: 700, textAlign: "right" }}>4,500–8,000 SEK/person</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Frequently asked questions about visiting Stockholm
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
              Planning a trip to Stockholm?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", marginBottom: "24px", lineHeight: 1.6 }}>
              Follow us on Instagram for Stockholm through local eyes. Activities, events and honest tips every week since 2019.
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
