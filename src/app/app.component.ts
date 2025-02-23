import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoListComponent } from "./todo/to-do-list/to-do-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
}
