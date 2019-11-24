// Build Web Server
const express = require("express");
const app = express();
const port = 3000;

// Basic routing
app.get('/', (req,res) => { 
    res.send("Hello, My Server!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Build Backend API for Front-End 
// to get the number of '/getData?number=5',use req.query to get the value of 5
app.get('/getData', (req, res) => {
    let number = req.query.number;
    let r = /^[0-9]*[1-9][0-9]*$/   // positive integer
    if (number === undefined || number === "") {
        res.send("Lack of Parameter");
    } else {
        if(r.test(number) === true) { // to justify positive integer or not
            let sum = 0;
            for( let i = 1; i <= number; i++) { // 1 + 2 + 3 + ... + number
                sum += i;
            }
            res.send(`${sum}`);  // send back the value sum
        } else {
            res.send("Wrong Parameter");
        }
    }
})

// Serving static files in Express, 
// Load the files that are in the 'public' directory
app.use(express.static('public'));

