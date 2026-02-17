import React from 'react';

const stats = [
    {
        id: 1, name: 'Established', value: '1996', icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        )
    },
    {
        id: 2, name: 'Accreditation', value: 'NBA', icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        )
    },
    {
        id: 3, name: 'Programs', value: 'UG + PG', icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        )
    },
    {
        id: 4, name: 'Department Focus', value: 'Innovation', icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        )
    },
];

const Stats = () => {
    return (
        <section className="bg-surface py-14">
            <div className="container mx-auto px-4">
                <div className="section-panel grid grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 md:px-10">
                    {stats.map((stat) => (
                        <div key={stat.id} className="group flex flex-col items-center justify-center rounded-2xl border border-border/70 bg-white px-4 py-5 text-center transition-transform duration-300 hover:-translate-y-1 md:border-none md:bg-transparent md:p-0">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                                {stat.icon}
                            </div>
                            <div className="font-heading text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
                            <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-text md:text-sm">{stat.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
