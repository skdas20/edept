import PageHeader from "@/components/layout/PageHeader";

export default function AcademicDisciplinaryCommittee() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Academic Disciplinary Committee (ADC)"
                description="Maintaining Academic Standards and Student Welfare"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">About ADC</h2>
                        <p className="text-lg text-muted-text leading-relaxed mb-8">
                            The Academic Disciplinary Committee (ADC) is responsible for maintaining academic integrity, 
                            addressing student grievances, and ensuring a conducive learning environment in the department.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-4">Key Responsibilities</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Monitor student academic performance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Address academic grievances and concerns</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Ensure compliance with academic regulations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Handle disciplinary matters fairly</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Promote academic ethics and integrity</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-4">Student Support</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Academic counseling and guidance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Remedial support for struggling students</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Mentorship programs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Conflict resolution mechanisms</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Student welfare initiatives</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Contact ADC</h3>
                            <p className="text-muted-text mb-4">
                                Students can approach the ADC for any academic concerns, grievances, or guidance. 
                                The committee ensures confidentiality and fair resolution of all matters.
                            </p>
                            <p className="text-muted-text">
                                <strong>Email:</strong> eee.iemk@gmail.com<br />
                                <strong>Office Hours:</strong> Monday to Friday, 10:00 AM - 4:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
