import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CasePlanning() {
  // If there are tabs (like in BeneficiaryProfile), we can add basic state
  const [activeTab, setActiveTab] = useState('tab-identity');
  
  return (
    <>
      <div className="flex flex-col w-full relative group min-h-screen pb-16">
{/* Subtle decorative background */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-1/2 bg-surface-container-high rounded-full blur-[120px] opacity-40 mix-blend-multiply transform translate-x-1/4 -translate-y-1/4 transition-transform duration-1000 group-hover:translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-3/4 h-2/3 bg-surface-variant rounded-[100%] blur-[100px] opacity-30 transform -translate-x-1/4 translate-y-1/3 transition-transform duration-1000 group-hover:-translate-x-1/6"></div>
</div>
<div className="relative z-10 px-margin-desktop py-12 flex flex-col gap-12 max-w-[1440px] mx-auto w-full">
{/* Header Area */}
<header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-surface-container/50 backdrop-blur-xl p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest bg-surface-container-highest px-3 py-1 rounded-full">Phase 3</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Case ID: CRP-2023-8941</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface">Sequenced Protection Plan</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-2">Strategic roadmap mapping the beneficiary's journey from immediate safeguarding through comprehensive reintegration, structured by mandatory assessment gates.</p>
</div>
<div className="flex flex-col items-end gap-4 min-w-[200px]">
<div className="flex flex-col items-end">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Plan Status</span>
<div className="inline-flex items-center gap-2 bg-secondary-container px-4 py-2 rounded-lg shadow-sm">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
</span>
<span className="font-headline-sm text-headline-sm text-on-secondary-container">Pending Approval</span>
</div>
</div>
<div className="flex gap-3">
<button className="px-6 py-2 rounded-lg font-body-md text-body-md text-on-surface bg-transparent border border-outline-variant hover:bg-surface-container-highest transition-colors">Edit Plan</button>
<button className="px-6 py-2 rounded-lg font-body-md text-body-md text-on-primary bg-primary hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md">Request Approval</button>
</div>
</div>
</header>
{/* Main Content Area: Split Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/* Left Column: Sequencer Timeline */}
<section className="lg:col-span-8 flex flex-col gap-6">
<div className="flex justify-between items-center mb-2">
<h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">route</span>
            Pathway Sequencer
          </h2>
<div className="flex items-center gap-4 text-on-surface-variant font-label-caps text-label-caps">
<div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-primary-container"></span> Completed</div>
<div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-secondary-container"></span> Active</div>
<div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-surface-container-highest"></span> Locked</div>
</div>
</div>
{/* Interactive Timeline Container */}
<div className="bg-surface-container rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
{/* Decorative subtle grid */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e3e5_1px,transparent_1px),linear-gradient(to_bottom,#e0e3e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
{/* Timeline Path */}
<div className="relative w-full overflow-x-auto pb-8 pt-4">
<div className="flex items-center min-w-[800px] relative px-4">
{/* Connecting Line Base */}
<div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-1 bg-surface-container-highest rounded-full z-0"></div>
{/* Connecting Line Progress */}
<div className="absolute left-8 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0 w-[40%] transition-all duration-1000 ease-out" id="timeline-progress"></div>
{/* Step 1: Immediate Protection (Completed) */}
<div className="relative z-10 flex flex-col items-center flex-1 group cursor-pointer">
<div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
</div>
<div className="absolute top-16 text-center w-full">
<div className="font-headline-sm text-headline-sm text-on-surface">Immediate Protection</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Completed Jan 12</div>
</div>
</div>
{/* Gate 1 */}
<div className="relative z-20 -mx-4 group">
<div className="w-8 h-8 rounded-full bg-surface border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300 shadow-sm cursor-help" title="Initial Assessment Cleared">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
</div>
</div>
{/* Step 2: Stabilization (Active) */}
<div className="relative z-10 flex flex-col items-center flex-1 group cursor-pointer">
<div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-lg ring-4 ring-secondary-container/30 group-hover:scale-105 transition-transform duration-300 relative">
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
</span>
<span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
</div>
<div className="absolute top-20 text-center w-full">
<div className="font-headline-sm text-headline-sm text-on-surface font-bold">Stabilization</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">In Progress</div>
</div>
</div>
{/* Gate 2 (Locked) */}
<div className="relative z-20 -mx-4 group">
<div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-outline-variant flex items-center justify-center text-on-surface-variant shadow-sm cursor-not-allowed">
<span className="material-symbols-outlined text-[16px]">lock</span>
</div>
{/* Tooltip */}
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-inverse-surface text-inverse-on-surface p-2 rounded-lg text-center font-body-sm text-body-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                    Requires Comprehensive Assessment Approval
                  </div>
</div>
{/* Step 3: Rehabilitation (Locked) */}
<div className="relative z-10 flex flex-col items-center flex-1 opacity-60">
<div className="w-12 h-12 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined">psychology</span>
</div>
<div className="absolute top-16 text-center w-full">
<div className="font-headline-sm text-headline-sm text-on-surface-variant">Rehabilitation</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Pending Gate 2</div>
</div>
</div>
{/* Gate 3 (Locked) */}
<div className="relative z-20 -mx-4">
<div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-outline-variant flex items-center justify-center text-on-surface-variant shadow-sm">
<span className="material-symbols-outlined text-[16px]">lock</span>
</div>
</div>
{/* Step 4: Reintegration (Locked) */}
<div className="relative z-10 flex flex-col items-center flex-1 opacity-60">
<div className="w-12 h-12 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined">family_restroom</span>
</div>
<div className="absolute top-16 text-center w-full">
<div className="font-headline-sm text-headline-sm text-on-surface-variant">Reintegration</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Pending Gate 3</div>
</div>
</div>
</div>
</div>
</div>
{/* Active Phase Details Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-4">
{/* Phase Objectives */}
<div className="bg-surface-container-low p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">target</span>
              Current Objectives
            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded flex items-center justify-center bg-primary-container text-on-primary-container">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div>
<div className="font-body-md text-body-md text-on-surface font-semibold">Medical Evaluation</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Completed by Dr. Smith on Jan 14</div>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded flex items-center justify-center border-2 border-primary text-primary">
<span className="material-symbols-outlined text-[14px]">more_horiz</span>
</div>
<div>
<div className="font-body-md text-body-md text-on-surface font-semibold">Trauma-Informed Counseling</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Session 2 of 5 scheduled</div>
</div>
</li>
<li className="flex items-start gap-3 opacity-60">
<div className="mt-1 w-5 h-5 rounded flex items-center justify-center border-2 border-outline-variant">
</div>
<div>
<div className="font-body-md text-body-md text-on-surface font-semibold">Family Tracing Initiation</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Pending clearance</div>
</div>
</li>
</ul>
</div>
{/* Gate Requirements */}
<div className="bg-surface-container-high p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
<div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-error">lock_person</span>
              Next Gate Requirements
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">The following mandatory assessments must be approved to unlock the Rehabilitation phase.</p>
<div className="space-y-3">
<div className="bg-surface p-3 rounded-xl border border-outline-variant flex justify-between items-center">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-semibold">Psychosocial Evaluation</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Form ID: ASM-44</span>
</div>
<span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded font-label-caps">Pending</span>
</div>
<div className="bg-surface p-3 rounded-xl border border-outline-variant flex justify-between items-center">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface font-semibold">Risk Assessment Update</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Form ID: RA-02</span>
</div>
<span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded font-label-caps">Pending</span>
</div>
</div>
<button className="w-full mt-4 py-2 border border-primary text-primary rounded-lg font-body-md text-body-md hover:bg-primary-container hover:text-on-primary-container transition-colors">
              Initiate Assessments
            </button>
</div>
</div>
</section>
{/* Right Column: Context & Metadata */}
<aside className="lg:col-span-4 flex flex-col gap-6">
{/* Beneficiary Snapshot Card */}
<div className="bg-surface-container rounded-3xl p-6 shadow-sm flex flex-col gap-4 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
<span className="material-symbols-outlined text-[100px]">face</span>
</div>
<div className="flex items-center gap-4 relative z-10">
<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-surface shadow-sm">
<img className="w-full h-full object-cover" data-alt="A softly lit, sensitive portrait placeholder showing the silhouette or obscured face of a youth to maintain anonymity, warm tones, professional clinical setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0LlRhVKhIyrNgIS3o1P1H3Wp_gBxwSYd2njKCkoMP_e99MSCXpuCd-R_hP45Wmh9tv0uT7f0wwDJ0DRtHUvy2i0RIyekNbfT4GHF760z20x51lIBcek0gnym5hkBoYMeWrxLaWQMfXxoCQHA9ANWtHSmiROMkwg18SdNQqBgDyRp02fGvqWz6LiaMnvGxJYd7zj_fD_nPq8wAiPYrUz4ZH4Xp62S5-SCpbF3qz0h6c8yaIMUGQ1GZ"/>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Maya T.</h3>
<div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">cake</span> Age: 14
              </div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 relative z-10">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Risk Level</span>
<span className="font-body-md text-body-md text-error font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">warning</span> High
              </span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Placement</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">Safe House A</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Case Worker</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">Sarah Jenkins</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Days in System</span>
<span className="font-body-md text-body-md text-on-surface font-semibold">14 Days</span>
</div>
</div>
</div>
{/* Plan Team */}
<div className="bg-surface-container-low rounded-2xl p-6 shadow-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Multi-Disciplinary Team</h3>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 p-2 hover:bg-surface-container rounded-lg transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">SJ</div>
<div className="flex-1 min-w-0">
<div className="font-body-md text-body-md text-on-surface truncate">Sarah Jenkins</div>
<div className="font-label-caps text-label-caps text-on-surface-variant truncate">Lead Case Worker</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant">mail</span>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-surface-container rounded-lg transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">DR</div>
<div className="flex-1 min-w-0">
<div className="font-body-md text-body-md text-on-surface truncate">Dr. Marcus Reed</div>
<div className="font-label-caps text-label-caps text-on-surface-variant truncate">Child Psychologist</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant">mail</span>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-surface-container rounded-lg transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold">AL</div>
<div className="flex-1 min-w-0">
<div className="font-body-md text-body-md text-on-surface truncate">Amanda Lin</div>
<div className="font-label-caps text-label-caps text-on-surface-variant truncate">Legal Advocate</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant">mail</span>
</div>
</div>
<button className="w-full mt-4 flex items-center justify-center gap-2 py-2 text-primary hover:bg-primary/5 rounded-lg transition-colors font-label-caps text-label-caps uppercase">
<span className="material-symbols-outlined text-[18px]">add</span> Add Team Member
          </button>
</div>
</aside>
</div>
</div>
</div>

    </>
  );
}
