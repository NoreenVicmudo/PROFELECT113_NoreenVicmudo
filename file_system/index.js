import fs from 'fs'

fs.readFile('InvalidFile.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error", err);
        return;
    }
    console.log("File content is: ", data);
});