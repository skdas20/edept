'use client';

import { Button, Card, Accordion, Skeleton } from '../../components/ui';

export default function ComponentsDemo() {
  const accordionItems = [
    {
      id: '1',
      title: 'What is the EEE Department?',
      content: 'The Electronics and Communication Engineering department offers comprehensive programs in electronics, communication systems, and embedded technologies.',
    },
    {
      id: '2',
      title: 'What programs do we offer?',
      content: 'We offer undergraduate and postgraduate programs in Electronics and Communication Engineering with specializations in various domains.',
    },
    {
      id: '3',
      title: 'How can I apply?',
      content: 'Applications can be submitted through our online portal during the admission period. Check our website for specific dates and requirements.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-[#0F172A] mb-2">UI Components Demo</h1>
          <p className="text-[#475569]">Testing the core UI components for the EEE website</p>
        </div>

        {/* Button Component */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#0F172A]">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="primary" loading>Loading</Button>
            <Button variant="primary" href="/">Link Button</Button>
          </div>
        </section>

        {/* Card Component */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#0F172A]">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              variant="default"
              title="Default Card"
              description="This is a default card with border styling."
              footer={<Button variant="outline" size="sm">Learn More</Button>}
            />
            <Card
              variant="elevated"
              title="Elevated Card"
              description="This card has a shadow effect for elevation."
              footer={<Button variant="primary" size="sm">View Details</Button>}
            />
            <Card
              variant="outlined"
              title="Outlined Card"
              description="This card has a prominent border outline."
              href="/"
            />
          </div>
        </section>

        {/* Accordion Component */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#0F172A]">Accordion</h2>
          <Accordion items={accordionItems} />
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Multiple Open</h3>
            <Accordion items={accordionItems} allowMultiple defaultOpen={['1', '2']} />
          </div>
        </section>

        {/* Skeleton Component */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#0F172A]">Skeleton Loaders</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Text Skeleton</h3>
              <Skeleton variant="text" count={3} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Circular Skeleton</h3>
              <div className="flex gap-4">
                <Skeleton variant="circular" width={64} height={64} />
                <Skeleton variant="circular" width={80} height={80} />
                <Skeleton variant="circular" width={96} height={96} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Rectangular Skeleton</h3>
              <Skeleton variant="rectangular" height={200} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
