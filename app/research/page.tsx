import React from 'react';
import PageHeader from "@/components/layout/PageHeader";

export default function Research() {
    const publications = [
        { title: "Design of a Novel Millimeter-Wave Microstrip Antenna for 5G Wireless Communication", authors: "Dr. T. K. Rana, et al.", journal: "IEEE Transactions on Antennas and Propagation", year: "2023" },
        { title: "Enhancing the Performance of Perovskite Solar Cells using Plasmonic Nanoparticles", authors: "Dr. M. Gangopadhyaya, et al.", journal: "Solar Energy Materials and Solar Cells", year: "2023" },
        { title: "IoT Based Smart Farming System using Machine Learning", authors: "Dr. D. De, et al.", journal: "Computers and Electronics in Agriculture", year: "2022" },
    ];

    const grants = [
        { title: "Development of AI-driven Healthcare Diagnostics System", agency: "DST-SERB", amount: "₹ 25 Lakhs", pi: "Dr. D. De" },
        { title: "Design and Fabrications of Metamaterial Absorbers for Stealth Applications", agency: "DRDO", amount: "₹ 18 Lakhs", pi: "Dr. T. K. Rana" },
    ];

    const patents = [
        { title: "A Smart Wearable Device for Continuous Health Monitoring", number: "IN202311012345", status: "Published" },
        { title: "An Efficient Method for Image Compression using Wavelet Transform", number: "IN202241054321", status: "Granted" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Research & Innovation"
                description="Exploration and discovery at the forefront of technological advancement."
            />

            {/* Overview Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold font-heading text-primary mb-6">Fostering a Culture of Research</h2>
                        <p className="text-muted-text text-lg leading-relaxed">
                            The Department of Electronics & Communication Engineering is deeply committed to high-impact research. Our faculty and students are actively engaged in diverse areas including VLSI, Communication Systems, Signal Processing, IoT, and more. We maintain state-of-the-art research facilities and encourage publication in international journals and involvement in interdisciplinary activities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="text-4xl font-bold text-accent mb-2">30+</div>
                            <div className="text-primary font-medium">Research Areas</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="text-4xl font-bold text-accent mb-2">3</div>
                            <div className="text-primary font-medium">Research Labs</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="text-4xl font-bold text-accent mb-2">100+</div>
                            <div className="text-primary font-medium">Publications & Patents</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Areas Section */}
            <section className="py-20 bg-surface-2">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-12 flex items-center gap-4">
                        <span className="w-2 h-8 bg-accent rounded-full block"></span>
                        Research Areas
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
                        {[
                            "Communication Engineering",
                            "Semiconductor devices and quantum electronics",
                            "Dielectric and substrate integrated waveguides",
                            "Antenna design (microstrip, wearable, dielectric resonator)",
                            "Filter design and cavity resonators",
                            "Low-power VLSI design",
                            "Power electronics and industrial electronics",
                            "Solid-state lighting",
                            "Microcontroller-based embedded systems",
                            "Digital image processing and computer vision",
                            "Pattern recognition and machine learning",
                            "Biomedical and medical electronics",
                            "Nanotechnology",
                            "Renewable energy and climate change",
                            "Optical systems (self-imaging, tweezers, telescopes)",
                            "Wireless sensor networks",
                            "Internet of Things (IoT)",
                            "5G and beyond communication systems",
                            "Signal processing for multimedia",
                            "Robotics and automation",
                            "Artificial Intelligence and Deep Learning",
                            "Quantum computing",
                            "Photonics and optoelectronics",
                            "RF and microwave engineering",
                            "Network security and cryptography",
                            "Smart grid technology",
                            "Cognitive radio networks",
                            "Terahertz technology",
                            "Wearable electronics",
                            "Green communication systems"
                        ].map((area, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all group">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                                    <span className="text-primary font-medium text-sm">{area}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Infrastructure */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-12 flex items-center gap-4">
                        <span className="w-2 h-8 bg-accent rounded-full block"></span>
                        Research Infrastructure
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-primary to-primary-600 text-white p-8 rounded-3xl shadow-lg hover:transform hover:-translate-y-2 transition-all">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">IEDC-ECE</h3>
                            <p className="text-white/90 mb-4">Entrepreneurship Development Center fostering innovation and startup culture among students</p>
                            <a href="https://iedc-ece.iem.edu.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all">
                                Visit Lab <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </div>
                        <div className="bg-gradient-to-br from-accent to-accent-600 text-white p-8 rounded-3xl shadow-lg hover:transform hover:-translate-y-2 transition-all">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">AMRL Facility</h3>
                            <p className="text-white/90 mb-4">Advanced Microelectronics Research Laboratory with cutting-edge equipment for device characterization</p>
                            <a href="https://sites.google.com/view/iem-amrl/home" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all">
                                Visit Lab <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </div>
                        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-3xl shadow-lg hover:transform hover:-translate-y-2 transition-all">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">IoT Research Lab</h3>
                            <p className="text-white/90 mb-4">Specialized laboratory for Internet of Things research and embedded systems development</p>
                            <span className="inline-flex items-center gap-2 text-white/80 font-medium">
                                State-of-the-art facility
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Publications Section */}
            <section className="py-20 bg-surface-2" id="publications">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-12 flex items-center gap-4">
                        <span className="w-2 h-8 bg-accent rounded-full block"></span>
                        Selected Publications
                    </h2>
                    <div className="space-y-6">
                        {publications.map((pub, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary hover:bg-primary-50 transition-colors duration-300">
                                <h3 className="text-xl font-bold text-primary mb-2">{pub.title}</h3>
                                <p className="text-sm font-medium text-accent-600 mb-1">{pub.authors}</p>
                                <div className="flex justify-between items-center text-sm text-muted-text">
                                    <span className="italic">{pub.journal}</span>
                                    <span className="font-bold bg-gray-100 px-3 py-1 rounded-full">{pub.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <button className="text-primary font-bold hover:text-accent transition-colors flex items-center justify-center gap-2">
                            View All Publications <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Grants Section */}
            <section className="py-20 bg-surface" id="grants">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-12 flex items-center gap-4">
                        <span className="w-2 h-8 bg-accent rounded-full block"></span>
                        Funded Projects
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {grants.map((grant, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-md border hover:border-accent transition-all duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-primary w-3/4">{grant.title}</h3>
                                    <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Ongoing</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                                    <div>
                                        <span className="block text-muted-text text-xs uppercase">Funding Agency</span>
                                        <span className="font-bold text-gray-800">{grant.agency}</span>
                                    </div>
                                    <div>
                                        <span className="block text-muted-text text-xs uppercase">Amount</span>
                                        <span className="font-bold text-gray-800">{grant.amount}</span>
                                    </div>
                                </div>
                                <div className="border-t pt-4 text-sm">
                                    <span className="text-muted-text">Principal Investigator: </span>
                                    <span className="font-bold text-primary">{grant.pi}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Patents Section */}
            <section className="py-20 bg-surface-2" id="patents">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-12 flex items-center gap-4">
                        <span className="w-2 h-8 bg-accent rounded-full block"></span>
                        Patents & IPR
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {patents.map((patent, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200">
                                <div className="mb-4">
                                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${patent.status === 'Granted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {patent.status}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-3">{patent.title}</h3>
                                <p className="text-sm text-muted-text font-mono bg-white inline-block px-2 py-1 rounded border">
                                    No: {patent.number}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
