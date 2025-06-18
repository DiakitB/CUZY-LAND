const fs = require('fs');

// Array of files and their line ranges
const files = [
  { filePath: 'C:/Users/MARCUS/Desktop/github-apps/CUZY-LAND/cuzy-land/server/index.js', startLine: 41, endLine: 74 },
  { filePath: 'C:/Users/MARCUS/Desktop/github-apps/CUZY-LAND/cuzy-land/server/routes/candleRoutes.js', startLine: 5, endLine: 15 },
  { filePath: 'C:/Users/MARCUS/Desktop/github-apps/CUZY-LAND/cuzy-land/server/controllers/candleController.js', startLine: 10, endLine: 30 }, // Replace with actual controller file
];

// Function to extract lines from a file
const extractLines = (filePath, startLine, endLine) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return;
    }

    // Split the file into lines
    const lines = data.split('\n');

    // Extract the specified range of lines
    const extractedLines = lines.slice(startLine - 1, endLine).join('\n');

    // Output the result
    console.log(`Excerpt from ${filePath}, lines ${startLine} to ${endLine}:\n`);
    console.log(extractedLines);
    console.log('----------------------------------------');
  });
};

// Process each file
files.forEach(({ filePath, startLine, endLine }) => {
  extractLines(filePath, startLine, endLine);
});