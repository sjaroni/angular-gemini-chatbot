import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { GeminiService } from './gemini.service';
import { SkeletonComponent } from "./skeleton/skeleton.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SkeletonComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'angular-gemini-chatbot';
  prompt: string = '';
  geminiService: GeminiService = inject(GeminiService);

  sendData() {
    if(this.prompt) {      
      this.geminiService.generateText(this.prompt);
      console.log(this.prompt);      
    }
  }

}
