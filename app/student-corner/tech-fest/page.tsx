import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function TechFest() {
    const images = [
        "1d697a658325c313ff95a42c06a354e1.jpg",
        "a2e0e54b6fd0f98481fd9334e21071a2.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Tech-Fest" description="SYTRON - Annual Technical Festival" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">SYTRON - Technical Festival</h2>
                        <p className="text-lg text-muted-text mb-12">
                            SYTRON is the flagship technical festival of the ECE Department, featuring competitions, 
                            workshops, exhibitions, and guest lectures that bring together students, faculty, and 
                            industry experts.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {images.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={`/images/tech-fest/${image}`}
                                        alt={`Tech Fest ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Technical Competitions</h3>
                                <p className="text-muted-text text-sm">Coding, robotics, circuit design, and project exhibitions</p>
                            </div>
                            <div className="bg-accent-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Workshops</h3>
                                <p className="text-muted-text text-sm">Hands-on training on latest technologies and tools</p>
                            </div>
                            <div className="bg-green-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Guest Lectures</h3>
                                <p className="text-muted-text text-sm">Industry experts sharing insights and experiences</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Event Highlights</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Project Exhibitions</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Coding Competitions</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Robotics Challenges</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Circuit Design Contests</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Technical Quiz</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Paper Presentations</span></li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Participation</h3>
                                <p className="text-muted-text mb-4">
                                    SYTRON welcomes participation from students across all engineering disciplines and 
                                    institutions. Stay updated on event schedules and registration details.
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
