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
    <div className="flex flex-col w-full h-full relative bg-[#edf2f9] overflow-y-auto">
      <div className="p-6 md:p-8 max-w-[1400px] mx-auto w-full pb-0">
        {/* Top Header Section */}
        <div className="mb-6 flex flex-col lg:flex-row gap-8 relative mt-2">
          
          {/* Profile Image & Badges */}
          <div className="relative shrink-0 flex flex-col items-center self-start">
            <img 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=300&fit=crop" 
              alt="Aarati Shrestha" 
              className="w-32 h-32 md:w-36 md:h-36 rounded-xl object-cover shadow-sm border border-outline-variant/30"
            />
            <div className="absolute -bottom-3.5 flex items-center gap-1.5 bg-white text-[#0e3b8a] text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm tracking-widest uppercase">
              <span className="material-symbols-outlined text-[14px]">fingerprint</span>
              AFIS VERIFIED
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="bg-[#e4ebf5] text-[#0e3b8a] text-[11px] font-bold px-2 py-1 rounded tracking-widest uppercase border border-[#d0dcf0]">CAS-8902-NPT</span>
              <span className="flex items-center gap-1.5 bg-[#e6f4ea] text-green-800 text-[11px] font-bold px-2 py-1 rounded tracking-wider border border-green-200">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active Monitoring
              </span>
            </div>
            
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="bg-[#fce8e6] text-red-800 text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase border border-red-200">Tier 1 High Intervention</span>
              <span className="text-[11px] font-medium text-on-surface-variant">Province 4 • Gandaki</span>
            </div>

            <div className="flex items-baseline gap-3 mb-5">
              <h1 className="text-[28px] md:text-[32px] font-bold text-on-surface tracking-tight leading-none">Aarati Shrestha</h1>
              <span className="text-[16px] text-on-surface-variant/80 font-medium">(आरती श्रेष्ठ)</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-sm text-on-surface-variant">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[11px] font-medium text-on-surface-variant/70 mb-0.5">DOB (BS): 2071-12-01 BS <span className="font-semibold text-on-surface-variant/50">(8y 8m)</span></p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#0e3b8a]/70 mt-0.5 shrink-0">location_on</span>
                  <div>
                    <p className="text-[11px] font-medium text-on-surface-variant/70 mb-0.5">Jurisdiction:</p>
                    <p className="text-[11px] font-medium text-on-surface">Pokhara Metropolitan<br/>Ward 4, Kaski District</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#0e3b8a]/70 mt-0.5 shrink-0">badge</span>
                  <div>
                    <p className="text-[11px] font-medium text-on-surface-variant/70 mb-0.5">Lead Caseworker:</p>
                    <p className="text-[11px] font-medium text-on-surface">Anjali Gurung (CMS-4920)</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[11px] font-medium text-on-surface-variant/70 mb-0.5">Gender: Female</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#0e3b8a]/70 mt-0.5 shrink-0">domain</span>
                  <div>
                    <p className="text-[11px] font-medium text-on-surface-variant/70 mb-0.5">Placement:</p>
                    <p className="text-[11px] font-medium text-on-surface">District 4 Transit Shelter<br/>(Kaski Care-02)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#0e3b8a]/70 mt-0.5 shrink-0">family_restroom</span>
                  <div>
                    <p className="text-[11px] font-medium text-on-surface-variant/70 mb-0.5">Kinship Anchor:</p>
                    <p className="text-[11px] font-medium text-on-surface">Aunt Tara Devi Shrestha</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[11px] font-medium text-on-surface-variant/70 mb-0.5">National ID: BC-992-8810-KA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Stage */}
          <div className="lg:w-80 bg-white border border-outline-variant/30 rounded-xl p-5 flex flex-col justify-between shrink-0 shadow-[0_4px_20px_rgb(0,0,0,0.03)] self-start mt-4 lg:mt-0">
            <div>
              <div className="flex justify-between items-start mb-4">
                <p className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase mt-1">Statutory Workflow Stage</p>
                <div className="bg-[#e4ebf5] text-[#0e3b8a] flex flex-col items-center px-2 py-1 rounded border border-[#d0dcf0]">
                  <span className="text-xs font-bold leading-none mb-0.5">42%</span>
                  <span className="text-[8px] font-bold tracking-wider uppercase">Overall</span>
                </div>
              </div>
              <div className="flex items-start gap-2 mb-2">
                <span className="material-symbols-outlined text-[#0e3b8a] shrink-0 mt-0.5">fact_check</span>
                <p className="font-bold text-[#0e3b8a] text-sm leading-tight">Comprehensive Needs &amp; Risk Assessment</p>
              </div>
              <p className="text-[10px] text-on-surface-variant mb-4 leading-relaxed">Stage 07 of 19 in National Child Protection Protocol</p>
              
              <div className="w-full bg-[#e0e8f5] rounded-full h-1.5 mb-3">
                <div className="bg-[#0e3b8a] h-1.5 rounded-full" style={{ width: '42%' }}></div>
              </div>
              
              <div className="flex justify-between items-center text-[9px] font-bold mb-5">
                <span className="text-green-700 flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">check_circle</span> 6 Completed</span>
                <span className="text-[#0e3b8a] flex items-center gap-1"><span className="w-1 h-1 bg-[#0e3b8a] rounded-full"></span> Stage 07 Active</span>
                <span className="text-on-surface-variant/60">12 Remaining</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <button className="flex-1 bg-white border border-outline-variant text-on-surface text-[10px] font-bold py-2 rounded hover:bg-surface-container-low transition-colors flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">groups</span> MDT Review (Nov 26)
                </button>
                <button className="flex-[1.2] bg-[#0e3b8a] text-white text-[10px] font-bold py-2 rounded hover:bg-[#0c3175] transition-colors flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">double_arrow</span> Advance Stage
                </button>
              </div>
              <div className="flex gap-2 mt-1">
                <button onClick={() => setIsProfileFormOpen(true)} className="flex-1 bg-white border border-outline-variant text-[#0e3b8a] text-[9px] font-bold py-1.5 rounded shadow-sm hover:bg-surface-container-low transition-colors flex items-center justify-center gap-1 uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[14px]">edit_document</span> Child Profile Form
                </button>
                <button onClick={() => setIsReintegrationFormOpen(true)} className="flex-1 bg-white border border-outline-variant text-[#0e3b8a] text-[9px] font-bold py-1.5 rounded shadow-sm hover:bg-surface-container-low transition-colors flex items-center justify-center gap-1 uppercase tracking-wider">
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
            <div className="bg-[#f8fafd] rounded-xl border border-outline-variant/50 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0e3b8a] rounded-lg text-white flex items-center justify-center shrink-0 mt-1 md:mt-0">
                  <span className="material-symbols-outlined text-[28px]">account_tree</span>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h1 className="text-xl font-bold text-[#0e3b8a] leading-tight max-w-2xl">
                      Comprehensive Case Dossier: Aarati Shrestha (Pokhara Metro-04, Kaski)
                    </h1>
                    <span className="bg-blue-100 text-[#0e3b8a] text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase border border-blue-200 whitespace-nowrap w-max">
                      CASE # CAS-8902-NPT
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant max-w-3xl">
                    Integrated operational status across statutory Assessment, Sequenced Planning, Interventions Delivery, and Field Follow-up.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0 mt-2 md:mt-0">
                <button className="bg-white text-[#0e3b8a] border border-outline-variant px-4 py-2 rounded shadow-sm text-xs font-bold flex items-center gap-2 hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[16px]">print</span>
                  Case Summary
                </button>
                <button className="bg-[#0e3b8a] text-white border border-[#0e3b8a] px-4 py-2 rounded shadow-sm text-xs font-bold flex items-center gap-2 hover:bg-[#0c3175] transition-colors">
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  Export Full Dossier
                </button>
              </div>
            </div>

            {/* Case Lifecycle Progression & Statutory Stages Tracker */}
            <div className="bg-white rounded-xl border border-outline-variant/40 shadow-sm p-6">
              {/* Tracker Header */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-[#0e3b8a] mb-2">
                    <span className="material-symbols-outlined">sync_alt</span>
                    <h2 className="text-lg font-bold">Case Lifecycle Progression &amp; Statutory Stages Tracker</h2>
                    <span className="bg-blue-100 text-[#0e3b8a] text-[10px] font-bold px-2 py-1 rounded border border-blue-200 ml-0 lg:ml-2">19-Step Protection Pathway</span>
                  </div>
                  <p className="text-xs text-on-surface-variant max-w-3xl">
                    Standardized statutory roadmap pursuant to Nepal National Child Rights Act 2075 &amp; Municipal Care Guidelines. Real-time transition tracking from interception to statutory closure.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 bg-surface-container-lowest p-1 rounded-lg border border-outline-variant/30 overflow-x-auto max-w-full">
                  <button className="px-3 py-1.5 text-xs font-bold text-on-surface-variant hover:text-on-surface rounded whitespace-nowrap">All (19)</button>
                  <button className="px-3 py-1.5 text-xs font-bold bg-[#e8f5e9] text-green-800 rounded border border-green-200 shadow-sm whitespace-nowrap">Completed (6)</button>
                  <button className="px-3 py-1.5 text-xs font-bold bg-[#e3f2fd] text-[#0e3b8a] rounded border border-blue-200 shadow-sm whitespace-nowrap">Active (1)</button>
                  <button className="px-3 py-1.5 text-xs font-bold text-on-surface-variant hover:text-on-surface rounded whitespace-nowrap">Remaining (12)</button>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-[#f0fdf4] border border-green-200 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 text-green-700 rounded flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">check_circle</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-green-800 tracking-wider uppercase mb-0.5">Completed Stages</div>
                      <div className="text-sm font-bold text-green-900">Stages 01 – 06 <br className="md:hidden" />[100%]</div>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded border border-green-200 flex flex-col items-center ml-2">
                    <span className="text-sm leading-none mb-0.5">6</span>
                    <span>Cleared</span>
                  </div>
                </div>

                <div className="bg-[#0e3b8a] border border-[#0c3175] rounded-lg p-4 flex items-center justify-between text-white shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 bg-white/20 text-white rounded flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">autorenew</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-blue-200 tracking-wider uppercase mb-0.5">Active Operational Stage</div>
                      <div className="text-sm font-bold text-white">Stage 07: Needs &amp; Risk Matrix</div>
                    </div>
                  </div>
                  <div className="bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded border border-white/30 flex flex-col items-center relative z-10 ml-2">
                    <span className="text-sm leading-none mb-0.5">60%</span>
                    <span>Done</span>
                  </div>
                </div>

                <div className="bg-[#f8f9fa] border border-outline-variant/30 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-surface-variant text-on-surface-variant rounded flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">pending_actions</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-on-surface-variant tracking-wider uppercase mb-0.5">Remaining Roadmap</div>
                      <div className="text-sm font-bold text-on-surface">Stages 08 – 19 <br className="md:hidden" />(Sequential)</div>
                    </div>
                  </div>
                  <div className="bg-surface-variant text-on-surface-variant text-[10px] font-bold px-2 py-1 rounded border border-outline-variant/30 flex flex-col items-center ml-2">
                    <span className="text-sm leading-none mb-0.5">12</span>
                    <span>Pending</span>
                  </div>
                </div>
              </div>

              {/* Part 1: Completed */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4 border-b border-outline-variant/30 pb-2">
                  <h3 className="text-xs font-bold text-green-800 flex items-center gap-1.5 tracking-wider uppercase">
                    <span className="material-symbols-outlined text-[16px]">task_alt</span>
                    Part 1: Completed Statutory Stages (6)
                  </h3>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-wider">Formal transit &amp; identification data cleared</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { id: '01', title: 'Initial File Information & Interception', desc: 'Nepal police / border transit interception by border vigilance unit.', date: 'Oct 28, 2023', ref: 'Ref: T-8972' },
                    { id: '02', title: 'Emergency Shelter Admission', desc: 'Emergency admission in transit shelter, basic quarantine & hygiene intake.', date: 'Oct 28, 2023', ref: 'Shelter Bed: 40A' },
                    { id: '03', title: 'Identity & Biometric AFIS Verification', desc: 'National AFIS database match (#892-8) to confirmed civil identity & ancestry.', date: 'Nov 02, 2023', ref: 'BC-992-8810-KA' },
                    { id: '04', title: 'Child Profile & Initial Triage Assessment', desc: 'Intake dossier compiled by Case Caseworker A. Gurung. Risk category assigned.', date: 'Nov 05, 2023', ref: 'Tier-1 Flagged' },
                    { id: '05', title: 'Pediatric & Health Screening', desc: 'Comprehensive clinical evaluation: diagnosed mild anemia, dental therapy begun.', date: 'Nov 08, 2023', ref: 'Dr. V. Menon Clinic' },
                    { id: '06', title: 'Kinship Tracing & Family Inquiries', desc: 'Maternal Aunt Tara Devi located in Pokhara-4, Kaski; verified by Ward Council 04.', date: 'Nov 12, 2023', ref: 'Ward Clearance 04' }
                  ].map(stage => (
                    <div key={stage.id} className="border border-green-200 bg-[#f4fcf6] rounded-lg p-3 relative hover:shadow-sm transition-shadow">
                      <div className="absolute top-3 right-3 text-green-600">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                      </div>
                      <div className="bg-green-100 text-green-800 text-[9px] font-bold px-1.5 py-0.5 rounded w-max mb-2 uppercase tracking-wider">Stage {stage.id}</div>
                      <h4 className="text-xs font-bold text-green-900 mb-1 pr-6">{stage.title}</h4>
                      <p className="text-[10px] text-green-800/80 mb-3 line-clamp-2">{stage.desc}</p>
                      <div className="flex justify-between items-center text-[9px] font-bold text-green-700/70 uppercase tracking-widest pt-2 border-t border-green-200/50">
                        <span>{stage.ref}</span>
                        <span>{stage.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage 07: Current In Progress */}
              <div className="mb-8">
                <div className="bg-white border-2 border-[#0e3b8a] rounded-xl shadow-sm overflow-hidden">
                  <div className="bg-blue-50 border-b border-blue-100 px-4 py-2.5 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="bg-[#0e3b8a] text-white text-[10px] font-bold px-2 py-1 rounded tracking-wider uppercase">Stage 07: Current In Progress</span>
                      <span className="bg-orange-100 text-orange-800 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1.5 border border-orange-200 tracking-wider uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span> Under Statutory Review
                      </span>
                    </div>
                    <div className="text-[10px] font-bold text-[#0e3b8a] tracking-wider uppercase">
                      Deadline: Nov 30, 2023 (60% Complete)
                    </div>
                  </div>
                  <div className="p-5 flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-on-surface mb-2">Comprehensive Case Dossier: Aarati Shrestha (Pokhara Metro-04, Kaski)</h3>
                      <p className="text-xs text-on-surface-variant max-w-3xl leading-relaxed">
                        Statutory assessment covering psychometric trauma scoring (T.A.P.S), maternal relevant legal filings (FCR-2021-11) and maternal aunt's household protection indices. Pending dental clearance and Case Conference sign-off.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0 md:min-w-[180px]">
                      <button className="w-full bg-white border border-outline-variant text-[#0e3b8a] text-xs font-bold py-2 px-4 rounded shadow-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[16px]">visibility</span> View Full Matrix
                      </button>
                      <button className="w-full bg-[#0e3b8a] text-white text-xs font-bold py-2 px-4 rounded shadow-sm hover:bg-[#0c3175] transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[16px]">task</span> Sign-Off &amp; Transition
                      </button>
                    </div>
                  </div>
                  <div className="bg-[#f8fafd] border-t border-blue-100 p-4 grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-blue-100">
                    <div className="pl-0 md:pl-4 first:pl-0 pt-2 md:pt-0 first:pt-0">
                      <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Clinical Sign-off</div>
                      <div className="text-xs font-bold text-green-700">Complete (Nov 14)</div>
                    </div>
                    <div className="pl-0 md:pl-4 pt-2 md:pt-0">
                      <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Kinship Feasibility</div>
                      <div className="text-xs font-bold text-[#0e3b8a]">Cleared (High 8.9)</div>
                    </div>
                    <div className="pl-0 md:pl-4 pt-2 md:pt-0">
                      <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Trauma Screening</div>
                      <div className="text-xs font-bold text-orange-600">2/3 Sessions Done</div>
                    </div>
                    <div className="pl-0 md:pl-4 pt-2 md:pt-0">
                      <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">MDT Case Conference</div>
                      <div className="text-xs font-bold text-on-surface">Scheduled Nov 26</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 3: Remaining */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4 border-b border-outline-variant/30 pb-2">
                  <h3 className="text-xs font-bold text-on-surface-variant flex items-center gap-1.5 tracking-wider uppercase">
                    <span className="material-symbols-outlined text-[16px]">pending_actions</span>
                    Part 3: Remaining Statutory Stages (Stages 08 – 19)
                  </h3>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-wider">Sequential judicial, care, &amp; post-reintegration pipeline</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 opacity-80">
                  {[
                    { id: '08', title: 'Court Interim Protection Order Filing', desc: 'Motion to Juvenile Court bench via Legal Aid Advocate T. Sen.', date: 'Est: Nov 28, 2023', badge: 'Next Step', badgeColor: 'bg-orange-100 text-orange-800 border-orange-200' },
                    { id: '09', title: 'Individualized Care & Protection Plan (ICPP)', desc: 'Standard ICPP with intervention mapping, education & welfare.', date: 'Est: Dec 04, 2023', badge: 'Queued' },
                    { id: '10', title: 'MDT Case Review & Statutory Sign-Off', desc: 'Interdisciplinary committee clearance before trial home visit.', date: 'Est: Dec 06, 2023', badge: 'Queued' },
                    { id: '11', title: 'Trauma-Informed Psychosocial Counseling', desc: 'Completion of all 5 clinical therapy sessions with Maya Shrestha.', date: 'Est: Dec 15, 2023', badge: 'Queued' },
                    { id: '12', title: 'School Re-Enrollment & Bridge Program', desc: 'Formal re-admission in Pokhara-4 Community Basic School.', date: 'Est: Dec 20, 2023', badge: 'Queued' },
                    { id: '13', title: 'Caregiver Readiness & Home Feasibility', desc: 'On-site household assessment at Aunt Tara Devi\'s residence, Kaski.', date: 'Est: Dec 24, 2023', badge: 'Queued' },
                    { id: '14', title: 'Sub-Committee Approval for Reunification', desc: 'Municipal Child Rights Committee formal decree for kinship foster.', date: 'Est: Jan 05, 2024', badge: 'Queued' },
                    { id: '15', title: 'Formal Handover Protocol & Legal Accord', desc: 'Tri-party legal guardianship signing (Ward Chair, Shelter, Aunt).', date: 'Est: Jan 12, 2024', badge: 'Queued' },
                    { id: '16', title: 'Month 1 Unannounced Inspection', desc: 'First 30-day surprise safety audit at kinship residence in Kaski.', date: 'Est: Feb 12, 2024', badge: 'Queued' },
                    { id: '17', title: 'Month 3 School & Community Review', desc: 'Attendance records check & local ward child protection committee review.', date: 'Est: Apr 12, 2024', badge: 'Queued' },
                    { id: '18', title: 'Month 6 Resiliency & Welfare Clearance', desc: 'Multi-sectoral safe reintegration audit with psychiatric clearance.', date: 'Est: Jul 12, 2024', badge: 'Queued' },
                    { id: '19', title: 'Formal Statutory Case Closure & Archival', desc: 'Judicial discharge order & permanent archive into National CRPCMS.', date: 'Est: Aug 04, 2024', badge: 'Final', icon: 'lock', badgeColor: 'bg-blue-100 text-[#0e3b8a] border-blue-200' }
                  ].map(stage => (
                    <div key={stage.id} className="border border-outline-variant/40 bg-[#fbfcfd] rounded-lg p-3 relative flex flex-col hover:border-outline-variant transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <div className="bg-surface-variant text-on-surface-variant text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">Stage {stage.id}</div>
                        <div className={`text-[9px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider flex items-center gap-1 ${stage.badgeColor || 'bg-surface-variant text-on-surface-variant border-outline-variant/30'}`}>
                          {stage.icon && <span className="material-symbols-outlined text-[10px]">{stage.icon}</span>}
                          {stage.badge}
                        </div>
                      </div>
                      <h4 className="text-xs font-bold text-on-surface mb-1">{stage.title}</h4>
                      <p className="text-[10px] text-on-surface-variant mb-3 flex-1 line-clamp-3">{stage.desc}</p>
                      <div className="text-[9px] font-bold text-on-surface-variant/70 uppercase tracking-widest pt-2 border-t border-outline-variant/30">
                        {stage.date}
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