const todoItems = require('../db/todo.json');
const { PrismaClient } = require('@prisma/client');

var db = new PrismaClient();

const getTodos = async (req, res) => {
  const todos = await db.todo.findMany({});
  res.status(200).json(todos);
};

const addTodo = (req, res) => {
  res.status(200).json(todoItems);
};

module.exports = { getTodos, addTodo };
