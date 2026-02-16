import PageHeader from "@/components/layout/PageHeader";

export default function EventReports() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Event Reports" description="Documentation of Department Events and Activities" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Event Reports</h2>
                        <p className="text-lg text-muted-text mb-8">Comprehensive reports and documentation of all department events, conferences, workshops, and activities.</p>
                        <div className="space-y-6">
                            <div className="bg-primary-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-2">Technical Events</h3>
                                <p className="text-muted-text">Reports from SYTRON, Bengal E-Summit, and other technical festivals</p>
                            </div>
                            <div className="bg-accent-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-2">Conferences & Seminars</h3>
                                <p className="text-muted-text">Documentation of academic conferences and expert lecture series</p>
                            </div>
                            <div className="bg-green-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-2">Workshops & Training</h3>
                                <p className="text-muted-text">Reports from skill development workshops and training programs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
