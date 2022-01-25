const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");

const PORT = 3000;

//ミドルウェア
app.use(express.json());

app.use("/api/v1/task", taskRoute);

app.listen(PORT, () => {
  console.log(`サーバーが起動しました`);
});
