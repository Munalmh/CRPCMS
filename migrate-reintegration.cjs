const fs = require('fs');

let html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Child Reunification / Reintegration Action Plan</title><style>
:root{--p:#234a7c;--pl:#e8eef5;--b:#d7dee8;--t:#1f2937;--bg:#f4f7fb}
*{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;background:var(--bg);color:var(--t)}
.shell{max-width:1180px;margin:26px auto;padding:0 18px}.card{background:#fff;border:1px solid var(--b);border-radius:14px;box-shadow:0 5px 18px rgba(31,41,55,.07);overflow:hidden}
.head{background:linear-gradient(135deg,#234a7c,#315f96);color:#fff;padding:24px 28px}.head h1{margin:0 0 5px;font-size:24px}.head p{margin:0;font-size:13px;opacity:.9}
.body{padding:25px}.section{margin:0 0 18px;padding:10px 14px;background:var(--pl);color:var(--p);border-left:5px solid var(--p);border-radius:5px;font-size:15px;font-weight:700}
.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-bottom:23px}.full{grid-column:1/-1}.field{display:flex;flex-direction:column;gap:6px}
label{font-size:13px;font-weight:700}input,select,textarea{width:100%;border:1px solid #cfd7e3;border-radius:8px;padding:10px 11px;font:inherit;font-size:13px;background:#fff;outline:none}
textarea{min-height:95px;resize:vertical}input:focus,select:focus,textarea:focus{border-color:var(--p);box-shadow:0 0 0 3px rgba(35,74,124,.1)}
.checks{display:flex;flex-wrap:wrap;gap:10px}.check{padding:9px 11px;border:1px solid var(--b);border-radius:8px;background:#fafbfd;font-size:13px}
table{width:100%;border-collapse:collapse;margin-bottom:23px;font-size:12px}th,td{border:1px solid var(--b);padding:8px;vertical-align:top}th{background:var(--pl);color:var(--p);text-align:left}
td input,td textarea{border:0;padding:3px;background:transparent}.actions{display:flex;justify-content:flex-end;gap:9px;border-top:1px solid var(--b);padding-top:18px}
button{border:0;border-radius:8px;padding:10px 17px;font-weight:700;cursor:pointer}.primary{background:var(--p);color:#fff}.secondary{background:#eef2f7;color:#26364a}
.status{display:none;margin-top:12px;padding:9px 11px;border-radius:8px;background:#edf7ef;color:#25613a;font-size:13px}
@media(max-width:760px){.grid{grid-template-columns:1fr}.full{grid-column:auto}.body{padding:17px}.shell{margin:12px auto}table{display:block;overflow-x:auto}}
@media print{body{background:#fff}.shell{max-width:none;margin:0}.card{box-shadow:none;border:0}.actions{display:none}}
</style></head><body><div class="shell"><div class="card"><div class="head"><h1>Child Reunification / Reintegration Action Plan Form</h1><p>Digital case planning and follow-up record for children leaving a child care home</p></div><div class="body">
<div class="section">A. Child Information</div>
<div class="grid">
<div class="field"><label>Child's Full Name</label><input type="text" placeholder=""></div><div class="field"><label>Address</label><input type="text" placeholder=""></div>
<div class="field"><label>Date of Leaving Child Care Home</label><input type="date" placeholder=""></div><div class="field"><label>Age</label><input type="text" placeholder=""></div>
<div class="field"><label>Class / Grade</label><input type="text" placeholder=""></div><div class="field"><label>Father's Name</label><input type="text" placeholder=""></div>
<div class="field"><label>Mother's Name</label><input type="text" placeholder=""></div><div class="field"><label>Contact Number</label><input type="text" placeholder=""></div>
<div class="field full"><label>Reason for Leaving the Child Care Home</label><textarea placeholder=""></textarea></div>
</div>
<div class="section">B. Person Receiving the Child</div>
<div class="grid">
<div class="field"><label>Name of Person Receiving the Child</label><input type="text" placeholder=""></div><div class="field"><label>Contact Number</label><input type="text" placeholder=""></div>
<div class="field"><label>Address</label><input type="text" placeholder=""></div><div class="field"><label>Relationship with Child</label><input type="text" placeholder=""></div>
<div class="field full"><label>Destination / Intended Occupation or Work After Leaving the Child Care Home</label><textarea placeholder=""></textarea></div>
</div>
<div class="section">C. Information Regarding Other Family Members (Living Members Only)</div>
<table><thead><tr><th>S.N.</th><th>Full Name</th><th>Age</th><th>Relationship</th><th>Education</th><th>Occupation</th><th>Contact / Remarks</th></tr></thead><tbody>
<tr><td>1</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>2</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>3</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>4</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>5</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>6</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>7</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>8</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
</tbody></table>
<div class="section">D. Visit / Follow-up Plan</div>
<div class="grid">
<div class="field"><label>Visit Frequency</label><input type="text" placeholder="Monthly / Quarterly / Semi-annual / Annual"></div>
<div class="field"><label>Planned Visit Date</label><input type="date" placeholder=""></div>
<div class="field"><label>Staff / Support Person</label><input type="text" placeholder=""></div><div class="field"><label>Signature</label><input type="text" placeholder=""></div>
</div>
<div class="section">E. Financial Support Plan</div>
<div class="grid">
<div class="field"><label>Is financial support required for reintegration?</label><select><option></option><option>Yes</option><option>No</option></select></div>
<div class="field"><label>Reason / Purpose for Financial Support</label><input type="text" placeholder=""></div>
<div class="field"><label>Estimated Amount (NPR)</label><input type="number" placeholder=""></div><div class="field"><label>Duration of Support</label><input type="text" placeholder=""></div>
<div class="field full"><label>Other Financial Support Details</label><textarea placeholder=""></textarea></div>
</div>
<div class="section">F. Educational Support Plan</div>
<div class="grid">
<div class="field"><label>Who Will Provide Educational Support?</label><input type="text" placeholder=""></div><div class="field"><label>Duration of Support</label><input type="text" placeholder=""></div>
<div class="field full"><label>What Educational Support Is Required?</label><textarea placeholder=""></textarea></div>
<div class="field full"><label>Other Educational Support Details</label><textarea placeholder=""></textarea></div>
</div>
<div class="section">G. Skill-Based Training Plan</div>
<div class="grid">
<div class="field"><label>Skill / Vocational Training Required</label><input type="text" placeholder=""></div><div class="field"><label>Training Provider / Location</label><input type="text" placeholder=""></div>
<div class="field"><label>Training Duration</label><input type="text" placeholder=""></div><div class="field"><label>Who Will Provide / Fund the Training?</label><input type="text" placeholder=""></div>
</div>
<div class="section">H. Possible Employment Plan (Only for Children Requiring Employment Support)</div>
<div class="grid">
<div class="field"><label>Agency / Institution Coordinating Employment</label><input type="text" placeholder=""></div><div class="field"><label>Agency / Institution Able to Provide Employment</label><input type="text" placeholder=""></div>
<div class="field full"><label>Other Employment Plan / Details</label><textarea placeholder=""></textarea></div>
</div>
<div class="section">I. Family Support Plan (Only for Families in Extreme Poverty — Short-Term Support)</div>
<div class="grid">
<div class="field full"><label>Type of Family Support Required</label><textarea placeholder=""></textarea></div>
<div class="field"><label>Duration of Support</label><input type="text" placeholder=""></div><div class="field"><label>Estimated Amount Required (NPR)</label><input type="number" placeholder=""></div>
<div class="field full"><label>Reason for Providing Support</label><textarea placeholder=""></textarea></div>
</div>
<div class="section">J. Consent and Child Protection Commitment</div>
<div class="field full"><label>Consent Statement</label><textarea style="min-height:170px">I confirm that I have understood and accepted the information and commitments stated in this form. I agree to protect the child from discrimination, abuse, neglect, exploitation and all forms of violence and to support an environment in which the child's fundamental rights are respected.</textarea></div>
<div class="grid">
<div class="field"><label>Name of Person Giving Consent</label><input type="text" placeholder=""></div><div class="field"><label>Relationship with Child</label><input type="text" placeholder=""></div>
<div class="field"><label>Address</label><input type="text" placeholder=""></div><div class="field"><label>Contact Number</label><input type="text" placeholder=""></div>
<div class="field"><label>Date</label><input type="date" placeholder=""></div><div class="field"><label>Signature</label><input type="text" placeholder=""></div>
<div class="field"><label>Thumbprint / Other Verification</label><input type="text" placeholder=""></div><div class="field"><label>Child's Relationship with Signatory</label><input type="text" placeholder=""></div>
</div>
<div class="section">K. On Behalf of the Child Care Home</div>
<div class="grid"><div class="field"><label>Name of Representative</label><input type="text" placeholder=""></div><div class="field"><label>Position</label><input type="text" placeholder=""></div><div class="field"><label>Signature</label><input type="text" placeholder=""></div><div class="field"><label>Organization Stamp / Seal</label><input type="text" placeholder=""></div></div>

<hr style="border:0;border-top:2px solid #d7dee8;margin:32px 0">
<div class="head" style="border-radius:10px;margin-bottom:24px"><h1>Child Reunification / Reintegration Survey Form</h1><p>Assessment of children residing in the child care home for reunification / reintegration</p></div>
<div class="section">A. Complete Child Information</div>
<div class="grid"><div class="field"><label>Child's Full Name</label><input type="text" placeholder=""></div><div class="field"><label>Address</label><input type="text" placeholder=""></div><div class="field"><label>Date of Arrival at Child Care Home</label><input type="date" placeholder=""></div><div class="field full"><label>Reason for Arrival at Child Care Home</label><textarea placeholder=""></textarea></div></div>
<div class="section">B. Family Information</div>
<div class="grid">
<div class="field"><label>Father's Name</label><input type="text" placeholder=""></div><div class="field"><label>Father's Current Condition</label><input type="text" placeholder=""></div><div class="field"><label>Father's Occupation</label><input type="text" placeholder=""></div><div class="field"><label>Mother's Name</label><input type="text" placeholder=""></div><div class="field"><label>Mother's Current Condition</label><input type="text" placeholder=""></div><div class="field"><label>Mother's Occupation</label><input type="text" placeholder=""></div>
<div class="field"><label>Number of Brothers</label><input type="text" placeholder=""></div><div class="field"><label>Number of Sisters</label><input type="text" placeholder=""></div><div class="field"><label>Total Family Members</label><input type="text" placeholder=""></div><div class="field full"><label>Other Employed / Income-Earning Persons in the Family</label><textarea placeholder=""></textarea></div>
</div>
<div class="section">C. Economic Information</div>
<div class="grid">
<div class="field"><label>Monthly Family Income (NPR)</label><input type="number" placeholder=""></div><div class="field"><label>Monthly Family Expenditure (NPR)</label><input type="number" placeholder=""></div><div class="field"><label>Monthly Savings (NPR)</label><input type="number" placeholder=""></div>
</div>
<div class="field"><label>House Condition</label><div class="checks"><label class="check"><input type="checkbox"> Permanent / Concrete</label><label class="check"><input type="checkbox"> Temporary / Mud</label><label class="check"><input type="checkbox"> Tin / Other</label></div></div>
<div class="grid"><div class="field"><label>Number of Rooms</label><input type="text" placeholder=""></div><div class="field"><label>Land / Property Details</label><input type="text" placeholder="Khet / Bari / Ghaderi / Other"></div></div>
<div class="section">D. Method Used for the Survey</div>
<div class="checks"><label class="check"><input type="checkbox"> Community Interaction</label><label class="check"><input type="checkbox"> Family Discussion / Home Visit</label><label class="check"><input type="checkbox"> Direct Observation</label><label class="check"><input type="checkbox"> Telephone Interview</label></div>
<div class="section">E. Type of Support Desired by the Family</div>
<div class="field full"><label>Support Required by Family</label><textarea placeholder=""></textarea></div>
<div class="section">F. Surveyor's Opinion / Recommendation</div>
<div class="field full"><label>Opinion on Whether Reunification / Reintegration Is Possible, With Reasons</label><textarea style="min-height:180px"></textarea></div>
<div class="section">G. Person Providing Information</div>
<div class="grid"><div class="field"><label>Name</label><input type="text" placeholder=""></div><div class="field"><label>Relationship with Child</label><input type="text" placeholder=""></div><div class="field"><label>Address</label><input type="text" placeholder=""></div><div class="field"><label>Contact Number</label><input type="text" placeholder=""></div><div class="field"><label>Signature</label><input type="text" placeholder=""></div><div class="field"><label>Date</label><input type="date" placeholder=""></div></div>
<div class="section">H. Staff Member Collecting Information</div>
<div class="grid"><div class="field"><label>Name</label><input type="text" placeholder=""></div><div class="field"><label>Position</label><input type="text" placeholder=""></div><div class="field"><label>Signature</label><input type="text" placeholder=""></div></div>
<div class="actions"><button class="secondary" type="button" onclick="window.print()">Print / Save PDF</button><button class="secondary" type="button" onclick="clearForm()">Clear</button><button class="primary" type="button" onclick="saveDraft()">Save Draft</button></div><div id="status" class="status">Draft saved in this browser.</div>
</div></div></div><script>`;

// Extract just the parts we need (the form fields, grids, etc - essentially what's inside <div class="body"> but we'll grab everything from the first section to the end)
let match = html.match(/<div class="section">A\. Child Information<\/div>([\s\S]*?)<div class="actions">/);
if (!match) {
    console.error("Could not find content to extract");
    process.exit(1);
}

let jsx = match[1];

// Make sure to cleanly close inputs, avoiding matching other tags
// 1. Convert `<input>` with no attributes to `<input />`
jsx = jsx.replace(/<input>/g, '<input />');
// 2. Convert `<input ...>` (where ... doesn't end with /) to `<input ... />`
jsx = jsx.replace(/<input([^>]*[^\/])>/g, '<input$1 />');

// Close unclosed <hr> tags
jsx = jsx.replace(/<hr([^>]*[^\/])>/g, '<hr$1 />');

// Fix styles
jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    // very basic style conversion for the 3 instances in this HTML
    let converted = p1.replace(/border:0;border-top:2px solid #d7dee8;margin:32px 0/, 'border: 0, borderTop: "2px solid #d7dee8", margin: "32px 0"');
    converted = converted.replace(/border-radius:10px;margin-bottom:24px/, 'borderRadius: "10px", marginBottom: "24px"');
    converted = converted.replace(/min-height:170px/, 'minHeight: "170px"');
    converted = converted.replace(/min-height:180px/, 'minHeight: "180px"');
    return `style={{${converted}}}`;
});


// Layout translations
jsx = jsx.replace(/<div class="section">/g, '<h3 className="font-headline-sm text-headline-sm text-secondary mt-8 mb-4 border-b border-outline-variant/30 pb-2">');
jsx = jsx.replace(/<\/div>\s*<div class="grid">/g, '</h3>\n<div className="grid grid-cols-1 md:grid-cols-2 gap-6">');
// Reintegration Survey Form Head
jsx = jsx.replace(/<div class="head" style={{borderRadius: "10px", marginBottom: "24px"}}><h1>(.*?)<\/h1><p>(.*?)<\/p><\/div>/g, '<div className="bg-surface-variant p-6 rounded-xl mb-6 shadow-sm"><h2 className="font-headline-md text-headline-md text-on-surface mb-2">$1</h2><p className="font-body-md text-body-md text-on-surface-variant">$2</p></div>');

// Field wrappers
jsx = jsx.replace(/<div class="field">/g, '<div className="flex flex-col gap-1.5">');
jsx = jsx.replace(/<div class="field full">/g, '<div className="flex flex-col gap-1.5 md:col-span-2">');

// Checkboxes and Checks Wrapper
jsx = jsx.replace(/<div class="checks">/g, '<div className="flex flex-wrap gap-4 mt-2">');
jsx = jsx.replace(/<label class="check">/g, '<label className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg bg-surface hover:bg-surface-container transition-colors cursor-pointer font-body-sm text-body-sm text-on-surface">');

// Labels
jsx = jsx.replace(/<label>/g, '<label className="font-label-caps text-label-caps text-on-surface-variant uppercase">');

// Tables
jsx = jsx.replace(/<table>/g, '<div className="w-full overflow-x-auto my-6 border border-outline-variant rounded-lg"><table className="w-full text-left border-collapse min-w-[800px]">');
jsx = jsx.replace(/<\/table>/g, '</table></div>');
jsx = jsx.replace(/<thead>/g, '<thead className="bg-surface-container-low border-b border-outline-variant">');
jsx = jsx.replace(/<th>/g, '<th className="p-3 font-label-caps text-label-caps text-on-surface-variant uppercase">');
jsx = jsx.replace(/<tbody>/g, '<tbody className="divide-y divide-outline-variant/50">');
jsx = jsx.replace(/<tr>/g, '<tr className="hover:bg-surface/50 transition-colors">');
jsx = jsx.replace(/<td>/g, '<td className="p-2 border-r border-outline-variant/30 last:border-r-0">');


// Inputs, Selects, Textareas
const inputClasses = 'className="h-input-height bg-surface px-3 py-2 rounded-lg border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all"';
const textareaClasses = 'className="bg-surface px-3 py-2 rounded-lg border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all min-h-[95px] resize-y"';

// Find <input /> or <input type="..."> and add classes
jsx = jsx.replace(/<input /g, `<input ${inputClasses} `);
jsx = jsx.replace(/<input\/>/g, `<input ${inputClasses} />`);
jsx = jsx.replace(/<input \/>/g, `<input ${inputClasses} />`);

// fix checkbox inputs
jsx = jsx.replace(/<input className="[^"]*" type="checkbox"/g, '<input type="checkbox" className="w-4 h-4 text-primary bg-surface border-outline-variant rounded focus:ring-primary"');
jsx = jsx.replace(/<input className="[^"]*" type="checkbox" \/>/g, '<input type="checkbox" className="w-4 h-4 text-primary bg-surface border-outline-variant rounded focus:ring-primary" />');

jsx = jsx.replace(/<select>/g, `<select ${inputClasses}>`);

// Handle textarea (both plain and with attributes like placeholder)
jsx = jsx.replace(/<textarea([^>]*)><\/textarea>/g, `<textarea$1 ${textareaClasses}></textarea>`);
// Handle textarea with inner content (e.g., the consent statement)
jsx = jsx.replace(/<textarea([^>]*)>([^<]*)<\/textarea>/g, `<textarea$1 ${textareaClasses} defaultValue="$2"></textarea>`);

jsx = jsx.replace(/&#10;/g, '\\n');

fs.writeFileSync('converted-reintegration.jsx', jsx);
console.log("Successfully converted to JSX");
