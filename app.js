const express = require("express");
const app = express();
// Your code goes here.

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/greet", (req, res) => {
    const name = req.query.name || `Guest`;
    res.send(`Hello, ${name}!`)
})

app.use((req,res) => {
    res.status(401).json({message: "Route not found"})
})


module.exports = app;
