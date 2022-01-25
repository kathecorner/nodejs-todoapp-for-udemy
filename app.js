const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");

const PORT = 3000;
require("./db/connect");

//ミドルウェア
app.use(express.json());

app.use("/api/v1/tasks", taskRoute);

app.listen(PORT, () => {
  console.log(`サーバーが起動しました`);
});
