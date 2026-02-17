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
        <section className={cn("relative -mt-24 w-full overflow-hidden bg-primary-dark pb-20 pt-36", className)}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-600" />
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url('${backgroundImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(200,154,43,0.34),transparent_30%),radial-gradient(circle_at_90%_0%,rgba(255,255,255,0.18),transparent_28%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <div className="pointer-events-none absolute -left-24 top-14 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-4 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />

            <div className="container relative z-10 mx-auto px-4 text-center">
                <span className="mb-4 inline-flex rounded-full border border-white/35 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                    ECE Department
                </span>
                <h1 className="mx-auto max-w-4xl text-4xl font-bold font-heading leading-tight text-white md:text-5xl">
                    {title}
                </h1>
                {description && (
                    <p className="mx-auto mt-6 max-w-3xl text-base text-primary-50 md:text-lg">
                        {description}
                    </p>
                )}
                <div className="mx-auto mt-8 h-1.5 w-20 rounded-full bg-gradient-to-r from-accent to-accent-light" />
            </div>
        </section>
    );
};

export default PageHeader;
