import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyAudit() {
  // If there are tabs (like in BeneficiaryProfile), we can add basic state
  const [activeTab, setActiveTab] = useState('tab-identity');
  
  return (
    <>
      <div className="flex flex-col w-full relative">
<div className="px-8 py-10 flex justify-between items-end gap-6 bg-surface-container-lowest">
<div>
<h1 className="font-display-lg text-display-lg text-on-surface mb-2 tracking-tight">Privacy &amp; Audit</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Immutable activity logs and system-wide data sensitivity configurations. Monitor access patterns and compliance status.
            </p>
</div>
<div className="flex gap-4">
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container border border-outline-variant rounded-lg font-label-caps text-label-caps text-on-surface hover:bg-surface-container-high transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">download</span>
                EXPORT LOGS
            </button>
<button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-caps text-label-caps hover:bg-primary/90 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
                RUN AUDIT
            </button>
</div>
</div>
<div className="px-8 py-8 grid grid-cols-12 gap-8">
<div className="col-span-12 xl:col-span-8 flex flex-col gap-6">
<div className="bg-surface-container-lowest rounded-xl shadow-md border border-outline-variant overflow-hidden flex flex-col">
<div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
<h2 className="font-headline-sm text-headline-sm text-on-surface">System Access &amp; Immutable Activity Log</h2>
<div className="flex gap-2">
<div className="flex items-center bg-surface-container border border-outline-variant rounded-md px-3 h-[32px]">
<span className="material-symbols-outlined text-on-surface-variant text-[16px] mr-2">search</span>
<input className="bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface w-48 placeholder:text-on-surface-variant/50" placeholder="Search logs..." type="text"/>
</div>
<button className="flex items-center justify-center w-[32px] h-[32px] bg-surface-container border border-outline-variant rounded-md text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="bg-surface-container-highest border-b border-outline-variant">
<th className="py-3 px-6 font-table-header text-table-header text-on-surface-variant whitespace-nowrap">TIMESTAMP</th>
<th className="py-3 px-6 font-table-header text-table-header text-on-surface-variant whitespace-nowrap">ACTOR</th>
<th className="py-3 px-6 font-table-header text-table-header text-on-surface-variant whitespace-nowrap">ACTION</th>
<th className="py-3 px-6 font-table-header text-table-header text-on-surface-variant whitespace-nowrap">TARGET RECORD</th>
<th className="py-3 px-6 font-table-header text-table-header text-on-surface-variant whitespace-nowrap min-w-[200px]">RATIONALE / IP</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant/30">
<tr className="hover:bg-surface-container-low transition-colors group cursor-default">
<td className="py-3 px-6 whitespace-nowrap text-on-surface-variant font-label-caps text-[10px]">2023-10-24 14:32:01 UTC</td>
<td className="py-3 px-6 whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-caps text-[10px]">SJ</div>
<span>Sarah Jenkins</span>
</div>
</td>
<td className="py-3 px-6 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-secondary-container text-on-secondary-container font-label-caps text-[10px]">
<span className="material-symbols-outlined text-[14px]">visibility</span> VIEW
                                    </span>
</td>
<td className="py-3 px-6 whitespace-nowrap font-label-caps text-primary">CASE-8992</td>
<td className="py-3 px-6 text-on-surface-variant text-sm truncate max-w-[200px]" title="Routine follow-up preparation. IP: 192.168.1.42">
                                    Routine follow-up preparation.
                                </td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group cursor-default">
<td className="py-3 px-6 whitespace-nowrap text-on-surface-variant font-label-caps text-[10px]">2023-10-24 14:15:22 UTC</td>
<td className="py-3 px-6 whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-label-caps text-[10px]">MR</div>
<span>Marcus Reed</span>
</div>
</td>
<td className="py-3 px-6 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-error-container text-on-error-container font-label-caps text-[10px]">
<span className="material-symbols-outlined text-[14px]">edit</span> EDIT
                                    </span>
</td>
<td className="py-3 px-6 whitespace-nowrap font-label-caps text-primary">BEN-4410</td>
<td className="py-3 px-6 text-on-surface-variant text-sm truncate max-w-[200px]" title="Updated medical assessment details. IP: 10.0.4.115">
                                    Updated medical assessment...
                                </td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group cursor-default bg-surface-container-low/50">
<td className="py-3 px-6 whitespace-nowrap text-on-surface-variant font-label-caps text-[10px]">2023-10-24 13:58:10 UTC</td>
<td className="py-3 px-6 whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-caps text-[10px]">SYS</div>
<span className="font-bold">System API</span>
</div>
</td>
<td className="py-3 px-6 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-surface-variant text-on-surface-variant font-label-caps text-[10px]">
<span className="material-symbols-outlined text-[14px]">sync_alt</span> TRANSFER
                                    </span>
</td>
<td className="py-3 px-6 whitespace-nowrap font-label-caps text-primary">BATCH-092</td>
<td className="py-3 px-6 text-on-surface-variant text-sm truncate max-w-[200px]" title="Automated nightly sync to central registry.">
                                    Automated nightly sync to...
                                </td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group cursor-default">
<td className="py-3 px-6 whitespace-nowrap text-on-surface-variant font-label-caps text-[10px]">2023-10-24 13:45:05 UTC</td>
<td className="py-3 px-6 whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-caps text-[10px]">SJ</div>
<span>Sarah Jenkins</span>
</div>
</td>
<td className="py-3 px-6 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-secondary-container text-on-secondary-container font-label-caps text-[10px]">
<span className="material-symbols-outlined text-[14px]">visibility</span> VIEW
                                    </span>
</td>
<td className="py-3 px-6 whitespace-nowrap font-label-caps text-primary">DOC-7731</td>
<td className="py-3 px-6 text-on-surface-variant text-sm truncate max-w-[200px]" title="Reviewing legal custody forms. IP: 192.168.1.42">
                                    Reviewing legal custody forms.
                                </td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors group cursor-default">
<td className="py-3 px-6 whitespace-nowrap text-on-surface-variant font-label-caps text-[10px]">2023-10-24 13:20:44 UTC</td>
<td className="py-3 px-6 whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-[#3d4143] text-white flex items-center justify-center font-label-caps text-[10px]">EL</div>
<span>Elena Lopez</span>
</div>
</td>
<td className="py-3 px-6 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#ffdad6] text-[#93000a] font-label-caps text-[10px]">
<span className="material-symbols-outlined text-[14px]">delete_forever</span> DELETE
                                    </span>
</td>
<td className="py-3 px-6 whitespace-nowrap font-label-caps text-primary">ATT-1022</td>
<td className="py-3 px-6 text-on-surface-variant text-sm truncate max-w-[200px]" title="Removed duplicate photo upload. IP: 10.0.5.88">
                                    Removed duplicate photo up...
                                </td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-3 border-t border-outline-variant bg-surface-container flex justify-between items-center text-sm">
<span className="text-on-surface-variant">Showing 1-5 of 12,492 logs</span>
<div className="flex gap-1">
<button className="p-1 rounded hover:bg-surface-variant text-on-surface-variant disabled:opacity-50" disabled=""><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
<button className="p-1 rounded hover:bg-surface-variant text-on-surface"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm relative overflow-hidden group">
<div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
<div className="flex items-center justify-between mb-4 relative z-10">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Data Retention</h3>
<span className="material-symbols-outlined text-primary">inventory_2</span>
</div>
<div className="space-y-4 relative z-10">
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-on-surface-variant">Active Cases</span>
<span className="font-bold text-on-surface">Indefinite</span>
</div>
<div className="w-full bg-surface-variant rounded-full h-1.5"><div className="bg-primary h-1.5 rounded-full w-full"></div></div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-on-surface-variant">Closed Cases</span>
<span className="font-bold text-on-surface">7 Years</span>
</div>
<div className="w-full bg-surface-variant rounded-full h-1.5"><div className="bg-secondary h-1.5 rounded-full w-[70%]"></div></div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-on-surface-variant">Audit Logs</span>
<span className="font-bold text-on-surface">3 Years</span>
</div>
<div className="w-full bg-surface-variant rounded-full h-1.5"><div className="bg-tertiary h-1.5 rounded-full w-[30%]"></div></div>
</div>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Compliance Status</h3>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between p-3 bg-surface-container rounded-lg border border-outline-variant/50">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-600">check_circle</span>
<span className="font-body-md text-on-surface">GDPR / Data Privacy</span>
</div>
<span className="font-label-caps text-[10px] bg-green-100 text-green-800 px-2 py-1 rounded">COMPLIANT</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface-container rounded-lg border border-outline-variant/50">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-green-600">check_circle</span>
<span className="font-body-md text-on-surface">Encryption at Rest</span>
</div>
<span className="font-label-caps text-[10px] bg-green-100 text-green-800 px-2 py-1 rounded">ACTIVE</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface-container rounded-lg border border-error/30">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-error">warning</span>
<span className="font-body-md text-on-surface">DPIA Review Due</span>
</div>
<span className="font-label-caps text-[10px] bg-error-container text-on-error-container px-2 py-1 rounded">PENDING</span>
</div>
</div>
</div>
</div>
</div>
<div className="col-span-12 xl:col-span-4 flex flex-col gap-6">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-md flex flex-col h-full">
<div className="px-6 py-4 border-b border-outline-variant bg-surface-container">
<h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface-variant">policy</span>
                        Field Sensitivity Tagging
                    </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Configure data exposure levels across the system.</p>
</div>
<div className="p-6 flex-1 flex flex-col gap-4 overflow-y-auto max-h-[600px]">
<div className="flex flex-col gap-2 p-3 border border-outline-variant rounded-lg bg-surface hover:shadow-sm transition-shadow">
<div className="flex justify-between items-start">
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">FIELD: BENEFICIARY_NAME</span>
<span className="font-body-md text-on-surface font-semibold">Full Legal Name</span>
</div>
<span className="px-2 py-1 rounded text-[10px] font-label-caps bg-error-container text-on-error-container border border-error/20 shadow-sm">PII - RESTRICTED</span>
</div>
<div className="text-xs text-on-surface-variant border-t border-outline-variant/30 pt-2 mt-1">Visible only to Assigned Caseworker &amp; Admin. Masked in reports.</div>
</div>
<div className="flex flex-col gap-2 p-3 border border-outline-variant rounded-lg bg-surface hover:shadow-sm transition-shadow">
<div className="flex justify-between items-start">
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">FIELD: MEDICAL_HISTORY_NOTES</span>
<span className="font-body-md text-on-surface font-semibold">Medical Assessment Notes</span>
</div>
<span className="px-2 py-1 rounded text-[10px] font-label-caps bg-tertiary-container text-on-tertiary-container border border-tertiary/20 shadow-sm">HIGHLY SENSITIVE</span>
</div>
<div className="text-xs text-on-surface-variant border-t border-outline-variant/30 pt-2 mt-1">Requires explicit justification log to view. Not exportable.</div>
</div>
<div className="flex flex-col gap-2 p-3 border border-outline-variant rounded-lg bg-surface hover:shadow-sm transition-shadow">
<div className="flex justify-between items-start">
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">FIELD: CURRENT_LOCATION_COORD</span>
<span className="font-body-md text-on-surface font-semibold">Current Placement GPS</span>
</div>
<span className="px-2 py-1 rounded text-[10px] font-label-caps bg-error-container text-on-error-container border border-error/20 shadow-sm">PII - RESTRICTED</span>
</div>
<div className="text-xs text-on-surface-variant border-t border-outline-variant/30 pt-2 mt-1">Fuzzed to 5km radius for non-assigned staff.</div>
</div>
<div className="flex flex-col gap-2 p-3 border border-outline-variant rounded-lg bg-surface hover:shadow-sm transition-shadow">
<div className="flex justify-between items-start">
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">FIELD: CASE_STATUS_INTERNAL</span>
<span className="font-body-md text-on-surface font-semibold">Internal Status Code</span>
</div>
<span className="px-2 py-1 rounded text-[10px] font-label-caps bg-surface-variant text-on-surface-variant border border-outline-variant shadow-sm">INTERNAL USE</span>
</div>
<div className="text-xs text-on-surface-variant border-t border-outline-variant/30 pt-2 mt-1">Available to all authenticated staff roles.</div>
</div>
<div className="flex flex-col gap-2 p-3 border border-outline-variant rounded-lg bg-surface hover:shadow-sm transition-shadow">
<div className="flex justify-between items-start">
<div>
<span className="font-label-caps text-label-caps text-on-surface-variant block mb-1">FIELD: AGGREGATE_AGE_BRACKET</span>
<span className="font-body-md text-on-surface font-semibold">Age Range Bracket</span>
</div>
<span className="px-2 py-1 rounded text-[10px] font-label-caps bg-secondary-container text-on-secondary-container border border-secondary/20 shadow-sm">PUBLIC / REPORTING</span>
</div>
<div className="text-xs text-on-surface-variant border-t border-outline-variant/30 pt-2 mt-1">Safe for external reporting and dashboards.</div>
</div>
</div>
<div className="p-4 border-t border-outline-variant bg-surface-container-lowest text-center">
<button className="text-primary font-label-caps hover:underline">MANAGE ALL 142 FIELDS</button>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}
