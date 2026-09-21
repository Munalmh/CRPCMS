import React, { useState } from 'react';
import FormModal from '../components/FormModal';
import ChildProfileForm from '../components/ChildProfileForm';
import ReintegrationActionPlanForm from '../components/ReintegrationActionPlanForm';
import Assessment from './Assessment';
import CasePlanning from './CasePlanning';
import SupportManagement from './SupportManagement';
import FollowUp from './FollowUp';
import Reintegration from './Reintegration';
import RescueHandover from './RescueHandover';
import CaseClosure from './CaseClosure';
import ReferralTransfer from './ReferralTransfer';
import ExternalReferral from './ExternalReferral';

export default function BeneficiaryProfile() {
  const [activeTab, setActiveTab] = useState('dossier');
  const [isProfileFormOpen, setIsProfileFormOpen] = useState(false);
  const [isReintegrationFormOpen, setIsReintegrationFormOpen] = useState(false);
  const [isRescueDropdownOpen, setIsRescueDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-full relative bg-[#f4f7fb] overflow-y-auto">
      <div className="p-6 md:p-8 max-w-[1400px] mx-auto w-full pb-0">
        {/* Top Header Card */}
        <div className="bg-white rounded-xl border border-outline-variant/40 shadow-sm p-6 mb-6 flex flex-col lg:flex-row gap-6 relative">
          
          {/* Profile Image & Badges */}
          <div className="relative shrink-0 flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=300&fit=crop" 
              alt="Aarati Shrestha" 
              className="w-32 h-32 rounded-lg object-cover shadow-md border border-outline-variant/30"
            />
            <div className="absolute -bottom-3 flex items-center gap-1 bg-white border border-[#0e3b8a] text-[#0e3b8a] text-[10px] font-bold px-2 py-1 rounded shadow-sm tracking-wider">
              <span className="material-symbols-outlined text-[14px]">fingerprint</span>
              AFIS VERIFIED
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded tracking-wider">CAS-8902-NPT</span>
                <span className="flex items-center gap-1 bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span> Active Monitoring
                </span>
                <span className="bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase ml-auto lg:ml-0 border border-red-200">Tier 1 High Intervention</span>
              </div>
              <h1 className="text-3xl font-bold text-on-surface mb-4">Aarati Shrestha</h1>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-on-surface-variant">
                <div>
                  <p className="text-xs font-medium text-outline">DOB: 2071-12-01 BS</p>
                  <p className="font-semibold text-on-surface text-xs">(8y 8m)</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-outline">Gender: Female</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-medium text-outline">National ID: BC-992-8810-KA</p>
                </div>
                
                <div className="col-span-2 flex items-start gap-1">
                  <span className="material-symbols-outlined text-[16px] text-outline mt-0.5">location_city</span>
                  <div>
                    <p className="text-xs font-medium text-outline">Placement:</p>
                    <p className="font-semibold text-on-surface text-xs">District 4 Transit Shelter<br/>(Care Placement 02)</p>
                  </div>
                </div>
                <div className="col-span-2 flex items-start gap-1">
                  <span className="material-symbols-outlined text-[16px] text-outline mt-0.5">assignment_ind</span>
                  <div>
                    <p className="text-xs font-medium text-outline">Lead:</p>
                    <p className="font-semibold text-on-surface text-xs">A. Gurung<br/>(CMS-4920)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Stage */}
          <div className="lg:w-80 bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5 flex flex-col justify-between shrink-0">
            <div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-xs font-bold text-on-surface-variant tracking-wider uppercase">Statutory Workflow Stage</p>
                <span className="bg-blue-100 text-[#0e3b8a] text-xs font-bold px-2 py-1 rounded">42%</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#0e3b8a]">fact_check</span>
                <p className="font-bold text-[#0e3b8a] text-sm">Comprehensive Needs Assessment</p>
              </div>
              <p className="text-xs text-on-surface-variant mb-4">Step 7 of 19 in Protection Protocol</p>
              <div className="w-full bg-blue-100 rounded-full h-1.5 mb-5">
                <div className="bg-[#0e3b8a] h-1.5 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <button className="flex-1 bg-white border border-outline-variant text-on-surface text-xs font-semibold py-2 rounded shadow-sm hover:bg-surface-container-low transition-colors flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">groups</span> Multi-Disc Review
                </button>
                <button className="flex-1 bg-[#0e3b8a] text-white text-xs font-semibold py-2 rounded shadow-sm hover:bg-[#0c3175] transition-colors flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">double_arrow</span> Advance Stage
                </button>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setIsProfileFormOpen(true)} className="flex-1 bg-white border border-outline-variant text-[#0e3b8a] text-[10px] font-bold py-1.5 rounded shadow-sm hover:bg-surface-container-low transition-colors flex items-center justify-center gap-1 uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[14px]">edit_document</span> Child Profile Form
                </button>
                <button onClick={() => setIsReintegrationFormOpen(true)} className="flex-1 bg-white border border-outline-variant text-[#0e3b8a] text-[10px] font-bold py-1.5 rounded shadow-sm hover:bg-surface-container-low transition-colors flex items-center justify-center gap-1 uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[14px]">family_restroom</span> Reintegration Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Tabs */}
      <div className="bg-white px-8 pt-4 border-b border-outline-variant/30 sticky top-0 z-10 flex items-center gap-6 overflow-x-auto">
        <button 
          onClick={() => setActiveTab('dossier')}
          className={`flex items-center gap-2 pb-3 font-semibold text-sm border-b-2 transition-colors min-w-max ${activeTab === 'dossier' ? 'border-[#0e3b8a] text-[#0e3b8a]' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          <span className="material-symbols-outlined text-[18px]">dashboard</span>
          Unified Protection Dossier
        </button>
        <button 
          onClick={() => setActiveTab('assessment')}
          className={`flex items-center gap-2 pb-3 font-semibold text-sm border-b-2 transition-colors min-w-max ${activeTab === 'assessment' ? 'border-[#0e3b8a] text-[#0e3b8a]' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          <span className="material-symbols-outlined text-[18px]">fact_check</span>
          Assessment
        </button>
        <button 
          onClick={() => setActiveTab('planning')}
          className={`flex items-center gap-2 pb-3 font-semibold text-sm border-b-2 transition-colors min-w-max ${activeTab === 'planning' ? 'border-[#0e3b8a] text-[#0e3b8a]' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          <span className="material-symbols-outlined text-[18px]">event_note</span>
          Case Planning
        </button>
        <button 
          onClick={() => setActiveTab('support')}
          className={`flex items-center gap-2 pb-3 font-semibold text-sm border-b-2 transition-colors min-w-max ${activeTab === 'support' ? 'border-[#0e3b8a] text-[#0e3b8a]' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
          Support Management
        </button>
        <button 
          onClick={() => setActiveTab('followup')}
          className={`flex items-center gap-2 pb-3 font-semibold text-sm border-b-2 transition-colors min-w-max ${activeTab === 'followup' ? 'border-[#0e3b8a] text-[#0e3b8a]' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          <span className="material-symbols-outlined text-[18px]">calendar_month</span>
          Follow-up &amp; Monitoring
        </button>
        <button 
          onClick={() => setActiveTab('reintegration')}
          className={`flex items-center gap-2 pb-3 font-semibold text-sm border-b-2 transition-colors min-w-max ${activeTab === 'reintegration' ? 'border-[#0e3b8a] text-[#0e3b8a]' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          <span className="material-symbols-outlined text-[18px]">u_turn_right</span>
          Reintegration
        </button>
        <button 
          onClick={() => setActiveTab('rescue-handover')}
          className={`flex items-center gap-2 pb-3 font-semibold text-sm border-b-2 transition-colors min-w-max ${['rescue-handover', 'internal-referral', 'external-referral'].includes(activeTab) ? 'border-[#0e3b8a] text-[#0e3b8a]' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          <span className="material-symbols-outlined text-[18px]">emergency</span>
          Rescue/Handover &amp; Referral
        </button>
        <button 
          onClick={() => setActiveTab('case-closure')}
          className={`flex items-center gap-2 pb-3 font-semibold text-sm border-b-2 transition-colors min-w-max ${activeTab === 'case-closure' ? 'border-[#0e3b8a] text-[#0e3b8a]' : 'border-transparent text-on-surface-variant hover:text-on-surface'}`}
        >
          <span className="material-symbols-outlined text-[18px]">lock</span>
          Case Closure
        </button>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-8 max-w-[1400px] mx-auto w-full">
        {activeTab === 'dossier' && (
          <div className="space-y-6">
            
            {/* Header Module Card */}
            <div className="bg-[#f8fafd] rounded-xl border border-outline-variant/40 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0e3b8a] rounded text-white flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-[20px]">account_tree</span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h1 className="text-lg font-bold text-on-surface">Comprehensive Case Dossier: Aarati Shrestha <br/><span className="text-sm font-normal text-on-surface-variant">(Pokhara Metro-04, Kaski)</span></h1>
                    <span className="bg-blue-50 border border-blue-200 text-[#0e3b8a] text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase self-start mt-1">CASE #: CAS-8902-NPT</span>
                  </div>
                  <p className="text-xs text-on-surface-variant max-w-2xl">Integrated operational status across statutory Assessment, Sequenced Planning, Interventions Delivery, and Field Follow-up.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button className="bg-white text-[#0e3b8a] border border-outline-variant px-3 py-1.5 rounded shadow-sm text-[11px] font-bold flex items-center gap-1.5 hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[14px]">print</span>
                  Case Summary
                </button>
                <button className="bg-[#0e3b8a] text-white border border-[#0e3b8a] px-3 py-1.5 rounded shadow-sm text-[11px] font-bold flex items-center gap-1.5 hover:bg-[#0c3175] transition-colors">
                  <span className="material-symbols-outlined text-[14px]">download</span>
                  Export Full Dossier
                </button>
              </div>
            </div>

            {/* Case Lifecycle Progression & Statutory Stages Tracker */}
            <div className="bg-white rounded-xl border border-outline-variant/40 shadow-sm p-6">
              
              <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="material-symbols-outlined text-[#0e3b8a] text-[20px]">sync_alt</span>
                    <h2 className="text-base font-bold text-on-surface">Case Lifecycle Progression &amp; Statutory Stages Tracker</h2>
                    <span className="bg-[#e8eaf6] text-[#3f51b5] text-[10px] font-bold px-2 py-0.5 rounded tracking-wider border border-[#c5cae9]">19-Step Protection Pathway</span>
                  </div>
                  <p className="text-xs text-on-surface-variant ml-8 max-w-3xl">Standardized statutory roadmap pursuant to Nepal National Child Rights Act 2075 &amp; Municipal Care Guidelines. Real-time transition tracking from interception to statutory closure.</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold shrink-0">
                  <button className="px-3 py-1 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors">All (19)</button>
                  <button className="px-3 py-1 rounded-full border border-[#b2dfdb] bg-[#e0f2f1] text-[#00695c]">Completed (6)</button>
                  <button className="px-3 py-1 rounded-full border border-[#bbdefb] bg-[#e3f2fd] text-[#1565c0]">Active (1)</button>
                  <button className="px-3 py-1 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container-low transition-colors">Remaining (12)</button>
                </div>
              </div>

              {/* Status Overview Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px]">check</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-green-800 tracking-wider uppercase mb-0.5">Completed Stages</div>
                      <div className="text-sm font-bold text-green-900">Stages 01 - 06 [100%]</div>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded border border-green-200">6 Cleared</span>
                </div>

                <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-lg p-4 flex items-center justify-between relative overflow-hidden shadow-sm">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2563eb]"></div>
                  <div className="flex items-center gap-3 pl-2">
                    <div className="w-8 h-8 bg-[#2563eb] rounded text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px] animate-spin-slow">autorenew</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-blue-800 tracking-wider uppercase mb-0.5">Active Operational Stage</div>
                      <div className="text-sm font-bold text-blue-900">Stage 07: Needs &amp; Risk Matrix</div>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 rounded border border-blue-200 whitespace-nowrap">42% Done</span>
                </div>

                <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-4 flex items-center justify-between opacity-80">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-200 rounded text-slate-500 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px]">map</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-0.5">Remaining Roadmap</div>
                      <div className="text-sm font-bold text-slate-700">Stages 08 - 19 (Sequential)</div>
                    </div>
                  </div>
                  <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded border border-slate-200">12 Pending</span>
                </div>
              </div>

              {/* Part 1: Completed Stages */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4 border-b border-outline-variant/30 pb-2">
                  <div className="flex items-center gap-2 text-green-700">
                    <span className="material-symbols-outlined text-[16px]">task_alt</span>
                    <h3 className="text-[11px] font-bold tracking-wider uppercase">Part 1: Completed Statutory Stages (6)</h3>
                  </div>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-wider">Formal Transit &amp; Identification Data Cleared</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { stage: '01', title: 'Initial First Information & Interception', desc: 'Nepal police/border transit monitor interception by border vigilance unit.', id: 'RPT: T-4472', date: 'Oct 28, 2023' },
                    { stage: '02', title: 'Emergency Shelter Admission', desc: 'Emergency admission into District Transit Shelter; basic quarantine & hygiene intake.', id: 'Shelter: Bed 04A', date: 'Oct 28, 2023' },
                    { stage: '03', title: 'Identity & Biometric AFIS Verification', desc: 'National AFIS database biometric match to confirmed civil identity & ancestry.', id: 'BC-992-8810-KA', date: 'Nov 02, 2023' },
                    { stage: '04', title: 'Child Profile & Initial Triage Assessment', desc: 'Intake dossier compiled by Lead Caseworker A. Gurung. Risk category assigned.', id: 'Tier: 1 Flagged', date: 'Nov 05, 2023' },
                    { stage: '05', title: 'Pediatric & Health Screening', desc: 'Comprehensive clinical evaluation; diagnosed mild anemia, dental therapy begun.', id: 'Dr. V. Menon Clinic', date: 'Nov 08, 2023' },
                    { stage: '06', title: 'Kinship Tracing & Family Inquiries', desc: 'Maternal Aunt Tara Devi located in Pokhara-4, Kaski. Verified by Ward Council 04.', id: 'Ward Clearance 04', date: 'Nov 12, 2023' },
                  ].map((item, idx) => (
                    <div key={idx} className="border border-green-200 bg-[#f4fcf6] rounded-lg p-3 relative hover:shadow-sm transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-green-100 text-green-800 text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase border border-green-200">Stage {item.stage}</span>
                        <span className="material-symbols-outlined text-green-600 text-[14px]">check_circle</span>
                      </div>
                      <h4 className="text-[11px] font-bold text-green-900 mb-1 leading-tight">{item.title}</h4>
                      <p className="text-[9px] text-green-800 mb-3 opacity-80 leading-snug h-6 line-clamp-2">{item.desc}</p>
                      <div className="flex justify-between items-center text-[9px] text-green-700/70 border-t border-green-200/50 pt-2 font-mono">
                        <span>{item.id}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage 07: Current In Progress */}
              <div className="mb-8 relative">
                {/* Connecting Line (visual only) */}
                <div className="absolute left-8 -top-4 bottom-auto w-0.5 h-4 bg-blue-200"></div>

                <div className="border-2 border-[#2563eb] rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-[#eff6ff] border-b border-[#2563eb]/20 px-4 py-2.5 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#2563eb] text-white text-[10px] font-bold px-2 py-1 rounded tracking-wider uppercase">Stage 07: Current In Progress</span>
                      <span className="bg-yellow-100 text-yellow-800 border border-yellow-300 text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></span> Under Statutory Review
                      </span>
                    </div>
                    <div className="text-[10px] font-bold text-[#2563eb] font-mono">Deadline: Nov 30, 2023 (42% Complete)</div>
                  </div>
                  
                  <div className="p-5 bg-white">
                    <div className="flex flex-col lg:flex-row justify-between gap-6 mb-5">
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-[#1e3a8a] mb-2">Comprehensive Needs &amp; Risk Assessment</h3>
                        <p className="text-[11px] text-on-surface-variant leading-relaxed max-w-4xl">
                          Statutory assessment covering psychometric trauma scoring (T.2x19), maternal restraint legal filings (FCR-2021-11) and maternal aunt household readiness indexing. Awaiting dental clearance and Case Conference sign-off.
                        </p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <button className="px-4 py-2 border border-[#2563eb] text-[#2563eb] rounded text-xs font-bold hover:bg-blue-50 transition-colors flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">grid_view</span> View Full Matrix
                        </button>
                        <button className="px-4 py-2 bg-[#2563eb] text-white rounded text-xs font-bold hover:bg-[#1d4ed8] shadow-sm transition-colors flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">double_arrow</span> Sign Off &amp; Transition
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-blue-100">
                      <div>
                        <div className="text-[9px] text-on-surface-variant uppercase tracking-wider mb-1">Clinical Sign-off</div>
                        <div className="text-[11px] font-semibold text-on-surface">Complete (Nov 14)</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-on-surface-variant uppercase tracking-wider mb-1">Kinship Feasibility</div>
                        <div className="text-[11px] font-semibold text-on-surface">Cleared (High Fit)</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-on-surface-variant uppercase tracking-wider mb-1">Trauma Screening</div>
                        <div className="text-[11px] font-semibold text-orange-600">2/3 Sessions Done</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-on-surface-variant uppercase tracking-wider mb-1">MDT Case Conference</div>
                        <div className="text-[11px] font-semibold text-on-surface">Scheduled Nov 26</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 2: Remaining Stages */}
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-outline-variant/30 pb-2">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">route</span>
                    <h3 className="text-[11px] font-bold tracking-wider uppercase">Part 2: Remaining Statutory Stages (Stages 08 - 19)</h3>
                  </div>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-wider">Sequential Judicial, Care, &amp; Post-Reintegration Pipeline</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {[
                    { stage: '08', title: 'Court Interim Protection Order Filing', desc: 'Motion to Juvenile Court bench via Legal Aid Advocate T. Sen.', status: 'Next Step', est: 'Est. Nov 28, 2023', highlight: true },
                    { stage: '09', title: 'Individualized Care & Protection Plan (ICPP)', desc: 'Standard ICPP with intervention mapping, education & welfare.', status: 'Queued', est: 'Est. Dec 04, 2023' },
                    { stage: '10', title: 'MDT Case Review & Statutory Sign Off', desc: 'Interdisciplinary committee consensus before trial home visit.', status: 'Queued', est: 'Est. Dec 08, 2023' },
                    { stage: '11', title: 'Trauma-Informed Psychosocial Counseling', desc: 'Completion of all 5 clinical therapy sessions with Maya Shrestha.', status: 'Queued', est: 'Est. Dec 15, 2023' },
                    { stage: '12', title: 'School Re-Enrollment & Bridge Program', desc: 'Formal re-admission in Pokhara-4 Community Basic School.', status: 'Queued', est: 'Est. Dec 20, 2023' },
                    { stage: '13', title: 'Caregiver Readiness & Home Feasibility', desc: 'On-site household assessment at Aunt Tara Devi\'s residence, Kaski.', status: 'Queued', est: 'Est. Dec 24, 2023' },
                    { stage: '14', title: 'Sub-Committee Approval for Reunification', desc: 'Municipal Child Rights Committee formal decree for kinship foster.', status: 'Queued', est: 'Est. Jan 05, 2024' },
                    { stage: '15', title: 'Formal Handover Protocol & Legal Accord', desc: 'Tri-party legal guardianship signing (Ward Chair, Shelter, Aunt).', status: 'Queued', est: 'Est. Jan 12, 2024' },
                    { stage: '16', title: 'Month 1 Unannounced Inspection', desc: 'First 30-day surprise safety audit at kinship residence in Kaski.', status: 'Queued', est: 'Est. Feb 12, 2024' },
                    { stage: '17', title: 'Month 3 School & Community Review', desc: 'Attendance records check & local ward child protection committee review.', status: 'Queued', est: 'Est. Apr 12, 2024' },
                    { stage: '18', title: 'Month 6 Resolution & Welfare Clearance', desc: 'Multi-sectoral safe reintegration audit with psychiatric clearance.', status: 'Queued', est: 'Est. Jul 12, 2024' },
                    { stage: '19', title: 'Formal Statutory Case Closure & Archival', desc: 'Judicial discharge order & permanent archive into National CRPCMS.', status: 'Final', est: 'Est. Aug 05, 2024', isFinal: true },
                  ].map((item, idx) => (
                    <div key={idx} className={`border ${item.highlight ? 'border-orange-200 bg-[#fff8f1]' : 'border-outline-variant/30 bg-[#fbfcfd] grayscale-[50%]'} rounded-lg p-3 relative hover:shadow-sm transition-shadow opacity-90`}>
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase border ${item.highlight ? 'bg-orange-100 text-orange-800 border-orange-200' : 'bg-surface-variant/50 text-on-surface-variant border-outline-variant/30'}`}>Stage {item.stage}</span>
                        <span className={`text-[9px] font-bold ${item.highlight ? 'text-orange-600' : (item.isFinal ? 'text-blue-600 flex items-center gap-1' : 'text-on-surface-variant/70')}`}>
                          {item.isFinal && <span className="material-symbols-outlined text-[12px]">lock</span>}
                          {item.status}
                        </span>
                      </div>
                      <h4 className={`text-[11px] font-bold mb-1 leading-tight ${item.highlight ? 'text-orange-900' : 'text-on-surface'}`}>{item.title}</h4>
                      <p className="text-[9px] text-on-surface-variant mb-3 leading-snug h-6 line-clamp-2">{item.desc}</p>
                      <div className="text-[9px] text-on-surface-variant/70 border-t border-outline-variant/30 pt-2 font-mono">
                        {item.est}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Left Column */}
              <div className="space-y-6">
                
                {/* Panel A */}
                <div className="bg-white rounded-xl border border-outline-variant/40 shadow-sm p-6 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2 text-[#d32f2f]">
                      <span className="material-symbols-outlined">track_changes</span>
                      <h2 className="font-bold text-sm text-on-surface">Panel A: Standardized Risk &amp; Needs Assessment</h2>
                    </div>
                    <div className="bg-[#fdf0f0] text-red-800 text-[10px] font-bold px-2 py-1 rounded border border-red-100 tracking-wider">
                      Score: 7.4 / 10
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="border border-red-100 bg-[#fdfafb] rounded-lg p-4">
                      <div className="flex items-center gap-1.5 text-red-700 text-[10px] font-bold tracking-wider uppercase mb-3">
                        <span className="material-symbols-outlined text-[14px]">warning</span> Identified Vulnerabilities
                      </div>
                      <ul className="text-[11px] text-red-900 space-y-2 list-disc pl-3">
                        <li>Transit interception without parental guardian</li>
                        <li>Chronic early malnutrition &amp; mild anemia</li>
                        <li>Mother legal custody restriction order active</li>
                      </ul>
                    </div>
                    <div className="border border-green-100 bg-[#f4fcf6] rounded-lg p-4">
                      <div className="flex items-center gap-1.5 text-green-700 text-[10px] font-bold tracking-wider uppercase mb-3">
                        <span className="material-symbols-outlined text-[14px]">verified</span> Key Protective Factors
                      </div>
                      <ul className="text-[11px] text-green-900 space-y-2 list-disc pl-3">
                        <li>Maternal Aunt Tara Devi (AFIS Biometric Verified)</li>
                        <li>Clean municipal record &amp; home readiness</li>
                        <li>Child demonstrates safe rapport with caseworkers</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-outline-variant/30 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xs font-bold text-on-surface">Standardized Diagnostic Matrices</h3>
                      <span className="text-[10px] text-on-surface-variant">Last re-scored: Nov 14, 2023</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-[#f8fafd] rounded border border-outline-variant/30 p-2">
                        <div className="text-[9px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Trauma Index</div>
                        <div className="text-orange-500 font-bold text-lg leading-none mb-1">6.2 <span className="text-[10px] text-on-surface-variant">/ 10</span></div>
                        <div className="text-[9px] text-on-surface-variant">Moderate</div>
                      </div>
                      <div className="bg-[#f8fafd] rounded border border-outline-variant/30 p-2">
                        <div className="text-[9px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Safety Margin</div>
                        <div className="text-green-600 font-bold text-sm leading-tight mb-1">High (8.5)</div>
                        <div className="text-[9px] text-on-surface-variant text-green-700">Shelter Tier 1</div>
                      </div>
                      <div className="bg-[#f8fafd] rounded border border-outline-variant/30 p-2">
                        <div className="text-[9px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Kinship Fit</div>
                        <div className="text-[#0e3b8a] font-bold text-lg leading-none mb-1">8.9 <span className="text-[10px] text-on-surface-variant">/ 10</span></div>
                        <div className="text-[9px] text-on-surface-variant">Trial Ready</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panel C */}
                <div className="bg-white rounded-xl border border-outline-variant/40 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2 text-[#4a148c]">
                      <span className="material-symbols-outlined">medical_services</span>
                      <h2 className="font-bold text-sm text-on-surface">Panel C: Support Services &amp; Interventions Delivery</h2>
                    </div>
                    <div className="bg-[#e8eaf6] text-[#3f51b5] text-[10px] font-bold px-2 py-1 rounded tracking-wider">
                      4 Active Referrals
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-4 bg-[#f8f9fa] rounded-lg p-3 border border-outline-variant/20">
                      <div className="w-8 h-8 rounded bg-yellow-100 text-yellow-700 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[16px]">medication</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-on-surface">Pediatric Nutrition &amp; Dental Therapy</h4>
                        <p className="text-[10px] text-on-surface-variant">Dr. V. Menon • District Health Clinic • Micronutrient bundle</p>
                      </div>
                      <div className="bg-yellow-100 text-yellow-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider uppercase shrink-0">
                        Active / Nov 18
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-[#f8f9fa] rounded-lg p-3 border border-outline-variant/20">
                      <div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[16px]">psychology</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-on-surface">Trauma-Informed Art Counseling (2 of 5)</h4>
                        <p className="text-[10px] text-on-surface-variant">Maya Shrestha (Clinical Psych) • Weekly sessions</p>
                      </div>
                      <div className="bg-blue-100 text-blue-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider uppercase shrink-0">
                        Session Nov 24
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-[#f8f9fa] rounded-lg p-3 border border-outline-variant/20">
                      <div className="w-8 h-8 rounded bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[16px]">gavel</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-on-surface">Interim Custody Legal Representation</h4>
                        <p className="text-[10px] text-on-surface-variant">Advocate T. Sen • Legal Aid Board #LA-4410</p>
                      </div>
                      <div className="bg-purple-100 text-purple-800 text-[9px] font-bold px-2 py-0.5 rounded tracking-wider uppercase shrink-0">
                        Filing Nov 30
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column */}
              <div className="space-y-6">
                
                {/* Panel B */}
                <div className="bg-white rounded-xl border border-outline-variant/40 shadow-sm p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2 text-[#0e3b8a]">
                      <span className="material-symbols-outlined">calendar_today</span>
                      <h2 className="font-bold text-sm text-on-surface">Panel B: Active Sequenced Case Plan (19 Steps)</h2>
                    </div>
                    <div className="bg-[#e3f2fd] text-[#1565c0] text-[10px] font-bold px-2 py-1 rounded text-right tracking-wider">
                      Step 7 of 19<br/>(42%)
                    </div>
                  </div>

                  <div className="flex-1 relative ml-2 mt-2">
                    {/* Timeline Line */}
                    <div className="absolute left-3 top-2 bottom-6 w-0.5 bg-outline-variant/30"></div>

                    {/* Step 6 */}
                    <div className="relative pl-10 pb-6">
                      <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-sm z-10"></div>
                      <div className="bg-[#f8fafd] rounded-lg p-3 border border-outline-variant/20 flex justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-xs font-bold text-on-surface">Step 6: Kinship Home Background Clearance</h4>
                            <span className="bg-green-100 text-green-700 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Completed</span>
                          </div>
                          <p className="text-[10px] text-on-surface-variant">Maternal Aunt Tara Devi verified by Field Ops &amp; Ward Council.</p>
                        </div>
                        <div className="text-[9px] text-on-surface-variant font-medium text-right shrink-0">Nov<br/>12</div>
                      </div>
                    </div>

                    {/* Step 7 */}
                    <div className="relative pl-10 pb-6">
                      <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-[#0e3b8a] border-2 border-white shadow-sm z-10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                      </div>
                      <div className="absolute left-3 top-1 bottom-0 w-0.5 bg-[#0e3b8a] z-0"></div>
                      <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 shadow-sm flex justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h4 className="text-xs font-bold text-[#0e3b8a]">Step 7: Comprehensive Needs &amp; Health Assessment</h4>
                            <span className="bg-[#0e3b8a] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">In Progress</span>
                          </div>
                          <p className="text-[10px] text-blue-800">Dental, nutritional &amp; trauma screening sign-off pending.</p>
                        </div>
                        <div className="text-[10px] font-bold text-[#0e3b8a] text-right shrink-0">Nov<br/>20</div>
                      </div>
                    </div>

                    {/* Step 8 */}
                    <div className="relative pl-10">
                      <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-outline-variant border-2 border-white shadow-sm z-10"></div>
                      <div className="p-3 flex justify-between opacity-60 grayscale">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-xs font-bold text-on-surface">Step 8: Court Interim Care Order Review</h4>
                            <span className="bg-surface-variant text-on-surface-variant text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Pending</span>
                          </div>
                          <p className="text-[10px] text-on-surface-variant">Filing extension motion to Juvenile Court by Legal Aid.</p>
                        </div>
                        <div className="text-[9px] text-on-surface-variant font-medium text-right shrink-0">Nov 28</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-outline-variant/30 flex justify-between items-center text-xs">
                    <span className="text-on-surface-variant">Next Multidisciplinary Conference:</span>
                    <span className="font-bold text-[#0e3b8a] flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">groups</span> Nov 26, 2023 (10:00 AM)</span>
                  </div>
                </div>

                {/* Panel D */}
                <div className="bg-white rounded-xl border border-outline-variant/40 shadow-sm p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2 text-[#2e7d32]">
                      <span className="material-symbols-outlined">edit_calendar</span>
                      <h2 className="font-bold text-sm text-on-surface">Panel D: Monitoring &amp; Scheduled Follow-up Visits</h2>
                    </div>
                    <button className="text-[#0e3b8a] hover:bg-blue-50 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 transition-colors">
                      <span className="material-symbols-outlined text-[14px]">add</span> Schedule Visit
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="border border-green-200 bg-[#f4fcf6] rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-green-700 text-[14px]">check_circle</span>
                          <h4 className="text-xs font-bold text-green-900">Shelter Transit Check-in #04 (Weekly Review)</h4>
                        </div>
                        <span className="bg-green-700 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Passed</span>
                      </div>
                      <p className="text-[10px] text-green-800 mb-2 pl-6">Conducted by Caseworker A. Gurung. Health and sleep routine stable. Child calm.</p>
                      <p className="text-[9px] text-green-600 font-medium pl-6">Completed: Nov 14, 2023 (02:30 PM) • Verified Safe</p>
                    </div>

                    <div className="border border-blue-200 bg-blue-50/50 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#0e3b8a] text-[14px]">event</span>
                          <h4 className="text-xs font-bold text-on-surface">Kinship Trial Home Safety Inspection #01</h4>
                        </div>
                        <span className="bg-[#0e3b8a] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Upcoming</span>
                      </div>
                      <p className="text-[10px] text-on-surface-variant mb-2 pl-6">Inspector: Bikash Karki (Field Ops) • Aunt Tara Devi's residence, Kaski.</p>
                      <p className="text-[9px] text-on-surface font-bold pl-6">Scheduled: Nov 21, 2023 (11:00 AM)</p>
                    </div>

                    <div className="border border-outline-variant/30 bg-[#f8fafd] rounded-lg p-3 opacity-70">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-on-surface-variant text-[14px]">pending_actions</span>
                          <h4 className="text-xs font-bold text-on-surface">Post-Placement Unannounced Check-in #01</h4>
                        </div>
                        <span className="bg-surface-variant text-on-surface-variant text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Queued</span>
                      </div>
                      <p className="text-[10px] text-on-surface-variant mb-2 pl-6">Caseworker &amp; Municipal Child Welfare Inspector joint visit.</p>
                      <p className="text-[9px] text-on-surface-variant pl-6">Target window: Dec 05 - Dec 08, 2023</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Sub-navigation Dropdown for Rescue/Handover */}
        {['rescue-handover', 'internal-referral', 'external-referral'].includes(activeTab) && (
          <div className="flex justify-end mb-4">
            <select 
              value={activeTab} 
              onChange={(e) => setActiveTab(e.target.value)}
              className="border border-outline-variant rounded-lg px-4 py-2 text-sm font-semibold text-on-surface bg-white shadow-sm focus:outline-none focus:border-[#0e3b8a] cursor-pointer"
            >
              <option value="rescue-handover">Handover</option>
              <option value="internal-referral">Internal Referral</option>
              <option value="external-referral">External Referral</option>
            </select>
          </div>
        )}

        {/* Tab Contents */}
        {activeTab === 'assessment' && <div className="-mx-6 md:-mx-8"><Assessment /></div>}
        {activeTab === 'planning' && <div className="-mx-6 md:-mx-8"><CasePlanning /></div>}
        {activeTab === 'support' && <div className="-mx-6 md:-mx-8"><SupportManagement /></div>}
        {activeTab === 'followup' && <div className="-mx-6 md:-mx-8"><FollowUp /></div>}
        {activeTab === 'reintegration' && <div className="-mx-6 md:-mx-8"><Reintegration /></div>}
        {activeTab === 'rescue-handover' && <div className="-mx-6 md:-mx-8"><RescueHandover /></div>}
        {activeTab === 'internal-referral' && <div className="-mx-6 md:-mx-8"><ReferralTransfer /></div>}
        {activeTab === 'external-referral' && <div className="-mx-6 md:-mx-8"><ExternalReferral /></div>}
        {activeTab === 'case-closure' && <div className="-mx-6 md:-mx-8"><CaseClosure /></div>}
      </div>

      <FormModal isOpen={isProfileFormOpen} onClose={() => setIsProfileFormOpen(false)} title="Child Profile Form">
        <ChildProfileForm />
      </FormModal>

      <FormModal isOpen={isReintegrationFormOpen} onClose={() => setIsReintegrationFormOpen(false)} title="Child Reunification / Reintegration Forms">
        <ReintegrationActionPlanForm />
      </FormModal>
    </div>
  );
}