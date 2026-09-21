import React, { useRef } from 'react';

export default function ChildProfileForm() {
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
                <div className="field"><label>Profile Intake Date</label><input type="date" defaultValue="2023-10-28" /></div>
                <div></div>
                <div className="field"><label>Name of Child</label><input defaultValue="Aarati Shrestha" /></div>
                <div className="field"><label>Date of Birth (DD/MM/YYYY)</label><input placeholder="DD/MM/YYYY" defaultValue="15/03/2014" /></div>
                <div className="field">
                  <label>Sex</label>
                  <select defaultValue="Female"><option></option><option>Male</option><option>Female</option><option>Other</option></select>
                </div>
                <div className="field full"><label>Address</label><textarea defaultValue="Pokhara Metropolitan Ward 4, Kaski District"></textarea></div>
                <div className="field full"><label>Previous Academic Status / School</label><textarea defaultValue="Dropped out in Class 2, Pokhara-4 Community Basic School"></textarea></div>
                <div className="field"><label>Father's Name (name, age etc.)</label><input defaultValue="Ramesh Shrestha, 35" /></div>
                <div className="field"><label>Mother's Name</label><input defaultValue="Sita Shrestha, 32" /></div>
                <div className="field"><label>Grandfather's Name</label><input defaultValue="Hari Shrestha" /></div>
                <div className="field"><label>Grandmother's Name</label><input defaultValue="Gita Shrestha" /></div>
                <div className="field full"><label>Legal Documents of Child</label><textarea defaultValue="Birth Certificate (National ID: BC-992-8810-KA)"></textarea></div>
                <div className="field"><label>Occupation of Family</label><input defaultValue="Agriculture / Day Labor" /></div>
                <div className="field"><label>Primary Income Source of Family</label><input defaultValue="Wage labor" /></div>
                <div className="field full"><label>Siblings</label><textarea placeholder="Name, age, sex and other relevant details" defaultValue="Raju Shrestha, 6, Male"></textarea></div>
                <div className="field full"><label>Other Relatives (Name and Relationship with the Child)</label><textarea defaultValue="Aunt Tara Devi Shrestha (Kinship Anchor)"></textarea></div>
                <div className="field full"><label>Any Other Information Provided by Child</label><textarea defaultValue="Expresses desire to return to school."></textarea></div>
                <div className="field"><label>Height and Weight</label><input defaultValue="120 cm, 22 kg" /></div>
                <div className="field"><label>Health Status</label><textarea defaultValue="Mild anemia, requires nutritional support."></textarea></div>
                <div className="field"><label>Relationship with Family</label><textarea defaultValue="Strong bond with Aunt Tara."></textarea></div>
                <div className="field"><label>Contact Details</label><input placeholder="Phone / Mobile / Email" defaultValue="9800000000 (Aunt)" /></div>
              </div>

              <div className="section">2. Rescue / Handover Information</div>
              <div className="grid">
                <div className="field"><label>Date of Rescue / Handover</label><input type="date" defaultValue="2023-10-25" /></div>
                <div className="field full"><label>Circumstance of Rescue / Handover</label><textarea defaultValue="Identified during routine screening at bus park."></textarea></div>
                <div className="field full"><label>Organization / Place from Where Child Was Rescued From / Handed Over</label><input defaultValue="Pokhara Bus Park Police Post" /></div>
                <div className="field"><label>Time Spent in Organization Before Handover</label><input defaultValue="2 hours" /></div>
                <div className="field"><label>Reason Why Child Was in the Organization / Job</label><textarea defaultValue="Found unaccompanied."></textarea></div>
                <div className="field full"><label>With Whom the Child Travelled to India / Work Location</label><input defaultValue="N/A" /></div>
              </div>

              <div className="section">3. Case Study and Assessment</div>
              <div className="grid">
                <div className="field full"><label>Case Study</label><textarea defaultValue="Aarati was found alone at the bus park. Upon investigation, she had been separated from her aunt."></textarea></div>
                <div className="field"><label>Reintegration Status</label><textarea defaultValue="Pending. Aunt identified and verified."></textarea></div>
                <div className="field"><label>Education</label><textarea defaultValue="Will be re-enrolled in local school near Aunt's residence."></textarea></div>
                <div className="field"><label>Vocational Training</label><textarea defaultValue="N/A (underage)"></textarea></div>
                <div className="field"><label>Risk Factors</label><textarea placeholder="Child labor; other identified risks..." defaultValue="High risk of drop-out without financial support."></textarea></div>
                <div className="field"><label>Immediate Support</label><textarea defaultValue="Provided temporary shelter (Kaski Care-02), medical screening."></textarea></div>
                <div className="field full">
                  <label>Future Plan</label>
                  <textarea placeholder={'Short term:\nMedium term:\nLong term:'} defaultValue={"Short term: Reintegrate with Aunt.\nMedium term: Ensure school enrollment.\nLong term: Regular monitoring and family support."}></textarea>
                </div>
                <div className="field"><label>Follow Up Plan</label><textarea defaultValue="Monthly visits for 6 months."></textarea></div>
                <div className="field"><label>Observation by Team</label><textarea defaultValue="Child is cooperative and eager to stay with her aunt."></textarea></div>
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
  );
}
