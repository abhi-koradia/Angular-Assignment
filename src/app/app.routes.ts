import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent) },
  { path: 'api-data', loadComponent: () => import('./pages/api-data/api-data.component').then((m) => m.ApiDataComponent) },
  { path: 'form', loadComponent: () => import('./pages/form/form.component').then((m) => m.FormComponent) },
];
