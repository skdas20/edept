import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function StudentsAchievement() {
    const images = [
        "194f9e829dd0277491d87e22551eef43.jpg",
        "259f8b9e79ea92d19a1c80d05e2b17f3.jpg",
        "266e2442503a25f77c7980b2a2a96eac.jpg",
        "3add86bafe1854e3a64db633e6e4fcd5.jpg",
        "45608066072fd68ba6284d57226a1d08.jpg",
        "495190e5dd582e2490c06aa6b2170540.jpg",
        "4b0a2311d76f405364fdd34e2fe6d800.jpg",
        "5c8cad22c741a75f4541fee44a28cd5e.jpg",
        "6b2c6254dca1fbe0ab003f9e15bd0686.jpg",
        "6dc691ad91cf29a2a92864e7575cadba.jpg",
        "804515d0a77abb49a7a4e59161e7abec.jpg",
        "8a064b567e5915c1ca404acda92672da.jpg",
        "8c24dfdf28b7050f37dee5bdd99f8e69.jpg",
        "a124c4ece701dc127a5ad59b857a2e38.jpg",
        "ad2b76aed624c4eccfca4d90f1cb372e.jpg",
        "b1e323abcf276674bb67c1746740ebd3.jpg",
        "bc96a2753caef4be5f1381591b232f56.jpg",
        "d1cedcdfd9df48d1611975c0d01f1d74.jpg",
        "e5f49182e2044a4f01faba07d2becf54.jpg",
        "ea00a14f5522df68b7c897de3da99b06.jpg",
        "f85caa1a5c2d6dc8879008db248b95ca.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Student's Achievement" description="Celebrating Excellence and Success" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Student Achievements</h2>
                        <p className="text-lg text-muted-text mb-12">
                            Our students consistently excel in academics, research, competitions, and extracurricular 
                            activities, bringing laurels to the department and institution.
                        </p>

                        <div className="grid md:grid-cols-4 gap-6 mb-12">
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <h3 className="text-3xl font-bold text-primary mb-2">100+</h3>
                                <p className="text-muted-text text-sm">Awards & Recognitions</p>
                            </div>
                            <div className="bg-accent-50 rounded-xl p-6 text-center">
                                <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                                <p className="text-muted-text text-sm">Research Publications</p>
                            </div>
                            <div className="bg-green-50 rounded-xl p-6 text-center">
                                <h3 className="text-3xl font-bold text-primary mb-2">30+</h3>
                                <p className="text-muted-text text-sm">Competition Winners</p>
                            </div>
                            <div className="bg-blue-50 rounded-xl p-6 text-center">
                                <h3 className="text-3xl font-bold text-primary mb-2">20+</h3>
                                <p className="text-muted-text text-sm">Patent Filings</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-primary mb-6">Achievement Gallery</h3>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {images.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={`/images/students-achievement/${image}`}
                                        alt={`Student Achievement ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-purple-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Achievement Categories</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Academic Excellence Awards</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Research Paper Publications</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Technical Competition Winners</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Hackathon Champions</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Sports & Cultural Achievements</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Entrepreneurship Success</span></li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Recognition</h3>
                                <p className="text-muted-text mb-4">
                                    The department celebrates student achievements through awards ceremonies, newsletters, 
                                    and social media recognition. We encourage all students to participate in various 
                                    competitions and activities.
                                </p>
                                <p className="text-sm text-muted-text">Share your achievements: eee.iemk@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
