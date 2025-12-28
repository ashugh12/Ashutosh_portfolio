'use client';

import careerData from '@/data/career.json';
import { Briefcase, Calendar } from 'lucide-react';

interface TimelineItemProps {
    year: string;
    company: string;
    role: string;
    description: string;
    technologies: string[];
    achievements: string[];
    isLast: boolean;
}

function TimelineItem({ year, company, role, description, technologies, achievements, isLast }: TimelineItemProps) {
    return (
        <div className="relative pl-12 pb-16 group">
            {/* Vertical Line with Gradient */}
            {!isLast && (
                <div className="absolute left-[15px] top-12 bottom-0 w-[3px] bg-gradient-to-b from-violet-400 via-indigo-400 to-violet-400 opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
            )}

            {/* Marker Dot with Glow */}
            <div className="absolute left-0 top-2 w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full ring-4 ring-gray-50 shadow-lg shadow-violet-300/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Briefcase size={14} className="text-white" />
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:shadow-violet-200 transition-all duration-300 border border-gray-200 group-hover:border-violet-300">
                <div className="flex items-center gap-2 text-sm font-semibold text-violet-600 mb-3">
                    <Calendar size={16} />
                    <span>{year}</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors duration-300">
                    {role}
                </h3>

                <div className="text-xl text-gray-700 font-semibold mb-4">{company}</div>

                <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-gray-50 text-violet-700 text-sm rounded-lg font-medium border border-gray-200 hover:border-violet-400 hover:bg-violet-50 transition-colors duration-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-700 mb-3">Key Achievements:</div>
                    {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3 text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{achievement}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function CareerTimeline() {
    return (
        <div className="w-full max-w-5xl mx-auto py-24 px-8 md:px-12 bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-violet-600 to-gray-900 bg-clip-text text-transparent mb-4">
                    Career Timeline
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    My professional journey and key milestones
                </p>
            </div>

            <div className="space-y-0">
                {careerData.map((item, index) => (
                    <TimelineItem
                        key={item.id}
                        {...item}
                        isLast={index === careerData.length - 1}
                    />
                ))}
            </div>
        </div>
    );
}
