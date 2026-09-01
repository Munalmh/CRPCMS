import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CaseIntake() {
  // If there are tabs (like in BeneficiaryProfile), we can add basic state
  const [activeTab, setActiveTab] = useState('tab-identity');
  
  return (
    <>
      <div className="flex flex-col w-full relative">
{/* Duplicate Match Alert Banner (Absolute overlay for demonstration, or fixed at top of content area) */}
<div className="absolute top-4 right-4 z-50 max-w-md w-full bg-error-container text-on-error-container p-6 rounded-xl shadow-xl transform transition-transform duration-300 ease-in-out translate-y-0 opacity-100 flex items-start gap-4" id="duplicate-alert">
<span className="material-symbols-outlined text-error text-3xl">warning</span>
<div className="flex-1">
<h3 className="font-headline-sm text-headline-sm mb-1 text-error">Duplicate Match Found</h3>
<p className="font-body-sm text-body-sm mb-4">Potential Longitudinal Profile Match Found (CAS-8871) for "Sarah Johnson" - Link or Create New?</p>
<div className="flex gap-3">
<button className="px-4 py-2 bg-error text-on-error rounded font-body-sm text-body-sm hover:bg-error/90 transition-colors shadow-md">Link Profile</button>
<button className="px-4 py-2 text-error bg-transparent border border-error rounded font-body-sm text-body-sm hover:bg-error/10 transition-colors">Create New</button>
</div>
</div>
<button className="text-error/70 hover:text-error transition-colors" onclick="document.getElementById('duplicate-alert').style.display='none'">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="px-margin-desktop py-8 max-w-7xl mx-auto w-full flex-1">
{/* Header Section */}
<div className="flex items-end justify-between mb-12">
<div>
<h1 className="font-display-lg text-display-lg text-on-surface mb-2 tracking-tight">Case Intake &amp; Triage</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Capture initial details, verify identity against existing records, and assign immediate priority levels for new intakes.</p>
</div>
<div className="flex items-center gap-4 bg-surface-container-high px-4 py-2 rounded-lg shadow-sm">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Current Status:</span>
<div className="flex items-center gap-1.5 text-primary">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-body-sm text-body-sm font-semibold">Active Triage</span>
</div>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-8">
{/* Wizard Navigation Sidebar */}
<aside className="w-full lg:w-64 shrink-0 relative">
{/* Sticky container for desktop */}
<div className="sticky top-24 bg-surface-container rounded-2xl p-6 shadow-md">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">Intake Workflow</h3>
<ul className="space-y-6 relative before:content-[''] before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-[2px] before:bg-outline-variant/30">
{/* Step 1: Active */}
<li className="relative flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center z-10 shadow-md shrink-0">
<span className="font-body-md text-body-md font-bold">1</span>
</div>
<div>
<p className="font-headline-sm text-base text-primary">Intake Source</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Basic identity &amp; origin</p>
</div>
</li>
{/* Step 2: Pending */}
<li className="relative flex items-start gap-4 opacity-60">
<div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant border border-outline-variant flex items-center justify-center z-10 shrink-0">
<span className="font-body-md text-body-md font-bold">2</span>
</div>
<div>
<p className="font-body-md text-body-md text-on-surface font-semibold">Incident Details</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Location and timeline</p>
</div>
</li>
{/* Step 3: Pending */}
<li className="relative flex items-start gap-4 opacity-60">
<div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant border border-outline-variant flex items-center justify-center z-10 shrink-0">
<span className="font-body-md text-body-md font-bold">3</span>
</div>
<div>
<p className="font-body-md text-body-md text-on-surface font-semibold">Risk Assessment</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Immediate danger markers</p>
</div>
</li>
{/* Step 4: Pending */}
<li className="relative flex items-start gap-4 opacity-60">
<div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant border border-outline-variant flex items-center justify-center z-10 shrink-0">
<span className="font-body-md text-body-md font-bold">4</span>
</div>
<div>
<p className="font-body-md text-body-md text-on-surface font-semibold">Assignment</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Allocate case worker</p>
</div>
</li>
</ul>
</div>
</aside>
{/* Main Form Area */}
<div className="flex-1 min-w-0">
{/* Priority Triage Badge Engine (Dynamic Display) */}
<div className="bg-surface-container-highest p-4 rounded-xl mb-8 flex flex-wrap items-center justify-between gap-4 shadow-sm border border-outline/10">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-xl">psychology</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">Automated Triage Markers:</span>
<div className="flex gap-2">
{/* High Risk Badge */}
<span className="px-3 py-1 bg-error/10 text-error rounded-full font-label-caps text-label-caps tracking-wider shadow-sm flex items-center gap-1 border border-error/20">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span> HIGH RISK
               </span>
{/* Urgent Badge */}
<span className="px-3 py-1 bg-[#ffb4ab]/20 text-[#93000a] rounded-full font-label-caps text-label-caps tracking-wider shadow-sm flex items-center gap-1 border border-[#93000a]/20">
<span className="material-symbols-outlined text-[14px]">timer</span> URGENT
               </span>
</div>
</div>
<div className="flex items-center gap-3 bg-surface rounded-lg px-3 py-1.5 shadow-sm border border-outline-variant">
<span className="font-body-sm text-body-sm text-on-surface-variant">Auto-Assign to:</span>
<select className="bg-transparent font-body-sm text-body-sm text-primary font-semibold focus:outline-none focus:ring-0 appearance-none pr-6 relative cursor-pointer">
<option>Rapid Response Team Alpha</option>
<option>On-Call Social Worker</option>
<option>Medical Triage Unit</option>
</select>
<span className="material-symbols-outlined text-on-surface-variant absolute right-3 pointer-events-none text-sm">expand_more</span>
</div>
</div>
{/* Step 1 Content: Intake Source */}
<div className="bg-surface-container-low rounded-2xl p-8 shadow-lg">
<h2 className="font-headline-md text-headline-md text-on-surface mb-6 border-b border-outline-variant/30 pb-4">Step 1: Intake Source &amp; Identity</h2>
<form className="space-y-8" onsubmit="event.preventDefault();">
{/* Source Details */}
<fieldset>
<legend className="font-headline-sm text-headline-sm text-secondary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined">record_voice_over</span> Reporter Information
              </legend>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Reporting Agency / Individual</label>
<input className="h-input-height bg-surface px-3 py-2 rounded-lg border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all" placeholder="Enter source..." type="text" value="Community Hotline"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Reporter Contact Number</label>
<input className="h-input-height bg-surface px-3 py-2 rounded-lg border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all" placeholder="Enter phone..." type="tel" value="+1 (555) 019-2831"/>
</div>
<div className="flex flex-col gap-1.5 md:col-span-2">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Initial Report Summary</label>
<textarea className="bg-surface px-3 py-2 rounded-lg border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all resize-none" rows="3">Caller reported a child found wandering near the central market. Child appears disoriented and matches description of recent missing persons alert.</textarea>
</div>
</div>
</fieldset>
{/* Child Identity Details */}
<fieldset>
<legend className="font-headline-sm text-headline-sm text-secondary mb-4 flex items-center gap-2 mt-8 border-t border-outline-variant/30 pt-8 w-full">
<span className="material-symbols-outlined">face</span> Child Identity details
              </legend>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="flex flex-col gap-1.5 lg:col-span-2 relative">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase">First &amp; Last Name</label>
{/* The input that triggered the duplicate warning */}
<input className="h-input-height bg-surface px-3 py-2 rounded-lg border-2 border-error/50 text-on-surface font-body-md text-body-md focus:outline-none focus:border-error focus:ring-1 focus:ring-error shadow-sm transition-all bg-error-container/10" type="text" value="Sarah Johnson"/>
<p className="text-xs text-error mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">search</span> Duplicate scan triggered</p>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Estimated Age / DOB</label>
<input className="h-input-height bg-surface px-3 py-2 rounded-lg border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all" type="text" value="Approx. 8 years"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Gender</label>
<select className="h-input-height bg-surface px-3 py-2 rounded-lg border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all cursor-pointer">
<option selected="">Female</option>
<option>Male</option>
<option>Other</option>
<option>Unknown</option>
</select>
</div>
<div className="flex flex-col gap-1.5 lg:col-span-2">
<label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Distinguishing Marks / Notes</label>
<input className="h-input-height bg-surface px-3 py-2 rounded-lg border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all" placeholder="Scars, clothing description..." type="text" value="Wearing a yellow raincoat, small scar on left cheek."/>
</div>
</div>
</fieldset>
{/* Form Actions */}
<div className="flex justify-end gap-4 mt-12 pt-6 border-t border-outline-variant/30">
<button className="px-6 py-2 rounded-lg font-body-md text-body-md font-semibold text-secondary hover:bg-surface-variant transition-colors" type="button">Save Draft</button>
<button className="px-6 py-2 rounded-lg font-body-md text-body-md font-semibold bg-primary text-on-primary hover:bg-primary/90 shadow-md flex items-center gap-2 transition-transform active:scale-95" type="button">
                Proceed to Step 2 <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}
