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
                            <Image 
                                src="/images/faculty/6f92a3e4ea097d0a1e52112fb61ff854.jpg" 
                                alt="Prof. (Dr.) Malay Gangopadhyaya - Head of Department" 
                                fill 
                                className="object-cover" 
                            />
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
                                "The department emphasizes mentor-based education, practical laboratory work, and student participation in research projects spanning embedded systems, VLSI, DSP, and image processing."
                            </p>
                            <p>
                                "Our programs encourage publication in international journals and involvement in interdisciplinary activities. We are committed to developing competent professionals who contribute to engineering and technology advancement."
                            </p>
                        </div>

                        <div className="pt-4 flex items-center gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-primary">Prof. (Dr.) Malay Gangopadhyaya</h3>
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
