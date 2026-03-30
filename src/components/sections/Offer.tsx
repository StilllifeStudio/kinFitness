"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TIERS = [
    {
        name: "Essential",
        price: "$199",
        per: "/ month",
        features: ["Custom Training Plan", "Monthly Assessment", "Email Support", "Mobile App"],
        highlight: false,
    },
    {
        name: "Elite",
        price: "$499",
        per: "/ month",
        features: ["Bespoke Programming", "Weekly 1:1 Coaching", "Nutritional Strategy", "Priority Support", "Biometrics"],
        highlight: true,
    },
    {
        name: "Signature",
        price: "$899",
        per: "/ month",
        features: ["Full Concierge", "Daily Accountability", "Recovery Management", "In-Person Sessions", "Private Channel"],
        highlight: false,
    },
];

export default function Offer() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = document.querySelectorAll<HTMLElement>(".offer-card");
            gsap.set(cards, { opacity: 0, y: 50 });
            gsap.to(cards, {
                opacity: 1,
                y: 0,
                duration: 1.1,
                stagger: 0.15,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="section-py"
            style={{ position: "relative", zIndex: 10, background: "#000", borderTop: "1px solid var(--clr-divider)" }}
        >
            <div className="container">
                {/* Header */}
                <div style={{ maxWidth: 680, marginBottom: 72 }}>
                    <span className="section-label">Investment</span>
                    <h2 style={{ marginBottom: 24 }}>Access the Legacy.</h2>
                    <p className="text-bright">
                        Choose the <span className="text-hi">level of immersion</span> that matches your ambition. Selection is limited to ensure
                        each client receives <span className="text-hi">uncompromised attention</span>.
                    </p>
                </div>

                {/* Cards */}
                <div
                    className="offer-grid"
                    style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "stretch" }}
                >
                    {TIERS.map((tier) => (
                        <div
                            key={tier.name}
                            className={`offer-card${tier.highlight ? " offer-card--hi" : ""}`}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 0,
                                border: `1px solid ${tier.highlight ? "rgba(255,255,255,0.5)" : "var(--clr-divider)"}`,
                                padding: "40px 36px 36px",
                                background: tier.highlight ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.01)",
                                transition: "transform 0.4s ease, background 0.4s ease",
                            }}
                        >
                            {/* Tier label */}
                            <span
                                style={{
                                    fontSize: 9,
                                    fontWeight: 700,
                                    letterSpacing: "0.4em",
                                    textTransform: "uppercase",
                                    color: "var(--clr-muted)",
                                    opacity: 0.5,
                                    marginBottom: 24,
                                    display: "block",
                                }}
                            >
                                {tier.name}
                            </span>

                            {/* Price */}
                            <div style={{ marginBottom: 32, lineHeight: 1 }}>
                                <span
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "clamp(44px, 4.5vw, 60px)",
                                        fontWeight: 800,
                                        letterSpacing: "-0.04em",
                                        color: "#fff",
                                    }}
                                >
                                    {tier.price}
                                </span>
                                <span style={{ fontSize: 13, color: "var(--clr-muted)", marginLeft: 6 }}>{tier.per}</span>
                            </div>

                            {/* Divider */}
                            <div className="line" style={{ marginBottom: 32 }} />

                            {/* Features */}
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, flex: 1, marginBottom: 40 }}>
                                {tier.features.map((f) => (
                                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                        <span
                                            style={{
                                                width: 4,
                                                height: 4,
                                                borderRadius: "50%",
                                                background: "var(--clr-muted)",
                                                opacity: 0.4,
                                                flexShrink: 0,
                                            }}
                                        />
                                        <span
                                            style={{
                                                fontSize: 12,
                                                fontWeight: 700,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.15em",
                                                color: "var(--clr-muted)",
                                                opacity: 0.65,
                                            }}
                                        >
                                            {f}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className="btn-outline"
                                style={{
                                    width: "100%",
                                    textAlign: "center",
                                    ...(tier.highlight
                                        ? { background: "#fff", color: "#000", borderColor: "#fff" }
                                        : {}),
                                }}
                            >
                                <span>Join Program</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
