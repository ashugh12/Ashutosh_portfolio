'use client';

import projectsData from '@/data/projects.json';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    thumbnail: string;
    technologies: string[];
    category: string;
    links: {
        live?: string;
        github?: string;
    };
}

function ProjectCard({ title, description, thumbnail, technologies, category, links }: ProjectCardProps) {
    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-violet-200 transition-all duration-500 border border-gray-200 hover:border-violet-300 hover:-translate-y-2">
            {/* Thumbnail with Overlay */}
            <div className="relative h-64 bg-gray-100 overflow-hidden">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-violet-600 backdrop-blur-sm text-xs font-bold text-white rounded-full shadow-lg">
                    {category}
                </div>

                {/* Hover Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {links.live && (
                        <a
                            href={links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-all duration-300 shadow-xl hover:scale-110"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                    {links.github && (
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 shadow-xl hover:scale-110"
                        >
                            <Github size={20} />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-4">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors duration-300">
                        {title}
                    </h3>
                    <ArrowUpRight className="text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={24} />
                </div>

                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-50 text-violet-700 text-xs rounded-lg font-medium border border-gray-200 hover:bg-violet-50 hover:border-violet-400 transition-colors duration-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function ProjectsShowcase() {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-8 md:px-12 bg-gray-100">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-violet-600 to-gray-900 bg-clip-text text-transparent mb-4">
                    Featured Projects
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    A selection of my recent work and side projects
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
}
