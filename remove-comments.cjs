const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  // replace HTML comments with JSX comments
  content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  fs.writeFileSync(p, content);
});
console.log('Comments removed');
