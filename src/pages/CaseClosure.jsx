import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CaseClosure() {
  // If there are tabs (like in BeneficiaryProfile), we can add basic state
  const [activeTab, setActiveTab] = useState('tab-identity');
  
  return (
    <>
      <div className="flex flex-col w-full relative">
<div className="px-8 pb-12 w-full max-w-[1440px] mx-auto">
<div className="mb-10 mt-8 relative">
<div className="w-full bg-surface-container-high rounded-xl p-8 overflow-hidden shadow-sm flex items-center justify-between relative group">
<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<h1 className="font-display-lg text-display-lg text-on-surface mb-2">Case Closure &amp; Archive</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Finalize case documentation, record outcomes, and submit for supervisor approval. Archived cases are restricted to read-only access.</p>
</div>
<div className="relative z-10 w-24 h-24 bg-surface-container rounded-full flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
</div>
</div>
</div>
<div className="grid grid-cols-12 gap-6 relative">
<div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
<div className="bg-surface-container-lowest rounded-xl shadow-md p-8 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
<div className="flex items-center gap-4 mb-8">
<span className="material-symbols-outlined text-primary bg-primary-container/20 p-3 rounded-xl">check_circle</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Closure Request Form</h2>
</div>
<form className="space-y-8" id="closure-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Case ID</label>
<div className="h-input-height px-4 bg-surface-container rounded flex items-center shadow-sm">
<span className="font-body-md text-body-md text-on-surface font-semibold">CRP-2023-8942A</span>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Beneficiary Name</label>
<div className="h-input-height px-4 bg-surface-container rounded flex items-center shadow-sm">
<span className="font-body-md text-body-md text-on-surface">Amina M.</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest" htmlFor="closure-reason">Closure Reason</label>
<select className="w-full h-input-height px-4 bg-surface-container-lowest border border-outline-variant rounded focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm appearance-none font-body-md text-body-md text-on-surface transition-colors cursor-pointer" id="closure-reason">
<option disabled="" selected="" value="">Select primary reason for closure...</option>
<option value="successful">Successful Reintegration</option>
<option value="aged-out">Aged Out of Program</option>
<option value="transferred">Transferred to External Agency</option>
<option value="lost-contact">Lost Contact / Untraceable</option>
<option value="deceased">Deceased</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest" htmlFor="outcome-summary">Final Outcome Summary</label>
<textarea className="w-full p-4 bg-surface-container-lowest border border-outline-variant rounded focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm font-body-md text-body-md text-on-surface resize-none transition-colors" id="outcome-summary" placeholder="Provide a detailed summary of the case outcome, final status of the beneficiary, and any concluding remarks..." rows="5"></textarea>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest" htmlFor="supervisor-review">Supervisor Reviewer</label>
<select className="w-full h-input-height px-4 bg-surface-container-lowest border border-outline-variant rounded focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm appearance-none font-body-md text-body-md text-on-surface transition-colors cursor-pointer" id="supervisor-review">
<option disabled="" selected="" value="">Select authorizing supervisor...</option>
<option value="sup1">Dr. Sarah Jenkins (Regional Dir.)</option>
<option value="sup2">Marcus Thorne (Senior Case Mgr.)</option>
<option value="sup3">Elena Rodriguez (Protection Lead)</option>
</select>
</div>
<div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl">
<span className="material-symbols-outlined text-outline">info</span>
<p className="font-body-sm text-body-sm text-on-surface-variant flex-1">By submitting this request, you confirm that all mandatory forms, assessments, and handover documents are finalized and attached to the digital file.</p>
<button className="px-6 py-2 bg-primary text-on-primary font-body-md text-body-md rounded shadow-sm hover:shadow-md hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary whitespace-nowrap" type="button">
                           Submit for Approval
                       </button>
</div>
</form>
</div>
</div>
<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
<div className="bg-surface-container-high rounded-xl shadow-md p-8 relative overflow-hidden group">
<div className="absolute inset-0 z-0">
<div className="w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, var(--tw-colors-primary-container) 2px, transparent 0)', backgroundSize: '24px 24px' }}></div>
</div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Archive Preview</h3>
<span className="material-symbols-outlined text-primary opacity-50">visibility</span>
</div>
<div className="bg-error-container/20 border border-error-container rounded-xl overflow-hidden mb-6 shadow-sm group-hover:-translate-y-1 transition-transform duration-300">
<div className="bg-error px-4 py-2 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-on-error text-sm">lock</span>
<span className="font-label-caps text-label-caps text-on-error uppercase tracking-widest">Case Archived</span>
</div>
<div className="p-4 bg-surface-container-lowest/50 backdrop-blur-sm">
<div className="flex justify-between items-center mb-2">
<span className="font-body-sm text-body-sm text-on-surface-variant">Closed On:</span>
<span className="font-label-caps text-label-caps text-on-surface">12 OCT 2023</span>
</div>
<div className="flex justify-between items-center">
<span className="font-body-sm text-body-sm text-on-surface-variant">Auth By:</span>
<span className="font-label-caps text-label-caps text-on-surface">M. Thorne</span>
</div>
</div>
</div>
<button className="w-full py-3 bg-surface-container-lowest border border-outline-variant text-primary font-body-md text-body-md rounded shadow-sm hover:bg-primary-container hover:text-on-primary-container hover:border-primary-container transition-all flex items-center justify-center gap-2 focus:outline-none">
<span className="material-symbols-outlined text-sm">key</span>
                       Controlled Case Reopening Request
                   </button>
<p className="font-body-sm text-body-sm text-on-surface-variant text-center mt-4">Requires Level 3 Administrative Approval</p>
</div>
</div>
<div className="bg-surface-container rounded-xl shadow-md p-6 relative overflow-hidden">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Closure Checklist</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
</div>
<span className="font-body-md text-body-md text-on-surface">Final Assessment Completed</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
</div>
<span className="font-body-md text-body-md text-on-surface">Support Services Terminated</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-sm">more_horiz</span>
</div>
<span className="font-body-md text-body-md text-on-surface-variant">Exit Interview Logged</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant">
<div className="flex justify-between items-end">
<div className="flex flex-col">
<span className="font-display-lg text-display-lg text-primary leading-none mb-1">66%</span>
<span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">Readiness</span>
</div>
<svg className="w-12 h-12 transform -rotate-90" viewbox="0 0 36 36">
<path className="text-surface-container-highest stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-width="3"></path>
<path className="text-primary stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke-dasharray="66, 100" stroke-width="3"></path>
</svg>
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
