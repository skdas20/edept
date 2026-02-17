'use client';

import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";
import { useState } from "react";

export default function Library() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const libraryImages = [
        { src: "/images/library/5363ba24a569195db427a4190339fab1.jpg", alt: "Library Reading Area" },
        { src: "/images/library/569eb7c06acd01842a83cd2b49378c71.jpg", alt: "Library Collection" },
        { src: "/images/library/7e719b311ad1cf41b94a2c4b4be1ae38.jpg", alt: "Digital Library" },
        { src: "/images/library/8576d0fde8b6efe1c193f0c393627a5a.jpg", alt: "Study Area" },
        { src: "/images/library/f0c95ae6b97288838322edc757895b0c.jpg", alt: "Library Resources" }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Library"
                description="IEM Gurukul - A Hub of Knowledge and Learning"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Library Overview */}
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">IEM Gurukul Library</h2>
                        <p className="text-lg text-muted-text leading-relaxed mb-8">
                            The IEM Gurukul Library is a state-of-the-art learning resource center that provides 
                            comprehensive access to books, journals, digital resources, and research materials. 
                            With 24/7 access and modern facilities, the library supports academic excellence and research.
                        </p>

                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                                <div className="text-muted-text font-medium">Books</div>
                            </div>
                            <div className="bg-accent-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-accent-600 mb-2">500+</div>
                                <div className="text-muted-text font-medium">Journals</div>
                            </div>
                            <div className="bg-green-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                                <div className="text-muted-text font-medium">Access</div>
                            </div>
                            <div className="bg-blue-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">Digital</div>
                                <div className="text-muted-text font-medium">Resources</div>
                            </div>
                        </div>
                    </div>

                    {/* Library Services */}
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-8">Library Services</h2>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-primary-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Print Resources</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>Extensive collection of textbooks and reference books</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>National and international journals</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>Conference proceedings and research papers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>Magazines and periodicals</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>Previous year question papers</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Digital Resources</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>E-books and e-journals access</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>IEEE Xplore Digital Library</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>NPTEL video lectures</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>Online databases and repositories</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>Remote access to digital content</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-green-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Facilities</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>Spacious reading halls with comfortable seating</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>Computer terminals with internet access</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>Separate discussion rooms</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>Photocopying and printing services</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>Air-conditioned environment</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Special Services</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>Book reservation and renewal online</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>Reference and research assistance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>Inter-library loan facility</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>New arrivals notification</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">•</span>
                                        <span>Library orientation programs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Library Timings */}
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Library Timings</h2>
                        
                        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-4">Regular Hours</h3>
                                    <div className="space-y-3 text-muted-text">
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Monday - Friday:</span>
                                            <span>8:00 AM - 10:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Saturday:</span>
                                            <span>8:00 AM - 8:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Sunday:</span>
                                            <span>9:00 AM - 6:00 PM</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-4">24/7 Access</h3>
                                    <p className="text-muted-text mb-4">
                                        Extended library access is available for students during examination periods 
                                        and for research scholars throughout the year.
                                    </p>
                                    <p className="text-sm text-muted-text">
                                        <strong>Note:</strong> Digital resources are accessible 24/7 from anywhere with valid credentials.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Library Gallery */}
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-8">Library Gallery</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {libraryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all"
                                    onClick={() => setSelectedImage(image.src)}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-gradient-to-br from-primary to-accent-600 rounded-3xl shadow-lg p-12 text-white mt-12">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4">Visit IEM Gurukul Library</h2>
                            <p className="text-lg mb-8 opacity-90">
                                For more information about library services and resources
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                                    <div className="text-3xl mb-2">📧</div>
                                    <p className="font-semibold mb-1">Email</p>
                                    <p className="text-sm opacity-90">library@iem.edu.in</p>
                                </div>

                                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                                    <div className="text-3xl mb-2">📞</div>
                                    <p className="font-semibold mb-1">Phone</p>
                                    <p className="text-sm opacity-90">+91 33 2357 2969</p>
                                </div>
                            </div>
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
                            alt="Library"
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
