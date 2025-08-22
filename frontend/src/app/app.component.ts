import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TaskPanelComponent } from './tasks/task-panel/task-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaIconComponent, TaskPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';

  goToGithub() {
    window.open('https://github.com/diego031800', '_blank');
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/diegojosesan/', '_blank');
  }
}
