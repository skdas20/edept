'use client';

import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";
import { useState } from "react";

export default function Seminars() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const seminarImages = [
        "/images/seminars/53ba1e9a44fd353ef56dcff55b70c8e8.jpg",
        "/images/seminars/afd4a73bb57f5dc460a6ef0420403b74.jpg",
        "/images/seminars/e063d418ef63c284c3470e7fd40500ca.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Seminars and Lectures"
                description="Expert Talks and Knowledge Sharing Sessions"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Seminars & Lecture Series</h2>
                        <p className="text-lg text-muted-text leading-relaxed mb-8">
                            The department organizes regular seminars and guest lectures by industry experts, 
                            academicians, and researchers to expose students to latest trends and developments 
                            in electronics and communication engineering.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                                <div className="text-muted-text font-medium">Seminars Annually</div>
                            </div>
                            <div className="bg-accent-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-accent-600 mb-2">30+</div>
                                <div className="text-muted-text font-medium">Expert Speakers</div>
                            </div>
                            <div className="bg-green-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
                                <div className="text-muted-text font-medium">Student Participants</div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Seminar Topics</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Emerging Technologies in ECE</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Industry Trends and Career Opportunities</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Research Methodologies</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Innovation and Entrepreneurship</span></li>
                                </ul>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>5G and Beyond Communication</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>AI and Machine Learning Applications</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IoT and Smart Systems</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Sustainable Technology Solutions</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-8">Seminar Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {seminarImages.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(image)}>
                                    <Image src={image} alt={`Seminar ${index + 1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
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
                        <Image src={selectedImage} alt="Seminar" fill className="object-contain" />
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
