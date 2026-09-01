import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SupportManagement() {
  // If there are tabs (like in BeneficiaryProfile), we can add basic state
  const [activeTab, setActiveTab] = useState('tab-identity');
  
  return (
    <>
      <div className="flex flex-col w-full h-full relative overflow-hidden bg-background">
<div className="flex-1 px-8 py-6 max-w-[1440px] mx-auto w-full">
{/* Header Area */}
<div className="flex items-end justify-between mb-8">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest bg-surface-variant px-2 py-1 rounded">Beneficiary: Sarah Johnson</span>
<span className="font-label-caps text-label-caps text-on-primary uppercase tracking-widest bg-primary px-2 py-1 rounded flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">warning</span> High Priority</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface m-0 p-0 leading-none">Support Management</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-2xl">Track and execute service provisions, interventions, and support plans.</p>
</div>
<div className="flex items-center gap-4">
{/* View Toggle */}
<div className="flex items-center bg-surface-container rounded-full p-1" id="view-toggle">
<button className="px-4 py-2 rounded-full font-body-md text-body-md text-on-surface flex items-center gap-2 bg-surface-container-highest shadow-sm transition-all" data-view="kanban">
<span className="material-symbols-outlined text-[20px]">view_kanban</span> Board
          </button>
<button className="px-4 py-2 rounded-full font-body-md text-body-md text-on-surface-variant flex items-center gap-2 hover:text-on-surface transition-all" data-view="list">
<span className="material-symbols-outlined text-[20px]">view_list</span> List
          </button>
</div>
<button className="bg-primary text-on-primary px-6 py-2 rounded-full font-body-md text-body-md font-semibold flex items-center gap-2 hover:bg-on-primary-fixed-variant transition-colors shadow-md">
<span className="material-symbols-outlined text-[20px]">add</span> Add Service
        </button>
</div>
</div>
{/* Kanban View (Default) */}
<div className="flex gap-6 h-[calc(100vh-220px)] overflow-x-auto pb-4" id="kanban-view">
{/* Column: Scheduled */}
<div className="flex-none w-[340px] flex flex-col">
<div className="flex items-center justify-between bg-surface-container px-4 py-3 rounded-t-xl mb-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface m-0">Scheduled</h2>
<span className="bg-surface-container-highest text-on-surface px-2 py-1 rounded-full font-label-caps text-label-caps">3</span>
</div>
<div className="flex-1 bg-surface-container-low rounded-b-xl p-3 flex flex-col gap-3 overflow-y-auto">
{/* Card 1 */}
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-grab group">
<div className="flex items-start justify-between mb-3">
<span className="font-label-caps text-label-caps text-secondary bg-secondary-container px-2 py-1 rounded">Medical</span>
<button className="text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
</div>
<h3 className="font-body-lg text-body-lg text-on-surface font-semibold leading-tight mb-2">Initial Pediatric Assessment</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2">Complete physical examination and baseline health documentation at City General Hospital.</p>
<div className="flex items-center justify-between mt-auto pt-3 border-t border-surface-variant">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Target Date</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-primary">calendar_today</span> Oct 24</span>
</div>
<img className="w-8 h-8 rounded-full object-cover" data-alt="Close up portrait of a female medical professional wearing a white coat, brightly lit, corporate style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJfb-EvgG3-MpVvfpHTWaWYGbh2_mSEswMHdWelph-nzupDrpFLgZHe-OxoabsCKsxsJc8he-qyRZ4PV9PWcTn5Qse6nyF7RqcUSz54rkcaGtnL6FnXZouDyDvNB3FuqJ14zoFmfOZhgXyRe-l4yQxweQjzh6I1a6qDMYiF7W00fgjYKkGcGCjl8YYIcqX5IHDnpx2XoUwO0Cl0hQAeBYo3NwjSh3JFeuYBTC3idQz1UCNxx3FGCfs"/>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-grab group relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
<div className="flex items-start justify-between mb-3 pl-1">
<span className="font-label-caps text-label-caps text-error bg-error-container px-2 py-1 rounded flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">warning</span> Overdue</span>
<button className="text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
</div>
<h3 className="font-body-lg text-body-lg text-on-surface font-semibold leading-tight mb-2 pl-1">Legal Representation Setup</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2 pl-1">Appoint child advocate and file preliminary protective orders.</p>
<div className="flex items-center justify-between mt-auto pt-3 border-t border-surface-variant pl-1">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-error">Target Date</span>
<span className="font-body-sm text-body-sm text-error font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> Oct 20</span>
</div>
<img className="w-8 h-8 rounded-full object-cover" data-alt="Portrait of a serious male lawyer in a dark suit, modern office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm9dR2hqhjRtzoIB4MbkCFq20L-Bn_dI--17eA43nEgp0KaqxTuHNhFGQAg8v7VCd9-ulTpB00H5LH9C3O47OMApr_4eXAKrlzJa5MRZSqLocft1U7F8MLQrUdk_xEgdIBpOft3JN-DUH2SghTZQqmjJcAJwqRay2V5OS8eXbk_JtfFj6e84Z1bXAnlvn_e_nHwLce5IsCLSMiK2xkI7Munl0_rbhSBmj4bozL5Pqo6LUbUqxGk3OE"/>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-grab group">
<div className="flex items-start justify-between mb-3">
<span className="font-label-caps text-label-caps text-on-secondary-container bg-secondary-fixed px-2 py-1 rounded">Psychosocial</span>
<button className="text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
</div>
<h3 className="font-body-lg text-body-lg text-on-surface font-semibold leading-tight mb-2">Trauma Counseling Session 1</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2">Initial introduction and safe-space establishment with designated therapist.</p>
<div className="flex items-center justify-between mt-auto pt-3 border-t border-surface-variant">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Target Date</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-primary">calendar_today</span> Oct 26</span>
</div>
<div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-label-caps text-label-caps">MJ</div>
</div>
</div>
</div>
</div>
{/* Column: In Progress */}
<div className="flex-none w-[340px] flex flex-col">
<div className="flex items-center justify-between bg-surface-container px-4 py-3 rounded-t-xl mb-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface m-0">In Progress</h2>
<span className="bg-surface-container-highest text-on-surface px-2 py-1 rounded-full font-label-caps text-label-caps">2</span>
</div>
<div className="flex-1 bg-surface-container-low rounded-b-xl p-3 flex flex-col gap-3 overflow-y-auto">
{/* Card 4 */}
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-grab group">
<div className="flex items-start justify-between mb-3">
<span className="font-label-caps text-label-caps text-primary bg-primary-fixed px-2 py-1 rounded">Placement</span>
<button className="text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
</div>
<h3 className="font-body-lg text-body-lg text-on-surface font-semibold leading-tight mb-2">Safe House Coordination</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2">Arranging temporary secure housing at Facility B. Awaiting final clearance.</p>
<div className="flex flex-col gap-2 mb-4">
<div className="flex items-center justify-between text-label-caps font-label-caps text-on-surface-variant">
<span>Progress</span>
<span>65%</span>
</div>
<div className="w-full bg-surface-variant rounded-full h-1.5">
<div className="bg-primary h-1.5 rounded-full w-[65%]"></div>
</div>
</div>
<div className="flex items-center justify-between mt-auto pt-3 border-t border-surface-variant">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Provider</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate w-24">SafeHaven Org</span>
</div>
<button className="text-primary font-label-caps text-label-caps hover:bg-surface-container px-2 py-1 rounded transition-colors">Update</button>
</div>
</div>
{/* Card 5 */}
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-grab group">
<div className="flex items-start justify-between mb-3">
<span className="font-label-caps text-label-caps text-tertiary bg-tertiary-fixed px-2 py-1 rounded">Education</span>
<button className="text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
</div>
<h3 className="font-body-lg text-body-lg text-on-surface font-semibold leading-tight mb-2">School Enrollment Transfer</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2">Transferring records to District 9 temporary learning center.</p>
<div className="flex items-center justify-between mt-auto pt-3 border-t border-surface-variant">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-outline">Target Date</span>
<span className="font-body-sm text-body-sm text-on-surface font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-primary">calendar_today</span> Oct 25</span>
</div>
<img className="w-8 h-8 rounded-full object-cover" data-alt="Portrait of a smiling female social worker in a casual office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdbSvj2bXTZTdJQk6yY604qQZjLiX32DrLusxwBXz_3Umibf3jlsC_Xde0-6s6W_n-mqQPW-RoSDMfO1VL2kXNrZdHYaw1oBDiqk0EUPF-mp9qx37Mu2exmJpvpnVpWIgx87O_b_3Yxq0ttTcV2KxItiGy25rHt3AC2lRYZhQD4E_n2nUvEuinoil6qr0XmJSkXAAKxqeYvRxpOpL1_ML_hBlhk1Ljq8DSZThzrZCgXIIr1GeABpi5"/>
</div>
</div>
</div>
</div>
{/* Column: Assessment Pending */}
<div className="flex-none w-[340px] flex flex-col">
<div className="flex items-center justify-between bg-surface-container px-4 py-3 rounded-t-xl mb-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface m-0">Outcome Pending</h2>
<span className="bg-surface-container-highest text-on-surface px-2 py-1 rounded-full font-label-caps text-label-caps">1</span>
</div>
<div className="flex-1 bg-surface-container-low rounded-b-xl p-3 flex flex-col gap-3 overflow-y-auto">
{/* Card 6 - Action Required */}
<div className="bg-primary-container text-on-primary-container rounded-xl p-4 shadow-md cursor-grab group">
<div className="flex items-start justify-between mb-3">
<span className="font-label-caps text-label-caps text-on-primary bg-primary/20 px-2 py-1 rounded">Family Tracing</span>
<button className="text-on-primary-container/70 hover:text-on-primary-container opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
</div>
<h3 className="font-body-lg text-body-lg text-on-primary font-semibold leading-tight mb-2">Initial Relatives Interview</h3>
<p className="font-body-sm text-body-sm text-on-primary-container/90 mb-4 line-clamp-2">Interviews concluded. Waiting for case worker to log assessment and recommendation.</p>
<button className="w-full bg-on-primary text-primary px-4 py-2 rounded-lg font-body-md text-body-md font-semibold flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors mt-2">
<span className="material-symbols-outlined text-[18px]">assignment_turned_in</span> Log Outcome
            </button>
</div>
</div>
</div>
{/* Column: Completed */}
<div className="flex-none w-[340px] flex flex-col opacity-75">
<div className="flex items-center justify-between bg-surface-container px-4 py-3 rounded-t-xl mb-1">
<h2 className="font-headline-sm text-headline-sm text-on-surface m-0">Completed</h2>
<span className="bg-surface-container-highest text-on-surface px-2 py-1 rounded-full font-label-caps text-label-caps">4</span>
</div>
<div className="flex-1 bg-surface-container-low rounded-b-xl p-3 flex flex-col gap-3 overflow-y-auto">
{/* Card 7 */}
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm cursor-default border-l-4 border-emerald-500">
<h3 className="font-body-lg text-body-lg text-on-surface font-semibold leading-tight mb-1 line-through text-on-surface-variant">Emergency Nutrition Kit</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Delivered on Oct 18.</p>
<div className="flex items-center gap-2 text-emerald-600 font-label-caps text-label-caps">
<span className="material-symbols-outlined text-[16px]">check_circle</span> Outcome Logged
                </div>
</div>
{/* Card 8 */}
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm cursor-default border-l-4 border-emerald-500">
<h3 className="font-body-lg text-body-lg text-on-surface font-semibold leading-tight mb-1 line-through text-on-surface-variant">Immediate Safety Risk Assessment</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Completed on Oct 17.</p>
<div className="flex items-center gap-2 text-emerald-600 font-label-caps text-label-caps">
<span className="material-symbols-outlined text-[16px]">check_circle</span> Outcome Logged
                </div>
</div>
</div>
</div>
</div>
{/* List View (Hidden by Default) */}
<div className="hidden h-[calc(100vh-220px)] overflow-y-auto bg-surface-container-lowest rounded-xl shadow-sm border border-surface-variant" id="list-view">
{/* Minimal table structure placeholder for list view */}
<table className="w-full text-left border-collapse min-w-[800px]">
<thead className="bg-surface-container sticky top-0 z-10">
<tr>
<th className="p-4 font-table-header text-table-header text-on-surface-variant font-medium">Service / Task</th>
<th className="p-4 font-table-header text-table-header text-on-surface-variant font-medium">Category</th>
<th className="p-4 font-table-header text-table-header text-on-surface-variant font-medium">Status</th>
<th className="p-4 font-table-header text-table-header text-on-surface-variant font-medium">Target Date</th>
<th className="p-4 font-table-header text-table-header text-on-surface-variant font-medium">Provider</th>
<th className="p-4 font-table-header text-table-header text-on-surface-variant font-medium">Action</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-surface-variant hover:bg-surface-container-low transition-colors">
<td className="p-4 font-body-md text-body-md text-on-surface font-semibold">Initial Pediatric Assessment</td>
<td className="p-4"><span className="font-label-caps text-label-caps text-secondary bg-secondary-container px-2 py-1 rounded">Medical</span></td>
<td className="p-4"><span className="font-body-sm text-body-sm text-on-surface-variant">Scheduled</span></td>
<td className="p-4 font-body-sm text-body-sm text-on-surface">Oct 24, 2023</td>
<td className="p-4">
<div className="flex items-center gap-2">
<img className="w-6 h-6 rounded-full object-cover" data-alt="Close up portrait of a female medical professional wearing a white coat, brightly lit, corporate style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSyLYzTR6kOWNsWuzgwt1C1eeauLCCuNF84cDxOKke6SbRoPWK2v7nDWWWu1TCRc18MiTeCj4RbFhyYYknT_BcZ4AbSSr0kMaZMYS9t1EjoqXL29EzLHtRKxEwIJyyqu4OsIA-R1O5NVNzh5ekud9xXbBSpsmqPYbQ6zLsTJ9vRXbJckgi-Jr_lAWTVywJXXlPfF5EyDYXWZug5-vhsj-baqiPCbi9HUz3WTv7qaun6JSi1UG_CFKT"/>
<span className="font-body-sm text-body-sm text-on-surface">Dr. A. Smith</span>
</div>
</td>
<td className="p-4"><button className="text-primary hover:bg-surface-container p-1 rounded"><span className="material-symbols-outlined text-[20px]">edit</span></button></td>
</tr>
<tr className="border-b border-surface-variant hover:bg-surface-container-low transition-colors bg-error-container/20">
<td className="p-4 font-body-md text-body-md text-on-surface font-semibold flex items-center gap-2"><span className="material-symbols-outlined text-error text-[18px]">error</span> Legal Representation Setup</td>
<td className="p-4"><span className="font-label-caps text-label-caps text-error bg-error-container px-2 py-1 rounded">Legal</span></td>
<td className="p-4"><span className="font-body-sm text-body-sm text-error font-semibold">Overdue</span></td>
<td className="p-4 font-body-sm text-body-sm text-error font-medium">Oct 20, 2023</td>
<td className="p-4">
<div className="flex items-center gap-2">
<img className="w-6 h-6 rounded-full object-cover" data-alt="Portrait of a serious male lawyer in a dark suit, modern office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCshqhRfJic4o-TIjw9PWfr_AZbQdo9Pp6mbPAc6IMiedXmFw8HmFfk7T0mWYs4IrfAi8wj7l25lWx4eFZckHRTpYq4NXL4qniONI7ljEmmgALPIVapSLYr_4ixxpqAuOm-EZwLIJQNueFlUzXQmRae9XScyLq1l7-GG_6amW5VQTzSBeOnBJIzWq5IOsHJnO9nsiKPRLct2idFqSvox2as1Xblp5_f63i5qG0d4St0e9yHh1EasrQw"/>
<span className="font-body-sm text-body-sm text-on-surface">J. Doe Esq.</span>
</div>
</td>
<td className="p-4"><button className="text-primary hover:bg-surface-container p-1 rounded"><span className="material-symbols-outlined text-[20px]">edit</span></button></td>
</tr>
<tr className="border-b border-surface-variant hover:bg-surface-container-low transition-colors bg-primary-container/10">
<td className="p-4 font-body-md text-body-md text-on-surface font-semibold">Initial Relatives Interview</td>
<td className="p-4"><span className="font-label-caps text-label-caps text-on-primary bg-primary/20 px-2 py-1 rounded">Family Tracing</span></td>
<td className="p-4"><span className="font-body-sm text-body-sm text-primary font-semibold">Outcome Pending</span></td>
<td className="p-4 font-body-sm text-body-sm text-on-surface-variant">Oct 21, 2023</td>
<td className="p-4"><span className="font-body-sm text-body-sm text-on-surface">Internal Team</span></td>
<td className="p-4"><button className="bg-primary text-on-primary px-3 py-1 rounded font-label-caps text-label-caps">Log Outcome</button></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

    </>
  );
}
