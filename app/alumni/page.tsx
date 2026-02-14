import React from 'react';
import PageHeader from "@/components/layout/PageHeader";

export default function Alumni() {
    const alumni = [
        { name: "Sayan Mukherjee", batch: "2018", designation: "Software Engineer III", company: "Google", image: "" },
        { name: "Priya Das", batch: "2019", designation: "Senior Associate", company: "PwC India", image: "" },
        { name: "Rahul Gupta", batch: "2017", designation: "Research Scholar", company: "IIT Bombay", image: "" },
        { name: "Ananya Roy", batch: "2020", designation: "System Engineer", company: "TCS R&D", image: "" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Alumni Network"
                description="Our proud graduates who are making a mark across the globe."
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    {/* Registration Card */}
                    <div className="bg-primary-dark rounded-3xl p-8 md:p-12 mb-20 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-600 opacity-20 transform -skew-x-12 translate-x-32"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold font-heading text-white mb-4">Are you an Alumnus?</h2>
                            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                                Stay connected with your alma mater. Register now to join our alumni network, attend reunions, and mentor current students.
                            </p>
                            <button className="bg-accent hover:bg-white text-primary-dark font-bold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Register as Alumni
                            </button>
                        </div>
                    </div>

                    {/* Alumni Spotlight Grid */}
                    <h2 className="text-3xl font-bold font-heading text-primary mb-12 text-center">Alumni Spotlight</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {alumni.map((alum, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden flex items-center justify-center">
                                    {/* Placeholder Image */}
                                    <svg className="w-20 h-20 text-gray-400 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-lg font-bold text-primary mb-1">{alum.name}</h3>
                                    <p className="text-xs font-bold text-accent-600 uppercase tracking-wide mb-3">Batch of {alum.batch}</p>
                                    <p className="text-sm font-medium text-gray-800">{alum.designation}</p>
                                    <p className="text-sm text-muted-text">{alum.company}</p>

                                    <div className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <a href="#" className="text-primary hover:text-accent font-bold text-sm flex items-center justify-center gap-1">
                                            View Profile <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
