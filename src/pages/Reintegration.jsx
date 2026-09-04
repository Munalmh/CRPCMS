import React, { useRef, useState } from 'react';
import FormModal from '../components/FormModal';

export default function Reintegration() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef(null);
  const statusRef = useRef(null);
  const STORAGE_KEY = 'child_reintegration_reunification_form';

  const handlePrint = () => window.print();

  const handleClear = () => {
    if (!window.confirm('Clear all entered information?')) return;
    const container = formRef.current;
    if (!container) return;
    container.querySelectorAll('input, select, textarea').forEach((el) => {
      if (el.type === 'checkbox' || el.type === 'radio') el.checked = false;
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
      data[key] = el.type === 'checkbox' ? el.checked : el.value;
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
              Family Tracing
            </p>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-3">Reintegration Planning</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Manage the family tracing process, assess caregiver readiness, and finalize placement approvals for child reintegration.
            </p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 bg-primary text-on-primary px-5 py-3 rounded-lg font-headline-sm text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <span className="material-symbols-outlined text-[20px]">family_restroom</span>
            New Reintegration Plan
          </button>
        </div>

        <div className="grid grid-cols-3 gap-5 mb-10">
          <div className="bg-surface rounded-xl border border-outline-variant/40 p-5 shadow-sm">
            <span className="material-symbols-outlined text-primary text-[28px] mb-2 block">groups</span>
            <h3 className="font-headline-sm text-sm text-on-surface mb-1">Family Assessment</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Family information, economic status, and readiness for reunification.</p>
          </div>
          <div className="bg-surface rounded-xl border border-outline-variant/40 p-5 shadow-sm">
            <span className="material-symbols-outlined text-primary text-[28px] mb-2 block">visibility</span>
            <h3 className="font-headline-sm text-sm text-on-surface mb-1">Visit &amp; Follow-up</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Plan and record follow-up visits after placement.</p>
          </div>
          <div className="bg-surface rounded-xl border border-outline-variant/40 p-5 shadow-sm">
            <span className="material-symbols-outlined text-primary text-[28px] mb-2 block">volunteer_activism</span>
            <h3 className="font-headline-sm text-sm text-on-surface mb-1">Support Plans</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Financial, educational, and skill-based support arrangements.</p>
          </div>
        </div>

        <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">No reintegration plan open right now. Click the button above to begin.</p>
        </div>
      </div>

      {/* Form modal */}
      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} title="Child Reunification / Reintegration Forms">
        <div ref={formRef}>
          <style>{`
            .reintegration-shell{--p:#234a7c;--pl:#e8eef5;--b:#d7dee8;--t:#1f2937;--bg:#f4f7fb;font-family:Arial,Helvetica,sans-serif;background:var(--bg);color:var(--t)}
            .reintegration-shell *{box-sizing:border-box}
            .reintegration-shell .shell{max-width:1180px;margin:0 auto;padding:0 18px}
            .reintegration-shell .card{background:#fff;overflow:hidden}
            .reintegration-shell .head{background:linear-gradient(135deg,#234a7c,#315f96);color:#fff;padding:24px 28px;border-radius:10px}
            .reintegration-shell .head h1{margin:0 0 5px;font-size:24px}
            .reintegration-shell .head p{margin:0;font-size:13px;opacity:.9}
            .reintegration-shell .body{padding:25px}
            .reintegration-shell .section{margin:18px 0;padding:10px 14px;background:var(--pl);color:var(--p);border-left:5px solid var(--p);border-radius:5px;font-size:15px;font-weight:700}
            .reintegration-shell .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-bottom:23px}
            .reintegration-shell .full{grid-column:1/-1}
            .reintegration-shell .field{display:flex;flex-direction:column;gap:6px}
            .reintegration-shell label{font-size:13px;font-weight:700}
            .reintegration-shell input,.reintegration-shell select,.reintegration-shell textarea{width:100%;border:1px solid #cfd7e3;border-radius:8px;padding:10px 11px;font:inherit;font-size:13px;background:#fff;outline:none}
            .reintegration-shell textarea{min-height:95px;resize:vertical}
            .reintegration-shell input:focus,.reintegration-shell select:focus,.reintegration-shell textarea:focus{border-color:var(--p);box-shadow:0 0 0 3px rgba(35,74,124,.1)}
            .reintegration-shell .checks{display:flex;flex-wrap:wrap;gap:10px}
            .reintegration-shell .check{padding:9px 11px;border:1px solid var(--b);border-radius:8px;background:#fafbfd;font-size:13px}
            .reintegration-shell table{width:100%;border-collapse:collapse;margin-bottom:23px;font-size:12px}
            .reintegration-shell th,.reintegration-shell td{border:1px solid var(--b);padding:8px;vertical-align:top}
            .reintegration-shell th{background:var(--pl);color:var(--p);text-align:left}
            .reintegration-shell td input,.reintegration-shell td textarea{border:0;padding:3px;background:transparent}
            .reintegration-shell .actions{display:flex;justify-content:flex-end;gap:9px;border-top:1px solid var(--b);padding-top:18px}
            .reintegration-shell button{border:0;border-radius:8px;padding:10px 17px;font-weight:700;cursor:pointer}
            .reintegration-shell .primary{background:var(--p);color:#fff}
            .reintegration-shell .secondary{background:#eef2f7;color:#26364a}
            .reintegration-shell .status{display:none;margin-top:12px;padding:9px 11px;border-radius:8px;background:#edf7ef;color:#25613a;font-size:13px}
            @media(max-width:760px){
              .reintegration-shell .grid{grid-template-columns:1fr}
              .reintegration-shell .full{grid-column:auto}
              .reintegration-shell .body{padding:17px}
              .reintegration-shell table{display:block;overflow-x:auto}
            }
          `}</style>

          <div className="reintegration-shell">
            <div className="shell">
              <div className="card">
                <div className="head">
                  <h1>Child Reunification / Reintegration Action Plan Form</h1>
                  <p>Digital case planning and follow-up record for children leaving a child care home</p>
                </div>
                <div className="body">

                  <div className="section">A. Child Information</div>
                  <div className="grid">
                    <div className="field"><label>Child's Full Name</label><input type="text" /></div>
                    <div className="field"><label>Address</label><input type="text" /></div>
                    <div className="field"><label>Date of Leaving Child Care Home</label><input type="date" /></div>
                    <div className="field"><label>Age</label><input type="text" /></div>
                    <div className="field"><label>Class / Grade</label><input type="text" /></div>
                    <div className="field"><label>Father's Name</label><input type="text" /></div>
                    <div className="field"><label>Mother's Name</label><input type="text" /></div>
                    <div className="field"><label>Contact Number</label><input type="text" /></div>
                    <div className="field full"><label>Reason for Leaving the Child Care Home</label><textarea></textarea></div>
                  </div>

                  <div className="section">B. Person Receiving the Child</div>
                  <div className="grid">
                    <div className="field"><label>Name of Person Receiving the Child</label><input type="text" /></div>
                    <div className="field"><label>Contact Number</label><input type="text" /></div>
                    <div className="field"><label>Address</label><input type="text" /></div>
                    <div className="field"><label>Relationship with Child</label><input type="text" /></div>
                    <div className="field full"><label>Destination / Intended Occupation or Work After Leaving the Child Care Home</label><textarea></textarea></div>
                  </div>

                  <div className="section">C. Information Regarding Other Family Members (Living Members Only)</div>
                  <table>
                    <thead>
                      <tr><th>S.N.</th><th>Full Name</th><th>Age</th><th>Relationship</th><th>Education</th><th>Occupation</th><th>Contact / Remarks</th></tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <tr key={n}>
                          <td>{n}</td>
                          <td><input /></td>
                          <td><input /></td>
                          <td><input /></td>
                          <td><input /></td>
                          <td><input /></td>
                          <td><input /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="section">D. Visit / Follow-up Plan</div>
                  <div className="grid">
                    <div className="field"><label>Visit Frequency</label><input type="text" placeholder="Monthly / Quarterly / Semi-annual / Annual" /></div>
                    <div className="field"><label>Planned Visit Date</label><input type="date" /></div>
                    <div className="field"><label>Staff / Support Person</label><input type="text" /></div>
                    <div className="field"><label>Signature</label><input type="text" /></div>
                  </div>

                  <div className="section">E. Financial Support Plan</div>
                  <div className="grid">
                    <div className="field">
                      <label>Is financial support required for reintegration?</label>
                      <select><option></option><option>Yes</option><option>No</option></select>
                    </div>
                    <div className="field"><label>Reason / Purpose for Financial Support</label><input type="text" /></div>
                    <div className="field"><label>Estimated Amount (NPR)</label><input type="number" /></div>
                    <div className="field"><label>Duration of Support</label><input type="text" /></div>
                    <div className="field full"><label>Other Financial Support Details</label><textarea></textarea></div>
                  </div>

                  <div className="section">F. Educational Support Plan</div>
                  <div className="grid">
                    <div className="field"><label>Who Will Provide Educational Support?</label><input type="text" /></div>
                    <div className="field"><label>Duration of Support</label><input type="text" /></div>
                    <div className="field full"><label>What Educational Support Is Required?</label><textarea></textarea></div>
                    <div className="field full"><label>Other Educational Support Details</label><textarea></textarea></div>
                  </div>

                  <div className="section">G. Skill-Based Training Plan</div>
                  <div className="grid">
                    <div className="field"><label>Skill / Vocational Training Required</label><input type="text" /></div>
                    <div className="field"><label>Training Provider / Location</label><input type="text" /></div>
                    <div className="field"><label>Training Duration</label><input type="text" /></div>
                    <div className="field"><label>Who Will Provide / Fund the Training?</label><input type="text" /></div>
                  </div>

                  <div className="section">H. Possible Employment Plan (Only for Children Requiring Employment Support)</div>
                  <div className="grid">
                    <div className="field"><label>Agency / Institution Coordinating Employment</label><input type="text" /></div>
                    <div className="field"><label>Agency / Institution Able to Provide Employment</label><input type="text" /></div>
                    <div className="field full"><label>Other Employment Plan / Details</label><textarea></textarea></div>
                  </div>

                  <div className="section">I. Family Support Plan (Only for Families in Extreme Poverty — Short-Term Support)</div>
                  <div className="grid">
                    <div className="field full"><label>Type of Family Support Required</label><textarea></textarea></div>
                    <div className="field"><label>Duration of Support</label><input type="text" /></div>
                    <div className="field"><label>Estimated Amount Required (NPR)</label><input type="number" /></div>
                    <div className="field full"><label>Reason for Providing Support</label><textarea></textarea></div>
                  </div>

                  <div className="section">J. Consent and Child Protection Commitment</div>
                  <div className="field full">
                    <label>Consent Statement</label>
                    <textarea
                      style={{ minHeight: '170px' }}
                      defaultValue="I confirm that I have understood and accepted the information and commitments stated in this form. I agree to protect the child from discrimination, abuse, neglect, exploitation and all forms of violence and to support an environment in which the child's fundamental rights are respected."
                    />
                  </div>
                  <div className="grid">
                    <div className="field"><label>Name of Person Giving Consent</label><input type="text" /></div>
                    <div className="field"><label>Relationship with Child</label><input type="text" /></div>
                    <div className="field"><label>Address</label><input type="text" /></div>
                    <div className="field"><label>Contact Number</label><input type="text" /></div>
                    <div className="field"><label>Date</label><input type="date" /></div>
                    <div className="field"><label>Signature</label><input type="text" /></div>
                    <div className="field"><label>Thumbprint / Other Verification</label><input type="text" /></div>
                    <div className="field"><label>Child's Relationship with Signatory</label><input type="text" /></div>
                  </div>

                  <div className="section">K. On Behalf of the Child Care Home</div>
                  <div className="grid">
                    <div className="field"><label>Name of Representative</label><input type="text" /></div>
                    <div className="field"><label>Position</label><input type="text" /></div>
                    <div className="field"><label>Signature</label><input type="text" /></div>
                    <div className="field"><label>Organization Stamp / Seal</label><input type="text" /></div>
                  </div>

                  <hr style={{ border: 0, borderTop: '2px solid #d7dee8', margin: '32px 0' }} />

                  <div className="head" style={{ marginBottom: '24px' }}>
                    <h1>Child Reunification / Reintegration Survey Form</h1>
                    <p>Assessment of children residing in the child care home for reunification / reintegration</p>
                  </div>

                  <div className="section">A. Complete Child Information</div>
                  <div className="grid">
                    <div className="field"><label>Child's Full Name</label><input type="text" /></div>
                    <div className="field"><label>Address</label><input type="text" /></div>
                    <div className="field"><label>Date of Arrival at Child Care Home</label><input type="date" /></div>
                    <div className="field full"><label>Reason for Arrival at Child Care Home</label><textarea></textarea></div>
                  </div>

                  <div className="section">B. Family Information</div>
                  <div className="grid">
                    <div className="field"><label>Father's Name</label><input type="text" /></div>
                    <div className="field"><label>Father's Current Condition</label><input type="text" /></div>
                    <div className="field"><label>Father's Occupation</label><input type="text" /></div>
                    <div className="field"><label>Mother's Name</label><input type="text" /></div>
                    <div className="field"><label>Mother's Current Condition</label><input type="text" /></div>
                    <div className="field"><label>Mother's Occupation</label><input type="text" /></div>
                    <div className="field"><label>Number of Brothers</label><input type="text" /></div>
                    <div className="field"><label>Number of Sisters</label><input type="text" /></div>
                    <div className="field"><label>Total Family Members</label><input type="text" /></div>
                    <div className="field full"><label>Other Employed / Income-Earning Persons in the Family</label><textarea></textarea></div>
                  </div>

                  <div className="section">C. Economic Information</div>
                  <div className="grid">
                    <div className="field"><label>Monthly Family Income (NPR)</label><input type="number" /></div>
                    <div className="field"><label>Monthly Family Expenditure (NPR)</label><input type="number" /></div>
                    <div className="field"><label>Monthly Savings (NPR)</label><input type="number" /></div>
                  </div>
                  <div className="field">
                    <label>House Condition</label>
                    <div className="checks">
                      <label className="check"><input type="checkbox" /> Permanent / Concrete</label>
                      <label className="check"><input type="checkbox" /> Temporary / Mud</label>
                      <label className="check"><input type="checkbox" /> Tin / Other</label>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="field"><label>Number of Rooms</label><input type="text" /></div>
                    <div className="field"><label>Land / Property Details</label><input type="text" placeholder="Khet / Bari / Ghaderi / Other" /></div>
                  </div>

                  <div className="section">D. Method Used for the Survey</div>
                  <div className="checks">
                    <label className="check"><input type="checkbox" /> Community Interaction</label>
                    <label className="check"><input type="checkbox" /> Family Discussion / Home Visit</label>
                    <label className="check"><input type="checkbox" /> Direct Observation</label>
                    <label className="check"><input type="checkbox" /> Telephone Interview</label>
                  </div>

                  <div className="section">E. Type of Support Desired by the Family</div>
                  <div className="field full"><label>Support Required by Family</label><textarea></textarea></div>

                  <div className="section">F. Surveyor's Opinion / Recommendation</div>
                  <div className="field full">
                    <label>Opinion on Whether Reunification / Reintegration Is Possible, With Reasons</label>
                    <textarea style={{ minHeight: '180px' }}></textarea>
                  </div>

                  <div className="section">G. Person Providing Information</div>
                  <div className="grid">
                    <div className="field"><label>Name</label><input type="text" /></div>
                    <div className="field"><label>Relationship with Child</label><input type="text" /></div>
                    <div className="field"><label>Address</label><input type="text" /></div>
                    <div className="field"><label>Contact Number</label><input type="text" /></div>
                    <div className="field"><label>Signature</label><input type="text" /></div>
                    <div className="field"><label>Date</label><input type="date" /></div>
                  </div>

                  <div className="section">H. Staff Member Collecting Information</div>
                  <div className="grid">
                    <div className="field"><label>Name</label><input type="text" /></div>
                    <div className="field"><label>Position</label><input type="text" /></div>
                    <div className="field"><label>Signature</label><input type="text" /></div>
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