import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function OutreachActivity() {
    const images = [
        "04e80d8fe3218328ced9860443d8db8c.jpg",
        "345032ed1409dab55eeb142c36279ee3.jpg",
        "479e50da2ecf1dfdea71219140ae5348.jpg",
        "62b3f7dff9725162584375a634b231c1.jpg",
        "634b1e70b1216a40294da9c4d758ac9e.jpg",
        "68fb71c926b253651c26bb22d011ea7b.jpg",
        "8995619276252c5ba0754ba6635bb491.jpg",
        "957930bc3335d8261d74f76a5974392a.jpg",
        "ca6d73f72bbdd4cea8a36c98faa52fa6.jpg",
        "d0e7041e2e8ca45239e81198da75957d.jpg",
        "d607ff8df37efc85fec6318a48eece75.jpg",
        "d8045b01eacdf9c36ea8fa8cd150bffb.jpg",
        "d91f9b20a92f50a125c57a3e9e5d75a1.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader 
                title="Outreach Activity" 
                description="Community Engagement and Social Impact Programs" 
            />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Outreach Activities</h2>
                        <p className="text-lg text-muted-text mb-12">
                            The ECE Department conducts various outreach activities to bridge the gap between academia 
                            and society, promoting technical education, skill development, and social welfare in the community.
                        </p>

                        <div className="grid md:grid-cols-4 gap-6 mb-12">
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <h3 className="text-xl font-bold text-primary mb-2">School Programs</h3>
                                <p className="text-muted-text text-sm">Technical workshops and demonstrations for school students</p>
                            </div>
                            <div className="bg-accent-50 rounded-xl p-6 text-center">
                                <h3 className="text-xl font-bold text-primary mb-2">Skill Development</h3>
                                <p className="text-muted-text text-sm">Training programs for underprivileged communities</p>
                            </div>
                            <div className="bg-green-50 rounded-xl p-6 text-center">
                                <h3 className="text-xl font-bold text-primary mb-2">Awareness Camps</h3>
                                <p className="text-muted-text text-sm">Technology awareness and digital literacy programs</p>
                            </div>
                            <div className="bg-blue-50 rounded-xl p-6 text-center">
                                <h3 className="text-xl font-bold text-primary mb-2">Industry Connect</h3>
                                <p className="text-muted-text text-sm">Collaboration with industries for social initiatives</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-primary mb-6">Outreach Gallery</h3>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {images.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={`/images/outreach/${image}`}
                                        alt={`Outreach Activity ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-purple-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Impact Areas</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Technical Education for Rural Students</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Digital Literacy Programs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Women Empowerment through Technology</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Environmental Conservation Projects</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Health and Hygiene Awareness</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Participate</h3>
                                <p className="text-muted-text mb-4">
                                    Join our outreach programs and make a difference in the community. Students and 
                                    faculty can volunteer for various initiatives throughout the year.
                                </p>
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold text-primary">Contact for Volunteering:</p>
                                    <p className="text-sm text-muted-text">eee.iemk@gmail.com</p>
                                    <p className="text-sm text-muted-text">+91 33 2357 2969</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
