import React from 'react';
import PageHeader from "@/components/layout/PageHeader";

export default function Labs() {
    const labs = [
        { title: "Electronic Devices & Circuits Lab", description: "Equipped with CRO, Function Generators, Digital Multimeters, and Breadboards for circuit realization.", capacity: "20 Students", inCharge: "Mr. S. Das" },
        { title: "Digital Electronics Lab", description: "Features Digital IC Trainers, Universal Programmer, Logic Analyzer for digital circuit design and verification.", capacity: "25 Students", inCharge: "Mrs. P. Roy" },
        { title: "Analog Communication Lab", description: "Includes Advanced Communication Trainer Kits, Spectrum Analyzer for studying modulation techniques.", capacity: "20 Students", inCharge: "Mr. A. Sen" },
        { title: "Digital Signal Processing Lab", description: "High-performance workstations with MATLAB, Simulink, and Code Composer Studio targeting TI DSP kits.", capacity: "30 Students", inCharge: "Dr. S. Chakraborty" },
        { title: "VLSI Design Lab", description: "Industry-standard EDA tools: Cadence, Mentor Graphics, Xilinx Vivado for chip design and FPGA implementation.", capacity: "25 Students", inCharge: "Dr. S. Banerjee" },
        { title: "Microwave Engineering Lab", description: "Equipped with Microwave Test Benches (X-Band), Klystron Power Supply, VSWR Meter for waveguide experiments.", capacity: "20 Students", inCharge: "Dr. T. K. Rana" },
        { title: "IoT & Embedded Systems Lab", description: "Arduino, Raspberry Pi, ARM Cortex boards, and various sensors for project development.", capacity: "25 Students", inCharge: "Mr. A. Mukherjee" },
        { title: "Project Lab", description: "Open lab for final year students to work on their projects with access to all necessary equipment.", capacity: "15 Groups", inCharge: "Multiple Faculty" },
    ];

    const software = [
        { name: "MATLAB & Simulink", version: "R2023b", usage: "Signal Processing, Control Systems" },
        { name: "Cadence Virtuoso", version: "IC6.1.8", usage: "Analog/Mixed-Signal IC Design" },
        { name: "Xilinx Vivado", version: "2023.1", usage: "FPGA Design, VHDL/Verilog" },
        { name: "NI Multisim", version: "14.3", usage: "Circuit Simulation" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Infrastructure & Laboratories"
                description="World-class facilities fostering practical learning and innovation."
            />

            {/* Labs Grid */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-12 text-center">Laboratory Facilities</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {labs.map((lab, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:border-primary transition-all duration-300">
                                <div className="h-48 bg-gray-200 relative">
                                    {/* Placeholder for specific lab image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium bg-gradient-to-tr from-gray-100 to-white">
                                        {lab.title} <span className="opacity-0 group-hover:opacity-100 ml-2 transition-opacity">📸</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-primary mb-2 line-clamp-1">{lab.title}</h3>
                                    <div className="flex justify-between items-center text-xs font-bold text-muted-text uppercase tracking-wide mb-3">
                                        <span className="text-accent-600">Capacity: {lab.capacity}</span>
                                        <span>In-Charge: {lab.inCharge}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">{lab.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Software Tools */}
            <section className="py-20 bg-surface-2">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold font-heading text-primary mb-12 text-center">Software Availability</h2>
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-2 border-primary-50">
                                    <th className="py-4 px-6 text-primary font-bold text-lg w-1/3">Software Name</th>
                                    <th className="py-4 px-6 text-primary font-bold text-lg w-1/4">Version</th>
                                    <th className="py-4 px-6 text-primary font-bold text-lg">Primary Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {software.map((sw, idx) => (
                                    <tr key={idx} className="border-b border-gray-100 hover:bg-surface-2 transition-colors">
                                        <td className="py-4 px-6 font-semibold text-gray-800">{sw.name}</td>
                                        <td className="py-4 px-6 text-gray-600 text-sm font-mono bg-gray-50 rounded mx-2 inline-block my-2">{sw.version}</td>
                                        <td className="py-4 px-6 text-gray-600">{sw.usage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}
