import * as XLSX from 'xlsx';

// This is a utility function to convert Excel to JSON
// You'll need to run this in a Node.js environment with xlsx package installed
// Run: npm install xlsx

export const excelToJson = (filePath) => {
  try {
    // Read the Excel file
    const workbook = XLSX.readFile(filePath);
    const result = {};
    
    // Process each sheet
    workbook.SheetNames.forEach(sheetName => {
      const worksheet = workbook.Sheets[sheetName];
      // Convert to JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      result[sheetName] = jsonData;
    });
    
    return result;
  } catch (error) {
    console.error('Error converting Excel to JSON:', error);
    return null;
  }
};

// Example usage:
// const jsonData = excelToJson('./path/to/your/excel/file.xlsx');
// console.log(JSON.stringify(jsonData, null, 2));
