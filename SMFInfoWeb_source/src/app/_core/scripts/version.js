const fs = require('fs');
const path = require('path');

// The data you want to write to the JSON file
const myData = { data: (new Date()).toISOString() };

// Define the filename and path.  It's good practice to use path.join
// to ensure cross-platform compatibility (Windows, macOS, Linux).
const filename = 'version.json';
const filePath = './public/data/version.json'; // Saves to /public/data/b.json

// Convert the data to a JSON string.  The 'null, 2' arguments
// format the JSON for readability (2-space indentation).
const jsonData = JSON.stringify(myData, null, 2);

// Use fs.writeFileSync to write the JSON string to the file.
try {
  fs.writeFileSync(filePath, jsonData, 'utf8'); // Specify utf8 encoding
  console.log(`Successfully wrote data to ${filePath}`);
} catch (error) {
  console.error(`Error writing to ${filePath}:`, error);
}
