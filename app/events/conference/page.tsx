'use client';

import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";
import { useState } from "react";

export default function Conference() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const conferenceImages = [
        "/images/conference/115738ee6d615a62e2252adfaab165b5.jpg",
        "/images/conference/15e408c11e9786c82f0097e5fdfd1bd3.jpg",
        "/images/conference/1c5ba526858d17202f19ae62d76a7feb.jpg",
        "/images/conference/215cd385c9e1757f71e9b52a9d5c67fc.jpg",
        "/images/conference/22393c8622d884103a124efdb9c9d75e.jpg",
        "/images/conference/2eec5357964b3a0e1c33f3c14720ca63.jpg",
        "/images/conference/3698926d4f13723ab2c158e2a9effe4c.jpg",
        "/images/conference/46f4efff1cfbed6b5574d2e7bf32166e.jpg",
        "/images/conference/76c5bc9d07053c62cee732b4a0ffc3c1.jpg",
        "/images/conference/8eef4df1606df87410a03294e2d6fe4e.jpg",
        "/images/conference/ae66fa9e5932e42e2104379654cdc278.jpg",
        "/images/conference/c0d956140f09b454a5080c7f8ed4bf44.jpg",
        "/images/conference/c377de433c30600161df2d1ff2a82bbd.jpg",
        "/images/conference/e904518addaeabbd97c4545efbe48a4a.jpg",
        "/images/conference/f8d213799dcd73c456880f375eddc190.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Conferences"
                description="Academic Conferences and Technical Symposiums"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Department Conferences</h2>
                        <p className="text-lg text-muted-text leading-relaxed mb-8">
                            The ECE Department regularly organizes and participates in national and international 
                            conferences to promote research, innovation, and knowledge sharing in electronics and 
                            communication engineering.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                                <div className="text-muted-text font-medium">Conferences Organized</div>
                            </div>
                            <div className="bg-accent-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-accent-600 mb-2">100+</div>
                                <div className="text-muted-text font-medium">Papers Presented</div>
                            </div>
                            <div className="bg-green-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                                <div className="text-muted-text font-medium">Expert Speakers</div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Conference Focus Areas</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>VLSI and Microelectronics</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Wireless Communication Systems</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Signal Processing and Image Processing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Embedded Systems and IoT</span>
                                    </li>
                                </ul>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Antenna Design and RF Engineering</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Machine Learning and AI Applications</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Optical Communication</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Renewable Energy Systems</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-8">Conference Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {conferenceImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <Image
                                        src={image}
                                        alt={`Conference ${index + 1}`}
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

            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
                        <Image src={selectedImage} alt="Conference" fill className="object-contain" />
                        <button className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70" onClick={() => setSelectedImage(null)}>
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
