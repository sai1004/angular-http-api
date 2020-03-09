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

  @Output() toggleCard = new EventEmitter();

  onToggleCard() {
    this.toggleCard.emit(this.todoItem.id);
  }

  markCorrect() {}

  markIncorrect() {}

  editFlash() {}

  deleteFlash() {}
}
