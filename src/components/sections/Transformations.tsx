"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
    { id: "01", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop", label: "Physique Alpha" },
    { id: "02", img: "https://images.unsplash.com/photo-1581009146145-b5ef050e7b21?q=80&w=800&auto=format&fit=crop", label: "Strength Delta" },
    { id: "03", img: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=800&auto=format&fit=crop", label: "Mobility Sigma" },
    { id: "04", img: "https://images.unsplash.com/photo-1571019614540-3e969bd39a9e?q=80&w=800&auto=format&fit=crop", label: "Elite Omega" },
    { id: "05", img: "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=800&auto=format&fit=crop", label: "Hypertrophy Gamma" },
    { id: "06", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop", label: "Performance Zeta" },
];

export default function Transformations() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = document.querySelectorAll<HTMLElement>(".tf-card");
            cards.forEach((card, i) => {
                gsap.set(card, { opacity: 0, y: 40 });
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 1.1,
                    ease: "expo.out",
                    delay: (i % 3) * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 88%",
                        toggleActions: "play none none reverse",
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="section-py"
            style={{ position: "relative", zIndex: 10, background: "#000" }}
        >
            <div className="container">
                {/* Header */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        marginBottom: 64,
                        gap: 32,
                        flexWrap: "wrap",
                    }}
                >
                    <div>
                        <span className="section-label">Archive</span>
                        <h2>Proven Records.</h2>
                    </div>
                    <p className="text-bright" style={{ maxWidth: 380, textAlign: "right", fontSize: 17, lineHeight: 1.6 }}>
                        Visual evidence of <span className="text-hi">extreme dedication</span>. We architect failure out of the system.
                    </p>
                </div>

                {/* Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 4,
                    }}
                    className="tf-grid"
                >
                    {ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className="tf-card"
                            style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", background: "#111" }}
                        >
                            <img
                                src={item.img}
                                alt={item.label}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    filter: "grayscale(100%)",
                                    transition: "transform 0.9s ease, opacity 0.6s ease, filter 0.6s ease",
                                }}
                                className="tf-img"
                            />
                            <div
                                className="tf-overlay"
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end",
                                    padding: 32,
                                    opacity: 0,
                                    transition: "opacity 0.5s ease",
                                }}
                            >
                                <span style={{ fontSize: 9, letterSpacing: "0.4em", color: "#aaa", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>Result {item.id}</span>
                                <p style={{ fontSize: 18, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
