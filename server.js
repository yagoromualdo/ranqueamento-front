const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;
const app = express();

const publicPath = path.join(__dirname, "/dist/ranquemaneto-front");

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/ranquemaneto-front/index.html"));
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
