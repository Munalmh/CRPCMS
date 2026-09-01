const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix Tables (add min-w-[800px] or min-w-[1000px])
  content = content.replace(/<table className="w-full text-left([^"]*)">/g, '<table className="w-full text-left$1 min-w-[800px]">');
  content = content.replace(/<table className="w-full text-left border-collapse">/g, '<table className="w-full text-left border-collapse min-w-[800px]">');
  // Avoid double replacing
  content = content.replace(/min-w-\[800px\] min-w-\[800px\]/g, 'min-w-[800px]');

  // Fix 2-column forms to stack on mobile
  content = content.replace(/grid grid-cols-2 gap-([0-9xy]+)/g, 'grid grid-cols-1 md:grid-cols-2 gap-$1');
  
  // Fix tabs to scroll horizontally
  content = content.replace(/<div className="flex border-b border-outline-variant\/30 bg-surface-container-lowest">/g, '<div className="flex overflow-x-auto border-b border-outline-variant/30 bg-surface-container-lowest scrollbar-hide">');
  content = content.replace(/<div className="flex border-b border-surface-variant">/g, '<div className="flex overflow-x-auto border-b border-surface-variant scrollbar-hide">');

  // Fix specific CaseIntake absolute alert
  if (file === 'CaseIntake.jsx') {
    content = content.replace(
      /className="absolute top-4 right-4 z-50 max-w-md w-full/g,
      'className="absolute top-4 left-4 right-4 md:left-auto md:right-4 z-50 w-[calc(100%-2rem)] md:w-full md:max-w-md'
    );
    content = content.replace(
      /<div className="flex gap-3">[\s\n]*<button className="px-4 py-2 bg-error/g,
      '<div className="flex flex-col sm:flex-row gap-3">\n<button className="px-4 py-2 bg-error'
    );
  }

  // Fix UserManagement Breadcrumb
  if (file === 'UserManagement.jsx') {
    content = content.replace(
      /<div className="flex items-center gap-2 text-on-surface-variant">/g,
      '<div className="flex flex-wrap items-center gap-2 text-on-surface-variant">'
    );
    // User management specific long table
    content = content.replace(/min-w-\[800px\]/g, 'min-w-[1000px]');
  }

  // Fix BeneficiaryProfile
  if (file === 'BeneficiaryProfile.jsx') {
    content = content.replace(
      /<div className="flex items-center gap-2 text-on-surface-variant">/g,
      '<div className="flex flex-wrap items-center gap-2 text-on-surface-variant">'
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Fixed responsive utility classes across all pages.');
