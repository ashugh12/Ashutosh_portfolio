'use client';

import { Code2, Database, Brain, Wrench, Cloud, Layers } from 'lucide-react';

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: string[];
    color: string;
}

const skillCategories: SkillCategory[] = [
    {
        title: "Frontend Development",
        icon: <Code2 size={24} />,
        skills: ["React.js", "Next.js", "React Native", "Expo", "HTML/CSS", "Tailwind CSS", "DaisyUI", "JavaScript", "TypeScript", "AJAX"],
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Backend Development",
        icon: <Layers size={24} />,
        skills: ["Node.js", "Express.js", "FastAPI", "Flask", "Spring Boot", "REST APIs", "Socket.io", "Microservices", "SOA", "Java"],
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "AI & Machine Learning",
        icon: <Brain size={24} />,
        skills: ["OpenAI", "Gemini AI", "HuggingFace Transformers", "OpenCV", "Python", "NLP", "Saliency Mapping", "Machine Learning"],
        color: "from-violet-500 to-purple-500"
    },
    {
        title: "Databases",
        icon: <Database size={24} />,
        skills: ["MySQL", "MongoDB", "NoSQL", "Redis", "Database Design", "DBMS", "SQL"],
        color: "from-orange-500 to-red-500"
    },
    {
        title: "Cloud & DevOps",
        icon: <Cloud size={24} />,
        skills: ["AWS", "Docker", "Docker Compose", "CI/CD", "GitHub Actions", "Linux/Unix", "Windows"],
        color: "from-sky-500 to-blue-500"
    },
    {
        title: "Tools & Others",
        icon: <Wrench size={24} />,
        skills: ["Git", "Version Control", "Figma", "Puppeteer", "Cursor", "VS Code", "Warp", "Supabase", "Razorpay", "Celery"],
        color: "from-pink-500 to-rose-500"
    }
];

function SkillCard({ category }: { category: SkillCategory }) {
    return (
        <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:shadow-violet-200 transition-all duration-300 border border-gray-200 hover:border-violet-300">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors duration-300">
                    {category.title}
                </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-gray-50 text-gray-700 text-sm rounded-lg font-medium border border-gray-200 hover:bg-violet-50 hover:text-violet-700 hover:border-violet-400 transition-colors duration-200"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-8 md:px-12 bg-gray-100">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-violet-600 to-gray-900 bg-clip-text text-transparent mb-4">
                    Technical Skills
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    A comprehensive overview of my technical expertise across different domains
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                    <SkillCard key={index} category={category} />
                ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl border border-violet-200 shadow-md">
                    <span className="text-gray-700 font-medium">Core CS:</span>
                    <span className="text-violet-600 font-semibold">Data Structures & Algorithms • OOP • Operating Systems • Computer Networks</span>
                </div>
            </div>
        </div>
    );
}
