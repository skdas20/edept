import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function BatchPhotography() {
    const images = [
        "32539ef02c829dc884e4f14dbcef46bd.jpg",
        "bdd830873a11eb790f25241790b8a572.jpg",
        "f824578c9ba84727d40f9ff2dece3d0f.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Batch Photography" description="Memories of ECE Batches" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Batch Photography</h2>
                        <p className="text-lg text-muted-text mb-12">
                            Capturing the memorable moments of our ECE batches - a collection of photographs that 
                            preserve the bonds, achievements, and experiences shared during the journey at IEM.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {images.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={`/images/batch-photography/${image}`}
                                        alt={`Batch Photo ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="bg-primary-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Batch Photo Sessions</h3>
                            <p className="text-muted-text mb-4">
                                Every year, we organize professional batch photography sessions for graduating students 
                                to commemorate their time at the ECE Department. These photographs become cherished 
                                memories that alumni treasure for years to come.
                            </p>
                            <p className="text-muted-text">
                                For batch photo arrangements and alumni photo requests, contact the department office.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
