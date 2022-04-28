var express = require("express");
const res = require("express/lib/response");
const items = require("../../src/items");
const { getTasks, patchTasksId } = require("../../src/tasks");
const task = require("../../src/tasks.js");
var router = express.Router();

/*タスクを登録するルーティング */
router.post("/tasks", async function (req, res, next) {
  console.log(req.body);
  const postTasks = await task.postTasks(req.body);
  res.send(postTasks);
});

/*  タスク一覧を取得するルーティング */
router.get("/tasks", async function (req, res, next) {
  const TaskList = await task.getTasks();
  res.send(TaskList);
});

/*１件の商品情報を取得するルーティング */
router.get("/items/:id", function (req, res, next) {
  const item = items.getItem(req.params.id);
  res.send(item);
});

/* タスクを1件取得するルーティング */
router.get("/tasks/:id", async function (req, res, next) {
  const getTaskID = await getTasks.getTasksID(req.params.id);
  res.send(getTasksID);
});

/*タスクを1件更新するルーティング　*/
router.patch("/tasks/:id", async function (req, res, next) {
  const deletetasksId = await getTasksID(req.params.id, req.body);
  res.send(patchTasksId);
});

/*　タスク一覧を削除するルーティング */
router.delete("/tasks/:id", async function (req, res, next) {
  const deleteTasksId = await task.deleteTasksId(req.params.id);
  res.send(deleteTasksId);
});

module.exports = router;
