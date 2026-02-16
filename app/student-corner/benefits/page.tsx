import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function Benefits() {
    const images = [
        "03d64b862304f1fc4009baa31d1a179c.jpg",
        "7d709abbbd59aa3412df4b77107f4501.jpg",
        "e729c95fbce30831eaa8fbb51107af31.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Student Benefits" description="Facilities and Advantages for ECE Students" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Student Benefits</h2>
                        <p className="text-lg text-muted-text mb-12">
                            ECE Department students enjoy a wide range of benefits and facilities designed to enhance 
                            their academic experience and overall development.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {images.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={`/images/benefits/${image}`}
                                        alt={`Student Benefit ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Academic Benefits</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>State-of-the-art Laboratories</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Well-stocked Library with Digital Resources</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>MATLAB Campus License</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Industry-Standard Software Tools</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Research Opportunities</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Project Guidance from Experts</span></li>
                                </ul>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Career Development</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Placement Assistance</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Industry Internship Opportunities</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Skill Development Workshops</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Mock Interviews & Resume Building</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Career Counseling Services</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Entrepreneurship Support</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-green-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Student Activities</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Technical Fest - SYTRON</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IEEE & IETE Student Chapters</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Sports & Cultural Events</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>NSS & CSR Activities</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Industrial Visits</span></li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Financial Support</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Merit-based Scholarships</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Need-based Financial Aid</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Government Scholarship Assistance</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Education Loan Facilitation</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
