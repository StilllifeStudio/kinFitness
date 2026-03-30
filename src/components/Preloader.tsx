"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
    onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
    const [isLoading, setIsLoading] = useState(true);
    const preloaderRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);

    const onCompleteRef = useRef(onComplete);

    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate logo in
            gsap.fromTo(
                logoRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1.2, ease: "expo.out", delay: 0.2 }
            );

            // Animate counter and progress bar
            const counter = { value: 0 };
            gsap.to(counter, {
                value: 100,
                duration: 2.8,
                ease: "power2.inOut",
                delay: 0.4,
                onUpdate: () => {
                    if (counterRef.current) {
                        counterRef.current.textContent = Math.round(counter.value).toString();
                    }
                },
            });

            gsap.fromTo(
                lineRef.current,
                { scaleX: 0, transformOrigin: "left center" },
                { scaleX: 1, duration: 2.8, ease: "power2.inOut", delay: 0.4 }
            );

            // Exit animation
            gsap.to(logoRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.6,
                ease: "power3.in",
                delay: 3.4,
            });

            gsap.to(preloaderRef.current, {
                yPercent: -100,
                duration: 1.0,
                ease: "power4.inOut",
                delay: 3.8,
                onComplete: () => {
                    setIsLoading(false);
                    onCompleteRef.current?.();
                },
            });
        });

        return () => ctx.revert();
    }, []);

    if (!isLoading) return null;

    return (
        <div
            ref={preloaderRef}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 99999,
                background: "#000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 48,
            }}
        >
            {/* Logo */}
            <div
                ref={logoRef}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 24,
                    opacity: 0,
                }}
            >
                <div
                    style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 800,
                        fontSize: "clamp(48px, 6vw, 80px)",
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                        color: "#fff",
                    }}
                >
                    KIN.
                </div>

                {/* Counter */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 4,
                    }}
                >
                    <span
                        ref={counterRef}
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 800,
                            fontSize: 14,
                            letterSpacing: "0.1em",
                            color: "var(--clr-muted)",
                            opacity: 0.4,
                            fontVariantNumeric: "tabular-nums",
                        }}
                    >
                        0
                    </span>
                    <span
                        style={{
                            fontSize: 9,
                            fontWeight: 700,
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            color: "var(--clr-muted)",
                            opacity: 0.25,
                        }}
                    >
                        %
                    </span>
                </div>

                {/* Progress bar */}
                <div
                    style={{
                        width: 120,
                        height: 1,
                        background: "rgba(255,255,255,0.08)",
                        overflow: "hidden",
                    }}
                >
                    <div
                        ref={lineRef}
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "rgba(255,255,255,0.5)",
                            transform: "scaleX(0)",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
