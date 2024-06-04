import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {TestService} from "./test.service";
import {provideHttpClient} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { graphqlProvider } from './graphql.provider';
import {CharactersService} from "./characters.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    TestService,
    CharactersService,
    provideAnimationsAsync(),
    provideHttpClient(),
    graphqlProvider
  ]
};
