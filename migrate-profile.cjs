const fs = require('fs');

let html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Child Profile Form</title><style>
:root{--p:#234a7c;--pl:#e8eef5;--b:#d7dee8;--t:#1f2937;--bg:#f4f7fb}
*{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;background:var(--bg);color:var(--t)}
.shell{max-width:1180px;margin:28px auto;padding:0 18px}.card{background:#fff;border:1px solid var(--b);border-radius:14px;box-shadow:0 5px 18px rgba(31,41,55,.07);overflow:hidden}
.head{background:linear-gradient(135deg,#234a7c,#315f96);color:#fff;padding:24px 28px}.head h1{margin:0 0 5px;font-size:24px}.head p{margin:0;font-size:13px;opacity:.9}
.body{padding:25px}.section{margin:0 0 18px;padding:10px 14px;background:var(--pl);color:var(--p);border-left:5px solid var(--p);border-radius:5px;font-size:15px;font-weight:700}
.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-bottom:24px}.full{grid-column:1/-1}
.field{display:flex;flex-direction:column;gap:6px}label{font-size:13px;font-weight:700}
input,select,textarea{width:100%;border:1px solid #cfd7e3;border-radius:8px;padding:10px 11px;font:inherit;font-size:13px;background:#fff;outline:none}
input:focus,select:focus,textarea:focus{border-color:var(--p);box-shadow:0 0 0 3px rgba(35,74,124,.1)}
textarea{min-height:105px;resize:vertical}.options{display:flex;flex-wrap:wrap;gap:9px}.option{border:1px solid var(--b);padding:9px 11px;border-radius:8px;background:#fafbfd;font-weight:400}
table{width:100%;border-collapse:collapse;margin:0 0 24px;font-size:12px;overflow:auto}th,td{border:1px solid var(--b);padding:8px;vertical-align:top}th{background:var(--pl);color:var(--p);text-align:left}td input,td select,td textarea{border:0;padding:3px;box-shadow:none;background:transparent}
.actions{display:flex;justify-content:flex-end;gap:9px;border-top:1px solid var(--b);padding-top:18px}button{border:0;border-radius:8px;padding:10px 17px;font-weight:700;cursor:pointer}.primary{background:var(--p);color:white}.secondary{background:#eef2f7;color:#26364a}
.status{display:none;margin-top:12px;padding:9px 11px;border-radius:8px;background:#edf7ef;color:#25613a;font-size:13px}
@media(max-width:760px){.grid{grid-template-columns:1fr}.full{grid-column:auto}.body{padding:17px}.shell{margin:12px auto}table{font-size:10px;display:block;overflow-x:auto}}
@media print{body{background:white}.shell{max-width:none;margin:0}.card{box-shadow:none;border:0}.actions{display:none}.head{background:#234a7c!important}}
</style></head><body><div class="shell"><div class="card"><div class="head"><h1>Child Profile Form</h1><p>Digital child profile intake, rescue/handover and assessment record</p></div><div class="body">
<div class="section">1. Basic Information</div>
<div class="grid">
<div class="field"><label>Profile Intake Date</label><input type="date"></div><div></div>
<div class="field"><label>Name of Child</label><input></div><div class="field"><label>Date of Birth (DD/MM/YYYY)</label><input placeholder="DD/MM/YYYY"></div>
<div class="field"><label>Sex</label><select><option></option><option>Male</option><option>Female</option><option>Other</option></select></div>
<div class="field full"><label>Address</label><textarea></textarea></div>
<div class="field full"><label>Previous Academic Status / School</label><textarea></textarea></div>
<div class="field"><label>Father's Name (name, age etc.)</label><input></div><div class="field"><label>Mother's Name</label><input></div>
<div class="field"><label>Grandfather's Name</label><input></div><div class="field"><label>Grandmother's Name</label><input></div>
<div class="field full"><label>Legal Documents of Child</label><textarea></textarea></div>
<div class="field"><label>Occupation of Family</label><input></div><div class="field"><label>Primary Income Source of Family</label><input></div>
<div class="field full"><label>Siblings</label><textarea placeholder="Name, age, sex and other relevant details"></textarea></div>
<div class="field full"><label>Other Relatives (Name and Relationship with the Child)</label><textarea></textarea></div>
<div class="field full"><label>Any Other Information Provided by Child</label><textarea></textarea></div>
<div class="field"><label>Height and Weight</label><input></div><div class="field"><label>Health Status</label><textarea></textarea></div>
<div class="field"><label>Relationship with Family</label><textarea></textarea></div><div class="field"><label>Contact Details</label><input placeholder="Phone / Mobile / Email"></div>
</div>
<div class="section">2. Rescue / Handover Information</div>
<div class="grid">
<div class="field"><label>Date of Rescue / Handover</label><input type="date"></div>
<div class="field full"><label>Circumstance of Rescue / Handover</label><textarea></textarea></div>
<div class="field full"><label>Organization / Place from Where Child Was Rescued From / Handed Over</label><input></div>
<div class="field"><label>Time Spent in Organization Before Handover</label><input></div>
<div class="field"><label>Reason Why Child Was in the Organization / Job</label><textarea></textarea></div>
<div class="field full"><label>With Whom the Child Travelled to India / Work Location</label><input></div>
</div>
<div class="section">3. Case Study and Assessment</div>
<div class="grid">
<div class="field full"><label>Case Study</label><textarea></textarea></div>
<div class="field"><label>Reintegration Status</label><textarea></textarea></div><div class="field"><label>Education</label><textarea></textarea></div>
<div class="field"><label>Vocational Training</label><textarea></textarea></div><div class="field"><label>Risk Factors</label><textarea placeholder="Child labor; other identified risks..."></textarea></div>
<div class="field"><label>Immediate Support</label><textarea></textarea></div>
<div class="field full"><label>Future Plan</label><textarea placeholder="Short term:&#10;Medium term:&#10;Long term:"></textarea></div>
<div class="field"><label>Follow Up Plan</label><textarea></textarea></div><div class="field"><label>Observation by Team</label><textarea></textarea></div>
</div><div class="actions"><button class="secondary" type="button" onclick="window.print()">Print / Save PDF</button><button class="secondary" type="button" onclick="clearForm()">Clear</button><button class="primary" type="button" onclick="saveDraft()">Save Draft</button></div><div id="status" class="status">Draft saved in this browser.</div></div></div></div><script>
const KEY="Child_Profile_Form";
function fields(){return [...document.querySelectorAll("input,select,textarea")]}
function saveDraft(){let d={};fields().forEach((e,i)=>{d[e.name||e.id||("f"+i)]=e.type==="radio"?e.checked:e.value});localStorage.setItem(KEY,JSON.stringify(d));document.getElementById("status").style.display="block";setTimeout(()=>document.getElementById("status").style.display="none",2200)}
function clearForm(){if(!confirm("Clear all entered information?"))return;fields().forEach(e=>{if(e.type==="radio"||e.type==="checkbox")e.checked=false;else e.value=""});localStorage.removeItem(KEY)}
</script></body></html>`;

// Extract just the parts we need (the 3 sections and grids)
let match = html.match(/<div class="section">1\. Basic Information<\/div>([\s\S]*?)<div class="actions">/);
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

// Layout translations
jsx = jsx.replace(/<div class="section">/g, '<h3 className="font-headline-sm text-headline-sm text-secondary mt-8 mb-4 border-b border-outline-variant/30 pb-2">');
jsx = jsx.replace(/<\/div>\s*<div class="grid">/g, '</h3>\\n<div className="grid grid-cols-1 md:grid-cols-2 gap-6">');

// Field wrappers
jsx = jsx.replace(/<div class="field">/g, '<div className="flex flex-col gap-1.5">');
jsx = jsx.replace(/<div class="field full">/g, '<div className="flex flex-col gap-1.5 md:col-span-2">');

// Labels
jsx = jsx.replace(/<label>/g, '<label className="font-label-caps text-label-caps text-on-surface-variant uppercase">');

// Inputs, Selects, Textareas
const inputClasses = 'className="h-input-height bg-surface px-3 py-2 rounded-lg border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all"';
const textareaClasses = 'className="bg-surface px-3 py-2 rounded-lg border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all min-h-[105px] resize-y"';

// Find <input /> or <input type="..."> and add classes
jsx = jsx.replace(/<input /g, `<input ${inputClasses} `);
jsx = jsx.replace(/<input\/>/g, `<input ${inputClasses} />`);
jsx = jsx.replace(/<input \/>/g, `<input ${inputClasses} />`);

jsx = jsx.replace(/<select>/g, `<select ${inputClasses}>`);

// Handle textarea (both plain and with attributes like placeholder)
jsx = jsx.replace(/<textarea([^>]*)><\/textarea>/g, `<textarea$1 ${textareaClasses}></textarea>`);

jsx = jsx.replace(/&#10;/g, '\\\\n');

fs.writeFileSync('converted-profile.jsx', jsx);
console.log("Successfully converted to JSX");
