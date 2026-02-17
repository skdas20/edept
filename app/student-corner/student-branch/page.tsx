import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function StudentBranchChapter() {
    const images = [
        "0843b105580d190febf57731815354e7.jpg",
        "4fb404c16a5272a0680231f0c2d78019.jpg",
        "5d35bcd2a62fefcd19f3dedb3a720dd2.jpg",
        "8eb2fb872a865bb54139963b7f6a1c27.jpg",
        "a38021d317607a3c83374d96b7fcdee3.jpg",
        "b61ecaad7c9d48d3f6b814f084016eaa.jpg",
        "c89fa73496a8b24913c62af6cd2ceebf.jpg",
        "daa9c82b5c55eb9e178ab386ffe17b3c.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Student Branch Chapter" description="IEEE & IETE Student Chapters" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Student Branch Chapters</h2>
                        <p className="text-lg text-muted-text mb-12">
                            The ECE Department hosts active IEEE and IETE student chapters that organize technical events, 
                            workshops, and networking opportunities for students to enhance their professional development.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">IEEE Student Branch</h3>
                                <p className="text-muted-text mb-4">
                                    The Institute of Electrical and Electronics Engineers (IEEE) student branch provides 
                                    access to technical resources, conferences, and networking opportunities.
                                </p>
                                <ul className="space-y-2 text-muted-text text-sm">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IEEE Antennas and Propagation Society (APS)</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IEEE Circuits & Systems Society (CAS)</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IEEE Electron Devices Society (EDS)</span></li>
                                </ul>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">IETE Student Chapter</h3>
                                <p className="text-muted-text mb-4">
                                    The Institution of Electronics and Telecommunication Engineers (IETE) chapter promotes 
                                    technical excellence and professional development in electronics and telecommunications.
                                </p>
                                <ul className="space-y-2 text-muted-text text-sm">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Technical Seminars & Workshops</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Industry Expert Lectures</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Student Project Competitions</span></li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-primary mb-6">Chapter Activities</h3>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {images.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={`/images/student-branch/${image}`}
                                        alt={`Student Branch Activity ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-green-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Benefits of Membership</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Access to Technical Resources</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Networking Opportunities</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Conference Participation</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Professional Development</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Leadership Opportunities</span></li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Join Us</h3>
                                <p className="text-muted-text mb-4">
                                    Interested students can join IEEE or IETE student chapters to enhance their technical 
                                    knowledge and professional network.
                                </p>
                                <p className="text-sm text-muted-text">Contact: eee.iemk@gmail.com</p>
                                <p className="text-sm text-muted-text">Phone: +91 33 2357 2969</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
