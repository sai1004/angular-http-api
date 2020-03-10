import { Component, OnInit, ViewChild } from "@angular/core";
import { Todo } from "../../entities/Todo";
import { TodoService } from "./todo.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-todo-page",
  templateUrl: "./todo-page.component.html",
  styleUrls: ["./todo-page.component.css"]
})
export class TodoPageComponent implements OnInit {
  @ViewChild("todoForm", { static: false }) todoForm: NgForm;

  editing = false;
  editingId;

  todo = {
    title: "",
    description: ""
  };

  todos$;
  todos;

  constructor(private _todoService: TodoService) {
    this.todos$ = this._todoService.todos$;
  }

  ngOnInit(): void {}

  onAdd(): void {
    this._todoService.addTodo(this.todo);
    console.log(this.todo);
    this.onClear();
  }

  onClear() {
    this.todo = {
      title: "",
      description: ""
    };
    this.todoForm.reset();
  }

  onUpdate() {
    this.handleCancel();
  }

  handleCancel() {
    this.onClear();
  }

  deleteTodo(id: number) {
    console.log("parent:", id);
    this._todoService.deleteTodo(id);
  }
}
