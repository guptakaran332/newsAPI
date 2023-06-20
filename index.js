const express = require("express");
require("dotenv").config();

const app = express();
const port = 3000;
const articlesRouter = require("./routes/articles");

app.use("/api", articlesRouter); // Mount the articles route under '/api'

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
