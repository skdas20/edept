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
        { title: "Academic ERP Portal", link: "https://www.iemcrp.com/iemEn/loginCole.jsp?mcole=104", icon: "academic" },
        { title: "MatLab Campus License", link: "https://in.mathworks.com/academia/tah-portal/institute-of-engineering-and-management-31600358.html", icon: "code" },
        { title: "Student Scholarship", link: "https://iem.edu.in/scholarships/", icon: "scholarship" },
        { title: "Career Guidance Cell (CGC)", link: "#", icon: "career" },
        { title: "Academic Disciplinary Committee (ADC)", link: "#", icon: "committee" },
        { title: "Industrial Visit Opportunities", link: "#", icon: "industry" },
        { title: "Student Branch Chapter Activities", link: "#", icon: "activities" },
        { title: "Faculty Mentorship Networks", link: "#", icon: "mentor" },
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
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-8 text-center">Academic Resources & Support</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resources.map((res, idx) => (
                            <a href={res.link} key={idx} target={res.link.startsWith('http') ? '_blank' : '_self'} rel={res.link.startsWith('http') ? 'noopener noreferrer' : ''} className="block group">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <span className="font-bold text-primary group-hover:text-accent transition-colors block mb-1">{res.title}</span>
                                            {res.link.startsWith('http') && (
                                                <span className="text-xs text-muted-text flex items-center gap-1">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                                    External Link
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional Development */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-8 text-center">Student Life & Activities</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-600 mb-4">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Photo Gallery</h3>
                            <p className="text-muted-text mb-4">Browse through our collection of department events, activities, and memorable moments</p>
                            <a href="/gallery" className="text-accent-600 font-bold hover:underline inline-flex items-center gap-2">
                                View Gallery <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-4">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Tech-Fest Participation</h3>
                            <p className="text-muted-text mb-4">Annual technical festival showcasing student projects, competitions, and innovation</p>
                            <a href="/events" className="text-accent-600 font-bold hover:underline inline-flex items-center gap-2">
                                View Events <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-4">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Alumni Networking</h3>
                            <p className="text-muted-text mb-4">Connect with successful alumni for mentorship, career guidance, and industry insights</p>
                            <a href="/alumni" className="text-accent-600 font-bold hover:underline inline-flex items-center gap-2">
                                Meet Alumni <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-4">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Extra Curricular Activities</h3>
                            <p className="text-muted-text mb-4">Participate in sports, cultural events, and community service initiatives</p>
                            <span className="text-muted-text text-sm">IEM-UEM Kolkata Marathon, Cultural Fests & More</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
