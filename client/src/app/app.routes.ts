import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {TemplateDrivenComponent} from "./template-driven/template-driven.component";
import {ReactiveComponent} from "./reactive/reactive.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'template',
    component: TemplateDrivenComponent,
  },
  {
    path: 'reactive',
    component: ReactiveComponent,
  },
];

