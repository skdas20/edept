import PageHeader from "@/components/layout/PageHeader";

export default function EngineersPledge() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Engineers' Pledge"
                description="Our Commitment to Excellence and Ethics"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <div className="text-center mb-12">
                            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-4xl font-bold text-primary mb-4">The Engineers&apos; Pledge</h2>
                            <p className="text-muted-text">A solemn commitment to professional excellence and ethical conduct</p>
                        </div>

                        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-10 mb-8">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-lg text-primary font-semibold italic leading-relaxed text-center mb-6">
                                    &ldquo;I pledge to uphold the highest standards of engineering practice and ethics.&rdquo;
                                </p>

                                <div className="space-y-4 text-muted-text">
                                    <p className="leading-relaxed">
                                        I will use my knowledge and skills for the advancement of human welfare and the sustainable
                                        development of society. I recognize my responsibility to the public, my profession, and my employer.
                                    </p>

                                    <p className="leading-relaxed">
                                        I will maintain the highest standards of integrity and honesty in all my professional activities.
                                        I will not engage in any practice that is fraudulent, corrupt, or detrimental to public welfare.
                                    </p>

                                    <p className="leading-relaxed">
                                        I will strive for excellence in my work, continuously updating my knowledge and skills to keep
                                        pace with technological advancements. I will mentor and guide future engineers with dedication.
                                    </p>

                                    <p className="leading-relaxed">
                                        I will respect the environment and work towards sustainable solutions that minimize ecological
                                        impact. I will consider the long-term consequences of my engineering decisions.
                                    </p>

                                    <p className="leading-relaxed">
                                        I will collaborate effectively with colleagues, respecting diverse perspectives and contributing
                                        to a culture of innovation and excellence. I will acknowledge the contributions of others.
                                    </p>

                                    <p className="leading-relaxed font-semibold text-primary text-center mt-8">
                                        I make this pledge voluntarily, understanding the responsibility it entails,
                                        and commit to upholding these principles throughout my professional career.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <h3 className="font-bold text-primary mb-2">Excellence</h3>
                                <p className="text-sm text-muted-text">Commitment to continuous learning and professional growth</p>
                            </div>

                            <div className="bg-accent-50 rounded-xl p-6 text-center">
                                <h3 className="font-bold text-primary mb-2">Ethics</h3>
                                <p className="text-sm text-muted-text">Upholding integrity and honesty in all professional conduct</p>
                            </div>

                            <div className="bg-green-50 rounded-xl p-6 text-center">
                                <h3 className="font-bold text-primary mb-2">Responsibility</h3>
                                <p className="text-sm text-muted-text">Serving society and protecting the environment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
