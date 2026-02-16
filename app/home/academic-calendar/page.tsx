import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function AcademicCalendar() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Academic Calendar"
                description="Important Dates and Events for Academic Year 2025-26"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">Academic Year 2025-26</h2>
                        <p className="text-lg text-muted-text mb-8">
                            The academic calendar outlines important dates for the academic year including semester schedules, 
                            examination dates, holidays, and other significant events.
                        </p>

                        {/* Semester Overview */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-6">
                                <h3 className="text-2xl font-bold text-primary mb-4">Odd Semester 2025</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex justify-between">
                                        <span className="font-semibold">Semester Start:</span>
                                        <span>July 2025</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-semibold">Mid-Sem Exams:</span>
                                        <span>September 2025</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-semibold">End-Sem Exams:</span>
                                        <span>November 2025</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-semibold">Semester End:</span>
                                        <span>December 2025</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-6">
                                <h3 className="text-2xl font-bold text-primary mb-4">Even Semester 2026</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex justify-between">
                                        <span className="font-semibold">Semester Start:</span>
                                        <span>January 5, 2026</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-semibold">Mid-Sem Exams:</span>
                                        <span>March 2026</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-semibold">End-Sem Exams:</span>
                                        <span>May 2026</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="font-semibold">Semester End:</span>
                                        <span>June 2026</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Important Events */}
                        <div className="bg-green-50 rounded-2xl p-8 mb-12">
                            <h3 className="text-2xl font-bold text-primary mb-6">Important Events</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-primary mb-3">Technical Events</h4>
                                    <ul className="space-y-2 text-muted-text">
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-2">•</span>
                                            <span>SYTRON 2025 - August 30-31, 2025</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-2">•</span>
                                            <span>Bengal E-Summit - TBA</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-2">•</span>
                                            <span>Tech-Fest - TBA</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-2">•</span>
                                            <span>Project Exhibition - May 2026</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-primary mb-3">Academic Activities</h4>
                                    <ul className="space-y-2 text-muted-text">
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-2">•</span>
                                            <span>Faculty Development Programs - Quarterly</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-2">•</span>
                                            <span>Workshops & Seminars - Monthly</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-2">•</span>
                                            <span>Industrial Visits - Semester-wise</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-600 mr-2">•</span>
                                            <span>Guest Lectures - Bi-monthly</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Calendar Images */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-primary mb-4">Academic Calendar Documents</h3>
                            <p className="text-muted-text mb-6">
                                Download the detailed academic calendar for complete information on all academic activities, 
                                examination schedules, and important dates.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                                    <div className="relative h-96">
                                        <Image
                                            src="/images/academic-calendar/0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e.jpg"
                                            alt="Academic Calendar 2025-26"
                                            fill
                                            className="object-contain p-4"
                                        />
                                    </div>
                                    <div className="p-4 bg-primary-50">
                                        <p className="text-sm font-semibold text-primary text-center">Academic Calendar 2025-26</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                                    <div className="relative h-96">
                                        <Image
                                            src="/images/academic-calendar/1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f.jpg"
                                            alt="Examination Schedule"
                                            fill
                                            className="object-contain p-4"
                                        />
                                    </div>
                                    <div className="p-4 bg-accent-50">
                                        <p className="text-sm font-semibold text-primary text-center">Examination Schedule</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Download Links */}
                        <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
                            <h3 className="text-xl font-bold text-primary mb-4">Download Academic Calendar</h3>
                            <p className="text-muted-text mb-6">
                                For the complete academic calendar with all details, please download the official document 
                                or contact the academic office.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="#" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                                    Download PDF
                                </a>
                                <a href="/contact" className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                                    Contact Office
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
