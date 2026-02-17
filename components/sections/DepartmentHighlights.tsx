import React from 'react';
import Link from 'next/link';

const features = [
    {
        name: 'Academic Excellence',
        description: 'Comprehensive curriculum designed to meet industry standards with a focus on practical learning.',
        href: '/academics',
        cta: 'View Syllabus',
        color: 'bg-primary-50',
        icon: (
            <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
    },
    {
        name: 'Cutting-edge Research',
        description: 'Advanced research facilities in IoT, VLSI, and Signal Processing fostering innovation.',
        href: '/research',
        cta: 'Explore Research',
        color: 'bg-accent-50',
        icon: (
            <svg className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        name: 'Student Achievements',
        description: 'Our students consistently excel in hackathons, placements, and higher studies globally.',
        href: '/student-corner',
        cta: 'See Hall of Fame',
        color: 'bg-green-50',
        icon: (
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    },
];

const DepartmentHighlights = () => {
    return (
        <section className="relative overflow-hidden bg-surface py-16 md:py-24">
            <div className="absolute left-0 top-14 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />

            <div className="container relative mx-auto px-4">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <h2 className="mb-4 text-3xl font-bold font-heading text-primary md:text-4xl">Why Choose ECE at IEM?</h2>
                    <p className="text-lg text-muted-text">
                        We offer a blend of vigorous academic training and rich practical experience to prepare you for the challenges of the modern world.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="elevated-card group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5"
                        >
                            <div className={`absolute right-0 top-0 h-28 w-28 ${feature.color} rounded-bl-full opacity-60 transition-transform duration-500 group-hover:scale-110`} />

                            <div className={`relative z-10 mb-6 inline-flex items-center justify-center rounded-2xl p-3 ${feature.color}`}>
                                {feature.icon}
                            </div>

                            <h3 className="relative z-10 mb-3 text-xl font-bold text-primary">{feature.name}</h3>
                            <p className="relative z-10 mb-6 text-muted-text">{feature.description}</p>

                            <Link href={feature.href} className="relative z-10 inline-flex items-center font-semibold text-primary transition-colors group-hover:text-accent-600">
                                {feature.cta}
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DepartmentHighlights;
