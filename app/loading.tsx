import React from 'react';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary-dark overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[url('/images/circuit-pattern.svg')] opacity-5 animate-spin-slow"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark opacity-90"></div>
            </div>

            {/* Central Loader Content */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Animated Icon Container */}
                <div className="relative w-24 h-24 mb-8">
                    <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-ping-slow"></div>
                    <div className="absolute inset-0 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-2 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">ECE</span>
                    </div>
                </div>

                {/* Text Reveal */}
                <div className="text-center space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase animate-pulse">
                        Department of
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent animate-gradient-x">
                        Electronics & Communication
                    </h1>
                    <p className="text-primary-50 text-sm tracking-widest uppercase mt-4 opacity-80">
                        Institute of Engineering & Management
                    </p>
                </div>

                {/* Loading Progress Bar */}
                <div className="w-64 h-1 bg-white/10 rounded-full mt-12 overflow-hidden">
                    <div className="h-full bg-accent animate-progress-indeterminate"></div>
                </div>
            </div>
        </div>
    );
}
