const fs = require('fs');

const profilePath = 'src/pages/BeneficiaryProfile.jsx';
const jsxPath = 'converted-profile.jsx';

const profile = fs.readFileSync(profilePath, 'utf8');
const jsx = fs.readFileSync(jsxPath, 'utf8');

const regex = /(<div className="tab-pane active flex flex-col gap-8" id="tab-identity">)[\s\S]*?(<\/div>\s*<div className="tab-pane hidden flex flex-col gap-6" id="tab-protection">)/;

const updated = profile.replace(regex, `$1\n<form className="space-y-2" onSubmit={e => e.preventDefault()}>\n${jsx}\n<div className="flex justify-end gap-4 mt-8 pt-6 border-t border-outline-variant/30"><button className="px-6 py-2 rounded-lg font-body-md text-body-md font-semibold text-secondary hover:bg-surface-variant transition-colors" type="button">Clear</button><button className="px-6 py-2 rounded-lg font-body-md text-body-md font-semibold bg-primary text-on-primary hover:bg-primary/90 shadow-md transition-transform active:scale-95" type="button">Save Draft</button></div>\n</form>\n$2`);

fs.writeFileSync(profilePath, updated);
console.log('Injection successful');
