import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  todos: string[];
  newValue: string = "";

  addItem(name) {
    this.todos.push(name);
    this.newValue = "";
  }

  onElementDeleted(element) {
    let index = this.todos.indexOf(element);
    this.todos.splice(index, 1);
  }

  ngOnInit() {
    this.todos = ["Dance in the rain", "Sing in the shower", "Dream as a child"];
  }
}
