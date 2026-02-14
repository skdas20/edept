import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
        <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary">Why Choose EEE at IEM?</h2>
                    <p className="text-muted-text text-lg">
                        We offer a blend of vigorous academic training and rich practical experience to prepare you for the challenges of the modern world.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.name}
                            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-t border-gray-100 overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 ${feature.color} rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500`}></div>

                            <div className={`inline-flex items-center justify-center p-3 rounded-2xl ${feature.color} mb-6 relative z-10`}>
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-primary mb-3 relative z-10">{feature.name}</h3>
                            <p className="text-muted-text mb-6 relative z-10">{feature.description}</p>

                            <Link href={feature.href} className="inline-flex items-center font-semibold text-primary group-hover:text-accent-600 transition-colors relative z-10">
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
