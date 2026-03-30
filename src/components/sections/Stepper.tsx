"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
    {
        number: "01",
        title: "Assessment & Goal Setting",
        description: (
            <>
                Every journey begins with a <span className="text-hi">deep dive into your current state</span>.
                We analyze your mobility, strength baselines, and metabolic profile to define{" "}
                <span className="text-hi">clear, measurable targets</span>.
            </>
        ),
    },
    {
        number: "02",
        title: "Structured Training & Adaptation",
        description: (
            <>
                <span className="text-hi">Precision programming</span> that evolves with you.
                No plateau is final — we adjust intensity and volume based on{" "}
                <span className="text-hi">real performance data</span> to ensure continuous progress.
            </>
        ),
    },
    {
        number: "03",
        title: "Tracking, Feedback & Results",
        description: (
            <>
                The final phase is the result. We monitor every variable, providing feedback that{" "}
                <span className="text-hi">closes the loop</span> between action and outcome.{" "}
                <span className="text-hi">Data-driven excellence</span>.
            </>
        ),
    },
];

export default function Stepper() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate section header
            const header = sectionRef.current?.querySelector<HTMLElement>(".stepper-header");
            if (header) {
                gsap.set(header, { opacity: 0, y: 40 });
                gsap.to(header, {
                    opacity: 1, y: 0, duration: 1.2, ease: "expo.out",
                    scrollTrigger: { trigger: header, start: "top 85%" },
                });
            }

            // Animate each step row
            const items = document.querySelectorAll<HTMLElement>(".step-row");
            items.forEach((item) => {
                const rule = item.querySelector<HTMLElement>(".step-rule");
                const num = item.querySelector<HTMLElement>(".step-num");
                const title = item.querySelector<HTMLElement>(".step-title");
                const desc = item.querySelector<HTMLElement>(".step-desc");

                gsap.set(rule, { scaleX: 0, transformOrigin: "left center" });
                gsap.set(num, { opacity: 0, y: 16 });
                gsap.set(title, { opacity: 0, x: -24 });
                gsap.set(desc, { opacity: 0, y: 24 });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                });

                tl.to(rule, { scaleX: 1, duration: 1.2, ease: "power4.inOut" })
                    .to(num, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" }, "-=0.9")
                    .to(title, { opacity: 1, x: 0, duration: 1.0, ease: "expo.out" }, "-=0.8")
                    .to(desc, { opacity: 1, y: 0, duration: 1.0, ease: "expo.out" }, "-=0.7");
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="section-py"
            style={{
                position: "relative",
                zIndex: 10,
                background: "#000",
            }}
        >
            <div className="container">
                {/* Section header */}
                <div className="stepper-header" style={{ marginBottom: "clamp(60px, 10vw, 120px)" }}>
                    <span className="section-label">Process</span>
                    <h2>The Methodology.</h2>
                </div>

                {/* Steps */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {STAGES.map((stage, i) => (
                        <div
                            key={stage.number}
                            className="step-row"
                            style={{
                                borderTop: i === 0 ? "1px solid rgba(255,255,255,0.15)" : "1px solid var(--clr-divider)",
                                paddingTop: "clamp(48px, 8vw, 72px)",
                                paddingBottom: "clamp(48px, 8vw, 72px)",
                            }}
                        >
                            {/* Animated highlight rule */}
                            <div
                                className="step-rule"
                                style={{
                                    height: 1,
                                    background: "rgba(255,255,255,0.4)",
                                    marginTop: "clamp(-73px, -8vw, -49px)",
                                    marginBottom: "clamp(48px, 8vw, 72px)",
                                    width: "100%",
                                }}
                            />

                            <div className="step-grid">
                                {/* Left: number + title */}
                                <div className="step-sticky">
                                    <div
                                        className="step-num"
                                        style={{
                                            fontFamily: "var(--font-heading)",
                                            fontSize: "clamp(40px, 8vw, 72px)",
                                            fontWeight: 800,
                                            letterSpacing: "-0.04em",
                                            lineHeight: 1,
                                            color: "#fff",
                                            opacity: 0.08,
                                            marginBottom: 16,
                                        }}
                                    >
                                        {stage.number}
                                    </div>
                                    <h3 className="step-title">{stage.title}</h3>
                                </div>

                                {/* Right: description */}
                                <p className="step-desc text-bright" style={{ paddingTop: 8, maxWidth: 520 }}>
                                    {stage.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Bottom border */}
                    <div style={{ height: 1, background: "var(--clr-divider)" }} />
                </div>
            </div>
        </section>
    );
}
