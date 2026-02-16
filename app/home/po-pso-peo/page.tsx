import PageHeader from "@/components/layout/PageHeader";

export default function POPSOPEO() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="PO, PSO & PEO"
                description="Program Outcomes, Program Specific Outcomes & Program Educational Objectives"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Program Educational Objectives */}
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">Program Educational Objectives (PEO)</h2>
                        <p className="text-muted-text mb-8">
                            The Program Educational Objectives describe what graduates are expected to attain within a few years after graduation.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="bg-primary-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">PEO 1: Professional Excellence</h3>
                                <p className="text-muted-text">
                                    Graduates will demonstrate professional excellence in electronics and communication engineering 
                                    through successful careers in industry, academia, research, or entrepreneurship.
                                </p>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">PEO 2: Continuous Learning</h3>
                                <p className="text-muted-text">
                                    Graduates will engage in lifelong learning to adapt to evolving technologies and contribute 
                                    to technological advancement in their chosen fields.
                                </p>
                            </div>

                            <div className="bg-green-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">PEO 3: Ethical & Social Responsibility</h3>
                                <p className="text-muted-text">
                                    Graduates will demonstrate ethical behavior, social responsibility, and effective communication 
                                    skills while working in multidisciplinary teams.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Program Outcomes */}
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">Program Outcomes (PO)</h2>
                        <p className="text-muted-text mb-8">
                            Program Outcomes describe what students are expected to know and be able to do by the time of graduation.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-primary-50 rounded-xl p-5">
                                <h4 className="font-bold text-primary mb-2">PO 1: Engineering Knowledge</h4>
                                <p className="text-sm text-muted-text">Apply knowledge of mathematics, science, and engineering fundamentals</p>
                            </div>

                            <div className="bg-accent-50 rounded-xl p-5">
                                <h4 className="font-bold text-primary mb-2">PO 2: Problem Analysis</h4>
                                <p className="text-sm text-muted-text">Identify, formulate, and analyze complex engineering problems</p>
                            </div>

                            <div className="bg-green-50 rounded-xl p-5">
                                <h4 className="font-bold text-primary mb-2">PO 3: Design/Development of Solutions</h4>
                                <p className="text-sm text-muted-text">Design solutions for complex problems considering public health, safety, and welfare</p>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-5">
                                <h4 className="font-bold text-primary mb-2">PO 4: Investigation</h4>
                                <p className="text-sm text-muted-text">Conduct investigations of complex problems using research-based knowledge</p>
                            </div>

                            <div className="bg-purple-50 rounded-xl p-5">
                                <h4 className="font-bold text-primary mb-2">PO 5: Modern Tool Usage</h4>
                                <p className="text-sm text-muted-text">Create, select, and apply appropriate techniques and modern engineering tools</p>
                            </div>

                            <div className="bg-pink-50 rounded-xl p-5">
                                <h4 className="font-bold text-primary mb-2">PO 6: Engineer and Society</h4>
                                <p className="text-sm text-muted-text">Apply reasoning informed by contextual knowledge to assess societal issues</p>
                            </div>

                            <div className="bg-yellow-50 rounded-xl p-5">
                                <h4 className="font-bold text-primary mb-2">PO 7: Environment and Sustainability</h4>
                                <p className="text-sm text-muted-text">Understand the impact of engineering solutions in societal and environmental contexts</p>
                            </div>

                            <div className="bg-indigo-50 rounded-xl p-5">
                                <h4 className="font-bold text-primary mb-2">PO 8: Ethics</h4>
                                <p className="text-sm text-muted-text">Apply ethical principles and commit to professional ethics and responsibilities</p>
                            </div>

                            <div className="bg-red-50 rounded-xl p-5">
                                <h4 className="font-bold text-primary mb-2">PO 9: Individual and Team Work</h4>
                                <p className="text-sm text-muted-text">Function effectively as an individual and as a member or leader in diverse teams</p>
                            </div>

                            <div className="bg-teal-50 rounded-xl p-5">
                                <h4 className="font-bold text-primary mb-2">PO 10: Communication</h4>
                                <p className="text-sm text-muted-text">Communicate effectively on complex engineering activities with the engineering community</p>
                            </div>

                            <div className="bg-orange-50 rounded-xl p-5">
                                <h4 className="font-bold text-primary mb-2">PO 11: Project Management</h4>
                                <p className="text-sm text-muted-text">Demonstrate knowledge and understanding of engineering and management principles</p>
                            </div>

                            <div className="bg-cyan-50 rounded-xl p-5">
                                <h4 className="font-bold text-primary mb-2">PO 12: Life-long Learning</h4>
                                <p className="text-sm text-muted-text">Recognize the need for and have the ability to engage in independent and life-long learning</p>
                            </div>
                        </div>
                    </div>

                    {/* Program Specific Outcomes */}
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Program Specific Outcomes (PSO)</h2>
                        <p className="text-muted-text mb-8">
                            Program Specific Outcomes describe what students should be able to do specifically in Electronics & Communication Engineering.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-primary-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">PSO 1: Electronics Systems Design</h3>
                                <p className="text-muted-text">
                                    Ability to design, analyze, and implement electronic circuits and systems for signal processing, 
                                    communication, and embedded applications using modern tools and techniques.
                                </p>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">PSO 2: Communication Systems</h3>
                                <p className="text-muted-text">
                                    Ability to analyze, design, and develop communication systems including wireless, optical, 
                                    and digital communication networks with understanding of emerging technologies.
                                </p>
                            </div>

                            <div className="bg-green-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">PSO 3: Research & Innovation</h3>
                                <p className="text-muted-text">
                                    Ability to conduct research, innovate, and contribute to technological advancement in areas 
                                    such as VLSI, embedded systems, IoT, DSP, and image processing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
