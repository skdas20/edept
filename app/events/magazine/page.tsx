import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function Magazine() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Magazine" description="Department Magazine and Publications" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">ECE Department Magazine</h2>
                        <p className="text-lg text-muted-text mb-8">
                            Our department magazine showcases student creativity, technical articles, research highlights, 
                            and department achievements throughout the academic year.
                        </p>

                        <div className="mb-12">
                            <Image
                                src="/images/magazine/655712d24e661849e1dad3aa41497f9f.jpg"
                                alt="Department Magazine"
                                width={800}
                                height={600}
                                className="rounded-2xl shadow-lg w-full object-cover"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Magazine Features</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Technical Articles by Students and Faculty</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Research Paper Summaries</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Department News and Events</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Student Achievements and Awards</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Creative Writing and Photography</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-600 mr-2">•</span>
                                        <span>Alumni Contributions</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Contribute</h3>
                                <p className="text-muted-text mb-4">
                                    We welcome contributions from students, faculty, and alumni. Share your technical 
                                    insights, research work, or creative content.
                                </p>
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold text-primary">Contact:</p>
                                    <p className="text-sm text-muted-text">eee.iemk@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Publication Schedule</h3>
                            <p className="text-muted-text">
                                The department magazine is published annually, featuring the best contributions from 
                                students and faculty throughout the academic year. Stay tuned for the latest edition!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
