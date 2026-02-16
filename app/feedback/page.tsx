import PageHeader from "@/components/layout/PageHeader";

export default function Feedback() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Feedback"
                description="Your Feedback Helps Us Improve"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Feedback System</h2>
                        <p className="text-lg text-muted-text mb-8">
                            The ECE Department values feedback from all stakeholders to continuously improve 
                            our academic programs, infrastructure, and services.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Student Feedback</h3>
                                <p className="text-muted-text mb-4">
                                    Students can provide feedback on courses, teaching methods, infrastructure, 
                                    and overall learning experience.
                                </p>
                                <a href="#" className="text-accent-600 font-semibold hover:underline">
                                    Submit Student Feedback →
                                </a>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Alumni Feedback</h3>
                                <p className="text-muted-text mb-4">
                                    Alumni can share their experiences and suggestions for curriculum improvement 
                                    and industry alignment.
                                </p>
                                <a href="#" className="text-accent-600 font-semibold hover:underline">
                                    Submit Alumni Feedback →
                                </a>
                            </div>

                            <div className="bg-green-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Employer Feedback</h3>
                                <p className="text-muted-text mb-4">
                                    Employers can provide feedback on graduate competencies and suggest 
                                    improvements to our curriculum.
                                </p>
                                <a href="#" className="text-accent-600 font-semibold hover:underline">
                                    Submit Employer Feedback →
                                </a>
                            </div>

                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Faculty Feedback</h3>
                                <p className="text-muted-text mb-4">
                                    Faculty members can provide feedback on academic processes, infrastructure, 
                                    and administrative support.
                                </p>
                                <a href="#" className="text-accent-600 font-semibold hover:underline">
                                    Submit Faculty Feedback →
                                </a>
                            </div>
                        </div>

                        <div className="bg-purple-50 rounded-2xl p-8 mb-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Feedback Process</h3>
                            <ol className="space-y-3 text-muted-text">
                                <li className="flex items-start">
                                    <span className="font-bold text-primary mr-3">1.</span>
                                    <span>Feedback is collected online and brought to IQAC for analysis</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold text-primary mr-3">2.</span>
                                    <span>Data is compiled with deliberation at department, Board of Studies, and Governing Body levels</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold text-primary mr-3">3.</span>
                                    <span>Suggestions are reviewed for feasibility before departmental action</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold text-primary mr-3">4.</span>
                                    <span>Implemented improvements are communicated to stakeholders</span>
                                </li>
                            </ol>
                        </div>

                        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Improvements from Feedback</h3>
                            <ul className="space-y-3 text-muted-text">
                                <li className="flex items-start">
                                    <span className="text-accent-600 mr-3">✓</span>
                                    <span>Added certificate courses based on industry requirements</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent-600 mr-3">✓</span>
                                    <span>Extended library access to 24-hour availability</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent-600 mr-3">✓</span>
                                    <span>Increased internet bandwidth capacity</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent-600 mr-3">✓</span>
                                    <span>Implemented mentor-mentee programs and remedial coaching</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent-600 mr-3">✓</span>
                                    <span>Enhanced career guidance and entrepreneurship development programs</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
