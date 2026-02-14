import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
    title: string;
    description?: string;
    backgroundImage?: string;
    className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    description,
    backgroundImage = '/images/pattern-bg.svg',
    className
}) => {
    return (
        <section className={cn("relative w-full bg-primary-dark pt-32 pb-20 overflow-hidden -mt-20", className)}>
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('/images/pattern-bg.svg')] opacity-30"></div>
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent rounded-full blur-[100px] opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-600 rounded-full blur-[80px] opacity-40"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4 animate-fade-in-up">
                    {title}
                </h1>
                {description && (
                    <div className="w-20 h-1.5 bg-accent rounded-full mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}></div>
                )}
                {description && (
                    <p className="text-lg text-primary-50 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHeader;
