const fs = require('fs');

const profilePath = 'src/pages/Reintegration.jsx';
const jsxPath = 'converted-reintegration.jsx';

let profile = fs.readFileSync(profilePath, 'utf8');
const jsx = fs.readFileSync(jsxPath, 'utf8');

// Find the section header end to insert the tabs
const bentoGridStart = profile.indexOf('{/* Bento Grid Layout */}');

if (bentoGridStart === -1) {
    console.error("Could not find Bento Grid Layout in Reintegration.jsx");
    process.exit(1);
}

const beforeBento = profile.substring(0, bentoGridStart);
let bentoGrid = profile.substring(bentoGridStart);

// We need to find the end of the <div className="grid grid-cols-12 gap-6 w-full"> that wraps the bento grid.
// But the bento grid basically goes until the end of the file except for the closing tags.
// Let's just wrap the bento grid in the `activeTab === 'dashboard'` check.

// First, update state at the top. Wait, it already has:
// const [activeTab, setActiveTab] = useState('tab-identity');
profile = profile.replace("useState('tab-identity')", "useState('dashboard')");

// We'll replace the bento grid part completely and reconstruct it.
// The bento grid part starts at `{/* Bento Grid Layout */}` and ends before `</div>\n    </>\n  );\n}\n`.
const endDivs = profile.lastIndexOf('</div>\n    </>\n  );\n}');
bentoGrid = profile.substring(bentoGridStart, endDivs);

const tabsHtml = `
<div className="flex overflow-x-auto border-b border-outline-variant/30 mb-8 scrollbar-hide">
  <button 
    onClick={() => setActiveTab('dashboard')}
    className={\`tab-btn px-6 py-4 font-headline-sm text-body-lg focus:outline-none flex items-center gap-2 transition-colors \${activeTab === 'dashboard' ? 'text-primary border-b-2 border-primary bg-surface/50' : 'text-on-surface-variant border-b-2 border-transparent hover:text-primary hover:bg-surface-container-low'}\`}
  >
    <span className="material-symbols-outlined text-[20px]">dashboard</span>
    Overview Dashboard
  </button>
  <button 
    onClick={() => setActiveTab('form')}
    className={\`tab-btn px-6 py-4 font-headline-sm text-body-lg focus:outline-none flex items-center gap-2 transition-colors \${activeTab === 'form' ? 'text-primary border-b-2 border-primary bg-surface/50' : 'text-on-surface-variant border-b-2 border-transparent hover:text-primary hover:bg-surface-container-low'}\`}
  >
    <span className="material-symbols-outlined text-[20px]">assignment</span>
    Action Plan & Survey
  </button>
</div>

{activeTab === 'dashboard' && (
  <div className="animate-in fade-in duration-500">
    ${bentoGrid}
  </div>
)}

{activeTab === 'form' && (
  <div className="animate-in fade-in duration-500 bg-surface rounded-xl p-8 shadow-sm border border-outline-variant/30">
    <form className="space-y-2" onSubmit={e => e.preventDefault()}>
      ${jsx}
      <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-outline-variant/30">
        <button className="px-6 py-2 rounded-lg font-body-md text-body-md font-semibold text-secondary hover:bg-surface-variant transition-colors" type="button">Clear</button>
        <button className="px-6 py-2 rounded-lg font-body-md text-body-md font-semibold bg-primary text-on-primary hover:bg-primary/90 shadow-md transition-transform active:scale-95" type="button">Save Draft</button>
      </div>
    </form>
  </div>
)}
`;

const updated = beforeBento + tabsHtml + '\n</div>\n    </>\n  );\n}';

fs.writeFileSync(profilePath, updated);
console.log('Injection successful');
