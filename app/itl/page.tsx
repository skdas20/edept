import PageHeader from "@/components/layout/PageHeader";

export default function InnovativeTeachingLearning() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Innovative Teaching Learning (ITL)" description="Modern Learning Platforms and Resources" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Innovative Teaching Learning (ITL)</h2>
                        <p className="text-lg text-muted-text mb-12">
                            IEM provides state-of-the-art digital learning platforms and resources to enhance the 
                            teaching-learning experience through technology-enabled education.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <a 
                                href="https://www.iemlearning.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-primary-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                            >
                                <div className="text-5xl mb-4">🎓</div>
                                <h3 className="text-2xl font-bold text-primary mb-3">IEM Learning Portal</h3>
                                <p className="text-muted-text mb-4">
                                    Main learning management system for course materials, assignments, and online classes.
                                </p>
                                <span className="text-accent-600 font-semibold">Visit Portal →</span>
                            </a>

                            <a 
                                href="https://www.iemcrp.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-accent-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                            >
                                <div className="text-5xl mb-4">📊</div>
                                <h3 className="text-2xl font-bold text-primary mb-3">Academic Management</h3>
                                <p className="text-muted-text mb-4">
                                    Comprehensive ERP system for attendance, grades, fee payment, and academic records.
                                </p>
                                <span className="text-accent-600 font-semibold">Access ERP →</span>
                            </a>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-green-50 rounded-2xl p-6">
                                <div className="text-4xl mb-3">📚</div>
                                <h3 className="text-xl font-bold text-primary mb-2">NPTEL Swayam</h3>
                                <p className="text-muted-text text-sm mb-3">
                                    Access to national-level online courses and certifications
                                </p>
                                <a 
                                    href="https://swayam.gov.in/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-accent-600 font-semibold text-sm hover:underline"
                                >
                                    Visit NPTEL →
                                </a>
                            </div>

                            <div className="bg-blue-50 rounded-2xl p-6">
                                <div className="text-4xl mb-3">📺</div>
                                <h3 className="text-xl font-bold text-primary mb-2">YouTube Gymkhana TV</h3>
                                <p className="text-muted-text text-sm mb-3">
                                    Video lectures, tutorials, and educational content
                                </p>
                                <a 
                                    href="https://www.youtube.com/@iemkolkata" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-accent-600 font-semibold text-sm hover:underline"
                                >
                                    Watch Videos →
                                </a>
                            </div>

                            <div className="bg-purple-50 rounded-2xl p-6">
                                <div className="text-4xl mb-3">🎓</div>
                                <h3 className="text-xl font-bold text-primary mb-2">Alumni Association</h3>
                                <p className="text-muted-text text-sm mb-3">
                                    Connect with alumni network and mentorship programs
                                </p>
                                <a 
                                    href="/alumni" 
                                    className="text-accent-600 font-semibold text-sm hover:underline"
                                >
                                    Join Network →
                                </a>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 mb-12">
                            <h3 className="text-2xl font-bold text-primary mb-4">ITL Features</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">✓</span>
                                        <span>Online Course Materials & Lecture Notes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">✓</span>
                                        <span>Video Lectures & Recorded Sessions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">✓</span>
                                        <span>Online Assignments & Assessments</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">✓</span>
                                        <span>Discussion Forums & Peer Learning</span>
                                    </li>
                                </ul>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">✓</span>
                                        <span>Live Virtual Classes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">✓</span>
                                        <span>Digital Library Resources</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">✓</span>
                                        <span>Mobile App Access</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3">✓</span>
                                        <span>Progress Tracking & Analytics</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-orange-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">For Students</h3>
                                <p className="text-muted-text mb-4">
                                    Access all learning resources, submit assignments, attend online classes, and track 
                                    your academic progress through the ITL platforms.
                                </p>
                                <ul className="space-y-2 text-muted-text text-sm">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>24/7 Access to Course Materials</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Interactive Learning Tools</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Instant Feedback on Assessments</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-pink-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">For Faculty</h3>
                                <p className="text-muted-text mb-4">
                                    Create and manage courses, upload content, conduct online assessments, and monitor 
                                    student progress efficiently.
                                </p>
                                <ul className="space-y-2 text-muted-text text-sm">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Easy Content Management</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Automated Grading System</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Student Analytics Dashboard</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
