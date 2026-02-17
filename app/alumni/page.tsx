import React from 'react';
import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function Alumni() {
    const testimonials = [
        {
            name: "BISWARUP DEBNATH",
            batch: "Batch of 2017",
            quote: "The progression from IEM to IISc became so easy only because of my faculty members of ECE department.",
            image: "/images/alumni/7754830b3e0f53563b7a9f3148bae60d.jpg"
        },
        {
            name: "TAMOGHNA SAHA",
            batch: "Batch of 2017",
            quote: "The three years journey of B.TECH in ECE department has made much more matured and able person and I owe a lot to all my teachers.",
            image: "/images/alumni/3d0899abca1c16d6ee52655455ea6766.jpg"
        },
        {
            name: "SOUNAK LAHIRI",
            batch: "Batch of 2016",
            quote: "The teachers are very knowledgeable and supportive and I am in debt to the department for inculcating the sense of discipline and responsibility in me.",
            image: "/images/alumni/700ede8458cfce94c57cfd28e1ec7056.jpg"
        },
        {
            name: "SUSMIT BHATTACHARYA",
            batch: "Batch of 2016",
            quote: "I had the golden period of my student life in IEM and the department helped me a lot to achieve what I am today.",
            image: "/images/alumni/5ddd3e94a53acba01bb969e6edf7fc3f.jpg"
        },
        {
            name: "RIYA SETT",
            batch: "Batch of 2016",
            quote: "The department of ECE have nurtured the students right from the very early stage and have made them able to compete in their professional life.",
            image: "/images/alumni/4ba95a56487c399220fb4255c88d8efc.jpg"
        },
        {
            name: "AGOMONI SARKAR",
            batch: "Batch of 2015",
            quote: "Each and every faculty members are very much cooperative and that has helped me to built my career.",
            image: "/images/alumni/065c7bcbd8e3f909c010ffcbc411f7c3.jpg"
        },
        {
            name: "JIMIT SHETH",
            batch: "Batch of 2015",
            quote: "Being a professional now, I take pride in the fact that I am from IEM. The discipline and the culture of the department are something that helped us a lot to establish our self in our professional life.",
            image: "/images/alumni/b03c4358a9957f7480954344d93045cb.jpg"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Alumni"
                description="Celebrating the success stories of our distinguished alumni who have made their mark in the industry and academia."
            />

            {/* Batch Photo Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/alumni/a5c70b0b4f33203ea7e78a474a62a55e.jpg"
                                alt="IEM ECE BATCH (2018-2022)"
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                <h3 className="text-2xl font-bold text-white text-center">IEM ECE BATCH (2018-2022)</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notable Alumni Section */}
            <section className="py-20 bg-surface">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold font-heading text-primary mb-4">Notable Alumni</h2>
                        <p className="text-xl text-muted-text max-w-2xl mx-auto">
                            Hear from our successful alumni about their journey and experiences at IEM ECE Department
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((alumni, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                                <div className="flex flex-col sm:flex-row">
                                    {/* Image */}
                                    <div className="w-full sm:w-48 h-64 sm:h-auto relative bg-gray-200">
                                        <Image
                                            src={alumni.image}
                                            alt={alumni.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="text-accent text-5xl font-serif mb-2">&ldquo;</div>
                                            <p className="text-muted-text italic leading-relaxed mb-4">
                                                {alumni.quote}
                                            </p>
                                        </div>
                                        <div className="border-t border-gray-200 pt-4 mt-4">
                                            <h3 className="text-lg font-bold text-primary">{alumni.name}</h3>
                                            <p className="text-sm text-accent-600 font-medium">{alumni.batch}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alumni Network CTA */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold font-heading mb-4">Join Our Alumni Network</h2>
                    <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
                        Stay connected with your alma mater and fellow alumni. Share your success story and inspire the next generation.
                    </p>
                    <a href="/contact" className="inline-block px-8 py-4 bg-accent hover:bg-accent-600 text-primary-dark font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                        Get in Touch
                    </a>
                </div>
            </section>
        </div>
    );
}
