import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  // If there are tabs (like in BeneficiaryProfile), we can add basic state
  const [activeTab, setActiveTab] = useState('tab-identity');
  
  return (
    <>
      <div className="flex flex-col w-full px-8 pb-8 gap-6 max-w-[1440px] mx-auto">
<div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mt-8 gap-4">
<div>
<h2 className="font-display-lg text-display-lg text-on-surface">Overview</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-1">High-level summary and active priorities.</p>
</div>
<div className="flex gap-3">
<button className="h-[36px] px-4 rounded font-label-caps text-label-caps border border-outline text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">calendar_month</span> Last 7 Days
      </button>
<button className="h-[36px] px-4 rounded font-label-caps text-label-caps bg-primary text-on-primary hover:bg-primary-container transition-colors shadow-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">download</span> Export Report
      </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-surface-container rounded-xl p-5 shadow-sm relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Total Active Cases</p>
<span className="material-symbols-outlined text-primary p-2 bg-surface rounded-full shadow-sm">folder_open</span>
</div>
<div className="relative z-10">
<span className="font-display-lg text-display-lg text-on-surface">1,248</span>
<div className="flex items-center gap-1 mt-2 text-[#16A34A]">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span className="font-body-sm text-body-sm">+5.2% from last week</span>
</div>
</div>
</div>
<div className="bg-surface-container rounded-xl p-5 shadow-sm relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">New Intakes</p>
<span className="material-symbols-outlined text-primary p-2 bg-surface rounded-full shadow-sm">person_add</span>
</div>
<div className="relative z-10">
<span className="font-display-lg text-display-lg text-on-surface">84</span>
<div className="flex items-center gap-1 mt-2 text-on-surface-variant">
<span className="font-body-sm text-body-sm">This week</span>
</div>
</div>
</div>
<div className="bg-surface-container rounded-xl p-5 shadow-sm relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Pending Assessments</p>
<span className="material-symbols-outlined text-primary p-2 bg-surface rounded-full shadow-sm">pending_actions</span>
</div>
<div className="relative z-10">
<span className="font-display-lg text-display-lg text-on-surface">312</span>
<div className="flex items-center gap-1 mt-2 text-on-surface-variant">
<span className="font-body-sm text-body-sm">Require immediate review</span>
</div>
</div>
</div>
<div className="bg-error-container rounded-xl p-5 shadow-sm relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-error/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<p className="font-label-caps text-label-caps text-on-error-container uppercase tracking-wider">Urgent Referrals</p>
<span className="material-symbols-outlined text-error p-2 bg-surface rounded-full shadow-sm">priority_high</span>
</div>
<div className="relative z-10">
<div className="flex items-baseline gap-3">
<span className="font-display-lg text-display-lg text-on-error-container">17</span>
<span className="bg-error text-on-error font-label-caps text-[10px] px-2 py-0.5 rounded-full animate-pulse">ACTION NEEDED</span>
</div>
<div className="flex items-center gap-1 mt-2 text-[#DC2626]">
<span className="material-symbols-outlined text-[16px]">warning</span>
<span className="font-body-sm text-body-sm">Escalated status</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 flex flex-col gap-4">
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex-1 flex flex-col">
<div className="p-5 border-b border-outline-variant flex justify-between items-center bg-surface">
<h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">table_chart</span> Active Cases Overview
          </h3>
<Link to="/beneficiary-profile" className="text-primary font-label-caps text-label-caps hover:underline">VIEW ALL</Link>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="bg-surface-container-low font-table-header text-table-header text-on-surface-variant">
<th className="p-4 whitespace-nowrap">Case ID</th>
<th className="p-4">Beneficiary Name</th>
<th className="p-4">Status</th>
<th className="p-4 whitespace-nowrap">Last Updated</th>
<th className="p-4">Assigned Worker</th>
<th className="p-4 text-center">Action</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm text-on-surface">
<tr className="border-b border-outline-variant/50 hover:bg-surface-container-low transition-colors h-[40px]">
<td className="p-4 font-label-caps text-primary"><Link to="/beneficiary-profile" className="hover:underline">C-2023-0891</Link></td>
<td className="p-4 font-semibold">Elena Rostova</td>
<td className="p-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#e0e7ff] text-[#3730a3]">In Progress</span>
</td>
<td className="p-4 text-on-surface-variant">Oct 12, 09:41 AM</td>
<td className="p-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-caps text-[10px]">MS</div>
                  Maria Silva
                </td>
<td className="p-4 text-center">
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</td>
</tr>
<tr className="border-b border-outline-variant/50 bg-surface-container-lowest/50 hover:bg-surface-container-low transition-colors h-[40px]">
<td className="p-4 font-label-caps text-primary"><Link to="/beneficiary-profile" className="hover:underline">C-2023-0892</Link></td>
<td className="p-4 font-semibold">Kwame Osei</td>
<td className="p-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#dcfce7] text-[#166534]">Assessment Done</span>
</td>
<td className="p-4 text-on-surface-variant">Oct 12, 08:30 AM</td>
<td className="p-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-caps text-[10px]">JD</div>
                  John Doe
                </td>
<td className="p-4 text-center">
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</td>
</tr>
<tr className="border-b border-outline-variant/50 hover:bg-surface-container-low transition-colors h-[40px]">
<td className="p-4 font-label-caps text-primary"><Link to="/beneficiary-profile" className="hover:underline">C-2023-0885</Link></td>
<td className="p-4 font-semibold">Ananya Patel</td>
<td className="p-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-error-container text-on-error-container">Urgent Review</span>
</td>
<td className="p-4 text-on-surface-variant">Oct 11, 16:45 PM</td>
<td className="p-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-label-caps text-[10px]">SJ</div>
                  Sarah Jones
                </td>
<td className="p-4 text-center">
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</td>
</tr>
<tr className="border-b border-outline-variant/50 bg-surface-container-lowest/50 hover:bg-surface-container-low transition-colors h-[40px]">
<td className="p-4 font-label-caps text-primary"><Link to="/beneficiary-profile" className="hover:underline">C-2023-0870</Link></td>
<td className="p-4 font-semibold">Miguel Hernandez</td>
<td className="p-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#fef3c7] text-[#92400e]">Pending Intake</span>
</td>
<td className="p-4 text-on-surface-variant">Oct 10, 11:20 AM</td>
<td className="p-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-caps text-[10px]">MS</div>
                  Maria Silva
                </td>
<td className="p-4 text-center">
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors h-[40px]">
<td className="p-4 font-label-caps text-primary"><Link to="/beneficiary-profile" className="hover:underline">C-2023-0865</Link></td>
<td className="p-4 font-semibold">Chen Wei</td>
<td className="p-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#e0e7ff] text-[#3730a3]">In Progress</span>
</td>
<td className="p-4 text-on-surface-variant">Oct 09, 14:15 PM</td>
<td className="p-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-caps text-[10px]">JD</div>
                  John Doe
                </td>
<td className="p-4 text-center">
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="flex flex-col gap-6">
<div className="bg-surface-container rounded-xl p-5 shadow-sm">
<div className="flex justify-between items-center mb-4">
<h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">checklist</span> Upcoming Tasks
          </h3>
</div>
<div className="space-y-3">
<label className="flex items-start gap-3 p-3 bg-surface rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors cursor-pointer group">
<div className="relative flex items-start mt-0.5">
<input className="peer appearance-none w-4 h-4 border border-outline rounded checked:bg-primary checked:border-primary transition-all" type="checkbox"/>
<span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14px] text-on-primary opacity-0 peer-checked:opacity-100 pointer-events-none">check</span>
</div>
<div className="flex-1 min-w-0">
<p className="font-body-sm text-body-sm text-on-surface font-semibold truncate group-hover:text-primary transition-colors">Review Assessment for C-2023-0892</p>
<div className="flex items-center gap-2 mt-1">
<span className="font-label-caps text-[10px] text-error flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">flag</span> HIGH</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Due: 14:00</span>
</div>
</div>
</label>
<label className="flex items-start gap-3 p-3 bg-surface rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors cursor-pointer group">
<div className="relative flex items-start mt-0.5">
<input className="peer appearance-none w-4 h-4 border border-outline rounded checked:bg-primary checked:border-primary transition-all" type="checkbox"/>
<span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14px] text-on-primary opacity-0 peer-checked:opacity-100 pointer-events-none">check</span>
</div>
<div className="flex-1 min-w-0">
<p className="font-body-sm text-body-sm text-on-surface font-semibold truncate group-hover:text-primary transition-colors">Client Interview Preparation</p>
<div className="flex items-center gap-2 mt-1">
<span className="font-label-caps text-[10px] text-[#ca8a04] flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">flag</span> MEDIUM</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Due: 16:30</span>
</div>
</div>
</label>
<label className="flex items-start gap-3 p-3 bg-surface rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors cursor-pointer group opacity-60 hover:opacity-100">
<div className="relative flex items-start mt-0.5">
<input checked="" className="peer appearance-none w-4 h-4 border border-outline rounded checked:bg-primary checked:border-primary transition-all" type="checkbox"/>
<span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[14px] text-on-primary opacity-0 peer-checked:opacity-100 pointer-events-none">check</span>
</div>
<div className="flex-1 min-w-0">
<p className="font-body-sm text-body-sm text-on-surface font-semibold truncate line-through">Submit Monthly M&amp;E Report</p>
<div className="flex items-center gap-2 mt-1">
<span className="font-label-caps text-[10px] text-outline flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">flag</span> LOW</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Completed</span>
</div>
</div>
</label>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-6 mt-2 relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-surface-variant/30 to-transparent pointer-events-none"></div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-6 flex items-center gap-2 relative z-10">
<span className="material-symbols-outlined text-primary">history</span> Recent System Activity
    </h3>
<div className="relative ml-4 border-l-2 border-outline-variant/30 space-y-6 pb-2 z-10">
<div className="relative pl-6">
<div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-primary"></div>
<p className="font-body-sm text-[12px] text-on-surface-variant mb-0.5">10 minutes ago</p>
<p className="font-body-md text-body-md text-on-surface"><span className="font-semibold">Maria Silva</span> submitted a new case intake <Link className="text-primary hover:underline" to="/beneficiary-profile">C-2023-0893</Link></p>
</div>
<div className="relative pl-6">
<div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-error"></div>
<p className="font-body-sm text-[12px] text-on-surface-variant mb-0.5">45 minutes ago</p>
<p className="font-body-md text-body-md text-on-surface flex items-center gap-2">
            Urgent Referral Triggered for <Link className="text-primary font-label-caps text-[11px] hover:underline" to="/beneficiary-profile">C-2023-0885</Link>
<span className="material-symbols-outlined text-error text-[16px]">priority_high</span>
</p>
</div>
<div className="relative pl-6">
<div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-[#16A34A]"></div>
<p className="font-body-sm text-[12px] text-on-surface-variant mb-0.5">2 hours ago</p>
<p className="font-body-md text-body-md text-on-surface"><span className="font-semibold">John Doe</span> completed Initial Assessment for <Link className="text-primary hover:underline" to="/beneficiary-profile">C-2023-0892</Link></p>
</div>
<div className="relative pl-6">
<div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-outline-variant"></div>
<p className="font-body-sm text-[12px] text-on-surface-variant mb-0.5">Yesterday, 15:30</p>
<p className="font-body-md text-body-md text-on-surface">System generated automated follow-up reminders for 12 cases.</p>
</div>
</div>
</div>
</div>
    </>
  );
}
