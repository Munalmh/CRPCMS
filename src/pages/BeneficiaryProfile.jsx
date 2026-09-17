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
            <div className="bg-[#f5f7fc] rounded-xl border border-outline-variant/50 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0e3b8a] rounded-lg text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[28px]">account_tree</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-xl font-bold text-on-surface">Comprehensive Case Dossier: Internal Modules Architecture</h1>
                    <span className="bg-blue-100 text-[#0e3b8a] text-[10px] font-bold px-2 py-1 rounded tracking-wider uppercase">Case # CAS-8982-NPT</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">Integrated operational status across statutory Assessment, Sequenced Planning, Interventions Delivery, and Field Follow-up.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
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