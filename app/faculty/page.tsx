import React from 'react';
import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function Faculty() {
    const faculty = [
        { name: "Prof. (Dr.) Malay Gangopadhyaya", designation: "Professor & Head", qualification: "Ph.D.", area: "Device, Circuit & System", image: "/images/faculty/6f92a3e4ea097d0a1e52112fb61ff854.jpg", email: "malay.gangopadhyaya@iemcal.com" },
        { name: "Prof. Amit Kumar Das", designation: "Assistant Professor", qualification: "M.Tech", area: "Electronics & Communication", image: "/images/faculty/5dd71378c39fda5a440be54230b46939.jpg", email: "amit.das@iemcal.com" },
        { name: "Prof. Soham Kanti Bishnu", designation: "Assistant Professor", qualification: "M.Tech", area: "Electronics & Communication", image: "/images/faculty/423f8b64236a81cf8fec514d11abcbf1.jpg", email: "soham.bishnu@iemcal.com" },
        { name: "Prof. Subhamoy Ray", designation: "Assistant Professor", qualification: "M.Tech", area: "Electronics & Communication", image: "/images/faculty/62de3b485acea14063d5bef88d6c90b3.jpg", email: "subhamoy.ray@iemcal.com" },
        { name: "Prof. Sutapa Ray (Adhikary)", designation: "Assistant Professor", qualification: "M.Tech", area: "Electronics & Communication", image: "/images/faculty/86489917f2fcdfb86d960042ba7844c5.jpg", email: "sutapa.ray@iemcal.com" },
        { name: "Prof. Dr. Murari Shaw", designation: "Associate Professor", qualification: "Ph.D.", area: "Electronics & Communication", image: "/images/faculty/57eecc889683980f3a3e89c6dbe595bd.jpg", email: "murari.shaw@iemcal.com" },
        { name: "Prof. Dr. Amitava Ghosh", designation: "Associate Professor", qualification: "Ph.D.", area: "Electronics & Communication", image: "/images/faculty/866b07b0f75a1d0b4be30100eb46eadd.jpg", email: "amitava.ghosh@iemcal.com" },
        { name: "Prof. Debajyoti Sengupta", designation: "Assistant Professor", qualification: "M.Tech", area: "Electronics & Communication", image: "/images/faculty/0994c872bb749227ed970bbb245b6478.jpg", email: "debajyoti.sengupta@iemcal.com" },
        { name: "Mr. Sanjay Chatterjee", designation: "Scientific Officer", qualification: "M.Tech", area: "Electronics & Communication", image: "/images/faculty/bc53e180cf224ec3cc04605989685991.jpg", email: "sanjay.chatterjee@iemcal.com" },
        { name: "Prof. Dr. Monali Das", designation: "Assistant Professor", qualification: "Ph.D.", area: "Electronics & Communication", image: "/images/faculty/21bd5f41adb135b5d14b6f0e13a89dee.jpg", email: "monali.das@iemcal.com" },
        { name: "Prof. Soham Ghosh", designation: "Associate Professor", qualification: "M.Tech", area: "Electronics & Communication", image: "/images/faculty/230b17d697e99ed799c7fa7de53d90e0.jpg", email: "soham.ghosh@iemcal.com" },
        { name: "Mr. Sayantan Talukdar", designation: "Technical Assistant", qualification: "B.Tech", area: "Electronics & Communication", image: "/images/faculty/f4b09ea3fc113353f552dfbe97324db2.jpg", email: "sayantan.talukdar@iemcal.com" },
        { name: "Mrs. Aparna Biswas", designation: "Scientific Officer", qualification: "M.Tech", area: "Electronics & Communication", image: "/images/faculty/2a214fb5ceb98f93e4fbcf23a50c0724.jpg", email: "aparna.biswas@iemcal.com" },
        { name: "Mr. Mohidur Rahaman", designation: "Technical Assistant", qualification: "B.Tech", area: "Electronics & Communication", image: "/images/faculty/f91414946f6eb2c8c18290319052aa8c.jpg", email: "mohidur.rahaman@iemcal.com" },
        { name: "Mr. Gurudas Bardhan", designation: "Scientific Officer", qualification: "M.Tech", area: "Electronics & Communication", image: "/images/faculty/12a492ac2201d27b0cbb484993c1433b.jpg", email: "gurudas.bardhan@iemcal.com" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Faculty Members"
                description="Meet our distinguished faculty members who are experts in their respective fields."
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {faculty.map((fac, idx) => (
                            <div key={idx} className="group relative h-full rounded-[22px] border border-[#d8deea] bg-white shadow-[0_14px_28px_rgba(15,23,42,0.14)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_36px_rgba(15,23,42,0.18)]">
                                <div className="relative z-0 h-[70px] rounded-t-[22px] bg-gradient-to-r from-[#0F2B59] to-[#1E5EA3]">
                                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#C89A2B]/80 to-transparent" />
                                </div>

                                <div className="absolute left-1/2 top-[14px] z-20 h-[106px] w-[106px] -translate-x-1/2 rounded-full border-[5px] border-[#C89A2B] bg-white p-[3px] shadow-[0_10px_20px_rgba(15,23,42,0.2)]">
                                    <div className="relative h-full w-full overflow-hidden rounded-full">
                                        {fac.image ? (
                                            <Image
                                                src={fac.image}
                                                alt={fac.name}
                                                fill
                                                className="object-cover object-top"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-400">
                                                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="relative z-10 flex h-[calc(100%-70px)] flex-col px-4 pb-5 pt-[62px]">
                                    <div className="mt-3 px-1 text-center">
                                        <h3 className="text-[1.55rem] leading-[1.28] font-bold text-[#14171e]">
                                            {fac.name}
                                        </h3>
                                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9D7A24]">
                                            {fac.designation}
                                        </p>
                                    </div>

                                    <div className="mt-4 rounded-2xl border border-[#d8d3c2] bg-[#f7f6ef] p-3.5">
                                        <div className="flex items-center justify-between gap-2 text-[13px] text-[#1f2937]">
                                            <span className="inline-flex items-center gap-2">
                                                <svg className="h-4 w-4 text-[#465266]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                </svg>
                                                Qualification
                                            </span>
                                            <span className="rounded-full bg-[#0F2B59] px-2.5 py-0.5 text-[11px] font-semibold text-white">{fac.qualification}</span>
                                        </div>
                                        <div className="mt-2 h-px bg-[#e4deca]" />
                                        <div className="mt-2 flex items-start justify-between gap-2 text-[13px] text-[#1f2937]">
                                            <span className="inline-flex items-center gap-2 whitespace-nowrap">
                                                <svg className="h-4 w-4 text-[#465266]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Area
                                            </span>
                                            <span className="text-right text-[12px] leading-[1.35] text-[#344054]">{fac.area}</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4">
                                        <a
                                            href={`mailto:${fac.email}`}
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0F2B59] via-[#174a89] to-[#C89A2B] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
                                        >
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            Send Email
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
