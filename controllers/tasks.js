const getAllTasks = (req, res) => {
  res.send("全てのタスクをファイルから取得しました");
};
const createTask = (req, res) => {
  const createTask = req.body;
  // res.send("タスクをファイルから作成しました");
  res.json(createTask);
};
const getSingleTask = (req, res) => {
  const getSingleTask = {
    id: req.params.id,
  };
  // res.send("１つのタスクをファイルから取得しました");
  res.json(getSingleTask);
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
