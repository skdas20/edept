import React from 'react';
import PageHeader from "@/components/layout/PageHeader";

export default function StudentCorner() {
    const achievements = [
        { title: "First Prize in Smart India Hackathon 2024", student: "Team ECE Innovators", description: "Developed an AI-based traffic management system.", image: "" },
        { title: "Best Paper Award at IEEE Conference", student: "Rohan Das & Group", description: "presented a paper on '5G Antenna Design'.", image: "" },
    ];

    const placements = [
        { company: "TCS Digital", package: "7.0 LPA", students: 15 },
        { company: "Cognizant GenC Next", package: "6.75 LPA", students: 10 },
        { company: "PwC", package: "6.0 LPA", students: 5 },
        { company: "Capgemini Analyst", package: "4.25 LPA", students: 25 },
        { company: "Keysight Technologies", package: "9.0 LPA", students: 2 },
    ];

    const resources = [
        { title: "Previous Year Question Papers", link: "#" },
        { title: "Lab Manuals", link: "#" },
        { title: "Video Lectures", link: "#" },
        { title: "Project Guidelines", link: "#" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Student Corner"
                description="Celebrating student success and providing essential academic resources."
                className="bg-primary-dark"
            />

            {/* Hall of Fame / Achievements */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-12 text-center">Student Achievements</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {achievements.map((ach, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
                                <div className="h-48 bg-gradient-to-tr from-primary to-primary-600 relative overflow-hidden flex items-center justify-center">
                                    <svg className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                    {/* Ideally replace with student photo */}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-primary mb-1 uppercase tracking-tight">{ach.title}</h3>
                                    <p className="text-sm font-bold text-accent-600 mb-3">{ach.student}</p>
                                    <p className="text-muted-text text-sm">{ach.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Placement Statistics */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Placement Highlights (2024-25)</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
                            <div className="text-5xl font-bold text-accent mb-2">91%</div>
                            <div className="text-sm uppercase tracking-wide opacity-80">Placement Rate</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
                            <div className="text-5xl font-bold text-accent mb-2">12 LPA</div>
                            <div className="text-sm uppercase tracking-wide opacity-80">Highest Package</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
                            <div className="text-5xl font-bold text-accent mb-2">4.5 LPA</div>
                            <div className="text-sm uppercase tracking-wide opacity-80">Average Package</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors">
                            <div className="text-5xl font-bold text-accent mb-2">50+</div>
                            <div className="text-sm uppercase tracking-wide opacity-80">Recruiters Visited</div>
                        </div>
                    </div>

                    {/* Top Recruiters Marquee (Static for now) */}
                    <div className="mt-16 text-center">
                        <h3 className="text-xl font-bold mb-6 opacity-90">Our Top Recruiters</h3>
                        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                            {['TCS', 'Cognizant', 'Wipro', 'Infosys', 'Capgemini', 'IBM', 'Accenture', 'PwC', 'Keysight', 'Mindtree'].map((company, idx) => (
                                <span key={idx} className="bg-white text-primary px-4 py-2 rounded-full shadow-sm hover:shadow-md cursor-default transform hover:-translate-y-1 transition-all">
                                    {company}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Resources */}
            <section className="py-20 bg-surface-2">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-8 text-center">Academic Resources</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {resources.map((res, idx) => (
                            <a href={res.link} key={idx} className="block group">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary transition-all duration-300 flex items-center justify-between">
                                    <span className="font-bold text-primary group-hover:text-accent transition-colors">{res.title}</span>
                                    <div className="w-10 h-10 bg-surface-2 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
