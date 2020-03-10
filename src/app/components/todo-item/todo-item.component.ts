import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../../entities/Todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  panelOpenState = false;

  @Input()
  todoItem: Todo = {
    id: 0,
    title: "",
    description: "",
    show: false
  };

  constructor() {}

  ngOnInit(): void {}

  @Output() editTodo = new EventEmitter();

  @Output() delete = new EventEmitter();

  markCorrect() {}

  markIncorrect() {}

  editFlash() {}

  deleteTodo(id: number) {
    let req = confirm("Are you sure, you want to delete it?");
    if (req == true) {
      this.delete.emit(id);
    } else {
      return false;
    }
  }
}
