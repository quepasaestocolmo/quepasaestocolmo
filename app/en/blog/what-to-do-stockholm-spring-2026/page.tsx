import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Do in Stockholm in Spring 2026 — Complete Guide",
  description:
    "The best things to do in Stockholm in spring 2026: cherry blossoms, Valborg, Djurgården, the Ocean Bus and more. A local guide to make the most of the city.",
  openGraph: {
    title: "What to Do in Stockholm in Spring 2026 — Complete Guide",
    description:
      "The best things to do in Stockholm in spring 2026: cherry blossoms, Valborg, Djurgården, the Ocean Bus and more.",
    url: "https://www.quepasaestocolmo.com/en/blog/what-to-do-stockholm-spring-2026",
    siteName: "Qué Pasa Estocolmo",
    images: [
      {
        url: "https://www.quepasaestocolmo.com/stockholmhero.webp",
        width: 1200,
        height: 630,
        alt: "Stockholm in spring with canals and cherry blossoms",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const faqItems = [
  {
    question: "When does spring start in Stockholm in 2026?",
    answer:
      "Spring in Stockholm arrives gradually. By March the days are noticeably longer, but it is in April that the city truly wakes up. Temperatures rise between 8°C and 15°C (46–59°F), parks fill with flowers and locals flood the streets. By May it already feels like summer.",
  },
  {
    question: "What festivals are there in Stockholm in spring 2026?",
    answer:
      "Spring 2026 highlights include the Cherry Blossom Day at Kungsträdgården on April 28th — a free Japanese culture festival — and Valborg on April 30th, the traditional Swedish bonfire night welcoming summer. Skansen also opens its outdoor concert season in May. Check the full program at visitstockholm.com.",
  },
  {
    question: "What should I wear in Stockholm in spring?",
    answer:
      "In April temperatures can swing between 5°C and 15°C (41–59°F) in the same day. Layering is key: a t-shirt, a sweater and a light jacket. By May you can go lighter, though rainy days are still common. Always carry a small umbrella.",
  },
  {
    question: "What are the best parks to visit in Stockholm in spring?",
    answer:
      "The best parks in spring are Kungsträdgården (cherry blossoms in April), Djurgården (wildlife, museums and nature walks), Hagaparken (tulips and lakeside paths) and Skinnarviksberget in Södermalm for the best panoramic views of the city at sunset.",
  },
  {
    question: "What is Valborg and how is it celebrated in Stockholm?",
    answer:
      "Valborg (April 30th) is the traditional Swedish celebration welcoming summer. In Stockholm the most famous gathering is at Evert Taubes terrass on Riddarholmen island, where thousands sing traditional spring songs around a bonfire. There are also celebrations at Skansen and university campuses. It is one of the most lively nights of the year — and completely free.",
  },
  {
    question: "Is Stockholm worth visiting in spring?",
    answer:
      "Absolutely. Spring is one of the best times to visit Stockholm. There are fewer tourists than in summer, hotel prices are lower, the days get longer fast and the city is especially beautiful with cherry blossoms in bloom and locals celebrating the end of winter in parks and terraces.",
  },
  {
    question: "How much does it cost to visit Stockholm in spring 2026?",
    answer:
      "Stockholm is expensive, but spring is mid-season with lower prices than summer. A central hotel can cost between 100 and 200€ per night. Most parks, markets and spring festivals are free. The Stockholm Card (from 699 SEK/day) includes public transport and entry to over 60 museums.",
  },
  {
    question: "What museums are open in Stockholm in spring?",
    answer:
      "All major museums are open in spring: the Vasa Museum (17th-century warship), the ABBA Museum, Fotografiska, Moderna Museet and the open-air Skansen. In spring they extend their opening hours and many run special events. Most are free with the Stockholm Card.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "What to Do in Stockholm in Spring 2026 — Complete Guide",
      description:
        "The best things to do in Stockholm in spring 2026: cherry blossoms, Valborg, Djurgården, the Ocean Bus and more.",
      image: "https://www.quepasaestocolmo.com/stockholmhero.webp",
      datePublished: "2026-04-01",
      dateModified: "2026-04-20",
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
      url: "https://www.quepasaestocolmo.com/en/blog/what-to-do-stockholm-spring-2026",
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
      name: "Valborg 2026 in Stockholm",
      startDate: "2026-04-30",
      endDate: "2026-04-30",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Evert Taubes terrass, Riddarholmen",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Stockholm",
          addressCountry: "SE",
        },
      },
      description:
        "Traditional Swedish celebration welcoming summer with bonfires, spring songs and gatherings across the city.",
      isAccessibleForFree: true,
      organizer: {
        "@type": "Organization",
        name: "Visit Stockholm",
        url: "https://visitstockholm.com",
      },
    },
  ],
};

export default function WhatToDoStockholmSpring2026() {
  return (
    <>
      <Script
        id="json-ld-spring-stockholm"
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
              QUE PASA?
              <span style={{ display: "block", color: "#6b00da", fontSize: "15px" }}>ESTOCOLMO</span>
            </div>
          </Link>
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <Link href="/" style={{ fontSize: "14px", color: "#0f0f0f", textDecoration: "none" }}>Home</Link>
            <Link
              href="https://www.instagram.com/quepasaestocolmoo"
              target="_blank"
              style={{
                backgroundColor: "#6b00da", color: "#fff", fontSize: "13px", fontWeight: 700,
                padding: "8px 18px", borderRadius: "8px", textDecoration: "none",
              }}
            >
              Follow us
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <div style={{ position: "relative", width: "100%", height: "520px", overflow: "hidden" }}>
          <Image
            src="/stockholmhero.webp"
            alt="Stockholm in spring 2026 with canals, flowers and blue sky"
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
              Stockholm in Spring
            </span>
            <h1 style={{
              color: "#fff", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900,
              lineHeight: 1.1, marginTop: "14px", marginBottom: 0, letterSpacing: "-0.02em",
            }}>
              What to Do in Stockholm in Spring 2026 — Complete Guide
            </h1>
          </div>
        </div>

        {/* ARTICLE */}
        <article style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px 80px" }}>

          {/* META */}
          <div style={{
            display: "flex", gap: "10px", alignItems: "center", fontSize: "13px",
            color: "#888", marginBottom: "32px", flexWrap: "wrap",
          }}>
            <span>April 2026</span>
            <span style={{ color: "#FFD600", fontWeight: 700, fontSize: "18px" }}>·</span>
            <span>By Que Pasa Estocolmo</span>
            <span style={{ color: "#FFD600", fontWeight: 700, fontSize: "18px" }}>·</span>
            <span>8 min read</span>
          </div>

          {/* SUMMARY CAPSULE */}
          <div style={{
            borderLeft: "4px solid #6b00da", backgroundColor: "#f5edff",
            borderRadius: "0 12px 12px 0", padding: "18px 22px", marginBottom: "36px",
          }}>
            <p style={{ margin: 0, fontSize: "16px", fontWeight: 500, lineHeight: 1.7 }}>
              <strong>Quick summary:</strong> Spring in Stockholm 2026 starts picking up in April and peaks in May. The must-do plans are the <strong>cherry blossoms at Kungstradgarden</strong> (mid-April), <strong>Valborg on April 30th</strong>, a day in <strong>Djurgarden</strong>, sunset at <strong>Skinnarviksberget</strong>, the <strong>Ocean Bus</strong> amphibious tour and a ferry trip through the <strong>archipelago</strong>. The city is stunning, there are fewer tourists than in summer and many events are free.
            </p>
          </div>

          <p style={{ fontSize: "19px", lineHeight: 1.75, marginBottom: "16px", fontWeight: 400 }}>
            Spring in Stockholm is something else. After months of darkness and cold, when the sun comes back and the days stretch out, Swedes pour into the streets like they are seeing daylight for the first time. The energy of the city shifts completely — and if you are here for it, you will feel it.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "40px", color: "#333" }}>
            We have been living and documenting Stockholm since 2019 at <a href="https://www.instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>@quepasaestocolmoo</a>, and spring is still our favourite time of year. Here are the plans that are genuinely worth doing.
          </p>

          {/* H2 MAIN */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "40px", letterSpacing: "-0.01em" }}>
            What are the best things to do in Stockholm in spring 2026?
          </h2>

          {/* PLAN 1 */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Kungstradgarden1.webp" alt="Cherry blossoms in full bloom at Kungstradgarden, Stockholm, in April" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>1</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>See the cherry blossoms at Kungstradgarden</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              In mid-April, <a href="https://kungstradgarden.stockholm/" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Kungstradgarden</a> becomes the most photogenic park in all of Scandinavia. Over 60 Japanese cherry trees — a gift from Japan to the Swedish king in 1998 — form a stunning canopy of pink blossoms that lasts around two weeks.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              On <strong>April 28th</strong> the Cherry Blossom Day festival takes place — a free Japanese culture event with Bunraku puppet theatre, traditional music and food stalls. To avoid the crowds, locals go on weekdays before 10am, or head to <strong>Lumaparken</strong> in Hammarby Sjöstad, which has 50 equally beautiful trees and almost no tourists.
            </p>
            <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
              <Image src="/Kungstradgarden.webp" alt="Pink cherry blossom petals at Kungstradgarden park in spring" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>How to get there:</strong> Metro blue or red line, Kungstradgarden station. Also walkable from Gamla Stan in 10 minutes. <strong style={{ color: "#0f0f0f" }}>Best time:</strong> weekday mornings before 10am.
            </div>
          </div>

          {/* PLAN 2 */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Valborg1.webp" alt="Valborg celebration in Stockholm with thousands of people around a bonfire" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>2</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Experience Valborg on April 30th</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Valborg is the Swedish bonfire night welcoming summer and it is absolutely unmissable if you are in Stockholm on April 30th. Thousands gather at Evert Taubes terrass on Riddarholmen island to sing traditional spring songs around a bonfire. The atmosphere is unique — a mix of tradition, collective joy and lots of outdoor beers.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              There are also celebrations at <a href="https://www.skansen.se/en/" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Skansen</a>, university campuses and practically every neighbourhood in the city. Check the full programme at <a href="https://visitstockholm.com" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Visit Stockholm</a>.
            </p>
            <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
              <Image src="/Valborg_.webp" alt="Bonfire lighting at Valborg celebration in Stockholm spring" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>How to get there:</strong> Metro to Gamla Stan, then 5 minutes on foot. <strong style={{ color: "#0f0f0f" }}>Entry:</strong> Free and open to everyone.
            </div>
          </div>

          {/* PLAN 3 */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Djurgarden.webp" alt="Spring walk through Djurgarden island with trees in bloom and canal views" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>3</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Spend a full day at Djurgarden</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Djurgarden is Stockholm central green island and in spring it becomes the perfect full-day plan. You can walk among blooming trees, visit the <a href="https://www.vasamuseet.se/en" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Vasa Museum</a> (a 17th-century warship preserved almost intact), go to the ABBA Museum or just sit by the canal with a fika while the boats go by.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              <a href="https://www.skansen.se/en/" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Skansen</a> open-air museum opens with special spring activities including baby animals and traditional Swedish craft demonstrations — great for families.
            </p>
            <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
              <Image src="/Djurgarden1.webp" alt="Nature and spring flowers at Djurgarden island in Stockholm" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>How to get there:</strong> Ferry from Slussen or bus 67 from the city centre. Also by bike — Donkey Republic stations are all over the city.
            </div>
          </div>

          {/* PLAN 4 */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Skinnarviksberget.webp" alt="Panoramic view of Stockholm from Skinnarviksberget at sunset in spring" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>4</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Watch the sunset from Skinnarviksberget</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Skinnarviksberget, in Södermalm, offers the best panoramic view in Stockholm — and locals know it. In spring, when the sun sets after 8pm, this spot becomes the favourite meeting point in the city. People show up with beers, blankets and snacks to watch the sun go down over the canals.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              It is completely free, always open and barely mentioned in tourist guides. Exactly the kind of spot you only find out about if you live here — or if you follow <a href="https://www.instagram.com/quepasaestocolmoo" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>@quepasaestocolmoo</a>.
            </p>
            <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
              <Image src="/Skinnarviksberget3.webp" alt="Stockholm locals enjoying the sunset view from Skinnarviksberget in spring" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>How to get there:</strong> Metro to Zinkensdamm or Hornstull, then 10 minutes walking uphill. <strong style={{ color: "#0f0f0f" }}>Best time:</strong> 1 hour before sunset.
            </div>
          </div>

          {/* PLAN 5 */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/Oceanbus1.webp" alt="Ocean Bus amphibious vehicle driving through Stockholm streets before entering the water" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>5</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Ride the Ocean Bus — Stockholm amphibious tour</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              The <a href="https://oceanbus.se/en/" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Ocean Bus</a> is one of the most original experiences in Stockholm. It is an amphibious bus that starts by driving through the city streets and then — without warning — plunges into the canal and becomes a boat. The look on people faces in that moment is priceless.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              The tour lasts around 60 minutes and combines the best views of the city from both land and water. Perfect for families, couples or groups. In spring the light is incredible and the photos from the water with the city skyline are stunning. Book in advance — it sells out fast.
            </p>
            <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
              <Image src="/Oceanbus.webp" alt="View from the Ocean Bus navigating the canals of Stockholm" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Departure point:</strong> Stromgatan 10, next to the Royal Opera. <strong style={{ color: "#0f0f0f" }}>Duration:</strong> approx. 60 minutes. <strong style={{ color: "#0f0f0f" }}>Price:</strong> 325 SEK adults / 270 SEK children. Book at oceanbus.se.
            </div>
          </div>

          {/* PLAN 6 */}
          <div style={{ marginBottom: "64px" }}>
            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/archipielago.webp" alt="Ferry sailing through the Stockholm archipelago in spring" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>6</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Take a ferry through the archipelago</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              In May the Stockholm archipelago starts to come alive and you can take a ferry from Stromkajen to islands like Vaxholm, Grinda or Sandhamn. The views from the boat — water, rocks, forest and red wooden cottages — are exactly what you imagine when you think of Sweden.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              The <a href="https://waxholmsbolaget.se/en/" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Waxholmsbolaget</a> ferries are part of the public transport system and can be paid with the Stockholm SL card. A half-day trip to Vaxholm is one of the most genuinely Swedish things you can do in spring.
            </p>
            <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
              <Image src="/archipielago1.webp" alt="Swedish island in the Stockholm archipelago in spring" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Departure point:</strong> Stromkajen, in front of the Grand Hotel. Journeys range from 45 minutes to 2 hours depending on the destination.
            </div>
          </div>

          {/* TIPS */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.01em" }}>
            What should I know before visiting Stockholm in spring?
          </h2>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "16px", marginBottom: "40px",
          }}>
            {[
              { icon: "🧥", text: "Layer up — in April it can be 5°C in the morning and 15°C by afternoon. Always." },
              { icon: "🎟️", text: "The Stockholm Card covers transport and 60+ museums. Great value if you plan to visit several." },
              { icon: "🌅", text: "In May the sun sets after 9pm. Make the most of the late afternoon — it is the most beautiful light." },
              { icon: "🚲", text: "The city is very bikeable in spring. Rent a bike with Donkey Republic and move around like a local." },
              { icon: "💳", text: "Stockholm is almost 100% cashless. Card always — you do not need Swedish kronor in cash." },
              { icon: "📅", text: "Valborg (April 30) and Cherry Blossom Day (April 28) are the busiest days. Book accommodation early." },
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
              Local tip: we follow spring in real time at <a href="https://www.instagram.com/quepasaestocolmoo" target="_blank" style={{ color: "#6b00da", textDecoration: "none" }}>@quepasaestocolmoo</a> — we post when the cherry blossoms peak, which festivals are on and the best plans each week.
            </p>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Frequently asked questions about Stockholm in spring 2026
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
              Want to know what is happening in Stockholm this week?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", marginBottom: "24px", lineHeight: 1.6 }}>
              We post the best plans, festivals and events in Stockholm — every week, in real time.
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
              Follow @quepasaestocolmoo
            </a>
          </div>

        </article>

        {/* FOOTER */}
        <footer style={{ backgroundColor: "#0f0f0f", color: "#fff", padding: "32px 24px", textAlign: "center" }}>
          <div style={{ fontWeight: 900, fontSize: "16px", marginBottom: "8px" }}>
            QUE PASA? <span style={{ color: "#6b00da" }}>ESTOCOLMO</span>
          </div>
          <p style={{ fontSize: "13px", color: "#888", marginBottom: "16px" }}>
            © 2026 Que Pasa Estocolmo. All rights reserved.
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