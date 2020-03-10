import { Injectable } from "@angular/core";
import { Todo } from "../../entities/Todo";
import { BehaviorSubject } from "rxjs";

function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
}

@Injectable({
  providedIn: "root"
})
export class TodoService {
  // Some Dummy Data
  todos: Todo[] = [
    {
      id: getRandomNumber(),
      title: "Meeting At 6:00PM ",
      description: "Need To Setup The System For Meeting",
      show: false
    },
    {
      id: getRandomNumber(),
      title: "Pay Bills",
      description: "Due Date is Approching, Need to pay it today",
      show: false
    },
    {
      id: getRandomNumber(),
      title: "Small Work",
      description: "Work That is in Pending Need To Complete by today!",
      show: false
    }
  ];

  todos$ = new BehaviorSubject<Todo[]>(this.todos);

  constructor() {}

  addTodo(todo: { title: string; description: string }) {
    this.todos = [
      ...this.todos,
      {
        ...todo,
        show: false,
        id: getRandomNumber()
      }
    ];
    this.todos$.next(this.todos);
  }

  deleteTodo(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos = [
      ...this.todos.slice(0, index),

      ...this.todos.slice(index + 1)
    ];
    this.todos$.next(this.todos);
  }

  doneTodo() {}

  updateTodo() {}

  getTodo() {}
}
