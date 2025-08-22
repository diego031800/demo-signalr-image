import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  NgZone,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '../task-list/task-list.component';

const IMG_TYPES = [
  'image/png',
  'image/jpg',
  'image/jpeg',
  'image/gif',
  'image/webp',
];

@Component({
  selector: 'app-task-panel',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  templateUrl: './task-panel.component.html',
  styleUrl: './task-panel.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskPanelComponent {
  private readonly zone = inject(NgZone);
  private readonly cdr = inject(ChangeDetectorRef);

  @Output() fileSelected = new EventEmitter<File>();
  @ViewChild('fileInput', { static: false })
  private fileInput!: ElementRef<HTMLInputElement>;

  isDragging = false;
  isLoading = false;
  previewSrc: string | null = null;

  tasks = [];

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.handleFileInput(file);
    }
  }

  handleFileInput(file: File): void {
    if (!IMG_TYPES.includes(file.type)) {
      console.error('Invalid file type:', file.type);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      // 5 MB limit
      console.error('File size exceeds limit:', file.size);
      return;
    }
    this.isLoading = true;
    const reader = new FileReader();
    reader.onload = () => {
      this.previewSrc = reader.result as string;
      this.isLoading = false;
      this.fileInput.nativeElement.value = '';
      this.cdr.markForCheck();
      this.zone.run(() => {});
    };
    reader.onerror = (error) => {
      this.zone.run(() => {
        console.error('Error reading file:', error);
        this.isLoading = false;
        this.cdr.markForCheck();
      });
    };
    reader.readAsDataURL(file);
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    const file = event.dataTransfer?.files[0];
    if (file) {
      this.handleFileInput(file);
    }
  }
}
