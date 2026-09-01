import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RescueHandover() {
  // If there are tabs (like in BeneficiaryProfile), we can add basic state
  const [activeTab, setActiveTab] = useState('tab-identity');
  
  return (
    <>
      <div className="flex flex-col w-full h-full">
<div className="px-8 py-8 flex items-center justify-between">
<div>
<h1 className="font-display-lg text-display-lg text-on-surface">Rescue &amp; Admission</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Process urgent intake and immediate protection protocols.</p>
</div>
<div className="flex gap-4">
<button className="bg-surface-container border border-outline-variant text-on-surface px-6 py-3 rounded-full font-label-caps text-label-caps hover:bg-surface-variant transition-colors flex items-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">print</span>
        PRINT PROTOCOL
      </button>
<button className="bg-primary text-on-primary px-6 py-3 rounded-full font-label-caps text-label-caps hover:opacity-90 transition-opacity flex items-center gap-2 shadow-md">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
        FINALIZE ADMISSION
      </button>
</div>
</div>
<div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-8 pb-12">
{/* LEFT PANEL: Rescue Details */}
<div className="col-span-1 lg:col-span-5 flex flex-col gap-6">
<div className="bg-surface-container-lowest rounded-xl shadow-md p-6 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<span className="bg-error-container text-on-error-container font-label-caps text-label-caps px-3 py-1 rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">priority_high</span> URGENT
          </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">location_on</span>
          Rescue Operation Details
        </h2>
<div className="w-full h-48 rounded-lg mb-6 overflow-hidden shadow-sm relative group cursor-pointer" data-location="Kathmandu, Nepal" style={{  }}>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
<div className="bg-surface/90 backdrop-blur-sm px-4 py-2 rounded-full font-label-caps text-label-caps text-on-surface flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
<span className="material-symbols-outlined text-[16px]">expand_content</span> EXPAND MAP
                 </div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">OPERATION DATE</span>
<span className="font-body-lg text-body-lg text-on-surface font-semibold">Oct 24, 2023 - 14:30</span>
</div>
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">SOURCE AGENCY</span>
<span className="font-body-lg text-body-lg text-on-surface font-semibold flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">local_police</span> Nepal Police
             </span>
</div>
<div className="col-span-2">
<span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">LOCATION SPECIFICS</span>
<span className="font-body-md text-body-md text-on-surface">Thamel District, Sector 4, near Central Bus Terminal. Subject found accompanied by unidentified adults.</span>
</div>
</div>
</div>
<div className="bg-surface-container-low rounded-xl shadow-sm p-6 relative overflow-hidden">
<div className="absolute -right-12 -top-12 w-40 h-40 bg-secondary/10 rounded-full blur-2xl pointer-events-none"></div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Accompanying Personnel</h3>
<div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg shadow-sm mb-3 group hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary font-headline-sm">SI</div>
<div>
<div className="font-body-md text-body-md text-on-surface font-semibold">Sub-Inspector R. Sharma</div>
<div className="font-label-caps text-label-caps text-on-surface-variant">Badge: NP-88342</div>
</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors cursor-pointer">assignment_ind</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg shadow-sm group hover:shadow-md transition-shadow">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary font-headline-sm">SW</div>
<div>
<div className="font-body-md text-body-md text-on-surface font-semibold">Social Worker T. Gurung</div>
<div className="font-label-caps text-label-caps text-on-surface-variant">ID: NGO-441</div>
</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors cursor-pointer">assignment_ind</span>
</div>
</div>
</div>
{/* RIGHT PANEL: Needs & Documentation */}
<div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
{/* Immediate Needs Checklist */}
<div className="bg-surface-container-highest rounded-xl shadow-md p-6">
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-1">Immediate Protection Needs</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Complete mandatory 24-hour protocols.</p>
<div className="space-y-4">
{/* Item 1 */}
<label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg shadow-sm cursor-pointer hover:bg-surface transition-colors">
<div className="flex items-center gap-4">
<div className="relative flex items-center">
<input checked="" className="w-6 h-6 rounded border-outline-variant text-primary focus:ring-primary focus:ring-offset-surface-container-lowest bg-surface transition-all duration-200 ease-in-out cursor-pointer" type="checkbox"/>
</div>
<div>
<div className="font-body-md text-body-md text-on-surface font-semibold flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary">gite</span> Emergency Shelter Assigned
                     </div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Transferred to Transit Home A.</div>
</div>
</div>
<span className="font-label-caps text-label-caps text-primary bg-primary/10 px-2 py-1 rounded">COMPLETED</span>
</label>
{/* Item 2 */}
<label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg shadow-sm cursor-pointer hover:bg-surface transition-colors">
<div className="flex items-center gap-4">
<div className="relative flex items-center">
<input className="w-6 h-6 rounded border-outline-variant text-primary focus:ring-primary focus:ring-offset-surface-container-lowest bg-surface transition-all duration-200 ease-in-out cursor-pointer" type="checkbox"/>
</div>
<div>
<div className="font-body-md text-body-md text-on-surface font-semibold flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-error">local_hospital</span> Initial Medical Screening
                     </div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Requires standard pediatric check.</div>
</div>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-variant px-2 py-1 rounded">PENDING</span>
</label>
{/* Item 3 */}
<label className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-lg shadow-sm cursor-pointer hover:bg-surface transition-colors">
<div className="flex items-center gap-4">
<div className="relative flex items-center">
<input className="w-6 h-6 rounded border-outline-variant text-primary focus:ring-primary focus:ring-offset-surface-container-lowest bg-surface transition-all duration-200 ease-in-out cursor-pointer" type="checkbox"/>
</div>
<div>
<div className="font-body-md text-body-md text-on-surface font-semibold flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-secondary">gavel</span> Legal Documentation Initiated
                     </div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">FIR copy required from Police.</div>
</div>
</div>
<span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-variant px-2 py-1 rounded">PENDING</span>
</label>
</div>
</div>
{/* Document Preview & Signature */}
<div className="bg-surface-container-lowest rounded-xl shadow-md p-6 flex flex-col flex-1 border-t-4 border-primary">
<div className="flex justify-between items-center mb-6">
<h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">description</span> Handover Certificate
            </h2>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-variant flex items-center justify-center text-on-surface transition-colors" title="Zoom Out">
<span className="material-symbols-outlined text-[18px]">zoom_out</span>
</button>
<button className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-variant flex items-center justify-center text-on-surface transition-colors" title="Zoom In">
<span className="material-symbols-outlined text-[18px]">zoom_in</span>
</button>
</div>
</div>
{/* Faux Document Preview */}
<div className="flex-1 bg-surface rounded-lg border border-outline-variant p-8 font-body-sm text-on-surface overflow-y-auto max-h-[300px] shadow-inner relative">
<div className="text-center mb-6 border-b border-outline-variant pb-4">
<h3 className="font-headline-sm text-headline-sm uppercase tracking-wider mb-1">Official Handover Record</h3>
<p className="font-label-caps text-label-caps text-on-surface-variant">Form ID: HOC-2023-8891</p>
</div>
<p className="mb-4 leading-relaxed">
                 This document certifies the official transfer of custody of the individual identified as <strong>Case #492-A</strong> from <strong>Nepal Police, Thamel Sector</strong> to the care of <strong>CRPCMS Intake Facility</strong>, effective <strong>October 24, 2023 at 14:30 NPT</strong>.
             </p>
<p className="mb-8 leading-relaxed">
                 The receiving agency acknowledges responsibility for immediate shelter, medical screening, and initiation of standard protection protocols as per the prevailing legal framework.
             </p>
{/* Signature Block inside document */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 pt-8">
<div>
<div className="border-b border-outline-variant pb-2 mb-2 min-h-[60px] flex items-end">
{/* Handover Agent Signature would go here */}
<span className="font-[Brush_Script_MT,cursive] text-2xl text-secondary/60 ml-4">R. Sharma</span>
</div>
<p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Handing Over Authority</p>
<p className="font-body-sm text-body-sm">Sub-Inspector R. Sharma</p>
</div>
<div>
<div className="border-b border-primary pb-2 mb-2 min-h-[60px] bg-primary/5 rounded-t relative group cursor-crosshair">
<div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none">
<span className="font-label-caps text-label-caps text-primary tracking-widest">SIGN HERE</span>
</div>
{/* Canvas for digital signature */}
<canvas className="w-full h-[60px] cursor-crosshair" id="signaturePad"></canvas>
</div>
<div className="flex justify-between items-start">
<div>
<p className="font-label-caps text-label-caps text-primary uppercase font-bold">Receiving Authority</p>
<p className="font-body-sm text-body-sm">Case Worker ID: CMS-4920</p>
</div>
<button className="text-[10px] uppercase font-bold text-outline hover:text-error transition-colors underline" onclick="clearSignature()">Clear</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
