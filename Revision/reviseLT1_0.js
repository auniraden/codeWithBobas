//How to read from different file
const fs = require('units.txt');

// Read the content of the file
fs.readFile('units.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Split the content by newlines to get an array of lines
    const lines = data.split('\n');

    // Extract integers from each line and display them
    lines.forEach(line => {
        const integers = line.match(/\d+/g); // Extract integers using regular expression
        if (integers) {
            integers.forEach(integer => {
                console.log(parseInt(integer)); // Display each integer
            });
        }
    });
});
