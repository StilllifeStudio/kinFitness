"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroProps {
    isReady?: boolean;
}

export default function Hero({ isReady = false }: HeroProps) {
    const line1Ref = useRef<HTMLSpanElement>(null);
    const line2Ref = useRef<HTMLSpanElement>(null);
    const bodyRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        // Hide everything on mount
        gsap.set([line1Ref.current, line2Ref.current], { yPercent: 110 });
        gsap.set([bodyRef.current, ctaRef.current, scrollRef.current], { opacity: 0, y: 24 });
    }, []);

    useEffect(() => {
        if (!isReady || hasAnimated.current) return;
        hasAnimated.current = true;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.2, defaults: { ease: "expo.out" } });

            tl.to(line1Ref.current, { yPercent: 0, duration: 1.6 })
                .to(line2Ref.current, { yPercent: 0, duration: 1.6 }, "-=1.3")
                .to(bodyRef.current, { opacity: 1, y: 0, duration: 1.2 }, "-=0.8")
                .to(ctaRef.current, { opacity: 1, y: 0, duration: 1.0 }, "-=0.6")
                .to(scrollRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4");
        });

        return () => ctx.revert();
    }, [isReady]);

    return (
        <section
            style={{
                height: "100svh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "0 var(--container-px)",
                position: "relative",
                zIndex: 10,
            }}
        >
            <div style={{ maxWidth: 900, width: "100%" }}>
                {/* H1 — bigger, bolder, tighter leading */}
                <h1 style={{ marginBottom: "clamp(40px, 8vw, 72px)" }}>
                    <div style={{ overflow: "hidden", display: "block" }}>
                        <span ref={line1Ref} style={{ display: "block" }}>
                            Build Strength.
                        </span>
                    </div>
                    <div style={{ overflow: "hidden", display: "block" }}>
                        <span
                            ref={line2Ref}
                            style={{ display: "block", color: "var(--clr-muted)" }}
                        >
                            See Real Results.
                        </span>
                    </div>
                </h1>

                <p
                    ref={bodyRef}
                    className="text-bright"
                    style={{
                        maxWidth: 440,
                        margin: "0 auto 56px",
                        fontSize: "clamp(14px, 1vw, 17px)",
                        lineHeight: 1.8,
                    }}
                >
                    <span className="text-hi">Performance-driven coaching</span> for those who demand
                    excellence. No fluff — only <span className="text-hi">data-backed transformation</span>.
                </p>

                <div ref={ctaRef} style={{ display: "flex", justifyContent: "center" }}>
                    <button className="btn-outline">
                        <span>Begin Legacy</span>
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                ref={scrollRef}
                style={{
                    position: "absolute",
                    bottom: 48,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12,
                }}
            >
                <span
                    style={{
                        fontSize: 8,
                        fontWeight: 700,
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        color: "var(--clr-muted)",
                        opacity: 0.35,
                    }}
                >
                    Scroll
                </span>
                <div
                    style={{
                        width: 1,
                        height: 40,
                        background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
                    }}
                />
            </div>
        </section>
    );
}
