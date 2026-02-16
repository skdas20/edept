import PageHeader from "@/components/layout/PageHeader";

export default function Publications() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Publications" description="Faculty Research Publications and Papers" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Research Publications</h2>
                        <p className="text-lg text-muted-text mb-12">
                            The ECE Department faculty members actively contribute to the academic community through 
                            research publications in reputed international journals, conferences, and book chapters.
                        </p>

                        <div className="grid md:grid-cols-4 gap-6 mb-12">
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <h3 className="text-3xl font-bold text-primary mb-2">200+</h3>
                                <p className="text-muted-text text-sm">Journal Papers</p>
                            </div>
                            <div className="bg-accent-50 rounded-xl p-6 text-center">
                                <h3 className="text-3xl font-bold text-primary mb-2">150+</h3>
                                <p className="text-muted-text text-sm">Conference Papers</p>
                            </div>
                            <div className="bg-green-50 rounded-xl p-6 text-center">
                                <h3 className="text-3xl font-bold text-primary mb-2">25+</h3>
                                <p className="text-muted-text text-sm">Book Chapters</p>
                            </div>
                            <div className="bg-blue-50 rounded-xl p-6 text-center">
                                <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
                                <p className="text-muted-text text-sm">Books Authored</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-purple-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Publication Areas</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Wireless Communication Systems</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>VLSI Design & Embedded Systems</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Signal & Image Processing</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IoT & Smart Systems</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Machine Learning & AI</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Antenna Design & RF Engineering</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Optical Communication</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Power Electronics</span></li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Reputed Journals</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IEEE Transactions</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Elsevier Journals</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Springer Publications</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IET Journals</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Wiley Publications</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Taylor & Francis</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>SCI & Scopus Indexed Journals</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
                            <h3 className="text-2xl font-bold text-primary mb-4">Recent Highlights</h3>
                            <p className="text-muted-text mb-4">
                                Faculty members have published papers in top-tier conferences including IEEE ICC, 
                                GLOBECOM, WCNC, and journals with high impact factors. Several publications have 
                                received best paper awards and significant citations.
                            </p>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Access Publications</h3>
                            <p className="text-muted-text mb-4">
                                For detailed publication lists by faculty members, visit individual faculty profiles 
                                or contact the department office.
                            </p>
                            <p className="text-sm text-muted-text">Email: eee.iemk@gmail.com</p>
                            <p className="text-sm text-muted-text">Phone: +91 33 2357 2969</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
