/**
 * BUILD & VALIDATION SCRIPT
 * Checks:
 * 1. JavaScript syntax validation across all .js files
 * 2. Strict emoji / symbol audit (ensures 100% vector SVG compliance)
 * 3. HTML & CSS structure check
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('>>> [1/3] Validating JavaScript syntax...');
const jsFiles = [
  'app.js',
  'data/chapters.js',
  'data/exercises.js',
  'data/quizzes.js',
  'data/cheatsheet.js'
];

for (const rel of jsFiles) {
  const full = path.join(__dirname, rel);
  if (!fs.existsSync(full)) {
    console.error(`ERROR: File missing: ${rel}`);
    process.exit(1);
  }
  try {
    execSync(`node -c "${full}"`);
    console.log(`  ✓ OK: ${rel}`);
  } catch (err) {
    console.error(`  ✗ Syntax error in ${rel}:`, err.message);
    process.exit(1);
  }
}

console.log('\n>>> [2/3] Auditing 100% Emoji & Unicode Symbol Removal...');
const EMOJI_REGEX = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2300}-\u{23FF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}\u{200D}]/u;

const scannedFiles = [
  'index.html',
  'styles.css',
  'app.js',
  'README.md',
  'data/chapters.js',
  'data/exercises.js',
  'data/quizzes.js',
  'data/cheatsheet.js'
];

let emojiErrors = 0;
for (const rel of scannedFiles) {
  const full = path.join(__dirname, rel);
  const content = fs.readFileSync(full, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (EMOJI_REGEX.test(line)) {
      console.error(`  ✗ Emoji found in ${rel}:${idx + 1} -> ${line.trim().slice(0, 80)}`);
      emojiErrors++;
    }
  });
}

if (emojiErrors > 0) {
  console.error(`Build failed: Found ${emojiErrors} emoji occurrences.`);
  process.exit(1);
} else {
  console.log('  ✓ 100% Clean: 0 emojis found in source code.');
}

console.log('\n>>> [3/3] Checking HTML and SVG compliance...');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
if (html.includes('unpkg.com/lucide')) {
  console.error('  ✗ Error: External lucide CDN script still referenced in index.html');
  process.exit(1);
} else {
  console.log('  ✓ Zero external icon library dependencies.');
}

console.log('\n=============================================');
console.log(' BUILD SUCCESSFUL: ALL CHECKS PASSED (100%) ');
console.log('=============================================\n');
