import {request, response} from "express"
/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
const addTodo = (req, res) => {
  try {
    const {} = req.body;
  } catch (error) {
    
  }
}

/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
const deleteTodo = (req, res) => {
  try {
    const {title, description} = req.body;
  } catch (error) {
    
  }
}

/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
const updateTodo = (req, res) => {
  try {
    const {} = req.body;
  } catch (error) {
    
  }
}

/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
const getTodo = (req, res) => {
  try {
    const {} = req.body;
  } catch (error) {
    
  }
}

export {
  addTodo, deleteTodo, updateTodo, getTodo
}