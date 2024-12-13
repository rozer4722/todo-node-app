import {request, response} from "express";
import {todos} from "../data/todolist.js";
/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
const addTodo = (req, res, next) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Todo text is required",
      });
    }

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    todos.push(newTodo);

    res.status(201).json({
      success: true,
      data: todos,
      newData: newTodo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
const deleteTodo = (req, res, next)=>{
  try {
    const {id} = req.params;
    const todo = todos.find((todo) => todo.id === parseInt(id));
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
    const updatedTodos = todos.filter((todo) => todo.id !== parseInt(id));
    res.status(200).json({
      success: true,
      data: updatedTodos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}

/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
const updateTodo = (req, res, next)=>{
  try {
    const {id} = req.params;
    const {text, completed} = req.body;
    const todo = todos.find((todo) => todo.id === parseInt(id));
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
    todo.text = text;
    todo.completed = completed;
    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}

/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
const getTodo = (req, res, next)=>{
  try {
    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    
  }
}

const showTodo = (req, res, next)=>{
  try {
    const {id} = req.params;
    const todo = todos.find((todo) => todo.id === parseInt(id));
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (error) {}
}

export {
  addTodo, deleteTodo, updateTodo, getTodo, showTodo
}