import PageHeader from "@/components/layout/PageHeader";

export default function Calendar() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Calendar"
                description="Department Events and Important Dates"
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12 mb-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">Department Calendar</h2>
                        <p className="text-lg text-muted-text mb-8">
                            Stay updated with all department events, academic schedules, holidays, and important dates.
                        </p>

                        {/* Quick Links */}
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <a href="/home/academic-calendar" className="bg-primary-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-3">📅</div>
                                <h3 className="text-xl font-bold text-primary mb-2">Academic Calendar</h3>
                                <p className="text-sm text-muted-text">Semester schedules, exam dates, and academic activities</p>
                            </a>

                            <a href="https://iem.edu.in/list-of-holidays/" target="_blank" rel="noopener noreferrer" className="bg-accent-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-3">🎉</div>
                                <h3 className="text-xl font-bold text-primary mb-2">Holiday List</h3>
                                <p className="text-sm text-muted-text">National holidays, festivals, and semester breaks</p>
                            </a>

                            <a href="/events" className="bg-green-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-3">🎯</div>
                                <h3 className="text-xl font-bold text-primary mb-2">Events</h3>
                                <p className="text-sm text-muted-text">Technical events, workshops, seminars, and conferences</p>
                            </a>
                        </div>

                        {/* Google Calendar Embed */}
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-6">Live Calendar</h3>
                            <div className="w-full rounded-xl overflow-hidden shadow-lg">
                                <iframe 
                                    src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata" 
                                    style={{ border: 0 }} 
                                    width="100%" 
                                    height="600" 
                                    frameBorder="0" 
                                    scrolling="no"
                                    title="Department Calendar"
                                ></iframe>
                            </div>
                            <p className="text-sm text-muted-text mt-4 text-center">
                                Calendar source: en.indian#holiday@group.v.calendar.google.com
                            </p>
                        </div>
                    </div>

                    {/* Upcoming Events Preview */}
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Upcoming Events</h2>
                        
                        <div className="space-y-4">
                            <div className="bg-primary-50 rounded-xl p-6 flex items-start justify-between">
                                <div>
                                    <h4 className="font-bold text-primary text-lg mb-1">SYTRON 2025</h4>
                                    <p className="text-muted-text mb-2">Technical Extravaganza with IoT workshops and competitions</p>
                                    <p className="text-sm text-accent-600 font-semibold">August 30-31, 2025</p>
                                </div>
                                <a href="/events" className="text-accent-600 font-semibold hover:underline whitespace-nowrap">
                                    View Details →
                                </a>
                            </div>

                            <div className="bg-accent-50 rounded-xl p-6 flex items-start justify-between">
                                <div>
                                    <h4 className="font-bold text-primary text-lg mb-1">Even Semester Classes</h4>
                                    <p className="text-muted-text mb-2">Classes commence for all B.Tech and M.Tech students</p>
                                    <p className="text-sm text-accent-600 font-semibold">January 5, 2026</p>
                                </div>
                                <a href="/academics/routine" className="text-accent-600 font-semibold hover:underline whitespace-nowrap">
                                    View Schedule →
                                </a>
                            </div>

                            <div className="bg-green-50 rounded-xl p-6 flex items-start justify-between">
                                <div>
                                    <h4 className="font-bold text-primary text-lg mb-1">Mid-Semester Examinations</h4>
                                    <p className="text-muted-text mb-2">Mid-term exams for Even Semester 2026</p>
                                    <p className="text-sm text-accent-600 font-semibold">March 2026</p>
                                </div>
                                <a href="/home/academic-calendar" className="text-accent-600 font-semibold hover:underline whitespace-nowrap">
                                    Full Calendar →
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <a href="/events" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                                View All Events
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
