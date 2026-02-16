import PageHeader from "@/components/layout/PageHeader";

export default function AMRLFacility() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="AMRL Facility" description="Advanced Microelectronics Research Laboratory" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">AMRL - Advanced Microelectronics Research Laboratory</h2>
                        <p className="text-lg text-muted-text mb-12">
                            The Advanced Microelectronics Research Laboratory (AMRL) is a state-of-the-art facility 
                            dedicated to research and development in VLSI design, microelectronics, and semiconductor technology.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">VLSI Design</h3>
                                <p className="text-muted-text text-sm">Advanced tools for chip design and verification</p>
                            </div>
                            <div className="bg-accent-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Simulation</h3>
                                <p className="text-muted-text text-sm">Industry-standard simulation and modeling software</p>
                            </div>
                            <div className="bg-green-50 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-primary mb-3">Testing</h3>
                                <p className="text-muted-text text-sm">Comprehensive testing and characterization equipment</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-blue-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Research Areas</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>VLSI Circuit Design</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Low Power Design Techniques</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Analog & Mixed Signal Design</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Memory Design & Optimization</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>FPGA-based System Design</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Semiconductor Device Modeling</span></li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Available Tools</h3>
                                <ul className="space-y-2 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Cadence Design Suite</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Synopsys Tools</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Mentor Graphics</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Xilinx Vivado</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>MATLAB & Simulink</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>SPICE Simulators</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8 mb-12">
                            <h3 className="text-2xl font-bold text-primary mb-4">Collaborative Research</h3>
                            <p className="text-muted-text">
                                AMRL collaborates with leading semiconductor companies and research institutions for 
                                joint research projects, technology transfer, and student internships. The lab has 
                                contributed to multiple publications and patent filings in the field of microelectronics.
                            </p>
                        </div>

                        <div className="bg-orange-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Access & Collaboration</h3>
                            <p className="text-muted-text mb-4">
                                Faculty and students can access AMRL facilities for research projects, MTech/PhD work, 
                                and industry-sponsored projects. External collaborations are also welcome.
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
