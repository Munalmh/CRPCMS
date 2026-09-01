import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Reporting() {
  // If there are tabs (like in BeneficiaryProfile), we can add basic state
  const [activeTab, setActiveTab] = useState('tab-identity');
  
  return (
    <>
      <div className="flex flex-col w-full h-full">
<div className="px-8 py-6 bg-surface-container-low border-b border-outline-variant flex justify-between items-center z-10 sticky top-0 shadow-sm backdrop-blur-md bg-opacity-90">
<div>
<h1 className="font-headline-md text-headline-md text-on-surface">Reporting &amp; M&amp;E Engine</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Aggregated analytics and monitoring evaluation metrics.</p>
</div>
<div className="flex gap-2 bg-error-container text-on-error-container px-4 py-2 rounded-full items-center shadow-sm">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
<span className="font-label-caps text-label-caps">PII Stripped: Anonymized aggregate metrics only.</span>
</div>
</div>
<div className="px-8 py-4 bg-surface shadow-sm sticky top-[88px] z-10">
<div className="flex gap-6 overflow-x-auto">
<button className="relative pb-2 font-headline-sm text-headline-sm text-primary border-b-2 border-primary whitespace-nowrap">
        Operational View
      </button>
<button className="relative pb-2 font-headline-sm text-headline-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">
        Programme View
      </button>
<button className="relative pb-2 font-headline-sm text-headline-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">
        Management View
      </button>
<button className="relative pb-2 font-headline-sm text-headline-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap">
        Donor View
      </button>
</div>
</div>
<div className="p-8 grid grid-cols-12 gap-gutter">
<div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-gutter">
<div className="col-span-2 bg-surface-container rounded-xl p-6 shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Active Caseload by Stage</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Current distribution across the intervention lifecycle.</p>
</div>
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="h-64 flex items-end gap-2 px-4 pb-4 border-b border-outline-variant">
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-primary-container rounded-t-sm h-[80%] relative transition-all group-hover:bg-primary">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">342</div>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant whitespace-nowrap">Intake</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-primary-container rounded-t-sm h-[60%] relative transition-all group-hover:bg-primary">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">256</div>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant whitespace-nowrap">Assessment</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-primary-container rounded-t-sm h-[90%] relative transition-all group-hover:bg-primary">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">384</div>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant whitespace-nowrap">Planning</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-primary-container rounded-t-sm h-[40%] relative transition-all group-hover:bg-primary">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">171</div>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant whitespace-nowrap">Implementation</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-primary-container rounded-t-sm h-[30%] relative transition-all group-hover:bg-primary">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">128</div>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant whitespace-nowrap">Closure</span>
</div>
</div>
</div>
<div className="col-span-1 bg-surface-container rounded-xl p-6 shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Outcome Completion</h2>
<span className="material-symbols-outlined text-outline">trending_up</span>
</div>
<div className="relative w-48 h-48 mx-auto flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle className="text-surface-variant" cx="50" cy="50" fill="none" r="40" stroke="currentColor" stroke-width="12"></circle>
<circle className="text-primary transition-all duration-1000 ease-out" cx="50" cy="50" fill="none" r="40" stroke="currentColor" stroke-dasharray="251.2" stroke-dashoffset="62.8" stroke-width="12"></circle>
</svg>
<div className="absolute flex flex-col items-center justify-center">
<span className="font-display-lg text-display-lg text-on-surface">75%</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Success Rate</span>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-4">
<div>
<div className="font-label-caps text-label-caps text-on-surface-variant">Target</div>
<div className="font-body-lg text-body-lg text-on-surface font-semibold">85%</div>
</div>
<div>
<div className="font-label-caps text-label-caps text-on-surface-variant">Variance</div>
<div className="font-body-lg text-body-lg text-error font-semibold">-10%</div>
</div>
</div>
</div>
<div className="col-span-1 bg-surface-container rounded-xl p-6 shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Key Metrics</h2>
<span className="material-symbols-outlined text-outline">analytics</span>
</div>
<div className="flex flex-col gap-4">
<div className="p-4 bg-surface rounded-lg border border-outline-variant flex justify-between items-center group hover:border-primary transition-colors">
<div>
<div className="font-label-caps text-label-caps text-on-surface-variant">Total Cases (YTD)</div>
<div className="font-display-lg text-display-lg text-on-surface mt-1">4,291</div>
</div>
<div className="flex items-center text-primary bg-primary-container/20 px-2 py-1 rounded">
<span className="material-symbols-outlined text-sm">arrow_upward</span>
<span className="font-label-caps text-label-caps ml-1">12%</span>
</div>
</div>
<div className="p-4 bg-surface rounded-lg border border-outline-variant flex justify-between items-center group hover:border-primary transition-colors">
<div>
<div className="font-label-caps text-label-caps text-on-surface-variant">Avg Resolution Time</div>
<div className="font-display-lg text-display-lg text-on-surface mt-1">45d</div>
</div>
<div className="flex items-center text-error bg-error-container/20 px-2 py-1 rounded">
<span className="material-symbols-outlined text-sm">arrow_downward</span>
<span className="font-label-caps text-label-caps ml-1">3%</span>
</div>
</div>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
<div className="bg-surface-container rounded-xl p-6 shadow-sm border border-outline-variant flex-1 flex flex-col hover:shadow-md transition-shadow relative overflow-hidden">
<div className="flex justify-between items-start mb-4 relative z-10">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Regional Distribution</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Heatmap of intervention density across Nepal.</p>
</div>
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">fullscreen</span></button>
</div>
<div className="flex-1 rounded-lg overflow-hidden border border-outline-variant relative group">
<div className="w-full h-full min-h-[300px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-location="Nepal" style={{ backgroundColor: '#e2e8f0' }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container/90 to-transparent pointer-events-none"></div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-error animate-pulse"></span>
<span className="font-label-caps text-label-caps text-on-surface">High Density Zone (Kathmandu)</span>
</div>
<div className="text-right">
<div className="font-headline-sm text-headline-sm text-on-surface">1,420</div>
<div className="font-label-caps text-label-caps text-on-surface-variant">Active Cases</div>
</div>
</div>
</div>
</div>
<div className="bg-primary text-on-primary rounded-xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-9xl">download</span>
</div>
<div className="relative z-10 mb-6">
<h3 className="font-headline-md text-headline-md mb-2">Export Data File</h3>
<p className="font-body-sm text-body-sm opacity-80">Download anonymized raw data for external processing.</p>
</div>
<div className="relative z-10 flex gap-2">
<button className="bg-on-primary text-primary px-4 py-2 rounded-lg font-label-caps text-label-caps flex items-center gap-2 hover:bg-surface-variant transition-colors shadow-sm">
<span className="material-symbols-outlined text-sm">grid_on</span> CSV
              </button>
<button className="bg-primary-container text-on-primary px-4 py-2 rounded-lg font-label-caps text-label-caps flex items-center gap-2 hover:bg-primary-fixed transition-colors shadow-sm border border-outline/30">
<span className="material-symbols-outlined text-sm">picture_as_pdf</span> PDF
              </button>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}
