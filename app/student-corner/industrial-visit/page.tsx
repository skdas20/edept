import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function IndustrialVisit() {
    const images = [
        "376b3b869614a332f5e4b28d3c45cd2c.jpg",
        "5d81f913118dbf93ab65f699cf52a5ea.jpg",
        "8eb2fb872a865bb54139963b7f6a1c27.jpg",
        "96f13014431e3621b5fd968303ed4606.jpg",
        "a1466fb2cde79a7d39315beb2bdbf057.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Industrial Visit" description="Industry Exposure and Learning Experiences" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Industrial Visits</h2>
                        <p className="text-lg text-muted-text mb-12">
                            Industrial visits provide students with practical exposure to real-world applications of 
                            theoretical concepts, helping them understand industry practices and emerging technologies.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Industry Exposure</h3>
                                <p className="text-muted-text text-sm">Hands-on experience with industrial processes and technologies</p>
                            </div>
                            <div className="bg-accent-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Practical Learning</h3>
                                <p className="text-muted-text text-sm">Understanding real-world applications of classroom concepts</p>
                            </div>
                            <div className="bg-green-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Career Insights</h3>
                                <p className="text-muted-text text-sm">Exploring career opportunities and industry requirements</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-primary mb-6">Visit Gallery</h3>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {images.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={`/images/industrial-visit/${image}`}
                                        alt={`Industrial Visit ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Organizations Visited</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Telecommunications Companies</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Electronics Manufacturing Units</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IT & Software Companies</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Research & Development Centers</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Power Plants & Substations</span></li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Learning Outcomes</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Understanding Industrial Processes</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Exposure to Latest Technologies</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Industry-Academia Gap Bridging</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Career Path Exploration</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Professional Networking</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
