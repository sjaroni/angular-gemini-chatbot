import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GeminiService } from './gemini.service';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SkeletonComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-gemini-chatbot';
  prompt: string = '';
  geminiService: GeminiService = inject(GeminiService);
  chatHistory: any[] = [];
  loading: boolean = false;

  constructor() {
    this.geminiService.getMessageHistory().subscribe((res) => {
      if (res) {
        this.chatHistory.push(res);
      }
    });
  }

  async sendData() {
    if (this.prompt) {
      this.loading = true;
      const data = this.prompt;
      this.prompt = '';
      await this.geminiService.generateText(data);
      this.loading = false;
    }
  }

  formatText(text: string) {
    const result = text.replaceAll('*', '');
    return result;
  }

}
