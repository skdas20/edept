import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function IoTResearchLab() {
    const images = [
        "758c4ebcba2f0b07e653c37d5a9459ea.jpg",
        "bf2cf9bc1cf8c705bf81d586cb566747.jpg"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="IoT Research Lab" description="Internet of Things Research and Development" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">IoT Research Lab</h2>
                        <p className="text-lg text-muted-text mb-12">
                            The IoT Research Lab is dedicated to cutting-edge research and development in Internet of 
                            Things, smart systems, and connected devices, providing students and faculty with advanced 
                            tools and platforms for IoT innovation.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {images.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={`/images/labs/${image}`}
                                        alt={`IoT Lab ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Smart Systems</h3>
                                <p className="text-muted-text text-sm">Development of intelligent connected systems</p>
                            </div>
                            <div className="bg-accent-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Sensor Networks</h3>
                                <p className="text-muted-text text-sm">Wireless sensor networks and data acquisition</p>
                            </div>
                            <div className="bg-green-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Cloud Integration</h3>
                                <p className="text-muted-text text-sm">IoT cloud platforms and data analytics</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Research Focus</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Smart Home & Building Automation</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Industrial IoT (IIoT)</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Healthcare IoT Applications</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Agricultural IoT Solutions</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Smart City Infrastructure</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>IoT Security & Privacy</span></li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Lab Equipment</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Arduino & Raspberry Pi Boards</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>ESP32/ESP8266 Modules</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Various Sensors & Actuators</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Communication Modules (WiFi, BLE, LoRa)</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Cloud Platforms (AWS IoT, Azure IoT)</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Development & Testing Tools</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8 mb-12">
                            <h3 className="text-2xl font-bold text-primary mb-4">Projects & Applications</h3>
                            <p className="text-muted-text">
                                The IoT Lab supports student projects, faculty research, and industry collaborations 
                                in developing innovative IoT solutions. Recent projects include smart energy monitoring, 
                                environmental sensing systems, and healthcare monitoring devices.
                            </p>
                        </div>

                        <div className="bg-orange-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Lab Access</h3>
                            <p className="text-muted-text mb-4">
                                Students and faculty can access the IoT Lab for coursework, projects, and research. 
                                Training sessions and workshops are conducted regularly.
                            </p>
                            <p className="text-sm text-muted-text">Contact: eee.iemk@gmail.com</p>
                            <p className="text-sm text-muted-text">Phone: +91 33 2357 2969</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
