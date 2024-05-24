// lets import the modules
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

// for requests lets use

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/test", (req, res) =>{

    res.json({Message: "You are warmly welcome to do super super calculations, PLEAS JUST TRUST THE PROCESS!! "});
});


app.post('/startme', (req, res) => {
  const { a, b, operand } = req.body;

  // Check if operand is provided and valid
  if (!operand || (operand !== 'add' && operand !== 'multiply')) {
     res.json({ error: 'Operand must be either "add" or "multiply"' });
  }

  // Check if a and b are provided
  if (a === undefined || b === undefined) {
     res.status(400).json({ error: 'You must enter values for a and b' });
  }

  // Check if a and b are integers
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
     res.status(400).json({ error: 'a and b must be integers' });
  }

  let result;
  if (operand === 'add') {
    result = a + b;
  } else if (operand === 'multiply') {
    result = a * b;
  }

  res.json({ result });
});

// Handle invalid routes
app.use((req, res) => {
  res.json({ error: 'Not found' });
});


// Getting Started with the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Your Server is already running on port ${PORT}`);
});
