import React, { useState } from 'react';

export default function UserManagement() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-background">
      <header className="flex items-center justify-between px-margin-desktop py-8 bg-surface border-b border-outline-variant/30 sticky top-0 z-10">
<div>
<h1 className="font-display-lg text-display-lg text-on-surface mb-2 tracking-tight">User &amp; Role Management</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Manage access control, field-level permissions, and organizational scoping for the Child Protection core.</p>
</div>
<div className="flex items-center gap-4">
<div className="flex bg-surface-container rounded-lg p-1 border border-outline-variant/50">
<select className="bg-transparent border-none focus:ring-0 text-sm font-body-md text-on-surface py-1.5 pl-3 pr-8 cursor-pointer outline-none">
<option>All Roles</option>
<option>Case Manager</option>
<option>Social Worker</option>
<option>Administrator</option>
</select>
<div className="w-px bg-outline-variant/50 mx-2 my-1"></div>
<select className="bg-transparent border-none focus:ring-0 text-sm font-body-md text-on-surface py-1.5 pl-3 pr-8 cursor-pointer outline-none">
<option>All Departments</option>
<option>Field Operations</option>
<option>Intake &amp; Triage</option>
<option>Legal Advisory</option>
</select>
</div>
<button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-lg font-headline-sm text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0">
<span className="material-symbols-outlined text-[20px]">person_add</span>
        Provision New User
      </button>
</div>
</header>
<div className="px-margin-desktop py-4 bg-surface-container-low border-b border-outline-variant/20 flex items-center justify-between">
<div className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant flex-wrap">
<span className="text-on-surface">SCOPE:</span>
<span className="flex items-center gap-1 bg-surface py-1 px-2 rounded border border-outline-variant/30 text-on-surface hover:bg-surface-variant cursor-pointer transition-colors"><span className="material-symbols-outlined text-[14px]">corporate_fare</span>Compass Nepal</span>
<span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
<span className="flex items-center gap-1 bg-surface py-1 px-2 rounded border border-outline-variant/30 text-on-surface hover:bg-surface-variant cursor-pointer transition-colors"><span className="material-symbols-outlined text-[14px]">category</span>Child Protection</span>
<span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
<span className="flex items-center gap-1 bg-surface py-1 px-2 rounded border border-outline-variant/30 text-on-surface hover:bg-surface-variant cursor-pointer transition-colors"><span className="material-symbols-outlined text-[14px]">location_on</span>Kathmandu</span>
<span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
<span className="flex items-center gap-1 bg-primary-container text-on-primary-container py-1 px-2 rounded border border-primary/20"><span className="material-symbols-outlined text-[14px]">badge</span>Case Manager</span>
</div>
<button className="text-primary hover:text-primary-fixed-dim transition-colors text-sm font-label-caps flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">edit_note</span> Edit Scope
    </button>
</div>
<main className="flex-1 overflow-x-auto p-margin-desktop">
<div className="bg-surface rounded-xl shadow-sm border border-outline-variant/40 overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-lowest border-b border-outline-variant/50">
<th className="p-4 font-table-header text-table-header text-on-surface uppercase tracking-wider w-[250px]">User</th>
<th className="p-4 font-table-header text-table-header text-on-surface uppercase tracking-wider w-[180px]">Role</th>
<th className="p-4 font-table-header text-table-header text-on-surface uppercase tracking-wider w-[200px]">Program Scope</th>
<th className="p-4 font-table-header text-table-header text-on-surface uppercase tracking-wider w-[120px]">Tier</th>
<th className="p-4 font-table-header text-table-header text-on-surface uppercase tracking-wider w-[120px]">Status</th>
<th className="p-4 font-table-header text-table-header text-on-surface uppercase tracking-wider w-[150px]">Last Login</th>
<th className="p-4 font-table-header text-table-header text-on-surface uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20 font-body-sm text-body-sm bg-surface">
{/*  Row 1  */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="p-4">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover border border-outline-variant/50" data-alt="Professional headshot of a South Asian woman with dark hair tied back, wearing a neat navy blue button-down shirt, neutral grey background, studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHPR2SYkTLfleEXDHt-QQMBfGA0xNxKeqTcQipKTjQK4VDVYoesuX4a3Efjc-Oo-d-KLdi5QTj7h-8gN35Ue1e9fEz4BIdstOaOu3Brrjownt9gx4_X_fkcOf2HTgnqG9I4BcefjQcuywHnKBobgSF5PUKaqYQ4YothhALTOB8UHoUaXGG_UVYxzJA2NstxbW9MJbJsepHd2bzmZBeCqpH2ecFQ4pNK1KhGuYLN_DpgqKyEuC_0v4I"/>
<div>
<div className="font-headline-sm text-sm text-on-surface">Anjali Gurung</div>
<div className="font-label-caps text-[10px] text-on-surface-variant mt-0.5">ID: USR-8842</div>
</div>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary-container text-on-secondary-container font-label-caps text-[10px] border border-secondary/20">
<span className="material-symbols-outlined text-[14px]">social_leaderboard</span>
                Case Manager
              </span>
</td>
<td className="p-4 text-on-surface-variant">Child Protection (KTM)</td>
<td className="p-4">
<span className="font-label-caps px-2 py-0.5 border border-outline-variant rounded text-on-surface-variant">Level 3</span>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 text-[#0f5132] bg-[#d1e7dd] px-2 py-1 rounded-full font-label-caps text-[10px]">
<div className="w-1.5 h-1.5 rounded-full bg-[#198754]"></div> Active
              </span>
</td>
<td className="p-4 text-on-surface-variant">2 hrs ago</td>
<td className="p-4 text-right">
<button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-container/10 rounded-full transition-colors ">
<span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded-full transition-colors ml-1">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container-low transition-colors group bg-surface-bright/50">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant/50 text-on-surface-variant font-headline-sm">BK</div>
<div>
<div className="font-headline-sm text-sm text-on-surface">Bikash Karki</div>
<div className="font-label-caps text-[10px] text-on-surface-variant mt-0.5">ID: USR-9105</div>
</div>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#cff4fc] text-[#055160] font-label-caps text-[10px] border border-[#b6effb]">
<span className="material-symbols-outlined text-[14px]">support_agent</span>
                Social Worker
              </span>
</td>
<td className="p-4 text-on-surface-variant">Field Ops (PKR)</td>
<td className="p-4">
<span className="font-label-caps px-2 py-0.5 border border-outline-variant rounded text-on-surface-variant">Level 2</span>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 text-[#0f5132] bg-[#d1e7dd] px-2 py-1 rounded-full font-label-caps text-[10px]">
<div className="w-1.5 h-1.5 rounded-full bg-[#198754]"></div> Active
              </span>
</td>
<td className="p-4 text-on-surface-variant">Yesterday</td>
<td className="p-4 text-right">
<button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-container/10 rounded-full transition-colors ">
<span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded-full transition-colors ml-1">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="p-4">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover border border-outline-variant/50" data-alt="Portrait of an older man with glasses, wearing a light grey suit jacket and white shirt, looking authoritative but approachable, corporate environment lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuATSocJ3B8ifSTYnxzHpvo1PLQPFiTreVSoT8mrwTbg8eiWIMq3V77maCsIrrdO5eDEttSSvIsG8uqFtoexLbprW5dtZVxyCVHTjT1t_ycm5DrjZittUtjiGSnYFgVcmqoKlPtidvTT5wU3Dz5cVL-UUAZk_fKPVEOXOiQf940vB4iwWuqW0M-zM8rsceCyxoH3ApgZ2StAAiATzLPzwd_fr83kFtg3cLugA1SueirhdzePExUY2k94"/>
<div>
<div className="font-headline-sm text-sm text-on-surface">Dr. Ramesh Sharma</div>
<div className="font-label-caps text-[10px] text-on-surface-variant mt-0.5">ID: USR-1024</div>
</div>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-tertiary-container/30 text-on-tertiary-container font-label-caps text-[10px] border border-tertiary/20">
<span className="material-symbols-outlined text-[14px]">shield_person</span>
                System Admin
              </span>
</td>
<td className="p-4 text-on-surface-variant">Global Access</td>
<td className="p-4">
<span className="font-label-caps px-2 py-0.5 border border-primary/50 bg-primary/5 rounded text-primary">Level 5</span>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 text-on-surface-variant bg-surface-variant px-2 py-1 rounded-full font-label-caps text-[10px]">
<div className="w-1.5 h-1.5 rounded-full bg-outline"></div> Offline
              </span>
</td>
<td className="p-4 text-on-surface-variant">Oct 24, 2023</td>
<td className="p-4 text-right">
<button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-container/10 rounded-full transition-colors ">
<span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded-full transition-colors ml-1">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</main>
{/*  Slide-over Drawer (Hidden by default, triggered via JS)  */}
<div className="fixed inset-y-0 right-0 w-[480px] bg-surface shadow-[-4px_0_24px_rgba(0,0,0,0.1)] z-50 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col border-l border-outline-variant/30" id="permissions-drawer" className={`fixed inset-y-0 right-0 w-[480px] bg-surface shadow-[-4px_0_24px_rgba(0,0,0,0.1)] z-50 transform transition-transform duration-300 ease-in-out flex flex-col border-l border-outline-variant/30 ${!isDrawerOpen ? "translate-x-full" : "translate-x-0"}`}>
<div className="flex items-center justify-between p-6 border-b border-outline-variant/30 bg-surface-container-lowest">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Granular Permissions</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Editing access for <strong className="text-on-surface">Anjali Gurung</strong></p>
</div>
<button className="p-2 hover:bg-surface-variant rounded-full text-on-surface-variant transition-colors" id="close-drawer">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-8 bg-background">
{/*  PII Toggle  */}
<div className="bg-error-container/20 border border-error/20 p-5 rounded-xl">
<div className="flex items-start justify-between">
<div>
<h3 className="font-headline-sm text-sm text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-error text-[18px]">visibility_off</span>
              Personally Identifiable Information (PII)
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Allows viewing of unmasked names, ID numbers, and precise locations.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer mt-1">
<input defaultChecked className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-error"></div>
</label>
</div>
</div>
{/*  Module Permissions  */}
<div>
<h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4 border-b border-outline-variant/30 pb-2">Module Access Control</h3>
<div className="space-y-3">
{/*  Intake  */}
<div className="bg-surface rounded-lg border border-outline-variant/40 p-4">
<div className="flex items-center justify-between mb-3">
<span className="font-headline-sm text-sm text-on-surface">Case Intake</span>
<span className="px-2 py-0.5 bg-primary/10 text-primary font-label-caps text-[10px] rounded">Full Access</span>
</div>
<div className="flex gap-4 font-body-sm text-body-sm">
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox"/> Read
              </label>
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox"/> Edit
              </label>
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox"/> Approve
              </label>
</div>
</div>
{/*  Assessment  */}
<div className="bg-surface rounded-lg border border-outline-variant/40 p-4">
<div className="flex items-center justify-between mb-3">
<span className="font-headline-sm text-sm text-on-surface">Assessment</span>
<span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container font-label-caps text-[10px] rounded">Standard</span>
</div>
<div className="flex gap-4 font-body-sm text-body-sm">
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox"/> Read
              </label>
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox"/> Edit
              </label>
<label className="flex items-center gap-2 opacity-50 cursor-not-allowed">
<input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4 bg-surface-variant" disabled type="checkbox"/> Approve
              </label>
</div>
</div>
{/*  Closure  */}
<div className="bg-surface rounded-lg border border-outline-variant/40 p-4 opacity-75">
<div className="flex items-center justify-between mb-3">
<span className="font-headline-sm text-sm text-on-surface">Case Closure</span>
<span className="px-2 py-0.5 bg-surface-variant text-on-surface-variant font-label-caps text-[10px] rounded">Read Only</span>
</div>
<div className="flex gap-4 font-body-sm text-body-sm">
<label className="flex items-center gap-2 cursor-pointer">
<input defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox"/> Read
              </label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox"/> Edit
              </label>
<label className="flex items-center gap-2 opacity-50 cursor-not-allowed">
<input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4 bg-surface-variant" disabled type="checkbox"/> Approve
              </label>
</div>
</div>
</div>
</div>
</div>
<div className="p-6 border-t border-outline-variant/30 bg-surface-container-lowest flex justify-end gap-3">
<button className="px-4 py-2 font-headline-sm text-sm text-on-surface-variant border border-outline-variant rounded-lg hover:bg-surface-variant transition-colors">Cancel</button>
<button className="px-4 py-2 font-headline-sm text-sm bg-primary text-on-primary rounded-lg shadow-sm hover:shadow-md transition-all">Save Changes</button>
</div>
</div>
{/*  Drawer Overlay Backdrop  */}
{isDrawerOpen && <div className="fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-40 transition-opacity opacity-100" id="drawer-backdrop" onClick={() => setIsDrawerOpen(false)}></div>}
    </div>
  );
}
