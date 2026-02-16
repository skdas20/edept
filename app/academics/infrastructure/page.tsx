'use client';

import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";
import { useState } from "react";

export default function Infrastructure() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const infrastructureImages = [
        { src: "/images/infrastructure/03c4689e0b18496edbd96c6b37aa890f.jpg", alt: "Laboratory Equipment" },
        { src: "/images/infrastructure/212932ba49bd478b4746c71174758f3f.jpg", alt: "Electronics Lab" },
        { src: "/images/infrastructure/4a70eddfce1748fb37b6b5ccb65cbf5e.jpg", alt: "Communication Lab" },
        { src: "/images/infrastructure/4f8a3e34e07c963eaf87fbb051726c5c.jpg", alt: "VLSI Lab" },
        { src: "/images/infrastructure/5902831fcfee88e93f2b79f01f5eecc3.jpg", alt: "Digital Lab" },
        { src: "/images/infrastructure/8576d0fde8b6efe1c193f0c393627a5a.jpg", alt: "Microprocessor Lab" },
        { src: "/images/infrastructure/9b5db5dea31348e9ddc6ae8fe3f7939f.jpg", alt: "Signal Processing Lab" },
        { src: "/images/infrastructure/9d672e8be26745d4d282071b81f9fdc9.jpg", alt: "Embedded Systems Lab" },
        { src: "/images/infrastructure/adb83f0cb755f623c1fdaebebec0c012.jpg", alt: "IoT Lab" },
        { src: "/images/infrastructure/ae68e618900d82fda13f4b4fef659dd1.jpg", alt: "Research Facility" },
        { src: "/images/infrastructure/b740a11d1acb2d4303ffa21f1fbae533.jpg", alt: "Classroom" },
        { src: "/images/infrastructure/b7db72278392e7de743810593f70d844.jpg", alt: "Smart Classroom" },
        { src: "/images/infrastructure/dab770e8a2b4d230420ff940813a8b10.jpg", alt: "Department Infrastructure" },
        { src: "/images/infrastructure/eedc041ccb0a61d03df6f83f4ae90d1a.jpg", alt: "Lab Equipment" },
        { src: "/images/infrastructure/f6876502f6f87ed6f69c19bd3e6ea3e7.jpg", alt: "Testing Equipment" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Infrastructure"
                description="State-of-the-Art Facilities for Electronics & Communication Engineering"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Overview */}
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Department Infrastructure</h2>
                        <p className="text-lg text-muted-text leading-relaxed mb-8">
                            The ECE Department is equipped with state-of-the-art laboratories, modern classrooms, 
                            and advanced research facilities to provide students with hands-on experience in 
                            electronics and communication engineering.
                        </p>

                        <div className="grid md:grid-cols-4 gap-6 mb-8">
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary mb-2">8+</div>
                                <div className="text-muted-text font-medium">Specialized Labs</div>
                            </div>
                            <div className="bg-accent-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-accent-600 mb-2">15+</div>
                                <div className="text-muted-text font-medium">Smart Classrooms</div>
                            </div>
                            <div className="bg-green-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">3</div>
                                <div className="text-muted-text font-medium">Research Centers</div>
                            </div>
                            <div className="bg-blue-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                                <div className="text-muted-text font-medium">Lab Access</div>
                            </div>
                        </div>
                    </div>

                    {/* Laboratory Facilities */}
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Laboratory Facilities</h2>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-primary-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Electronics Labs</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Basic Electronics Lab</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Analog & Digital Electronics Lab</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Power Electronics Lab</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>VLSI Design Lab</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-accent-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Communication Labs</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Communication Systems Lab</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Microwave & Antenna Lab</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Optical Communication Lab</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Wireless Communication Lab</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-green-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Computing Labs</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Microprocessor & Microcontroller Lab</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Embedded Systems Lab</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Digital Signal Processing Lab</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>IoT Research Lab</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Research Facilities</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>IEDC-ECE (Entrepreneurship Center)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>AMRL (Advanced Research Lab)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Image Processing Lab</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Project Development Lab</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Infrastructure Gallery */}
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-8">Infrastructure Gallery</h2>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {infrastructureImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                                    onClick={() => setSelectedImage(image.src)}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
                        <Image
                            src={selectedImage}
                            alt="Infrastructure"
                            fill
                            className="object-contain"
                        />
                        <button
                            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
