import React, { useState } from 'react';

export default function ExternalReferral() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-full relative bg-[#f8fafd]">
      <div className="px-6 py-8 sm:px-12 sm:py-10 max-w-[1600px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-8 gap-4">
          <div>
            <p className="font-label-caps text-sm text-on-surface-variant font-medium tracking-wide mb-1 flex items-center gap-1">
              Case Inquiry <span className="material-symbols-outlined text-[16px]">chevron_right</span> Rescue/Handover &amp; Referral <span className="material-symbols-outlined text-[16px]">chevron_right</span> External Referral
            </p>
            <h1 className="text-4xl font-bold text-on-surface mb-2">External Referrals</h1>
            <p className="text-on-surface-variant max-w-2xl">
              Manage and track beneficiary transfers to external partner organizations, government facilities, and specialized care centers.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white text-on-surface border border-outline-variant px-4 py-2.5 rounded-lg font-medium text-sm shadow-sm hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-[18px]">contact_page</span>
              Partner Directory
            </button>
            <button
              onClick={() => setIsFormOpen(true)}
              className="flex items-center gap-2 bg-[#0e3b8a] text-white px-5 py-2.5 rounded-lg font-medium text-sm shadow-md hover:bg-[#0c3175] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">output</span>
              Initiate Transfer
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white rounded-xl p-5 border border-outline-variant/30 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-xs tracking-wider text-on-surface-variant uppercase">Active Transfers</h3>
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined text-[20px]">transfer_within_a_station</span>
              </div>
            </div>
            <div className="text-4xl font-bold text-on-surface mb-2">24</div>
            <div className="flex items-center gap-1 text-xs font-medium text-on-surface-variant">
              In progress with receiving agencies
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-outline-variant/30 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-xs tracking-wider text-on-surface-variant uppercase">Pending Approval</h3>
              <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600">
                <span className="material-symbols-outlined text-[20px]">pending_actions</span>
              </div>
            </div>
            <div className="text-4xl font-bold text-on-surface mb-2">12</div>
            <div className="flex items-center gap-1 text-xs font-medium text-yellow-600">
              <span className="material-symbols-outlined text-[14px]">warning</span>
              Requires committee review
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-outline-variant/30 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-xs tracking-wider text-on-surface-variant uppercase">Completed (This Month)</h3>
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                <span className="material-symbols-outlined text-[20px]">task_alt</span>
              </div>
            </div>
            <div className="text-4xl font-bold text-on-surface mb-2">48</div>
            <div className="flex items-center gap-1 text-xs font-medium text-green-600">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              +15% from last month
            </div>
          </div>

          <div className="bg-[#fdf0f0] rounded-xl p-5 border border-red-100 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-xs tracking-wider text-red-800 uppercase">Escalated / Delayed</h3>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-red-600 shadow-sm border border-red-100">
                <span className="material-symbols-outlined text-[20px]">timer_off</span>
              </div>
            </div>
            <div className="text-4xl font-bold text-red-600 mb-2">3</div>
            <div className="flex items-center gap-1 text-xs font-bold text-red-600">
              Action Required Immediately
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Table Section (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-outline-variant/40 shadow-sm overflow-hidden flex flex-col">
              <div className="flex items-center justify-between p-5 border-b border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0e3b8a]">format_list_bulleted</span>
                  <h2 className="text-lg font-bold text-on-surface">External Referral Queue</h2>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
                    <input type="text" placeholder="Search referrals..." className="pl-9 pr-4 py-1.5 text-sm border border-outline-variant rounded-md focus:outline-none focus:border-[#0e3b8a]" />
                  </div>
                  <button className="text-on-surface-variant hover:text-[#0e3b8a] transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-surface-container-lowest border-b border-outline-variant/30">
                      <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Ref ID / Beneficiary</th>
                      <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Receiving Agency</th>
                      <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Transfer Type</th>
                      <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Status</th>
                      <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Last Updated</th>
                      <th className="px-5 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20">
                    {[
                      { id: 'EXT-9021', name: 'Aarav Sharma', agency: 'Kathmandu Child Specialized Care', type: 'Medical Intervention', status: 'Awaiting Acceptance', statusColor: 'bg-yellow-100 text-yellow-800', date: 'Today, 10:30 AM' },
                      { id: 'EXT-9018', name: 'Priya Gurung', agency: 'SOS Children\'s Village Pokhara', type: 'Long-term Placement', status: 'Approved', statusColor: 'bg-green-100 text-green-800', date: 'Yesterday, 14:15 PM' },
                      { id: 'EXT-8995', name: 'Ravi Thapa', agency: 'National Trauma Center', type: 'Psychiatric Care', status: 'In Transit', statusColor: 'bg-blue-100 text-blue-800', date: 'Oct 14, 09:00 AM' },
                      { id: 'EXT-8970', name: 'Sunita Rai', agency: 'Maiti Nepal Rehabilitation', type: 'Specialized Protection', status: 'Delayed', statusColor: 'bg-red-100 text-red-800', date: 'Oct 12, 16:45 PM' },
                      { id: 'EXT-8955', name: 'Bikash Tamang', agency: 'District Vocational Center', type: 'Education/Training', status: 'Draft', statusColor: 'bg-gray-100 text-gray-800', date: 'Oct 10, 11:20 AM' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-surface-container-lowest transition-colors group">
                        <td className="px-5 py-4">
                          <div className="font-bold text-[#0e3b8a] text-xs mb-0.5">{row.id}</div>
                          <div className="font-semibold text-sm text-on-surface">{row.name}</div>
                        </td>
                        <td className="px-5 py-4 text-sm font-medium text-on-surface flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[14px] text-indigo-600">corporate_fare</span>
                          </div>
                          {row.agency}
                        </td>
                        <td className="px-5 py-4 text-sm text-on-surface-variant">{row.type}</td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${row.statusColor}`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-xs text-on-surface-variant">{row.date}</td>
                        <td className="px-5 py-4 text-right">
                          <button className="text-[#0e3b8a] bg-blue-50 hover:bg-blue-100 font-semibold text-xs px-3 py-1.5 rounded transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">Review</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-outline-variant/30 flex items-center justify-between text-sm text-on-surface-variant bg-surface-container-lowest">
                <span>Showing 1 to 5 of 39 referrals</span>
                <div className="flex gap-1">
                  <button className="px-2 py-1 rounded border border-outline-variant hover:bg-surface-container-low disabled:opacity-50" disabled>Prev</button>
                  <button className="px-2 py-1 rounded bg-[#0e3b8a] text-white">1</button>
                  <button className="px-2 py-1 rounded border border-outline-variant hover:bg-surface-container-low">2</button>
                  <button className="px-2 py-1 rounded border border-outline-variant hover:bg-surface-container-low">3</button>
                  <button className="px-2 py-1 rounded border border-outline-variant hover:bg-surface-container-low">Next</button>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel (Span 1) */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Top Partners */}
            <div className="bg-white rounded-xl border border-outline-variant/40 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0e3b8a]">handshake</span>
                  <h2 className="text-base font-bold text-on-surface">Frequent Receiving Partners</h2>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'SOS Children\'s Villages Nepal', type: 'Long-term Care', active: 14, icon: 'house' },
                  { name: 'National Trauma Center', type: 'Medical & Psych', active: 8, icon: 'local_hospital' },
                  { name: 'Maiti Nepal', type: 'Specialized Protection', active: 5, icon: 'shield_person' },
                ].map((partner, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-outline-variant/30 hover:border-[#0e3b8a]/30 hover:bg-blue-50/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0e3b8a]">
                        <span className="material-symbols-outlined">{partner.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface leading-tight">{partner.name}</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">{partner.type}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-[#0e3b8a] leading-none">{partner.active}</p>
                      <p className="text-[10px] uppercase font-semibold text-on-surface-variant tracking-wider mt-1">Active</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 text-sm font-semibold text-[#0e3b8a] border border-outline-variant/50 rounded-lg hover:bg-blue-50 transition-colors">View Partner Directory</button>
            </div>

            {/* Referral Guidelines Alert */}
            <div className="bg-[#f0f6ff] rounded-xl border border-blue-200 p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-600 mt-0.5">info</span>
                <div>
                  <h3 className="font-bold text-blue-900 text-sm mb-1">Standard Operating Procedure v4.1</h3>
                  <p className="text-xs text-blue-800 leading-relaxed mb-3">All external referrals must now include a completed pre-transfer risk assessment and receiving agency consent form prior to committee review.</p>
                  <button className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded transition-colors">Download Guidelines</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Initiation Modal Placeholder */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
            <div className="p-5 border-b border-outline-variant/30 flex items-center justify-between bg-[#0e3b8a] text-white">
              <h2 className="text-lg font-bold">Initiate External Referral</h2>
              <button onClick={() => setIsFormOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1 bg-surface-container-lowest text-center">
              <span className="material-symbols-outlined text-6xl text-outline-variant mb-4 block">construction</span>
              <h3 className="text-xl font-bold text-on-surface mb-2">Referral Form UI</h3>
              <p className="text-on-surface-variant mb-8">The detailed multi-step transfer form would go here.</p>
              <button onClick={() => setIsFormOpen(false)} className="bg-[#0e3b8a] text-white px-6 py-2 rounded-lg font-medium">Close Modal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
