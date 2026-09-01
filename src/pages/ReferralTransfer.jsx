import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ReferralTransfer() {
  // If there are tabs (like in BeneficiaryProfile), we can add basic state
  const [activeTab, setActiveTab] = useState('tab-identity');
  
  return (
    <>
      <div className="flex flex-col w-full px-8 pb-12 gap-8">
<div className="flex flex-col gap-2 mt-8">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>move_up</span>
<h1 className="font-display-lg text-display-lg text-on-surface">Referral &amp; Transfer Workspace</h1>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">Secure inter-tenant data sharing. Manage outgoing referrals with granular PII controls and review incoming case transfers before acceptance.</p>
</div>
<div className="flex gap-4 border-b border-outline-variant/30 pb-4">
<button className="font-headline-sm text-headline-sm text-primary border-b-2 border-primary pb-2 px-2 transition-all">Outgoing Referrals</button>
<button className="font-headline-sm text-headline-sm text-on-surface-variant hover:text-primary transition-all pb-2 px-2">Incoming Transfers <span className="bg-error text-on-error font-label-caps text-label-caps px-2 py-0.5 rounded-full ml-2">3 New</span></button>
</div>
<div className="grid grid-cols-12 gap-6 mt-4">
{/* Outgoing Referrals Section */}
<div className="col-span-8 flex flex-col gap-6">
<div className="bg-surface-container rounded-2xl p-6 shadow-md flex flex-col gap-4 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transform translate-x-8 -translate-y-8 transition-transform group-hover:scale-110"></div>
<div className="flex items-start justify-between relative z-10">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">New Referral Data Package</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Configure data fields for external sharing. PII is obfuscated by default based on tenant agreements.</p>
</div>
<button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-caps text-label-caps tracking-widest uppercase hover:bg-primary/90 transition-colors shadow-sm">Initialize Transfer</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 relative z-10">
<div className="flex flex-col gap-2">
<label className="font-table-header text-table-header text-on-surface-variant">Select Beneficiary Record</label>
<select className="h-[36px] bg-surface rounded-md px-3 font-body-md text-body-md text-on-surface border border-outline-variant focus:border-primary focus:outline-none shadow-sm">
<option>Aisha M. (Case #492-A)</option>
<option>David O. (Case #105-B)</option>
<option>Sara L. (Case #882-C)</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="font-table-header text-table-header text-on-surface-variant">Destination Organization (Tenant ID)</label>
<select className="h-[36px] bg-surface rounded-md px-3 font-body-md text-body-md text-on-surface border border-outline-variant focus:border-primary focus:outline-none shadow-sm">
<option>UNICEF Child Protection Unit (T-942)</option>
<option>Save the Children Reg. Office (T-103)</option>
<option>Local Ministry of Social Welfare (T-001)</option>
</select>
</div>
</div>
<div className="mt-4 bg-surface rounded-xl border border-outline-variant/50 overflow-hidden relative z-10">
<div className="bg-surface-variant px-4 py-3 flex items-center justify-between border-b border-outline-variant/50">
<span className="font-table-header text-table-header text-on-surface-variant uppercase tracking-wider">Data Packaging Checklist</span>
<div className="flex items-center gap-2">
<span className="font-label-caps text-label-caps text-error bg-error-container px-2 py-1 rounded-md">PII Stripping Active</span>
</div>
</div>
<div className="flex flex-col divide-y divide-outline-variant/20">
<label className="flex items-center p-4 hover:bg-surface-container-low transition-colors cursor-pointer group">
<input checked="" className="w-4 h-4 text-primary rounded border-outline focus:ring-primary" type="checkbox"/>
<div className="ml-4 flex-1">
<div className="font-headline-sm text-[16px] text-on-surface">Basic Demographics</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Age group, gender, origin region. <span className="text-error font-medium">Names &amp; precise DOB stripped.</span></div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">check_circle</span>
</label>
<label className="flex items-center p-4 hover:bg-surface-container-low transition-colors cursor-pointer group">
<input checked="" className="w-4 h-4 text-primary rounded border-outline focus:ring-primary" type="checkbox"/>
<div className="ml-4 flex-1">
<div className="font-headline-sm text-[16px] text-on-surface">Incident History</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Categorized events, dates, risk levels. Narrative descriptions generalized.</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">check_circle</span>
</label>
<label className="flex items-center p-4 hover:bg-surface-container-low transition-colors cursor-pointer group">
<input className="w-4 h-4 text-primary rounded border-outline focus:ring-primary" type="checkbox"/>
<div className="ml-4 flex-1">
<div className="font-headline-sm text-[16px] text-on-surface">Medical Assessments</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Requires explicit Level 3 authorization from Guardian/Legal Rep.</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">lock</span>
</label>
<label className="flex items-center p-4 hover:bg-surface-container-low transition-colors cursor-pointer group">
<input checked="" className="w-4 h-4 text-primary rounded border-outline focus:ring-primary" type="checkbox"/>
<div className="ml-4 flex-1">
<div className="font-headline-sm text-[16px] text-on-surface">Service Plan Interventions</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Past support provided, outcomes, current action plan.</div>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">check_circle</span>
</label>
</div>
</div>
</div>
<div className="bg-surface-container rounded-2xl p-6 shadow-md">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Recent Outgoing Transfers</h3>
<div className="overflow-x-auto">
<table className="w-full text-left min-w-[800px]">
<thead>
<tr className="border-b border-outline-variant/30">
<th className="pb-2 font-table-header text-table-header text-on-surface-variant">ID</th>
<th className="pb-2 font-table-header text-table-header text-on-surface-variant">Destination</th>
<th className="pb-2 font-table-header text-table-header text-on-surface-variant">Date Sent</th>
<th className="pb-2 font-table-header text-table-header text-on-surface-variant">Status</th>
<th className="pb-2 font-table-header text-table-header text-on-surface-variant">Actions</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm text-on-surface">
<tr className="h-[40px] border-b border-outline-variant/10 hover:bg-surface-container-high transition-colors">
<td className="font-label-caps text-label-caps text-on-surface-variant">REF-902</td>
<td>UNHCR Field Office</td>
<td>Oct 24, 2023</td>
<td><span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded-md text-xs">Pending Review</span></td>
<td><button className="text-primary hover:underline">Revoke</button></td>
</tr>
<tr className="h-[40px] hover:bg-surface-container-high transition-colors">
<td className="font-label-caps text-label-caps text-on-surface-variant">REF-884</td>
<td>Ministry of Health</td>
<td>Oct 21, 2023</td>
<td><span className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded-md text-xs">Accepted</span></td>
<td><button className="text-on-surface-variant hover:text-primary">View Log</button></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/* Incoming Transfers Sidebar */}
<div className="col-span-4 flex flex-col gap-4">
{/* Transfer Card */}
<div className="bg-surface-container-high rounded-xl p-5 shadow-lg relative border-l-4 border-error">
<div className="flex justify-between items-start mb-3">
<span className="bg-error text-on-error font-label-caps text-[10px] px-2 py-1 rounded-full uppercase tracking-wider">Urgent Transfer</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">INC-4029</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Unaccompanied Minor (M, 8)</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Sending Org: <strong className="text-on-surface">Border Relief Agency (T-044)</strong></p>
<div className="bg-surface rounded-lg p-3 mb-4 shadow-sm">
<div className="font-table-header text-[10px] text-on-surface-variant uppercase mb-2">Attached Data Package</div>
<div className="flex flex-wrap gap-2">
<span className="bg-surface-container text-on-surface-variant px-2 py-1 rounded-md text-[11px] flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">person</span> Demographics</span>
<span className="bg-surface-container text-on-surface-variant px-2 py-1 rounded-md text-[11px] flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">medical_services</span> Medical Flag</span>
<span className="bg-surface-container text-on-surface-variant px-2 py-1 rounded-md text-[11px] flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">map</span> Location Trail</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 bg-primary text-on-primary py-2 rounded-lg font-label-caps text-label-caps hover:bg-primary/90 transition-colors shadow-sm flex justify-center items-center gap-1">
<span className="material-symbols-outlined text-[16px]">check</span> Accept
          </button>
<button className="flex-1 bg-surface text-on-surface border border-outline-variant py-2 rounded-lg font-label-caps text-label-caps hover:bg-surface-container transition-colors flex justify-center items-center gap-1">
<span className="material-symbols-outlined text-[16px]">visibility</span> Preview
          </button>
</div>
</div>
{/* Transfer Card */}
<div className="bg-surface-container rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-3">
<span className="bg-surface-variant text-on-surface-variant font-label-caps text-[10px] px-2 py-1 rounded-full uppercase tracking-wider">Standard</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">INC-4028</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Family Reunification Case</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Sending Org: <strong className="text-on-surface">National Social Services (T-002)</strong></p>
<div className="flex gap-2">
<button className="flex-1 bg-surface text-primary border border-primary py-2 rounded-lg font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-colors flex justify-center items-center gap-1">
<span className="material-symbols-outlined text-[16px]">open_in_new</span> Review Case
          </button>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}
