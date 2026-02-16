import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function Placement() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Placement" description="Career Opportunities and Placement Statistics" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Placement Cell</h2>
                        <p className="text-lg text-muted-text mb-12">
                            The ECE Department has an excellent placement record with students securing positions in 
                            leading companies across various sectors including IT, telecommunications, electronics, and core engineering.
                        </p>

                        <div className="mb-12">
                            <Image
                                src="/images/placement/9c58c1f5ca3b9c19270b6d8a1bea2aaa.jpg"
                                alt="Placement Activities"
                                width={1200}
                                height={600}
                                className="rounded-2xl shadow-lg w-full object-cover"
                            />
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-8 text-center">
                                <h3 className="text-4xl font-bold text-primary mb-2">95%+</h3>
                                <p className="text-muted-text">Placement Rate</p>
                            </div>
                            <div className="bg-accent-50 rounded-2xl p-8 text-center">
                                <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
                                <p className="text-muted-text">Recruiting Companies</p>
                            </div>
                            <div className="bg-green-50 rounded-2xl p-8 text-center">
                                <h3 className="text-4xl font-bold text-primary mb-2">₹12 LPA</h3>
                                <p className="text-muted-text">Highest Package</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Top Recruiters</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>TCS, Wipro, Infosys, Cognizant</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Accenture, Capgemini, Tech Mahindra</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IBM, HCL, L&T Infotech</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Reliance Jio, Airtel, Vodafone</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Samsung, LG, Philips</span></li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Placement Support</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Resume Building Workshops</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Mock Interviews</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Aptitude Training</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Soft Skills Development</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Industry Interaction Sessions</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-orange-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Contact Placement Cell</h3>
                            <p className="text-muted-text mb-2">For placement related queries and assistance:</p>
                            <p className="text-sm text-muted-text">Email: eee.iemk@gmail.com</p>
                            <p className="text-sm text-muted-text">Phone: +91 33 2357 2969</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
