const express = require('express');
const todoCtrl = require('../controllers/todo.controller');

const router = express.Router();

router.get('/api/v1/todos', todoCtrl.getTodos);
router.post('/api/v1/todos', todoCtrl.addTodo);

module.exports = router;
