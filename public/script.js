const tasksDOM = document.querySelector(".tasks");
const loadingDOM = document.querySelector(".loading-text");
const formDOM = document.querySelector(".task-form");
const taskInputDOM = document.querySelector(".task-input");
const formAlertDOM = document.querySelector(".form-alert");

// /api/v1/tasksからタスクを読み込む
const showTasks = async () => {
  loadingDOM.style.visibility = "visible";
  try {
    //自作のAPIを叩く
    const { data: tasks } = await axios.get("/api/v1/tasks");
    //タスクが１つもないとき
    if (tasks.length < 1) {
      tasksDOM.innerHTML = '<h5 class="empty-list">タスクがありません</h5>';
      loadingDOM.style.visibility = "hidden";
      return;
    }
    // console.log(tasks);

    //タスクを出力
    const allTasks = tasks
      .map((task) => {
        //console.log(task.name);
        const { completed, _id: taskID, name } = task;
        return `<div class="single-task ${completed && "task-completed"}">
      <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
      <div class="task-links">

      <!-- edit link -->
<a href="task.html?id=${taskID}"  class="edit-link">
<i class="fas fa-edit"></i>
</a>

<!-- delete btn -->
<button type="button" class="delete-btn" data-id="${taskID}">
<i class="fas fa-trash"></i>
</button>
</div>
</div>`;
      })
      .join("");
    tasksDOM.innerHTML = allTasks;
  } catch (err) {
    tasksDOM.innerHTML =
      '<h5 class="empty-list">エラーです。もう一度やり直してください</h5>';
  }
  loadingDOM.style.visibility = "hidden";
};

// showTasks(); //最初から全タスクを取得
