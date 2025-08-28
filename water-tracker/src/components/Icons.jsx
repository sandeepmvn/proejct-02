import React from 'react';

export const PlusIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

export const MinusIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
);

export const WaterDropIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2c-1.1 0-2 .9-2 2 0 3.14 4 8 4 8s4-4.86 4-8c0-1.1-.9-2-2-2s-2 .9-2 2zm0 16c-2.21 0-4-1.79-4-4 0-1.1.9-2 2-2s2 .9 2 2 .9 2 2 2 2-.9 2-2-.9-2-2-2s-2 .9-2 2c0 2.21-1.79 4-4 4z"/>
  </svg>
);
