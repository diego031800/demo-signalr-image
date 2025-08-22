import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faSun,
  faMoon,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

function initFontAwesome(library: FaIconLibrary) {
  return () =>
    library.addIcons(faSun, faMoon, faGithub, faLinkedin, faChevronRight);
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
  ],
};
