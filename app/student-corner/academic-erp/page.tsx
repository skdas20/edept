import PageHeader from "@/components/layout/PageHeader";

export default function AcademicERP() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Academic ERP" description="Student Academic Management System" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Academic ERP System</h2>
                        <p className="text-lg text-muted-text mb-12">
                            Access your academic records, attendance, grades, and course materials through our integrated 
                            Enterprise Resource Planning (ERP) system.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">ERP Features</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>View Attendance Records</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Check Examination Results</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Access Course Materials</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Download Admit Cards</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Fee Payment Status</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Academic Calendar</span></li>
                                </ul>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Access Portal</h3>
                                <p className="text-muted-text mb-6">
                                    Login to the IEM Academic ERP portal using your student credentials to access all 
                                    academic services and information.
                                </p>
                                <a 
                                    href="https://www.iemcrp.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block bg-primary text-white px-8 py-3 rounded-xl hover:bg-primary-dark transition-colors"
                                >
                                    Access ERP Portal
                                </a>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Need Help?</h3>
                            <p className="text-muted-text mb-4">
                                For any issues with ERP access or technical support, contact the IT helpdesk or 
                                department office.
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
