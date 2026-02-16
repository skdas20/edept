import PageHeader from "@/components/layout/PageHeader";

export default function IEDCECE() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="IEDC-ECE" description="Innovation and Entrepreneurship Development Centre" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">IEDC-ECE</h2>
                        <p className="text-lg text-muted-text mb-12">
                            The Innovation and Entrepreneurship Development Centre (IEDC-ECE) fosters innovation, 
                            research, and entrepreneurial spirit among students and faculty in the ECE Department.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Innovation Hub</h3>
                                <p className="text-muted-text text-sm">Encouraging creative thinking and innovative project development</p>
                            </div>
                            <div className="bg-accent-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Entrepreneurship</h3>
                                <p className="text-muted-text text-sm">Supporting startup ideas and business development</p>
                            </div>
                            <div className="bg-green-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Research Support</h3>
                                <p className="text-muted-text text-sm">Providing resources and mentorship for research projects</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Facilities & Resources</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>State-of-the-art Equipment</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Prototyping Lab</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Testing & Measurement Tools</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Software Development Environment</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Mentorship from Faculty & Industry Experts</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Funding Support for Promising Projects</span></li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Focus Areas</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IoT & Embedded Systems</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Wireless Communication</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>VLSI Design</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Signal Processing</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Machine Learning Applications</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Renewable Energy Systems</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-orange-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Get Involved</h3>
                            <p className="text-muted-text mb-4">
                                Students and faculty interested in innovation and entrepreneurship can join IEDC-ECE 
                                to work on cutting-edge projects, develop prototypes, and transform ideas into reality.
                            </p>
                            <p className="text-sm text-muted-text">Contact: eee.iemk@gmail.com</p>
                            <p className="text-sm text-muted-text">Phone: +91 33 2357 2969</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
