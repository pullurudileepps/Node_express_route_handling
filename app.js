const express = require("express");
const app = express();

app.use(requestLoggerMiddleware);

function requestLoggerMiddleware(req, res, next) {
  // Your code goes here.
  //Question2
  console.log(`${new Date().toISOString()} - ${req.method} request received`)
  next();
} 
//Your code goes here.
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/greet", (req, res) => {
    const name = req.query.name || `Guest`;
    res.send(`Hello, ${name}!`)
})

app.get("/validate-number", (req, res) => {
  // Your code goes here.
  try {
    const number = parseInt(req.query.number)

    if(Number.isInteger(number) && number > 0) {
        res.send("Success!");
    } else {
        res.status(400).send("Invalid positive integer")
    }

  } catch(err) {
    res.status(500).send(err)
  }
});

app.use((req,res) => {
    res.status(401).json({message: "Route not found"})
})


module.exports = app;
