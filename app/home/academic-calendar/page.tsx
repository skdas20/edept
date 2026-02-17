import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

const technicalEvents = [
    "SYTRON 2025 - August 30-31, 2025",
    "Bengal E-Summit - TBA",
    "Tech-Fest - TBA",
    "Project Exhibition - May 2026",
];

const academicActivities = [
    "Faculty Development Programs - Quarterly",
    "Workshops and Seminars - Monthly",
    "Industrial Visits - Semester-wise",
    "Guest Lectures - Bi-monthly",
];

export default function AcademicCalendar() {
    return (
        <div className="flex min-h-screen flex-col">
            <PageHeader
                title="Academic Calendar"
                description="Important dates and events for Academic Year 2025-26"
            />

            <section className="bg-surface py-20">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="section-panel p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-primary">Academic Year 2025-26</h2>
                        <p className="mt-4 text-lg text-muted-text">
                            The academic calendar outlines semester schedules, examination timelines, holidays, and key departmental events.
                        </p>

                        <div className="mt-10 grid gap-8 md:grid-cols-2">
                            <div className="rounded-2xl bg-primary-50 p-6">
                                <h3 className="text-2xl font-bold text-primary">Odd Semester 2025</h3>
                                <ul className="mt-4 space-y-3 text-muted-text">
                                    <li className="flex justify-between"><span className="font-semibold">Semester Start:</span><span>July 2025</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Mid-Sem Exams:</span><span>September 2025</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">End-Sem Exams:</span><span>November 2025</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Semester End:</span><span>December 2025</span></li>
                                </ul>
                            </div>

                            <div className="rounded-2xl bg-accent-50 p-6">
                                <h3 className="text-2xl font-bold text-primary">Even Semester 2026</h3>
                                <ul className="mt-4 space-y-3 text-muted-text">
                                    <li className="flex justify-between"><span className="font-semibold">Semester Start:</span><span>January 5, 2026</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Mid-Sem Exams:</span><span>March 2026</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">End-Sem Exams:</span><span>May 2026</span></li>
                                    <li className="flex justify-between"><span className="font-semibold">Semester End:</span><span>June 2026</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 rounded-2xl bg-green-50 p-8">
                            <h3 className="text-2xl font-bold text-primary">Important Events</h3>
                            <div className="mt-6 grid gap-6 md:grid-cols-2">
                                <div>
                                    <h4 className="font-bold text-primary">Technical Events</h4>
                                    <ul className="mt-3 space-y-2 text-muted-text">
                                        {technicalEvents.map((item) => (
                                            <li key={item} className="flex items-start">
                                                <span className="mr-2 text-accent-600">&bull;</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Academic Activities</h4>
                                    <ul className="mt-3 space-y-2 text-muted-text">
                                        {academicActivities.map((item) => (
                                            <li key={item} className="flex items-start">
                                                <span className="mr-2 text-accent-600">&bull;</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-primary">Academic Calendar Documents</h3>
                            <p className="mt-3 text-muted-text">
                                Download detailed schedules for full information on examinations, classes, and institutional activities.
                            </p>

                            <div className="mt-6 grid gap-6 md:grid-cols-2">
                                <div className="image-frame overflow-hidden rounded-2xl border border-border">
                                    <div className="relative h-80">
                                        <Image
                                            src="/images/home/84b45e96b7f25021e8fa8e91e5bc549e.jpg"
                                            alt="Academic Calendar 2025-26"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="bg-primary-50 p-4">
                                        <p className="text-center text-sm font-semibold text-primary">Academic Calendar 2025-26</p>
                                    </div>
                                </div>

                                <div className="image-frame overflow-hidden rounded-2xl border border-border">
                                    <div className="relative h-80">
                                        <Image
                                            src="/images/home/7628b50bb49f0e895ec067d511c20156.jpg"
                                            alt="Examination Schedule"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="bg-accent-50 p-4">
                                        <p className="text-center text-sm font-semibold text-primary">Examination Schedule</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 rounded-2xl bg-blue-50 p-8 text-center">
                            <h3 className="text-xl font-bold text-primary">Download Academic Calendar</h3>
                            <p className="mx-auto mt-3 max-w-2xl text-muted-text">
                                For the complete official academic calendar and downloadable documents, please contact the academic office.
                            </p>
                            <div className="mt-6 flex flex-wrap justify-center gap-4">
                                <a href="#" className="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark">
                                    Download PDF
                                </a>
                                <a href="/contact" className="rounded-lg border-2 border-primary bg-white px-6 py-3 font-semibold text-primary hover:bg-primary-50">
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
