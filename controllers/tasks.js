const getAllTasks = (req, res) => {
  res.send("全てのタスクをファイルから取得しました");
};
const createTask = (req, res) => {
  res.send("タスクをファイルから作成しました");
};
const getSingleTask = (req, res) => {
  res.send("１つのタスクをファイルから取得しました");
};
const updateTask = (req, res) => {
  res.send("タスクをファイルから更新しました");
};
const deleteTask = (req, res) => {
  res.send("タスクをファイルから削除しました");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
