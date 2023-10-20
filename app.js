const express = require('express');
const todoRoutes = require('./routes/todo.route');
const categoryRoute = require('./routes/category.route');
//Create the express app
const app = express();

//create port
const port = 4500;

//create a route for our app
app.use(express.json());
//parse

app.use(todoRoutes);
app.use(categoryRoute);

//spin up our server to listen in our port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
