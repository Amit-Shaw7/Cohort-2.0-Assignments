/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    if (index > this.todos.length) {
      return;
    }
    this.todos.splice(index, 1);
  }

  update(index, updatedTodo) {
    if (index >= this.todos.length) {
      return;
    }
    this.todos[index] = updatedTodo;
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    return this.todos[index] || null;
  }

  clear() {
    this.todos = [];
  }
}

let todoList = new Todo();
todoList.add("Task 1");
todoList.add("Task 2");
todoList.add("Task 2");
todoList.update(1, 'Updated Task 2');

todoList.update(3, 'Invalid Task');

console.log(todoList.get(3));


module.exports = Todo;
