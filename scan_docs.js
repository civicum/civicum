const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');
const outputFilePath = path.join(__dirname, 'aggregated_docs_summary.md');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.md')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const allFiles = getAllFiles(docsDir);
let summaryContent = '# CIVICUM Docs Summary\n\nTotal Files: ' + allFiles.length + '\n\n';

allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(docsDir, file);

    // Extract headers
    const headers = content.match(/^#{1,3}\s+(.*)$/gm) || [];

    // Extract bold principles/rules
    const bolds = content.match(/\*\*([^*]+)\*\*/g) || [];
    const importantBolds = bolds.slice(0, 5).join(', '); // Get up to 5 bold items

    // Find checklists or actionable items
    const actionItems = content.match(/[-*]\s+\[[ x]\]\s+(.*)/g) || [];

    summaryContent += `## File: ${relativePath}\n`;
    if (headers.length > 0) {
        summaryContent += `- **Headers:** ${headers.slice(0, 5).join(' | ').replace(/#/g, '').trim()}\n`;
    }
    if (importantBolds.length > 0) {
        summaryContent += `- **Key terms:** ${importantBolds}\n`;
    }
    if (actionItems.length > 0) {
        summaryContent += `- **Action Items:** ${actionItems.length} found\n`;
    }

    summaryContent += '\n';
});

fs.writeFileSync(outputFilePath, summaryContent);
console.log(`Scan complete. Analyzed ${allFiles.length} files. Output saved to ${outputFilePath}`);
