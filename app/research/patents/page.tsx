import PageHeader from "@/components/layout/PageHeader";

export default function Patents() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Patents" description="Innovation and Intellectual Property" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Patents & Intellectual Property</h2>
                        <p className="text-lg text-muted-text mb-12">
                            The ECE Department encourages innovation and intellectual property creation. Faculty and 
                            students have filed numerous patents in various domains of electronics and communication engineering.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <h3 className="text-4xl font-bold text-primary mb-2">30+</h3>
                                <p className="text-muted-text">Patents Filed</p>
                            </div>
                            <div className="bg-accent-50 rounded-xl p-6 text-center">
                                <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                                <p className="text-muted-text">Patents Granted</p>
                            </div>
                            <div className="bg-green-50 rounded-xl p-6 text-center">
                                <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                                <p className="text-muted-text">Patents Published</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Patent Domains</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Wireless Communication Systems</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Antenna Design & RF Circuits</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IoT Devices & Smart Systems</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Signal Processing Algorithms</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>VLSI Circuit Design</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Medical Electronics</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Renewable Energy Systems</span></li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Patent Support</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Patent Filing Assistance</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IPR Awareness Workshops</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Prior Art Search Support</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Patent Drafting Guidance</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Legal & Technical Consultation</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Funding for Patent Filing</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-orange-50 rounded-2xl p-8 mb-12">
                            <h3 className="text-2xl font-bold text-primary mb-4">Recent Patents</h3>
                            <p className="text-muted-text">
                                Recent patent filings include innovations in 5G communication systems, energy-efficient 
                                IoT devices, novel antenna designs, and AI-based signal processing techniques. Several 
                                patents have been granted by the Indian Patent Office and are in various stages of 
                                international filing.
                            </p>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">File a Patent</h3>
                            <p className="text-muted-text mb-4">
                                Faculty and students with innovative ideas are encouraged to file patents. The department 
                                provides complete support for the patent filing process.
                            </p>
                            <p className="text-sm text-muted-text">Contact IPR Cell: eee.iemk@gmail.com</p>
                            <p className="text-sm text-muted-text">Phone: +91 33 2357 2969</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
