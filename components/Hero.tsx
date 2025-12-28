'use client';

import { useState } from 'react';
import { Github, Linkedin, Twitter, FileText, Send, Sparkles } from 'lucide-react';

export default function Hero() {
    const [message, setMessage] = useState('');

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            window.location.href = `mailto:hello@ashutosh.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}`;
            setMessage('');
        }
    };

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-gray-50">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf615_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf615_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
                {/* Profile Image with Glow Effect */}
                <div className="relative mb-8 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-white shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                            alt="Ashutosh"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-xs px-4 py-1.5 rounded-full whitespace-nowrap font-semibold shadow-lg flex items-center gap-1.5">
                        <Sparkles size={12} className="animate-pulse" />
                        Building Something New
                    </div>
                </div>

                {/* Name with Gradient */}
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-violet-600 to-gray-900 bg-clip-text text-transparent mb-6 tracking-tight">
                    Ashutosh
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-12 leading-relaxed font-light">
                    Crafting digital experiences with <span className="font-semibold text-violet-600">code</span> and <span className="font-semibold text-violet-600">design</span>.
                    <br className="hidden md:block" />
                    Focused on minimalism and performance.
                </p>

                {/* Social Links with Hover Effects */}
                <div className="flex items-center gap-3 mb-12 flex-wrap justify-center">
                    <a
                        href="#resume"
                        className="group flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-all duration-300 shadow-lg hover:shadow-violet-500/50 hover:-translate-y-0.5"
                    >
                        <FileText size={18} />
                        <span className="font-medium">Resume</span>
                    </a>
                    <a
                        href="https://github.com/ashutosh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-gray-200"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://linkedin.com/in/ashutosh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-gray-700 hover:text-blue-600 bg-white hover:bg-blue-50 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-gray-200"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="https://twitter.com/ashutosh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-gray-700 hover:text-sky-500 bg-white hover:bg-sky-50 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-gray-200"
                        aria-label="Twitter"
                    >
                        <Twitter size={24} />
                    </a>
                </div>

                {/* Enhanced Contact Input */}
                <form onSubmit={handleSend} className="w-full max-w-lg">
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                        <div className="relative flex items-center gap-2 bg-white rounded-2xl p-2 pl-6 shadow-xl border border-gray-200">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Send me a message..."
                                className="flex-1 bg-transparent outline-none text-gray-900 placeholder:text-gray-400 text-lg"
                            />
                            <button
                                type="submit"
                                disabled={!message.trim()}
                                className="p-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl hover:from-violet-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-violet-500/50 hover:scale-105 active:scale-95"
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-violet-400 rounded-full flex justify-center">
                    <div className="w-1.5 h-3 bg-violet-500 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}
