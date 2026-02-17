'use client';

import React, { useState } from 'react';
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
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white/95 shadow-sm">
      <button
        id={`accordion-button-${item.id}`}
        className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors duration-200 hover:bg-primary-50/65 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
        onClick={onToggle}
        onKeyDown={onKeyDown}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
      >
        <span className="font-semibold text-text">{item.title}</span>
        <svg
          className={cn(
            'h-5 w-5 text-muted-text transition-transform duration-200',
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
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        aria-hidden={!isOpen}
      >
        <div className="min-h-0 bg-surface-2 px-6 py-4 text-muted-text">
          <div>{item.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
