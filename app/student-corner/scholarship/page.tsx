import PageHeader from "@/components/layout/PageHeader";

export default function StudentScholarship() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Student Scholarship" description="Financial Aid and Scholarship Opportunities" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Scholarship Programs</h2>
                        <p className="text-lg text-muted-text mb-12">
                            IEM offers various scholarship programs to support meritorious and economically disadvantaged 
                            students in pursuing their engineering education.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Merit-Based Scholarships</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Academic Excellence Scholarship</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Entrance Exam Toppers Scholarship</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Semester Topper Awards</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Research Excellence Grants</span></li>
                                </ul>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Need-Based Scholarships</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Financial Aid for Economically Weaker Sections</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>SC/ST/OBC Scholarships</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Minority Community Scholarships</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Girl Child Education Support</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8 mb-12">
                            <h3 className="text-2xl font-bold text-primary mb-4">Government Scholarships</h3>
                            <p className="text-muted-text mb-4">Students can also apply for various government scholarship schemes:</p>
                            <ul className="space-y-2 text-muted-text">
                                <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>West Bengal State Scholarship</span></li>
                                <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Central Sector Scholarship Scheme</span></li>
                                <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>National Scholarship Portal (NSP)</span></li>
                                <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>AICTE Pragati & Saksham Scholarships</span></li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">How to Apply</h3>
                            <p className="text-muted-text mb-4">
                                For scholarship applications and eligibility criteria, contact the department office or 
                                visit the IEM website for detailed information.
                            </p>
                            <p className="text-sm text-muted-text">Email: eee.iemk@gmail.com</p>
                            <p className="text-sm text-muted-text">Phone: +91 33 2357 2969</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
