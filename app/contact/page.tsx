import React from 'react';
import PageHeader from "@/components/layout/PageHeader";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Get in Touch"
                description="We're here to help. Reach out to us for admissions, collaborations, or any inquiries."
            />

            <section className="py-20 bg-surface relative">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold font-heading text-primary mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                {/* Address */}
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary mb-2 text-lg">Department Address</h3>
                                        <p className="text-muted-text leading-relaxed">
                                            Gurukul, Y-12, Block-EP, Sector-V, <br />
                                            Salt Lake Electronics Complex, <br />
                                            Kolkata – 700 091, West Bengal, India
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center text-accent-600 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary mb-2 text-lg">Phone & Fax</h3>
                                        <p className="text-muted-text hover:text-primary transition-colors cursor-pointer block">+91 33 2357 2969</p>
                                        <p className="text-muted-text hover:text-primary transition-colors cursor-pointer block">+91 33 2357 7649</p>
                                        <p className="text-muted-text text-sm mt-2">Fax: +91 33 2357 8302</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary mb-2 text-lg">Email Address</h3>
                                        <a href="mailto:eee.iemk@gmail.com" className="text-muted-text hover:text-primary transition-colors block underline">eee.iemk@gmail.com</a>
                                    </div>
                                </div>

                                {/* Site Maintainers */}
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary mb-2 text-lg">Site Maintainers</h3>
                                        <a href="https://in.linkedin.com/in/samit-karmakar-4a325a188" target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-primary transition-colors block">Prof. Samit Karmakar</a>
                                        <a href="https://in.linkedin.com/in/srijita-chakraborty-1b940184" target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-primary transition-colors block">Prof. Srijita Chakraborty</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map & Form (Form is placeholder for now) */}
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                                <h3 className="text-2xl font-bold font-heading text-primary mb-6">Send us a Message</h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                                        <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                                    </div>
                                    <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                                    <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"></textarea>
                                    <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-600 transition-colors shadow-lg shadow-primary/30">Send Message</button>
                                </form>
                            </div>

                            {/* Map Embed */}
                            <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-md">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.062846877073!2d88.43004397588828!3d22.57351653282212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275d27b876495%3A0xc354316d8aee3a52!2sInstitute%20of%20Engineering%20%26%20Management%20(IEM)!5e0!3m2!1sen!2sin!4v1715425648934!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
