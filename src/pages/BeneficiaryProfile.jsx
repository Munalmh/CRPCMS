import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BeneficiaryProfile() {
  // If there are tabs (like in BeneficiaryProfile), we can add basic state
  const [activeTab, setActiveTab] = useState('tab-identity');
  
  return (
    <>
      <div className="flex flex-col w-full">
<div className="bg-surface-container relative pb-12 overflow-hidden shadow-sm">
<div className="absolute inset-0 z-0">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-surface-tint/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
</div>
<div className="max-w-[1440px] mx-auto px-margin-desktop relative z-10 pt-10">
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="relative shrink-0">
<img className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover shadow-md z-10 relative" data-alt="Professional, clinical portrait photograph of a young girl, child beneficiary, neutral background, soft studio lighting, documentary style, conveying dignity and resilience, maintaining modern corporate aesthetic with subtle deep blue and slate gray tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmDQWdmaD-M-Kg_5Ld5PRYb7tlg4TADTWsSg6WkOyjCzzbQosICeBM2gLDXKWudNG3gRdAXSUyPFhM_5hr57JV2CIWe_8fTjvTS-k7A-1bMWf_hf18QE6xOY5qYiq0KFWdmezg_vbJbP6ORXtDer6npJhfNY18pws6iPfjOBlGtSoRquZ0CTP38yiwRx8WdFkWtDx4oufL6Jy75Xc7Pmut1neSMHK1_L-dUapKkvQD2J_RNHvwEnfJ"/>
<div className="absolute -bottom-3 -right-3 bg-surface-container-highest px-3 py-1 rounded-full shadow-sm z-20 flex items-center gap-1.5 border-outline-variant">
<span className="material-symbols-outlined text-[16px] text-primary">verified_user</span>
<span className="font-label-caps text-label-caps text-primary tracking-wide">VERIFIED</span>
</div>
</div>
<div className="flex-1 flex flex-col gap-3">
<div className="flex items-center gap-3">
<span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-variant px-2 py-1 rounded">CAS-8902</span>
<div className="flex items-center gap-1.5 px-2 py-1 rounded bg-secondary-container text-on-secondary-container">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-caps text-label-caps uppercase">Active</span>
</div>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface m-0 tracking-tight">Sarah Johnson</h1>
<div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
<div className="flex flex-wrap items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">cake</span>
<span className="font-body-md text-body-md">DOB: Mar 14, 2015 (8y)</span>
</div>
<div className="flex flex-wrap items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">female</span>
<span className="font-body-md text-body-md">Female</span>
</div>
<div className="flex flex-wrap items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span className="font-body-md text-body-md">District 4 Shelter</span>
</div>
</div>
</div>
<div className="flex flex-col gap-4 w-full md:w-auto shrink-0 bg-surface rounded-xl p-5 shadow-sm">
<div className="flex flex-col gap-1">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Current Stage</span>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[24px] text-primary">assessment</span>
<span className="font-headline-sm text-headline-sm text-primary">Assessment</span>
</div>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
<div className="bg-primary w-[45%] h-full rounded-full transition-all duration-1000 ease-out" style={{ width: '45%' }}></div>
</div>
<div className="flex gap-3 mt-2">
<button className="flex-1 px-4 py-2 bg-surface hover:bg-surface-variant text-on-surface font-body-md text-body-md rounded shadow-sm transition-colors flex items-center justify-center gap-2 group">
<span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">edit_document</span>
               Request Change
             </button>
<button className="flex-1 px-4 py-2 bg-primary hover:bg-primary/90 text-on-primary font-body-md text-body-md rounded shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">move_up</span>
               Initiate Referral
             </button>
</div>
</div>
</div>
</div>
</div>
<div className="max-w-[1440px] mx-auto w-full px-margin-desktop py-8 -mt-6 z-20 relative">
<div className="bg-surface rounded-t-xl shadow-md overflow-hidden">
<div className="flex overflow-x-auto border-b border-outline-variant/30 bg-surface-container-lowest scrollbar-hide">
<button className="tab-btn px-6 py-4 font-headline-sm text-body-lg text-primary border-b-2 border-primary bg-surface transition-colors focus:outline-none flex items-center gap-2" data-target="tab-identity">
<span className="material-symbols-outlined text-[20px]">account_tree</span>
          Identity &amp; Household
        </button>
<button className="tab-btn px-6 py-4 font-headline-sm text-body-lg text-on-surface-variant border-b-2 border-transparent hover:text-primary hover:bg-surface-container-low transition-colors focus:outline-none flex items-center gap-2" data-target="tab-protection">
<span className="material-symbols-outlined text-[20px]">medical_services</span>
          Protection &amp; Medical
        </button>
<button className="tab-btn px-6 py-4 font-headline-sm text-body-lg text-on-surface-variant border-b-2 border-transparent hover:text-primary hover:bg-surface-container-low transition-colors focus:outline-none flex items-center gap-2" data-target="tab-timeline">
<span className="material-symbols-outlined text-[20px]">history</span>
          Longitudinal Timeline
        </button>
</div>
<div className="p-6 md:p-8 min-h-[500px]">
<div className="tab-pane active flex flex-col gap-8" id="tab-identity">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="col-span-1 lg:col-span-2 bg-surface-container-low rounded-xl p-6 shadow-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">family_history</span>
                  Household Composition
                </h3>
<div className="relative pl-4 border-l-2 border-surface-variant py-2 space-y-6">
<div className="relative">
<div className="absolute w-4 h-0.5 bg-surface-variant -left-4 top-5"></div>
<div className="bg-surface rounded-lg p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow ml-2 relative">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-headline-sm">MJ</div>
<div className="flex-1">
<div className="font-headline-sm text-body-lg text-on-surface">Martha Johnson</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Biological Mother • Primary Caregiver</div>
</div>
<span className="px-2 py-1 bg-surface-container-high rounded text-xs font-label-caps text-on-surface-variant">Verified</span>
</div>
</div>
<div className="relative">
<div className="absolute w-4 h-0.5 bg-surface-variant -left-4 top-5"></div>
<div className="bg-primary/5 rounded-lg p-4 shadow-sm flex items-center gap-4 border-l-4 border-primary ml-2">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Portrait photo of child Sarah Johnson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU4d8-HjXBtiXtT7GJfW2Pe0I7LSp3h4WaNEM1WAPXxIJWwEVqP5f4j9-HLwc696dFbTCdOB3Zfmvce-kqAGKOS7Wffv5bzH-OhvgYmP49dC8mr-znNwkheu_K34NctVc9A5T7GqVJeXyHrfYTmIcD2BLVC9Eldo5hrrWr1JnNxHavfK_Md_RJhSwelAevpNnLLrSwqPpFpCgFFvExIFDdiMvrCQHLVyPdbIQtqc0LQqeOOdwUV3PK"/>
<div className="flex-1">
<div className="font-headline-sm text-body-lg text-primary">Sarah Johnson</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Beneficiary • Subject</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute w-4 h-0.5 bg-surface-variant -left-4 top-5"></div>
<div className="bg-surface rounded-lg p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow ml-2">
<div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-headline-sm">LJ</div>
<div className="flex-1">
<div className="font-headline-sm text-body-lg text-on-surface">Leo Johnson</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Older Sibling (12y) • Dependent</div>
</div>
</div>
</div>
</div>
</div>
<div className="col-span-1 space-y-6">
<div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Identification Details</h3>
<div className="space-y-4">
<div>
<div className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">National ID / Birth Cert</div>
<div className="font-body-md text-body-md text-on-surface font-mono bg-surface p-2 rounded inline-block">BC-992-8810-KA</div>
</div>
<div>
<div className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Origin Address</div>
<div className="font-body-md text-body-md text-on-surface">142 Riverway St, Apt 4B<br/>North District, Zone 2</div>
</div>
<div>
<div className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Intake Date</div>
<div className="font-body-md text-body-md text-on-surface">October 12, 2023</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="tab-pane hidden flex flex-col gap-6" id="tab-protection">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-error-container/20 rounded-xl p-6 shadow-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-error">warning</span>
                 Protection Concerns
               </h3>
<div className="space-y-4">
<div className="bg-surface p-4 rounded-lg shadow-sm">
<div className="flex justify-between items-start mb-2">
<div className="font-headline-sm text-body-lg text-on-surface">Risk Category: Neglect</div>
<span className="px-2 py-1 bg-error/10 text-error rounded font-label-caps text-[10px] uppercase tracking-wider">High Severity</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Reported irregular attendance at school and signs of malnutrition observed by community worker. Living conditions assessed as inadequate during preliminary home visit.</p>
</div>
</div>
</div>
<div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">monitor_heart</span>
                 Medical History
               </h3>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b-2 border-surface-variant">
<th className="py-2 px-3 font-table-header text-table-header text-on-surface-variant uppercase tracking-wider">Date</th>
<th className="py-2 px-3 font-table-header text-table-header text-on-surface-variant uppercase tracking-wider">Evaluation</th>
<th className="py-2 px-3 font-table-header text-table-header text-on-surface-variant uppercase tracking-wider">Status</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface">
<tr className="border-b border-surface-variant/50 hover:bg-surface/50 transition-colors">
<td className="py-3 px-3">Oct 15, 2023</td>
<td className="py-3 px-3">Initial Pediatric Assessment</td>
<td className="py-3 px-3"><span className="px-2 py-0.5 bg-surface-variant text-on-surface-variant rounded text-xs">Completed</span></td>
</tr>
<tr className="border-b border-surface-variant/50 hover:bg-surface/50 transition-colors">
<td className="py-3 px-3">Nov 02, 2023</td>
<td className="py-3 px-3">Nutritional Screening</td>
<td className="py-3 px-3"><span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded text-xs">Follow-up Req</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
<div className="tab-pane hidden" id="tab-timeline">
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
<div className="p-4 bg-surface-container-low border-b border-outline-variant/30 flex justify-between items-center">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Chronological Audit History</h3>
<button className="text-primary font-label-caps text-label-caps flex items-center gap-1 hover:underline">
<span className="material-symbols-outlined text-[16px]">download</span> EXPORT PDF
               </button>
</div>
<div className="p-6 relative pl-10 md:pl-16">
<div className="absolute left-6 md:left-10 top-6 bottom-6 w-0.5 bg-surface-variant"></div>
<div className="space-y-8">
<div className="relative group">
<div className="absolute -left-[30px] md:-left-[46px] w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm z-10">
<span className="material-symbols-outlined text-[16px] text-on-primary">assessment</span>
</div>
<div className="bg-surface shadow-sm rounded-lg p-4 border border-outline-variant/20 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-2">
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">STATE CHANGE</span>
<h4 className="font-headline-sm text-body-lg text-on-surface mt-1">Moved to Assessment Stage</h4>
</div>
<div className="text-right">
<div className="font-body-sm text-body-sm text-on-surface-variant">Nov 10, 2023</div>
<div className="font-label-caps text-label-caps text-primary">09:42 AM</div>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Case transitioned from Intake to Assessment. Assigned to worker ID: CMS-4920.</p>
</div>
</div>
<div className="relative group">
<div className="absolute -left-[30px] md:-left-[46px] w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center shadow-sm z-10">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">note_add</span>
</div>
<div className="bg-surface shadow-sm rounded-lg p-4 border border-outline-variant/20 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-2">
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">DOCUMENT ADDED</span>
<h4 className="font-headline-sm text-body-lg text-on-surface mt-1">Initial Home Visit Report Uploaded</h4>
</div>
<div className="text-right">
<div className="font-body-sm text-body-sm text-on-surface-variant">Oct 28, 2023</div>
</div>
</div>
<div className="flex items-center gap-2 mt-2 p-2 bg-surface-container-low rounded inline-flex">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">picture_as_pdf</span>
<span className="font-body-sm text-body-sm text-on-surface">home_visit_oct28.pdf</span>
</div>
</div>
</div>
<div className="relative group">
<div className="absolute -left-[30px] md:-left-[46px] w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm z-10">
<span className="material-symbols-outlined text-[16px]">login</span>
</div>
<div className="bg-surface shadow-sm rounded-lg p-4 border border-outline-variant/20 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-2">
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">CASE CREATION</span>
<h4 className="font-headline-sm text-body-lg text-on-surface mt-1">Case Intake Registered</h4>
</div>
<div className="text-right">
<div className="font-body-sm text-body-sm text-on-surface-variant">Oct 12, 2023</div>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Initial registration via Hotline Referral. Temporary ID assigned.</p>
</div>
</div>
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
