import PageHeader from "@/components/layout/PageHeader";

export default function MoU() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="MoU" description="Memorandum of Understanding and Collaborations" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Memorandum of Understanding (MoU)</h2>
                        <p className="text-lg text-muted-text mb-12">
                            The ECE Department has established strategic partnerships with leading industries, research 
                            institutions, and academic organizations through MoUs to foster collaboration in research, 
                            training, and knowledge exchange.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Industry Partners</h3>
                                <p className="text-muted-text text-sm">Collaborations with leading technology companies</p>
                            </div>
                            <div className="bg-accent-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Research Institutions</h3>
                                <p className="text-muted-text text-sm">Joint research with premier institutes</p>
                            </div>
                            <div className="bg-green-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">International Tie-ups</h3>
                                <p className="text-muted-text text-sm">Global academic partnerships</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Collaboration Areas</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Joint Research Projects</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Student Internships & Training</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Faculty Exchange Programs</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Curriculum Development</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Guest Lectures & Workshops</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Technology Transfer</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Sponsored Research</span></li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Partner Organizations</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Leading IT & Telecom Companies</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Electronics Manufacturing Firms</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>DRDO & ISRO Centers</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IITs & NITs</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>International Universities</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Research Laboratories</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-orange-50 rounded-2xl p-8 mb-12">
                            <h3 className="text-2xl font-bold text-primary mb-4">Benefits for Students</h3>
                            <p className="text-muted-text">
                                Through these MoUs, students gain access to industry internships, live projects, 
                                advanced training programs, and placement opportunities. Faculty members benefit from 
                                collaborative research, funding opportunities, and exposure to cutting-edge technologies.
                            </p>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Establish Partnership</h3>
                            <p className="text-muted-text mb-4">
                                Organizations interested in establishing MoU with the ECE Department for collaborative 
                                activities can contact the department office.
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
