'use client';

export default function ResumePreview() {
    return (
        <div className="w-full max-w-7xl mx-auto py-24 px-8 md:px-12 bg-gray-50">
            {/* PDF Preview */}
            <div className="relative w-full bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="w-full" style={{ height: '800px' }}>
                    <iframe
                        src="/resume.pdf"
                        className="w-full h-full"
                        title="Resume Preview"
                        style={{ border: 'none' }}
                    />
                </div>

                {/* Fallback message for browsers that don't support iframe */}
                <noscript>
                    <div className="p-8 text-center">
                        <p className="text-gray-600 mb-4">
                            Your browser doesn't support PDF preview.
                        </p>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-all duration-300"
                        >
                            <span>Open Resume</span>
                        </a>
                    </div>
                </noscript>
            </div>
        </div>
    );
}
