import { Routes } from '@angular/router';
import { Single } from './single/single';
import { ComponentTree } from './component-tree/component-tree';

export const routes: Routes = [
  { path: 'single', component: Single },
  { path: 'component-tree', component: ComponentTree },
  { path: '', pathMatch: 'full', redirectTo: '/single' },
  { path: '**', redirectTo: '/' }
];
