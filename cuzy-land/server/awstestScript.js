import fs from 'fs';
import path from 'path';

const allowedFolders = [ 'CUZY-LAND','cuzy-land','client', 'server', 'public', 'src'];
const allowedFiles = [
  'cuzy-land',
  'package.json',
  'Procfile',
  'config.env',
  '.gitignore',
  'README.md',
  'index.html',
  'tailwind.config.cjs',
  'vite.config.js',
  'eslint.config.js',
  'postcss.config.cjs',
];

function generateTree(dir, depth = 0) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const isDirectory = fs.statSync(fullPath).isDirectory();

    // Filter folders and files
    if (isDirectory && allowedFolders.includes(file)) {
      console.log(`${'│   '.repeat(depth)}├── ${file}/`);
      generateTree(fullPath, depth + 1);
    } else if (!isDirectory && allowedFiles.includes(file)) {
      console.log(`${'│   '.repeat(depth)}├── ${file}`);
    }
  });
}

// Use the correct path to your project folder
generateTree('C:/Users/MARCUS/Desktop/Blaky/CUZY-LAND/cuzy-land');