"use client";

const NAV_LINKS = ["Methodology", "Results", "Investment", "Legacy"];
const SOCIAL = ["Instagram", "Twitter", "LinkedIn"];

export default function Footer() {
    return (
        <footer
            style={{
                position: "relative",
                zIndex: 10,
                background: "#000",
                borderTop: "1px solid var(--clr-divider)",
                paddingTop: "var(--section-py-desktop)",
                paddingBottom: 48,
            }}
            className="footer-section"
        >
            <div className="container">
                {/* Top row: Brand + Nav + Contact */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto auto",
                        gap: "48px 80px",
                        alignItems: "start",
                        marginBottom: 96,
                    }}
                    className="footer-grid"
                >
                    {/* Brand */}
                    <div>
                        <div
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontWeight: 800,
                                fontSize: "clamp(48px, 5vw, 72px)",
                                letterSpacing: "-0.04em",
                                lineHeight: 1,
                                color: "#fff",
                                marginBottom: 24,
                            }}
                        >
                            KIN.
                        </div>
                        <p
                            style={{
                                maxWidth: 320,
                                fontSize: 15,
                                lineHeight: 1.7,
                                color: "var(--clr-muted)",
                                opacity: 0.6,
                                marginBottom: 32,
                            }}
                        >
                            A private collective dedicated to the pursuit of physical
                            architecture and elite performance.
                        </p>
                        <div style={{ display: "flex", gap: 32 }}>
                            {SOCIAL.map((s) => (
                                <a
                                    key={s}
                                    href="#"
                                    style={{
                                        fontSize: 9,
                                        fontWeight: 700,
                                        letterSpacing: "0.35em",
                                        textTransform: "uppercase",
                                        color: "var(--clr-muted)",
                                        textDecoration: "none",
                                        opacity: 0.5,
                                        transition: "opacity 0.3s ease, color 0.3s ease",
                                    }}
                                    className="footer-link"
                                >
                                    {s}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav links */}
                    <div>
                        <div
                            style={{
                                fontSize: 9,
                                fontWeight: 700,
                                letterSpacing: "0.4em",
                                textTransform: "uppercase",
                                color: "var(--clr-muted)",
                                opacity: 0.4,
                                marginBottom: 28,
                            }}
                        >
                            Navigate
                        </div>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
                            {NAV_LINKS.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        style={{
                                            fontSize: 12,
                                            fontWeight: 700,
                                            letterSpacing: "0.15em",
                                            textTransform: "uppercase",
                                            color: "var(--clr-muted)",
                                            textDecoration: "none",
                                            opacity: 0.6,
                                            transition: "opacity 0.3s ease",
                                            display: "block",
                                        }}
                                        className="footer-link"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <div
                            style={{
                                fontSize: 9,
                                fontWeight: 700,
                                letterSpacing: "0.4em",
                                textTransform: "uppercase",
                                color: "var(--clr-muted)",
                                opacity: 0.4,
                                marginBottom: 28,
                            }}
                        >
                            Contact
                        </div>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
                            {["inquiries@kin.coach", "Toronto, CA"].map((item) => (
                                <li
                                    key={item}
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 700,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        color: "var(--clr-muted)",
                                        opacity: 0.5,
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        borderTop: "1px solid var(--clr-divider)",
                        paddingTop: 24,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 16,
                        flexWrap: "wrap",
                    }}
                >
                    <span
                        style={{
                            fontSize: 9,
                            fontWeight: 700,
                            letterSpacing: "0.35em",
                            textTransform: "uppercase",
                            color: "var(--clr-muted)",
                            opacity: 0.25,
                        }}
                    >
                        © 2026 KIN Performance Inc. All rights reserved.
                    </span>
                    <div style={{ display: "flex", gap: 24 }}>
                        {["Privacy", "Terms"].map((l) => (
                            <a
                                key={l}
                                href="#"
                                style={{
                                    fontSize: 9,
                                    fontWeight: 700,
                                    letterSpacing: "0.35em",
                                    textTransform: "uppercase",
                                    color: "var(--clr-muted)",
                                    opacity: 0.25,
                                    textDecoration: "none",
                                    transition: "opacity 0.3s ease",
                                }}
                                className="footer-link"
                            >
                                {l}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
