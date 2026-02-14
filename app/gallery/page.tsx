import React from 'react';
import PageHeader from "@/components/layout/PageHeader";

export default function Gallery() {
    const images = [
        { src: "", caption: "Annual Tech Fest 2024", category: "Events" },
        { src: "", caption: "IoT Workshop Session", category: "Workshops" },
        { src: "", caption: "Farewell 2024 Batch", category: "Cultural" },
        { src: "", caption: "Industry Visit to Webel", category: "Industrial Visit" },
        { src: "", caption: "Smart India Hackathon Winners", category: "Achievements" },
        { src: "", caption: "Alumni Meet & Greet", category: "Alumni" },
        // Add more placeholders
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Photo Gallery"
                description="Capturing moments from our vibrant academic and cultural life."
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    {/* Filter Tabs (Static for now) */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['All', 'Events', 'Workshops', 'Industrial Visits', 'Cultural', 'Achievements'].map((tab, idx) => (
                            <button key={idx} className={`px-6 py-2 rounded-full font-bold transition-all ${idx === 0 ? 'bg-primary text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}>
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((img, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer aspect-video bg-gray-200">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500 font-medium group-hover:scale-110 transition-transform duration-700">
                                    {img.category} Photo {idx + 1}
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.category}</span>
                                    <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.caption}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
