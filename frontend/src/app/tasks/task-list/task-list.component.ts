import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-list',
  imports: [FaIconComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() tasks: Array<{ id: number; title: string; description: string }> =
    [];
  selectedTask: { id: number; title: string; description: string } | null =
    null;
}
