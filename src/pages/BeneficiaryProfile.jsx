import React, { useRef, useState } from 'react';
import FormModal from '../components/FormModal';

export default function BeneficiaryProfile() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef(null);
  const statusRef = useRef(null);
  const STORAGE_KEY = 'Child_Profile_Form';

  const handlePrint = () => window.print();

  const handleClear = () => {
    if (!window.confirm('Clear all entered information?')) return;
    const container = formRef.current;
    if (!container) return;
    container.querySelectorAll('input, select, textarea').forEach((el) => {
      if (el.type === 'radio' || el.type === 'checkbox') el.checked = false;
      else el.value = '';
    });
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleSaveDraft = () => {
    const container = formRef.current;
    if (!container) return;
    const data = {};
    container.querySelectorAll('input, select, textarea').forEach((el, i) => {
      const key = el.name || el.id || `f${i}`;
      data[key] = el.type === 'radio' ? el.checked : el.value;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    if (statusRef.current) {
      statusRef.current.style.display = 'block';
      setTimeout(() => {
        if (statusRef.current) statusRef.current.style.display = 'none';
      }, 2200);
    }
  };

  return (
    <div className="flex flex-col w-full h-full relative bg-background">
      {/* Landing view (Dummy Data Dashboard) */}
      <div className="px-6 py-8 sm:px-12 sm:py-10 max-w-[1600px] mx-auto w-full">
        {/* Top Header Card */}
        <div className="bg-white rounded-xl border border-outline-variant/40 shadow-sm p-6 mb-8 flex flex-col lg:flex-row gap-6 relative">
          
          {/* Profile Image & Badges */}
          <div className="relative shrink-0 flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=300&fit=crop" 
              alt="Sarah Johnson" 
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
              <h1 className="text-3xl font-bold text-on-surface mb-4">Sarah Johnson</h1>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-on-surface-variant">
                <div>
                  <p className="text-xs font-medium text-outline">DOB: Mar 14, 2015</p>
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
            <div className="flex gap-2">
              <button className="flex-1 bg-white border border-outline-variant text-on-surface text-xs font-semibold py-2 rounded shadow-sm hover:bg-surface-container-low transition-colors flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[16px]">groups</span> Multi-Disc Review
              </button>
              <button className="flex-1 bg-[#0e3b8a] text-white text-xs font-semibold py-2 rounded shadow-sm hover:bg-[#0c3175] transition-colors flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[16px]">double_arrow</span> Advance Stage
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-[#0e3b8a] mb-6 overflow-x-auto hide-scrollbar">
          <button className="flex items-center gap-2 pb-3 border-b-2 border-[#0e3b8a] text-[#0e3b8a] font-bold text-sm min-w-max">
            <span className="material-symbols-outlined text-[18px]">shield</span>
            Overview & Protection Plan
          </button>
          <button className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-on-surface-variant font-medium text-sm hover:text-on-surface transition-colors min-w-max">
            <span className="material-symbols-outlined text-[18px]">account_tree</span>
            Identity & Household Hierarchy
          </button>
          <button className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-on-surface-variant font-medium text-sm hover:text-on-surface transition-colors min-w-max">
            <span className="material-symbols-outlined text-[18px]">health_and_safety</span>
            Medical & Psychosocial
          </button>
          <button className="flex items-center gap-2 pb-3 border-b-2 border-transparent text-on-surface-variant font-medium text-sm hover:text-on-surface transition-colors min-w-max">
            <span className="material-symbols-outlined text-[18px]">history_edu</span>
            Audit Ledger & Chain
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-[#f8fafd] rounded-xl border border-outline-variant/40 p-6 md:p-8 space-y-6">
          
          {/* Active Protection Plan */}
          <div className="bg-white rounded-xl border border-outline-variant/30 p-5 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-5 pb-5 border-b border-outline-variant/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0e3b8a] rounded-lg flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <h2 className="font-bold text-on-surface text-lg">Active Statutory Protection Plan (SOP v3.2)</h2>
                  <p className="text-xs text-on-surface-variant mt-0.5">Phase 2: Assessment & Profiling • Next Milestone: Court Interim Care Order Review (Nov 28, 2023)</p>
                </div>
              </div>
              <button className="flex items-center justify-center gap-2 bg-white border border-outline-variant text-[#0e3b8a] text-xs font-semibold px-4 py-2 rounded shadow-sm hover:bg-surface-container-low transition-colors shrink-0">
                <span className="material-symbols-outlined text-[16px]">download</span> Export Statutory Dossier
              </button>
            </div>

            <div>
              <h3 className="text-xs font-bold text-on-surface-variant tracking-wider uppercase mb-2">Strategic Case Objective</h3>
              <p className="text-sm text-on-surface leading-relaxed">Immediate stabilization in safe transit shelter, trauma-informed counseling, formal kinship tracing for maternal aunt in Kaski, and statutory education reintegration.</p>
            </div>
          </div>

          {/* Risk and Protective Factors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#fdf3f3] rounded-xl border border-red-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-red-800 tracking-wider uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">local_fire_department</span> Assessed Risk Index
                </h3>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">7.4 / 10</span>
              </div>
              <p className="text-sm text-red-900 leading-relaxed">High Priority Intervention — Malnutrition history, transit interception, separation from parental supervision, active legal custody restriction order on biological mother.</p>
            </div>
            
            <div className="bg-[#f0fdf4] rounded-xl border border-green-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-green-800 tracking-wider uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">verified</span> Key Protective Factors
                </h3>
                <span className="bg-green-700 text-white text-xs font-bold px-2 py-0.5 rounded tracking-wide">Verified Kinship</span>
              </div>
              <p className="text-sm text-green-900 leading-relaxed">Cooperative maternal aunt Tara Devi Shrestha, verified biometric fingerprint match (AFIS #8F71E-9C), clean municipal background check, willing foster accommodation readiness.</p>
            </div>
          </div>

          {/* Immediate Next Actions */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#0e3b8a]">checklist</span>
              <h2 className="text-sm font-bold text-on-surface uppercase tracking-wider">Immediate Next Actions & Compliance Checklist</h2>
            </div>
            
            <div className="space-y-3">
              {/* Task 1 */}
              <div className="bg-white rounded-lg border border-outline-variant/30 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="text-orange-500 mt-0.5 shrink-0"><span className="material-symbols-outlined">medical_services</span></div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <p className="font-bold text-sm text-on-surface">Urgent: Complete Pediatric Dental & Nutritional Panel</p>
                      <span className="bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">High / Level 1 Medical</span>
                    </div>
                    <p className="text-xs text-on-surface-variant">Assigned to: <span className="font-medium text-on-surface">Dr. V. Menon (District Health Clinic)</span> • Due: <span className="font-bold text-on-surface">Nov 18, 2023</span></p>
                  </div>
                </div>
                <button className="bg-[#f0f6ff] text-[#0e3b8a] text-xs font-bold px-4 py-2 rounded hover:bg-[#e1edff] transition-colors shrink-0 sm:ml-auto">Log Findings</button>
              </div>

              {/* Task 2 */}
              <div className="bg-white rounded-lg border border-outline-variant/30 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="text-[#0e3b8a] mt-0.5 shrink-0"><span className="material-symbols-outlined">location_on</span></div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <p className="font-bold text-sm text-on-surface">Family Tracing & Kinship Readiness Home Visit (Maternal Aunt Tara Devi)</p>
                      <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Kinship Assessment</span>
                    </div>
                    <p className="text-xs text-on-surface-variant">Assigned to: <span className="font-medium text-on-surface">Bikash Karki (Field Ops)</span> • Due: <span className="font-bold text-on-surface">Nov 21, 2023</span></p>
                  </div>
                </div>
                <button className="bg-[#f0f6ff] text-[#0e3b8a] text-xs font-bold px-4 py-2 rounded hover:bg-[#e1edff] transition-colors shrink-0 sm:ml-auto">Submit Report</button>
              </div>

              {/* Task 3 */}
              <div className="bg-white rounded-lg border border-outline-variant/30 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="text-purple-600 mt-0.5 shrink-0"><span className="material-symbols-outlined">psychology</span></div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <p className="font-bold text-sm text-on-surface">Trauma Counseling Intake Session 2/5</p>
                      <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Psychosocial</span>
                    </div>
                    <p className="text-xs text-on-surface-variant">Assigned to: <span className="font-medium text-on-surface">Maya Shrestha (Clinical Psychologist)</span> • Due: <span className="font-bold text-on-surface">Nov 24, 2023</span></p>
                  </div>
                </div>
                <button className="bg-[#f0f6ff] text-[#0e3b8a] text-xs font-bold px-4 py-2 rounded hover:bg-[#e1edff] transition-colors shrink-0 sm:ml-auto">Review Notes</button>
              </div>

              {/* Task 4 */}
              <div className="bg-white rounded-lg border border-outline-variant/30 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="text-fuchsia-600 mt-0.5 shrink-0"><span className="material-symbols-outlined">gavel</span></div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <p className="font-bold text-sm text-on-surface">Interim Custody Extension Filing at Juvenile Court</p>
                      <span className="bg-fuchsia-100 text-fuchsia-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Judicial Order</span>
                    </div>
                    <p className="text-xs text-on-surface-variant">Assigned to: <span className="font-medium text-on-surface">Advocate T. Sen (Legal Aid)</span> • Due: <span className="font-bold text-on-surface">Nov 30, 2023</span></p>
                  </div>
                </div>
                <button className="bg-[#f0f6ff] text-[#0e3b8a] text-xs font-bold px-4 py-2 rounded hover:bg-[#e1edff] transition-colors shrink-0 sm:ml-auto">View Motion</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form modal */}
      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} title="Child Profile Form">
        <div ref={formRef}>
          <style>{`
            .beneficiary-shell{--p:#234a7c;--pl:#e8eef5;--b:#d7dee8;--t:#1f2937;--bg:#f4f7fb;font-family:Arial,Helvetica,sans-serif;background:var(--bg);color:var(--t)}
            .beneficiary-shell *{box-sizing:border-box}
            .beneficiary-shell .shell{max-width:1180px;margin:0 auto;padding:0 18px}
            .beneficiary-shell .card{background:#fff;overflow:hidden}
            .beneficiary-shell .body{padding:25px}
            .beneficiary-shell .section{margin:0 0 18px;padding:10px 14px;background:var(--pl);color:var(--p);border-left:5px solid var(--p);border-radius:5px;font-size:15px;font-weight:700}
            .beneficiary-shell .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-bottom:24px}
            .beneficiary-shell .full{grid-column:1/-1}
            .beneficiary-shell .field{display:flex;flex-direction:column;gap:6px}
            .beneficiary-shell label{font-size:13px;font-weight:700}
            .beneficiary-shell input,.beneficiary-shell select,.beneficiary-shell textarea{width:100%;border:1px solid #cfd7e3;border-radius:8px;padding:10px 11px;font:inherit;font-size:13px;background:#fff;outline:none}
            .beneficiary-shell input:focus,.beneficiary-shell select:focus,.beneficiary-shell textarea:focus{border-color:var(--p);box-shadow:0 0 0 3px rgba(35,74,124,.1)}
            .beneficiary-shell textarea{min-height:105px;resize:vertical}
            .beneficiary-shell .actions{display:flex;justify-content:flex-end;gap:9px;border-top:1px solid var(--b);padding-top:18px}
            .beneficiary-shell button{border:0;border-radius:8px;padding:10px 17px;font-weight:700;cursor:pointer}
            .beneficiary-shell .primary{background:var(--p);color:white}
            .beneficiary-shell .secondary{background:#eef2f7;color:#26364a}
            .beneficiary-shell .status{display:none;margin-top:12px;padding:9px 11px;border-radius:8px;background:#edf7ef;color:#25613a;font-size:13px}
            @media(max-width:760px){
              .beneficiary-shell .grid{grid-template-columns:1fr}
              .beneficiary-shell .full{grid-column:auto}
              .beneficiary-shell .body{padding:17px}
            }
          `}</style>

          <div className="beneficiary-shell">
            <div className="shell">
              <div className="card">
                <div className="body">

                  <div className="section">1. Basic Information</div>
                  <div className="grid">
                    <div className="field"><label>Profile Intake Date</label><input type="date" /></div>
                    <div></div>
                    <div className="field"><label>Name of Child</label><input /></div>
                    <div className="field"><label>Date of Birth (DD/MM/YYYY)</label><input placeholder="DD/MM/YYYY" /></div>
                    <div className="field">
                      <label>Sex</label>
                      <select><option></option><option>Male</option><option>Female</option><option>Other</option></select>
                    </div>
                    <div className="field full"><label>Address</label><textarea></textarea></div>
                    <div className="field full"><label>Previous Academic Status / School</label><textarea></textarea></div>
                    <div className="field"><label>Father's Name (name, age etc.)</label><input /></div>
                    <div className="field"><label>Mother's Name</label><input /></div>
                    <div className="field"><label>Grandfather's Name</label><input /></div>
                    <div className="field"><label>Grandmother's Name</label><input /></div>
                    <div className="field full"><label>Legal Documents of Child</label><textarea></textarea></div>
                    <div className="field"><label>Occupation of Family</label><input /></div>
                    <div className="field"><label>Primary Income Source of Family</label><input /></div>
                    <div className="field full"><label>Siblings</label><textarea placeholder="Name, age, sex and other relevant details"></textarea></div>
                    <div className="field full"><label>Other Relatives (Name and Relationship with the Child)</label><textarea></textarea></div>
                    <div className="field full"><label>Any Other Information Provided by Child</label><textarea></textarea></div>
                    <div className="field"><label>Height and Weight</label><input /></div>
                    <div className="field"><label>Health Status</label><textarea></textarea></div>
                    <div className="field"><label>Relationship with Family</label><textarea></textarea></div>
                    <div className="field"><label>Contact Details</label><input placeholder="Phone / Mobile / Email" /></div>
                  </div>

                  <div className="section">2. Rescue / Handover Information</div>
                  <div className="grid">
                    <div className="field"><label>Date of Rescue / Handover</label><input type="date" /></div>
                    <div className="field full"><label>Circumstance of Rescue / Handover</label><textarea></textarea></div>
                    <div className="field full"><label>Organization / Place from Where Child Was Rescued From / Handed Over</label><input /></div>
                    <div className="field"><label>Time Spent in Organization Before Handover</label><input /></div>
                    <div className="field"><label>Reason Why Child Was in the Organization / Job</label><textarea></textarea></div>
                    <div className="field full"><label>With Whom the Child Travelled to India / Work Location</label><input /></div>
                  </div>

                  <div className="section">3. Case Study and Assessment</div>
                  <div className="grid">
                    <div className="field full"><label>Case Study</label><textarea></textarea></div>
                    <div className="field"><label>Reintegration Status</label><textarea></textarea></div>
                    <div className="field"><label>Education</label><textarea></textarea></div>
                    <div className="field"><label>Vocational Training</label><textarea></textarea></div>
                    <div className="field"><label>Risk Factors</label><textarea placeholder="Child labor; other identified risks..."></textarea></div>
                    <div className="field"><label>Immediate Support</label><textarea></textarea></div>
                    <div className="field full">
                      <label>Future Plan</label>
                      <textarea placeholder={'Short term:\nMedium term:\nLong term:'}></textarea>
                    </div>
                    <div className="field"><label>Follow Up Plan</label><textarea></textarea></div>
                    <div className="field"><label>Observation by Team</label><textarea></textarea></div>
                  </div>

                  <div className="actions">
                    <button className="secondary" type="button">Attach Files</button>
                    <button className="secondary" type="button" onClick={handlePrint}>Print / Save PDF</button>
                    <button className="secondary" type="button" onClick={handleClear}>Clear</button>
                    <button className="primary" type="button" onClick={handleSaveDraft}>Save Draft</button>
                  </div>
                  <div ref={statusRef} className="status">Draft saved in this browser.</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </FormModal>
    </div>
  );
}