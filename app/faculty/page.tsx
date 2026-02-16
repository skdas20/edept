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
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-primary">
                                <div className="h-64 bg-gray-200 relative overflow-hidden">
                                    {fac.image ? (
                                        <Image
                                            src={fac.image}
                                            alt={fac.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-400">
                                            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                        </div>
                                    )}
                                    {/* Overlay with Email Action */}
                                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                                        <a href={`mailto:${fac.email}`} className="px-6 py-2 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-white transition-colors transform hover:-translate-y-1">
                                            Send Email
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-lg font-bold text-primary mb-1 line-clamp-1 group-hover:text-accent transition-colors">{fac.name}</h3>
                                    <p className="text-xs font-bold text-accent-600 uppercase tracking-wide mb-4">{fac.designation}</p>

                                    <div className="border-t border-gray-100 pt-4 mt-2 space-y-2 text-left">
                                        <p className="text-sm text-muted-text flex justify-between">
                                            <span className="font-semibold text-gray-700">Qualification:</span>
                                            <span>{fac.qualification}</span>
                                        </p>
                                        <p className="text-sm text-muted-text flex justify-between">
                                            <span className="font-semibold text-gray-700">Area:</span>
                                            <span className="text-right truncate w-1/2">{fac.area}</span>
                                        </p>
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
