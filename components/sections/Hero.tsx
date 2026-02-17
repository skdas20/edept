"use client";

import React from 'react';
import Link from 'next/link';

const Hero = () => {
    const [scrollY, setScrollY] = React.useState(0);
    const [cursorOffset, setCursorOffset] = React.useState({ x: 0, y: 0 });
    const [reducedMotion, setReducedMotion] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handlePreference = () => setReducedMotion(mediaQuery.matches);
        handlePreference();

        if (typeof mediaQuery.addEventListener === 'function') {
            mediaQuery.addEventListener('change', handlePreference);
            return () => mediaQuery.removeEventListener('change', handlePreference);
        }

        mediaQuery.addListener(handlePreference);
        return () => mediaQuery.removeListener(handlePreference);
    }, []);

    React.useEffect(() => {
        if (reducedMotion) {
            setCursorOffset({ x: 0, y: 0 });
            return;
        }

        let rafId = 0;
        const handleMouseMove = (event: MouseEvent) => {
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
            rafId = requestAnimationFrame(() => {
                const x = (event.clientX / window.innerWidth - 0.5) * 8;
                const y = (event.clientY / window.innerHeight - 0.5) * 8;
                setCursorOffset({ x, y });
            });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [reducedMotion]);

    return (
        <section className="relative -mt-24 min-h-[calc(100vh-0.5rem)] w-full overflow-hidden bg-primary-dark pb-8 pt-24 md:pt-28">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-600" />
            <div
                className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10"
                style={{ transform: `translate3d(${cursorOffset.x * 0.28}px, ${cursorOffset.y * 0.28}px, 0)` }}
            />
            <div
                className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-accent/25 blur-[110px]"
                style={{
                    transform: `translate3d(${cursorOffset.x * 0.2}px, ${scrollY * 0.12 + cursorOffset.y * 0.2}px, 0)`,
                }}
            />
            <div
                className="absolute -right-24 bottom-6 h-72 w-72 rounded-full bg-white/12 blur-[120px]"
                style={{
                    transform: `translate3d(${cursorOffset.x * -0.18}px, ${-scrollY * 0.08 + cursorOffset.y * -0.2}px, 0)`,
                }}
            />

            <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
                    <div className="text-white">
                        <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
                            Institute of Engineering & Management
                        </span>
                        <h1 className="mt-5 text-4xl font-bold leading-tight font-heading md:text-5xl lg:text-6xl">
                            Electronics & Communication Engineering
                            <span className="block text-accent-light">Engineered for Impact</span>
                        </h1>
                        <p className="mt-5 max-w-2xl text-base text-primary-50 md:text-lg">
                            A rigorous academic ecosystem that blends research, innovation, and industry exposure to prepare future-ready engineers.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-4">
                            <Link
                                href="/academics"
                                className="rounded-xl bg-gradient-to-r from-accent to-accent-600 px-7 py-3 font-semibold text-primary-dark shadow-lg transition-transform hover:-translate-y-0.5"
                            >
                                Explore Academics
                            </Link>
                            <Link
                                href="/research"
                                className="rounded-xl border border-white/40 bg-white/10 px-7 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/18"
                            >
                                View Research
                            </Link>
                        </div>

                        <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 text-sm sm:grid-cols-3">
                            {[
                                { label: 'Established', value: '1996' },
                                { label: 'NBA Status', value: 'Accredited' },
                                { label: 'Programs', value: 'UG + PG' }
                            ].map((item) => (
                                <div key={item.label} className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
                                    <div className="text-xs uppercase tracking-wide text-white/75">{item.label}</div>
                                    <div className="mt-1 font-heading text-lg font-semibold">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl md:p-7">
                            <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-accent/25 blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/12 blur-3xl" />

                            <div className="relative z-10">
                                <p className="text-xs uppercase tracking-[0.14em] text-white/75">Department Profile</p>
                                <h3 className="mt-1 text-xl font-heading font-bold md:text-2xl">Academic Distinctions</h3>
                                <p className="mt-3 text-sm text-white/80">
                                    A concise snapshot of the department&apos;s standing and core academic identity.
                                </p>

                                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                    {[
                                        { label: "Established", value: "1996" },
                                        { label: "Accreditation", value: "NBA Accredited" },
                                        { label: "Programs", value: "UG + PG" },
                                        { label: "Institution", value: "IEM Kolkata" },
                                        { label: "Curriculum", value: "Outcome-Based" },
                                        { label: "Engagement", value: "Workshops & FDPs" },
                                    ].map((item) => (
                                        <div key={item.label} className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
                                            <p className="text-[11px] uppercase tracking-wide text-white/70">{item.label}</p>
                                            <p className="mt-1 text-sm font-semibold text-accent-light">{item.value}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {["Research Initiatives", "Student Chapters", "Industry Exposure"].map((item) => (
                                        <span
                                            key={item}
                                            className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 hidden justify-end md:flex">
                            <div className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-black/20 px-3 py-2 text-sm font-semibold text-white">
                                <span className="inline-block h-2 w-2 rounded-full bg-accent-light" />
                                Flagship Milestone
                                <span className="text-accent-light">NBA Accredited</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
