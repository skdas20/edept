import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function ExtraCurricularActivity() {
    const images = [
        "0238c3df0ba8a733b87fdc321b9e243d.jpg",
        "080a799034b450aaeced0e910e9a30d9.jpg",
        "1f0b08eef2e2a3a8d97ec7fae5ca871a.jpg",
        "20ebcd51e3aacfd0df422e693d1fb060.jpg",
        "25e0838c50328d4527350147b5fe7927.jpg",
        "32e818e8023ae77de1b728bf150ebfcd.jpg",
        "535a280cc41264476d5fecdec18fe2a8.jpg",
        "5a8d78c71dca930ed583e7454f998884.jpg",
        "8eb2fb872a865bb54139963b7f6a1c27.jpg",
        "ac442be66ade3ab448a75086d46c044a.jpg",
        "ac907bcca975d2768ddec9dfa33966ab.jpg",
        "b89652ba81d923bce850bec8d6309e3c.jpg",
        "df57897c5e5355c0879bcc783da31286.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Extra Curricular Activity" description="Beyond Academics - Sports, Culture & More" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">Extra Curricular Activities</h2>
                        <p className="text-lg text-muted-text mb-12">
                            The ECE Department encourages holistic development through diverse extra-curricular activities 
                            including sports, cultural events, social service, and student clubs.
                        </p>

                        <div className="grid md:grid-cols-4 gap-6 mb-12">
                            <div className="bg-primary-50 rounded-xl p-6 text-center">
                                <h3 className="text-xl font-bold text-primary mb-2">Sports</h3>
                                <p className="text-muted-text text-sm">Cricket, Football, Basketball, Athletics</p>
                            </div>
                            <div className="bg-accent-50 rounded-xl p-6 text-center">
                                <h3 className="text-xl font-bold text-primary mb-2">Cultural</h3>
                                <p className="text-muted-text text-sm">Music, Dance, Drama, Art</p>
                            </div>
                            <div className="bg-green-50 rounded-xl p-6 text-center">
                                <h3 className="text-xl font-bold text-primary mb-2">Social</h3>
                                <p className="text-muted-text text-sm">NSS, CSR, Community Service</p>
                            </div>
                            <div className="bg-blue-50 rounded-xl p-6 text-center">
                                <h3 className="text-xl font-bold text-primary mb-2">Clubs</h3>
                                <p className="text-muted-text text-sm">Technical, Literary, Photography</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-primary mb-6">Activity Gallery</h3>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {images.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={`/images/extra-curricular/${image}`}
                                        alt={`Extra Curricular Activity ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-purple-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Annual Events</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Annual Sports Meet</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Cultural Festival</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IEM-UEM Kolkata Marathon</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Freshers' Welcome</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Farewell Ceremony</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Independence Day & Republic Day Celebrations</span></li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Participation Benefits</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Personality Development</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Leadership Skills</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Team Building</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Stress Management</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Social Networking</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Work-Life Balance</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
