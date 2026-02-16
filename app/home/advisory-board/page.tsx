import PageHeader from "@/components/layout/PageHeader";

export default function AdvisoryBoard() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Advisory Board"
                description="Guiding Excellence in Electronics & Communication Engineering"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-3xl font-bold text-primary mb-6">Department Advisory Board</h2>
                            
                            <p className="text-muted-text leading-relaxed mb-8">
                                The Advisory Board plays a crucial role in guiding the department's academic and research initiatives. 
                                Comprising distinguished academicians, industry experts, and alumni, the board provides strategic direction 
                                for curriculum development, research priorities, and industry collaboration.
                            </p>

                            <div className="bg-primary-50 rounded-2xl p-8 mb-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Board Objectives</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Provide strategic guidance on curriculum design and updates</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Foster industry-academia collaboration and partnerships</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Advise on research priorities and emerging technologies</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Support student placement and career development initiatives</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-3 mt-1">•</span>
                                        <span>Review and recommend improvements in teaching-learning processes</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Meeting Schedule</h3>
                                <p className="text-muted-text">
                                    The Advisory Board meets periodically to review department progress, discuss challenges, 
                                    and provide recommendations for continuous improvement in academic excellence and research output.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
