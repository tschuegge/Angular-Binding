import { Routes } from '@angular/router';
import { ComponentTree } from './component-tree/component-tree';
import { PropertyBinding } from './property-binding/property-binding';
import { EventBinding } from './event-binding/event-binding';

export const routes: Routes = [
  { path: 'property-binding', component: PropertyBinding },
  { path: 'event-binding', component: EventBinding },
  { path: 'component-tree', component: ComponentTree },
  { path: '', pathMatch: 'full', redirectTo: '/property-binding' },
  { path: '**', redirectTo: '/' }
];
