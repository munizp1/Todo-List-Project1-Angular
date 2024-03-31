import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [
    new Todo(1, 'Learn Angular', false),
    new Todo(2, 'Build a Todo App', false),
  ];

  newTodoTitle: string = ''; // Add this line

  constructor() { }

  ngOnInit(): void {
  }

  onAddTodo(todoTitle: string) {
    const todoId = this.todos.length + 1;
    this.todos.push(new Todo(todoId, todoTitle, false)); // Adjust this line to include 'false' for the completed status
  }

  onToggleTodo(todoId: number) {
    const todo = this.todos.find(todo => todo.id === todoId);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  onDeleteTodo(todoId: number) {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }
}
