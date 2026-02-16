import PageHeader from "@/components/layout/PageHeader";

export default function Newsletter() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Newsletter" description="Department Newsletter and Updates" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">ECE Department Newsletter</h2>
                        <p className="text-lg text-muted-text mb-8">Stay updated with the latest news, achievements, and activities from the ECE Department through our regular newsletters.</p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-primary-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Newsletter Features</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Department News and Updates</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Student Achievements</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Faculty Publications</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Upcoming Events</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Research Highlights</span></li>
                                </ul>
                            </div>
                            <div className="bg-accent-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Subscribe</h3>
                                <p className="text-muted-text mb-4">Get the latest newsletter delivered to your inbox.</p>
                                <p className="text-sm text-muted-text">Contact: eee.iemk@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
