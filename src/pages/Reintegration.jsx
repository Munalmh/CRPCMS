import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Reintegration() {
  // If there are tabs (like in BeneficiaryProfile), we can add basic state
  const [activeTab, setActiveTab] = useState('tab-identity');
  
  return (
    <>
      <div className="flex flex-col w-full relative h-full">
{/* Subtle Gradient Background */}
<div className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0 bg-gradient-to-br from-surface-container-low via-surface to-surface-container"></div>
<div className="relative z-10 w-full px-12 py-10">
{/* Section Header */}
<div className="flex items-end justify-between mb-16">
<div className="max-w-xl">
<p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>family_restroom</span> Case ID: #RP-8842-X</p>
<h1 className="font-display-lg text-display-lg text-on-surface mb-4">Reintegration Planning</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Manage the family tracing process, assess caregiver readiness, and finalize placement approvals for child reintegration.</p>
</div>
<div className="flex flex-col items-end">
<span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-caps text-label-caps uppercase shadow-sm">
<span aria-hidden="true" className="w-2 h-2 rounded-full bg-primary"></span>
                  In Progress
              </span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 text-right">Target Date: Oct 24, 2024</p>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-12 gap-6 w-full">
{/* Left Column: Tracker & Tracing Details */}
<div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
{/* Multi-Stage Tracker Card */}
<div className="bg-surface-container-lowest rounded-xl p-8 shadow-md relative overflow-hidden group">
{/* Decorative blur */}
<div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
<h2 className="font-headline-md text-headline-md text-on-surface mb-8 flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant">timeline</span>
                      Reintegration Pathway
                  </h2>
<div className="relative pl-6">
{/* Vertical Timeline Line */}
<div className="absolute left-[15px] top-4 bottom-8 w-0.5 bg-outline-variant/30"></div>
{/* Stage 1: Family Tracing */}
<div className="relative mb-8 pb-4">
<div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface leading-none">Family Tracing</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Initial contact established with extended relatives.</p>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant">Oct 02, 2024</span>
</div>
<div className="mt-4 p-4 bg-surface-container-low rounded-lg shadow-sm border border-outline-variant/20 flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="A portrait photo of an older man with kind eyes, sitting outdoors, shallow depth of field, warm natural lighting, representing an extended family member." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYQ09Lf38X1tMcbvn1eNRDS233L1-2Voo-e4WiypAW2ay9kVp6ioVwcuZlpzql2rOHtKpPT3ispjNlxWrKZZ26mgo7tSDg2zMq1aMSbLYjG9nvSQ--uGeZUkhl8cZPd4w3V-OYwSBbCokoZ5FGzQG6-FNITh3Clcn6rxZ4vLV_qkP9UMCiB2BZvJFLCGb6PChvmmnfuOyN6YRHzz1vMouqXXP3mhL9CROBHBhS81g5zD2k1TDXWLX-"/>
<div>
<p className="font-body-md text-body-md font-bold text-on-surface">Elias Thorne (Grandfather)</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Located in District 4, Village West.</p>
</div>
</div>
</div>
{/* Stage 2: Assessment (Active) */}
<div className="relative mb-8 pb-4">
<div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-surface-container-lowest border-2 border-primary flex items-center justify-center shadow-sm">
<div className="w-2 h-2 rounded-full bg-primary"></div>
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary leading-none">Caregiver Assessment</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Evaluating readiness indicators and household capacity.</p>
</div>
<span className="font-label-caps text-label-caps text-primary bg-primary-container/10 px-2 py-1 rounded-sm">Current Phase</span>
</div>
</div>
{/* Stage 3: Preparation */}
<div className="relative mb-8 pb-4 opacity-50">
<div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-surface-container-low border-2 border-outline-variant flex items-center justify-center">
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface leading-none">Child &amp; Family Preparation</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Counseling and logistical arrangements prior to handover.</p>
</div>
</div>
</div>
{/* Stage 4: Reunification */}
<div className="relative opacity-50">
<div className="absolute -left-[30px] top-1 w-6 h-6 rounded-full bg-surface-container-low border-2 border-outline-variant flex items-center justify-center">
</div>
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface leading-none">Reunification Approval</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Final supervisor sign-off and physical handover.</p>
</div>
</div>
</div>
</div>
</div>
{/* Location Map Placeholder */}
<div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden h-64 relative group">
<div className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" data-location="Kigali, Rwanda" style={{ backgroundColor: '#e2e8f0' }}></div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
<p className="font-label-caps text-label-caps text-white uppercase tracking-wider mb-1 opacity-80">Proposed Placement Location</p>
<p className="font-body-lg text-body-lg text-white font-medium">District 4, Sector B</p>
</div>
</div>
</div>
{/* Right Column: Assessment & Gate */}
<div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
{/* Caregiver Assessment Radar */}
<div className="bg-surface-container-highest rounded-xl p-8 shadow-lg text-on-surface relative">
<h2 className="font-headline-md text-headline-md mb-2">Caregiver Readiness</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Composite score based on home visit data (Oct 10, 2024).</p>
<div className="w-full aspect-square relative flex items-center justify-center mb-4">
{/* Simple CSS Radar Chart Visualization (Decorative) */}
<div className="relative w-full h-full max-w-[280px] max-h-[280px]">
{/* Axis Backgrounds */}
<div className="absolute inset-0 m-auto w-full h-full rounded-full border border-outline-variant/30"></div>
<div className="absolute inset-0 m-auto w-[75%] h-[75%] rounded-full border border-outline-variant/30"></div>
<div className="absolute inset-0 m-auto w-[50%] h-[50%] rounded-full border border-outline-variant/30"></div>
<div className="absolute inset-0 m-auto w-[25%] h-[25%] rounded-full border border-outline-variant/30"></div>
{/* Crosshairs */}
<div className="absolute top-0 bottom-0 left-1/2 w-px bg-outline-variant/30 -translate-x-1/2"></div>
<div className="absolute left-0 right-0 top-1/2 h-px bg-outline-variant/30 -translate-y-1/2"></div>
{/* Data Polygon (Faux SVG) */}
<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
{/* Financial(Top: 60%), Community(Right: 80%), Emotional(Bottom: 90%), Safety(Left: 70%) */}
{/* Coords: Top(50, 20), Right(90, 50), Bottom(50, 95), Left(15, 50) */}
<polygon className="fill-primary/20 stroke-primary stroke-2" points="50,20 90,50 50,95 15,50" style={{ strokeLinejoin: 'round' }}></polygon>
<circle className="fill-primary" cx="50" cy="20" r="2"></circle>
<circle className="fill-primary" cx="90" cy="50" r="2"></circle>
<circle className="fill-primary" cx="50" cy="95" r="2"></circle>
<circle className="fill-primary" cx="15" cy="50" r="2"></circle>
</svg>
{/* Labels */}
<div className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps text-on-surface">Financial</div>
<div className="absolute -right-16 top-1/2 -translate-y-1/2 font-label-caps text-label-caps text-on-surface [writing-mode:vertical-rl] rotate-180">Community</div>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-label-caps text-label-caps text-on-surface">Emotional</div>
<div className="absolute -left-12 top-1/2 -translate-y-1/2 font-label-caps text-label-caps text-on-surface [writing-mode:vertical-rl]">Safety</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="bg-surface-container p-3 rounded-lg text-center">
<p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Overall Score</p>
<p className="font-headline-md text-headline-md text-primary">75%</p>
</div>
<div className="bg-surface-container p-3 rounded-lg text-center">
<p className="font-label-caps text-label-caps text-on-surface-variant mb-1">Risk Level</p>
<p className="font-headline-md text-headline-md text-secondary">Low</p>
</div>
</div>
</div>
{/* Supervisor Gate */}
<div className="bg-surface-container-lowest rounded-xl p-8 shadow-md flex-1 flex flex-col justify-between">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-outline">verified_user</span>
                          Supervisor Approval
                      </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Final sign-off is required before physical reunification can occur. All prerequisite assessments must be completed.</p>
<div className="bg-surface-container-low p-4 rounded-lg mb-6 border-l-4 border-error/50">
<p className="font-body-sm text-body-sm text-on-surface font-medium flex items-start gap-2">
<span className="material-symbols-outlined text-error/70 text-[18px]">warning</span>
                               Action Blocked: Awaiting Assessment Completion
                           </p>
</div>
<div className="space-y-4">
<div>
<label className="font-label-caps text-label-caps text-on-surface-variant block mb-1">Digital Signature</label>
<div className="w-full h-[input-height] bg-surface-container-low rounded border border-outline-variant border-dashed flex items-center justify-center opacity-50 cursor-not-allowed">
<span className="font-body-sm text-body-sm text-outline">Sign Here</span>
</div>
</div>
</div>
</div>
<button className="w-full py-3 mt-6 bg-primary/50 text-white font-label-caps text-label-caps uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 cursor-not-allowed transition-all" disabled="">
<span className="material-symbols-outlined text-[18px]">lock</span>
                      Authorize Reunification
                  </button>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}
