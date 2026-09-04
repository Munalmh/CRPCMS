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
      {/* Landing view */}
      <div className="px-12 py-10">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div className="max-w-2xl">
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-2">
              Case Records
            </p>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-3">Beneficiary Profile</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Build a complete profile for a child in care — background, rescue/handover details, and case assessment.
            </p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 bg-primary text-on-primary px-5 py-3 rounded-lg font-headline-sm text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <span className="material-symbols-outlined text-[20px]">person_add</span>
            New Profile
          </button>
        </div>

        <div className="grid grid-cols-3 gap-5 mb-10">
          <div className="bg-surface rounded-xl border border-outline-variant/40 p-5 shadow-sm">
            <span className="material-symbols-outlined text-primary text-[28px] mb-2 block">badge</span>
            <h3 className="font-headline-sm text-sm text-on-surface mb-1">Basic Information</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Name, family details, health status, and contact information.</p>
          </div>
          <div className="bg-surface rounded-xl border border-outline-variant/40 p-5 shadow-sm">
            <span className="material-symbols-outlined text-primary text-[28px] mb-2 block">history_edu</span>
            <h3 className="font-headline-sm text-sm text-on-surface mb-1">Rescue / Handover</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Circumstances and origin details of how the child came into care.</p>
          </div>
          <div className="bg-surface rounded-xl border border-outline-variant/40 p-5 shadow-sm">
            <span className="material-symbols-outlined text-primary text-[28px] mb-2 block">assessment</span>
            <h3 className="font-headline-sm text-sm text-on-surface mb-1">Case Assessment</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Risk factors, education, vocational training, and future plans.</p>
          </div>
        </div>

        <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">No profile open right now. Click "New Profile" above to begin.</p>
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