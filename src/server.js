const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to my awesome app!");
})

app.listen(3000, () => {
    console.log("server listening to port 3000")
})