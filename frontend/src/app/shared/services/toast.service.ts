import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Toast } from '../../tasks/models';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private queue$ = new Subject<Toast>();
  private counter = 0;

  get stream() {
    return this.queue$.asObservable();
  }

  show(
    message: string,
    type: Toast['type'] = 'info',
    duration: number = 3000
  ): void {
    this.queue$.next({ id: this.counter++, message, type, duration });
  }
}
