// var express = require('express');
import { Router } from "express";
// import {
//   addTodo,
//   deleteTodo,
//   updateTodo,
//   getTodo,
// } from "../controllers/todo.controller";
const router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Ok");
});
export default router;
// module.exports = router;
