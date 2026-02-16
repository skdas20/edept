'use client';

import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";
import { useState } from "react";

export default function FDP() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const fdpImages = [
        "/images/fdp/09542db8ace4c4ac4e533d157286c0ce.jpg", "/images/fdp/0b1ff5501ab2f7076575bba2dca50957.jpg",
        "/images/fdp/29435c73c6dde56e679fcefae767a596.jpg", "/images/fdp/ae524eb8bfeef058ddec1e42dbb4d5c0.jpg",
        "/images/fdp/c9aa30b12130e9f149c756b4f436254e.jpg", "/images/fdp/d16bc476cb64711d334ce692f268b236.jpg",
        "/images/fdp/d36071ac00d6ac9863691ef171cd9acd.jpg", "/images/fdp/df8587091ecfd5081a0d7029a7c40eff.jpg",
        "/images/fdp/e9df6fcec04c9063d424983125249f84.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Faculty Development Program" description="Enhancing Teaching Excellence and Research Skills" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Faculty Development Programs</h2>
                        <p className="text-lg text-muted-text leading-relaxed mb-8">
                            The department conducts regular Faculty Development Programs to enhance teaching methodologies, 
                            research capabilities, and keep faculty updated with latest technological advancements.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                                <div className="text-muted-text font-medium">FDPs Conducted</div>
                            </div>
                            <div className="bg-accent-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-accent-600 mb-2">200+</div>
                                <div className="text-muted-text font-medium">Faculty Trained</div>
                            </div>
                            <div className="bg-green-50 rounded-xl p-6 text-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                                <div className="text-muted-text font-medium">Expert Trainers</div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">FDP Focus Areas</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Modern Teaching Methodologies</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Research Paper Writing</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Online Teaching Tools</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Curriculum Development</span></li>
                                </ul>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Laboratory Innovations</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Industry Collaboration</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Project-Based Learning</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Assessment Techniques</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-8">FDP Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {fdpImages.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(image)}>
                                    <Image src={image} alt={`FDP ${index + 1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
                        <Image src={selectedImage} alt="FDP" fill className="object-contain" />
                        <button className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2" onClick={() => setSelectedImage(null)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
