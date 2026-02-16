import PageHeader from "@/components/layout/PageHeader";

export default function CareerGuidanceCell() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Career Guidance Cell (CGC)"
                description="Empowering Students for Successful Careers"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">About Career Guidance Cell</h2>
                        <p className="text-lg text-muted-text leading-relaxed mb-8">
                            The Career Guidance Cell (CGC) is dedicated to preparing students for successful careers in 
                            electronics and communication engineering through comprehensive training, placement support, 
                            and industry connections.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-6 text-center">
                                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                                <div className="text-muted-text">Companies Visited</div>
                            </div>
                            <div className="bg-accent-50 rounded-2xl p-6 text-center">
                                <div className="text-4xl font-bold text-accent-600 mb-2">85%</div>
                                <div className="text-muted-text">Placement Rate</div>
                            </div>
                            <div className="bg-green-50 rounded-2xl p-6 text-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                                <div className="text-muted-text">Training Programs</div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-primary-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Services Offered</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <ul className="space-y-3 text-muted-text">
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-3 mt-1">•</span>
                                            <span>Resume building and review</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-3 mt-1">•</span>
                                            <span>Mock interviews and group discussions</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-3 mt-1">•</span>
                                            <span>Aptitude and technical training</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-3 mt-1">•</span>
                                            <span>Soft skills development</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-3 text-muted-text">
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-3 mt-1">•</span>
                                            <span>Industry interaction sessions</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-3 mt-1">•</span>
                                            <span>Career counseling and guidance</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-3 mt-1">•</span>
                                            <span>Higher studies guidance</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-3 mt-1">•</span>
                                            <span>Entrepreneurship support</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Training Programs</h3>
                                <p className="text-muted-text mb-4">
                                    CGC organizes regular training programs to enhance student employability:
                                </p>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Core subject mock interviews</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Coding and programming workshops</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Communication skills enhancement</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Personality development sessions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Industry-specific certification courses</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-green-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Contact CGC</h3>
                                <p className="text-muted-text">
                                    For placement assistance, career guidance, or training program information, 
                                    please contact the Career Guidance Cell.
                                </p>
                                <div className="mt-4 text-muted-text">
                                    <p><strong>Email:</strong> eee.iemk@gmail.com</p>
                                    <p><strong>Office:</strong> ECE Department, IEM Gurukul</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
