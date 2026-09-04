import React, { useRef, useState } from 'react';
import FormModal from '../components/FormModal';

export default function CaseIntake() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef(null);
  const statusRef = useRef(null);
  const STORAGE_KEY = 'Child_Entry___Admission_Form';

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
              Intake &amp; Admission
            </p>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-3">Case Intake</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Record a new child's entry and admission details, family background, and supporting documentation to open a case file.
            </p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 bg-primary text-on-primary px-5 py-3 rounded-lg font-headline-sm text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            New Intake
          </button>
        </div>

        <div className="grid grid-cols-3 gap-5 mb-10">
          <div className="bg-surface rounded-xl border border-outline-variant/40 p-5 shadow-sm">
            <span className="material-symbols-outlined text-primary text-[28px] mb-2 block">description</span>
            <h3 className="font-headline-sm text-sm text-on-surface mb-1">Structured Record</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Captures personal details, family background, and admission circumstances in one place.</p>
          </div>
          <div className="bg-surface rounded-xl border border-outline-variant/40 p-5 shadow-sm">
            <span className="material-symbols-outlined text-primary text-[28px] mb-2 block">fact_check</span>
            <h3 className="font-headline-sm text-sm text-on-surface mb-1">Supporting Documents</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Track citizenship, recommendation letters, and other admission paperwork.</p>
          </div>
          <div className="bg-surface rounded-xl border border-outline-variant/40 p-5 shadow-sm">
            <span className="material-symbols-outlined text-primary text-[28px] mb-2 block">save</span>
            <h3 className="font-headline-sm text-sm text-on-surface mb-1">Save as Draft</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Drafts are saved locally so you can pick up an incomplete intake later.</p>
          </div>
        </div>

        <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">No intake open right now. Click "New Intake" above to begin a new admission record.</p>
        </div>
      </div>

      {/* Form modal */}
      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} title="Child Entry / Admission Form">
        <div ref={formRef}>
          <style>{`
            .case-intake-shell{--p:#234a7c;--pl:#e8eef5;--b:#d7dee8;--t:#1f2937;--bg:#f4f7fb;font-family:Arial,Helvetica,sans-serif;background:var(--bg);color:var(--t)}
            .case-intake-shell *{box-sizing:border-box}
            .case-intake-shell .shell{max-width:1180px;margin:0 auto;padding:0 18px}
            .case-intake-shell .card{background:#fff;overflow:hidden}
            .case-intake-shell .head{background:linear-gradient(135deg,#234a7c,#315f96);color:#fff;padding:24px 28px;border-radius:10px}
            .case-intake-shell .head h1{margin:0 0 5px;font-size:24px}
            .case-intake-shell .head p{margin:0;font-size:13px;opacity:.9}
            .case-intake-shell .body{padding:25px}
            .case-intake-shell .section{margin:18px 0 18px;padding:10px 14px;background:var(--pl);color:var(--p);border-left:5px solid var(--p);border-radius:5px;font-size:15px;font-weight:700}
            .case-intake-shell .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-bottom:24px}
            .case-intake-shell .full{grid-column:1/-1}
            .case-intake-shell .field{display:flex;flex-direction:column;gap:6px}
            .case-intake-shell label{font-size:13px;font-weight:700}
            .case-intake-shell input,.case-intake-shell select,.case-intake-shell textarea{width:100%;border:1px solid #cfd7e3;border-radius:8px;padding:10px 11px;font:inherit;font-size:13px;background:#fff;outline:none}
            .case-intake-shell input:focus,.case-intake-shell select:focus,.case-intake-shell textarea:focus{border-color:var(--p);box-shadow:0 0 0 3px rgba(35,74,124,.1)}
            .case-intake-shell textarea{min-height:105px;resize:vertical}
            .case-intake-shell .options{display:flex;flex-wrap:wrap;gap:9px}
            .case-intake-shell .option{border:1px solid var(--b);padding:9px 11px;border-radius:8px;background:#fafbfd;font-weight:400}
            .case-intake-shell table{width:100%;border-collapse:collapse;margin:0 0 24px;font-size:12px;overflow:auto}
            .case-intake-shell th,.case-intake-shell td{border:1px solid var(--b);padding:8px;vertical-align:top}
            .case-intake-shell th{background:var(--pl);color:var(--p);text-align:left}
            .case-intake-shell td input,.case-intake-shell td select,.case-intake-shell td textarea{border:0;padding:3px;box-shadow:none;background:transparent}
            .case-intake-shell .actions{display:flex;justify-content:flex-end;gap:9px;border-top:1px solid var(--b);padding-top:18px}
            .case-intake-shell button{border:0;border-radius:8px;padding:10px 17px;font-weight:700;cursor:pointer}
            .case-intake-shell .primary{background:var(--p);color:white}
            .case-intake-shell .secondary{background:#eef2f7;color:#26364a}
            .case-intake-shell .status{display:none;margin-top:12px;padding:9px 11px;border-radius:8px;background:#edf7ef;color:#25613a;font-size:13px}
            @media(max-width:760px){
              .case-intake-shell .grid{grid-template-columns:1fr}
              .case-intake-shell .full{grid-column:auto}
              .case-intake-shell .body{padding:17px}
              .case-intake-shell table{font-size:10px;display:block;overflow-x:auto}
            }
          `}</style>

          <div className="case-intake-shell">
            <div className="shell">
              <div className="card">
                <div className="body">

                  <div className="section">A. Child's Personal Details</div>
                  <div className="grid">
                    <div className="field"><label>Entry / Intake Date</label><input type="date" /></div>
                    <div className="field"><label>Name of Child</label><input /></div>
                    <div className="field"><label>Date of Birth</label><input placeholder="DD/MM/YYYY" /></div>
                    <div className="field"><label>Place of Birth</label><input /></div>
                    <div className="field full"><label>Address at Birth</label><input placeholder="District / Municipality or Rural Municipality / Ward No." /></div>
                    <div className="field full"><label>Current / Permanent Address</label><input placeholder="District / Municipality or Rural Municipality / Ward No." /></div>
                    <div className="field"><label>Religion</label><input /></div>
                    <div className="field"><label>Weight</label><input /></div>
                    <div className="field"><label>Height</label><input /></div>
                    <div className="field"><label>Health Status</label><textarea></textarea></div>
                    <div className="field full"><label>Doctor's General Report</label><textarea></textarea></div>
                    <div className="field full"><label>Photo</label><input type="file" accept="image/*" /></div>
                  </div>

                  <div className="section">B. Educational Status</div>
                  <div className="grid">
                    <div className="field full"><label>Educational Status</label><textarea></textarea></div>
                    <div className="field"><label>School Name (if previously attended)</label><input /></div>
                    <div className="field"><label>School Address</label><input /></div>
                    <div className="field"><label>Class / Grade</label><input /></div>
                  </div>

                  <div className="section">C. Father's / Male Guardian's Details</div>
                  <div className="grid">
                    <div className="field"><label>Name</label><input /></div>
                    <div className="field"><label>Age</label><input /></div>
                    <div className="field full"><label>Physical Condition</label><textarea></textarea></div>
                    <div className="field full"><label>Address</label><input /></div>
                    <div className="field">
                      <label>Is Father Alive?</label>
                      <select><option></option><option>Yes</option><option>No</option></select>
                    </div>
                    <div className="field"><label>If Alive, Occupation</label><input /></div>
                    <div className="field"><label>If Deceased, Year of Death</label><input /></div>
                    <div className="field"><label>If Deceased, Place of Death</label><input /></div>
                    <div className="field full"><label>Reason / Circumstances of Death</label><textarea></textarea></div>
                    <div className="field full"><label>Movable Property Left by Father</label><textarea></textarea></div>
                    <div className="field full"><label>Immovable Property Left by Father</label><textarea></textarea></div>
                  </div>

                  <div className="section">D. Mother's / Female Guardian's Details</div>
                  <div className="grid">
                    <div className="field"><label>Name</label><input /></div>
                    <div className="field"><label>Age</label><input /></div>
                    <div className="field full"><label>Physical Condition</label><textarea></textarea></div>
                    <div className="field full"><label>Address</label><input /></div>
                    <div className="field">
                      <label>Is Mother Alive?</label>
                      <select><option></option><option>Yes</option><option>No</option></select>
                    </div>
                    <div className="field"><label>If Alive, Occupation</label><input /></div>
                    <div className="field"><label>If Deceased, Year of Death</label><input /></div>
                    <div className="field"><label>If Deceased, Place of Death</label><input /></div>
                    <div className="field full"><label>Reason / Circumstances of Death</label><textarea></textarea></div>
                    <div className="field full"><label>Movable Property Left by Mother</label><textarea></textarea></div>
                    <div className="field full"><label>Immovable Property Left by Mother</label><textarea></textarea></div>
                  </div>

                  <div className="section">E. Uncle, Aunt, Siblings and Other Relatives</div>
                  <table>
                    <thead>
                      <tr><th>S.N.</th><th>Full Name</th><th>Age</th><th>Relationship</th><th>Occupation</th><th>Address</th></tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <tr key={n}>
                          <td>{n}</td>
                          <td><input /></td>
                          <td><input /></td>
                          <td><input /></td>
                          <td><input /></td>
                          <td><input /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="field full">
                    <label>F. Other Family Background / Reason for the Child's Admission to the Child Home</label>
                    <textarea style={{ minHeight: '180px' }}></textarea>
                  </div>

                  <div className="section">G. Person / Organization Bringing the Child for Admission</div>
                  <div className="grid">
                    <div className="field"><label>Name</label><input /></div>
                    <div className="field"><label>If Individual — Age</label><input /></div>
                    <div className="field full"><label>Address</label><textarea></textarea></div>
                    <div className="field full"><label>Occupation / Organizational Details</label><textarea></textarea></div>
                    <div className="field full"><label>Official / Business Address</label><textarea></textarea></div>
                    <div className="field full"><label>If the Child Came for Admission Voluntarily — Details</label><textarea></textarea></div>
                    <div className="field full"><label>Undertaking / Verification</label><textarea></textarea></div>
                    <div className="field"><label>Thumbprint (if individual)</label><input /></div>
                    <div className="field"><label>Official Stamp (if organization)</label><input /></div>
                  </div>

                  <div className="section">H. Recommendation / Supporting Documents</div>
                  <div className="grid">
                    <div className="field">
                      <label>Copy of Citizenship Certificate</label>
                      <select><option></option><option>Attached</option><option>Not Attached</option></select>
                    </div>
                    <div className="field">
                      <label>Recommendation by Any Authority</label>
                      <select><option></option><option>Yes</option><option>No</option></select>
                    </div>
                    <div className="field full">
                      <label>If Yes — Recommending Authority</label>
                      <div className="options">
                        <label className="option"><input type="checkbox" /> Local Administration</label>
                        <label className="option"><input type="checkbox" /> Local Police</label>
                        <label className="option"><input type="checkbox" /> Government / Registered Organization</label>
                      </div>
                    </div>
                    <div className="field"><label>Date of Application / Submission</label><input type="date" /></div>
                    <div className="field"><label>Name of Applicant / Person Submitting</label><input /></div>
                    <div className="field full"><label>Other Legal Documents</label><textarea></textarea></div>
                    <div className="field"><label>Date of Child's Admission</label><input type="date" /></div>
                  </div>

                  <div className="section">I. Staff Member Conducting the Admission</div>
                  <div className="grid">
                    <div className="field"><label>Signature</label><input /></div>
                    <div className="field"><label>Full Name</label><input /></div>
                    <div className="field"><label>Designation / Position</label><input /></div>
                    <div className="field"><label>Grade / Level</label><input /></div>
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