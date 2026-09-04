import React, { useState } from 'react';

export default function ReportingME() {
  const [activeTab, setActiveTab] = useState('operational');

  return (
    <div className="flex flex-col w-full h-full">
      {/* Banner Header with PII & Compliance Strip */}
      <div className="px-8 py-5 bg-surface-container-low border-b border-outline-variant flex flex-col md:flex-row md:justify-between md:items-center gap-4 z-10 sticky top-16 shadow-sm backdrop-blur-md bg-opacity-90">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Reporting &amp; M&amp;E Engine</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-label-caps bg-primary-container text-white font-semibold">v3.4 Automated</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Aggregated analytics, longitudinal impact tracking, and donor evaluation compliance metrics.</p>
        </div>
        <div className="flex items-center flex-wrap gap-3">
          <div className="flex gap-2 bg-error-container/80 text-on-error-container border border-error/30 px-3.5 py-1.5 rounded-full items-center shadow-sm text-xs font-label-caps">
            <span className="material-symbols-outlined text-sm text-error" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
            <span>PII-Stripped: Anonymized Hash Salt v2</span>
          </div>
          <div className="flex gap-1.5 bg-surface-container text-on-surface-variant border border-outline-variant px-3 py-1.5 rounded-full items-center text-xs font-label-caps">
            <span className="material-symbols-outlined text-sm text-primary">verified</span>
            <span>ISO 27701 &amp; CP-DPI Verified</span>
          </div>
          <button className="flex items-center gap-1.5 bg-primary text-on-primary px-3.5 py-1.5 rounded-lg text-xs font-label-caps font-semibold shadow-sm hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-sm">send</span>
            <span>Dispatch Reports</span>
          </button>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="px-8 py-3 bg-surface border-b border-outline-variant/60 sticky top-[137px] z-10 shadow-sm">
        <div className="flex gap-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('operational')}
            className={`relative py-2 font-headline-sm text-headline-sm whitespace-nowrap flex items-center gap-2 ${activeTab === 'operational' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface transition-colors'}`}
          >
            <span className="material-symbols-outlined text-lg">dashboard_customize</span>
            <span>Operational View</span>
            {activeTab === 'operational' && (
              <span className="ml-1 px-2 py-0.5 text-[10px] font-label-caps bg-primary text-white rounded-full">Live</span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('impact')}
            className={`relative py-2 font-headline-sm text-headline-sm whitespace-nowrap flex items-center gap-2 ${activeTab === 'impact' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface transition-colors'}`}
          >
            <span className="material-symbols-outlined text-lg">insights</span>
            <span>Programme Impact View</span>
          </button>
          <button
            onClick={() => setActiveTab('donor')}
            className={`relative py-2 font-headline-sm text-headline-sm whitespace-nowrap flex items-center gap-2 ${activeTab === 'donor' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface transition-colors'}`}
          >
            <span className="material-symbols-outlined text-lg">assignment_turned_in</span>
            <span>Donor &amp; Statutory Reporting (UNICEF / USAID format)</span>
          </button>
          <button
            onClick={() => setActiveTab('geo')}
            className={`relative py-2 font-headline-sm text-headline-sm whitespace-nowrap flex items-center gap-2 ${activeTab === 'geo' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-on-surface transition-colors'}`}
          >
            <span className="material-symbols-outlined text-lg">map</span>
            <span>Regional Geospatial Heatmap</span>
          </button>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-8 space-y-6 max-w-7xl mx-auto">
        {/* 4 Core Executive KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* KPI 1 */}
          <div className="p-5 bg-surface-container rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs font-label-caps text-on-surface-variant uppercase tracking-wider">Total Registered Cases</div>
                <div className="text-display-lg font-display-lg text-on-surface mt-1 leading-none">4,291</div>
                <div className="text-xs text-on-surface-variant mt-1.5">Year to Date cumulative</div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">folder_shared</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-outline-variant/50 flex items-center justify-between">
              <span className="inline-flex items-center text-xs font-label-caps font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                <span className="material-symbols-outlined text-sm mr-0.5">arrow_upward</span> +12.4% YoY
              </span>
              <span className="text-[11px] font-label-caps text-on-surface-variant">Prev: 3,817</span>
            </div>
          </div>

          {/* KPI 2 */}
          <div className="p-5 bg-surface-container rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs font-label-caps text-on-surface-variant uppercase tracking-wider">Avg Resolution Time</div>
                <div className="text-display-lg font-display-lg text-on-surface mt-1 leading-none">45.2<span className="text-lg font-normal text-on-surface-variant">d</span></div>
                <div className="text-xs text-on-surface-variant mt-1.5">Intake to Safe Closure</div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">timer</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-outline-variant/50 flex items-center justify-between">
              <span className="inline-flex items-center text-xs font-label-caps font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                <span className="material-symbols-outlined text-sm mr-0.5">trending_down</span> -3.1 days faster
              </span>
              <span className="text-[11px] font-label-caps text-on-surface-variant">Target: ≤48d</span>
            </div>
          </div>

          {/* KPI 3 */}
          <div className="p-5 bg-surface-container rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs font-label-caps text-on-surface-variant uppercase tracking-wider">Post-Reintegration Stability</div>
                <div className="text-display-lg font-display-lg text-on-surface mt-1 leading-none">94.2<span className="text-lg font-normal text-on-surface-variant">%</span></div>
                <div className="text-xs text-on-surface-variant mt-1.5">6-month zero recidivism</div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">volunteer_activism</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-outline-variant/50 flex items-center justify-between">
              <span className="inline-flex items-center text-xs font-label-caps font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                <span className="material-symbols-outlined text-sm mr-0.5">arrow_upward</span> +2.8% benchmark
              </span>
              <span className="text-[11px] font-label-caps text-on-surface-variant">Global target: 90%</span>
            </div>
          </div>

          {/* KPI 4 */}
          <div className="p-5 bg-surface-container rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-xs font-label-caps text-on-surface-variant uppercase tracking-wider">Critical SLA Compliance</div>
                <div className="text-display-lg font-display-lg text-on-surface mt-1 leading-none">98.6<span className="text-lg font-normal text-on-surface-variant">%</span></div>
                <div className="text-xs text-on-surface-variant mt-1.5">24h intake &amp; rescue protocol</div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">verified_user</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-outline-variant/50 flex items-center justify-between">
              <span className="inline-flex items-center text-xs font-label-caps font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                <span className="material-symbols-outlined text-sm mr-0.5">check_circle</span> Statutory Compliant
              </span>
              <span className="text-[11px] font-label-caps text-on-surface-variant">Min Req: 95%</span>
            </div>
          </div>
        </div>

        {/* Mid Section: Lifecycle Chart & Vulnerability Distribution */}
        <div className="grid grid-cols-12 gap-6">
          {/* 19-Step Caseload Progression Chart */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container rounded-xl p-6 shadow-sm border border-outline-variant flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6 pb-4 border-b border-outline-variant/60">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Caseload Distribution by 19-Step Lifecycle Stage</h2>
                    <span className="px-2 py-0.5 text-[11px] font-label-caps bg-surface-variant text-on-surface rounded border border-outline-variant">Active Cohort</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Live tracking of children moving across standard protection milestones.</p>
                </div>
                <div className="flex items-center gap-2 self-start">
                  <button className="px-3 py-1.5 bg-surface text-xs font-label-caps border border-outline-variant rounded-lg hover:border-primary text-on-surface transition-colors">Filter: All Mandates</button>
                  <button className="p-1.5 text-on-surface-variant hover:text-primary rounded-lg hover:bg-surface"><span className="material-symbols-outlined text-lg">more_vert</span></button>
                </div>
              </div>

              {/* Bar Chart Visualizer */}
              <div className="h-64 flex items-end gap-3 px-2 pb-2 border-b border-outline-variant/80">
                {[
                  { stage: '01', label: 'Intake', value: 342, height: 82 },
                  { stage: '03', label: 'Rescue', value: 278, height: 65 },
                  { stage: '04', label: 'Assess', value: 245, height: 58 },
                  { stage: '05', label: 'Plan', value: 389, height: 92 },
                  { stage: '06', label: 'Support', value: 312, height: 74 },
                  { stage: '08', label: 'Reintegr', value: 204, height: 48 },
                  { stage: '09', label: 'Follow-up', value: 159, height: 38 },
                  { stage: '10', label: 'Closure', value: 118, height: 28 },
                ].map((bar) => (
                  <div key={bar.stage} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                    <div
                      className="w-full bg-primary-container rounded-t-sm relative transition-all group-hover:bg-primary group-hover:shadow-md"
                      style={{ height: `${bar.height}%` }}
                    >
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 font-label-caps text-xs font-bold text-on-surface opacity-80 group-hover:opacity-100 transition-opacity bg-surface px-1 rounded shadow-sm">
                        {bar.value}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-label-caps text-[11px] text-on-surface font-semibold">{bar.stage}</div>
                      <div className="font-label-caps text-[10px] text-on-surface-variant truncate w-12">{bar.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 flex flex-wrap items-center justify-between text-xs text-on-surface-variant">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-primary-container"></span>
                  <span>Active Casework</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-emerald-600"></span>
                  <span>Reintegration Target Met</span>
                </span>
              </div>
              <div className="font-label-caps text-[11px]">Total Active Cohort: <strong className="text-on-surface font-bold">2,046 Cases</strong></div>
            </div>
          </div>

          {/* Vulnerability Category Breakdown & Donut */}
          <div className="col-span-12 lg:col-span-4 bg-surface-container rounded-xl p-6 shadow-sm border border-outline-variant flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex justify-between items-start mb-4 pb-3 border-b border-outline-variant/60">
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">Vulnerability Types</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Protection intake categories</p>
                </div>
                <span className="material-symbols-outlined text-outline">donut_large</span>
              </div>

              {/* Donut graphic representation */}
              <div className="relative w-40 h-40 mx-auto flex items-center justify-center my-2">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle className="text-surface-variant" cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeWidth="12"></circle>
                  {/* Segment 1: Street Exploitation 42% */}
                  <circle className="text-primary" cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeDasharray="105.5 251.2" strokeDashoffset="0" strokeWidth="12"></circle>
                  {/* Segment 2: Unaccompanied Minors 28% */}
                  <circle className="text-primary-container" cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeDasharray="70.3 251.2" strokeDashoffset="-105.5" strokeWidth="12"></circle>
                  {/* Segment 3: Domestic Abuse / Neglect 30% */}
                  <circle className="text-secondary" cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeDasharray="75.4 251.2" strokeDashoffset="-175.8" strokeWidth="12"></circle>
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="font-display-lg text-2xl font-bold text-on-surface">4,291</span>
                  <span className="font-label-caps text-[10px] text-on-surface-variant">Categorized</span>
                </div>
              </div>
            </div>

            {/* Legend list */}
            <div className="space-y-2 mt-4 pt-3 border-t border-outline-variant/60">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                  <span className="text-on-surface">Street Exploitation</span>
                </div>
                <span className="font-label-caps font-semibold text-on-surface">42% (1,802)</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                  <span className="text-on-surface">Unaccompanied Minors</span>
                </div>
                <span className="font-label-caps font-semibold text-on-surface">28% (1,201)</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  <span className="text-on-surface">Domestic Neglect / Abuse</span>
                </div>
                <span className="font-label-caps font-semibold text-on-surface">30% (1,288)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Geospatial Risk Heatmap & Automated Regulatory Export Panel */}
        <div className="grid grid-cols-12 gap-6">
          {/* Geospatial Intervention Density Heatmap */}
          <div className="col-span-12 lg:col-span-7 bg-surface-container rounded-xl p-6 shadow-sm border border-outline-variant hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4 pb-3 border-b border-outline-variant/60">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">Geospatial Intervention Density Heatmap</h2>
                    <span className="px-2 py-0.5 text-[10px] font-label-caps bg-error-container text-error rounded font-bold">High-Risk Alerts Active</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Field operation rescue hot-spots &amp; shelter allocation density (Nepal / Region 4).</p>
                </div>
                <button className="p-1.5 text-on-surface-variant hover:text-primary rounded-lg hover:bg-surface" title="Expand Fullscreen Map">
                  <span className="material-symbols-outlined text-lg">fullscreen</span>
                </button>
              </div>

              {/* Map Canvas with Interactive Indicators */}
              <div className="w-full h-64 rounded-lg overflow-hidden border border-outline-variant relative group">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXWBtaypCppknPYo8d5bRTxDy5HaDHEARuJDFRUtO5w-nL_z65t0qKP_a8ovwrhWR6LyCvXNd0Fw0kBftJd4JveAVjlM1IeATcMAOhHkTlCg71rQLjcapiVScUgZYkop_gPcvKf3g4H03Pk9ikzpoC4eqn8TQvW2XYIjQYbpEDbQ4r2QCeesf6FLFjuP5Ade9Qh7YjZaff9gIBK35kVkgEHL4R79ULMkSf6-0t4g4w1LrREfyRQBkb')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent pointer-events-none"></div>

                {/* Hotspot Overlays */}
                <div className="absolute top-6 left-1/3 flex items-center gap-2 bg-slate-900/90 text-white px-2.5 py-1 rounded-full text-xs backdrop-blur-md border border-slate-700 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="font-label-caps text-[11px]">Pokhara Sub-hub (348 cases)</span>
                </div>
                <div className="absolute bottom-16 left-12 flex items-center gap-2 bg-slate-900/90 text-white px-3 py-1 rounded-full text-xs backdrop-blur-md border border-error/50 shadow-md animate-pulse">
                  <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
                  <span className="font-label-caps text-[11px]">Kathmandu Central (1,420 cases - Dense)</span>
                </div>

                {/* Map Floating Metric Bar */}
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-white bg-slate-900/85 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-700/70 text-xs">
                  <div>
                    <span className="text-slate-400">Field Teams Active:</span> <strong className="text-white font-label-caps">18 Units</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">Transit Shelters:</span> <strong className="text-white font-label-caps">6 Verified</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">Avg Response:</span> <strong className="text-emerald-400 font-label-caps">3.4 hrs</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-on-surface-variant">
              <span>Geocoded GPS coordinates aggregated at ward level (No precise home addresses retained).</span>
              <a className="text-primary hover:underline font-semibold font-label-caps" href="#">View GIS GeoJSON &gt;</a>
            </div>
          </div>

          {/* Automated Regulatory Submission & Export Engine */}
          <div className="col-span-12 lg:col-span-5 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white rounded-xl p-6 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <span className="material-symbols-outlined text-8xl">security_update_good</span>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary-fixed text-xl">verified</span>
                <span className="text-[11px] font-label-caps uppercase tracking-wider text-slate-300 font-semibold">Audit &amp; Statutory Dispatch</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-white font-bold leading-tight">Automated Regulatory Submission Engine</h3>
              <p className="font-body-sm text-body-sm text-slate-300 mt-2">Generate verified, zero-knowledge export packages formatted strictly to statutory criteria with cryptographic verification seals.</p>

              {/* Export Profiles */}
              <div className="mt-5 space-y-2.5">
                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between hover:border-slate-600 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-blue-400 text-lg">description</span>
                    <div>
                      <div className="text-xs font-semibold text-white">UNICEF Child Protection Harmonized</div>
                      <div className="text-[10px] font-label-caps text-slate-400">Monthly aggregate • Format CP-2024.v2</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-label-caps px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Ready</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between hover:border-slate-600 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-amber-400 text-lg">account_balance</span>
                    <div>
                      <div className="text-xs font-semibold text-white">National Child Rights Council (NCRC)</div>
                      <div className="text-[10px] font-label-caps text-slate-400">Statutory quarterly audit • Legal review passed</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-label-caps px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Ready</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 mt-6 pt-4 border-t border-slate-700/80 flex flex-wrap gap-2">
              <button className="flex-1 bg-white text-[#0F172A] px-3.5 py-2 rounded-lg font-label-caps text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-sm">download</span>
                <span>Download PDF Package</span>
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 text-white px-3.5 py-2 rounded-lg font-label-caps text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-600 transition-colors">
                <span className="material-symbols-outlined text-sm">table_view</span>
                <span>CSV</span>
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 text-white px-3.5 py-2 rounded-lg font-label-caps text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-600 transition-colors">
                <span className="material-symbols-outlined text-sm">code</span>
                <span>JSON</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}