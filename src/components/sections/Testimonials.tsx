"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QUOTES = [
    {
        text: "The level of precision in this coaching is unmatched. It's not just a workout — it's an architectural rebuild of the human frame.",
        author: "Michael V.",
        role: "CEO & Founder",
    },
    {
        text: "Results I previously thought were impossible in my 40s. The data-driven approach changed everything.",
        author: "Sarah L.",
        role: "Creative Director",
    },
    {
        text: "A masterclass in human performance. The methodology is as rigorous as any professional athlete's protocol.",
        author: "James T.",
        role: "Venture Capitalist",
    },
    {
        text: "Beyond aesthetics, the focus on longevity and functional architecture is what sets KIN apart from any other program.",
        author: "Elena R.",
        role: "Strategy Consultant",
    }
];

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!horizontalRef.current || !triggerRef.current) return;

            const totalWidth = horizontalRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;
            const amountToScroll = totalWidth - viewportWidth;

            gsap.to(horizontalRef.current, {
                x: -amountToScroll,
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: () => `+=${totalWidth}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            // Subtle opacity animation for each quote
            const quotes = horizontalRef.current.querySelectorAll(".quote-card");
            quotes.forEach((quote) => {
                gsap.fromTo(quote,
                    { opacity: 0.3, scale: 0.95 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        scrollTrigger: {
                            trigger: quote,
                            containerAnimation: gsap.getById("horizontal"), // Use the timeline or this syntax
                            start: "left 80%",
                            end: "center center",
                            scrub: true,
                            // Since we are inside a single tween, we can't easily use containerAnimation 
                            // with a straight to() tween here. Instead, let's just use the scrub of the main trigger 
                            // or keep it simple for now.
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="overflow-hidden bg-black border-y border-white/5 relative z-10"
        >
            <div ref={triggerRef} className="h-screen flex items-center">
                <div className="absolute top-24 left-10 md:left-24 z-20">
                    <span className="section-label">Client Verdicts</span>
                    <h2 className="text-secondary opacity-30">The Architecture of Success.</h2>
                </div>

                <div
                    ref={horizontalRef}
                    className="flex flex-nowrap items-center px-[10vw] gap-[10vw]"
                >
                    {QUOTES.map((q, i) => (
                        <div
                            key={i}
                            className="quote-card flex-shrink-0 w-[85vw] md:w-[700px] flex flex-col items-center text-center p-12 md:p-20 border border-white/10 bg-white/[0.02] backdrop-blur-sm"
                        >
                            <div
                                style={{
                                    fontFamily: "Georgia, serif",
                                    fontSize: 64,
                                    lineHeight: 1,
                                    color: "var(--clr-muted)",
                                    opacity: 0.2,
                                    marginBottom: 16,
                                    userSelect: "none",
                                }}
                            >
                                &ldquo;
                            </div>

                            <blockquote
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 800,
                                    fontSize: "clamp(22px, 2.8vw, 32px)",
                                    lineHeight: 1.2,
                                    letterSpacing: "-0.03em",
                                    textTransform: "uppercase",
                                    color: "#fff",
                                    marginBottom: 40,
                                    maxWidth: "500px"
                                }}
                            >
                                {q.text}
                            </blockquote>

                            <div className="flex flex-col items-center">
                                <div className="line" style={{ width: 40, marginInline: "auto", marginBottom: 20 }} />
                                <p
                                    style={{
                                        fontSize: 11,
                                        fontWeight: 700,
                                        letterSpacing: "0.3em",
                                        textTransform: "uppercase",
                                        color: "#fff",
                                        marginBottom: 6,
                                    }}
                                >
                                    {q.author}
                                </p>
                                <p
                                    style={{
                                        fontSize: 10,
                                        letterSpacing: "0.3em",
                                        textTransform: "uppercase",
                                        color: "var(--clr-muted)",
                                        opacity: 0.45,
                                        fontWeight: 700,
                                    }}
                                >
                                    {q.role}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Spacer to allow the last card to be fully visible and centered before end */}
                    <div className="flex-shrink-0 w-[10vw]" />
                </div>
            </div>
        </section>
    );
}
