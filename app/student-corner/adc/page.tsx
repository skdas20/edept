import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function ADC() {
    const images = [
        "4ac00d901e10740ca40d62b4281e363f.jpg",
        "4c154362666cebec571831dd0a7a9339.jpg",
        "68d6ab63399911cec3cd1aa7fa29fa5c.jpg",
        "797eb2558d080401d14eb728074e7dfd.jpg",
        "cdee966175608027816d9da878e7aa60.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Academic Disciplinary Committee" description="Maintaining Academic Excellence and Discipline" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Academic Disciplinary Committee (ADC)</h2>
                        <p className="text-lg text-muted-text mb-12">
                            The Academic Disciplinary Committee ensures a conducive learning environment by maintaining 
                            academic standards, addressing disciplinary issues, and promoting ethical conduct among students.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Academic Integrity</h3>
                                <p className="text-muted-text text-sm">Ensuring honesty and fairness in all academic activities</p>
                            </div>
                            <div className="bg-accent-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Conduct Monitoring</h3>
                                <p className="text-muted-text text-sm">Addressing behavioral and disciplinary concerns</p>
                            </div>
                            <div className="bg-green-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Student Welfare</h3>
                                <p className="text-muted-text text-sm">Supporting students in maintaining academic standards</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-primary mb-6">ADC Activities</h3>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {images.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={`/images/adc/${image}`}
                                        alt={`ADC Activity ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Responsibilities</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Monitoring Academic Performance</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Addressing Attendance Issues</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Handling Examination Malpractices</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Resolving Student Grievances</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Promoting Ethical Conduct</span></li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Contact ADC</h3>
                                <p className="text-muted-text mb-4">
                                    For academic or disciplinary concerns, students can reach out to the ADC through 
                                    the department office.
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
