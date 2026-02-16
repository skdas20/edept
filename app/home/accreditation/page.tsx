import React from 'react';
import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function Accreditation() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Accreditation"
                description="NBA Accredited Department - Maintaining Excellence for 24 Years"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-12">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-primary mb-6">NBA Accreditation</h2>
                            <p className="text-xl text-muted-text leading-relaxed max-w-3xl mx-auto">
                                ECE department is NBA accreditated for the <span className="font-bold text-primary">last 24 years</span>. 
                                ECE Dept. received the <span className="font-bold text-primary">first accreditation</span> in the year <span className="font-bold text-primary">2004</span>. 
                                It was further renewed in the years <span className="font-bold text-primary">2012</span>, <span className="font-bold text-primary">2015</span>, <span className="font-bold text-primary">2018</span> and latest in <span className="font-bold text-primary">2023</span> respectively.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="text-center p-6 bg-primary-50 rounded-2xl">
                                <div className="text-5xl font-bold text-primary mb-2">24</div>
                                <div className="text-muted-text font-medium">Years of Accreditation</div>
                            </div>
                            <div className="text-center p-6 bg-accent-50 rounded-2xl">
                                <div className="text-5xl font-bold text-accent-600 mb-2">2004</div>
                                <div className="text-muted-text font-medium">First Accreditation</div>
                            </div>
                            <div className="text-center p-6 bg-green-50 rounded-2xl">
                                <div className="text-5xl font-bold text-green-600 mb-2">2023</div>
                                <div className="text-muted-text font-medium">Latest Renewal</div>
                            </div>
                        </div>
                    </div>

                    {/* Accreditation Certificates */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-primary mb-6">Accreditation Certificates</h3>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                                <div className="relative h-96">
                                    <Image
                                        src="/images/accreditation/48353d993f405d881ad0183f6c616591.jpg"
                                        alt="NBA Accreditation Certificate"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                                <div className="relative h-96">
                                    <Image
                                        src="/images/accreditation/3bfd48a6c4980afca104c5476dbebd47.jpg"
                                        alt="NBA Accreditation Certificate"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg md:col-span-2">
                                <div className="relative h-96">
                                    <Image
                                        src="/images/accreditation/d87a7db8a15cbb110513da21b64298cd.jpg"
                                        alt="NBA Accreditation Certificate"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
