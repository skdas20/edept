import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function DepartmentalJournal() {
    const images = [
        "218f186aec6737e2a9a75c0cfe717a1c.jpg",
        "9b283e9b72a1fe81375e4c502a6bd7bd.jpg",
        "b536f04480d50e8149ccc25aedce0c33.jpg",
        "ba083a58d1ad1ce2178795cb7f16c234.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Departmental Journal" description="ECE Department Research Journal" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Departmental Journal</h2>
                        <p className="text-lg text-muted-text mb-12">
                            The ECE Department publishes a research journal featuring original research papers, review 
                            articles, and technical notes from faculty, students, and researchers in the field of 
                            electronics and communication engineering.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {images.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={`/images/departmental-journal/${image}`}
                                        alt={`Journal ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Journal Scope</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Wireless Communication</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>VLSI & Embedded Systems</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Signal & Image Processing</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IoT & Smart Systems</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Microwave Engineering</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Optical Communication</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Power Electronics</span></li>
                                </ul>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Publication Types</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Original Research Articles</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Review Papers</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Technical Notes</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Case Studies</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Student Research Papers</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Industry Contributions</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8 mb-12">
                            <h3 className="text-2xl font-bold text-primary mb-4">Review Process</h3>
                            <p className="text-muted-text">
                                All submissions undergo a rigorous peer-review process by experts in the respective 
                                fields. The journal maintains high standards of quality and originality, ensuring that 
                                published work contributes meaningfully to the field of electronics and communication engineering.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">For Authors</h3>
                                <p className="text-muted-text mb-4">
                                    Faculty, researchers, and students are invited to submit their original research 
                                    work for publication. Detailed submission guidelines and templates are available 
                                    from the editorial office.
                                </p>
                                <p className="text-sm text-muted-text">Submission Email: eee.iemk@gmail.com</p>
                            </div>

                            <div className="bg-purple-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Access Journal</h3>
                                <p className="text-muted-text mb-4">
                                    Current and past issues of the journal are available for download. For subscription 
                                    and access details, contact the department office.
                                </p>
                                <p className="text-sm text-muted-text">Email: eee.iemk@gmail.com</p>
                                <p className="text-sm text-muted-text">Phone: +91 33 2357 2969</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
