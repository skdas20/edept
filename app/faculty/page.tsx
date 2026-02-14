import React from 'react';
import PageHeader from "@/components/layout/PageHeader";

export default function Faculty() {
    const faculty = [
        { name: "Prof. (Dr.) Malay Gangopadhyaya", designation: "Professor & Head", qualification: "Ph.D.", area: "Device, Circuit & System", image: "", email: "malay.gangopadhyaya@iemcal.com" },
        { name: "Prof. (Dr.) Tapan Kumar Rana", designation: "Professor", qualification: "Ph.D.", area: "Microwave & Antenna", image: "", email: "tapan.rana@iemcal.com" },
        { name: "Prof. (Dr.) Debasish De", designation: "Professor", qualification: "Ph.D.", area: "Mobile Computing", image: "", email: "debasish.de@iemcal.com" },
        { name: "Prof. (Dr.) Himadri Sekhar Dutta", designation: "Associate Professor", qualification: "Ph.D.", area: "Photonics", image: "", email: "himadri.dutta@iemcal.com" },
        { name: "Prof. (Dr.) Runa Kumari", designation: "Associate Professor", qualification: "Ph.D.", area: "Control Systems", image: "", email: "runa.kumari@iemcal.com" },
        { name: "Prof. (Dr.) Srijita Chakraborty", designation: "Associate Professor", qualification: "Ph.D.", area: "Signal Processing", image: "", email: "srijita.chakraborty@iemcal.com" },
        { name: "Prof. (Dr.) Sumita Banerjee", designation: "Assistant Professor", qualification: "Ph.D.", area: "VLSI Design", image: "", email: "sumita.banerjee@iemcal.com" },
        { name: "Prof. (Dr.) Karabi Dutta Choudhury", designation: "Assistant Professor", qualification: "Ph.D.", area: "Communication", image: "", email: "karabi.dutta@iemcal.com" },
        { name: "Prof. Subhabrata Banerjee", designation: "Assistant Professor", qualification: "M.Tech", area: "Embedded Systems", image: "", email: "subhabrata.banerjee@iemcal.com" },
        { name: "Prof. Tapaasree Roy", designation: "Assistant Professor", qualification: "M.Tech", area: "Analog Electronics", image: "", email: "tapaasree.roy@iemcal.com" },
        { name: "Prof. Amartya Mukherjee", designation: "Assistant Professor", qualification: "M.Tech", area: "IoT", image: "", email: "amartya.mukherjee@iemcal.com" },
        { name: "Prof. (Dr.) Sutapa Dey", designation: "Assistant Professor", qualification: "Ph.D.", area: "Nano-electronics", image: "", email: "sutapa.dey@iemcal.com" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Faculty Members"
                description="Meet our distinguished faculty members who are experts in their respective fields."
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {faculty.map((fac, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-primary">
                                <div className="h-64 bg-gray-200 relative overflow-hidden">
                                    {/* Placeholder for Faculty Image */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-400">
                                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                    </div>
                                    {/* Overlay with Email Action */}
                                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                        <a href={`mailto:${fac.email}`} className="px-6 py-2 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-white transition-colors transform hover:-translate-y-1">
                                            Send Email
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-lg font-bold text-primary mb-1 line-clamp-1 group-hover:text-accent transition-colors">{fac.name}</h3>
                                    <p className="text-xs font-bold text-accent-600 uppercase tracking-wide mb-4">{fac.designation}</p>

                                    <div className="border-t border-gray-100 pt-4 mt-2 space-y-2 text-left">
                                        <p className="text-sm text-muted-text flex justify-between">
                                            <span className="font-semibold text-gray-700">Qualification:</span>
                                            <span>{fac.qualification}</span>
                                        </p>
                                        <p className="text-sm text-muted-text flex justify-between">
                                            <span className="font-semibold text-gray-700">Area:</span>
                                            <span className="text-right truncate w-1/2">{fac.area}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tech Staff Section */}
                    <div className="mt-24">
                        <h2 className="text-3xl font-bold font-heading text-primary text-center mb-12">Technical Staff</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {/* Simulating Technical Staff */}
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                                    <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400">
                                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                                    </div>
                                    <h4 className="font-bold text-primary text-lg">Lab Assistant {item}</h4>
                                    <p className="text-sm text-muted-text uppercase tracking-wide font-medium mt-1">Technical Assistant</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
