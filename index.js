const express = require('express'); // Import express
const app = express(); // Create express app
const port = 3000; // Set port
app.use(express.json()); // Enable parsing JSON bodies

var num1 = 5; // Define the first number
var num2 = 10;// Define the second number

app.get('/', (req, res) => {
    //res.send('Hello World!');
    res.send(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
});

app.post('/api/sum', (req, res) => {
    const { num1, num2 } = req.body;
    const sum = num1 + num2;
    res.json({ sum });
}); // Define the POST /api/sum endpoint


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
}); // Make the app listen on port 3000

// Run the server