import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cherry Blossoms in Stockholm 2026 — Where to See Them & When to Go",
  description:
    "Complete guide to cherry blossoms in Stockholm 2026. Best spots, peak bloom dates, local tips, and everything you need to plan the perfect spring visit.",
  openGraph: {
    title: "Cherry Blossoms in Stockholm 2026 — Where to See Them & When to Go",
    description:
      "Complete guide to cherry blossoms in Stockholm 2026. Best spots, peak bloom dates, and local tips for the perfect spring visit.",
    url: "https://www.quepasaestocolmo.com/en/cherry-blossoms-stockholm-2026",
    siteName: "Qué Pasa Estocolmo",
    images: [
      {
        url: "https://www.quepasaestocolmo.com/cerezos-hero.webp",
        width: 1200,
        height: 630,
        alt: "Cherry blossoms in Stockholm with the City Hall tower in the background",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const faqItems = [
  {
    question: "When do cherry blossoms bloom in Stockholm in 2026?",
    answer:
      "In 2026, Stockholm&apos;s cherry blossoms typically bloom between mid-April and early May. The first buds usually appear in the second week of April, with peak bloom around April 20th. The display lasts approximately two weeks.",
  },
  {
    question: "Where is the best place to see cherry blossoms in Stockholm?",
    answer:
      "Kungsträdgården is the most famous spot, with over 60 Japanese cherry trees forming a spectacular pink canopy in the city centre. For a quieter experience, locals prefer Lumaparken in Hammarby Sjöstad and Bysistorget in Södermalm.",
  },
  {
    question: "Is there a cherry blossom festival in Stockholm in 2026?",
    answer:
      "Yes. On April 28th, 2026, Kungsträdgården hosts the Cherry Blossom Day — a free Japanese culture festival featuring Bunraku theatre, traditional music, Geiko Mai dance performances, and food and craft stalls.",
  },
  {
    question: "How long do the cherry blossoms last in Stockholm?",
    answer:
      "The cherry blossom season in Stockholm lasts approximately two weeks. The exact timing depends on winter temperatures and spring weather, but generally falls between the second and fourth week of April.",
  },
  {
    question: "How do I get to Kungsträdgården to see the cherry blossoms?",
    answer:
      "Take the metro (blue or red line) to Kungsträdgården station, or walk from Gamla Stan in about 10 minutes. The best time to visit is on a weekday before 10am to avoid the crowds.",
  },
  {
    question: "Are there cherry blossoms in Stockholm without the crowds?",
    answer:
      "Yes — Lumaparken in Hammarby Sjöstad has around 50 Japanese cherry trees with very few tourists. Bysistorget on Hornsgatan in Södermalm is another quiet local favourite, surrounded by cafés and design shops.",
  },
  {
    question: "What is the weather like in Stockholm during cherry blossom season?",
    answer:
      "In April, Stockholm temperatures typically range from 5°C to 15°C (41°F to 59°F) in the same day. Layering is strongly recommended — mornings can be cold and afternoons warm.",
  },
  {
    question: "Is Stockholm worth visiting in April for cherry blossoms?",
    answer:
      "Absolutely. April is one of the best times to visit Stockholm — the city comes alive after a long winter, crowds are smaller than in summer, and the cherry blossom display at Kungsträdgården is genuinely spectacular. Hotels and flights are also more affordable than peak summer season.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cherry Blossoms in Stockholm 2026 — Where to See Them & When to Go",
      description:
        "Complete guide to cherry blossoms in Stockholm 2026. Best spots, peak bloom dates, and local tips.",
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
      inLanguage: "en",
      url: "https://www.quepasaestocolmo.com/en/cherry-blossoms-stockholm-2026",
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
      name: "Cherry Blossom Day Stockholm 2026",
      startDate: "2026-04-28",
      endDate: "2026-04-28",
      location: {
        "@type": "Place",
        name: "Kungsträdgården",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Stockholm",
          addressCountry: "SE",
        },
      },
      description:
        "Free Japanese culture festival at Kungsträdgården featuring Bunraku theatre, traditional music, Geiko Mai dance, and food and craft stalls.",
      isAccessibleForFree: true,
    },
  ],
};

export default function CherryBlossomsStockholm() {
  return (
    <>
      <Script
        id="json-ld-cherry"
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
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Link href="/" style={{ fontSize: "13px", color: "#0f0f0f", textDecoration: "none" }}>Home</Link>
            <Link href="/cerezos-estocolmo-2026" style={{ fontSize: "13px", color: "#888", textDecoration: "none" }}>🇪🇸 ES</Link>
            <span style={{ fontSize: "13px", color: "#6b00da", fontWeight: 700 }}>🇬🇧 EN</span>
            <Link href="https://www.instagram.com/quepasaestocolmoo" target="_blank"
              style={{ backgroundColor: "#6b00da", color: "#fff", fontSize: "13px", fontWeight: 700, padding: "8px 18px", borderRadius: "8px", textDecoration: "none" }}>
              Follow us
            </Link>
          </div>
        </nav>

        {/* HERO */}
        <div style={{ position: "relative", width: "100%", height: "520px", overflow: "hidden" }}>
          <Image
            src="/cerezos-hero.webp"
            alt="Cherry blossoms in Stockholm with the City Hall tower in the background"
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
              Stockholm in Spring
            </span>
            <h1 style={{
              color: "#fff", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900,
              lineHeight: 1.1, marginTop: "14px", marginBottom: 0, letterSpacing: "-0.02em"
            }}>
              Cherry Blossoms in Stockholm 2026 — Where to See Them & When to Go
            </h1>
          </div>
        </div>

        {/* ARTICLE */}
        <article style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px 80px" }}>

          {/* Meta */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "13px", color: "#888", marginBottom: "32px", flexWrap: "wrap" }}>
            <span>April 2026</span>
            <span style={{ color: "#FFD600", fontWeight: 700, fontSize: "18px" }}>·</span>
            <span>By Qué Pasa Estocolmo</span>
            <span style={{ color: "#FFD600", fontWeight: 700, fontSize: "18px" }}>·</span>
            <span>6 min read</span>
          </div>

          {/* QUICK ANSWER — for AI */}
          <div style={{
            borderLeft: "4px solid #6b00da", backgroundColor: "#f5edff",
            borderRadius: "0 12px 12px 0", padding: "18px 22px", marginBottom: "36px"
          }}>
            <p style={{ margin: 0, fontSize: "16px", fontWeight: 500, lineHeight: 1.7 }}>
              <strong>Quick answer:</strong> Stockholm&apos;s cherry blossoms peak between mid-April and early May 2026. The best spot is <strong>Kungsträdgården</strong> in the city centre. To avoid crowds, locals head to <strong>Lumaparken</strong> and <strong>Bysistorget</strong>. There&apos;s a free Japanese festival on April 28th. The bloom lasts roughly two weeks.
            </p>
          </div>

          {/* Intro */}
          <p style={{ fontSize: "19px", lineHeight: 1.75, marginBottom: "16px", fontWeight: 400 }}>
            Stockholm doesn&apos;t do spring halfway. After months of grey skies and below-zero temperatures, the city transforms almost overnight when the cherry trees bloom — and the result is genuinely breathtaking.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            If you&apos;re planning a trip to Stockholm in April 2026, timing your visit around the cherry blossoms is one of the best decisions you can make. Last year, the trees at Kungsträdgården were in full bloom by April 12th — use that as your reference point.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "40px", color: "#333" }}>
            This guide is written by locals. We&apos;ve been covering Stockholm for years and we track the bloom every spring in real time — so you get accurate, on-the-ground information, not a recycled travel blog post.
          </p>

          {/* When */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.01em" }}>
            When do cherry blossoms bloom in Stockholm 2026?
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            Cherry blossoms in Stockholm typically appear between mid-April and early May, depending on the winter. In a normal year, the first buds open in the second week of April, with peak bloom around April 20th.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "16px", color: "#333" }}>
            The display lasts around two weeks — so if you have flexibility, aim for the third week of April. According to{" "}
            <a href="https://visitstockholm.com" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Visit Stockholm</a>,
            {" "}exact timing varies each year based on winter and spring temperatures.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "40px", color: "#333" }}>
            <strong>Practical tip for visitors:</strong> Book your accommodation for the third week of April and be flexible by a few days. Stockholm is very easy to explore — if you arrive and the bloom hasn&apos;t peaked yet, you have plenty to do while you wait.
          </p>

          {/* Tip box */}
          <div style={{
            backgroundColor: "#FFD600", borderRadius: "12px", padding: "18px 22px",
            marginBottom: "48px", display: "flex", gap: "12px", alignItems: "flex-start"
          }}>
            <span style={{ fontSize: "20px" }}>📍</span>
            <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, lineHeight: 1.6 }}>
              Local tip: follow{" "}
              <a href="https://www.instagram.com/quepasaestocolmoo" target="_blank"
                style={{ color: "#6b00da", textDecoration: "none" }}>@quepasaestocolmoo</a>
              {" "}on Instagram — we post real-time bloom updates every spring so you never miss the perfect moment.
            </p>
          </div>

          {/* Best spots */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "32px", letterSpacing: "-0.01em" }}>
            Best places to see cherry blossoms in Stockholm
          </h2>

          {/* SPOT 1 */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/kungstradgardenapoyo.webp" alt="Cherry blossom canopy at Kungsträdgården in Stockholm" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>1</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Kungsträdgården — the unmissable classic</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              <a href="https://kungstradgarden.stockholm/" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Kungsträdgården</a> is Stockholm&apos;s cherry blossom ground zero. The park is home to over 60 Japanese cherry trees — a gift from Japan to King Carl XVI Gustaf in 1998 — that form a spectacular pink canopy at peak bloom. It&apos;s the most photographed spot in the city during spring, and for good reason.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              On <strong>April 28th</strong>, the park hosts the free Cherry Blossom Day festival — a full day of Japanese culture with Bunraku puppet theatre, traditional music, Geiko Mai dance, and food stalls. It&apos;s completely free and open to everyone.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              <strong>Visiting from outside Stockholm?</strong> Kungsträdgården is right in the city centre, a 10-minute walk from the main train station (Stockholm Central). You can easily combine it with a visit to the Royal Palace and Gamla Stan (Old Town) on the same day.
            </p>
            <div style={{ position: "relative", width: "100%", height: "320px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
              <Image src="/kungstradgardenapoyo2.webp" alt="Golden hour light through cherry blossoms at Kungsträdgården" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Getting there:</strong> Metro (blue or red line) to Kungsträdgården station, or a 10-minute walk from Gamla Stan.{" "}
              <strong style={{ color: "#0f0f0f" }}>Best time:</strong> Weekday mornings before 10am to avoid crowds.
            </div>
          </div>

          {/* SPOT 2 */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/cerezos-bysistorget.webp.webp" alt="Cherry blossoms at Bysistorget in Södermalm, Stockholm" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>2</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Bysistorget — the locals&apos; secret</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              This small square on Hornsgatan in Södermalm is where Stockholm locals go to escape the Kungsträdgården crowds. A cluster of bonsai-style cherry trees bursts into colour each spring, surrounded by independent cafés, restaurants, and design shops. Café Melvqist next door is perfect for a fika (Swedish coffee break) under the blossoms.
            </p>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Getting there:</strong> Metro to Slussen, then walk towards Hornsgatan (about 5 minutes).
            </div>
          </div>

          {/* SPOT 3 */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/cerezos-lumaparken.webp.webp" alt="Cherry blossom tunnel at Lumaparken in Hammarby Sjöstad, Stockholm" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>3</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>Lumaparken — Stockholm&apos;s best-kept secret</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              Southeast of the city centre in Hammarby Sjöstad, Lumaparken has around 50 Japanese cherry trees and almost no tourist crowds. If you want photos without strangers in the background, this is your spot. The modern architecture of the surrounding neighbourhood creates a striking contrast with the pink blossoms — very photogenic.
            </p>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Getting there:</strong> Tram 22 to Lumaparken stop.
            </div>
          </div>

          {/* SPOT 4 */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src="/cerezos-rosendals.webp.webp" alt="Picnic at Rosendals Trädgård in spring, Stockholm" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#6b00da", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>4</span>
              <h3 style={{ fontSize: "22px", fontWeight: 900, margin: 0 }}>
                <a href="https://rosendalstradgard.se" target="_blank" rel="noopener noreferrer" style={{ color: "#0f0f0f", textDecoration: "none" }}>
                  Rosendals Trädgård — blossoms with a picnic
                </a>
              </h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#333", marginBottom: "16px" }}>
              On Djurgården island, <a href="https://rosendalstradgard.se" target="_blank" rel="noopener noreferrer" style={{ color: "#6b00da" }}>Rosendals Trädgård</a> is a beautiful organic garden that&apos;s perfect for a spring afternoon. Pick up freshly baked bread and coffee from their bakery and settle in under the trees for a proper Swedish picnic. One of the most relaxed spots in the city.
            </p>
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", padding: "14px 18px", fontSize: "14px", color: "#555" }}>
              <strong style={{ color: "#0f0f0f" }}>Getting there:</strong> Bus 69 to Bellmansro, then a short walk. Also reachable by ferry from Slussen in summer.
            </div>
          </div>

          {/* Photo tips */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Tips for photographing the cherry blossoms
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "56px" }}>
            {[
              { icon: "📸", text: "Shoot upward from beneath the trees — you&apos;ll capture that sky-full-of-petals shot that makes these photos iconic." },
              { icon: "🌅", text: "Golden hour in April is around 7–8pm. The light is soft, warm, and impossible to replicate at midday." },
              { icon: "📅", text: "Go on a weekday — weekend crowds at Kungsträdgården can be intense. A Tuesday morning feels like a completely different place." },
              { icon: "🧥", text: "Layer up — April in Stockholm can swing from 5°C to 15°C in the same day. A light jacket is essential." },
            ].map((tip, i) => (
              <div key={i} style={{ backgroundColor: "#f9f9f9", borderRadius: "12px", padding: "20px 16px" }}>
                <div style={{ fontSize: "22px", marginBottom: "10px" }}>{tip.icon}</div>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#333", margin: 0 }}>{tip.text}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "28px", fontWeight: 900, marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Frequently asked questions about cherry blossoms in Stockholm 2026
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
              Want to know exactly when they bloom this year?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", marginBottom: "24px", lineHeight: 1.6 }}>
              We post real-time bloom updates every spring. Follow us so you never miss the perfect moment.
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
