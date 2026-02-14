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
                            The Department of Electronics & Communication Engineering is deeply committed to high-impact research. Our faculty and students are actively engaged in diverse areas including VLSI, Communication Systems, Signal Processing, IoT, and more.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="text-4xl font-bold text-accent mb-2">120+</div>
                            <div className="text-primary font-medium">Journal Publications</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="text-4xl font-bold text-accent mb-2">₹ 50L+</div>
                            <div className="text-primary font-medium">Research Grants</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <div className="text-4xl font-bold text-accent mb-2">25+</div>
                            <div className="text-primary font-medium">Patents Filed/Granted</div>
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
