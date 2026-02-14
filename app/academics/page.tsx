import React from 'react';
import PageHeader from "@/components/layout/PageHeader";
import Link from 'next/link';

export default function Academics() {
    const years = [
        { title: '1st Year', href: '#syllabus-1', description: 'Basic Science & Fundamental Electronics' },
        { title: '2nd Year', href: '#syllabus-2', description: 'Core Electronics & Circuit Design' },
        { title: '3rd Year', href: '#syllabus-3', description: 'Advanced Communications & Electives' },
        { title: '4th Year', href: '#syllabus-4', description: 'Projects, Internships & Specializations' },
    ];

    const labs = [
        { name: "Electronic Devices & Circuits Lab", image: "", description: "State-of-the-art facility for studying semiconductor devices." },
        { name: "Digital Signal Processing Lab", image: "", description: "Advanced workstations with MATLAB and Simulink." },
        { name: "VLSI Design Lab", image: "", description: "Industry-standard EDA tools like Cadence and Xilinx." },
        { name: "Communication Systems Lab", image: "", description: "Practical experiments in analog and digital communication." },
        { name: "IoT & Embedded Systems Lab", image: "", description: "Hands-on experience with microcontrollers and sensors." },
        { name: "Microwave Engineering Lab", image: "", description: "Specialized equipment for high-frequency signal analysis." },
    ];

    const faculty = [
        { name: "Prof. (Dr.) Malay Gangopadhyaya", designation: "HOD & Professor", area: "Device Modeling" },
        { name: "Dr. Tapan Kumar Rana", designation: "Professor", area: "Antenna & Microwave" },
        { name: "Dr. Debasish De", designation: "Professor", area: "Mobile Computing" },
        { name: "Dr. Himadri Sekhar Dutta", designation: "Associate Professor", area: "Photonics" },
        // Add more as needed
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Academics"
                description="Comprehensive curriculum blending theoretical knowledge with practical application."
            />

            {/* Curriculum Overview */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-12 text-center">Undergraduate Program (B.Tech)</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-primary-50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-primary mb-4">Program Objectives</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-muted-text">
                                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                                    <span>To prepare students for successful careers in industry and research.</span>
                                </li>
                                <li className="flex gap-3 text-muted-text">
                                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                                    <span>To develop strong analytical and problem-solving skills.</span>
                                </li>
                                <li className="flex gap-3 text-muted-text">
                                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                                    <span>To foster innovation and entrepreneurial thinking.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white border boundary-gray-100 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-primary mb-4">Department Highlights</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-surface-2 rounded-xl">
                                    <div className="text-3xl font-bold text-accent mb-1">1:15</div>
                                    <div className="text-sm text-muted-text font-medium">Faculty-Student Ratio</div>
                                </div>
                                <div className="text-center p-4 bg-surface-2 rounded-xl">
                                    <div className="text-3xl font-bold text-accent mb-1">12</div>
                                    <div className="text-sm text-muted-text font-medium">Specialized Labs</div>
                                </div>
                                <div className="text-center p-4 bg-surface-2 rounded-xl">
                                    <div className="text-3xl font-bold text-accent mb-1">90%</div>
                                    <div className="text-sm text-muted-text font-medium">Placement Record</div>
                                </div>
                                <div className="text-center p-4 bg-surface-2 rounded-xl">
                                    <div className="text-3xl font-bold text-accent mb-1">25+</div>
                                    <div className="text-sm text-muted-text font-medium">Patents Filed</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Syllabus Years */}
                    <div className="grid md:grid-cols-4 gap-6">
                        {years.map((year, idx) => (
                            <Link href={year.href} key={idx} className="block group">
                                <div className="bg-white p-6 rounded-2xl shadow-md border hover:border-primary transition-all duration-300 h-full flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{year.title}</h3>
                                        <p className="text-sm text-muted-text mb-4">{year.description}</p>
                                    </div>
                                    <div className="text-primary font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                                        Download Syllabus <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Laboratories Section */}
            <section className="py-20 bg-surface-2">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-4 text-center">State-of-the-Art Laboratories</h2>
                    <p className="text-muted-text text-center max-w-2xl mx-auto mb-12">
                        Our labs are equipped with the latest hardware and software to provide hands-on experience in cutting-edge technologies.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {labs.map((lab, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg group">
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                    {/* Placeholder for Lab Image */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500 font-medium">
                                        {lab.name}
                                    </div>
                                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white font-bold border border-white px-4 py-2 rounded-full">View Details</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-primary mb-2 line-clamp-1">{lab.name}</h3>
                                    <p className="text-sm text-muted-text line-clamp-2">{lab.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Faculty Section - Brief Preview */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-12">Renowned Faculty</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {faculty.slice(0, 4).map((fac, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center bg-primary-50 text-primary text-2xl font-bold">
                                        {fac.name.charAt(0)}
                                    </div>
                                </div>
                                <h3 className="font-bold text-primary mb-1">{fac.name}</h3>
                                <p className="text-xs text-accent-600 font-bold uppercase tracking-wide mb-2">{fac.designation}</p>
                                <p className="text-sm text-muted-text">Area: {fac.area}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12">
                        <Link href="/faculty" className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
                            View All Faculty Members
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
