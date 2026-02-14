"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    const [scrollY, setScrollY] = React.useState(0);
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20, // max 20px shift
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark -mt-20 pt-32 perspective-1000">
            {/* Background with Parallax Effect */}
            <div
                className="absolute inset-0 z-0 will-change-transform"
                style={{
                    transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
                }}
            >
                {/* Base Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-primary-dark opacity-90 mix-blend-multiply" />

                {/* Circuit Pattern with Mouse Parallax */}
                <div
                    className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10 transition-transform duration-100 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)`
                    }}
                />

                {/* Radial Glow Overlay for Depth */}
                <div className="absolute inset-0 bg-radial-gradient from-accent/5 to-transparent opacity-60 pointer-events-none mix-blend-screen" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-white space-y-6 animate-fade-in-up">

                    <h1 className="text-5xl md:text-7xl font-bold leading-snug font-heading bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300 pb-2">
                        Inspiring <span className="text-accent underline decoration-4 decoration-accent/30 underline-offset-8">Excellence</span> <br /> in Engineering
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
                        Welcome to the Department of Electronics & Communication Engineering at IEM Kolkata. Where innovation meets education to shape the leaders of tomorrow.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            href="/academics"
                            className="px-8 py-4 bg-accent hover:bg-accent-600 text-primary-dark font-bold rounded-xl shadow-glow-accent transition-all transform hover:-translate-y-1 hover:shadow-2xl flex items-center"
                        >
                            Explore Programs
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                        <Link
                            href="/about"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-xl transition-all transform hover:-translate-y-1 hover:border-white/40"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Hero Visual/Illustration */}
                {/* Hero Visual/Illustration */}
                <div className="hidden md:block relative animate-float delay-700">
                    <div className="relative z-10 grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center font-bold text-primary-dark text-xl mb-4">
                                A+
                            </div>
                            <div className="text-white font-bold text-lg">NAAC Accredited</div>
                            <div className="text-gray-300 text-sm">Grade A Department</div>
                        </div>
                        <div className="bg-primary/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                <div className="text-white font-bold text-sm">Live Research</div>
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">20+</div>
                            <div className="text-gray-300 text-sm">Ongoing Projects</div>
                        </div>
                        <div className="col-span-2 bg-gradient-to-r from-accent to-accent-600 p-6 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform cursor-pointer animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <div className="flex justify-between items-center text-primary-dark">
                                <div>
                                    <div className="font-bold text-lg">Placement Record</div>
                                    <div className="text-sm opacity-90">Consistent 90% above placement</div>
                                </div>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            </div>
                        </div>
                    </div>
                    {/* Decorative blurred blobs behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 rounded-full blur-[100px] -z-10"></div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-accent rounded-full animate-scroll"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
