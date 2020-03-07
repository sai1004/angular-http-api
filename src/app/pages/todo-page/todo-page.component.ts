import { Component, OnInit } from "@angular/core";
import { Todo } from "../../entities/Todo";

@Component({
  selector: "app-todo-page",
  templateUrl: "./todo-page.component.html",
  styleUrls: ["./todo-page.component.css"]
})
export class TodoPageComponent implements OnInit {
  todo: Todo;
  todoItem: string[];
  constructor() {
    this.todo = new Todo();
  }

  ngOnInit(): void {}

  onAddTodo(todoText) {
    console.log("todoText:", todoText);
    if (todoText) {
      this.todoItem += todoText;
      console.log(this.todoItem);
    }
  }
}
