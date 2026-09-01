import fs from 'fs';
import path from 'path';

const modules = [
  { dir: 'system_overview_dashboard', component: 'Dashboard', path: '/' },
  { dir: 'organization_management', component: 'OrganizationManagement', path: '/organization-management' },
  { dir: 'user_role_management', component: 'UserManagement', path: '/users-roles' },
  { dir: 'case_intake', component: 'CaseIntake', path: '/case-intake' },
  { dir: 'beneficiary_profile', component: 'BeneficiaryProfile', path: '/beneficiary-profile' },
  { dir: 'rescue_admission', component: 'RescueHandover', path: '/rescue-handover' },
  { dir: 'assessment_workspace', component: 'Assessment', path: '/assessment' },
  { dir: 'case_planning', component: 'CasePlanning', path: '/case-planning' },
  { dir: 'support_management', component: 'SupportManagement', path: '/support-management' },
  { dir: 'referral_transfer', component: 'ReferralTransfer', path: '/referral-transfer' },
  { dir: 'reintegration_planning', component: 'Reintegration', path: '/reintegration' },
  { dir: 'follow_up_monitoring', component: 'FollowUp', path: '/follow-up' },
  { dir: 'case_closure_archive', component: 'CaseClosure', path: '/case-closure' },
  { dir: 'reporting_m_e_dashboard', component: 'Reporting', path: '/reporting-me' },
  { dir: 'privacy_audit_compliance', component: 'PrivacyAudit', path: '/privacy-audit' }
];

const srcBase = path.join('..', 'stitch_case_management_dashboard_ui');
const pagesDir = path.join('src', 'pages');

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

let appImports = [];
let appRoutes = [];

for (const mod of modules) {
  const htmlPath = path.join(srcBase, mod.dir, 'code.html');
  if (fs.existsSync(htmlPath)) {
    let content = fs.readFileSync(htmlPath, 'utf8');
    
    // Extract everything inside <main ...> ... </main>
    const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/);
    let mainContent = mainMatch ? mainMatch[1] : `<div className="p-8"><h2>${mod.component}</h2><p>Placeholder content</p></div>`;
    
    // Convert to JSX
    mainContent = mainContent.replace(/class=/g, 'className=');
    mainContent = mainContent.replace(/for=/g, 'htmlFor=');
    // Inline styles: style="width: 45%;" -> style={{ width: '45%' }}
    mainContent = mainContent.replace(/style="([^"]*)"/g, (match, styleStr) => {
      const styles = styleStr.split(';').filter(s => s.trim()).map(s => {
        let [key, val] = s.split(':');
        if(!key || !val) return '';
        key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${key}: '${val.trim()}'`;
      });
      return `style={{ ${styles.join(', ')} }}`;
    });
    
    // Remove script tags
    mainContent = mainContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    // Add Link to Beneficiary Profile from Dashboard
    if (mod.component === 'Dashboard') {
      mainContent = mainContent.replace(/<a class="text-primary hover:underline" href="#">C-2023-0893<\/a>/g, '<Link to="/beneficiary-profile" className="text-primary hover:underline">C-2023-0893</Link>');
      mainContent = mainContent.replace(/<a class="text-primary font-label-caps text-\[11px\] hover:underline" href="#">C-2023-0885<\/a>/g, '<Link to="/beneficiary-profile" className="text-primary font-label-caps text-[11px] hover:underline">C-2023-0885</Link>');
    }

    const jsx = `
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ${mod.component}() {
  // If there are tabs (like in BeneficiaryProfile), we can add basic state
  const [activeTab, setActiveTab] = useState('tab-identity');
  
  return (
    <>
      ${mainContent}
    </>
  );
}
    `.trim();

    // Minor fix for unclosed tags just in case
    let fixedJsx = jsx.replace(/<img([^>]*[^\/])>/g, '<img$1 />')
                      .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
                      .replace(/<br([^>]*[^\/])>/g, '<br$1 />');
                      
    // Replace hardcoded "active" classes in BeneficiaryProfile for tabs with state
    if (mod.component === 'BeneficiaryProfile') {
      fixedJsx = fixedJsx.replace(/class="tab-btn ([^"]*)" data-target="([^"]*)"/g, (match, classes, target) => {
         return `className={\`tab-btn ${classes} \${activeTab === '${target}' ? 'text-primary border-primary bg-surface' : 'text-on-surface-variant border-transparent'}\`} onClick={() => setActiveTab('${target}')}`;
      });
      fixedJsx = fixedJsx.replace(/class="tab-pane active([^"]*)" id="([^"]*)"/g, (match, classes, id) => {
         return `className={\`tab-pane ${classes} \${activeTab === '${id}' ? '' : 'hidden'}\`} id="${id}"`;
      });
      fixedJsx = fixedJsx.replace(/class="tab-pane hidden([^"]*)" id="([^"]*)"/g, (match, classes, id) => {
         return `className={\`tab-pane ${classes} \${activeTab === '${id}' ? '' : 'hidden'}\`} id="${id}"`;
      });
    }

    fs.writeFileSync(path.join(pagesDir, `${mod.component}.jsx`), fixedJsx);
    
    appImports.push(`import ${mod.component} from './pages/${mod.component}';`);
    appRoutes.push(`          <Route path="${mod.path}" element={<${mod.component} />} />`);
  } else {
    console.log('Missing:', htmlPath);
    // Create a dummy placeholder
    const jsx = `
import React from 'react';
export default function ${mod.component}() {
  return <div className="p-8"><h2>${mod.component}</h2><p>Placeholder content</p></div>;
}
    `.trim();
    fs.writeFileSync(path.join(pagesDir, `${mod.component}.jsx`), jsx);
    appImports.push(`import ${mod.component} from './pages/${mod.component}';`);
    appRoutes.push(`          <Route path="${mod.path}" element={<${mod.component} />} />`);
  }
}

const appJsx = `
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
${appImports.join('\n')}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
${appRoutes.join('\n')}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
`.trim();

fs.writeFileSync(path.join('src', 'App.jsx'), appJsx);
console.log('Conversion complete!');
