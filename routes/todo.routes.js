import { Router } from "express";
import {
  addTodo,
  deleteTodo,
  updateTodo,
  getTodo,
  showTodo,
} from "../controllers/todo.controller.js";
const router = Router();

router.post("/create", function (req, res, next) {
  addTodo(req, res);
});
router.get("/all", function (req, res, next) {
  getTodo(req, res);
});
router.get("/all/:id", function (req, res, next) {
  showTodo(req, res);
});
router.delete("/:id", function (req, res, next) {
  deleteTodo(req, res)
});
router.patch("/:id", function (req, res, next) {
  updateTodo(req, res)
});
export default router;
