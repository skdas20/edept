import React from 'react';
import PageHeader from "@/components/layout/PageHeader";

export default function Events() {
    const upcomingEvents = [
        { 
            title: "SYTRON 2025", 
            date: "Aug 30-31, 2025", 
            location: "IEM Campus", 
            description: "IoT and Verilog workshops, robotic competitions, model exhibitions, poster presentations, technical quizzes, tech talks, Gen-AI app challenges, coding competitions, and gaming events", 
            type: "Technical Extravaganza",
            website: "https://www.sytron.co.in/",
            image: "/images/events/854e357c52d24309675b1b39fb486ac8.jpg"
        },
        { 
            title: "Bengal E-Summit", 
            date: "TBA", 
            location: "IEM Campus", 
            description: "Entrepreneurship summit featuring industry leaders, startup showcases, and networking opportunities", 
            type: "Summit",
            website: "https://bengalesummit.in/",
            image: "/images/events/c377de433c30600161df2d1ff2a82bbd.jpg"
        }
    ];

    const pastEvents = [
        { title: "Faculty Development Program", date: "2024", description: "Professional development workshop for faculty members", image: "/images/events/76c5bc9d07053c62cee732b4a0ffc3c1.jpg" },
        { title: "Technical Workshop", date: "2024", description: "Hands-on training session on emerging technologies", image: "/images/events/882fe799708937a02703f29e4a71f5e9.jpg" },
        { title: "Distinguished Lecture Series", date: "2024", description: "Expert talks on cutting-edge research topics", image: "/images/events/8b4b91b1684cd043aa4a0a945f088dee.jpg" },
        { title: "Industry Interaction Session", date: "2024", description: "Networking with industry professionals and alumni", image: "/images/events/ae66fa9e5932e42e2104379654cdc278.jpg" },
        { title: "Student Seminar", date: "2024", description: "Student presentations on research projects", image: "/images/events/c5c95516ad31581e48b75200cee104cc.jpg" },
        { title: "Conference Participation", date: "2024", description: "Faculty and students presenting research papers", image: "/images/events/d3b8de01bbaa2263ba956880b8055a6b.jpg" },
        { title: "Entrepreneurship Activity", date: "2024", description: "Startup pitches and innovation showcase", image: "/images/events/e904518addaeabbd97c4545efbe48a4a.jpg" },
        { title: "Alumni Mentoring Program", date: "2024", description: "Career guidance sessions with successful alumni", image: "/images/events/fd4f83dd04c2763c261ae26b5bd425a2.jpg" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Events & Activities"
                description="Vibrant campus life with seminars, workshops, and cultural fests."
            />

            {/* Upcoming Events */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-12 text-center">Upcoming Events</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {upcomingEvents.map((event, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border-l-8 border-accent relative overflow-hidden group hover:transform hover:-translate-y-1 transition-all duration-300">
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide">
                                    {event.type}
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 text-center w-16 bg-gray-100 rounded-lg p-2 border border-gray-200">
                                        <span className="block text-2xl font-bold text-primary">{event.date.includes(' ') ? event.date.split(' ')[1]?.replace(',', '') || event.date.split(' ')[0] : event.date}</span>
                                        <span className="block text-xs font-bold text-muted-text uppercase">{event.date.includes(' ') ? event.date.split(' ')[0] : ''}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">{event.title}</h3>
                                        <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            {event.location}
                                        </p>
                                        <p className="text-muted-text line-clamp-2">{event.description}</p>
                                        {event.website && (
                                            <a href={event.website} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-accent-600 font-bold text-sm hover:underline">
                                                Learn More &rarr;
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Events Gallery Grid */}
            <section className="py-20 bg-surface-2">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-12 text-center">Past Events Gallery</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pastEvents.map((event, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                                <div className="h-48 bg-gray-300 relative overflow-hidden">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white scale-0 group-hover:scale-100 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-primary mb-1 line-clamp-1">{event.title}</h3>
                                    <p className="text-xs text-accent-600 font-bold uppercase mb-2">{event.date}</p>
                                    <p className="text-sm text-muted-text line-clamp-2">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional Societies */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-12 text-center">Event Documentation</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <a href="#" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                </div>
                                <span className="font-bold text-primary">FDPs Conducted</span>
                            </div>
                        </a>
                        <a href="#" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center text-accent-600 group-hover:bg-accent group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="font-bold text-primary">Entrepreneurship Activities</span>
                            </div>
                        </a>
                        <a href="#" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>
                                <span className="font-bold text-primary">Workshops</span>
                            </div>
                        </a>
                        <a href="#" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                </div>
                                <span className="font-bold text-primary">Distinguished Lectures</span>
                            </div>
                        </a>
                        <a href="#" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </div>
                                <span className="font-bold text-primary">Seminars</span>
                            </div>
                        </a>
                        <a href="#" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                </div>
                                <span className="font-bold text-primary">Industry Interaction</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Professional Societies */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold font-heading mb-8">Professional Chapters</h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {/* IEEE Student Branch */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {/* Replace with IEEE Logo */}
                                <span className="text-primary font-bold text-xl">IEEE</span>
                            </div>
                            <span className="font-medium text-lg opacity-90">IEEE Student Branch</span>
                        </div>
                        {/* IETE Student Forum */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {/* Replace with IETE Logo */}
                                <span className="text-primary font-bold text-xl">IETE</span>
                            </div>
                            <span className="font-medium text-lg opacity-90">IETE Student Forum</span>
                        </div>
                        {/* IE(I) Chapter */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {/* Replace with IEI Logo */}
                                <span className="text-primary font-bold text-xl">IE(I)</span>
                            </div>
                            <span className="font-medium text-lg opacity-90">Institution of Engineers</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
