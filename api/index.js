const express = require("express");
const app = express();
const PORT = 3000;
const languages = require("../utils/languages");

app.get("/languages", (_, res) => {
  try {
    res.status(200);
    res.json(languages);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.listen(PORT);
