import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function NSSCSRActivity() {
    const images = [
        "00887bb2ca5f6ac6a8f9cf563180e85b.jpg",
        "85892a076a59910e5e34f4664a40b73c.jpg",
        "a3e23f8ccb2b57192433111da7a3ed75.jpg",
        "d2961198ba773df66e2fa2cfb8e134c5.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader 
                title="NSS & CSR Activity" 
                description="National Service Scheme and Corporate Social Responsibility Initiatives" 
            />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">NSS & CSR Activities</h2>
                        <p className="text-lg text-muted-text mb-12">
                            The ECE Department actively participates in National Service Scheme (NSS) and Corporate 
                            Social Responsibility (CSR) activities, fostering social awareness and community engagement 
                            among students and faculty.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Community Service</h3>
                                <p className="text-muted-text text-sm">
                                    Regular community outreach programs, health camps, and awareness drives in local areas.
                                </p>
                            </div>
                            <div className="bg-accent-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Environmental Initiatives</h3>
                                <p className="text-muted-text text-sm">
                                    Tree plantation drives, cleanliness campaigns, and environmental awareness programs.
                                </p>
                            </div>
                            <div className="bg-green-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Social Awareness</h3>
                                <p className="text-muted-text text-sm">
                                    Educational programs, skill development workshops, and social welfare activities.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-primary mb-6">Activity Gallery</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {images.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={`/images/nss-csr/${image}`}
                                        alt={`NSS & CSR Activity ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Get Involved</h3>
                            <p className="text-muted-text mb-4">
                                Students and faculty are encouraged to participate in NSS and CSR activities. These 
                                initiatives provide valuable opportunities for personal growth, social responsibility, 
                                and community impact.
                            </p>
                            <p className="text-sm text-muted-text">
                                For more information, contact: <span className="font-semibold">eee.iemk@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
