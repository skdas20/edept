import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HODMessage = () => {
    return (
        <section className="py-20 bg-surface-2 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-dark/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Image Side */}
                    <div className="w-full md:w-5/12 relative group">
                        <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:-rotate-2 group-hover:rotate-0 transition-transform duration-500">
                            {/* Placeholder for HOD Image - using a generic academically appropriate placeholder or just a solid color if image fails */}
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                                <span className="sr-only">HOD Image Placeholder</span>
                                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            </div>
                            {/* If real image exists, use: <Image src="/images/hod.jpg" alt="HOD" fill className="object-cover" /> */}
                        </div>

                        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary-dark font-bold">“</div>
                                <p className="text-sm font-medium italics text-gray-600">Leading through innovation and research excellence.</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-7/12 space-y-8">
                        <div>
                            <h4 className="text-accent-600 font-bold uppercase tracking-wider text-sm mb-2">Leadership</h4>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Message from the <br /> Head of Department</h2>
                            <div className="w-20 h-1.5 bg-accent rounded-full mb-8"></div>
                        </div>

                        <div className="space-y-6 text-lg text-muted-text leading-relaxed">
                            <p>
                                "Welcome to the Department of Electronics & Communication Engineering. Our department strives to provide a dynamic learning environment that fosters innovation, critical thinking, and technical expertise."
                            </p>
                            <p>
                                "We are committed to producing industry-ready engineers who are equipped to tackle the challenges of the rapidly evolving technological landscape. Through our rigorous curriculum and state-of-the-art laboratories, we ensure our students receive the best possible education."
                            </p>
                        </div>

                        <div className="pt-4 flex items-center gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-primary">Dr. [HOD Name]</h3>
                                <p className="text-muted-text">Professor & Head, ECE Department</p>
                            </div>
                            {/* Signature Placeholder */}
                            <div className="h-12 w-32 bg-gray-200/50 rounded skew-x-12"></div>
                        </div>

                        <div className="pt-4">
                            <Link href="/about" className="text-primary font-semibold hover:text-accent transition-colors flex items-center gap-2 group">
                                Read Full Message
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HODMessage;
