import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from '../Injections/local-storage.token';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(@Inject(LOCAL_STORAGE) private storage: Storage) {}

  get<T>(key: string): T | null {
    const value = this.storage.getItem(key);
    if (value === null) {
      return null;
    }
    try {
      return JSON.parse(value) as T;
    } catch {
      return null;
    }
  }

  set<T>(key: string, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}
