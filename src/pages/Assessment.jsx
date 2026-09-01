import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Assessment() {
  // If there are tabs (like in BeneficiaryProfile), we can add basic state
  const [activeTab, setActiveTab] = useState('tab-identity');
  
  return (
    <>
      <div className="flex flex-col w-full relative">
<div className="px-8 pb-32">
{/* Header Area */}
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="flex-1 max-w-3xl">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-container text-on-primary-container">
<span className="material-symbols-outlined text-sm">fact_check</span>
</span>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Case #CMS-8492-B</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface mb-2">Psychosocial &amp; Risk Evaluation</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Complete the comprehensive assessment for Maria Consuela. This evaluation dictates the required level of intervention and determines priority scoring for the upcoming case plan.</p>
</div>
{/* Current Score Summary */}
<div className="bg-surface-container rounded-2xl p-6 shadow-sm min-w-[240px] relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-error/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
<div className="text-sm font-label-caps text-on-surface-variant mb-1">Composite Risk Score</div>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-display-lg text-display-lg text-error">7.4</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ 10</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error-container text-on-error-container">
<span className="material-symbols-outlined text-[14px]">warning</span>
<span className="font-label-caps text-label-caps">High Priority Intervention</span>
</div>
</div>
</div>
{/* Main Content Layout */}
<div className="flex flex-col lg:flex-row gap-8">
{/* Left Column: Navigation & Visualizations */}
<div className="lg:w-1/4 flex flex-col gap-6">
{/* Navigation Tabs */}
<nav className="bg-surface-container-lowest rounded-2xl shadow-sm p-2 flex flex-col gap-1 sticky top-24">
<button className="flex items-center justify-between px-4 py-3 rounded-xl bg-primary-container text-on-primary transition-colors text-left group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined opacity-90 group-hover:opacity-100">psychology</span>
<span className="font-headline-sm text-headline-sm">Psychosocial (FPA)</span>
</div>
<span className="material-symbols-outlined text-sm opacity-50 group-hover:opacity-100">chevron_right</span>
</button>
<button className="flex items-center justify-between px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors text-left group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined opacity-70 group-hover:opacity-100">medical_services</span>
<span className="font-headline-sm text-headline-sm">Health &amp; Medical</span>
</div>
</button>
<button className="flex items-center justify-between px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors text-left group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined opacity-70 group-hover:opacity-100">school</span>
<span className="font-headline-sm text-headline-sm">Educational</span>
</div>
<div className="w-2 h-2 rounded-full bg-error"></div>
</button>
<button className="flex items-center justify-between px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors text-left group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined opacity-70 group-hover:opacity-100">family_restroom</span>
<span className="font-headline-sm text-headline-sm">Family / Economic</span>
</div>
</button>
</nav>
{/* Score Visualizer Chart */}
<div className="bg-surface-container-lowest rounded-2xl shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Trend Analysis</h3>
<span className="material-symbols-outlined text-on-surface-variant text-sm cursor-help" title="Historical risk scores over past assessments">info</span>
</div>
<div className="relative h-32 w-full mt-2">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 200 100">
{/* Grid lines */}
<line className="text-outline-variant/30" stroke="currentColor" stroke-dasharray="2 2" stroke-width="1" x1="0" x2="200" y1="20" y2="20"></line>
<line className="text-outline-variant/30" stroke="currentColor" stroke-dasharray="2 2" stroke-width="1" x1="0" x2="200" y1="50" y2="50"></line>
<line className="text-outline-variant/30" stroke="currentColor" stroke-dasharray="2 2" stroke-width="1" x1="0" x2="200" y1="80" y2="80"></line>
{/* Gradient definition */}
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop className="text-error" offset="0%" stop-color="currentColor" stop-opacity="0.3"></stop>
<stop className="text-error" offset="100%" stop-color="currentColor" stop-opacity="0"></stop>
</lineargradient>
</defs>
{/* Area */}
<path d="M0,80 L40,65 L80,45 L120,70 L160,30 L200,25 L200,100 L0,100 Z" fill="url(#chartGradient)"></path>
{/* Line */}
<path className="text-error" d="M0,80 L40,65 L80,45 L120,70 L160,30 L200,25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
{/* Data Points */}
<circle className="text-error" cx="40" cy="65" fill="currentColor" r="3" stroke="currentColor" stroke-width="2"></circle>
<circle className="text-error" cx="80" cy="45" fill="currentColor" r="3" stroke="currentColor" stroke-width="2"></circle>
<circle className="text-error" cx="120" cy="70" fill="currentColor" r="3" stroke="currentColor" stroke-width="2"></circle>
<circle className="text-error" cx="160" cy="30" fill="currentColor" r="3" stroke="currentColor" stroke-width="2"></circle>
<circle className="text-error" cx="200" cy="25" fill="currentColor" r="4"></circle>
</svg>
<div className="absolute -bottom-6 left-0 right-0 flex justify-between font-label-caps text-[9px] text-on-surface-variant">
<span>Intake</span>
<span>Month 1</span>
<span>Month 2</span>
<span>Month 3</span>
<span>Current</span>
</div>
</div>
</div>
</div>
{/* Right Column: Form Area */}
<div className="lg:w-3/4 flex flex-col gap-6">
{/* Section Header Image */}
<div className="h-48 rounded-2xl overflow-hidden relative shadow-md">
<div className="w-full h-full bg-cover bg-center" data-alt="A calm, softly lit consultation room in a clinical setting. Minimalist decor with comfortable chairs, a small table with tissues, and soft natural light filtering through a window, conveying safety and privacy. Colors emphasize muted blues and slate grays." style={{ backgroundColor: '#e2e8f0' }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h2 className="font-display-lg text-headline-lg-mobile text-on-surface">Psychosocial Indicators</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">First-person assessment of emotional and social wellbeing.</p>
</div>
</div>
{/* Scoring Sliders */}
<div className="bg-surface-container-lowest rounded-2xl shadow-sm p-8 flex flex-col gap-8">
{/* Indicator 1 */}
<div className="flex flex-col gap-3 group">
<div className="flex justify-between items-end">
<div>
<label className="font-headline-sm text-headline-sm text-on-surface block mb-1">Emotional Regulation</label>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ability to manage and respond to emotional experiences appropriately.</span>
</div>
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container text-on-surface font-headline-sm text-headline-sm">
                4
              </div>
</div>
<div className="relative w-full h-2 bg-surface-container-high rounded-full mt-2">
<div className="absolute left-0 top-0 h-full bg-primary rounded-full w-[40%] transition-all duration-300"></div>
<input className="absolute w-full h-full opacity-0 cursor-pointer z-10" max="10" min="1" oninput="this.previousElementSibling.style.width = (this.value * 10) + '%'; this.parentElement.previousElementSibling.lastElementChild.textContent = this.value;" type="range" value="4"/>
{/* Tick marks */}
<div className="absolute inset-0 flex justify-between px-1 pointer-events-none">
<div className="w-0.5 h-full bg-surface-container-lowest/50"></div>
<div className="w-0.5 h-full bg-surface-container-lowest/50"></div>
<div className="w-0.5 h-full bg-surface-container-lowest/50"></div>
<div className="w-0.5 h-full bg-surface-container-lowest/50"></div>
<div className="w-0.5 h-full bg-surface-container-lowest/50"></div>
<div className="w-0.5 h-full bg-surface-container-lowest/50"></div>
<div className="w-0.5 h-full bg-surface-container-lowest/50"></div>
<div className="w-0.5 h-full bg-surface-container-lowest/50"></div>
<div className="w-0.5 h-full bg-surface-container-lowest/50"></div>
</div>
</div>
<div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant">
<span>Severe Dysregulation (1)</span>
<span>Healthy Regulation (10)</span>
</div>
</div>
{/* Indicator 2 */}
<div className="flex flex-col gap-3 group">
<div className="flex justify-between items-end">
<div>
<label className="font-headline-sm text-headline-sm text-on-surface block mb-1">Social Integration</label>
<span className="font-body-sm text-body-sm text-on-surface-variant">Quality of peer relationships and community engagement.</span>
</div>
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-error-container text-on-error-container font-headline-sm text-headline-sm">
                2
              </div>
</div>
<div className="relative w-full h-2 bg-surface-container-high rounded-full mt-2">
<div className="absolute left-0 top-0 h-full bg-error rounded-full w-[20%] transition-all duration-300"></div>
<input className="absolute w-full h-full opacity-0 cursor-pointer z-10" max="10" min="1" oninput="
                this.previousElementSibling.style.width = (this.value * 10) + '%'; 
                this.parentElement.previousElementSibling.lastElementChild.textContent = this.value;
                if(this.value &lt;= 3) {
                  this.previousElementSibling.className = 'absolute left-0 top-0 h-full bg-error rounded-full transition-all duration-300 w-[' + (this.value*10) + '%]';
                  this.parentElement.previousElementSibling.lastElementChild.className = 'flex items-center justify-center w-10 h-10 rounded-lg bg-error-container text-on-error-container font-headline-sm text-headline-sm';
                } else {
                   this.previousElementSibling.className = 'absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-300 w-[' + (this.value*10) + '%]';
                   this.parentElement.previousElementSibling.lastElementChild.className = 'flex items-center justify-center w-10 h-10 rounded-lg bg-surface-container text-on-surface font-headline-sm text-headline-sm';
                }
              " type="range" value="2"/>
</div>
<div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant">
<span>Isolated / Withdrawn (1)</span>
<span>Highly Integrated (10)</span>
</div>
</div>
</div>
{/* Narrative Findings */}
<div className="bg-surface-container-lowest rounded-2xl shadow-sm p-8 flex flex-col gap-4">
<div className="flex justify-between items-center">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Narrative Findings</h3>
<button className="text-primary hover:bg-surface-container px-3 py-1.5 rounded-lg transition-colors font-label-caps text-label-caps flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">magic_button</span>
              Auto-Summarize
            </button>
</div>
<div className="relative">
<div className="absolute top-3 left-3 flex gap-1 z-10">
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[18px]">format_bold</span></button>
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[18px]">format_italic</span></button>
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container text-on-surface-variant transition-colors"><span className="material-symbols-outlined text-[18px]">format_list_bulleted</span></button>
</div>
<textarea className="w-full min-h-[240px] bg-surface rounded-xl p-4 pt-14 text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-y" placeholder="Document behavioral observations, specific quotes, and clinical impressions here..."></textarea>
</div>
</div>
</div>
</div>
</div>
{/* Sticky Workflow Bar */}
<div className="fixed bottom-0 left-72 right-0 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_-4px_24px_rgba(0,0,0,0.06)] z-30 px-8 py-4 border-t border-outline-variant/30 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">cloud_done</span>
<span className="font-body-sm text-body-sm">Autosaved 2 mins ago</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="px-6 py-2.5 rounded-lg font-label-caps text-label-caps text-on-surface bg-surface-container hover:bg-surface-container-high transition-colors tracking-widest">
        SAVE DRAFT
      </button>
<button className="px-6 py-2.5 rounded-lg font-label-caps text-label-caps text-on-primary bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all tracking-widest flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">send</span>
        SUBMIT FOR APPROVAL
      </button>
</div>
</div>
</div>
    </>
  );
}
