import PageHeader from "@/components/layout/PageHeader";

export default function MatlabCampusLicense() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="MatLab Campus License" description="Access to MATLAB Software for Students" />
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white rounded-3xl shadow-lg p-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">MATLAB Campus License</h2>
                        <p className="text-lg text-muted-text mb-12">
                            IEM provides MATLAB Campus-Wide License access to all students and faculty, enabling them to 
                            use MATLAB and Simulink for coursework, research, and projects.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-primary-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Available Tools</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>MATLAB (Core Platform)</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Simulink (Model-Based Design)</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Signal Processing Toolbox</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Communications Toolbox</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Control System Toolbox</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Image Processing Toolbox</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Deep Learning Toolbox</span></li>
                                </ul>
                            </div>

                            <div className="bg-accent-50 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">Usage Benefits</h3>
                                <ul className="space-y-3 text-muted-text">
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Course Assignments & Projects</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Research & Development</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Algorithm Development</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Data Analysis & Visualization</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>System Modeling & Simulation</span></li>
                                    <li className="flex items-start"><span className="text-accent-600 mr-2">•</span><span>Machine Learning Applications</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8 mb-12">
                            <h3 className="text-2xl font-bold text-primary mb-4">How to Access</h3>
                            <p className="text-muted-text mb-4">
                                Students can download and install MATLAB on their personal computers using their IEM 
                                email credentials. The license allows installation on multiple devices.
                            </p>
                            <ol className="space-y-2 text-muted-text list-decimal list-inside">
                                <li>Visit the MATLAB Portal using your IEM email</li>
                                <li>Create a MathWorks account with your institutional email</li>
                                <li>Download MATLAB installer for your operating system</li>
                                <li>Install and activate using campus license</li>
                            </ol>
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Support & Training</h3>
                            <p className="text-muted-text mb-4">
                                The department conducts regular MATLAB workshops and training sessions. For technical 
                                support or license issues, contact the IT department or faculty coordinators.
                            </p>
                            <p className="text-sm text-muted-text">Email: eee.iemk@gmail.com</p>
                            <p className="text-sm text-muted-text">Phone: +91 33 2357 2969</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
