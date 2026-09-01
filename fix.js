const fs = require('fs');
const path = require('path');
const files = ['Reporting.jsx', 'ReferralTransfer.jsx', 'Reintegration.jsx', 'CasePlanning.jsx', 'CaseClosure.jsx'];

files.forEach(f => {
  const p = path.join('src/pages', f);
  if (fs.existsSync(p)) {
    let c = fs.readFileSync(p, 'utf8');
    c = c.replace(/fontVariationSettings:\s*''FILL'\s*1'/g, 'fontVariationSettings: "\\'FILL\\' 1"');
    fs.writeFileSync(p, c);
  }
});
console.log('Fixed');
