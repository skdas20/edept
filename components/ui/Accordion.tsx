'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className,
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string, index: number) => {
    const { key } = e;

    if (key === 'Enter' || key === ' ') {
      e.preventDefault();
      toggleItem(id);
    } else if (key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % items.length;
      const nextButton = document.getElementById(`accordion-button-${items[nextIndex].id}`);
      nextButton?.focus();
    } else if (key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + items.length) % items.length;
      const prevButton = document.getElementById(`accordion-button-${items[prevIndex].id}`);
      prevButton?.focus();
    }
  };

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item, index) => (
        <AccordionItemComponent
          key={item.id}
          item={item}
          isOpen={openItems.includes(item.id)}
          onToggle={() => toggleItem(item.id)}
          onKeyDown={(e) => handleKeyDown(e, item.id, index)}
        />
      ))}
    </div>
  );
};

interface AccordionItemComponentProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

const AccordionItemComponent: React.FC<AccordionItemComponentProps> = ({
  item,
  isOpen,
  onToggle,
  onKeyDown,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current;
      setHeight(contentEl?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border border-[#E2E8F0] rounded-lg overflow-hidden">
      <button
        id={`accordion-button-${item.id}`}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-[#F1F5F9] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
        onClick={onToggle}
        onKeyDown={onKeyDown}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
      >
        <span className="font-semibold text-[#0F172A]">{item.title}</span>
        <svg
          className={cn(
            'w-5 h-5 text-[#475569] transition-transform duration-200',
            isOpen && 'transform rotate-180'
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id={`accordion-content-${item.id}`}
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ height: height }}
        aria-hidden={!isOpen}
      >
        <div className="px-6 py-4 text-[#475569] bg-[#F1F5F9]">
          {item.content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
