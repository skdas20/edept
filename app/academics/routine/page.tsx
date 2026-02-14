import React from 'react';
import PageHeader from "@/components/layout/PageHeader";

export default function Routine() {
    const scheduleData = [
        { year: "1st Year", link: "#", updated: "Jan 10, 2026" },
        { year: "2nd Year", link: "#", updated: "Jan 12, 2026" },
        { year: "3rd Year", link: "#", updated: "Jan 08, 2026" },
        { year: "4th Year", link: "#", updated: "Jan 11, 2026" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Class Routine"
                description="Stay updated with the latest semester schedule for all years."
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-12">Academic Routine - Odd Sem 2026</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {scheduleData.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:border-primary transition-all duration-300 flex flex-col justify-center items-center group">
                                <div className="w-16 h-16 bg-primary-50 text-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2 text-center">{item.year} B.Tech ECE</h3>
                                <p className="text-sm text-gray-500 mb-6">Last Updated: {item.updated}</p>
                                <a href={item.link} className="inline-flex items-center px-6 py-3 bg-accent text-white font-bold rounded-xl shadow-md hover:bg-accent-600 transition-colors transform hover:-translate-y-1">
                                    Download Routine PDF
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-6 bg-red-50 rounded-2xl border border-red-100 inline-block text-red-800">
                        <p className="font-medium flex items-center gap-2">
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <strong>Note:</strong> Regular classes will commence from 10:00 AM. Labs are scheduled in the afternoon slot (2:00 PM - 5:00 PM).
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
