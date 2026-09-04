const fs = require('fs');

const html = `
<div class="section">A. Child's Personal Details</div><div class="grid">
<div class="field"><label>Entry / Intake Date</label><input type="date"></div><div class="field"><label>Name of Child</label><input></div>
<div class="field"><label>Date of Birth</label><input placeholder="DD/MM/YYYY"></div><div class="field"><label>Place of Birth</label><input></div>
<div class="field full"><label>Address at Birth</label><input placeholder="District / Municipality or Rural Municipality / Ward No."></div>
<div class="field full"><label>Current / Permanent Address</label><input placeholder="District / Municipality or Rural Municipality / Ward No."></div>
<div class="field"><label>Religion</label><input></div><div class="field"><label>Weight</label><input></div><div class="field"><label>Height</label><input></div><div class="field"><label>Health Status</label><textarea></textarea></div>
<div class="field full"><label>Doctor's General Report</label><textarea></textarea></div><div class="field full"><label>Photo</label><input type="file" accept="image/*"></div></div>
<div class="section">B. Educational Status</div><div class="grid">
<div class="field full"><label>Educational Status</label><textarea></textarea></div><div class="field"><label>School Name (if previously attended)</label><input></div><div class="field"><label>School Address</label><input></div><div class="field"><label>Class / Grade</label><input></div></div>
<div class="section">C. Father's / Male Guardian's Details</div><div class="grid">
<div class="field"><label>Name</label><input></div><div class="field"><label>Age</label><input></div><div class="field full"><label>Physical Condition</label><textarea></textarea></div><div class="field full"><label>Address</label><input></div>
<div class="field"><label>Is Father Alive?</label><select><option></option><option>Yes</option><option>No</option></select></div><div class="field"><label>If Alive, Occupation</label><input></div><div class="field"><label>If Deceased, Year of Death</label><input></div><div class="field"><label>If Deceased, Place of Death</label><input></div>
<div class="field full"><label>Reason / Circumstances of Death</label><textarea></textarea></div><div class="field full"><label>Movable Property Left by Father</label><textarea></textarea></div><div class="field full"><label>Immovable Property Left by Father</label><textarea></textarea></div></div>
<div class="section">D. Mother's / Female Guardian's Details</div><div class="grid">
<div class="field"><label>Name</label><input></div><div class="field"><label>Age</label><input></div><div class="field full"><label>Physical Condition</label><textarea></textarea></div><div class="field full"><label>Address</label><input></div>
<div class="field"><label>Is Mother Alive?</label><select><option></option><option>Yes</option><option>No</option></select></div><div class="field"><label>If Alive, Occupation</label><input></div><div class="field"><label>If Deceased, Year of Death</label><input></div><div class="field"><label>If Deceased, Place of Death</label><input></div>
<div class="field full"><label>Reason / Circumstances of Death</label><textarea></textarea></div><div class="field full"><label>Movable Property Left by Mother</label><textarea></textarea></div><div class="field full"><label>Immovable Property Left by Mother</label><textarea></textarea></div></div>
<div class="section">E. Uncle, Aunt, Siblings and Other Relatives</div>
<table><thead><tr><th>S.N.</th><th>Full Name</th><th>Age</th><th>Relationship</th><th>Occupation</th><th>Address</th></tr></thead><tbody>
<tr><td>1</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>2</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>3</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>4</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>5</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>6</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>7</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>8</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>9</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr><tr><td>10</td><td><input></td><td><input></td><td><input></td><td><input></td><td><input></td></tr>
</tbody></table>
<div class="field full"><label>F. Other Family Background / Reason for the Child's Admission to the Child Home</label><textarea style="min-height:180px"></textarea></div>
<div class="section">G. Person / Organization Bringing the Child for Admission</div><div class="grid">
<div class="field"><label>Name</label><input></div><div class="field"><label>If Individual — Age</label><input></div><div class="field full"><label>Address</label><textarea></textarea></div><div class="field full"><label>Occupation / Organizational Details</label><textarea></textarea></div><div class="field full"><label>Official / Business Address</label><textarea></textarea></div><div class="field full"><label>If the Child Came for Admission Voluntarily — Details</label><textarea></textarea></div><div class="field full"><label>Undertaking / Verification</label><textarea></textarea></div><div class="field"><label>Thumbprint (if individual)</label><input></div><div class="field"><label>Official Stamp (if organization)</label><input></div></div>
<div class="section">H. Recommendation / Supporting Documents</div><div class="grid">
<div class="field"><label>Copy of Citizenship Certificate</label><select><option></option><option>Attached</option><option>Not Attached</option></select></div><div class="field"><label>Recommendation by Any Authority</label><select><option></option><option>Yes</option><option>No</option></select></div>
<div class="field full"><label>If Yes — Recommending Authority</label><div class="options"><label class="option"><input type="checkbox"> Local Administration</label><label class="option"><input type="checkbox"> Local Police</label><label class="option"><input type="checkbox"> Government / Registered Organization</label></div></div>
<div class="field"><label>Date of Application / Submission</label><input type="date"></div><div class="field"><label>Name of Applicant / Person Submitting</label><input></div><div class="field full"><label>Other Legal Documents</label><textarea></textarea></div><div class="field"><label>Date of Child's Admission</label><input type="date"></div></div>
<div class="section">I. Staff Member Conducting the Admission</div><div class="grid">
<div class="field"><label>Signature</label><input></div><div class="field"><label>Full Name</label><input></div><div class="field"><label>Designation / Position</label><input></div><div class="field"><label>Grade / Level</label><input></div></div>
`;

let jsx = html;
// Self close tags
jsx = jsx.replace(/<input(.*?[^\/])>/g, '<input$1 />');

// Translate sections
jsx = jsx.replace(/<div class="section">(.*?)<\/div>/g, '<h2 className="font-headline-sm text-headline-sm text-secondary mt-8 mb-4 flex items-center border-b border-outline-variant/30 pb-2">$1</h2>');

// Translate grid
jsx = jsx.replace(/<div class="grid">/g, '<div className="grid grid-cols-1 md:grid-cols-2 gap-6">');

// Translate fields
jsx = jsx.replace(/<div class="field">/g, '<div className="flex flex-col gap-1.5">');
jsx = jsx.replace(/<div class="field full">/g, '<div className="flex flex-col gap-1.5 md:col-span-2">');

// Translate labels
jsx = jsx.replace(/<label>/g, '<label className="font-label-caps text-label-caps text-on-surface-variant uppercase">');

// Translate inputs
const inputClasses = 'className="h-input-height bg-surface px-3 py-2 rounded-lg border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all"';
jsx = jsx.replace(/<input /g, `<input ${inputClasses} `);
jsx = jsx.replace(/<input\/>/g, `<input ${inputClasses} />`);
jsx = jsx.replace(/<input>/g, `<input ${inputClasses} />`);

const selectClasses = 'className="h-input-height bg-surface px-3 py-2 rounded-lg border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all"';
jsx = jsx.replace(/<select>/g, `<select ${selectClasses}>`);

const textareaClasses = 'className="bg-surface px-3 py-2 rounded-lg border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm transition-all min-h-[105px] resize-y"';
jsx = jsx.replace(/<textarea([^>]*)><\/textarea>/g, `<textarea ${textareaClasses} $1></textarea>`);

// Style option lists
jsx = jsx.replace(/class="options"/g, 'className="flex flex-wrap gap-3 mt-2"');
jsx = jsx.replace(/class="option"/g, 'className="flex items-center gap-2 border border-outline-variant px-3 py-2 rounded-lg bg-surface-container-lowest cursor-pointer hover:border-primary/50 transition-colors"');

// Fix checkbox inputs which got styled as standard inputs
jsx = jsx.replace(/<input className="[^"]*" type="checkbox"/g, '<input type="checkbox" className="w-4 h-4 text-primary bg-surface border-outline-variant rounded focus:ring-primary"');

// Fix tables
jsx = jsx.replace(/<table>/g, '<div className="overflow-x-auto w-full mt-4"><table className="w-full text-left border-collapse min-w-[800px]">');
jsx = jsx.replace(/<\/table>/g, '</table></div>');
jsx = jsx.replace(/<th>/g, '<th className="p-3 bg-surface-container-low font-table-header text-table-header text-on-surface-variant border-b border-outline-variant">');
jsx = jsx.replace(/<td>/g, '<td className="p-2 border-b border-outline-variant/30">');

// Some inputs inside td shouldn't have h-input-height
jsx = jsx.replace(/<td className="([^"]*)"><input className="([^"]*)"/g, '<td className="$1"><input className="w-full bg-surface-container-lowest px-2 py-1 rounded border border-outline-variant/50 text-sm focus:border-primary outline-none"');

// Remove extra inline styles
jsx = jsx.replace(/style="([^"]*)"/g, '');

const finalFileContent = `
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CaseIntake() {
  return (
    <>
      <div className="flex flex-col w-full relative">
        <div className="px-margin-desktop py-8 max-w-[1440px] mx-auto w-full flex-1">
          {/* Header Section */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-2 tracking-tight">Case Intake & Triage</h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Child Entry / Admission Form Record</p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Wizard Navigation Sidebar */}
            <aside className="w-full lg:w-64 shrink-0 relative hidden lg:block">
              <div className="sticky top-24 bg-surface-container rounded-2xl p-6 shadow-md">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">Intake Workflow</h3>
                <ul className="space-y-6 relative before:content-[''] before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-[2px] before:bg-outline-variant/30">
                  <li className="relative flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center z-10 shadow-md shrink-0">
                      <span className="font-body-md text-body-md font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-headline-sm text-base text-primary">Admission Form</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Full child record</p>
                    </div>
                  </li>
                  <li className="relative flex items-start gap-4 opacity-60">
                    <div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant border border-outline-variant flex items-center justify-center z-10 shrink-0">
                      <span className="font-body-md text-body-md font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-body-md text-body-md text-on-surface font-semibold">Risk Assessment</p>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Main Form Area */}
            <div className="flex-1 min-w-0">
              <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-lg border border-outline-variant/40">
                <form className="space-y-2" onSubmit={e => e.preventDefault()}>
                  ${jsx.split('\\n').join('\\n                  ')}
                  
                  {/* Form Actions */}
                  <div className="flex justify-end gap-4 mt-12 pt-6 border-t border-outline-variant/30">
                    <button className="px-6 py-2 rounded-lg font-body-md text-body-md font-semibold text-secondary hover:bg-surface-variant transition-colors" type="button">Clear Form</button>
                    <button className="px-6 py-2 rounded-lg font-body-md text-body-md font-semibold bg-surface border border-outline-variant text-on-surface shadow-sm hover:bg-surface-container transition-colors" type="button">Save Draft</button>
                    <button className="px-6 py-2 rounded-lg font-body-md text-body-md font-semibold bg-primary text-on-primary hover:bg-primary/90 shadow-md flex items-center gap-2 transition-transform active:scale-95" type="button">
                      <Link to="/assessment" className="flex items-center gap-2 text-inherit">Proceed to Step 2 <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
`;

fs.writeFileSync('src/pages/CaseIntake.jsx', finalFileContent);
console.log('Successfully regenerated CaseIntake.jsx with the new form.');
