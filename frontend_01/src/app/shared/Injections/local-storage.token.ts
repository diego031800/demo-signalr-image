import { InjectionToken } from '@angular/core';

export const LOCAL_STORAGE = new InjectionToken<Storage>(
  'Browser Local Storage',
  {
    providedIn: 'root',
    factory: () => {
      // fallback para entornos sin window (SSR, unit tests)
      return typeof window !== 'undefined'
        ? window.localStorage
        : ({
            getItem: () => null,
            setItem: () => void 0,
            removeItem: () => void 0,
            clear: () => void 0,
            key: () => null,
            length: 0,
          } as Storage);
    },
  }
);
