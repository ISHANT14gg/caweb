'use client';

import { Star, User } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const reviews = [
    {
        name: "Amit Kumar",
        rating: 5,
        text: "Excellent service for ITR filing. Very professional and knowledgeable team. Highly recommended for anyone looking for CA services in Mehre.",
        date: "2 months ago"
    },
    {
        name: "Priya Sharma",
        rating: 5,
        text: "Best CA firm in the region. They helped me with my GST registration and filing seamlessly. Jyoti Thakur is very approachable and expert in her field.",
        date: "1 month ago"
    },
    {
        name: "Rohan Singh",
        rating: 5,
        text: "I visited them for business consultancy and was impressed by their detailed analysis. They provided the right guidance for my startup.",
        date: "3 weeks ago"
    },
    {
        name: "Sunita Verma",
        rating: 4,
        text: "Professional behavior and timely service. Good experience overall with the audit process.",
        date: "5 months ago"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation direction="up" className="text-center mb-16">
                    <span className="text-gold font-bold tracking-widest text-sm uppercase mb-4 block">TESTIMONIALS</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-deep mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        We take pride in our work and the trust our clients place in us. Here are some of their experiences.
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, index) => (
                        <ScrollAnimation key={index} delay={index * 0.1} type="scale">
                            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-10 w-10 bg-soft-grey rounded-full flex items-center justify-center text-gold font-bold">
                                        {review.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                                        <p className="text-xs text-gray-500">{review.date}</p>
                                    </div>
                                </div>

                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                        />
                                    ))}
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                    &quot;{review.text}&quot;
                                </p>

                                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-2">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="h-4 w-4" />
                                    <span className="text-xs font-medium text-gray-500">Google Review</span>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
