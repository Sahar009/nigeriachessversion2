// Script to transform schools2025.tsv to match schools.json structure
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define paths
const sourcePath = join(__dirname, '../data/schools2025.tsv');
const outputPath = join(__dirname, '../data/transformed_schools2025.json');

// Read the source file
const sourceData = readFileSync(sourcePath, 'utf8');

// Parse the TSV data
const lines = sourceData.split('\n').filter(line => line.trim() !== '');

// Initialize the result object with categories
const result = {
  Primary: [],
  Secondary: [],
  Tertiary: []
};

// Current category being processed
let currentCategory = null;
let headers = [];
let skipNextLine = false;

// Process each line
for (let i = 0; i < lines.length; i++) {
  if (skipNextLine) {
    skipNextLine = false;
    continue;
  }

  const line = lines[i].trim();
  if (!line) continue;

  // Check for category headers
  if (line.startsWith('ECOBANK NATIONAL SCHOOLS TEAM CHESS CHAMPIONSHIP 2025 - ')) {
    if (line.includes('PRIMARY')) {
      currentCategory = 'Primary';
      result.Primary.push(createHeaderObject('PRIMARY'));
    } else if (line.includes('SECONDARY')) {
      currentCategory = 'Secondary';
      result.Secondary.push(createHeaderObject('SECONDARY'));
    } else if (line.includes('TERTIARY')) {
      currentCategory = 'Tertiary';
      result.Tertiary.push(createHeaderObject('TERTIARY'));
    }
    
    // Skip the next line as it contains column headers
    skipNextLine = true;
    continue;
    continue;
  } else if (line.includes('ECOBANK NATIONAL SCHOOLS TEAM CHESS CHAMPIONSHIP 2025 - TERTIARY')) {
    currentCategory = 'Tertiary';
    // Only add header if not already added
    if (result[currentCategory].length === 0) {
      result[currentCategory].push(createHeaderObject('TERTIARY'));
    }
    i++; // Skip the next line which contains column headers
    continue;
  }
  
  // Skip empty lines or lines without a current category
  if (!currentCategory || !line) continue;
  
  // Process data rows
  const columns = splitLineIntoTabSeparated(line);
  if (columns.length < 3) continue; // Skip invalid rows
  
  const entry = {
    [`ECOBANK NATIONAL SCHOOLS TEAM CHESS CHAMPIONSHIP 2025 - ${currentCategory.toUpperCase()}`]: parseInt(columns[0]) || columns[0],
    "__EMPTY": columns[1] || '',
    "__EMPTY_1": columns[2] || '',
    "__EMPTY_2": columns[3] || '',
    "__EMPTY_3": columns[4] || '',
    "__EMPTY_4": columns[5] || '',
    "__EMPTY_5": columns[6] || '',
    "__EMPTY_6": columns[7] || '',
    "__EMPTY_7": columns[8] || ''
  };
  
  // Add additional fields for Tertiary
  if (currentCategory === 'Tertiary') {
    entry["__EMPTY_8"] = columns[9] || ''; // Phone Number (Coach/Captain)
    entry["__EMPTY_9"] = columns[10] || ''; // Coach/Sports Director
    entry["__EMPTY_10"] = columns[11] || ''; // Phone Number (Coach/Sports Director)
  }
  
  result[currentCategory].push(entry);
}

// Helper function to create header object
function createHeaderObject(category) {
  const baseHeader = {
    [`ECOBANK NATIONAL SCHOOLS TEAM CHESS CHAMPIONSHIP 2025 - ${category}`]: "S/N",
    "__EMPTY": "School Name",
    "__EMPTY_1": "State",
    "__EMPTY_2": "Player 1",
    "__EMPTY_3": "Player 2",
    "__EMPTY_4": "Player 3",
    "__EMPTY_5": "Player 4",
    "__EMPTY_6": "Player 5",
    "__EMPTY_7": category === 'TERTIARY' ? 'Coach/Captain' : 'Coach/Tutor'
  };
  
  if (category === 'TERTIARY') {
    baseHeader["__EMPTY_8"] = 'Phone Number (Coach/Captain)';
    baseHeader["__EMPTY_9"] = 'Coach/Sports Director';
    baseHeader["__EMPTY_10"] = 'Phone Number (Coach/Sports Director)';
  }
  
  return baseHeader;
}

// Helper function to split line by tabs, handling quoted fields
function splitLineIntoTabSeparated(line) {
  // Split by tabs, but handle cases where tabs might be within quoted fields
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === '\t' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  
  // Add the last field
  result.push(current);
  
  return result;
}

// Write the transformed data to a new file
writeFileSync(outputPath, JSON.stringify(result, null, 2));
console.log(`Transformed data written to ${outputPath}`);
