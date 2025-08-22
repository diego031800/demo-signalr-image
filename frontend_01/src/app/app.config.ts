import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function initFontAwesome(library: FaIconLibrary) {
  return () => library.addIcons(faSun, faMoon, faGithub, faLinkedin);
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(FontAwesomeModule),
    {
      provide: APP_INITIALIZER,
      useFactory: initFontAwesome,
      deps: [FaIconLibrary],
      multi: true,
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
  ],
};
