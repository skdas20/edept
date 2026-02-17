'use client';

import React from 'react';
import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function Gallery() {
    const galleryImages = [
        { src: "/images/gallery/0efc865644725c16c7a623fe857ac618.jpg", title: "Department Event", category: "Events" },
        { src: "/images/gallery/20358d1aba0e185386fd0c2e92868817.jpg", title: "Student Activities", category: "Campus Life" },
        { src: "/images/gallery/271b491c8999b1be914806817fff8ec7.jpg", title: "Technical Workshop", category: "Workshops" },
        { src: "/images/gallery/3688bac16541f7ed9674608cf620098e.jpg", title: "Lab Session", category: "Academics" },
        { src: "/images/gallery/395db1d299d08afefb650a46688b8c71.jpg", title: "Conference", category: "Events" },
        { src: "/images/gallery/5c5a61043690566b10023c19676e6696.jpg", title: "Seminar", category: "Events" },
        { src: "/images/gallery/729ff34ae1a83afbbd1895dd514bb890.jpg", title: "Student Project", category: "Projects" },
        { src: "/images/gallery/b577866e99c9b0b564ed209223e9dd8b.jpg", title: "Cultural Event", category: "Campus Life" },
        { src: "/images/gallery/c68351a17ee5aa59b0e6d745c5af5f81.jpg", title: "Tech Fest", category: "Events" },
        { src: "/images/gallery/dcf1130d7801a0b2837922641ab9b667.jpg", title: "Guest Lecture", category: "Events" },
        { src: "/images/gallery/fd76133ec0991d5408d994ce07a9e908.jpg", title: "Department Activity", category: "Campus Life" },
        { src: "/images/gallery/fee0c4c9ce21d70d0f6afdf76e88088f.jpg", title: "Innovation Lab", category: "Labs" },
    ];

    const categories = ["All", "Events", "Campus Life", "Workshops", "Academics", "Projects", "Labs"];
    const [selectedCategory, setSelectedCategory] = React.useState("All");

    const filteredImages = selectedCategory === "All" 
        ? galleryImages 
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Photo Gallery"
                description="Explore moments captured from our department's vibrant academic and cultural activities."
            />

            {/* Category Filter */}
            <section className="py-8 bg-white border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${
                                    selectedCategory === category
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map((image, idx) => (
                            <div
                                key={idx}
                                className="group relative aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                                    <p className="text-accent text-sm font-medium">{image.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredImages.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-xl text-muted-text">No images found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
