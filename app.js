const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

<<<<<<< HEAD
const PORT = process.env.PORT || 5000;
=======
const PORT = 3000;
>>>>>>> 57492710bb67cb4044622ffd386050f53053debd

//ミドルウェア
app.use(express.static("./public")); //これでHTMLとか読み込める
app.use(express.json());

app.use("/api/v1/tasks", taskRoute);

const start = async () => {
  try {
    await connectDB(process.env.DEV_MONGO_URL || process.env.MONGODB_URI);
    app.listen(PORT, console.log(`サーバーが起動しました`));
  } catch (error) {
    console.log(error);
  }
};

start();

// app.listen(PORT, () => {
//   console.log(`サーバーが起動しました`);
// });
