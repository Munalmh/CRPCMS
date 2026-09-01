const fs = require('fs');
const path = require('path');

const srcHtml = fs.readFileSync('c:/Users/Huawei/Downloads/stitch_case_management_dashboard_ui/stitch_case_management_dashboard_ui/user_role_management/code.html', 'utf8');

// Extract the content inside <main> and the slide-over drawer
let match = srcHtml.match(/<header class="flex items-center justify-between[\s\S]*?id="drawer-backdrop">.*?<\/div>/);
if (!match) {
    console.error("Could not extract content");
    process.exit(1);
}
let content = match[0];

// Convert to JSX
let jsx = content
    .replace(/class=/g, 'className=')
    .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
    .replace(/checked=""/g, 'defaultChecked')
    .replace(/disabled=""/g, 'disabled')
    // Fix any unclosed img/input if they don't have />
    .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
    .replace(/<input([^>]*[^\/])>/g, '<input$1 />');

const reactComponent = `import React, { useState } from 'react';

export default function UserManagement() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-background">
      ${jsx.replace(/js-open-drawer/g, '').replace(/id="permissions-drawer"/, 'id="permissions-drawer" className={`fixed inset-y-0 right-0 w-[480px] bg-surface shadow-[-4px_0_24px_rgba(0,0,0,0.1)] z-50 transform transition-transform duration-300 ease-in-out flex flex-col border-l border-outline-variant/30 ${!isDrawerOpen ? "translate-x-full" : "translate-x-0"}`}').replace(/id="drawer-backdrop".*?<\/div>/, '{isDrawerOpen && <div className="fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-40 transition-opacity opacity-100" id="drawer-backdrop" onClick={() => setIsDrawerOpen(false)}></div>}')}
    </div>
  );
}
`;

fs.writeFileSync('src/pages/UserManagement.jsx', reactComponent);
console.log('UserManagement.jsx rewritten');
