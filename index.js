const express = require("express");
const app = express();
const port = 4000;
app.get("/", (req, res) => res.json({ hello: "world" }));
app.listen(port, console.log(`app is running in port ${port}`));
