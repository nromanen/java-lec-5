const fs = require('fs');
const path = require('path');

const files = ['Part1.js', 'Part2.js', 'Part3.js', 'Part4.js', 'Part5.js', 'Part6.js'];

files.forEach(file => {
  const filePath = path.join(__dirname, 'src', file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${file}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  let commentsCount = 0;
  let apostrophesCount = 0;
  
  // Replace //
  const original = content;
  content = content.replace(/>(\s*)(\/\/.+?)</g, (match, space, comment) => {
    commentsCount++;
    return `>{${space}'${comment}'}<`;
  });
  
  // Replace /* */
  content = content.replace(/>\s*(\/\*[\s\S]*?\*\/)\s*</g, (match, comment) => {
    commentsCount++;
    return `>{'${comment}'}<`;
  });

  // Replace apostrophes ' on \' inside single quotes
  content = content.replace(/'([^'\\]*(\\.[^'\\]*)*)'/g, (match) => {
    const inner = match.slice(1, -1);
    if (inner.includes("'") && !inner.includes("\\'")) {
      apostrophesCount++;
      const fixed = inner.replace(/(?<!\\)'/g, "\\'");
      return `'${fixed}'`;
    }
    return match;
  });
  
  const totalChanges = commentsCount + apostrophesCount;
  
  if (totalChanges > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed ${file}:`);
    if (commentsCount > 0) console.log(`   - ${commentsCount} comments wrapped`);
    if (apostrophesCount > 0) console.log(`   - ${apostrophesCount} apostrophes escaped`);
  } else {
    console.log(`✔️  ${file} - no changes needed`);
  }
});

console.log('\n🎉 Done! Run "npm run lint" or "npx eslint src/ " to verify.');
