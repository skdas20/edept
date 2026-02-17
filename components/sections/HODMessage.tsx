import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HODMessage = () => {
    return (
        <section className="relative overflow-hidden bg-surface-2 py-20">
            <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-12 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

            <div className="container relative z-10 mx-auto px-4">
                <div className="section-panel mx-auto grid max-w-6xl items-center gap-10 p-6 md:grid-cols-12 md:p-10">
                    <div className="md:col-span-4">
                        <div className="image-frame relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lg">
                            <Image
                                src="/images/faculty/6f92a3e4ea097d0a1e52112fb61ff854.jpg"
                                alt="Prof. (Dr.) Malay Gangopadhyaya - Head of Department"
                                fill
                                className="object-cover object-top"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/85 to-transparent p-5">
                                <p className="text-xs uppercase tracking-[0.14em] text-accent-light">Leadership</p>
                                <p className="mt-1 text-sm font-semibold text-white">ECE Department, IEM</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-8">
                        <span className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                            Leadership Note
                        </span>
                        <h2 className="mt-4 text-3xl font-bold font-heading text-primary md:text-4xl">
                            Message from the Head of Department
                        </h2>
                        <div className="mt-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-accent to-accent-light" />

                        <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-text md:text-lg">
                            <p>
                                The department emphasizes mentor-based education, practical laboratory training, and student-led research across embedded systems, VLSI, DSP, and image processing.
                            </p>
                            <p>
                                We actively encourage publication, interdisciplinary collaboration, and innovation-driven learning to build engineers who create meaningful impact in technology and society.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6">
                            <div>
                                <h3 className="font-heading text-xl font-semibold text-primary">Prof. (Dr.) Malay Gangopadhyaya</h3>
                                <p className="text-sm text-muted-text">Professor & Head, ECE Department</p>
                            </div>
                            <Link
                                href="/about"
                                className="ml-auto inline-flex items-center rounded-xl border border-primary/25 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
                            >
                                Read Full Message
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HODMessage;
