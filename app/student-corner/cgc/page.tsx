import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function CGC() {
    const images = [
        "006dd5797df3eae0abb3bc620d353413.jpg",
        "16f6e51f742d6d6ef3f5a2ff58eda1a9.jpg",
        "1958a4883a81b2080f3a16e6be714d95.jpg",
        "4d44599a85166ae529f42b67c985e668.jpg",
        "57d8d742a47ed661baf077d9c91d2e7c.jpg",
        "64f670f2591ce2a034b7f5574914e572.jpg",
        "6d234a61fcffc2d7e5d43c7d32fab751.jpg",
        "6ee860ae59725d7a92cc502be6573a07.jpg",
        "8341d2caf471dedfac83ba262688bdb5.jpg",
        "883ce5577a877b5649cb20d0f80cdfe2.jpg",
        "98bca0b58147d1fc352ab559b753c6fb.jpg",
        "d435724b3956d18d93b0255d5e748404.jpg",
        "fbbd63df6695139cc563fd236a1447aa.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Career Guidance Cell" description="Empowering Students for Successful Careers" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Career Guidance Cell (CGC)</h2>
                        <p className="text-lg text-muted-text mb-12">
                            The Career Guidance Cell provides comprehensive support to students in planning and achieving 
                            their career goals through counseling, training, and industry interaction programs.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Career Counseling</h3>
                                <p className="text-muted-text text-sm">One-on-one guidance sessions to help students identify career paths</p>
                            </div>
                            <div className="bg-accent-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Skill Development</h3>
                                <p className="text-muted-text text-sm">Workshops and training programs to enhance employability skills</p>
                            </div>
                            <div className="bg-green-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Industry Connect</h3>
                                <p className="text-muted-text text-sm">Guest lectures and interaction with industry professionals</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-primary mb-6">CGC Activities Gallery</h3>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {images.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={`/images/cgc/${image}`}
                                        alt={`CGC Activity ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Services Offered</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Resume Building & Review</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Mock Interviews</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Aptitude & Technical Training</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Soft Skills Development</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Higher Studies Guidance</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Entrepreneurship Support</span></li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Contact CGC</h3>
                                <p className="text-muted-text mb-4">
                                    For career counseling appointments and program details, reach out to the Career Guidance Cell.
                                </p>
                                <p className="text-sm text-muted-text">Email: eee.iemk@gmail.com</p>
                                <p className="text-sm text-muted-text">Phone: +91 33 2357 2969</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
