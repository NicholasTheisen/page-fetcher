const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else if (response.statusCode !== 200) {
    console.log('Invalid URL. Status Code:', response.statusCode);
  } else {
    fs.writeFile(filepath, body, (err) => {
      if (err) {
        console.log('Error writing to file:', err);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${filepath}`);
      }
    });
  }
});