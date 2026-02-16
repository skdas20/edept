import PageHeader from "@/components/layout/PageHeader";

export default function Holidays() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="List of Holidays"
                description="Academic Year 2025-26 Holiday Schedule"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Holiday List 2025-26</h2>
                        <p className="text-lg text-muted-text mb-8">
                            List of holidays for the academic year 2025-26 as per the institutional calendar. 
                            Please note that this list is subject to change based on government notifications.
                        </p>

                        {/* National Holidays */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                                <span className="w-2 h-8 bg-primary rounded mr-3"></span>
                                National Holidays
                            </h3>
                            <div className="space-y-3">
                                <div className="bg-primary-50 rounded-xl p-4 flex justify-between items-center">
                                    <div>
                                        <h4 className="font-bold text-primary">Republic Day</h4>
                                        <p className="text-sm text-muted-text">Sunday</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-primary">January 26, 2026</p>
                                    </div>
                                </div>

                                <div className="bg-primary-50 rounded-xl p-4 flex justify-between items-center">
                                    <div>
                                        <h4 className="font-bold text-primary">Independence Day</h4>
                                        <p className="text-sm text-muted-text">Saturday</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-primary">August 15, 2025</p>
                                    </div>
                                </div>

                                <div className="bg-primary-50 rounded-xl p-4 flex justify-between items-center">
                                    <div>
                                        <h4 className="font-bold text-primary">Gandhi Jayanti</h4>
                                        <p className="text-sm text-muted-text">Thursday</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-primary">October 2, 2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Festival Holidays */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                                <span className="w-2 h-8 bg-accent-600 rounded mr-3"></span>
                                Festival Holidays
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-accent-50 rounded-xl p-4">
                                    <h4 className="font-bold text-primary mb-1">Holi</h4>
                                    <p className="text-sm text-muted-text">March 2026</p>
                                </div>

                                <div className="bg-accent-50 rounded-xl p-4">
                                    <h4 className="font-bold text-primary mb-1">Good Friday</h4>
                                    <p className="text-sm text-muted-text">April 2026</p>
                                </div>

                                <div className="bg-accent-50 rounded-xl p-4">
                                    <h4 className="font-bold text-primary mb-1">Eid-ul-Fitr</h4>
                                    <p className="text-sm text-muted-text">TBA</p>
                                </div>

                                <div className="bg-accent-50 rounded-xl p-4">
                                    <h4 className="font-bold text-primary mb-1">Eid-ul-Adha</h4>
                                    <p className="text-sm text-muted-text">TBA</p>
                                </div>

                                <div className="bg-accent-50 rounded-xl p-4">
                                    <h4 className="font-bold text-primary mb-1">Durga Puja</h4>
                                    <p className="text-sm text-muted-text">October 2025</p>
                                </div>

                                <div className="bg-accent-50 rounded-xl p-4">
                                    <h4 className="font-bold text-primary mb-1">Diwali</h4>
                                    <p className="text-sm text-muted-text">October/November 2025</p>
                                </div>

                                <div className="bg-accent-50 rounded-xl p-4">
                                    <h4 className="font-bold text-primary mb-1">Christmas</h4>
                                    <p className="text-sm text-muted-text">December 25, 2025</p>
                                </div>

                                <div className="bg-accent-50 rounded-xl p-4">
                                    <h4 className="font-bold text-primary mb-1">Saraswati Puja</h4>
                                    <p className="text-sm text-muted-text">January/February 2026</p>
                                </div>
                            </div>
                        </div>

                        {/* Semester Breaks */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                                <span className="w-2 h-8 bg-green-600 rounded mr-3"></span>
                                Semester Breaks
                            </h3>
                            <div className="space-y-3">
                                <div className="bg-green-50 rounded-xl p-4">
                                    <h4 className="font-bold text-primary mb-2">Winter Break</h4>
                                    <p className="text-muted-text">December 2025 - January 2026</p>
                                    <p className="text-sm text-muted-text mt-1">Between Odd and Even Semesters</p>
                                </div>

                                <div className="bg-green-50 rounded-xl p-4">
                                    <h4 className="font-bold text-primary mb-2">Summer Break</h4>
                                    <p className="text-muted-text">June - July 2026</p>
                                    <p className="text-sm text-muted-text mt-1">Between Even and Odd Semesters</p>
                                </div>

                                <div className="bg-green-50 rounded-xl p-4">
                                    <h4 className="font-bold text-primary mb-2">Puja Vacation</h4>
                                    <p className="text-muted-text">October 2025</p>
                                    <p className="text-sm text-muted-text mt-1">Durga Puja Festival Break</p>
                                </div>
                            </div>
                        </div>

                        {/* Important Notes */}
                        <div className="bg-blue-50 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-primary mb-4">Important Notes</h3>
                            <ul className="space-y-3 text-muted-text">
                                <li className="flex items-start">
                                    <span className="text-accent-600 mr-3 mt-1">•</span>
                                    <span>Dates for some festivals are tentative and will be confirmed based on lunar calendar</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent-600 mr-3 mt-1">•</span>
                                    <span>Additional holidays may be declared by the government or institution</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent-600 mr-3 mt-1">•</span>
                                    <span>Compensatory classes may be scheduled for holidays falling on working days</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent-600 mr-3 mt-1">•</span>
                                    <span>Students are advised to check the notice board regularly for updates</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent-600 mr-3 mt-1">•</span>
                                    <span>For the latest holiday list, please refer to the official academic calendar</span>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-8 text-center">
                            <p className="text-muted-text">
                                For queries regarding holidays and academic calendar, please contact:<br />
                                <strong>Email:</strong> eee.iemk@gmail.com | <strong>Phone:</strong> +91 33 2357 2969
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
