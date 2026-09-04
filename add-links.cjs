const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix href="#" -> <Link to="/beneficiary-profile">
  content = content.replace(/<a([^>]*)href="#"([^>]*)>(.*?)<\/a>/g, '<Link$1to="/beneficiary-profile"$2>$3</Link>');

  // Specific button replacements
  if (file === 'Dashboard.jsx') {
    content = content.replace(
      /<button className="text-primary font-label-caps text-label-caps hover:underline">VIEW ALL<\/button>/g,
      '<Link to="/beneficiary-profile" className="text-primary font-label-caps text-label-caps hover:underline">VIEW ALL</Link>'
    );
    
    // Replace Case IDs in tables with Links
    content = content.replace(
      /<td className="p-4 font-label-caps text-primary">(C-2023-\d{4})<\/td>/g,
      '<td className="p-4 font-label-caps text-primary"><Link to="/beneficiary-profile" className="hover:underline">$1</Link></td>'
    );
  }

  if (file === 'CaseIntake.jsx') {
    content = content.replace(
      /<button className="px-4 py-2 bg-error text-on-error rounded font-body-sm text-body-sm hover:bg-error\/90 transition-colors shadow-md">Link Profile<\/button>/g,
      '<Link to="/beneficiary-profile" className="px-4 py-2 bg-error text-on-error rounded font-body-sm text-body-sm hover:bg-error/90 transition-colors shadow-md inline-block text-center">Link Profile</Link>'
    );
    // There's a 'Submit for Approval' button or form submit somewhere maybe? Let's check.
  }

  if (file === 'BeneficiaryProfile.jsx') {
    content = content.replace(
      /<button className="flex-1 px-4 py-2 bg-primary hover:bg-primary\/90 text-on-primary font-body-md text-body-md rounded shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 group">([\s\S]*?)Initiate Referral([\s\S]*?)<\/button>/g,
      '<Link to="/referral-transfer" className="flex-1 px-4 py-2 bg-primary hover:bg-primary/90 text-on-primary font-body-md text-body-md rounded shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 group">$1Initiate Referral$2</Link>'
    );
  }

  if (file === 'Assessment.jsx') {
    content = content.replace(
      /<button className="px-6 py-2 rounded-lg font-body-md text-body-md font-semibold bg-primary text-on-primary shadow-sm hover:shadow-md transition-all">([\s\S]*?)SUBMIT FOR APPROVAL([\s\S]*?)<\/button>/g,
      '<Link to="/case-planning" className="px-6 py-2 rounded-lg font-body-md text-body-md font-semibold bg-primary text-on-primary shadow-sm hover:shadow-md transition-all inline-block text-center">$1SUBMIT FOR APPROVAL$2</Link>'
    );
  }
  
  if (file === 'CasePlanning.jsx') {
    content = content.replace(
      /<button className="px-4 py-2 bg-primary text-on-primary rounded font-body-sm text-body-sm hover:bg-primary\/90 transition-colors shadow-sm w-full">([\s\S]*?)Initiate Assessments([\s\S]*?)<\/button>/g,
      '<Link to="/assessment" className="px-4 py-2 bg-primary text-on-primary rounded font-body-sm text-body-sm hover:bg-primary/90 transition-colors shadow-sm w-full inline-block text-center">$1Initiate Assessments$2</Link>'
    );
  }

  if (file === 'CaseClosure.jsx') {
    content = content.replace(
      /<button className="px-6 py-2 rounded-lg bg-primary text-on-primary font-headline-sm text-\[14px\] shadow-sm hover:bg-primary\/90 transition-colors flex items-center gap-2">([\s\S]*?)Submit for Approval([\s\S]*?)<\/button>/g,
      '<Link to="/" className="px-6 py-2 rounded-lg bg-primary text-on-primary font-headline-sm text-[14px] shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-2 inline-block text-center">$1Submit for Approval$2</Link>'
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Linked modules');
