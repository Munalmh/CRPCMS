import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FollowUp() {
  // If there are tabs (like in BeneficiaryProfile), we can add basic state
  const [activeTab, setActiveTab] = useState('tab-identity');
  
  return (
    <>
      <div className="flex flex-col w-full relative">
<div className="px-8 pb-12 flex flex-col gap-12">
{/* Header Area */}
<div className="flex justify-between items-end">
<div>
<h1 className="text-display-lg font-display-lg text-on-surface tracking-tight mb-2">Post-Reintegration Monitoring</h1>
<p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">Manage scheduled visits, log safety assessments, and escalate at-risk cases back to active intervention.</p>
</div>
<div className="flex gap-4">
<button className="bg-surface-container-high text-on-surface px-6 py-3 rounded-full text-body-md font-body-md hover:shadow-md transition-shadow flex items-center gap-2">
<span className="material-symbols-outlined text-xl">filter_list</span>
          Filter Schedule
        </button>
<button className="bg-primary text-on-primary px-6 py-3 rounded-full text-body-md font-body-md hover:shadow-md transition-shadow flex items-center gap-2" onclick="document.getElementById('visit-modal').classList.remove('hidden')">
<span className="material-symbols-outlined text-xl">add</span>
          Log Visit
        </button>
</div>
</div>
{/* Main Content Grid */}
<div className="grid grid-cols-12 gap-8">
{/* Calendar Column */}
<div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
<div className="bg-surface-container rounded-3xl p-6 shadow-sm flex flex-col">
<div className="flex justify-between items-center mb-6">
<h2 className="text-headline-md font-headline-md text-on-surface">November Schedule</h2>
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full bg-surface hover:bg-surface-dim transition-colors flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 rounded-full bg-surface hover:bg-surface-dim transition-colors flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
{/* Calendar Grid (Simplified for visual) */}
<div className="grid grid-cols-7 gap-2 mb-2 text-center text-label-caps font-label-caps text-on-surface-variant">
<div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div><div>SUN</div>
</div>
<div className="grid grid-cols-7 gap-2 text-body-md font-body-md">
{/* Blank days */}
<div className="aspect-square rounded-xl bg-surface-container-lowest/50 text-on-surface-variant/30 flex items-start justify-end p-2">29</div>
<div className="aspect-square rounded-xl bg-surface-container-lowest/50 text-on-surface-variant/30 flex items-start justify-end p-2">30</div>
<div className="aspect-square rounded-xl bg-surface-container-lowest/50 text-on-surface-variant/30 flex items-start justify-end p-2">31</div>
{/* Active Days */}
<div className="aspect-square rounded-xl bg-surface-container-lowest text-on-surface flex items-start justify-end p-2 shadow-sm relative group cursor-pointer hover:bg-surface-dim transition-colors">
              1
            </div>
<div className="aspect-square rounded-xl bg-surface-container-lowest text-on-surface flex items-start justify-end p-2 shadow-sm relative group cursor-pointer hover:bg-surface-dim transition-colors">
              2
              <div className="absolute bottom-2 left-2 right-2 bg-primary-container text-on-primary-container text-[10px] rounded p-1 truncate" title="Follow-up: CRP-8821">CRP-8821</div>
</div>
<div className="aspect-square rounded-xl bg-surface-container-lowest text-on-surface flex items-start justify-end p-2 shadow-sm relative group cursor-pointer hover:bg-surface-dim transition-colors">
              3
            </div>
<div className="aspect-square rounded-xl bg-surface-container-lowest text-on-surface flex items-start justify-end p-2 shadow-sm relative group cursor-pointer hover:bg-surface-dim transition-colors bg-secondary-container">
              4
              <div className="absolute bottom-2 left-2 right-2 bg-primary-container text-on-primary-container text-[10px] rounded p-1 truncate" title="Follow-up: CRP-9011">CRP-9011</div>
<div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-primary"></div>
</div>
{/* Row 2 */}
<div className="aspect-square rounded-xl bg-surface-container-lowest text-on-surface flex items-start justify-end p-2 shadow-sm relative group cursor-pointer hover:bg-surface-dim transition-colors">5</div>
<div className="aspect-square rounded-xl bg-surface-container-lowest text-on-surface flex items-start justify-end p-2 shadow-sm relative group cursor-pointer hover:bg-surface-dim transition-colors">6</div>
<div className="aspect-square rounded-xl bg-surface-container-lowest text-on-surface flex items-start justify-end p-2 shadow-sm relative group cursor-pointer hover:bg-surface-dim transition-colors">7</div>
<div className="aspect-square rounded-xl bg-surface-container-lowest text-on-surface flex items-start justify-end p-2 shadow-sm relative group cursor-pointer hover:bg-surface-dim transition-colors">
                8
                <div className="absolute bottom-2 left-2 right-2 bg-error-container text-on-error-container text-[10px] rounded p-1 truncate" title="Urgent: CRP-7442">Urgent</div>
</div>
<div className="aspect-square rounded-xl bg-surface-container-lowest text-on-surface flex items-start justify-end p-2 shadow-sm relative group cursor-pointer hover:bg-surface-dim transition-colors">9</div>
<div className="aspect-square rounded-xl bg-surface-container-lowest text-on-surface flex items-start justify-end p-2 shadow-sm relative group cursor-pointer hover:bg-surface-dim transition-colors">10</div>
<div className="aspect-square rounded-xl bg-surface-container-lowest text-on-surface flex items-start justify-end p-2 shadow-sm relative group cursor-pointer hover:bg-surface-dim transition-colors">11</div>
{/* Fill remainder with simple squares for brevity */}
<div className="col-span-7 h-32 bg-surface-container-lowest rounded-xl flex items-center justify-center text-on-surface-variant font-label-caps opacity-50 shadow-sm">+ 19 more days</div>
</div>
</div>
</div>
{/* Today's Visits Sidebar */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
<div className="bg-surface-container-high rounded-3xl p-6 shadow-sm h-full flex flex-col">
<div className="flex justify-between items-center mb-6">
<h2 className="text-headline-md font-headline-md text-on-surface">Today's Queue</h2>
<span className="bg-primary text-on-primary text-label-caps font-label-caps px-2 py-1 rounded-full">3 VISITS</span>
</div>
<div className="flex flex-col gap-4 flex-1 overflow-y-auto">
{/* Visit Card 1 */}
<div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
<div className="flex justify-between items-start mb-2">
<span className="text-label-caps font-label-caps text-on-surface-variant">CRP-9011</span>
<span className="bg-secondary-container text-on-secondary-container text-[10px] font-label-caps px-2 py-1 rounded">PENDING</span>
</div>
<h3 className="text-body-lg font-body-lg text-on-surface mb-1">Amina N.</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">location_on</span>
                East District, Block B
              </p>
<div className="mt-4 flex gap-2">
<button className="flex-1 bg-surface-container text-on-surface text-body-sm font-body-sm py-2 rounded-lg hover:bg-surface-dim transition-colors" onclick="document.getElementById('visit-modal').classList.remove('hidden')">Start Visit</button>
</div>
</div>
{/* Visit Card 2 */}
<div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm relative overflow-hidden opacity-60">
<div className="absolute top-0 left-0 w-1 h-full bg-outline-variant"></div>
<div className="flex justify-between items-start mb-2">
<span className="text-label-caps font-label-caps text-on-surface-variant">CRP-8821</span>
<span className="bg-surface-variant text-on-surface-variant text-[10px] font-label-caps px-2 py-1 rounded flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">check_circle</span>
                   COMPLETED
                </span>
</div>
<h3 className="text-body-lg font-body-lg text-on-surface mb-1">Samuel K.</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">location_on</span>
                North Zone, Sector 4
              </p>
</div>
{/* Visit Card 3 */}
<div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm relative overflow-hidden opacity-60">
<div className="absolute top-0 left-0 w-1 h-full bg-outline-variant"></div>
<div className="flex justify-between items-start mb-2">
<span className="text-label-caps font-label-caps text-on-surface-variant">CRP-8105</span>
<span className="bg-surface-variant text-on-surface-variant text-[10px] font-label-caps px-2 py-1 rounded flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">check_circle</span>
                   COMPLETED
                </span>
</div>
<h3 className="text-body-lg font-body-lg text-on-surface mb-1">David M.</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">location_on</span>
                South District, Village
              </p>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Visit Entry Modal */}
<div className="fixed inset-0 z-50 hidden" id="visit-modal">
{/* Backdrop */}
<div className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm" onclick="document.getElementById('visit-modal').classList.add('hidden')"></div>
{/* Modal Content */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-surface-container-lowest rounded-3xl shadow-xl flex flex-col max-h-[921px] overflow-hidden">
{/* Modal Header */}
<div className="p-6 bg-surface-container flex justify-between items-center relative z-10">
<div>
<span className="text-label-caps font-label-caps text-on-surface-variant mb-1 block">VISIT ENTRY • CRP-9011</span>
<h2 className="text-headline-md font-headline-md text-on-surface">Log Safety Assessment</h2>
</div>
<button className="w-10 h-10 rounded-full bg-surface-container-high hover:bg-surface-dim flex items-center justify-center text-on-surface transition-colors" onclick="document.getElementById('visit-modal').classList.add('hidden')">
<span className="material-symbols-outlined">close</span>
</button>
</div>
{/* Modal Body (Scrollable) */}
<div className="p-6 overflow-y-auto flex-1 bg-surface-bright flex flex-col gap-8 relative">
{/* Beneficiary Context */}
<div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl">
<img className="w-16 h-16 rounded-full object-cover shadow-sm" data-alt="Close up professional portrait of a young girl with dark hair, slightly smiling, warm lighting, corporate non-profit style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtPH-yT8_e1szXdW8fQ0Yt0cjM_FO5VrNv1FR0B6GatUHn6DefT8y8wOf7UUobRq0B2pRY0AvSn4981M4LFMdIWRVtkhJ-AD5iyMuI2J5oEqlryAKIFzNu0WAGuiWClImD120aQwBQMGPF_-bt3EUkA0Ald8Br5d4MdgInCv-KK_yDRwMPujCpiq7cHFLh97Iz8kkG3gO3TZ4DGT8nCA1LIaWXJUaxsKfaYDY7bsnqYbJitQuKNLhT"/>
<div>
<h3 className="text-headline-sm font-headline-sm text-on-surface">Amina N.</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant">Reintegrated: Oct 12, 2023 • Visit 2 of 6</p>
</div>
</div>
{/* Assessment Form */}
<div>
<h4 className="text-body-lg font-body-lg text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">fact_check</span>
            Safety &amp; Well-being Checklist
          </h4>
<div className="flex flex-col gap-3">
<label className="flex items-start gap-3 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low cursor-pointer transition-colors shadow-sm">
<input className="mt-1 w-5 h-5 rounded border-outline text-primary focus:ring-primary" type="checkbox"/>
<div className="flex-1">
<span className="text-body-md font-body-md text-on-surface block">Basic Needs Met</span>
<span className="text-body-sm font-body-sm text-on-surface-variant">Adequate food, shelter, and clothing available.</span>
</div>
</label>
<label className="flex items-start gap-3 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low cursor-pointer transition-colors shadow-sm">
<input className="mt-1 w-5 h-5 rounded border-outline text-primary focus:ring-primary" type="checkbox"/>
<div className="flex-1">
<span className="text-body-md font-body-md text-on-surface block">School Attendance Verified</span>
<span className="text-body-sm font-body-sm text-on-surface-variant">Attending classes regularly since last visit.</span>
</div>
</label>
{/* Escalation Trigger Checkbox */}
<label className="flex items-start gap-3 p-4 bg-surface-container-lowest rounded-xl hover:bg-surface-container-low cursor-pointer transition-colors shadow-sm" onclick="document.getElementById('escalation-banner').classList.toggle('hidden', !this.querySelector('input').checked)">
<input className="mt-1 w-5 h-5 rounded border-outline text-error focus:ring-error" type="checkbox"/>
<div className="flex-1">
<span className="text-body-md font-body-md text-on-surface block">Observed Signs of Risk/Abuse</span>
<span className="text-body-sm font-body-sm text-on-surface-variant">Check if beneficiary is in immediate danger or situation is deteriorating.</span>
</div>
</label>
</div>
</div>
{/* Notes Field */}
<div>
<label className="block text-body-sm font-body-sm text-on-surface-variant mb-2">Detailed Observations</label>
<textarea className="w-full bg-surface-container-lowest rounded-xl p-4 text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm resize-none h-32" placeholder="Record qualitative observations here..."></textarea>
</div>
</div>
{/* Dynamic Escalation Banner (Hidden by default) */}
<div className="hidden bg-error-container p-6 relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]" id="escalation-banner">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-error flex items-center justify-center text-on-error shrink-0">
<span className="material-symbols-outlined">warning</span>
</div>
<div>
<h4 className="text-headline-sm font-headline-sm text-on-error-container">At-Risk Alert Triggered</h4>
<p className="text-body-sm font-body-sm text-on-error-container/80">Checking this box indicates the reintegration has failed or is in critical danger.</p>
</div>
</div>
<button className="bg-error text-on-error px-6 py-3 rounded-full text-body-md font-body-md hover:bg-error/90 transition-colors whitespace-nowrap shadow-md flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">lock_open</span>
           Reopen Case
        </button>
</div>
{/* Modal Footer */}
<div className="p-6 bg-surface-container flex justify-end gap-4 relative z-10 shadow-[0_-1px_4px_rgba(0,0,0,0.05)]">
<button className="px-6 py-2 text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors" onclick="document.getElementById('visit-modal').classList.add('hidden')">Cancel</button>
<button className="bg-primary text-on-primary px-8 py-2 rounded-full text-body-md font-body-md hover:shadow-md transition-shadow" onclick="document.getElementById('visit-modal').classList.add('hidden')">Save Visit Log</button>
</div>
</div>
</div>
</div>
    </>
  );
}
