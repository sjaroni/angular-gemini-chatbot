import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkeletonComponent } from "./skeleton/skeleton.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SkeletonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-gemini-chatbot';
}
