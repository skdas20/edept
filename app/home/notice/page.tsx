import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function Notice() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Notice Board"
                description="Important Announcements and Updates"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-primary mb-4">Latest Notices</h2>
                            <p className="text-muted-text">
                                Stay updated with the latest announcements, circulars, and important information from the ECE Department.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* IEEE AP-S Achievement */}
                            <div className="bg-yellow-50 rounded-2xl p-6 border-l-4 border-yellow-500">
                                <div className="flex items-start justify-between mb-4">
                                    <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">ACHIEVEMENT</span>
                                    <span className="text-sm text-muted-text">April 2026</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">IEEE AP-S Undergraduate Summer Research Scholarship 2026</h3>
                                <p className="text-muted-text mb-5">
                                    <strong>Arjab Sengupta</strong> (Undergraduate Researcher, Dept. of ECE, IEM Kolkata) has been awarded the prestigious{" "}
                                    <strong>IEEE Antennas &amp; Propagation Society Undergraduate Summer Research Scholarship (USRS) 2026</strong>,
                                    carrying a grant of <strong>$3,000 USD</strong>. He is among only{" "}
                                    <strong>30 undergraduates selected worldwide</strong> across IEEE Regions 1 through 10,
                                    recognising exceptional promise in antennas, propagation, and electromagnetics research.
                                </p>
                                <div className="flex flex-wrap gap-6 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400 flex-shrink-0">
                                            <Image
                                                src="/images/achievements/arjab-sengupta.jpg"
                                                alt="Arjab Sengupta"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary text-sm">Arjab Sengupta</p>
                                            <p className="text-xs text-muted-text">Awardee · Undergraduate Researcher</p>
                                            <p className="text-xs text-muted-text">Dept. of ECE, IEM Kolkata</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400 flex-shrink-0">
                                            <Image
                                                src="/images/achievements/gobinda-sen.jpg"
                                                alt="Prof. Dr. Gobinda Sen"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary text-sm">Prof. Dr. Gobinda Sen</p>
                                            <p className="text-xs text-muted-text">Mentor · Faculty, Dept. of ECE</p>
                                            <p className="text-xs text-muted-text">IEM Kolkata</p>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-yellow-700 font-semibold">Heartfelt Congratulations, Arjab!</span>
                            </div>

                            {/* Notice Item */}
                            <div className="bg-primary-50 rounded-2xl p-6 border-l-4 border-primary">
                                <div className="flex items-start justify-between mb-3">
                                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
                                    <span className="text-sm text-muted-text">February 2026</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">Even Semester 2026 Class Schedule</h3>
                                <p className="text-muted-text mb-3">
                                    Class schedules for B.Tech 2nd, 3rd, 4th Year and M.Tech 1st Year (Even Semester 2026) 
                                    are now available. Classes commence from January 5, 2026.
                                </p>
                                <a href="/academics/routine" className="text-accent-600 font-semibold hover:underline">
                                    View Schedule →
                                </a>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-6 border-l-4 border-accent-600">
                                <div className="flex items-start justify-between mb-3">
                                    <span className="bg-accent-600 text-white text-xs font-bold px-3 py-1 rounded-full">IMPORTANT</span>
                                    <span className="text-sm text-muted-text">January 2026</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">SYTRON 2025 - Technical Extravaganza</h3>
                                <p className="text-muted-text mb-3">
                                    Registration open for SYTRON 2025 (August 30-31, 2025). Participate in IoT workshops, 
                                    robotic competitions, coding challenges, and more.
                                </p>
                                <a href="/events" className="text-accent-600 font-semibold hover:underline">
                                    Learn More →
                                </a>
                            </div>

                            <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-600">
                                <div className="flex items-start justify-between mb-3">
                                    <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">ACADEMIC</span>
                                    <span className="text-sm text-muted-text">Ongoing</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">Academic ERP Portal</h3>
                                <p className="text-muted-text mb-3">
                                    Students can access course materials, assignments, grades, and attendance through the 
                                    Academic ERP portal at iemcrp.com
                                </p>
                                <a href="https://www.iemcrp.com/" target="_blank" rel="noopener noreferrer" className="text-accent-600 font-semibold hover:underline">
                                    Access Portal →
                                </a>
                            </div>

                            <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-600">
                                <div className="flex items-start justify-between mb-3">
                                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">PLACEMENT</span>
                                    <span className="text-sm text-muted-text">Ongoing</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">Career Guidance Cell Activities</h3>
                                <p className="text-muted-text mb-3">
                                    Mock interviews, aptitude training, and placement preparation sessions are being conducted 
                                    regularly. Contact CGC for schedule and registration.
                                </p>
                                <a href="/home/cgc" className="text-accent-600 font-semibold hover:underline">
                                    View Details →
                                </a>
                            </div>

                            <div className="bg-purple-50 rounded-2xl p-6 border-l-4 border-purple-600">
                                <div className="flex items-start justify-between mb-3">
                                    <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">RESEARCH</span>
                                    <span className="text-sm text-muted-text">Ongoing</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">Research Lab Access</h3>
                                <p className="text-muted-text mb-3">
                                    Students interested in research projects can access IEDC-ECE, AMRL, and IoT Research Lab 
                                    facilities. Contact respective lab coordinators for access.
                                </p>
                                <a href="/research" className="text-accent-600 font-semibold hover:underline">
                                    Explore Labs →
                                </a>
                            </div>
                        </div>

                        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
                            <h3 className="text-xl font-bold text-primary mb-3">Stay Connected</h3>
                            <p className="text-muted-text mb-4">
                                For urgent notices and updates, please check your institutional email regularly 
                                or contact the department office.
                            </p>
                            <p className="text-muted-text">
                                <strong>Email:</strong> eee.iemk@gmail.com<br />
                                <strong>Phone:</strong> +91 33 2357 2969, +91 33 2357 7649
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
