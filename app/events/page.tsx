import React from 'react';
import PageHeader from "@/components/layout/PageHeader";

export default function Events() {
    const upcomingEvents = [
        { title: "International Conference on Advanced Computing & Communication", date: "Oct 25, 2026", location: "Auditorium, IEM", description: "A premier platform for researchers to present their latest work.", type: "Conference" },
        { title: "Workshop on VLSI Design using Cadence", date: "Nov 12, 2026", location: "VLSI Lab", description: "Hands-on training session for 3rd year students.", type: "Workshop" }
    ];

    const pastEvents = [
        { title: "Tech-Fest 2025", date: "Mar 15, 2025", description: "Annual technical festival showcasing student projects.", image: "" },
        { title: "Guest Lecture by Dr. S. K. Pal", date: "Feb 10, 2025", description: "Topic: Artificial Intelligence in Healthcare.", image: "" },
        { title: "Alumni Meet 2025", date: "Jan 05, 2025", description: "Reconnecting with our successful alumni network.", image: "" },
        { title: "Faculty Development Program", date: "Dec 15, 2024", description: "One week FDP on Emerging Technologies.", image: "" },
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
                                        <span className="block text-2xl font-bold text-primary">{event.date.split(' ')[1].replace(',', '')}</span>
                                        <span className="block text-xs font-bold text-muted-text uppercase">{event.date.split(' ')[0]}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">{event.title}</h3>
                                        <p className="text-sm text-gray-500 flex items-center gap-1 mb-3">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            {event.location}
                                        </p>
                                        <p className="text-muted-text line-clamp-2">{event.description}</p>
                                        <button className="mt-4 text-accent-600 font-bold text-sm hover:underline">Register Now &rarr;</button>
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
                                    {/* Placeholder for Event Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">Event Photo</div>
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
