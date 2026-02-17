'use client';
import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";
import { useState } from "react";

export default function Workshops() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const images = ["/images/workshops/00d19a6feb9f5ffed731f69ae091df55.jpg", "/images/workshops/7def8faea19f8f572319446bd542199a.jpg", "/images/workshops/81bd718b041f2caf7f24a0170015dab1.jpg", "/images/workshops/882fe799708937a02703f29e4a71f5e9.jpg", "/images/workshops/af2db3b08fdbdb71481c52cd424b522e.jpg", "/images/workshops/fd4f83dd04c2763c261ae26b5bd425a2.jpg"];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Workshops" description="Hands-on Training and Skill Development" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Technical Workshops</h2>
                        <p className="text-lg text-muted-text mb-8">Regular workshops on emerging technologies, tools, and industry practices to enhance student skills.</p>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-primary-50 rounded-xl p-6 text-center"><div className="text-4xl font-bold text-primary mb-2">30+</div><div className="text-muted-text">Workshops Annually</div></div>
                            <div className="bg-accent-50 rounded-xl p-6 text-center"><div className="text-4xl font-bold text-accent-600 mb-2">500+</div><div className="text-muted-text">Students Trained</div></div>
                            <div className="bg-green-50 rounded-xl p-6 text-center"><div className="text-4xl font-bold text-green-600 mb-2">20+</div><div className="text-muted-text">Industry Experts</div></div>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-8">Workshop Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {images.map((img, i) => (
                                <div key={i} className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all" onClick={() => setSelectedImage(img)}>
                                    <Image src={img} alt={`Workshop ${i+1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <Image src={selectedImage} alt="Workshop" width={1200} height={800} className="object-contain max-h-[90vh]" />
                </div>
            )}
        </div>
    );
}
