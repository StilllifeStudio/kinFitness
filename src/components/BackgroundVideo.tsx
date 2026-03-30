"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!videoRef.current) return;
        gsap.to(videoRef.current, {
            y: "8%",
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5,
            },
        });
    }, []);

    return (
        <div className="video-bg" aria-hidden="true">
            <video ref={videoRef} autoPlay muted loop playsInline>
                <source
                    src="/hero-bg.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="video-bg__overlay" />
        </div>
    );
}
