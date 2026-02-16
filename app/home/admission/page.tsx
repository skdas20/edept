import PageHeader from "@/components/layout/PageHeader";

export default function Admission() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Admission"
                description="Join the ECE Department at IEM Gurukul"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Program Overview */}
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">Programs Offered</h2>
                        <p className="text-lg text-muted-text mb-8">
                            The Department of Electronics & Communication Engineering offers undergraduate and postgraduate 
                            programs with NBA accreditation and AICTE approval.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* BTech Program */}
                            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                                        <span className="text-white font-bold text-xl">B</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-primary">B.Tech ECE</h3>
                                        <p className="text-sm text-muted-text">4 Years | NBA Accredited</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-muted-text mb-6">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Duration: 4 Years (8 Semesters)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Established: 1996</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Intake: As per AICTE norms</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Affiliation: MAKAUT (formerly WBUT)</span>
                                    </li>
                                </ul>
                                <div className="bg-white rounded-xl p-4">
                                    <p className="text-sm font-semibold text-primary mb-2">Eligibility:</p>
                                    <p className="text-sm text-muted-text">
                                        10+2 with Physics, Chemistry, and Mathematics. Admission through WBJEE/JEE Main.
                                    </p>
                                </div>
                            </div>

                            {/* MTech Program */}
                            <div className="bg-gradient-to-br from-accent-50 to-green-50 rounded-2xl p-8">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-white font-bold text-xl">M</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-primary">M.Tech ECE</h3>
                                        <p className="text-sm text-muted-text">2 Years | VLSI & Microelectronics</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-muted-text mb-6">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Duration: 2 Years (4 Semesters)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Established: 2006</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Specialization: VLSI & Microelectronics</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Affiliation: MAKAUT</span>
                                    </li>
                                </ul>
                                <div className="bg-white rounded-xl p-4">
                                    <p className="text-sm font-semibold text-primary mb-2">Eligibility:</p>
                                    <p className="text-sm text-muted-text">
                                        B.Tech/B.E. in ECE or related fields. Admission through GATE/PGET.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Admission Process */}
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">Admission Process</h2>
                        
                        <div className="space-y-6">
                            <div className="bg-primary-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-4">For B.Tech Admission</h3>
                                <ol className="space-y-3 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="font-bold text-primary mr-3">1.</span>
                                        <span>Appear for WBJEE or JEE Main examination</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-bold text-primary mr-3">2.</span>
                                        <span>Participate in WBJEEB counseling process</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-bold text-primary mr-3">3.</span>
                                        <span>Select IEM Gurukul - ECE as your preferred choice</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-bold text-primary mr-3">4.</span>
                                        <span>Complete document verification and admission formalities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-bold text-primary mr-3">5.</span>
                                        <span>Pay admission fees and confirm your seat</span>
                                    </li>
                                </ol>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-4">For M.Tech Admission</h3>
                                <ol className="space-y-3 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="font-bold text-primary mr-3">1.</span>
                                        <span>Qualify GATE examination (preferred) or appear for PGET</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-bold text-primary mr-3">2.</span>
                                        <span>Apply through MAKAUT counseling portal</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-bold text-primary mr-3">3.</span>
                                        <span>Attend counseling session and select IEM Gurukul</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-bold text-primary mr-3">4.</span>
                                        <span>Submit required documents for verification</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-bold text-primary mr-3">5.</span>
                                        <span>Complete admission formalities and fee payment</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose ECE at IEM */}
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">Why Choose ECE at IEM?</h2>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-3">🏆</div>
                                <h4 className="font-bold text-primary mb-2">NBA Accredited</h4>
                                <p className="text-sm text-muted-text">24 years of continuous NBA accreditation</p>
                            </div>

                            <div className="bg-accent-50 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-3">👨‍🏫</div>
                                <h4 className="font-bold text-primary mb-2">Expert Faculty</h4>
                                <p className="text-sm text-muted-text">Experienced faculty with Ph.D. and industry expertise</p>
                            </div>

                            <div className="bg-green-50 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-3">🔬</div>
                                <h4 className="font-bold text-primary mb-2">Research Labs</h4>
                                <p className="text-sm text-muted-text">State-of-the-art labs for VLSI, IoT, and embedded systems</p>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-3">💼</div>
                                <h4 className="font-bold text-primary mb-2">Excellent Placements</h4>
                                <p className="text-sm text-muted-text">Strong industry connections and placement support</p>
                            </div>

                            <div className="bg-purple-50 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-3">🌐</div>
                                <h4 className="font-bold text-primary mb-2">Industry Exposure</h4>
                                <p className="text-sm text-muted-text">Regular workshops, seminars, and industrial visits</p>
                            </div>

                            <div className="bg-pink-50 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-3">📚</div>
                                <h4 className="font-bold text-primary mb-2">Modern Curriculum</h4>
                                <p className="text-sm text-muted-text">Updated syllabus aligned with industry requirements</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact for Admission */}
                    <div className="bg-gradient-to-br from-primary to-accent-600 rounded-3xl shadow-lg p-12 text-white">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
                            <p className="text-lg mb-8 opacity-90">
                                For admission queries and detailed information, please contact us
                            </p>
                            
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                                    <div className="text-3xl mb-2">📧</div>
                                    <p className="font-semibold mb-1">Email</p>
                                    <p className="text-sm opacity-90">eee.iemk@gmail.com</p>
                                </div>

                                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                                    <div className="text-3xl mb-2">📞</div>
                                    <p className="font-semibold mb-1">Phone</p>
                                    <p className="text-sm opacity-90">+91 33 2357 2969<br />+91 33 2357 7649</p>
                                </div>

                                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                                    <div className="text-3xl mb-2">🌐</div>
                                    <p className="font-semibold mb-1">Website</p>
                                    <p className="text-sm opacity-90">iem.edu.in</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="https://iem.edu.in/" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                    Visit IEM Website
                                </a>
                                <a href="/contact" className="bg-white/20 backdrop-blur text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
