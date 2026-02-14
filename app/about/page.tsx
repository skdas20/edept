import React from 'react';
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import Image from "next/image";

export default function About() {
    const vision = "To be a premier department of Electronics & Communication Engineering by imparting quality education, fostering research, and nurturing innovation for societal development.";

    const mission = [
        "To provide a strong theoretical foundation and practical skills in Electronics & Communication Engineering.",
        "To promote research and innovation in emerging technologies through collaborative projects.",
        "To instill ethical values, leadership qualities, and lifelong learning for professional excellence.",
        "To contribute to the technological advancement of society through sustainable solutions."
    ];

    const hod = {
        name: "Prof. (Dr.) Malay Gangopadhyaya",
        designation: "Professor & Head",
        email: "malay.gangopadhyaya@iemcal.com",
        image: "/images/hod-placeholder.jpg", // Placeholder
        message: "Welcome to the Department of Electronics & Communication Engineering. We are committed to academic excellence and holistic development of our students. Our curriculum is designed to meet industry standards while encouraging research and innovation. I invite you to explore our department and be part of our journey towards technological advancement."
    };

    const advisoryBoard = [
        { name: "Mr. Atanu Pramanic", designation: "CIO, Hindalco Industries Ltd.", company: "Hindalco Industries Ltd." },
        { name: "Mr. Suman Bose", designation: "Managing Director", company: "Siemens Industry Software India Pvt. Ltd." },
        { name: "Mr. Chandan Chowdhury", designation: "Associate Dean", company: "Indian School of Business (ISB)" },
        { name: "Dr. Sanghamitra Bandyopadhaya", designation: "Director", company: "Indian Statistical Institute (ISI)" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="About Us"
                description="Discover our vision, mission, and the people driving excellence in Electronics & Communication Engineering."
            />

            {/* Vision & Mission Section */}
            <section className="py-20 bg-surface relative">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
                    {/* Vision Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-primary hover:transform hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h2 className="text-2xl font-bold font-heading text-primary">Our Vision</h2>
                        </div>
                        <p className="text-muted-text text-lg leading-relaxed italic">
                            "{vision}"
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-accent hover:transform hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            </div>
                            <h2 className="text-2xl font-bold font-heading text-primary">Our Mission</h2>
                        </div>
                        <ul className="space-y-4">
                            {mission.map((item, idx) => (
                                <li key={idx} className="flex gap-3 text-muted-text">
                                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* HOD Section */}
            <section className="py-20 bg-surface-2">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary w-full text-center mb-12">Head of Department</h2>
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 bg-gray-200 relative min-h-[300px]">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                {/* Placeholder for HOD Image */}
                                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 p-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-primary mb-1">{hod.name}</h3>
                            <p className="text-accent-600 font-medium mb-4">{hod.designation}</p>
                            <p className="text-muted-text mb-6 italic leading-relaxed">
                                "{hod.message}"
                            </p>
                            <div className="mt-auto">
                                <a href={`mailto:${hod.email}`} className="text-primary hover:text-accent font-medium flex items-center gap-2 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    {hod.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advisory Board Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary w-full text-center mb-12">Advisory Board</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advisoryBoard.map((member, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center">
                                <div className="w-16 h-16 bg-primary-50 rounded-full mx-auto mb-4 flex items-center justify-center text-primary md:text-xl font-bold">
                                    {member.name.charAt(0)}
                                </div>
                                <h3 className="font-bold text-lg text-primary mb-2 line-clamp-1">{member.name}</h3>
                                <p className="text-accent-600 text-sm font-medium mb-2 h-10 overflow-hidden">{member.designation}</p>
                                <p className="text-muted-text text-sm h-12 overflow-hidden">{member.company}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
