'use client';

import testimonialsData from '@/data/testimonials.json';
import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    company: string;
}

function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
    return (
        <div className="flex-shrink-0 w-[400px] group">
            <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-violet-200 transition-all duration-300 border border-gray-200 hover:border-violet-300 h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Quote size={24} className="text-white" />
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-lg italic pt-4">
                    "{quote}"
                </p>

                <div className="space-y-1 border-t border-gray-200 pt-4">
                    <div className="font-bold text-gray-900 text-lg">{author}</div>
                    <div className="text-sm text-violet-600 font-medium">{role}</div>
                    <div className="text-sm text-gray-500">{company}</div>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationId: number;
        let scrollPosition = 0;

        const scroll = () => {
            if (!isPaused && scrollContainer) {
                scrollPosition += 0.5;

                if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                    scrollPosition = 0;
                }

                scrollContainer.scrollLeft = scrollPosition;
            }
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

    return (
        <section className="w-full py-24 bg-gray-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #8b5cf6 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="relative z-10">
                <div className="px-8 mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-violet-600 to-gray-900 bg-clip-text text-transparent mb-4">
                        What People Say
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Testimonials from clients and colleagues I've worked with
                    </p>
                </div>

                <div
                    ref={scrollRef}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="overflow-x-hidden hide-scrollbar cursor-grab active:cursor-grabbing"
                >
                    <div className="flex gap-6 px-8 py-4">
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <TestimonialCard key={`${testimonial.id}-${index}`} {...testimonial} />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-8 text-sm text-gray-500">
                    Hover to pause • Auto-scrolling
                </div>
            </div>
        </section>
    );
}
