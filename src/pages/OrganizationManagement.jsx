import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterEntityModal from '../components/RegisterEntityModal';

export default function OrganizationManagement() {
  const [activeTab, setActiveTab] = useState('tab-identity');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full relative">
        <div className="px-8 pb-8 pt-8 flex items-center justify-between">
          <div>
            <h1 className="font-display-lg text-display-lg text-on-surface">Organization Management</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">Manage tenant hierarchy, implementing partners, and oversight bodies.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-surface-container-high rounded-full px-4 h-10 shadow-sm border border-outline-variant focus-within:border-primary transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant mr-2 text-[20px]">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-48 font-body-md text-on-surface placeholder:text-on-surface-variant/70" placeholder="Search organizations..." type="text" />
            </div>
            <button className="h-10 px-4 rounded-full border border-outline-variant text-on-surface hover:bg-surface-container-high transition-colors font-headline-sm text-[14px] flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>
              Filter
            </button>
            <button onClick={() => setIsRegisterOpen(true)} className="h-10 px-6 rounded-full bg-primary text-on-primary hover:bg-primary/90 shadow-md transition-all font-headline-sm text-[14px] flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">add</span>
              Add Organization
            </button>
          </div>
        </div>
        <div className="px-8 pb-8 grid grid-cols-4 gap-6">
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant shadow-sm relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined">corporate_fare</span>
              </div>
              <h3 className="font-headline-sm text-[16px] text-on-surface">Total Active Tenants</h3>
            </div>
            <div className="font-display-lg text-[32px] text-primary">42</div>
            <div className="mt-2 text-xs font-label-caps text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-green-600">trending_up</span> +3 this month
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant shadow-sm relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-secondary/5 rounded-full transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <h3 className="font-headline-sm text-[16px] text-on-surface">Implementing Partners</h3>
            </div>
            <div className="font-display-lg text-[32px] text-secondary">28</div>
            <div className="mt-2 text-xs font-label-caps text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span> Stable
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant shadow-sm relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-tertiary/5 rounded-full transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                <span className="material-symbols-outlined">policy</span>
              </div>
              <h3 className="font-headline-sm text-[16px] text-on-surface">Oversight Bodies</h3>
            </div>
            <div className="font-display-lg text-[32px] text-tertiary">8</div>
            <div className="mt-2 text-xs font-label-caps text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span> Stable
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant shadow-sm relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-surface-variant text-on-surface flex items-center justify-center">
                <span className="material-symbols-outlined">location_city</span>
              </div>
              <h3 className="font-headline-sm text-[16px] text-on-surface">Total Field Offices</h3>
            </div>
            <div className="font-display-lg text-[32px] text-on-surface">156</div>
            <div className="mt-2 text-xs font-label-caps text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-green-600">trending_up</span> +12 this quarter
            </div>
          </div>
        </div>
        <div className="px-8 pb-12 flex-1">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col h-[600px]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="bg-surface-container-low sticky top-0 z-10 border-b border-outline-variant">
                  <tr>
                    <th className="px-6 py-3 font-table-header text-table-header text-on-surface-variant uppercase tracking-wider">Organization Name</th>
                    <th className="px-6 py-3 font-table-header text-table-header text-on-surface-variant uppercase tracking-wider">Legal ID / PAN</th>
                    <th className="px-6 py-3 font-table-header text-table-header text-on-surface-variant uppercase tracking-wider">Tenant Type</th>
                    <th className="px-6 py-3 font-table-header text-table-header text-on-surface-variant uppercase tracking-wider text-right">Field Offices</th>
                    <th className="px-6 py-3 font-table-header text-table-header text-on-surface-variant uppercase tracking-wider text-right">Active Programs</th>
                    <th className="px-6 py-3 font-table-header text-table-header text-on-surface-variant uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 font-table-header text-table-header text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/50 font-body-sm text-body-sm text-on-surface">
                  <tr className="hover:bg-surface-container-low/50 transition-colors h-[40px]">
                    <td className="px-6 py-2 font-headline-sm text-[14px] font-semibold flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px]">SV</div>
                      Save the Children Intl.
                    </td>
                    <td className="px-6 py-2 font-label-caps text-label-caps text-on-surface-variant">LID-8923-44</td>
                    <td className="px-6 py-2">
                      <span className="px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-[11px] font-medium">Implementing Partner</span>
                    </td>
                    <td className="px-6 py-2 text-right">34</td>
                    <td className="px-6 py-2 text-right">12</td>
                    <td className="px-6 py-2">
                      <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                      </div>
                    </td>
                    <td className="px-6 py-2 text-right text-on-surface-variant">
                      <button className="hover:text-primary mx-1"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
                      <button className="hover:text-primary mx-1"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                      <button className="hover:text-primary mx-1"><span className="material-symbols-outlined text-[18px]">settings</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors h-[40px] bg-surface-container-low/20">
                    <td className="px-6 py-2 font-headline-sm text-[14px] font-semibold flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-tertiary/10 flex items-center justify-center text-tertiary font-bold text-[10px]">NC</div>
                      National Child Rights Comm.
                    </td>
                    <td className="px-6 py-2 font-label-caps text-label-caps text-on-surface-variant">PAN-4920-GG</td>
                    <td className="px-6 py-2">
                      <span className="px-2 py-1 rounded bg-tertiary-container text-on-tertiary-container text-[11px] font-medium">Oversight Body</span>
                    </td>
                    <td className="px-6 py-2 text-right">1</td>
                    <td className="px-6 py-2 text-right">--</td>
                    <td className="px-6 py-2">
                      <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                      </div>
                    </td>
                    <td className="px-6 py-2 text-right text-on-surface-variant">
                      <button className="hover:text-primary mx-1"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
                      <button className="hover:text-primary mx-1"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                      <button className="hover:text-primary mx-1"><span className="material-symbols-outlined text-[18px]">settings</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors h-[40px]">
                    <td className="px-6 py-2 font-headline-sm text-[14px] font-semibold flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px]">WV</div>
                      World Vision
                    </td>
                    <td className="px-6 py-2 font-label-caps text-label-caps text-on-surface-variant">LID-1123-99</td>
                    <td className="px-6 py-2">
                      <span className="px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-[11px] font-medium">Implementing Partner</span>
                    </td>
                    <td className="px-6 py-2 text-right">42</td>
                    <td className="px-6 py-2 text-right">8</td>
                    <td className="px-6 py-2">
                      <div className="w-10 h-5 bg-outline-variant rounded-full relative cursor-pointer">
                        <div className="absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                      </div>
                    </td>
                    <td className="px-6 py-2 text-right text-on-surface-variant">
                      <button className="hover:text-primary mx-1"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
                      <button className="hover:text-primary mx-1"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                      <button className="hover:text-primary mx-1"><span className="material-symbols-outlined text-[18px]">settings</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors h-[40px] bg-surface-container-low/20">
                    <td className="px-6 py-2 font-headline-sm text-[14px] font-semibold flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px]">UN</div>
                      UNICEF
                    </td>
                    <td className="px-6 py-2 font-label-caps text-label-caps text-on-surface-variant">UN-9920-XY</td>
                    <td className="px-6 py-2">
                      <span className="px-2 py-1 rounded bg-surface-variant text-on-surface-variant border border-outline-variant text-[11px] font-medium">Donor</span>
                    </td>
                    <td className="px-6 py-2 text-right">4</td>
                    <td className="px-6 py-2 text-right">24</td>
                    <td className="px-6 py-2">
                      <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                      </div>
                    </td>
                    <td className="px-6 py-2 text-right text-on-surface-variant">
                      <button className="hover:text-primary mx-1"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
                      <button className="hover:text-primary mx-1"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                      <button className="hover:text-primary mx-1"><span className="material-symbols-outlined text-[18px]">settings</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/50 transition-colors h-[40px]">
                    <td className="px-6 py-2 font-headline-sm text-[14px] font-semibold flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px]">AC</div>
                      ActionAid
                    </td>
                    <td className="px-6 py-2 font-label-caps text-label-caps text-on-surface-variant">LID-4451-22</td>
                    <td className="px-6 py-2">
                      <span className="px-2 py-1 rounded bg-secondary-container text-on-secondary-container text-[11px] font-medium">Implementing Partner</span>
                    </td>
                    <td className="px-6 py-2 text-right">18</td>
                    <td className="px-6 py-2 text-right">5</td>
                    <td className="px-6 py-2">
                      <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                      </div>
                    </td>
                    <td className="px-6 py-2 text-right text-on-surface-variant">
                      <button className="hover:text-primary mx-1"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
                      <button className="hover:text-primary mx-1"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                      <button className="hover:text-primary mx-1"><span className="material-symbols-outlined text-[18px]">settings</span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Slide-over Modal Overlay (Organization Configurator) */}
        <div className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm z-50 flex justify-end">
          <div className="w-[500px] h-full bg-surface-container-lowest shadow-2xl flex flex-col transform translate-x-0 transition-transform duration-300 ease-in-out border-l border-outline-variant">
            <div className="px-6 py-5 border-b border-outline-variant flex items-center justify-between bg-surface">
              <h2 className="font-headline-md text-headline-md text-on-surface">Organization Configurator</h2>
              <button className="text-on-surface-variant hover:bg-surface-variant p-2 rounded-full transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant">
                <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined text-[24px]">domain</span>
                </div>
                <div>
                  <div className="font-headline-sm text-[16px] text-on-surface">New Organization Profile</div>
                  <div className="font-body-sm text-on-surface-variant">Complete the legal and operational details below.</div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest border-b border-outline-variant pb-2">Legal Identifiers</h3>
                <div>
                  <label className="block font-body-sm text-body-sm text-on-surface mb-1 font-medium">Legal Entity Name</label>
                  <input className="w-full h-9 rounded bg-surface border border-outline-variant px-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-on-surface" placeholder="e.g. Save the Children International" type="text" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body-sm text-body-sm text-on-surface mb-1 font-medium">Registration Number</label>
                    <input className="w-full h-9 rounded bg-surface border border-outline-variant px-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-on-surface font-label-caps" placeholder="REG-####" type="text" />
                  </div>
                  <div>
                    <label className="block font-body-sm text-body-sm text-on-surface mb-1 font-medium">Tax ID / PAN</label>
                    <input className="w-full h-9 rounded bg-surface border border-outline-variant px-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-on-surface font-label-caps" placeholder="PAN-####" type="text" />
                  </div>
                </div>
                <div>
                  <label className="block font-body-sm text-body-sm text-on-surface mb-1 font-medium">Tenant Type</label>
                  <select className="w-full h-9 rounded bg-surface border border-outline-variant px-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-on-surface appearance-none">
                    <option>Implementing Partner</option>
                    <option>Oversight Body</option>
                    <option>Donor</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest border-b border-outline-variant pb-2">Headquarters Address</h3>
                <div>
                  <label className="block font-body-sm text-body-sm text-on-surface mb-1 font-medium">Street Address</label>
                  <input className="w-full h-9 rounded bg-surface border border-outline-variant px-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-on-surface" placeholder="123 Main St" type="text" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body-sm text-body-sm text-on-surface mb-1 font-medium">City</label>
                    <input className="w-full h-9 rounded bg-surface border border-outline-variant px-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-on-surface" placeholder="City" type="text" />
                  </div>
                  <div>
                    <label className="block font-body-sm text-body-sm text-on-surface mb-1 font-medium">Region / State</label>
                    <input className="w-full h-9 rounded bg-surface border border-outline-variant px-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-on-surface" placeholder="State" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-outline-variant bg-surface flex justify-end gap-3">
              <button className="px-6 py-2 rounded border border-outline-variant text-on-surface font-headline-sm text-[14px] hover:bg-surface-variant transition-colors">Cancel</button>
              <button className="px-6 py-2 rounded bg-primary text-on-primary font-headline-sm text-[14px] shadow-sm hover:bg-primary/90 transition-colors">Save Configuration</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
